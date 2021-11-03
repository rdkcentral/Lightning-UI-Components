import TestUtils from '../../test/lightning-test-utils';
import withThemeStyles from '.';
import Base from '../../Base';
import { context } from '../..';
import XfinityTheme from '../../themes/xfinity';

const style = theme => {
  return {
    radius: theme.radius.medium,
    foo: 'bar'
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

let withThemeStylesComponent = null;
beforeEach(() => {
  [withThemeStylesComponent] = TestUtils.makeCreateComponent(
    withThemeStyles(TestComponent, style)
  )();
  context.setTheme(XfinityTheme);
});

afterEach(() => {
  withThemeStylesComponent = null;
});

describe('withThemeStyles', () => {
  it('should return componentStyles as an object', () => {
    expect(withThemeStylesComponent._componentStyles).toMatchObject({
      radius: 16
    });
  });

  it('should properly merge instantiation styles', () => {
    const [testComponent] = TestUtils.makeCreateComponent(
      ExtendedTestComponent
    )();
    expect(testComponent._componentStyles).toMatchObject({ radius: 24 });
  });

  // it('should save instantiation styles in the context cache', () => {});

  it("should create getters and setters for all keys in the component's style", () => {
    expect(
      withThemeStylesComponent.__lookupGetter__('styleRadius')
    ).not.toBeUndefined();
    expect(
      withThemeStylesComponent.__lookupGetter__('styleFoo')
    ).not.toBeUndefined();
    expect(
      withThemeStylesComponent.__lookupSetter__('styleRadius')
    ).not.toBeUndefined();
    expect(
      withThemeStylesComponent.__lookupSetter__('styleFoo')
    ).not.toBeUndefined();
    withThemeStylesComponent.styleRadius = 20;
    withThemeStylesComponent.styleFoo = 'updated';
    expect(withThemeStylesComponent._componentStyles).toMatchObject({
      radius: 20,
      foo: 'updated'
    });
  });
});

describe('withThemeStyles Hierarchy', () => {
  it('should obey styles set with instantiation styles first', () => {
    expect(withThemeStylesComponent._componentStyles).toMatchObject({
      radius: 16
    });
    const [testComponent] = TestUtils.makeCreateComponent(
      ExtendedTestComponent
    )();
    expect(testComponent._componentStyles).toMatchObject({ radius: 24 });
  });

  it('should should allow instantiation styles to be overwritten by componentStyles in the theme', () => {
    expect(withThemeStylesComponent._componentStyles).toMatchObject({
      radius: 16
    });
    const [testComponent] = TestUtils.makeCreateComponent(
      ExtendedTestComponent
    )();
    expect(testComponent._componentStyles).toMatchObject({ radius: 24 });
    // Merge new component level styles
    context.updateTheme({
      componentStyles: {
        TestComponent: {
          radius: 30
        }
      }
    });
    expect(testComponent._componentStyles).toMatchObject({ radius: 30 });
  });

  it('should should allow instantiation styles and componentStyles to be overwritten by component level styles', () => {
    expect(withThemeStylesComponent._componentStyles).toMatchObject({
      radius: 16
    });
    const [testComponent] = TestUtils.makeCreateComponent(
      ExtendedTestComponent
    )();
    expect(testComponent._componentStyles).toMatchObject({ radius: 24 });
    // Merge new component level styles
    context.updateTheme({
      componentStyles: {
        TestComponent: {
          radius: 30
        }
      }
    });
    expect(testComponent._componentStyles).toMatchObject({ radius: 30 });
    testComponent.styleRadius = 40;
    expect(testComponent._componentStyles).toMatchObject({ radius: 40 });
  });
});
