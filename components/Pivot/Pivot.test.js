import Pivot from '.';
import TestRenderer from '../lightning-test-renderer';

const Component = {
  Component: {
    type: Pivot,
    title: 'Pivot'
  }
};

describe('Pivot', () => {
  let testRenderer, pivot;

  beforeEach(() => {
    testRenderer = TestRenderer.create(Component);
    pivot = testRenderer.getInstance();
    return pivot._whenEnabled;
  });

  it('should render', () => {
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
