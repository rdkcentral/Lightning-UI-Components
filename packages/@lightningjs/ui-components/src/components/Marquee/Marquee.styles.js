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
  fadeW: theme.layout.gutterX.lg,
  offset: theme.spacer.xxl,
  shouldSmooth: false,
  textStyle: theme.typography.body1
});

export const defaultStyle = {
  fadeW: 80,
  offset: 40,
  shouldSmooth: false,
  textStyle: {
    fontSize: 25,
    fontWeight: 300,
    lineHeight: 40,
    verticalAlign: 'middle',
    textBaseline: 'bottom',
    fontFace: 'Arial'
  }
};

export const schema = {
  type: 'object',
  properties: {
    fadeW: {
      type: 'number'
    },
    offset: {
      type: 'number'
    },
    shouldSmooth: {
      type: 'boolean'
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
    }
  }
};
