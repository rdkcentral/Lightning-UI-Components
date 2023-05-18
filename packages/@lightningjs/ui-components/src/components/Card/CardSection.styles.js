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
  iconWidth: theme.spacer.xxl,
  iconHeight: theme.spacer.xxl,
  h: theme.spacer.md * 20
});

export const defaultStyle = {
  iconWidth: 40,
  iconHeight: 40,
  h: 200
};

export const schema = {
  type: 'object',
  properties: {
    iconWidth: {
      type: 'number'
    },
    iconHeight: {
      type: 'number'
    },
    h: {
      type: 'number'
    }
  }
};
