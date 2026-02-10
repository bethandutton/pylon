/**
 * Component Parser — Extracts structural specs from Pylon SCSS component files.
 *
 * Parses BEM classes, modifiers, states, layout properties, token references,
 * and dimensions from each component SCSS file.
 */

export interface ComponentSpec {
  name: string;
  baseClass: string;
  elements: ElementSpec[];
  variants: VariantSpec[];
  sizes: SizeSpec[];
  flags: FlagSpec[];
  states: string[];
  layout: LayoutSpec;
  cornerRadius: string | null;
  textStyle: string | null;
}

export interface ElementSpec {
  name: string;
  class: string;
}

export interface VariantSpec {
  name: string;
  class: string;
  fill: string | null;
  textColor: string | null;
  stroke: string | null;
}

export interface SizeSpec {
  name: string;
  class: string;
  height: number | null;
  paddingV: number | null;
  paddingH: number | null;
  textStyle: string | null;
}

export interface FlagSpec {
  name: string;
  class: string;
}

export interface LayoutSpec {
  display: string | null;
  flexDirection: string | null;
  alignItems: string | null;
  justifyContent: string | null;
  gap: number | null;
}

const SIZE_NAMES = ['sm', 'md', 'lg', 'xl', 'xs'];
const KNOWN_STATES = [
  'data-hovered',
  'data-pressed',
  'data-selected',
  'data-disabled',
  'data-focus-visible',
  'data-invalid',
  'data-focused',
  'data-entering',
  'data-exiting',
  'data-open',
  'data-placement',
  'data-indeterminate',
];

/** Convert a file name like _button.scss to a display name like Button. */
export function fileNameToDisplayName(fileName: string): string {
  return fileName
    .replace(/^_/, '')
    .replace(/\.scss$/, '')
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

/** Extract the base BEM class name from SCSS content. */
function extractBaseClass(content: string): string | null {
  // Match the first .pylon-xxx { declaration (not an element or modifier)
  const match = content.match(/^\.(pylon-[a-z][a-z0-9-]*)\s*\{/m);
  return match ? match[1] : null;
}

/** Extract all base-level classes (e.g. .pylon-field, .pylon-input, .pylon-textarea). */
function extractAllBaseClasses(content: string): string[] {
  const matches = content.matchAll(/^\.(pylon-[a-z][a-z0-9-]*)\s*\{/gm);
  return [...matches].map(m => m[1]);
}

/** Extract BEM elements (&__name). */
function extractElements(content: string, baseClass: string): ElementSpec[] {
  const elements: ElementSpec[] = [];
  const seen = new Set<string>();
  const regex = /&__([a-z][a-z0-9-]*)\s*\{/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(content)) !== null) {
    const name = match[1];
    if (!seen.has(name)) {
      seen.add(name);
      elements.push({
        name,
        class: `${baseClass}__${name}`,
      });
    }
  }

  return elements;
}

/** Extract BEM modifiers (&--name), classifying as variant, size, or flag. */
function extractModifiers(content: string): {
  variants: VariantSpec[];
  sizes: SizeSpec[];
  flags: FlagSpec[];
} {
  const variants: VariantSpec[] = [];
  const sizes: SizeSpec[] = [];
  const flags: FlagSpec[] = [];
  const seen = new Set<string>();

  const regex = /&--([a-z][a-z0-9-]*)\s*\{/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(content)) !== null) {
    const name = match[1];
    if (seen.has(name)) continue;
    seen.add(name);

    const modifierStart = match.index;
    const modifierBlock = extractBraceBlock(content, modifierStart + match[0].length - 1);

    if (SIZE_NAMES.includes(name)) {
      sizes.push(parseSizeModifier(name, modifierBlock));
    } else if (hasColorProperties(modifierBlock)) {
      variants.push(parseVariantModifier(name, modifierBlock));
    } else {
      flags.push({ name, class: `--${name}` });
    }
  }

  return { variants, sizes, flags };
}

/** Extract a brace-delimited block starting at the opening brace. */
function extractBraceBlock(content: string, openIndex: number): string {
  let depth = 0;
  let i = openIndex;

  if (content[i] === '{') {
    depth = 1;
    i++;
  }

  const start = i;
  while (i < content.length && depth > 0) {
    if (content[i] === '{') depth++;
    else if (content[i] === '}') depth--;
    if (depth > 0) i++;
  }

  return content.substring(start, i);
}

/** Check if a block has color-related properties (background, color, border-color). */
function hasColorProperties(block: string): boolean {
  return /(?:background|(?<![a-z-])color|border-color)\s*:/.test(block);
}

/** Parse a variant modifier block for fill, textColor, stroke. */
function parseVariantModifier(name: string, block: string): VariantSpec {
  return {
    name,
    class: `--${name}`,
    fill: extractTokenRef(block, 'background'),
    textColor: extractTokenRef(block, /(?<![a-z-])color/),
    stroke: extractTokenRef(block, 'border-color'),
  };
}

/** Parse a size modifier block for height, padding, textStyle. */
function parseSizeModifier(name: string, block: string): SizeSpec {
  const height = extractPxValue(block, 'height');
  const padding = extractPaddingValues(block);
  const textStyle = extractTextStyle(block);

  return {
    name,
    class: `--${name}`,
    height,
    paddingV: padding.vertical,
    paddingH: padding.horizontal,
    textStyle,
  };
}

/** Extract a token reference from a property value. */
function extractTokenRef(block: string, property: string | RegExp): string | null {
  const propPattern = typeof property === 'string'
    ? property.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    : property.source;

  // Match direct property at the start of lines (not nested in state blocks)
  const lines = block.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    const propMatch = trimmed.match(new RegExp(`^${propPattern}\\s*:\\s*(.+?)\\s*;`));
    if (propMatch) {
      const value = propMatch[1];
      // Extract $color-xxx reference
      const colorRef = value.match(/\$(color-[a-z-]+)/);
      if (colorRef) return colorRef[1];
      // Check for literal values
      if (value === 'transparent') return 'transparent';
      if (value.startsWith('#')) return value;
      return value;
    }
  }
  return null;
}

