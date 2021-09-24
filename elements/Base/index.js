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
import {
  withStyles,
  withUpdates,
  withTags,
  withHandleKey,
  withLayout
} from '../../mixins';

const baseStyles = theme => ({
  getUnfocusScale: () => 1,
  getFocusScale: theme.getFocusScale
});

class Base extends lng.Component {
  _construct() {
    this._whenEnabled = new Promise(
      resolve => (this._whenEnabledResolver = resolve)
    );
    this._getFocusScale = this.styles.getFocusScale || function() {};
    this._getUnfocusScale = this.styles.getUnfocusScale || function() {};
  }

  _firstEnable() {
    this._whenEnabledResolver();
  }

  _init() {
    this._update();
  }

  _update() {}

  _focus() {
    if (this._smooth === undefined) this._smooth = true;
    this._update();
  }

  _unfocus() {
    this._update();
  }
}

function withMixins(baseComponent) {
  return withLayout(withUpdates(withTags(withHandleKey(baseComponent))));
}

export default withMixins(withStyles(Base, baseStyles));
