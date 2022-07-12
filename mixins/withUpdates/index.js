/**
 * Copyright 2022 Comcast Cable Communications Management, LLC
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

import { debounce } from 'debounce';

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
        this[key] = value;
        this._requestUpdateDebounce();
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
      const props = this.constructor.properties || [];
      props.forEach(name => {
        const key = '_' + name;
        const descriptor = getPropertyDescriptor(name, key);
        if (descriptor !== undefined) {
          Object.defineProperty(Object.getPrototypeOf(this), name, descriptor);
        }
      });

      this._whenEnabled = new Promise(resolve => {
        this._whenEnabledResolver = resolve;
      });

      this._requestUpdateDebounce = debounce(this._requestUpdate.bind(this), 0);

      super._construct && super._construct();
    }

    _firstEnable() {
      this._readyForUpdates = true;
      this._whenEnabledResolver();
      this._requestUpdateDebounce.clear();
      this._update();
      super._firstEnable && super._firstEnable();
    }

    _detach() {
      super._detach();
      this._requestUpdateDebounce.clear();
    }

    _requestUpdate() {
      if (this._readyForUpdates) {
        this._update();
      }
    }
  };
}
