import TestUtils from '../../test/lightning-test-utils';
import Gradient from '.';

const createComponent = TestUtils.makeCreateComponent(Gradient);

describe('Gradient', () => {
  let component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createComponent();
  });
  afterEach(() => {
    component = null; // eslint-disable-line no-unused-vars
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });
});
