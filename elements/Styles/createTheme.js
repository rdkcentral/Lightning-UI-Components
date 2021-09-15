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

import lng from '@lightningjs/core';
import { clone } from '../../utils';
import { CORNER_RADIUS } from './Styles';
import { COLORS_NEUTRAL, getHexColor } from './Colors';

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

const materials = {
  glow,
  luminance
};

function spacing(multiplier) {
  return 8 * multiplier;
}

const gradientColor = COLORS_NEUTRAL.light2;
const gradientAnimation = {
  duration: 0.6,
  actions: [
    {
      p: 'colorUl',
      v: {
        0: getHexColor(gradientColor, 72),
        1: getHexColor(gradientColor, 56)
      }
    },
    {
      p: 'colorUr',
      v: {
        0: getHexColor(gradientColor, 24),
        1: getHexColor(gradientColor, 16)
      }
    },
    {
      p: 'colorBr',
      v: { 0: 0x00, 1: getHexColor(gradientColor, 0) }
    },
    {
      p: 'colorBl',
      v: {
        0: getHexColor(gradientColor, 24),
        1: getHexColor(gradientColor, 16)
      }
    }
  ]
};

const SIZES = {
  icon: {
    small: 32,
    medium: 40,
    large: 48
  }
};

/**
 * Combines two theme objects to create a new theme
 * @param {Object|function} theme - An object or callback that accepts the default theme as an argument. Gets merged with the default theme
 * @param {Object} [defaultTheme] - Theme to be merged with.
 */
export default (theme, defaultTheme = {}) => {
  if (typeof theme === 'function') {
    return clone(defaultTheme, theme(defaultTheme));
  }

  return clone(defaultTheme, theme);
};
