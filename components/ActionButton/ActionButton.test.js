import ActionButton from '.';
import TestRenderer from '../lightning-test-renderer';

const Component = {
  Component: {
    type: ActionButton,
    title: 'Button'
  }
};

describe('ActionButton', () => {
  let testRenderer, button;

  beforeEach(() => {
    testRenderer = TestRenderer.create(Component);
    button = testRenderer.getInstance();
    return button._whenEnabled;
  });

  it('should render', () => {
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
