import lng from '@lightningjs/core';
import TestUtils from '../test/lightning-test-utils';
import Arrow from './Arrow';

const createTexture = TestUtils.makeCreateComponent(lng.Component);

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
