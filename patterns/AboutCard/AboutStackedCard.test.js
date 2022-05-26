import TestUtils from '../../test/lightning-test-utils';
import AboutStackedCard from './AboutStackedCard';

const createAboutStackedCardComponent =
  TestUtils.makeCreateComponent(AboutStackedCard);

describe('aboutCard', () => {
  let aboutStackedCard, testRenderer;

  beforeEach(() => {
    [aboutStackedCard, testRenderer] = createAboutStackedCardComponent({
      title: 'someString',
      titleBottom: 'some string'
    });
  });
  afterEach(() => {
    aboutStackedCard = null;
    testRenderer = null;
  });
  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('has the correct static props getter', () => {
    expect(aboutStackedCard.constructor.properties).toMatchObject([
      'title',
      'description',
      'iconWidth',
      'iconHeight',
      'iconRight',
      'textRight',
      'iconLeft',
      'textLeft',
      'titleBottom',
      'contentBottom',
      'descriptionBottom'
    ]);
  });

  it('has the correct static tags getter', () => {
    expect(aboutStackedCard.constructor.tags).toMatchObject([
      'Background',
      'Title',
      'Description',
      'LeftIconTextContainer',
      'RightIconTextContainer',
      'TitleBottom'
    ]);
  });

  it('should update Container', () => {
    aboutStackedCard.contentBottom = [
      { badge: 'badge' },
      { badge: 'badge' },
      { badge: 'badge' },
      { badge: 'badge' },
      { badge: 'badge' }
    ];
    aboutStackedCard.descriptionBottom = 'testing';
    aboutStackedCard.titleBottom = 'testing card';
    testRenderer.forceAllUpdates();
    expect(aboutStackedCard._TitleBottom.y).toEqual(
      aboutStackedCard._LeftIconTextContainer.y +
        aboutStackedCard._LeftIconTextContainer.textProperties.lineHeight +
        aboutStackedCard._componentStyles.paddingVertical * 2
    );
    expect(aboutStackedCard._LeftIconTextContainer.x).toEqual(
      aboutStackedCard._componentStyles.paddingHorizontal
    );
    expect(aboutStackedCard._LeftIconTextContainer.y).toEqual(
      aboutStackedCard._Title.y +
        aboutStackedCard._Title.textStyle.lineHeight +
        aboutStackedCard._componentStyles.paddingVertical * 1.5
    );
    expect(aboutStackedCard._Description.y).toEqual(
      aboutStackedCard._TitleBottom.textStyle.lineHeight +
        aboutStackedCard._TitleBottom.y +
        aboutStackedCard._componentStyles.paddingVertical
    );
  });

  it('should update Bottom text', () => {
    aboutStackedCard.titleBottom = 'Languages';

    testRenderer.forceAllUpdates();
    expect(aboutStackedCard._TitleBottom.content).toEqual('LANGUAGES');
    expect(aboutStackedCard._TitleBottom.x).toEqual(
      aboutStackedCard._componentStyles.paddingHorizontal
    );
    expect(aboutStackedCard._TitleBottom.y).toEqual(
      aboutStackedCard.contentBottom
        ? aboutStackedCard._LeftIconTextContainer.y +
            aboutStackedCard._LeftIconTextContainer.textProperties.lineHeight +
            aboutStackedCard._componentStyles.paddingVertical * 2
        : aboutStackedCard._componentStyles.paddingFirstLine
    );
    expect(aboutStackedCard._TitleBottom.textStyle).toEqual(
      aboutStackedCard._componentStyles.titleTextProperties
    );
  });

  it('should update Bottom text', () => {
    aboutStackedCard.titleBottom = 'Languages';

    testRenderer.forceAllUpdates();
    expect(aboutStackedCard._TitleBottom.content).toEqual('LANGUAGES');
    expect(aboutStackedCard._TitleBottom.x).toEqual(
      aboutStackedCard._componentStyles.paddingHorizontal
    );
    expect(aboutStackedCard._TitleBottom.y).toEqual(
      aboutStackedCard.contentBottom
        ? aboutStackedCard._LeftIconTextContainer.y +
            aboutStackedCard._LeftIconTextContainer.textProperties.lineHeight +
            aboutStackedCard._componentStyles.paddingVertical * 2
        : aboutStackedCard._componentStyles.paddingFirstLine
    );
    expect(aboutStackedCard._TitleBottom.textStyle).toEqual(
      aboutStackedCard._componentStyles.titleTextProperties
    );
  });
  it('should update position of Description', () => {
    aboutStackedCard.descriptionBottom = 'Description';
    aboutStackedCard.titleBottom = 'Languages';
    testRenderer.forceAllUpdates();
    expect(aboutStackedCard._Description.x).toEqual(
      aboutStackedCard._componentStyles.paddingHorizontal
    );
    expect(aboutStackedCard._Description.y).toEqual(
      aboutStackedCard.contentBottom
        ? aboutStackedCard._TitleBottom.y +
            aboutStackedCard._componentStyles.paddingVertical * 2
        : aboutStackedCard._TitleBottom.y +
            aboutStackedCard._componentStyles.paddingVertical * 3
    );
    expect(aboutStackedCard._Description.textStyle).toEqual(
      aboutStackedCard._componentStyles.descriptionTextProperties
    );
  });
});
