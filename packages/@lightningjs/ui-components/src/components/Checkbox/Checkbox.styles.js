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

export const base = theme => {
  const strokeWidth = theme.stroke.sm;
  const size = theme.spacer.xxl - strokeWidth * 2;
  return {
    alpha: 1,
    w: size,
    h: size,
    checkW: theme.spacer.lg,
    checkH: theme.spacer.md + theme.spacer.xs,
    checkSrc: theme.asset.check,
    radius: size / 2,
    strokeWidth
  };
};

export const tone = theme => ({
  neutral: {
    strokeColor: theme.color.strokeInverse,
    checkColor: theme.color.textInverse,
    backgroundColor: theme.color.fillNeutralDisabled,
    backgroundColorChecked: theme.color.fillNeutral
  },
  inverse: {
    strokeColor: theme.color.strokeNeutral,
    checkColor: theme.color.textNeutral,
    backgroundColor: theme.color.fillInverseDisabled,
    backgroundColorChecked: theme.color.fillInverse
  },
  brand: {
    strokeColor: theme.color.strokeNeutral,
    checkColor: theme.color.textNeutral,
    backgroundColor: theme.color.fillInverseDisabled,
    backgroundColorChecked: theme.color.fillBrand
  }
});

export const mode = theme => ({
  disabled: { alpha: theme.alpha.inactive }
});
