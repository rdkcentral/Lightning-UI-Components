import TestUtils from '../../test/lightning-test-utils';
import Card from '.';
import pets from '../../assets/images/The_Secret_Life_of_Pets_16x9.jpg';

const createCardComponent = TestUtils.makeCreateComponent(Card, {
  w: 410,
  h: 335,
  src: pets,
  artHeight: 1080,
  artWidth: 1920,
  title: 'Title',
  description: 'Short description'
});

describe('Card', () => {
  let card, testRenderer;

  beforeEach(() => {
    [card, testRenderer] = createCardComponent();
  });
  afterEach(() => {
    card = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });
});
