﻿/**
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

export const base = theme => ({
  gradientTop: theme.color.fillTransparent,
  radius: theme.radius.none
});

export const tone = theme => ({
  neutral: { gradientColor: theme.color.material },
  inverse: { gradientColor: theme.color.fillNeutral },
  brand: { gradientColor: theme.color.fillBrand }
});

export const defaultStyle = {
  gradientTop: 16777215,
  radius: 0,
  gradientColor: 4279769113
};

export const schema = {
  type: 'object',
  properties: {
    gradientTop: {
      type: 'number'
    },
    radius: {
      type: 'number'
    },
    gradientColor: {
      type: 'number'
    }
  }
};
