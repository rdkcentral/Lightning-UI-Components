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
  textY: 0,
  iconW: theme.spacer.xxl + theme.spacer.xs,
  iconH: theme.spacer.xxl + theme.spacer.xs,
  contentSpacing: theme.spacer.md,
  marginBottom: theme.typography.body1.lineHeight / -10,
  textStyle: {
    ...theme.typography.body1,
    verticalAlign: 'bottom'
  },
  maxLines: 1,
  justify: 'center'
});

export const defaultStyle = {
  textY: 0,
  iconW: 44,
  iconH: 44,
  contentSpacing: 10,
  marginBottom: -4,
  textStyle: {
    fontSize: 25,
    fontWeight: 300,
    lineHeight: 40,
    verticalAlign: 'bottom',
    textBaseline: 'bottom',
    fontFace: 'Arial'
  },
  maxLines: 1,
  justify: 'center'
};

export const schema = {
  type: 'object',
  properties: {
    textY: {
      type: 'number'
    },
    iconW: {
      type: 'number'
    },
    iconH: {
      type: 'number'
    },
    contentSpacing: {
      type: 'number'
    },
    marginBottom: {
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
        }
      }
    },
    maxLines: {
      type: 'number'
    },
    justify: {
      type: 'string'
    }
  }
};
