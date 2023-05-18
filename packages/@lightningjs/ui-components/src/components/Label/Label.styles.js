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

export const base = theme => ({
  radius: [
    theme.radius.md,
    theme.radius.md,
    theme.radius.md,
    theme.radius.none
  ],
  paddingX: theme.spacer.lg,
  paddingY: theme.spacer.md,
  offsetY: theme.spacer.xxs,
  textStyle: theme.typography.caption1
});

export const tone = theme => ({
  neutral: {
    textStyle: { textColor: theme.color.textInverse },
    backgroundColor: theme.color.fillNeutral
  },
  inverse: {
    textStyle: { textColor: theme.color.textNeutral },
    backgroundColor: theme.color.fillInverse
  },
  brand: {
    textStyle: { textColor: theme.color.textNeutral },
    backgroundColor: theme.color.fillBrand
  }
});

export const defaultStyle = {
  radius: [0, 0, 0, 0],
  paddingX: 20,
  paddingY: 10,
  offsetY: 2,
  textStyle: {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 24,
    verticalAlign: 'middle',
    textBaseline: 'bottom',
    fontFace: 'Arial',
    textColor: 4279769113
  },
  backgroundColor: 4294506490
};

export const schema = {
  type: 'object',
  properties: {
    radius: {
      type: 'array',
      items: [
        {
          type: 'number'
        },
        {
          type: 'number'
        },
        {
          type: 'number'
        },
        {
          type: 'number'
        }
      ]
    },
    paddingX: {
      type: 'number'
    },
    paddingY: {
      type: 'number'
    },
    offsetY: {
      type: 'number'
    },
    textStyle: {
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
        },
        textColor: {
          type: 'number'
        }
      }
    },
    backgroundColor: {
      type: 'number'
    }
  }
};
