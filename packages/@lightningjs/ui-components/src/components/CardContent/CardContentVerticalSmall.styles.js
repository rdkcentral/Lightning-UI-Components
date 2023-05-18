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
  expandedW: utils.getWidthByUpCount(theme, 4),
  expandedH:
    utils.getDimensions(theme, { ratioX: 16, ratioY: 9, upCount: 4 }).h +
    theme.spacer.md * 14,
  metadata: { descriptionTextStyle: { maxLines: 1 } }
});

export const defaultStyle = {
  expandedW: 390,
  expandedH: 359,
  metadata: {
    descriptionTextStyle: {
      maxLines: 1
    }
  }
};

export const schema = {
  type: 'object',
  properties: {
    expandedW: {
      type: 'number'
    },
    expandedH: {
      type: 'number'
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
