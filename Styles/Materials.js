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
import { CORNER_RADIUS } from './Styles';

export const spacing = multiplier => 8 * multiplier;

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
