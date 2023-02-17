import { makeCreateComponent } from '@lightning/ui-test-utils';

import withThemeStyles from './index.js';
import lng from '@lightningjs/core';
import { context } from '../../globals/index.js';

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

let component;
// let testRenderer;
beforeEach(async () => {
  [component] = makeCreateComponent(
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

  await context.setTheme(component.theme); // Reset theme each test
});

describe('withThemeStyles accessors', () => {
  it('should return the correct class name', () => {
    expect(component.constructor.name).toBe('MyComponent');
  });

  it('should return the __mixinStyle as the original style that was passed in to the mixin', () => {
    expect(component.constructor.__mixinStyle).toMatchObject({
      base: {
        foo: 'bar'
      }
    });
  });

  it('should return a theme', () => {
    expect(component.theme).not.toBeUndefined();
  });

  // it.only("should setup everything once on the component's _construct lifecycle hook runs", async () => {
  //   console.log('here', component.__constructSpyPromise)
  //   await component.__constructSpyPromise;

  //   expect(component._construct).toHaveBeenCalled();
  //     done();
  // });

  it('should return tone style from the theme if set with theme.componentTone', async () => {
    expect(component._toneStyle).toMatchObject({ value1: 'neutralValue1' });
    await context.updateTheme({ componentTone: { MyComponent: 'brand' } });
    expect(component._toneStyle).toMatchObject({ value1: 'brandValue1' });
  });

  it('should allow a tone style to be set on the component directly', async () => {
    expect(component._toneStyle).toMatchObject({ value1: 'neutralValue1' });
    component.tone = 'inverse';
    expect(component._toneStyle).toMatchObject({ value1: 'inverseValue1' });
    component.tone = 'brand';
    expect(component._toneStyle).toMatchObject({ value1: 'brandValue1' });
    await context.updateTheme({ componentTone: { MyComponent: 'inverse' } });
    expect(component._toneStyle).toMatchObject({ value1: 'inverseValue1' });
  });

  it('should return the proper themeLevel style if set with theme.componentStyle', async () => {
    await context.updateTheme({
      componentStyle: {
        MyComponent: {
          foo: 'from theme'
        }
      }
    });
    expect(component.style.foo).toBe('from theme');
  });

  it('should return the proper componentLevel style if set with theme.style[prop]', () => {
    expect(component.style.foo).toBe('bar');
    component.style.foo = 'changed';
    expect(component.style.foo).toBe('changed');
  });

  // it.skip('should return a _componentStyle that represents all the proper style rules', () => {
  //
  // });

  it('_setupListeners should be called once per component no matter how many times the component is extended', () => {
    [component] = makeCreateComponent(
      class MyComponent extends withThemeStyles(
        withThemeStyles(lng.Component, { baseComponentStyle: true }),
        styles
      ) {
        static get __componentName() {
          return 'MyComponent';
        }
      }
    )({}, { spyOnMethods: ['_setupListeners'] });

    expect(component._setupListeners).toHaveBeenCalledTimes(1);
  });

  it.only('_clearComponentStyleCache should reset this._componentStyleCache to an empty object', async () => {
    await component.__updateSpyPromise;
    expect(component._componentStyleCache).toMatchObject({
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
