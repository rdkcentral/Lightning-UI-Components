/**
 * Copyright 2020 Comcast Cable Communications Management, LLC
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

/**
 * Combines rgb hex string and alpha into argb hexadecimal number
 * @param {string} hex - 6 alphanumeric characters between 0-f
 * @param {number} [alpha] - number between 0-100 (0 is invisible, 100 is opaque)
 */
export function getHexColor(hex, alpha = 100) {
  if (!hex) {
    return 0x00;
  }

  let hexAlpha = Math.round((alpha / 100) * 255).toString(16);
  let str = `0x${hexAlpha}${hex}`;
  return parseInt(Number(str), 10);
}

export const COLORS_TEXT = {
  dark: '080808',
  light: 'FFFFFF'
};

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
