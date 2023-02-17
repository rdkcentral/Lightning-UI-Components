import { makeCreateComponent } from '@lightning/ui-test-utils';
import dropShadowExtension, {
  dropShadowExtensionGenerator
} from './DropShadow.extension';
import { Base } from '@lightning/ui-core';

const width = 100;
const height = 150;

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

const createComponent = makeCreateComponent(dropShadowExtension(Example));

const createComponentGeneratedNoMask = makeCreateComponent(
  generatedExtension(Example)
);

const createComponentGeneratedWithMask = makeCreateComponent(
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

  it('Applies Masked shadow to the specified component', () => {
    [component, testRenderer] = createComponentGeneratedWithMask();
    expect(component._DropShadow.maskShadow).toBe(true);
  });

  it('Does not apply a mask to the unspecified component', () => {
    [component, testRenderer] = createComponentGeneratedNoMask();
    expect(component._DropShadow.maskShadow).toBeFalsy();
  });
});
