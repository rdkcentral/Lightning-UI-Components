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
  contentSpacing: theme.spacer.sm,
  paddingX: theme.spacer.md,
  paddingY: theme.spacer.xs,
  offsetY: theme.spacer.xxs,
  radius: theme.radius.sm,
  textAlign: 'center',
  textStyle: theme.typography.caption1
});

export const tone = theme => ({
  neutral: {
    backgroundColor: theme.color.fillInverseSecondary,
    iconColor: theme.color.fillNeutral,
    textStyle: { textColor: theme.color.textNeutral }
  },
  inverse: {
    backgroundColor: theme.color.fillNeutralSecondary,
    iconColor: theme.color.fillInverse,
    textStyle: { textColor: theme.color.textInverse }
  },
  brand: {
    backgroundColor: theme.color.fillBrand,
    iconColor: theme.color.fillNeutral,
    textStyle: { textColor: theme.color.textNeutral }
  }
});

export const defaultStyle = {
  contentSpacing: 8,
  paddingX: 10,
  paddingY: 4,
  offsetY: 2,
  radius: 0,
  textAlign: 'center',
  textStyle: {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 24,
    verticalAlign: 'middle',
    textBaseline: 'bottom',
    fontFace: 'Arial',
    textColor: 4294506490
  },
  backgroundColor: 3004700697,
  iconColor: 4294506490
};

export const schema = {
  type: 'object',
  properties: {
    contentSpacing: {
      type: 'number'
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
    radius: {
      type: 'number'
    },
    textAlign: {
      type: 'string'
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
    },
    iconColor: {
      type: 'number'
    }
  }
};
