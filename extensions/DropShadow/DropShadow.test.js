import TestUtils from '../../test/lightning-test-utils';
import dropShadowExtension, {
  dropShadowExtensionGenerator
} from './DropShadow.extension';
import Base from '../../Base';
import { base as baseStyles } from '../../elements/Shadow/Shadow.styles';
import XfinityTheme from '../../themes/xfinity';

const width = 100;
const height = 150;

const baseStyleVals = baseStyles(XfinityTheme);

const generatedExtension = dropShadowExtensionGenerator({
  componentsToMask: ['ToMaskExample']
});

class Example extends Base {
  static get __componentName() {
    return 'Example';
  }
  static _template() {
    return {
      w: width,
      h: height,
      rect: true
    };
  }
}

class ToMaskExample extends Base {
  static get __componentName() {
    return 'ToMaskExample';
  }
  static _template() {
    return {
      w: width,
      h: height,
      rect: true
    };
  }
}

const createComponent = TestUtils.makeCreateComponent(
  dropShadowExtension(Example)
);

const createComponentGeneratedNoMask = TestUtils.makeCreateComponent(
  generatedExtension(Example)
);

const createComponentGeneratedWithMask = TestUtils.makeCreateComponent(
  generatedExtension(ToMaskExample)
);

describe('DropShadow Extension', () => {
  let component;
  let testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createComponent();
  });

  afterEach(() => {
    component = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with generator', () => {
    [component, testRenderer] = createComponentGeneratedNoMask();
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds adds a DropShadow element to the component', () => {
    expect(component._DropShadow).toBeDefined();
  });

  it('Does not affect the size of the base component', () => {
    expect(component.w).toEqual(width);
    expect(component.h).toEqual(height);
  });

  it('Sizes the underlying shadow to the base component size', () => {
    expect(component._DropShadow._Frame.w).toEqual(
      component.w + 2 * (baseStyleVals.spread + baseStyleVals.blur * 2)
    );
    expect(component._DropShadow._Frame.h).toEqual(
      component.h + 2 * (baseStyleVals.spread + baseStyleVals.blur * 2)
    );
  });

  it('Applies Masked shadow to the specified component', () => {
    [component, testRenderer] = createComponentGeneratedWithMask();
    expect(component._DropShadow.maskShadow).toBe(true);
  });

  it('Does not apply a mask to the unspecified component', () => {
    [component, testRenderer] = createComponentGeneratedNoMask();
    expect(component._DropShadow.maskShadow).toBeFalsy();
  });
});
