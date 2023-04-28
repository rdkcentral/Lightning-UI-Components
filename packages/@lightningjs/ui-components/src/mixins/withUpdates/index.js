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

import { context, updateManager } from '../../globals';
import { clone } from '../../utils';

function capital(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getPropertyDescriptor(name, key) {
  return {
    get() {
      const customGetter = this[`_get${capital(name)}`];
      if (customGetter && typeof customGetter === 'function') {
        const value = customGetter.call(this, this[key]);
        this[key] = value;
      }
      return this[key];
    },
    set(value) {
      const oldValue = this[key];
      if (value !== oldValue) {
        const changeHandler = this[`_set${capital(name)}`];
        if (changeHandler && typeof changeHandler === 'function') {
          value = changeHandler.call(this, value);
        }
        this[key] = key === 'style' ? clone(this[key], value) : value;
        this.queueRequestUpdate();
      }
    },
    configurable: true,
    enumerable: true
  };
}

export default function withUpdates(Base) {
  return class extends Base {
    static get name() {
      return Base.name;
    }

    _construct() {
      const prototype = Object.getPrototypeOf(this);
      if (!prototype._withUpdatesInitialized) {
        const props = this.constructor.properties || [];
        props.forEach(name => {
          const key = '_' + name;
          const descriptor = getPropertyDescriptor(name, key);
          if (descriptor !== undefined) {
            Object.defineProperty(prototype, name, descriptor);
          }
        });
        prototype._withUpdatesInitialized = true;
      }

      this._whenEnabled = new Promise(resolve => {
        this._whenEnabledResolver = resolve;
      });

      super._construct && super._construct();
    }

    queueRequestUpdate() {
      updateManager.addRequestUpdate(this);
    }

    _firstEnable() {
      this._readyForUpdates = true;
      this._whenEnabledResolver();
      updateManager.deleteRequestUpdate(this);
      this.requestUpdate();
      super._firstEnable && super._firstEnable();
    }

    _detach() {
      super._detach();
      updateManager.deleteRequestUpdate(this);
    }

    /**
     * Request an immediate component update.
     *
     * @remarks
     * Except for when calling `super._update()` from a `_update()`
     * implementation, call this instead of calling `_update()` directly
     *
     * @param {boolean} force If set, bypasses the '_readyForUpdates' check
     */
    requestUpdate(force = false) {
      if (this._styleManager && !this.style) return; // Style is not ready yet
      if (this._readyForUpdates || force) {
        const result = this._update();
        if (typeof result === 'object' && result !== null && result.catch) {
          // This is a promise, make sure to capture any errors
          result.catch(e => {
            context.error(
              `asyncronous _update() error in '${this.constructor.__componentName}'`,
              this,
              e
            );
          });
        }
      }
    }

    logPropTable() {
      console.table(this._propTable);
    }

    get _propTable() {
      return this.constructor.properties.reduce((acc, prop) => {
        acc[prop] = this[prop];
        return acc;
      }, {});
    }
  };
}
