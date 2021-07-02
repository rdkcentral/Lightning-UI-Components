import TestUtils from '../../test/lightning-test-utils';
import Gradient from '.';

const createComponent = TestUtils.makeCreateComponent(Gradient);

describe('Gradient', () => {
  let component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createComponent();
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
