import { makeCreateComponent } from '@lightningjs/ui-test-utils';
import CardContentHorizontalLarge from './CardContentHorizontalLarge';

const createComponent = makeCreateComponent(CardContentHorizontalLarge);

describe('CardContentHorizontalLarge', () => {
  // eslint-disable-next-line no-unused-vars
  let cardContentHorizontalLarge, testRenderer;

  beforeEach(() => {
    [cardContentHorizontalLarge, testRenderer] = createComponent();
  });
  afterEach(() => {
    cardContentHorizontalLarge = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });
});