/** Extract a px numeric value from a property. */
function extractPxValue(block: string, property: string): number | null {
  const regex = new RegExp(`${property}\\s*:\\s*(\\d+)px`);
  const match = block.match(regex);
  return match ? parseInt(match[1], 10) : null;
}

/** Extract padding values — handles 2-value and 4-value shorthand with map.get(). */
function extractPaddingValues(block: string): { vertical: number | null; horizontal: number | null } {
  const match = block.match(/padding\s*:\s*(.+?)\s*;/);
  if (!match) return { vertical: null, horizontal: null };

  const value = match[1];
  // map.get($spacing, N) map.get($spacing, M) → N*4, M*4
  const spacingRefs = [...value.matchAll(/map\.get\(\$spacing,\s*(\d+)\)/g)];

  if (spacingRefs.length === 2) {
    return {
      vertical: parseInt(spacingRefs[0][1], 10) * 4,
      horizontal: parseInt(spacingRefs[1][1], 10) * 4,
    };
  }
  if (spacingRefs.length === 1) {
    const px = parseInt(spacingRefs[0][1], 10) * 4;
    return { vertical: px, horizontal: px };
  }

  return { vertical: null, horizontal: null };
}

/** Extract text-style mixin call: @include text-style('name'). */
function extractTextStyle(block: string): string | null {
  const match = block.match(/@include\s+text-style\(\s*['"]([^'"]+)['"]\s*\)/);
  return match ? match[1] : null;
}

