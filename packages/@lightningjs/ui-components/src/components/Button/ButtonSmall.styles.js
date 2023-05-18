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

import { getWidthByColumnSpan } from '../../utils/index.js';

export const base = theme => ({
  h: theme.spacer.md * 8,
  minWidth: getWidthByColumnSpan(theme, 1),
  paddingX: theme.spacer.xxl,
  prefixH: theme.spacer.xl,
  suffixH: theme.spacer.xl,
  textStyle: theme.typography.button2
});

export const defaultStyle = {
  h: 80,
  minWidth: 144,
  paddingX: 40,
  prefixH: 30,
  suffixH: 30,
  textStyle: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 32,
    verticalAlign: 'middle',
    textBaseline: 'bottom',
    fontFace: 'Arial'
  }
};

export const schema = {
  type: 'object',
  properties: {
    h: {
      type: 'number'
    },
    minWidth: {
      type: 'number'
    },
    paddingX: {
      type: 'number'
    },
    prefixH: {
      type: 'number'
    },
    suffixH: {
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
    }
  }
};
