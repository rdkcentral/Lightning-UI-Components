import { makeCreateComponent } from '@lightningjs/ui-components-test-utils';
import CardRadio from '.';

const createComponent = makeCreateComponent(CardRadio);

// Requires additional test cases.
describe('CardRadio', () => {
  let cardRadio, testRenderer;

  beforeEach(() => {
    [cardRadio, testRenderer] = createComponent();
  });

  afterEach(() => {
    cardRadio = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });
});
