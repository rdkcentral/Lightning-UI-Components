import TestUtils from '../../test/lightning-test-utils';
import CardContentHero from './CardContentHero';

const createComponent = TestUtils.makeCreateComponent(CardContentHero);

describe('CardContentHero', () => {
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
