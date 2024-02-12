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

// Merge the componentConfigProp with the prop value
function mergeProps(componentConfigProp, prop) {
  let result = prop;
  if (
    typeof componentConfigProp === 'object' &&
    Object.keys(componentConfigProp).length &&
    typeof prop === 'object'
  ) {
    result = clone(componentConfigProp, prop);
  }

  return result ?? componentConfigProp;
}

function getPropertyDescriptor(name, key) {
  return {
    get() {
      const customGetter = this[`_get${capital(name)}`];
      if (customGetter && typeof customGetter === 'function') {
        const value = customGetter.call(this, this[key]);
        this[key] = value || this.__componentConfigProps?.[name]; // Defaults can also be set from withThemeStyles if used
        return mergeProps(this.__componentConfigProps?.[name], value);
      }

      return mergeProps(this.__componentConfigProps?.[name], this[key]); // Defaults can also be set from withThemeStyles if used
    },
    set(value) {
      const oldValue = this[key];
      if (value !== oldValue) {
        const changeHandler = this[`_set${capital(name)}`];
        if (changeHandler && typeof changeHandler === 'function') {
          value = changeHandler.call(this, value);
        }

        const newValue = key === 'style' ? clone(this[key], value) : value;

        if (
          typeof this[key] === 'object' &&
          this[key] !== null &&
          this[key].style
        ) {
          // If the property is for a nested component, recursively combine it with the component's existing styles, ensuring that any styles defined in componentConfig are also applied.
          const style = clone(this[key].style, value.style || {});
          newValue.style = style;
        }

        this[key] = newValue;
        this.queueRequestUpdate();
      }
    },
    configurable: true,
    enumerable: true
  };
}

function getAliasPropertyDescriptor(prev, curr) {
  const deprecationWarning = `The property "${prev}" is deprecated and will be removed in a future release. Please use "${curr}" instead.`;
  return {
    get() {
      console.warn(deprecationWarning);
      return this[curr];
    },
    set(value) {
      console.warn(deprecationWarning);
      this[curr] = value;
    }
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
        if (!updateManager.isInitialized) {
          updateManager.init(this.stage);
        }
        // create custom accessors and mutators for the props in the properties array
        const props = this.constructor.properties || [];
        props.forEach(name => {
          const key = '_' + name;
          const descriptor = getPropertyDescriptor(name, key);
          if (descriptor !== undefined) {
            Object.defineProperty(prototype, name, descriptor);
          }
        });

        // create custom accessors and mutators that map the props in the alias array to
        // the props in the properties array (and use the getters/setters defined above)
        const aliasProps = this.constructor.aliasProperties || [];
        aliasProps.forEach(alias => {
          if (
            alias &&
            typeof alias.prev === 'string' &&
            typeof alias.curr === 'string'
          ) {
            const descriptor = getAliasPropertyDescriptor(
              alias.prev,
              alias.curr
            );
            if (descriptor !== undefined) {
              Object.defineProperty(prototype, alias.prev, descriptor);
            }
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
      if (!this._isAttached()) return;
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
