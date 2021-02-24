/**
 * Colors
 *
 * Contains global color style information to easily maintain consistency throughout components.
 */
import tokens from 'xfinity-ds-tokens/dist/lightning-ui-tokens/lightning/lightning-ui';
import { rgba2argb } from '../../utils';

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
  }
  return null;
}

/**
 * Xfinity-branded color palette for Lightning
 * https://share.goabstract.com/06d0601d-b7d2-48f3-93a2-17cc78bedb5e?mode=build&sha=6d9d06ec3e924eb83ff133826956e1e9a4fc7e36
 */
export const GREY = {
  0: getHexColor(tokens.palette.white),
  5: getHexColor(tokens.palette.grey05),
  10: getHexColor(tokens.palette.grey10),
  20: getHexColor(tokens.palette.grey20),
  30: getHexColor(tokens.palette.grey30),
  40: getHexColor(tokens.palette.grey40),
  50: getHexColor(tokens.palette.grey50),
  60: getHexColor(tokens.palette.grey60),
  70: getHexColor(tokens.palette.grey70),
  80: getHexColor(tokens.palette.grey80),
  90: getHexColor(tokens.palette.grey90),
  100: getHexColor(tokens.palette.black),
  __isColor: true
};

export const BLUE = {
  hover: getHexColor(tokens.palette.blue10),
  default: getHexColor(tokens.palette.blue20),
  pressed: getHexColor(tokens.palette.blue30),
  indicator: getHexColor(tokens.palette.blue40),
  shade: getHexColor(tokens.palette.blue90),
  __isColor: true
};

export const GREEN = {
  hover: getHexColor(tokens.palette.green10),
  default: getHexColor(tokens.palette.green20),
  pressed: getHexColor(tokens.palette.green30),
  indicator: getHexColor(tokens.palette.green40),
  shade: getHexColor(tokens.palette.green90),
  __isColor: true
};

export const YELLOW = {
  hover: getHexColor(tokens.palette.yellow10),
  default: getHexColor(tokens.palette.yellow20),
  pressed: getHexColor(tokens.palette.yellow30),
  indicator: getHexColor(tokens.palette.yellow40),
  shade: getHexColor(tokens.palette.yellow90),
  __isColor: true
};

export const RED = {
  hover: getHexColor(tokens.palette.red10),
  default: getHexColor(tokens.palette.red20),
  pressed: getHexColor(tokens.palette.red30),
  indicator: getHexColor(tokens.palette.red40),
  shade: getHexColor(tokens.palette.red90),
  __isColor: true
};

export const PURPLE = {
  base: getHexColor(tokens.palette.purple50),
  hover: getHexColor(tokens.palette.purple10),
  default: getHexColor(tokens.palette.purple20),
  pressed: getHexColor(tokens.palette.purple30),
  indicator: getHexColor(tokens.palette.purple40),
  shade: getHexColor(tokens.palette.purple90),
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
