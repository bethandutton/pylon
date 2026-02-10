/**
 * Token Extractor — Parses _tokens.scss and _theme.scss into tokens.json
 *
 * Reads Pylon's SCSS design tokens and outputs a structured JSON file
 * suitable for Figma variable creation and other downstream consumers.
 */

import { writeFileSync } from 'fs';
import { resolve } from 'path';
import {
  parseVariables,
  parseSassMap,
  parseCssCustomProperties,
  parseDarkModeProperties,
  resolveVariableRefs,
  resolveSpacingExpression,
  readScssFile,
} from './utils/scss-parser.js';
import { remToPx, emToUnitless, pxToNumber } from './utils/color-converter.js';

const SCSS_DIR = resolve(__dirname, '../../src/scss');
const OUTPUT_PATH = resolve(__dirname, '../tokens.json');

// --- Read source files ---
const tokensContent = readScssFile(resolve(SCSS_DIR, '_tokens.scss'));
const themeContent = readScssFile(resolve(SCSS_DIR, '_theme.scss'));

// --- Parse Sass variables (for resolving references) ---
const sassVars = parseVariables(tokensContent);

// --- Colors ---
function extractColors() {
  // Light mode: from :root CSS custom properties in _theme.scss
  const lightProps = parseCssCustomProperties(themeContent, ':root');
  const darkProps = parseDarkModeProperties(themeContent);

  const lightColors: Record<string, string> = {};
  const darkColors: Record<string, string> = {};

  // Extract color properties, resolving #{$var} interpolations
  for (const [prop, value] of Object.entries(lightProps)) {
    if (prop.startsWith('pylon-color-')) {
      const name = prop.replace('pylon-', '');
      // Value might be #{$color-brand} → resolve from sass vars
      const resolved = resolveInterpolation(value);
      if (resolved) lightColors[name] = resolved;
    }
  }

  for (const [prop, value] of Object.entries(darkProps)) {
    if (prop.startsWith('pylon-color-')) {
      const name = prop.replace('pylon-', '');
      darkColors[name] = value; // Dark values are direct hex in _theme.scss
    }
  }

  return { light: lightColors, dark: darkColors };
}

/** Resolve SCSS interpolation: #{$var-name} → hex value */
function resolveInterpolation(value: string): string {
  const interpMatch = value.match(/#\{(\$[a-z][a-z0-9-]*)\}/);
  if (interpMatch) {
    const varName = interpMatch[1].replace('$', '');
    // Recursively resolve (e.g. $color-info → $color-brand → #6B8BA4)
    let resolved = sassVars[varName];
    if (resolved && resolved.startsWith('$')) {
      resolved = sassVars[resolved.replace('$', '')] ?? resolved;
    }
    return resolved ?? value;
  }
  return value;
}

/** Clean a Sass font-family string for display. Keeps full stack but normalizes quotes. */
function cleanFontFamily(value: string): string {
  // Remove only the outermost wrapping quotes if the entire value is quoted
  // e.g. "'Geist', sans-serif" → "Geist, -apple-system, ..."
  return value
    .split(',')
    .map(f => f.trim().replace(/^'|'$/g, ''))
    .join(', ');
}

// --- Typography ---
function extractTypography() {
  const fontSizes = parseSassMap(tokensContent, 'font-sizes');
  const fontWeights = parseSassMap(tokensContent, 'font-weights');
  const lineHeights = parseSassMap(tokensContent, 'line-heights');
  const letterSpacings = parseSassMap(tokensContent, 'letter-spacings');

  const styles: Record<string, {
    fontSize: number;
    fontWeight: number;
    lineHeight: number;
    letterSpacing: number;
  }> = {};

  for (const key of Object.keys(fontSizes)) {
    styles[key] = {
      fontSize: remToPx(fontSizes[key]),
      fontWeight: parseInt(fontWeights[key] || '400', 10),
      lineHeight: parseFloat(lineHeights[key] || '1.5'),
      letterSpacing: letterSpacings[key] === '0' ? 0 : emToUnitless(letterSpacings[key] || '0'),
    };
  }

  return {
    fontFamilies: {
      base: cleanFontFamily(sassVars['font-family-base'] ?? ''),
      mono: cleanFontFamily(sassVars['font-family-mono'] ?? ''),
    },
    styles,
  };
}

// --- Spacing ---
function extractSpacing() {
  const spacingMap = parseSassMap(tokensContent, 'spacing');
  const result: Record<string, number> = {};

  for (const [key, value] of Object.entries(spacingMap)) {
    if (value === '0') {
      result[key] = 0;
    } else {
      const resolved = resolveSpacingExpression(value, sassVars);
      result[key] = remToPx(resolved);
    }
  }

  return result;
}

// --- Radii ---
function extractRadii() {
  return {
    none: 0,
    sm: pxToNumber(sassVars['radius-sm'] || '4px'),
    md: pxToNumber(sassVars['radius-md'] || '6px'),
    lg: pxToNumber(sassVars['radius-lg'] || '8px'),
    xl: pxToNumber(sassVars['radius-xl'] || '12px'),
    full: pxToNumber(sassVars['radius-full'] || '9999px'),
  };
}

// --- Shadows ---
function extractShadows() {
  const lightProps = parseCssCustomProperties(themeContent, ':root');
  const darkProps = parseDarkModeProperties(themeContent);

  return {
    light: {
      sm: lightProps['pylon-shadow-sm'] || '',
      md: lightProps['pylon-shadow-md'] || '',
      lg: lightProps['pylon-shadow-lg'] || '',
    },
    dark: {
      sm: darkProps['pylon-shadow-sm'] || '',
      md: darkProps['pylon-shadow-md'] || '',
      lg: darkProps['pylon-shadow-lg'] || '',
    },
  };
}

// --- Transitions ---
function extractTransitions() {
  return {
    fast: sassVars['transition-fast'] || '120ms ease',
    base: sassVars['transition-base'] || '200ms ease',
    slow: sassVars['transition-slow'] || '300ms ease',
  };
}

// --- Build output ---
const tokens = {
  colors: extractColors(),
  typography: extractTypography(),
  spacing: extractSpacing(),
  radii: extractRadii(),
  shadows: extractShadows(),
  transitions: extractTransitions(),
};

writeFileSync(OUTPUT_PATH, JSON.stringify(tokens, null, 2) + '\n');

console.log(`Tokens extracted to ${OUTPUT_PATH}`);
console.log(`  Colors: ${Object.keys(tokens.colors.light).length} light, ${Object.keys(tokens.colors.dark).length} dark`);
console.log(`  Typography styles: ${Object.keys(tokens.typography.styles).length}`);
console.log(`  Spacing values: ${Object.keys(tokens.spacing).length}`);
console.log(`  Radii: ${Object.keys(tokens.radii).length}`);
console.log(`  Shadows: ${Object.keys(tokens.shadows.light).length} (light + dark)`);
console.log(`  Transitions: ${Object.keys(tokens.transitions).length}`);
