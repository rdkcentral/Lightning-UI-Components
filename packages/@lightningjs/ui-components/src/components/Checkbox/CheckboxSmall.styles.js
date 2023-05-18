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
  const strokeWidth = theme.stroke.sm;
  const size = theme.spacer.xl - strokeWidth * 2;
  return {
    w: size,
    h: size,
    checkW: theme.spacer.md,
    checkH: theme.spacer.md + theme.spacer.xxs,
    radius: size / 2,
    strokeWidth
  };
};

export const defaultStyle = {
  w: 26,
  h: 26,
  checkW: 10,
  checkH: 12,
  radius: 13,
  strokeWidth: 2
};

export const schema = {
  type: 'object',
  properties: {
    w: {
      type: 'number'
    },
    h: {
      type: 'number'
    },
    checkW: {
      type: 'number'
    },
    checkH: {
      type: 'number'
    },
    radius: {
      type: 'number'
    },
    strokeWidth: {
      type: 'number'
    }
  }
};
