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
  return class extends Base {
    static get name() {
      return Base.name;
    }

    static get __componentName() {
      if (!super.__componentName) {
        throw new Error(
          `A valid static __componentName property is required for theming to work properly. Please add this to the ${this.constructor.name} class.`
        );
      }
      return super.__componentName;
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
      const extensions = context?.theme?.extensions;
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

    _construct() {
      this._setupExtensionBound = this._setupExtension.bind(this);
      context.on('themeUpdate', this._setupExtensionBound);
      this._createExtension();
      super._construct();
    }

    _detach() {
      super._detach();
      context.off('themeUpdate', this._setupExtensionBound);
    }

    _setupExtension() {
      this._resetComponent();
      this.constructor._withExtensionsApplied = false;
      this._createExtension();
    }

    _resetComponent() {
      this._extensionCleanup && this._extensionCleanup();
      const thisPrototype = Object.getPrototypeOf(this);

      // Cleanup added props: just delete
      if (thisPrototype.addedProps) {
        // Props that were just added can be deleted
        thisPrototype.addedProps.forEach(prop => {
          delete thisPrototype[prop];
        });
        delete thisPrototype.addedProps;
      }

      // Cleanup overridden props: replace saved originals then delete
      if (thisPrototype.overRiddenProps) {
        thisPrototype.overRiddenProps.forEach(prop => {
          if (thisPrototype.originalDescriptors[prop]) {
            Object.defineProperty(
              thisPrototype,
              prop,
              thisPrototype.originalDescriptors[prop]
            );
            delete thisPrototype[prop + SUFFIX];
          } else {
            delete thisPrototype[prop];
            delete thisPrototype[prop + SUFFIX];
          }
        });
        delete thisPrototype.overRiddenProps;
      }
      if (thisPrototype.originalDescriptor) {
        delete thisPrototype.originalDescriptors;
      }
    }

    _createExtension() {
      // Only setup once per component
      if (this.constructor._withExtensionsApplied) {
        return;
      }
      class ExtensionBaseClass {}

      const componentExtensions = this._componentExtensions;

      // create an extended class and accumulate all methods.
      // overrides are fine b/c they're preserved in the ExtendedClass
      const accumDescriptors = {};
      const ExtendedClass = componentExtensions.reduce((acc, ext) => {
        const extended = ext(acc);
        Object.assign(
          accumDescriptors,
          Object.getOwnPropertyDescriptors(extended.prototype)
        );
        return extended;
      }, ExtensionBaseClass);

      const thisPrototype = Object.getPrototypeOf(this);
      const existingDescriptors = getAllCustomDescriptors(thisPrototype);

      thisPrototype.originalDescriptors =
        Object.getOwnPropertyDescriptors(thisPrototype);

      thisPrototype.addedProps = [];
      thisPrototype.overRiddenProps = [];
      Object.keys(accumDescriptors).forEach(prop => {
        if (prop === 'constructor') {
          return;
        }

        if (existingDescriptors[prop]) {
          thisPrototype.overRiddenProps.push(prop);
          // if prop exists on base, need to keep original method before overriding
          Object.defineProperty(
            thisPrototype,
            prop + SUFFIX,
            existingDescriptors[prop]
          );

          // then add overriding method to current class prototype

          if (accumDescriptors[prop].get || accumDescriptors[prop].set) {
            // Setup accessor
            Object.defineProperty(thisPrototype, prop, accumDescriptors[prop]);

            // Map to original accessor with suffix at ExtensionBase level
            Object.defineProperty(ExtensionBaseClass.prototype, prop, {
              configurable: true,
              get: function () {
                return this[prop + SUFFIX];
              },
              set: function (v) {
                this[prop + SUFFIX] = v;
              }
            });
          } else {
            // setup standard method
            thisPrototype[prop] = ExtendedClass.prototype[prop];

            // Base Extension class calls this original method with stored name
            Object.defineProperty(ExtensionBaseClass.prototype, prop, {
              value: function (...args) {
                this[prop + SUFFIX] && this[prop + SUFFIX](...args);
              }
            });
          }
        } else {
          thisPrototype.addedProps.push(prop);
          //otherwise we can just add to the prototype
          Object.defineProperty(thisPrototype, prop, accumDescriptors[prop]);
        }
      });

      this.constructor._withExtensionsApplied = true;
    }
  };
}

export function getAllCustomDescriptors(obj) {
  if (!obj || obj === Object.prototype) {
    return {};
  } else {
    const proto = Object.getPrototypeOf(obj);
    return {
      ...getAllCustomDescriptors(proto),
      ...Object.getOwnPropertyDescriptors(obj)
    };
  }
}
