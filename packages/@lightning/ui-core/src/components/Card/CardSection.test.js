import { pathToDataURI, makeCreateComponent } from '@lightning/ui-test-utils';
import CardSection from './CardSection';

const circle = pathToDataURI('./src/assets/images/circle.svg');
const createCardSectionComponent = makeCreateComponent(CardSection);

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
        cardSection.style.paddingHorizontal
    );
    expect(cardSection._Icon.y).toEqual(
      (cardSection._Title.style.textStyle.lineHeight - cardSection.iconWidth) /
        2 +
        cardSection.style.paddingVertical
    );
  });

  it('should calculate text width', () => {
    testRenderer.forceAllUpdates();
    cardSection.iconSrc = circle;
    expect(cardSection._calculateTextWidth()).toEqual(
      cardSection.w -
        cardSection.style.paddingHorizontal * 2 -
        cardSection.iconWidth
    );
    cardSection.iconSrc = undefined;
    expect(cardSection._calculateTextWidth()).toEqual(
      cardSection.w - cardSection.style.paddingHorizontal * 2
    );
  });
});
