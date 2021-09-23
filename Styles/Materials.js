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

import lng from '@lightningjs/core';

export const spacing = multiplier => 8 * multiplier;

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

export const CORNER_RADIUS = {
  large: 24,
  medium: 16,
  small: 8,
  xsmall: 4
};

/**
 * Amount to blur shaders on components like the Shelf.
 *
 * The cap for Fast Blur component is 4, but Sketch files use "50"
 * The higher number is also necessary for when requesting a blurred version
 * of an image from a service using something like image magick.
 */
export const BLUR_AMOUNT = 4;

function glow({
  w,
  h,
  color = 0xffffffff,
  borderRadius = CORNER_RADIUS.small,
  blur = spacing(2)
}) {
  return {
    color: color,
    mount: 0.5,
    x: w / 2,
    y: h / 2 + blur / 2,
    zIndex: -1,
    texture: lng.Tools.getShadowRect(
      w - spacing(2),
      h - spacing(2),
      borderRadius,
      blur
    )
  };
}

function luminance({ w, h, blur = 3, padding = spacing(8), texture = null }) {
  return {
    type: lng.components.FastBlurComponent,
    x: w / 2,
    y: h / 2 + spacing(3),
    mount: 0.5,
    w,
    h,
    amount: blur,
    padding: padding,
    content: {
      Image: {
        w,
        h,
        texture: texture
      }
    },
    zIndex: -1
  };
}

export const MATERIALS = { glow, luminance };
