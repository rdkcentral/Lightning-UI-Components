/**
 * Colors
 *
 * Contains global color style information to easily maintain consistency throughout components.
 */

/**
 * Combines rgb hex string and alpha into argb hexadecimal number
 * @param {string|number} hex - 6 alphanumeric characters between 0-f or argb hexadecimal number
 * @param {number} [alpha] - number between 0-100 (0 is invisible, 100 is opaque)
 */
export function getHexColor(hex, alpha = 100) {
  if (!hex) {
    return 0x00;
  }

  if (typeof hex === 'number') {
    hex = hex.toString(16).slice(2);
  }

  let hexAlpha = Math.round((alpha / 100) * 255).toString(16);
  let str = `0x${hexAlpha}${hex}`;
  return Number(str);
}

/**
 * Returns valid string of HEX color
 *
 * @param {string} color
 * @param {boolean} fill
 */
export function getValidColor(color) {
  if (/^0x[0-9a-fA-F]{8}/g.test(color)) {
    // User enters a valid 0x00000000 hex code
    return Number(color);
  } else if (/^#[0-9a-fA-F]{6}/g.test(color)) {
    // User enters valid #000000 hex code
    return getHexColor(color.substr(1, 6));
  } else if (typeof color === 'string' && /^[0-9]{8,10}/g.test(color)) {
    return parseInt(color);
  } else if (
    typeof color === 'number' &&
    /^[0-9]{8,10}/g.test(color.toString())
  ) {
    return color;
  }
  return null;
}

/**
 * Xfinity-branded color palette for Lightning
 * https://share.goabstract.com/06d0601d-b7d2-48f3-93a2-17cc78bedb5e?mode=build&sha=6d9d06ec3e924eb83ff133826956e1e9a4fc7e36
 */
export const GREY = {
  0: getHexColor('ffffff'),
  5: getHexColor('ececf2'),
  10: getHexColor('e2e2eb'),
  20: getHexColor('62626c'),
  30: getHexColor('b1b1bd'),
  40: getHexColor('8b8b97'),
  60: getHexColor('3e3e45'),
  70: getHexColor('232328'),
  80: getHexColor('141417'),
  90: getHexColor('0d0d0f'),
  100: getHexColor('000000'),
  __isColor: true
};

export const BLUE = {
  hover: getHexColor('8baff9'),
  default: getHexColor('4784ff'),
  pressed: getHexColor('3376ff'),
  indicator: getHexColor('1f69ff'),
  shade: getHexColor('000f33'),
  __isColor: true
};

export const GREEN = {
  hover: getHexColor('78e3bf'),
  default: getHexColor('0ac284'),
  pressed: getHexColor('009965'),
  indicator: getHexColor('008558'),
  shade: getHexColor('002418'),
  __isColor: true
};

export const YELLOW = {
  hover: getHexColor('ffd88a'),
  default: getHexColor('ffc95c'),
  pressed: getHexColor('ffb829'),
  indicator: getHexColor('ffaa00'),
  shade: getHexColor('2e1700'),
  __isColor: true
};

export const OPACITY = {
  0: 0,
  1: 16,
  2: 32,
  3: 48,
  4: 64,
  5: 80,
  6: 96
};

export const PALETTE = {
  getHexColor,
  black: GREY[100],
  white: GREY[0],
  grey: GREY,
  blue: BLUE,
  green: GREEN,
  yellow: YELLOW,
  opacity: OPACITY,
  __isColor: true,
  background: {
    default: GREY[80],
    stroke: 0x00,
    float: 0x00,
    fill: GREY[70],
    focus: GREY[5],
    ghost: getHexColor(GREY[70], 48),
    __isColor: true
  },
  text: {
    light: {
      primary: getHexColor(GREY[0], 95),
      secondary: getHexColor(GREY[0], 80),
      tertiary: getHexColor(GREY[0], 60),
      __isColor: true
    },
    dark: {
      primary: getHexColor(GREY[100], 95),
      secondary: getHexColor(GREY[100], 80),
      tertiary: getHexColor(GREY[100], 60),
      __isColor: true
    },
    focus: getHexColor(GREY[100], 95),
    __isColor: true
  },
  badge: {
    default: getHexColor(GREY[5], 32),
    __isColor: true
  }
};

/**
 *
 *
 * TODO: DEPRECATED COLOR SCHEMES
 *
 *
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
