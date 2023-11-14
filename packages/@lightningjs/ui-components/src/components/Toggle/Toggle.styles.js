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
  const knobSize = theme.spacer.xl;
  const knobPadding = theme.spacer.xs;
  const strokeWidth = theme.stroke.sm;
  return {
    height: knobSize + (knobPadding + strokeWidth) * 2,
    knobWidth: knobSize,
    knobHeight: knobSize,
    knobRadius: knobSize / 2,
    knobPadding,
    strokeWidth,
    width: (strokeWidth + knobPadding * 2 + knobSize) * 2
  };
};

export const tone = theme => ({
  neutral: {
    strokeColor: theme.color.fillNeutral,
    backgroundColor: theme.color.fillInverseTertiary,
    backgroundColorChecked: theme.color.fillNeutral,
    knobColor: theme.color.fillNeutral,
    knobColorChecked: theme.color.fillInverse,
    mode: {
      disabled: {
        strokeColor: theme.color.fillNeutralDisabled,
        backgroundColor: theme.color.fillInverselDisabled,
        backgroundColorChecked: theme.color.fillNeutralDisabled,
        knobColor: theme.color.fillNeutralDisabled,
        knobColorChecked: theme.color.fillInverseDisabled
      }
    }
  },
  inverse: {
    strokeColor: theme.color.fillInverse,
    backgroundColor: theme.color.fillNeutralTertiary,
    backgroundColorChecked: theme.color.fillInverse,
    knobColor: theme.color.fillInverse,
    knobColorChecked: theme.color.fillNeutral,
    mode: {
      disabled: {
        strokeColor: theme.color.fillInverseDisabled,
        backgroundColor: theme.color.fillNeutralDisabled,
        backgroundColorChecked: theme.color.fillInverseDisabled,
        knobColor: theme.color.fillInverseDisabled,
        knobColorChecked: theme.color.fillNeutralDisabled
      }
    }
  },
  brand: {
    strokeColor: theme.color.fillBrand,
    backgroundColor: theme.color.fillBrandTertiary,
    backgroundColorChecked: theme.color.fillBrand,
    knobColor: theme.color.fillBrand,
    knobColorChecked: theme.color.fillInverse,
    mode: {
      disabled: {
        strokeColor: theme.color.fillNeutralDisabled,
        backgroundColor: theme.color.fillInverselDisabled,
        backgroundColorChecked: theme.color.fillNeutralDisabled,
        knobColor: theme.color.fillNeutralDisabled,
        knobColorChecked: theme.color.fillInverseDisabled
      }
    }
  }
});
