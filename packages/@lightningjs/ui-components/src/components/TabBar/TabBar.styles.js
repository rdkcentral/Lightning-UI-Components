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
  tabSpacing: theme.spacer.lg,
  tabsMarginBottom: theme.spacer.xxl
});

export const defaultStyle = {
  tabSpacing: 20,
  tabsMarginBottom: 40
};

export const schema = {
  type: 'object',
  properties: {
    tabSpacing: {
      type: 'number'
    },
    tabsMarginBottom: {
      type: 'number'
    }
  }
};
