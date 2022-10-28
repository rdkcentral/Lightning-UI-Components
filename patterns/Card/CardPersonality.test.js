import TestUtils from '../../test/lightning-test-utils';
import CardPersonality from './CardPersonality';
import tileImage from '../../assets/images/tile-image.png';
const createCardPersonality = TestUtils.makeCreateComponent(CardPersonality);

describe('CardPersonality', () => {
  let cardPersonality, testRenderer;

  beforeEach(() => {
    [cardPersonality, testRenderer] = createCardPersonality();
  });

  afterEach(() => {
    cardPersonality = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should update Title Position', () => {
    cardPersonality.title = 'Title';
    testRenderer.forceAllUpdates();
    expect(cardPersonality._Title.content).toEqual('Title');
    expect(cardPersonality._Title.textStyle).toEqual(
      cardPersonality.style.titleTextStyle
    );
    expect(cardPersonality._Title.x).toEqual(
      cardPersonality.style.paddingHorizontal
    );
  });

  it('should update Description position', () => {
    cardPersonality.description = 'Subtitle';
    testRenderer.forceAllUpdates();
    expect(cardPersonality._Description.content).toEqual('Subtitle');
    expect(cardPersonality._Description.x).toEqual(
      cardPersonality.style.paddingHorizontal
    );
    expect(cardPersonality._Description.y).toEqual(
      cardPersonality.h - (cardPersonality.style.paddingVertical * 2) / 3
    );
  });

  it('should have the correct Tile properties', () => {
    cardPersonality.description = 'Subtitle';
    cardPersonality.src = tileImage;
    cardPersonality._update();
    cardPersonality.src = expect(cardPersonality._Description.content).toEqual(
      'Subtitle'
    );

    expect(cardPersonality._Description.x).toEqual(
      cardPersonality.style.paddingHorizontal
    );

    expect(cardPersonality._Description.y).toEqual(
      cardPersonality.h - (cardPersonality.style.paddingVertical * 2) / 3
    );

    expect(cardPersonality._Tile.artwork.src).toEqual(tileImage);
  });
});
