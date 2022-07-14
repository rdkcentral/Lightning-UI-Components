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
import { readFileSync } from 'fs';
import TestRenderer from './lightning-test-renderer';

export default {
  fastForward,
  makeCreateComponent,
  pathToDataURI,
  nextTick,
  completeAnimation
};

function nextTick(wait = 0) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, wait);
  });
}

/**
 * Extends a component and provides methods that use Jest spies to create
 * mock functions for each method passed to the methods param. Each spy method
 * created is a Promise, which resolves after the spied upon method is invoked,
 * and can be awaited in tests.
 * @param { Component } Component component with methods to be mocked
 * @param { string[] } methods names of methods to be mocked on Component
 *
 * @return {lng.Component} a child class of Component with added mock function
 * methods that can be awaited in test cases.
 */
function withMethodSpies(Component, methods) {
  return class SpyClass extends Component {
    static get name() {
      return Component.name;
    }

    _construct() {
      super._construct && super._construct();

      // Create a promise to be resolved following a method being invoked
      const generateSpyPromise = spyResolver => {
        return new Promise(resolve => {
          this[spyResolver] = resolve;
        });
      };

      // Reassign promise in mock function to a new pending Promise
      const resetSpyPromise = (spyPromise, spyResolver) => {
        this[spyPromise] = generateSpyPromise(spyResolver);
      };

      methods.forEach(method => {
        const spyMethod = SpyClass.prototype[method];
        const spyPromise = `_${method}SpyPromise`;
        const spyResolver = `_${method}SpyResolve`;

        // Add Promise which resolves following the mock function being called
        this[spyPromise] = generateSpyPromise(spyResolver).then(() => {
          resetSpyPromise(spyPromise, spyResolver);
        });

        // Create mock function which calls the class method and resolves a
        // Promise that can be awaited in test cases
        jest
          .spyOn(SpyClass.prototype, method)
          .mockImplementation(async function(...args) {
            await spyMethod.call(this, ...args);
            this[spyResolver]();
          });
      });
    }
  };
}

function fastForward(elements) {
  const _fastForward = element => {
    if (element._transitions) {
      Object.values(element._transitions).forEach(transition =>
        transition.finish()
      );
    }
  };
  if (typeof elements.forEach === 'function') elements.forEach(_fastForward);
  if (elements && elements._transitions) _fastForward(elements);
}

function pathToDataURI(path) {
  return `data:image/jpg;base64, ${readFileSync(path).toString('base64')}`;
}

function makeCreateComponent(type, defaultConfig = {}, defaultOptions = {}) {
  return (config = {}, options = {}) => {
    const testRenderer = TestRenderer.create(
      {
        Component: {
          type: options.spyOnMethods
            ? withMethodSpies(type, options.spyOnMethods)
            : type,
          ...defaultConfig,
          ...config
        }
      },
      { ...defaultOptions, ...options }
    );
    return [testRenderer.getInstance(), testRenderer];
  };
}

/**
 * Returns a Promise that resolves once all animating properties have updated
 * to their target value(s).
 * @param { Element } Element with properties that have animations
 * @param { string | string[] } transitionProperties property name or names
 * that will be animating.
 *
 * @return {Promise} Promise which resolves upon completion of animations of
 * transitionProperties have completed.
 */
function completeAnimation(element, transitionProperties = []) {
  const props = Array.isArray(transitionProperties)
    ? transitionProperties
    : [transitionProperties];

  const transitions = props.map(prop => {
    return new Promise(resolve => {
      element._getTransition(prop).once('finish', () => {
        resolve();
      });
    });
  });

  return Promise.all(transitions);
}
