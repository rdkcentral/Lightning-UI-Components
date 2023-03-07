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

import lng from '@lightningjs/core';
import { context } from '../../globals';
import {
  withUpdates,
  withTags,
  withHandleKey,
  withLayout,
  withThemeStyles,
  withExtensions
} from '../../mixins/index.js';
import { isComponentOnScreen } from '../../utils/index.js';

class Base extends lng.Component {
  _construct() {
    this.constructor.__componentName; // Check that __componentName is set
    this.skipPlinko = false;
    this.centerInParent = false;
    if (!this.loaded) this.loaded = Promise.resolve(); // By default this is a resolved promise. Components can use _resetLoadedPromise if they require the functionality
  }

  _init() {
    this.queueRequestUpdate();
  }

  _resetLoadedPromise() {
    this.loaded = new Promise((resolve, reject) => {
      this._resolveLoadedPromise = resolve;
      this._rejectLoadedPromise = reject;
    });
  }

  _update() {}

  _focus() {
    if (this.shouldSmooth === undefined) this.shouldSmooth = true;
    this.queueRequestUpdate();
  }

  _unfocus() {
    this.queueRequestUpdate();
  }

  /**
   * This method accepts a target component, patch object, and optional smooth object.
   * If the component is visible, it will smooth in the smooth object, or fall back to
   * the patch object, if not it will apply the patch.
   *
   * @param {component reference} ref tag ref of target component
   * @param {object} patch object of properties to patch to target
   * @param {object} smooth object of properties to smooth to target
   */
  applySmooth(ref, patch, smooth) {
    if (this.shouldSmooth) {
      ref.smooth = smooth || patch;
    } else {
      ref.patch(patch);
    }
  }

  // keep announce methods out of the update lifecycle (do not put in properties array)
  // announce methods do not need to re-render component
  get announce() {
    return this._announce;
  }

  set announce(announce) {
    this._announce = announce;
  }

  get announceContext() {
    return this._announceContext;
  }

  set announceContext(announce) {
    this._announceContext = announce;
  }

  get shouldSmooth() {
    return this._shouldSmooth;
  }

  set shouldSmooth(shouldSmooth) {
    this._shouldSmooth = shouldSmooth;
  }

  get _isDisabledMode() {
    return this.mode === 'disabled';
  }

  get _isUnfocusedMode() {
    return this.mode === 'unfocused';
  }

  get _isFocusedMode() {
    return this.mode === 'focused';
  }

  isFullyOnScreen() {
    return isComponentOnScreen(this);
  }

  getFocusScale() {
    return context.theme.layout.focusScale;
  }

  getUnfocusScale() {
    return 1;
  }
}

function withMixins(baseComponent) {
  return withExtensions(
    withLayout(
      withThemeStyles(withUpdates(withTags(withHandleKey(baseComponent))))
    )
  );
}

export default withMixins(Base);
