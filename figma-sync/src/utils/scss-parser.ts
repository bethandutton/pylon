/**
 * Regex-based parser for Pylon SCSS token files.
 * Handles: simple variables, Sass maps, CSS custom properties, dark mode blocks.
 */

import { readFileSync } from 'fs';

/** Parse simple Sass variables: $name: value; */
export function parseVariables(content: string): Record<string, string> {
  const vars: Record<string, string> = {};
  const regex = /^\$([a-z][a-z0-9-]*)\s*:\s*(.+?)\s*;/gm;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(content)) !== null) {
    let value = match[2].replace(/\s*\/\/.*$/, '').trim(); // strip inline comments
    vars[match[1]] = value;
  }

  return vars;
}

/** Parse a Sass map: $name: ( 'key': value, ... ); */
export function parseSassMap(content: string, mapName: string): Record<string, string> {
  const result: Record<string, string> = {};

  // Match the full map block
  const mapRegex = new RegExp(
    `\\$${mapName}\\s*:\\s*\\(([^;]*?)\\)\\s*;`,
    's'
  );
  const mapMatch = content.match(mapRegex);
  if (!mapMatch) return result;

  const mapBody = mapMatch[1];
  // Match each key: value pair
  const entryRegex = /['"]?([a-z0-9-]+)['"]?\s*:\s*(.+?)(?:,\s*$|,\s*(?=\n)|$)/gm;
  let match: RegExpExecArray | null;

  while ((match = entryRegex.exec(mapBody)) !== null) {
    const value = match[2].replace(/\s*\/\/.*$/, '').trim().replace(/,$/, '').trim();
    result[match[1]] = value;
  }

  return result;
}

/** Extract a brace-delimited block, handling nested #{} interpolations. */
function extractBlock(content: string, startIndex: number): string {
  let depth = 0;
  let i = startIndex;

  // Find the opening brace
  while (i < content.length && content[i] !== '{') i++;
  i++; // skip opening brace
  depth = 1;

  const blockStart = i;
  while (i < content.length && depth > 0) {
    if (content[i] === '#' && content[i + 1] === '{') {
      // SCSS interpolation — skip to matching }
      i += 2;
      let interpDepth = 1;
      while (i < content.length && interpDepth > 0) {
        if (content[i] === '{') interpDepth++;
        else if (content[i] === '}') interpDepth--;
        if (interpDepth > 0) i++;
      }
      i++; // skip closing } of interpolation
      continue;
    }
    if (content[i] === '{') depth++;
    else if (content[i] === '}') depth--;
    if (depth > 0) i++;
  }

  return content.substring(blockStart, i);
}

/** Parse CSS custom properties from a :root or selector block. */
export function parseCssCustomProperties(content: string, selector: string): Record<string, string> {
  const result: Record<string, string> = {};

  let startIndex: number;
  if (selector === ':root') {
    startIndex = content.indexOf(':root');
  } else {
    startIndex = content.indexOf(selector);
  }
  if (startIndex === -1) return result;

  const blockContent = extractBlock(content, startIndex);

  const propRegex = /--(pylon-[a-z0-9-]+)\s*:\s*(.+?)\s*;/g;
  let match: RegExpExecArray | null;

  while ((match = propRegex.exec(blockContent)) !== null) {
    const value = match[2].replace(/\s*\/\/.*$/, '').trim();
    result[match[1]] = value;
  }

  return result;
}

/** Parse dark mode CSS custom properties from [data-theme="dark"] block. */
export function parseDarkModeProperties(content: string): Record<string, string> {
  const result: Record<string, string> = {};

  const startIndex = content.indexOf('[data-theme="dark"]');
  if (startIndex === -1) return result;

  const blockContent = extractBlock(content, startIndex);
  const propRegex = /--(pylon-[a-z0-9-]+)\s*:\s*(.+?)\s*;/g;
  let match: RegExpExecArray | null;

  while ((match = propRegex.exec(blockContent)) !== null) {
    const value = match[2].replace(/\s*\/\/.*$/, '').trim();
    result[match[1]] = value;
  }

  return result;
}

/**
 * Resolve Sass variable references in a value.
 * e.g. $color-brand → #6B8BA4
 */
export function resolveVariableRefs(
  value: string,
  variables: Record<string, string>
): string {
  // Replace $var-name references
  return value.replace(/\$([a-z][a-z0-9-]*)/g, (_, varName) => {
    return variables[varName] ?? `$${varName}`;
  });
}

/**
 * Resolve Sass expressions like $space * 2.
 * Only handles simple multiplication with a known base value.
 */
export function resolveSpacingExpression(value: string, variables: Record<string, string>): string {
  // Handle: $space * N
  const multMatch = value.match(/\$([a-z][a-z0-9-]*)\s*\*\s*([\d.]+)/);
  if (multMatch) {
    const baseVal = variables[multMatch[1]];
    if (baseVal) {
      const baseNum = parseFloat(baseVal);
      const multiplier = parseFloat(multMatch[2]);
      return `${baseNum * multiplier}rem`;
    }
  }

  // Handle direct variable reference
  const directMatch = value.match(/^\$([a-z][a-z0-9-]*)$/);
  if (directMatch && variables[directMatch[1]]) {
    return variables[directMatch[1]];
  }

  return value;
}

/** Read a file and return its contents as a string. */
export function readScssFile(filePath: string): string {
  return readFileSync(filePath, 'utf-8');
}
