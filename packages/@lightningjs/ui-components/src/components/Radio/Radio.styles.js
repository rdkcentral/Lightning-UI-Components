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

export const base = theme => {
  const size = theme.spacer.xxl;
  return {
    alpha: theme.alpha.primary,
    width: size,
    height: size,
    knobHeight: size / 2,
    knobWidth: size / 2,
    radius: size / 2,
    strokeWidth: theme.stroke.sm
  };
};

export const tone = theme => ({
  neutral: {
    backgroundColor: theme.color.fillInverseSecondary,
    backgroundColorChecked: theme.color.fillNeutral,
    knobColor: theme.color.fillInverse,
    strokeColor: theme.color.strokeNeutralSecondary
  },
  inverse: {
    backgroundColor: theme.color.fillNeutralSecondary,
    backgroundColorChecked: theme.color.fillInverse,
    knobColor: theme.color.fillNeutral,
    strokeColor: theme.color.strokeInverseSecondary
  },
  brand: {
    backgroundColor: theme.color.fillNeutralSecondary,
    backgroundColorChecked: theme.color.fillBrand,
    knobColor: theme.color.fillInverse,
    strokeColor: theme.color.strokeNeutralSecondary
  }
});

export const mode = theme => ({
  disabled: { alpha: theme.alpha.inactive }
});
