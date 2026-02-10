/**
 * Code Connect Generator
 *
 * Reads component specs and generates @figma/code-connect HTML mode files.
 * These files show real Pylon CSS classes in Figma Dev Mode.
 *
 * NOTE: Figma node URLs must be filled in after Phase 4 creates components.
 * Run `npm run generate:code-connect` after syncing components to Figma,
 * then update the FIGMA_NODE_URL placeholder with actual node IDs.
 *
 * Output: code-connect/*.figma.ts
 */

import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import type { ComponentSpec } from './utils/component-parser.js';

const SPECS_DIR = resolve(__dirname, '../component-specs');
const OUTPUT_DIR = resolve(__dirname, '../code-connect');

// Load from .env if present
const envPath = resolve(__dirname, '../.env');
let fileKey = 'YOUR_FILE_KEY';
try {
  const envContent = readFileSync(envPath, 'utf-8');
  const match = envContent.match(/FIGMA_FILE_KEY=(.+)/);
  if (match && match[1].trim()) fileKey = match[1].trim();
} catch {}

mkdirSync(OUTPUT_DIR, { recursive: true });

const specFiles = readdirSync(SPECS_DIR)
  .filter(f => f.endsWith('.json'))
  .sort();

let totalFiles = 0;

for (const file of specFiles) {
  const spec: ComponentSpec = JSON.parse(
    readFileSync(resolve(SPECS_DIR, file), 'utf-8')
  );

  const code = generateCodeConnect(spec, fileKey);
  const outputName = file.replace('.json', '.figma.ts');
  writeFileSync(resolve(OUTPUT_DIR, outputName), code);
  totalFiles++;
  console.log(`  ${spec.name} → ${outputName}`);
}

console.log(`\nGenerated ${totalFiles} Code Connect files`);
console.log(`Output: ${OUTPUT_DIR}/`);
console.log('\nNext steps:');
console.log('  1. Sync components to Figma (Phase 4)');
console.log('  2. Get node IDs from Figma');
console.log('  3. Replace FIGMA_NODE_URL placeholders');
console.log('  4. Run: npx figma connect publish');

function generateCodeConnect(spec: ComponentSpec, fileKey: string): string {
  const lines: string[] = [];

  lines.push(`import figma, { html } from '@figma/code-connect/html'`);
  lines.push('');

  // Placeholder URL — update with real node ID after Phase 4
  const figmaUrl = `https://figma.com/design/${fileKey}?node-id=PLACEHOLDER_${spec.baseClass.replace('pylon-', '').toUpperCase()}`;

  lines.push(`figma.connect('${figmaUrl}', {`);

  // Props
  lines.push('  props: {');

  // Build className array
  const classNameParts: string[] = [`'${spec.baseClass}'`];

  // Variant mapping
  if (spec.variants.length > 0) {
    const variantMap = spec.variants
      .map(v => `${v.name}: '${spec.baseClass}${v.class}'`)
      .join(', ');
    classNameParts.push(`figma.enum('Type', { ${variantMap} })`);
  }

  // Size mapping
  if (spec.sizes.length > 0) {
    const sizeMap = spec.sizes
      .map(s => `${s.name}: '${spec.baseClass}${s.class}'`)
      .join(', ');
    classNameParts.push(`figma.enum('Size', { ${sizeMap} })`);
  }

  lines.push(`    className: figma.className([`);
  for (let i = 0; i < classNameParts.length; i++) {
    const comma = i < classNameParts.length - 1 ? ',' : '';
    lines.push(`      ${classNameParts[i]}${comma}`);
  }
  lines.push(`    ]),`);

  // Text content for components with labels
  if (isInteractiveComponent(spec)) {
    lines.push(`    label: figma.textContent('Label'),`);
  }

  lines.push('  },');

  // Example
  lines.push('  example: (props) =>');
  const tag = getHtmlTag(spec);

  if (isInteractiveComponent(spec)) {
    lines.push(`    html\`<${tag} class="\${props.className}">\${props.label}</${tag}>\`,`);
  } else {
    lines.push(`    html\`<div class="\${props.className}">...</div>\`,`);
  }

  lines.push('})');
  lines.push('');

  return lines.join('\n');
}

function isInteractiveComponent(spec: ComponentSpec): boolean {
  const interactive = ['btn', 'input', 'checkbox', 'radio', 'toggle', 'switch', 'select'];
  const baseName = spec.baseClass.replace('pylon-', '');
  return interactive.some(i => baseName.startsWith(i));
}

function getHtmlTag(spec: ComponentSpec): string {
  const tagMap: Record<string, string> = {
    'pylon-btn': 'Button',
    'pylon-input': 'Input',
    'pylon-textarea': 'TextArea',
    'pylon-checkbox': 'Checkbox',
    'pylon-radio': 'Radio',
    'pylon-switch': 'Switch',
    'pylon-select': 'Select',
    'pylon-toggle': 'ToggleButton',
    'pylon-slider': 'Slider',
    'pylon-modal': 'Dialog',
    'pylon-tooltip': 'Tooltip',
    'pylon-tabs': 'Tabs',
    'pylon-accordion': 'Disclosure',
  };
  return tagMap[spec.baseClass] || 'div';
}
