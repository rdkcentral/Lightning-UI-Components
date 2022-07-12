/**
 * Copyright 2022 Comcast Cable Communications Management, LLC
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
 * Styles
 *
 * Contains global style information to easily maintain consistency throughout components.
 */
export * from './Layout';
export * from './Fonts';
export * from './Colors';
export * from './Transitions';
export { default as createStyles } from './createStyles';
export {
  default as createTheme,
  getXfinityTheme,
  getFocusScale
} from './createTheme';

/**
 * Amount of rounding to add to corners based on the item's size
 */

export const CORNER_RADIUS = {
  none: 0,
  xsmall: 4,
  small: 8,
  medium: 16,
  large: 24
};

export const ALPHA = {
  overlays: {
    background: 72,
    bubble: 56,
    shelf: 56
  },
  text: {
    primary: 100,
    secondary: 72,
    tertiary: 56,
    inactive: 40
  }
};

/**
 * Amount to blur shaders on components like the Shelf.
 *
 * The cap for Fast Blur component is 4, but Sketch files use "50"
 * The higher number is also necessary for when requesting a blurred version
 * of an image from a service using something like image magick.
 */
export const BLUR_AMOUNT = 4;
