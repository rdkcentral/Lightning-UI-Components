import TestUtils from '../.../../../test/lightning-test-utils';
import CardProgram from './CardProgram';

const pets = TestUtils.pathToDataURI(
  './src/assets/images/The_Secret_Life_of_Pets_16x9.jpg'
);

const createCardComponent = TestUtils.makeCreateComponent(CardProgram, {
  orientation: 'horizontal',
  w: 860,
  h: 231,
  imgRadius: 4,
  src: pets,
  title: 'Title',
  description: 'Short description',
  badgeLocation: 'upperLeft'
});

describe('CardProgram', () => {
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

  it('hides artwork when unfocused and shows it on focus', () => {
    expect(card._Artwork.alpha).toBe(0);
    testRenderer.focus();
    expect(card._Artwork.alpha).toBe(1);
  });
});
