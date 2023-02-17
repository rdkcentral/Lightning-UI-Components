import { makeCreateComponent } from '@lightning/ui-test-utils';
import CardContentHero from './CardContentHero';

const createComponent = makeCreateComponent(CardContentHero);

describe('CardContentHero', () => {
  // eslint-disable-next-line no-unused-vars
  let cardContentHero, testRenderer;

  beforeEach(() => {
    [cardContentHero, testRenderer] = createComponent();
  });
  afterEach(() => {
    cardContentHero = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });
});
