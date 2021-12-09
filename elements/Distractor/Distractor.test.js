import TestUtils from '../../test/lightning-test-utils';
import Distractor from '.';

const createDistractor = TestUtils.makeCreateComponent(Distractor);

describe('Distractor', () => {
  let testRenderer;

  beforeEach(() => {
    [testRenderer] = createDistractor();
  });
  afterEach(() => {
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });
});
