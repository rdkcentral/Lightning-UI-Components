import TestUtils from '../.../../../test/lightning-test-utils';
import CardLaunchpad from './CardLaunchpad';

const pets = TestUtils.pathToDataURI(
  './src/assets/images/The_Secret_Life_of_Pets_16x9.jpg'
);

const createCardComponent = TestUtils.makeCreateComponent(CardLaunchpad, {
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
    card._unfocus();
    expect(card._Metadata.alpha).toBe(0);
    testRenderer.focus();
    expect(card._Metadata.alpha).toBe(1);
  });
});
