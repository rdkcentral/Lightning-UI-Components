/**
 * Colors
 *
 * Contains global color style information to easily maintain consistency throughout components.
 */

/**
 * Pair color values with color names in the "Neutral" palette
 */
export const COLORS_NEUTRAL = {
  dark1: '000000',
  dark2: '080808',
  dark3: '101010',
  light1: 'FFFFFF',
  light2: 'F5F5F5',
  light3: 'E8E8E8'
};

export const COLORS_TEXT = {
  dark: '070707',
  light: 'FAFAFA'
};

/**
 * Pair color values with color names in the "Base" palette
 */
export const COLORS_BASE = {
  transparent: 0x00,
  inactive: '808080'
};

export function getHexColor(hex, alpha = 100) {
  if (!hex) {
    return 0x00;
  }

  let hexAlpha = Math.round((alpha / 100) * 255).toString(16);
  let str = `0x${hexAlpha}${hex}`;
  return parseInt(Number(str), 10);
}
