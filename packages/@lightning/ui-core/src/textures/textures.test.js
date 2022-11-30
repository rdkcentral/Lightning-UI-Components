import lng from '@lightningjs/core';
import { makeCreateComponent } from '@lightning/ui-test-utils';
import { Arrow, Circle } from '.';

const createTexture = makeCreateComponent(lng.Component);

describe('Circle', () => {
  let circle, component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createTexture({
      texture: {
        type: Circle,
        radius: 10,
        fill: true
      }
    });
    circle = component.texture;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('has props', () => {
    expect(circle.fill).toBe(true);
    expect(circle.radius).toBe(10);
    expect(circle.color).toBe('rgb(0,0,0)');
    expect(circle.stroke).toBe(false);
    expect(circle.strokeColor).toBe('rgb(0,0,0)');
    expect(circle.strokeWidth).toBe(1);
  });
});

describe('Arrow', () => {
  let arrow, component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createTexture({
      texture: {
        type: Arrow,
        w: 10,
        h: 10,
        direction: 'right'
      }
    });
    arrow = component.texture;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('has props', () => {
    expect(arrow.w).toBe(10);
    expect(arrow.h).toBe(10);
    expect(arrow.direction).toBe('right');
  });
});
