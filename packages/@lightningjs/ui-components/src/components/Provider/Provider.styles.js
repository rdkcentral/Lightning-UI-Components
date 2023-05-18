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

export function base(theme) {
  return {
    counterTextStyle: theme.typography.headline3,
    itemSize: theme.layout.gutterX.sm,
    itemSpacing: theme.spacer.md,
    radius: theme.radius.sm,
    alpha: 1
  };
}

export const mode = theme => ({
  disabled: {
    alpha: theme.alpha.inactive
  }
});

export const tone = theme => ({
  neutral: {
    counterBackgroundColor: theme.color.fillInverseSecondary
  },
  inverse: {
    counterBackgroundColor: theme.color.fillNeutralSecondary
  },
  brand: {
    counterBackgroundColor: theme.color.fillInverseSecondary
  }
});

export const defaultStyle = {
  counterTextStyle: {
    fontSize: 25,
    fontWeight: 500,
    lineHeight: 36,
    verticalAlign: 'middle',
    textBaseline: 'bottom',
    fontFace: 'Arial'
  },
  itemSize: 40,
  itemSpacing: 10,
  radius: 0,
  alpha: 0.5,
  counterBackgroundColor: 3004700697
};

export const schema = {
  type: 'object',
  properties: {
    counterTextStyle: {
      type: 'object',
      properties: {
        fontSize: {
          type: 'number'
        },
        fontWeight: {
          type: 'number'
        },
        lineHeight: {
          type: 'number'
        },
        verticalAlign: {
          type: 'string'
        },
        textBaseline: {
          type: 'string'
        },
        fontFace: {
          type: 'string'
        }
      }
    },
    itemSize: {
      type: 'number'
    },
    itemSpacing: {
      type: 'number'
    },
    radius: {
      type: 'number'
    },
    alpha: {
      type: 'number'
    },
    counterBackgroundColor: {
      type: 'number'
    }
  }
};
