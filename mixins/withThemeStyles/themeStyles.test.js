import TestUtils from '../../test/lightning-test-utils';
import withThemeStyles, { processThemeStyles } from '.';
import Base from '../../Base';
import { context } from '../..';
import themeManager from '../../context/theme-manager';
import XfinityTheme from '../../themes/xfinity';
const style = theme => {
  return {
    radius: theme.radius.medium,
    foo: 'bar',
    color: theme.colors.fillNeutral1
  };
};

const extendedStyle = theme => {
  return {
    radius: theme.radius.large
  };
};

class TestComponent extends Base {
  static get __componentName() {
    return 'TestComponent';
  }
}

class ExtendedTestComponent extends withThemeStyles(
  TestComponent,
  extendedStyle
) {}

const [withThemeStylesComponent, testRenderer] = TestUtils.makeCreateComponent(
  withThemeStyles(TestComponent, style)
)({}, { spyOnMethods: ['_update'] });

beforeEach(async () => {
  withThemeStylesComponent.style = {};
  context.setTheme(XfinityTheme);
  await withThemeStylesComponent.__updateSpyPromise;
});

afterEach(() => {});

describe('withThemeStyles', () => {
  it('should export processThemeStyles', () => {
    expect(typeof processThemeStyles).toBe('function');
  });
  it('processThemeStyles should return a function', () => {
    expect(withThemeStylesComponent._componentStyles).toMatchObject({
      radius: 16
    });
    const base = theme => ({ foo: 'bar', radius: theme.radius });
    const variant = theme => ({
      inverse: { radius: theme.radius * 2 },
      brand: { radius: theme.radius * 4 }
    });
    expect(
      processThemeStyles({ radius: 10 }, 'inverse', undefined, variant)
    ).toMatchObject({ radius: 20 });
    expect(
      processThemeStyles({ radius: 10 }, 'inverse', base, undefined)
    ).toMatchObject({ foo: 'bar' });
    expect(
      processThemeStyles({ radius: 10 }, 'inverse', base, variant)
    ).toMatchObject({ foo: 'bar', radius: 20 });
    expect(
      processThemeStyles({ radius: 10 }, 'brand', base, variant)
    ).toMatchObject({ foo: 'bar', radius: 40 });
  });
  it('processThemeStyles should throw proper errors', () => {
    const base = theme => ({ foo: 'bar', radius: theme.radius });
    const variant = theme => ({
      inverse: { radius: theme.radius * 2 },
      brand: { radius: theme.radius * 4 }
    });
    expect(() =>
      processThemeStyles('should throw', 'brand', base, variant)
    ).toThrowError(
      new Error('processThemeStyles theme parameter must be an object')
    );
    expect(() =>
      processThemeStyles({ radius: 10 }, 'brand', 'should throw', variant)
    ).toThrowError(
      new Error('processThemeStyles base parameter must be a function')
    );
    expect(() =>
      processThemeStyles({ radius: 10 }, 'brand', base, 'should throw')
    ).toThrowError(
      new Error('processThemeStyles variant parameter must be a function')
    );
  });

  it('should properly merge instantiation styles', () => {
    const [testComponent] = TestUtils.makeCreateComponent(
      ExtendedTestComponent
    )();
    expect(testComponent._componentStyles).toMatchObject({ radius: 24 });
  });

  it("should create getters and setters for all keys in the component's style", async done => {
    expect(
      withThemeStylesComponent.style.__lookupGetter__('radius')
    ).not.toBeUndefined();
    expect(
      withThemeStylesComponent.style.__lookupGetter__('foo')
    ).not.toBeUndefined();
    expect(
      withThemeStylesComponent.style.__lookupSetter__('radius')
    ).not.toBeUndefined();
    expect(
      withThemeStylesComponent.style.__lookupSetter__('foo')
    ).not.toBeUndefined();
    withThemeStylesComponent.style.radius = 20;
    withThemeStylesComponent.style.foo = 'updated';
    await withThemeStylesComponent.__updateSpyPromise;
    expect(withThemeStylesComponent._componentStyles).toMatchObject({
      radius: 20,
      foo: 'updated'
    });
    done();
  });
});

describe('component variants', () => {
  it('should have a variant getter and setter', done => {
    expect(withThemeStylesComponent.variant).toBeUndefined();
    context.updateTheme({
      componentVariants: {
        TestComponent: 'inverse'
      }
    });
    expect(withThemeStylesComponent.variant).toBe('inverse');
    withThemeStylesComponent.variant = 'brand';
    expect(withThemeStylesComponent.variant).toBe('brand');
    done();
  });
});

describe('withThemeStyles Hierarchy', () => {
  it('should allow instantiation styles to be overwritten by componentStyles in the theme', async done => {
    context.updateTheme({
      componentStyles: {
        TestComponent: {
          radius: 30
        }
      }
    });
    await withThemeStylesComponent.__updateSpyPromise;
    expect(withThemeStylesComponent._componentStyles).toMatchObject({
      radius: 30
    });
    done();
  });
  it('should allow instantiation styles and componentStyles to be overwritten by component level styles', async done => {
    context.updateTheme({
      componentStyles: {
        TestComponent: {
          radius: 30
        }
      }
    });
    await withThemeStylesComponent.__updateSpyPromise;
    expect(withThemeStylesComponent._componentStyles).toMatchObject({
      radius: 30
    });
    withThemeStylesComponent.style.radius = 40;
    await withThemeStylesComponent.__updateSpyPromise;
    expect(withThemeStylesComponent._componentStyles).toMatchObject({
      radius: 40
    });
    done();
  });
});

it('should allow theme level styles to use a theme value representation as a string', async done => {
  context.updateTheme({
    componentStyles: {
      TestComponent: {
        color: 'theme.colors.notacolor'
      }
    }
  });
  // Will not trigger an update cycle since the color does not exist in the theme
  expect(withThemeStylesComponent._componentStyles).toMatchObject({
    color: 4294375161
  });
  context.updateTheme({
    componentStyles: {
      TestComponent: {
        color: 'theme.colors.black'
      }
    }
  });
  await withThemeStylesComponent.__updateSpyPromise;
  expect(withThemeStylesComponent._componentStyles).toMatchObject({
    color: 4278190080
  });
  done();
});

it('should allow component level styles to use a theme value representation as a string', async done => {
  withThemeStylesComponent.style.color = 'theme.colors.notacolor';
  // Will not trigger an update cycle since the color does not exist in the theme
  expect(withThemeStylesComponent._componentStyles).toMatchObject({
    color: 4294375161
  });
  withThemeStylesComponent.style.color = 'theme.colors.black';
  await withThemeStylesComponent.__updateSpyPromise;
  expect(withThemeStylesComponent._componentStyles).toMatchObject({
    color: 4278190080
  });
  done();
});

describe('withThemeStyles cleanup', () => {
  it('cleans up caches stored in the context when the component is detached', () => {
    const spy = jest.spyOn(themeManager, 'resetComponentInstantiationStyles');
    const spy2 = jest.spyOn(themeManager, 'resetComponentLevelStyles');
    testRenderer.destroy();
    expect(spy).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  });
});