/** Extract React Aria data-attribute states used in the component. */
function extractStates(content: string): string[] {
  const states: string[] = ['default']; // Always include default
  const found = new Set<string>();

  for (const state of KNOWN_STATES) {
    const regex = new RegExp(`\\[${state.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'g');
    if (regex.test(content)) {
      const shortName = state.replace('data-', '');
      if (!found.has(shortName)) {
        found.add(shortName);
        states.push(shortName);
      }
    }
  }

  // Check for :hover/:active as aliases
  if (content.includes(':hover') && !found.has('hovered')) {
    found.add('hovered');
    states.push('hovered');
  }
  if (content.includes(':active') && !found.has('pressed')) {
    found.add('pressed');
    states.push('pressed');
  }

  return states;
}

/** Extract layout properties from the base class block. */
function extractLayout(content: string): LayoutSpec {
  // Only look at properties in the base class (before first & modifier)
  const baseBlock = extractBaseBlock(content);

  return {
    display: extractSimpleValue(baseBlock, 'display'),
    flexDirection: extractSimpleValue(baseBlock, 'flex-direction'),
    alignItems: extractSimpleValue(baseBlock, 'align-items'),
    justifyContent: extractSimpleValue(baseBlock, 'justify-content'),
    gap: extractGapValue(baseBlock),
  };
}

/** Extract the base-level block content (before first & selector). */
function extractBaseBlock(content: string): string {
  const baseMatch = content.match(/\.pylon-[a-z][a-z0-9-]*\s*\{/);
  if (!baseMatch) return '';

  const startIdx = baseMatch.index! + baseMatch[0].length;
  const lines: string[] = [];

  for (let i = startIdx; i < content.length; i++) {
    if (content[i] === '&' || content[i] === '}') break;
    lines.push(content[i]);
  }

  return lines.join('');
}

/** Extract a simple CSS property value. */
function extractSimpleValue(block: string, property: string): string | null {
  const regex = new RegExp(`${property}\\s*:\\s*([^;]+?)\\s*;`);
  const match = block.match(regex);
  return match ? match[1].trim() : null;
}

/** Extract gap value, resolving map.get($spacing, N). */
function extractGapValue(block: string): number | null {
  const match = block.match(/gap\s*:\s*(.+?)\s*;/);
  if (!match) return null;

  const spacingRef = match[1].match(/map\.get\(\$spacing,\s*(\d+)\)/);
  if (spacingRef) return parseInt(spacingRef[1], 10) * 4;

  const pxMatch = match[1].match(/(\d+)px/);
  if (pxMatch) return parseInt(pxMatch[1], 10);

  return null;
}

/** Extract corner radius token reference. */
function extractCornerRadius(content: string): string | null {
  const baseBlock = extractBaseBlock(content);
  const match = baseBlock.match(/border-radius\s*:\s*\$(radius-[a-z]+)/);
  return match ? match[1] : null;
}

/** Extract base text-style mixin from the base class. */
function extractBaseTextStyle(content: string): string | null {
  const baseBlock = extractBaseBlock(content);
  return extractTextStyle(baseBlock);
}

/** Parse a full component SCSS file into a ComponentSpec. */
export function parseComponent(content: string, fileName: string): ComponentSpec | null {
  const baseClass = extractBaseClass(content);
  if (!baseClass) return null;

  const { variants, sizes, flags } = extractModifiers(content);

  return {
    name: fileNameToDisplayName(fileName),
    baseClass,
    elements: extractElements(content, baseClass),
    variants,
    sizes,
    flags,
    states: extractStates(content),
    layout: extractLayout(content),
    cornerRadius: extractCornerRadius(content),
    textStyle: extractBaseTextStyle(content),
  };
}

/** Parse a file that contains multiple base classes (e.g. _input.scss has .pylon-field, .pylon-input, .pylon-textarea, .pylon-select). */
export function parseMultiComponent(content: string, fileName: string): ComponentSpec[] {
  const baseClasses = extractAllBaseClasses(content);
  if (baseClasses.length <= 1) {
    const spec = parseComponent(content, fileName);
    return spec ? [spec] : [];
  }

  const specs: ComponentSpec[] = [];
  for (const baseClass of baseClasses) {
    // Find the block for this base class
    const classStart = content.indexOf(`.${baseClass} {`);
    if (classStart === -1) continue;

    const blockStart = content.indexOf('{', classStart);
    const block = `.${baseClass} {` + extractBraceBlock(content, blockStart) + '}';

    const displayName = baseClass
      .replace('pylon-', '')
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

    const { variants, sizes, flags } = extractModifiers(block);

    specs.push({
      name: displayName,
      baseClass,
      elements: extractElements(block, baseClass),
      variants,
      sizes,
      flags,
      states: extractStates(block),
      layout: extractLayout(block),
      cornerRadius: extractCornerRadius(block),
      textStyle: extractTextStyle(extractBaseBlock(block)),
    });
  }

  return specs;
}
