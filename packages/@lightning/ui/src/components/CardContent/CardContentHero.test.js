import { makeCreateComponent } from '@lightning/ui-test-utils';
import CardContentHero from './CardContentHero';

const createComponent = makeCreateComponent(CardContentHero);

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
