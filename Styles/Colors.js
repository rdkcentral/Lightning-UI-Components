/**
 * Copyright 2021 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Colors
 *
 * Contains global color style information to easily maintain consistency throughout components.
 */

import lng from '@lightningjs/core';
import { rgba2argb } from '../utils';

/**
 * Combines rgb hex string and alpha into argb hexadecimal number
 * @param {string|number} hex - 6 alphanumeric characters between 0-f or argb hexadecimal number
 * @param {number} [alpha] - number between 0-100 (0 is invisible, 100 is opaque)
 * @returns {number} - ARGB color value
 */
export function getHexColor(hex, alpha = 100) {
  if (!hex) {
    return 0x00;
  }

  if (typeof hex === 'number') {
    hex = hex.toString(16).slice(2);
  }

  hex = hex.replace('#', '');

  const hexAlpha = Math.round((alpha / 100) * 255).toString(16);
  const str = `0x${hexAlpha}${hex}`;
  return Number(str);
}

/**
 * Returns valid string of HEX color
 *
 * @param {string} color
 * @param {boolean} fill
 * @returns {number|null} - valid ARGB color value
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
    const rgba = [...color.replace(/rgb\(|\)/g, '').split(','), '255'];
    return lng.StageUtils.getArgbNumber(rgba);
  }
  return null;
}

/**
 * Pair color values with color names in the "Neutral" palette
 */
export const COLORS_NEUTRAL = {
  dark1: getHexColor('000000'),
  dark2: getHexColor('080808'),
  dark3: getHexColor('101010'),
  light1: getHexColor('FFFFFF'),
  light2: getHexColor('F5F5F5'),
  light3: getHexColor('E8E8E8')
};

export const COLORS_TEXT = {
  dark: getHexColor('080808'),
  light: getHexColor('FFFFFF')
};

export const PALETTE = {
  getHexColor,
  text: {
    light: {
      primary: COLORS_TEXT.light,
      secondary: COLORS_TEXT.light,
      tertiary: COLORS_TEXT.light,
      __isColor: true
    },
    dark: {
      primary: COLORS_TEXT.dark,
      secondary: COLORS_TEXT.dark,
      tertiary: COLORS_TEXT.dark,
      __isColor: true
    }
  }
};
