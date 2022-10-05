import TestUtils from '../../test/lightning-test-utils';
import Shadow from '.';

const createComponent = TestUtils.makeCreateComponent(Shadow);

const baseStyle = {
  offsetX: 0,
  offsetY: 32,
  blur: 32,
  spread: -8,
  alpha: 0.6,
  radius: 16,
  color: 0xff000000
};

describe('Shadow', () => {
  let component;
  let testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createComponent({
      w: 200,
      h: 200,
      style: {
        ...baseStyle
      }
    });
  });

  afterEach(() => {
    component = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with masked shadow', () => {
    [component, testRenderer] = createComponent({
      w: 200,
      h: 200,
      maskShadow: true
    });
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Starts the shadow at the component base size', () => {
    const width = 100;
    const height = 150;
    [component, testRenderer] = createComponent({
      w: width,
      h: height,
      style: {
        ...baseStyle,
        offsetX: 0,
        offsetY: 0,
        blur: 0,
        spread: 0
      }
    });

    expect(component.w).toEqual(width);
    expect(component.h).toEqual(height);
    expect(component._Frame.w).toEqual(width);
    expect(component._Frame.h).toEqual(height);
  });

  it('adds the blur style value to shadow frame size', () => {
    const width = 100;
    const height = 150;
    const blur = 10;

    [component, testRenderer] = createComponent({
      w: width,
      h: height,
      style: {
        ...baseStyle,
        offsetX: 0,
        offsetY: 0,
        blur: blur,
        spread: 0
      }
    });

    expect(component.w).toEqual(width);
    expect(component.h).toEqual(height);
    expect(component._Frame.w).toEqual(width + blur * 4);
    expect(component._Frame.h).toEqual(height + blur * 4);
  });

  it('adds the spread style value to shadow frame size', () => {
    const width = 100;
    const height = 150;
    const spread = 10;

    [component, testRenderer] = createComponent({
      w: width,
      h: height,
      style: {
        ...baseStyle,
        offsetX: 0,
        offsetY: 0,
        blur: 0,
        spread: spread
      }
    });

    expect(component.w).toEqual(width);
    expect(component.h).toEqual(height);
    expect(component._Frame.w).toEqual(width + spread * 2);
    expect(component._Frame.h).toEqual(height + spread * 2);
  });

  it('adds all sizing values to the shadow frame size ', () => {
    const width = 100;
    const height = 150;
    const spread = 10;
    const blur = 15;

    [component, testRenderer] = createComponent({
      w: width,
      h: height,
      style: {
        ...baseStyle,
        offsetX: 0,
        offsetY: 0,
        blur: blur,
        spread: spread
      }
    });

    expect(component.w).toEqual(width);
    expect(component.h).toEqual(height);
    expect(component._Frame.w).toEqual(width + 2 * (spread + blur * 2));
    expect(component._Frame.h).toEqual(height + 2 * (spread + blur * 2));
  });

  it('updates the shadow size', () => {
    const width = 400;
    const height = 450;
    const spread = 10;
    const blur = 15;

    component.patch({
      w: width,
      h: height,
      style: {
        ...baseStyle,
        offsetX: 0,
        offsetY: 0,
        blur: blur,
        spread: spread
      }
    });
    testRenderer.forceAllUpdates();
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
    expect(component.w).toEqual(width);
    expect(component.h).toEqual(height);
    expect(component._Frame.w).toEqual(width + 2 * (spread + blur * 2));
    expect(component._Frame.h).toEqual(height + 2 * (spread + blur * 2));
  });

  it('adds offset values to frame x/y position without affecting size', () => {
    const width = 100;
    const height = 150;
    const offsetX = 10;
    const offsetY = 15;

    [component, testRenderer] = createComponent({
      w: width,
      h: height,
      style: {
        ...baseStyle,
        offsetX,
        offsetY,
        blur: 0,
        spread: 0
      }
    });

    expect(component.w).toEqual(width);
    expect(component.h).toEqual(height);
    expect(component._Frame.w).toEqual(width);
    expect(component._Frame.h).toEqual(height);
    expect(component._Frame.x).toEqual(component.w / 2 + offsetX);
    expect(component._Frame.y).toEqual(component.h / 2 + offsetY);
  });
});
