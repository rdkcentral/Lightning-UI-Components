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

import { makeCreateComponent } from '@lightningjs/ui-components-test-utils';

import withThemeStyles from '.';
import lng from '@lightningjs/core';
import { context } from '../../globals';

const styles = {
  base: {
    foo: 'bar'
  },
  tone: {
    neutral: {
      value1: 'neutralValue1'
    },
    inverse: {
      value1: 'inverseValue1'
    },
    brand: {
      value1: 'brandValue1'
    }
  }
};
// class TestComponent extends lng.Component {}

let withThemeStylesComponent;
// let testRenderer;
beforeEach(async () => {
  [withThemeStylesComponent] = makeCreateComponent(
    class MyComponent extends withThemeStyles(lng.Component, styles) {
      static get __componentName() {
        return 'MyComponent';
      }

      _update() {
        this.patch({
          text: {
            text: this.style.foo
          }
        });
      }
    }
  )({}, { spyOnMethods: ['_update'] });

  await context.setTheme(withThemeStylesComponent.theme); // Reset theme each test
});

describe('withThemeStyles accessors', () => {
  it('should return the correct class name', () => {
    expect(withThemeStylesComponent.constructor.name).toBe('MyComponent');
  });

  it('should return the __mixinStyle as the original style that was passed in to the mixin', () => {
    expect(withThemeStylesComponent.constructor.__mixinStyle).toMatchObject({
      base: {
        foo: 'bar'
      }
    });
  });

  it('should return a theme', () => {
    expect(withThemeStylesComponent.theme).not.toBeUndefined();
  });

  // it.only("should setup everything once on the component's _construct lifecycle hook runs", async () => {
  //   console.log('here', withThemeStylesComponent.__constructSpyPromise)
  //   await withThemeStylesComponent.__constructSpyPromise;

  //   expect(withThemeStylesComponent._construct).toHaveBeenCalled();
  //     done();
  // });

  it('should return tone style from the theme if set with theme.componentTone', async () => {
    expect(withThemeStylesComponent._toneStyle).toMatchObject({
      value1: 'neutralValue1'
    });
    await context.updateTheme({ componentTone: { MyComponent: 'brand' } });
    expect(withThemeStylesComponent._toneStyle).toMatchObject({
      value1: 'brandValue1'
    });
  });

  it('should allow a tone style to be set on the component directly', async () => {
    expect(withThemeStylesComponent._toneStyle).toMatchObject({
      value1: 'neutralValue1'
    });
    withThemeStylesComponent.tone = 'inverse';
    expect(withThemeStylesComponent._toneStyle).toMatchObject({
      value1: 'inverseValue1'
    });
    withThemeStylesComponent.tone = 'brand';
    expect(withThemeStylesComponent._toneStyle).toMatchObject({
      value1: 'brandValue1'
    });
    await context.updateTheme({ componentTone: { MyComponent: 'inverse' } });
    expect(withThemeStylesComponent._toneStyle).toMatchObject({
      value1: 'inverseValue1'
    });
  });

  it('should return the proper themeLevel style if set with theme.componentStyle', async () => {
    await context.updateTheme({
      componentStyle: {
        MyComponent: {
          foo: 'from theme'
        }
      }
    });
    expect(withThemeStylesComponent.style.foo).toBe('from theme');
  });

  it('should return the proper componentLevel style if set with theme.style[prop]', () => {
    expect(withThemeStylesComponent.style.foo).toBe('bar');
    withThemeStylesComponent.style.foo = 'changed';
    expect(withThemeStylesComponent.style.foo).toBe('changed');
  });

  // it.skip('should return a _componentStyle that represents all the proper style rules', () => {
  //
  // });

  it('_setupListeners should be called once per component no matter how many times the component is extended', () => {
    [withThemeStylesComponent] = makeCreateComponent(
      class MyComponent extends withThemeStyles(
        withThemeStyles(lng.Component, { baseComponentStyle: true }),
        styles
      ) {
        static get __componentName() {
          return 'MyComponent';
        }
      }
    )({}, { spyOnMethods: ['_setupListeners'] });

    expect(withThemeStylesComponent._setupListeners).toHaveBeenCalledTimes(1);
  });

  it.only('_clearComponentStyleCache should reset this._componentStyleCache to an empty object', async () => {
    await withThemeStylesComponent.__updateSpyPromise;
    expect(withThemeStylesComponent._componentStyleCache).toMatchObject({
      focused: {
        foo: 'bar',
        value1: 'neutralValue1'
      }
    });
  });

  // it.skip('_generateComponentStyleSource should return an object of all style values represented in the prototype chain', done => {

  //
  // });

  // it.skip('return a style that represents the _componentStyle', done => {
  //
  // });

  // it.skip('sets up mode accessors', done => {
  //
  // });

  // it.skip('sets up tone accessors', done => {
  //
  // });

  // it.skip('queueThemeUpdate calls adUpdateTheme in ThemeManager', done => {
  //
  // });

  // it.skip("_updateThemeComponent calls queueRequestUpdate or _update if doesn't exist. Makes sure updateItemLayout is called", done => {
  //
  // });

  // it.skip('sets the mode to focused if not disabled', done => {
  //
  // });

  // it.skip('sets the mode to unfocused if not disabled', done => {
  //
  // });

  // it.skip('clears the componentStyleCache when inactive to release memory', done => {
  //
  // });
});
