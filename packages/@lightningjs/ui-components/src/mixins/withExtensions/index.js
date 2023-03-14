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

import { context } from '../../globals';

const SUFFIX = '__original';

export default function withExtensions(Base) {
  if (Base.prototype.constructor._withExtensionsApplied) {
    return Base;
  }
  return class extends Base {
    static get name() {
      return Base.name;
    }

    static get __componentName() {
      if (super.__componentName) return super.__componentName;
      throw new Error(
        `A valid static __componentName property is required for theming to work properly. Please add this to the ${this.constructor.name} class.`
      );
    }

    static get _withExtensionsApplied() {
      // Extensions should only be applied once per class. This prevents it running multiple times. Ex. Surface -> Tile
      return true;
    }

    /**
     * Climb the prototype chain to establish what component's extension rules this component should also inherit
     * @returns {set} // set of strings
     */
    get _prototypeChain() {
      if (this.__prototypeChain) return this.__prototypeChain;
      const prototypeChain = new Set();
      let proto = this;
      do {
        proto = Object.getPrototypeOf(proto);
        if (null !== proto && typeof proto === 'object') {
          try {
            if (proto.constructor.__componentName)
              prototypeChain.add(proto.constructor.__componentName);
          } catch (error) {
            // Catch error when __componentName is not set in Base component
          }
        }
      } while (proto);
      this.__prototypeChain = prototypeChain;
      return prototypeChain;
    }

    /**
     * Get all valid extensions from the current theme
     * @returns {object[]} // Array of objects
     */
    get _extensions() {
      const extensions = context && context.theme && context.theme.extensions;
      if (
        !extensions ||
        !Array.isArray(extensions) ||
        (Array.isArray(extensions) && !extensions.length)
      )
        return [];
      return (
        extensions
          .filter(
            ({ targetComponent, extension }) =>
              (typeof targetComponent === 'string' ||
                Array.isArray(targetComponent)) &&
              typeof extension === 'function'
          )
          .slice()
          .reverse() || [] // Array is reversed to ensure extensions are executed in the proper order top -> bottom
      );
    }

    /**
     * Get all extensions to apply to this component
     * @return {class[]} // Array of classes
     */
    get _componentExtensions() {
      return this._extensions
        .filter(({ targetComponent }) => {
          // check to see if extension should be applied to this component
          if (typeof targetComponent === 'string') {
            return (
              targetComponent === this.constructor.__componentName ||
              this._prototypeChain.has(targetComponent)
            );
          } else if (Array.isArray(targetComponent)) {
            return targetComponent.find(pattern => {
              if (pattern.startsWith('/') && pattern.endsWith('/')) {
                const ComponentRegExp = new RegExp(pattern.slice(1, -1));
                return Array.from(this._prototypeChain).some(name =>
                  ComponentRegExp.test(name)
                );
              } else {
                return this._prototypeChain.has(pattern);
              }
            });
          }
          return false;
        })
        .reduce((acc, { extension }) => {
          acc.push(extension);
          return acc;
        }, []);
    }

    /**
     * Check if theme extension mixins have already been applied
     * @return {boolean}
     */
    get _extensionApplied() {
      return (
        this._currentComponentExtensionLength === this._appliedExtensionLength
      );
    }

    _construct() {
      this._appliedExtensionLength = 0; // After the extensions are applied we store the length of all to determine later on if they have been applied before
      this._extendedList = {};
      this._extensionInstance = {}; // This will hold the extension instance once created
      context.on('themeUpdate', () => {
        this._currentComponentExtensionLength =
          this._calculateComponentExtensionLength();
        this._createExtension.call(this);
      });
      this._currentComponentExtensionLength =
        this._calculateComponentExtensionLength();
      this._createExtension();
      super._construct();
    }

    _resetComponent() {
      this._extensionInstance._extensionCleanup &&
        this._extensionInstance._extensionCleanup.call(this);

      (Object.keys(this._extendedList) || []).forEach(prop => {
        delete this[prop];
        delete this[prop + SUFFIX];
      });

      this._extensionInstance = {};
      this._extendedList = {};
    }

    _calculateComponentExtensionLength() {
      const extensionLength = this._componentExtensions.reduce(
        (acc, extensionMixin) => {
          acc += extensionMixin.toString().length;
          return acc;
        },
        0
      );
      return extensionLength;
    }

    _createExtension() {
      if (this._extensionApplied) return;
      this._resetComponent();
      const ExtendedClass = this._createExtensionClass();
      const instance = new ExtendedClass();
      this._extendedList = this._createExtensionAliases(instance);
      this._extensionInstance = instance;
      this._setComponentAliases(this._extendedList);
    }

    /**
     * Create the extension class
     * @return {class}
     */
    _createExtensionClass() {
      /**
       *
       * This class will sit at the bottom of the prototype stack and redirect all calls to the original to prevent an infinite loop
       *
       */
      function ExtensionBase() {}

      /** Create a new class the represents the extensions */
      const ExtendedClass = this._componentExtensions.reduce(
        (acc, extension) => {
          // Get the length of the extension and store the value. This will be used to determine if the mixin has been changed and needs to be re-applied
          return extension(acc);
        },
        ExtensionBase
      );

      // Store the length of the extension to be applied
      this._appliedExtensionLength = this._calculateComponentExtensionLength();

      return ExtendedClass;
    }

    _createExtensionAliases(obj) {
      // Find the prototype to be replaced
      let baseProto = obj;
      for (let i = 0; i < this._componentExtensions.length + 1; i++) {
        baseProto = Object.getPrototypeOf(baseProto);
      }

      /**
       * We will create alias for all the methods, getters, setters that will be overwritten by the extension layer
       * Create a list of properties to alias
       */

      const extended = {};

      const extensionOverrides = this._componentExtensions.reduce(
        (acc, extension) => {
          const extensionClass = new extension(class FakeClass {});
          const instance = new extensionClass();
          // Get the descriptors
          const originalComponentDescriptors = Object.getOwnPropertyDescriptors(
            Object.getPrototypeOf(instance)
          );
          Object.keys(originalComponentDescriptors).forEach(prop => {
            if (['constructor'].includes(prop)) return;
            if (
              originalComponentDescriptors[prop].get ||
              originalComponentDescriptors[prop].set
            ) {
              extended[prop] = { type: 'accessor' };
              acc[prop] = {
                get: function () {
                  return this[prop + SUFFIX];
                },
                set: function (v) {
                  this[prop + SUFFIX] = v;
                }
              };
              return;
            }
            extended[prop] = { type: 'method' };
            acc[prop] = {
              value: function () {
                this[prop + SUFFIX] && this[prop + SUFFIX]();
              }
            };
          });
          return acc;
        },
        {}
      );

      Object.defineProperties(baseProto, extensionOverrides);
      Object.setPrototypeOf(baseProto, this); // Set the bottom level prototype === the component

      return extended;
    }

    _setComponentAliases(aliasObj) {
      Object.keys(aliasObj).forEach(prop => {
        // Create an alias for the existing component property to save the original value
        this[prop + SUFFIX] = this[prop];
        if (aliasObj[prop].type === 'method') {
          this[prop] = this._extensionInstance[prop];
        } else if (aliasObj[prop].type === 'accessor') {
          Object.defineProperty(this, prop, {
            configurable: true, // Allow accessors to be updated on theme change
            get() {
              return this._extensionInstance[prop];
            },
            set(v) {
              this._extensionInstance[prop] = v;
            }
          });
        }
      });
    }
  };
}
