/**
 * Copyright 2021 Comcast Cable Communications Management, LLC
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

import lng from '@lightningjs/core';
import { createStyles } from '../../Styles';
import { getDefaultTheme } from '../../Styles';
import { clone } from '../../utils';

lng.uiTheme = lng.uiTheme || getDefaultTheme();

export default function withStyles(Base, styles, theme) {
  const _theme = theme || Base.theme || lng.uiTheme;
  const _styles = Base.styles
    ? clone(Base.styles, createStyles(styles, _theme))
    : createStyles(styles, _theme);

  return class extends Base {
    static get name() {
      return Base.name;
    }
    static get styles() {
      return _styles;
    }
    get styles() {
      return _styles;
    }
  };
}
