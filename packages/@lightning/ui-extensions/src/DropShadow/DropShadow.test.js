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
  let dropShadow;
  let testRenderer;

  beforeEach(() => {
    [dropShadow, testRenderer] = createComponent();
  });

  afterEach(() => {
    dropShadow = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with generator', () => {
    [dropShadow, testRenderer] = createComponentGeneratedNoMask();
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('adds adds a DropShadow element to the component', () => {
    expect(dropShadow._DropShadow).toBeDefined();
  });

  it('does not affect the size of the base component', () => {
    expect(dropShadow.w).toEqual(width);
    expect(dropShadow.h).toEqual(height);
  });

  it('applies Masked shadow to the specified component', () => {
    [dropShadow, testRenderer] = createComponentGeneratedWithMask();
    expect(dropShadow._DropShadow.maskShadow).toBe(true);
  });

  it('does not apply a mask to the unspecified component', () => {
    [dropShadow, testRenderer] = createComponentGeneratedNoMask();
    expect(dropShadow._DropShadow.maskShadow).toBeFalsy();
  });
});
