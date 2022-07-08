import TestUtils from '../../test/lightning-test-utils';
import CardSection from './CardSection';

const circle = TestUtils.pathToDataURI('./assets/images/circle.svg');
const createCardSectionComponent = TestUtils.makeCreateComponent(CardSection);

describe('CardSection', () => {
  let cardSection, testRenderer;
  beforeEach(() => {
    [cardSection, testRenderer] = createCardSectionComponent();
  });
  afterEach(() => {
    cardSection = null;
    testRenderer = null;
  });
  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('has the correct static props getter', () => {
    expect(cardSection.constructor.properties).toMatchObject([
      'title',
      'iconWidth',
      'iconHeight',
      'iconSrc'
    ]);
  });

  it('has the correct static tags getter', () => {
    expect(cardSection.constructor.tags).toMatchObject([
      'Background',
      'Title',
      'Icon'
    ]);
  });
  it('should update Metadata', () => {
    expect(cardSection.icon).toBe(undefined);
    cardSection.icon = circle;
    testRenderer.forceAllUpdates();
    cardSection._update();
    expect(cardSection.icon).toEqual(circle);
    expect(cardSection._Icon.x).toEqual(
      cardSection.w -
        cardSection.iconWidth -
        cardSection._componentStyles.paddingHorizontal
    );
    expect(cardSection._Icon.y).toEqual(
      (cardSection._Title._textStyle.lineHeight - cardSection.iconWidth) / 2 +
        cardSection._componentStyles.paddingVertical
    );
  });

  it('should calculate textwidth', () => {
    testRenderer.forceAllUpdates();
    cardSection.iconSrc = circle;
    expect(cardSection._calculateTextWidth()).toEqual(
      cardSection.w -
        cardSection._componentStyles.paddingHorizontal * 2 -
        cardSection.iconWidth
    );
    cardSection.iconSrc = undefined;
    expect(cardSection._calculateTextWidth()).toEqual(
      cardSection.w - cardSection._componentStyles.paddingHorizontal * 2
    );
  });
});
