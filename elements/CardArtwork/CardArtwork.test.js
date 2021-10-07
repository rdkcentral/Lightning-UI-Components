import TestUtils from '../../test/lightning-test-utils';
import CardArtwork from '.';

const createComponent = TestUtils.makeCreateComponent(CardArtwork);

describe('CardArtwork', () => {
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
