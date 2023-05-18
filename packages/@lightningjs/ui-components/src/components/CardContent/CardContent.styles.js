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

import utils from '../../utils/index.js';

export const base = theme => ({
  paddingVertical: theme.spacer.md * 1.5,
  radius: theme.radius.md,
  expandedW: utils.getWidthByUpCount(theme, 2),
  expandedH: utils.getDimensions(theme, { ratioX: 16, ratioY: 9, upCount: 4 })
    .h,
  imageSize: {
    w: utils.getDimensions(theme, { ratioX: 16, ratioY: 9, upCount: 4 }).w,
    h: utils.getDimensions(theme, { ratioX: 16, ratioY: 9, upCount: 4 }).h
  },
  metadata: { descriptionTextStyle: { maxLines: 2 } }
});

export const defaultStyle = {
  paddingVertical: 15,
  radius: 0,
  expandedW: 800,
  expandedH: 219,
  imageSize: {
    w: 390,
    h: 219
  },
  metadata: {
    descriptionTextStyle: {
      maxLines: 2
    }
  }
};

export const schema = {
  type: 'object',
  properties: {
    paddingVertical: {
      type: 'number'
    },
    radius: {
      type: 'number'
    },
    expandedW: {
      type: 'number'
    },
    expandedH: {
      type: 'number'
    },
    imageSize: {
      type: 'object',
      properties: {
        w: {
          type: 'number'
        },
        h: {
          type: 'number'
        }
      }
    },
    metadata: {
      type: 'object',
      properties: {
        descriptionTextStyle: {
          type: 'object',
          properties: {
            maxLines: {
              type: 'number'
            }
          }
        }
      }
    }
  }
};
