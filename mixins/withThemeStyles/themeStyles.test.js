import TestUtils from '../../test/lightning-test-utils';
import withThemeStyles from '.';
import lng from '@lightningjs/core';
import context from '../../context';
import XfinityTheme from '../../themes/xfinity';

const styles = {
  base: {
    foo: 'bar'
  },
  palette: {
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
beforeEach(async done => {
  [component] = TestUtils.makeCreateComponent(
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

  await context.setTheme(XfinityTheme); // Reset theme each test
  done();
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

  // it.only("should setup everything once on the component's _construct lifecycle hook runs", async done => {
  //   console.log('here', component.__constructSpyPromise)
  //   await component.__constructSpyPromise;

  //   expect(component._construct).toHaveBeenCalled();
  //     done();
  // });

  it('should return palette style from the theme if set with theme.componentPalette', async done => {
    expect(component._paletteStyle).toMatchObject({ value1: 'neutralValue1' });
    await context.updateTheme({ componentPalette: { MyComponent: 'brand' } });
    expect(component._paletteStyle).toMatchObject({ value1: 'brandValue1' });
    done();
  });

  it('should allow a palette style to be set on the component directly', async done => {
    expect(component._paletteStyle).toMatchObject({ value1: 'neutralValue1' });
    component.palette = 'inverse';
    expect(component._paletteStyle).toMatchObject({ value1: 'inverseValue1' });
    component.palette = 'brand';
    expect(component._paletteStyle).toMatchObject({ value1: 'brandValue1' });
    await context.updateTheme({ componentPalette: { MyComponent: 'inverse' } });
    expect(component._paletteStyle).toMatchObject({ value1: 'inverseValue1' });
    done();
  });

  it('should return the proper themeLevel style if set with theme.componentStyle', async done => {
    await context.updateTheme({
      componentStyle: {
        MyComponent: {
          foo: 'from theme'
        }
      }
    });
    expect(component.style.foo).toBe('from theme');
    done();
  });

  it('should return the proper componentLevel style if set with theme.style[prop]', done => {
    expect(component.style.foo).toBe('bar');
    component.style.foo = 'changed';
    expect(component.style.foo).toBe('changed');
    done();
  });

  // it.skip('should return a _componentStyle that represents all the proper style rules', done => {
  //   done();
  // });

  it('_setupListeners should be called once per component no matter how many times the component is extended', done => {
    [component] = TestUtils.makeCreateComponent(
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
    done();
  });

  it.only('_clearComponentStyleCache should reset this._componentStyleCache to an empty object', async done => {
    await component.__updateSpyPromise;
    expect(component._componentStyleCache).toMatchObject({
      focused: {
        foo: 'bar',
        value1: 'neutralValue1'
      }
    });
    done();
  });

  // it.skip('_generateComponentStyleSource should return an object of all style values represented in the prototype chain', done => {

  //   done();
  // });

  // it.skip('return a style that represents the _componentStyle', done => {
  //   done();
  // });

  // it.skip('sets up mode accessors', done => {
  //   done();
  // });

  // it.skip('sets up palette accessors', done => {
  //   done();
  // });

  // it.skip('queueThemeUpdate calls adUpdateTheme in ThemeManager', done => {
  //   done();
  // });

  // it.skip("_updateThemeComponent calls queueRequestUpdate or _update if doesn't exist. Makes sure updateItemLayout is called", done => {
  //   done();
  // });

  // it.skip('sets the mode to focused if not disabled', done => {
  //   done();
  // });

  // it.skip('sets the mode to unfocused if not disabled', done => {
  //   done();
  // });

  // it.skip('clears the componentStyleCache when inactive to release memory', done => {
  //   done();
  // });
});
