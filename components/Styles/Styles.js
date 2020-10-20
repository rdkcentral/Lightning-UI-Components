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
 * Styles
 *
 * Contains global style information to easily maintain consistency throughout components.
 */
import { SCREEN } from './Layout';
export * from './Fonts';
export * from './Layout';
export * from './Colors';
export * from './Transitions';
export { default as createStyles } from './createStyles';
export { default as createTheme } from './createTheme';

/**
 * Amount of rounding to add to corners based on the item's size
 */
export const CORNER_RADIUS = {
  large: 24,
  medium: 16,
  small: 8,
  xsmall: 4
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

/**
 * Amount of pixels to increase a tile item width on focus
 */
export const FOCUS_SCALE = {
  tile: 48,
  launchpad: 360,
  background: 284
};

/**
 * Scale size based on width of component using the 12-column layout
 *
 * @param { number } w
 */
export function getFocusScale(w) {
  switch (true) {
    case w >= 1760:
      return 1.03; // 1 col
    case w >= 860:
      return 1.06; // 2 col
    case w >= 560:
      return 1.09; // 3 col
    case w >= 410:
      return 1.12; // 4 col
    case w >= 320:
      return 1.15; // 5 col
    case w >= 260:
      return 1.18; // 6 col
    case w >= 185:
      return 1.26; // 8 col
    case w >= 140:
      return 1.34; // 10 col
    case w >= 110:
      return 1.44; // 12 col
    default:
      return 1.18; // default to 6 col
  }
}

export const BACKGROUND_DIMENSIONS = {
  h: SCREEN.h * ((SCREEN.w + FOCUS_SCALE.background) / SCREEN.w),
  w: SCREEN.w * ((SCREEN.w + FOCUS_SCALE.background) / SCREEN.w)
};
