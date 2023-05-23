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

import { getWidthByUpCount } from '../../utils/index.js';

export const base = theme => ({
  w: getWidthByUpCount(theme, 1),
  titleMarginLeft: theme.layout.gutterX.xs,
  titleTextStyle: {
    ...theme.typography.headline1,
    textColor: theme.color.textNeutral
  },
  rowMarginTop: theme.layout.gutterY.xs
});

// TODO: Need to fix this
export const defaultStyle = {
  w: 1620,
  titleMarginLeft: 20,
  titleTextStyle: {
    fontSize: 35,
    fontWeight: 500,
    lineHeight: 48,
    verticalAlign: 'middle',
    textBaseline: 'bottom',
    fontFace: 'Arial',
    textColor: 4294506490
  },
  rowMarginTop: 20,
  itemSpacing: 20,
  scrollIndex: 0,
  alwaysScroll: false,
  neverScroll: false,
  itemTransition: {
    timingFunction: 'cubic-bezier(0, 0, 1, 1)',
    delay: 0,
    duration: 0.25
  }
};

export const schema = {
  type: 'object',
  properties: {
    w: {
      type: 'number'
    },
    titleMarginLeft: {
      type: 'number'
    },
    titleTextStyle: {
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
    rowMarginTop: {
      type: 'number'
    }
  }
};
