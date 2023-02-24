/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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

export function convertNumToHexAlphaArray(color) {
  const [r, g, b, a] = getRgbaString(color);
  return [rgbToHex(r, g, b).toUpperCase(), a * 100];
}

export function getRgbaString(color) {
  const r = ((color / 65536) | 0) % 256;
  const g = ((color / 256) | 0) % 256;
  const b = color % 256;
  const a = ((color / 16777216) | 0) / 255;
  return [r, g, b, a.toFixed(2)];
}

export function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

export function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
