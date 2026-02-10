/**
 * Figma Component Script Generator
 *
 * Reads component specs from component-specs/*.json and generates
 * Figma Plugin API scripts that create component sets with variants.
 *
 * Output: figma-scripts/components/*.js (one script per component)
 */

import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'fs';
import { resolve } from 'path';
import type { ComponentSpec } from './utils/component-parser.js';
import { generateComponentScript } from './utils/figma-component-builder.js';

const SPECS_DIR = resolve(__dirname, '../component-specs');
const OUTPUT_DIR = resolve(__dirname, '../figma-scripts/components');

mkdirSync(OUTPUT_DIR, { recursive: true });

const specFiles = readdirSync(SPECS_DIR)
  .filter(f => f.endsWith('.json'))
  .sort();

let totalComponents = 0;
let totalVariants = 0;

for (const file of specFiles) {
  const spec: ComponentSpec = JSON.parse(
    readFileSync(resolve(SPECS_DIR, file), 'utf-8')
  );

  const script = generateComponentScript(spec);
  const outputName = file.replace('.json', '.js');
  writeFileSync(resolve(OUTPUT_DIR, outputName), script + '\n');

  const variants = Math.max(1, spec.variants.length) *
    Math.max(1, spec.sizes.length) *
    spec.states.length;

  console.log(`  ${spec.name} → ${outputName} (${variants} variants)`);
  totalComponents++;
  totalVariants += variants;
}

console.log(`\nGenerated ${totalComponents} component scripts (${totalVariants} total variants)`);
console.log(`Output: ${OUTPUT_DIR}/`);
