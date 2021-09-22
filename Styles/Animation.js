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

import { COLORS_NEUTRAL, getHexColor } from './Colors';

const gradientColor = COLORS_NEUTRAL.light2;

export const ANIMATION = {
  gradient: {
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
  }
};
