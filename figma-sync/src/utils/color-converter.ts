/**
 * Converts hex color strings to Figma RGBA format (0-1 range).
 */

export interface FigmaColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

/** Parse a hex color (#RGB, #RRGGBB, or #RRGGBBAA) to Figma 0-1 RGBA. */
export function hexToFigmaRgba(hex: string): FigmaColor {
  hex = hex.trim().replace('#', '');

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;
  const a = hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1;

  return {
    r: round(r),
    g: round(g),
    b: round(b),
    a: round(a),
  };
}

/** Convert rem string to px number (1rem = 16px). */
export function remToPx(value: string): number {
  const match = value.match(/^([\d.]+)rem$/);
  if (match) {
    return round(parseFloat(match[1]) * 16);
  }
  return parseFloat(value);
}

/** Convert em string to unitless number. */
export function emToUnitless(value: string): number {
  const match = value.match(/^(-?[\d.]+)em$/);
  if (match) {
    return parseFloat(match[1]);
  }
  return parseFloat(value);
}

/** Convert px string to number. */
export function pxToNumber(value: string): number {
  return parseFloat(value.replace('px', ''));
}

function round(n: number): number {
  return Math.round(n * 10000) / 10000;
}
