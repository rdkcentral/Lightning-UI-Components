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
  const size = theme.spacer.xxl;
  return {
    alpha: 1,
    w: size,
    h: size,
    knobHeight: size / 2,
    knobWidth: size / 2,
    radius: size / 2,
    strokeWidth: theme.stroke.sm
  };
};

export const tone = theme => ({
  neutral: {
    backgroundColor: theme.color.fillNeutralDisabled,
    backgroundColorChecked: theme.color.fillNeutral,
    knobColor: theme.color.fillInverse,
    strokeColor: theme.color.strokeInverse
  },
  inverse: {
    backgroundColor: theme.color.fillInverseDisabled,
    backgroundColorChecked: theme.color.fillInverse,
    knobColor: theme.color.fillNeutral,
    strokeColor: theme.color.strokeNeutral
  },
  brand: {
    backgroundColor: theme.color.fillInverseDisabled,
    backgroundColorChecked: theme.color.fillBrand,
    knobColor: theme.color.fillNeutral,
    strokeColor: theme.color.strokeNeutral
  }
});

export const mode = theme => ({
  disabled: { alpha: theme.alpha.inactive }
});

export const defaultStyle = {
  alpha: 0.5,
  w: 40,
  h: 40,
  knobHeight: 20,
  knobWidth: 20,
  radius: 20,
  strokeWidth: 2,
  backgroundColor: 2163800058,
  backgroundColorChecked: 4294506490,
  knobColor: 4279769113,
  strokeColor: 4279769113
};

export const schema = {
  type: 'object',
  properties: {
    alpha: {
      type: 'number'
    },
    w: {
      type: 'number'
    },
    h: {
      type: 'number'
    },
    knobHeight: {
      type: 'number'
    },
    knobWidth: {
      type: 'number'
    },
    radius: {
      type: 'number'
    },
    strokeWidth: {
      type: 'number'
    },
    backgroundColor: {
      type: 'number'
    },
    backgroundColorChecked: {
      type: 'number'
    },
    knobColor: {
      type: 'number'
    },
    strokeColor: {
      type: 'number'
    }
  }
};
