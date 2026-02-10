/**
 * Component Spec Extractor
 *
 * Reads all SCSS component files and generates structured JSON specs
 * describing each component's Figma representation.
 *
 * Output: component-specs/*.json (one file per component)
 */

import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'fs';
import { resolve, basename } from 'path';
import { parseMultiComponent } from './utils/component-parser.js';

const COMPONENTS_DIR = resolve(__dirname, '../../src/scss/components');
const OUTPUT_DIR = resolve(__dirname, '../component-specs');

mkdirSync(OUTPUT_DIR, { recursive: true });

// Get all component SCSS files (exclude _index.scss)
const files = readdirSync(COMPONENTS_DIR)
  .filter(f => f.startsWith('_') && f.endsWith('.scss') && f !== '_index.scss')
  .sort();

let totalSpecs = 0;

for (const file of files) {
  const filePath = resolve(COMPONENTS_DIR, file);
  const content = readFileSync(filePath, 'utf-8');
  const specs = parseMultiComponent(content, file);

  for (const spec of specs) {
    const outputName = spec.baseClass.replace('pylon-', '') + '.json';
    const outputPath = resolve(OUTPUT_DIR, outputName);
    writeFileSync(outputPath, JSON.stringify(spec, null, 2) + '\n');
    totalSpecs++;

    const parts = [
      spec.variants.length ? `${spec.variants.length} variants` : null,
      spec.sizes.length ? `${spec.sizes.length} sizes` : null,
      spec.elements.length ? `${spec.elements.length} elements` : null,
      `${spec.states.length} states`,
    ].filter(Boolean).join(', ');

    console.log(`  ${spec.name} (${spec.baseClass}) → ${parts}`);
  }
}

console.log(`\nExtracted ${totalSpecs} component specs from ${files.length} SCSS files`);
console.log(`Output: ${OUTPUT_DIR}/`);
