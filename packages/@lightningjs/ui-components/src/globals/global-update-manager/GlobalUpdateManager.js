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

import context from '../context/index.js';

class GlobalUpdateManager {
  constructor() {
    this._updateThemeSet = new Set();
    this._requestUpdateSet = new Set();
    this._timeout = null;
    this._runUpdatesTimeoutHandler = this._runUpdatesTimeoutHandler.bind(this);
  }

  _runUpdatesTimeoutHandler() {
    this._timeout = null;
    this._updateThemeSet.forEach(component => {
      try {
        component._updateThemeComponent();
      } catch (e) {
        context.error('Error updating component themes', e);
      }
    });
    this._updateThemeSet.clear();

    this._requestUpdateSet.forEach(component => {
      try {
        component.requestUpdate();
      } catch (e) {
        context.error('Error updating component', e);
      }
    });
    this._requestUpdateSet.clear();
  }

  /**
   * Force all updates now
   *
   * @returns
   */
  flush() {
    // If there is no timeout then there is definately nothing to update
    if (!this._timeout) return;
    clearTimeout(this._timeout);
    this._runUpdatesTimeoutHandler();
  }

  addUpdateTheme(component) {
    this._updateThemeSet.add(component);
    if (!this._timeout) {
      this._timeout = setTimeout(this._runUpdatesTimeoutHandler, 0);
    }
  }

  deleteUpdateTheme(component) {
    // Don't bother checking and clearing the timeout if one is active
    // Not worth the overhead. More than likely it needs to run again anyway.
    this._updateThemeSet.delete(component);
  }

  addRequestUpdate(component) {
    this._requestUpdateSet.add(component);
    if (!this._timeout) {
      this._timeout = setTimeout(this._runUpdatesTimeoutHandler, 0);
    }
  }

  deleteRequestUpdate(component) {
    // See note in deleteRequestUpdate()
    this._requestUpdateSet.delete(component);
  }
}

export const updateManager = new GlobalUpdateManager();
