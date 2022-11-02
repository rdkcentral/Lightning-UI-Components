import TestUtils from '@lightning/ui-core/test';
import CardAboutStacked from './CardAboutStacked';

const createCardAboutStackedComponent =
  TestUtils.makeCreateComponent(CardAboutStacked);

describe('cardAboutStacked', () => {
  let cardAboutStacked, testRenderer;

  beforeEach(() => {
    [cardAboutStacked, testRenderer] = createCardAboutStackedComponent({
      title: 'someString',
      titleBottom: 'some string'
    });
  });

  afterEach(() => {
    cardAboutStacked = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets the announce string to the title, description, and bottom title and bottle description text', () => {
    const title = 'Title';
    const description = 'Description';
    const titleBottom = 'Title Bottom';
    const descriptionBottom = 'Description Bottom';
    cardAboutStacked.patch({
      title,
      description,
      titleBottom,
      descriptionBottom
    });
    testRenderer.forceAllUpdates();
    expect(cardAboutStacked.announce).toEqual([
      title.toUpperCase(),
      description,
      titleBottom.toUpperCase(),
      descriptionBottom
    ]);
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    cardAboutStacked.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(cardAboutStacked.announce).toBe(overrideString);
  });

  it('has the correct static props getter', () => {
    expect(cardAboutStacked.constructor.properties).toMatchObject([
      'title',
      'description',
      'titleBottom',
      'descriptionBottom'
    ]);
  });

  it('has the correct static tags getter', () => {
    expect(cardAboutStacked.constructor.tags).toMatchObject([
      'Background',
      'Title',
      'Description',
      'TitleBottom',
      'DescriptionBottom'
    ]);
  });

  // TODO: Should Stacked Be still using LeftIconTextContainer if there is not an icon?
  it.skip('should update Container', () => {
    cardAboutStacked.description = [
      { badge: 'badge' },
      { badge: 'badge' },
      { badge: 'badge' },
      { badge: 'badge' },
      { badge: 'badge' }
    ];
    cardAboutStacked.descriptionBottom = 'testing';
    cardAboutStacked.titleBottom = 'testing card';
    testRenderer.forceAllUpdates();
    expect(cardAboutStacked._TitleBottom.y).toEqual(
      cardAboutStacked._Description.y +
        cardAboutStacked._Description.style.textStyle.lineHeight +
        cardAboutStacked.style.paddingVertical * 2
    );
    expect(cardAboutStacked._Description.x).toEqual(
      cardAboutStacked.style.paddingHorizontal
    );
    expect(cardAboutStacked._Description.y).toEqual(
      cardAboutStacked._Title.y +
        cardAboutStacked._Title.textStyle.lineHeight +
        cardAboutStacked.style.paddingVertical * 1.5
    );
    expect(cardAboutStacked._DescriptionBottom.y).toEqual(
      cardAboutStacked._TitleBottom.textStyle.lineHeight +
        cardAboutStacked._TitleBottom.y +
        cardAboutStacked.style.paddingVertical
    );
  });

  it('should update Bottom text', () => {
    cardAboutStacked.titleBottom = 'Languages';

    testRenderer.forceAllUpdates();
    expect(cardAboutStacked._TitleBottom.content).toEqual('LANGUAGES');
    expect(cardAboutStacked._TitleBottom.x).toEqual(
      cardAboutStacked.style.paddingHorizontal
    );
    expect(cardAboutStacked._TitleBottom.y).toEqual(
      cardAboutStacked.description
        ? cardAboutStacked._Description.y +
            cardAboutStacked._Description.style.textStyle.lineHeight +
            cardAboutStacked.style.paddingVertical * 2
        : cardAboutStacked.style.paddingFirstLine
    );
    expect(cardAboutStacked._TitleBottom.textStyle).toEqual(
      cardAboutStacked.style.titleTextStyle
    );
  });

  it('should update Bottom text', () => {
    cardAboutStacked.titleBottom = 'Languages';

    testRenderer.forceAllUpdates();
    expect(cardAboutStacked._TitleBottom.content).toEqual('LANGUAGES');
    expect(cardAboutStacked._TitleBottom.x).toEqual(
      cardAboutStacked.style.paddingHorizontal
    );
    expect(cardAboutStacked._TitleBottom.y).toEqual(
      cardAboutStacked.description
        ? cardAboutStacked._Description.y +
            cardAboutStacked._Description.style.textStyle.lineHeight +
            cardAboutStacked.style.paddingVertical * 2
        : cardAboutStacked.style.paddingFirstLine
    );
    expect(cardAboutStacked._TitleBottom.textStyle).toEqual(
      cardAboutStacked.style.titleTextStyle
    );
  });
  it('should update position of Description', () => {
    cardAboutStacked.descriptionBottom = 'Description';
    cardAboutStacked.titleBottom = 'Languages';
    testRenderer.forceAllUpdates();
    expect(cardAboutStacked._DescriptionBottom.x).toEqual(
      cardAboutStacked.style.paddingHorizontal
    );
    expect(cardAboutStacked._DescriptionBottom.y).toEqual(
      cardAboutStacked.description
        ? cardAboutStacked._TitleBottom.y +
            cardAboutStacked.style.paddingVertical * 2
        : cardAboutStacked._TitleBottom.y +
            cardAboutStacked.style.paddingVertical * 3
    );
    expect(cardAboutStacked._DescriptionBottom.textStyle).toEqual(
      cardAboutStacked.style.descriptionTextStyle
    );
  });
});
