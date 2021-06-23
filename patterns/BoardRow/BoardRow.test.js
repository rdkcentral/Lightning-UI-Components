import TestUtils from '../../test/lightning-test-utils';
import BoardRow from '.';

const createComponent = TestUtils.makeCreateComponent(BoardRow);

describe('BoardRow', () => {
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
