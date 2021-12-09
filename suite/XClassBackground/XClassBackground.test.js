import TestUtils from '../../test/lightning-test-utils';
import XClassBackground from '.';

const createBackground = TestUtils.makeCreateComponent(XClassBackground);

describe('XClassBackground', () => {
  // eslint-disable-next-line no-unused-vars
  let component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createBackground();
  });
  afterEach(() => {
    component = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });
});
