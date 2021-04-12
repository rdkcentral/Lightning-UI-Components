/**
 * Colors
 *
 * Contains global color style information to easily maintain consistency throughout components.
 */
import { rgba2argb } from '../utils';

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

  hex = hex.replace('#', '');

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
  } else if (typeof color === 'string' && color.indexOf('rgba') > -1) {
    return rgba2argb(color);
  } else if (typeof color === 'string' && color.indexOf('rgb') > -1) {
    let rgba = [...color.replace(/rgb\(|\)/g, '').split(','), '255'];
    return lng.StageUtils.getArgbNumber(rgba);
  }
  return null;
}

/**
 * Xfinity-branded color palette for Lightning
 * https://share.goabstract.com/06d0601d-b7d2-48f3-93a2-17cc78bedb5e?mode=build&sha=6d9d06ec3e924eb83ff133826956e1e9a4fc7e36
 */

export const GREY = {
  0: getHexColor('#FFFFFF'),
  5: getHexColor('#F6F6F9'),
  10: getHexColor('#ECECF2'),
  20: getHexColor('#CECEDA'),
  30: getHexColor('#B1B1BD'),
  40: getHexColor('#8B8B97'),
  50: getHexColor('#62626C'),
  60: getHexColor('#3E3E45'),
  70: getHexColor('#232328'),
  80: getHexColor('#141417'),
  90: getHexColor('#0D0D0F'),
  100: getHexColor('#000000'),
  __isColor: true
};

export const BLUE = {
  hover: getHexColor('#8BAFF9'),
  default: getHexColor('#4784FF'),
  pressed: getHexColor('#3376FF'),
  indicator: getHexColor('#2970FF'),
  shade: getHexColor('#111A32'),
  __isColor: true
};

export const GREEN = {
  hover: getHexColor('#78E3BF'),
  default: getHexColor('#0AC284'),
  pressed: getHexColor('#009965'),
  indicator: getHexColor('#008F5E'),
  shade: getHexColor('#0A1F18'),
  __isColor: true
};

export const YELLOW = {
  hover: getHexColor('#FFD88A'),
  default: getHexColor('#FFC95C'),
  pressed: getHexColor('#FFB829'),
  indicator: getHexColor('#FFAA00'),
  shade: getHexColor('#1F180A'),
  __isColor: true
};

export const RED = {
  hover: getHexColor('#FF99BA'),
  default: getHexColor('#FF6194'),
  pressed: getHexColor('#FF3878'),
  indicator: getHexColor('#F0004D'),
  shade: getHexColor('#2A120E'),
  __isColor: true
};

export const PURPLE = {
  base: getHexColor('#6138F5'),
  hover: getHexColor(`#BAA8FA`),
  default: getHexColor(`#9378F8`),
  pressed: getHexColor('#805FF6'),
  indicator: getHexColor('#704BF7'),
  shade: getHexColor(`#1E1236`),
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
  red: RED,
  purple: PURPLE,
  opacity: OPACITY,
  __isColor: true,
  background: {
    default: GREY[80],
    stroke: 0x00,
    float: 0x00,
    fill: GREY[70],
    focus: GREY[10],
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
    default: getHexColor(GREY[10], 32),
    __isColor: true
  },
  focusRing: {
    primary: getHexColor(GREY[10], 96),
    secondary: getHexColor(GREY[0], 8),
    __isColor: true
  }
};
