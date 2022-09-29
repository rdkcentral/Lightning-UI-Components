import TestUtils from '../../test/lightning-test-utils';
import CardContentHorizontalLarge from './CardContentHorizontalLarge';

const createComponent = TestUtils.makeCreateComponent(
  CardContentHorizontalLarge
);

describe('CardContentHorizontalLarge', () => {
  // eslint-disable-next-line no-unused-vars
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
