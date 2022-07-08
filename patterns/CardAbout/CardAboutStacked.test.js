import TestUtils from '../../test/lightning-test-utils';
import CardAboutStacked from './CardAboutStacked';

const createCardAboutStackedComponent =
  TestUtils.makeCreateComponent(CardAboutStacked);

describe('CardAboutStacked', () => {
  let CardAboutStacked, testRenderer;

  beforeEach(() => {
    [CardAboutStacked, testRenderer] = createCardAboutStackedComponent({
      title: 'someString',
      titleBottom: 'some string'
    });
  });
  afterEach(() => {
    CardAboutStacked = null;
    testRenderer = null;
  });
  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('has the correct static props getter', () => {
    expect(CardAboutStacked.constructor.properties).toMatchObject([
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
    expect(CardAboutStacked.constructor.tags).toMatchObject([
      'Background',
      'Title',
      'Description',
      'LeftIconTextContainer',
      'RightIconTextContainer',
      'TitleBottom'
    ]);
  });

  it('should update Container', () => {
    CardAboutStacked.contentBottom = [
      { badge: 'badge' },
      { badge: 'badge' },
      { badge: 'badge' },
      { badge: 'badge' },
      { badge: 'badge' }
    ];
    CardAboutStacked.descriptionBottom = 'testing';
    CardAboutStacked.titleBottom = 'testing card';
    testRenderer.forceAllUpdates();
    expect(CardAboutStacked._TitleBottom.y).toEqual(
      CardAboutStacked._LeftIconTextContainer.y +
        CardAboutStacked._LeftIconTextContainer.textProperties.lineHeight +
        CardAboutStacked._componentStyles.paddingVertical * 2
    );
    expect(CardAboutStacked._LeftIconTextContainer.x).toEqual(
      CardAboutStacked._componentStyles.paddingHorizontal
    );
    expect(CardAboutStacked._LeftIconTextContainer.y).toEqual(
      CardAboutStacked._Title.y +
        CardAboutStacked._Title.textStyle.lineHeight +
        CardAboutStacked._componentStyles.paddingVertical * 1.5
    );
    expect(CardAboutStacked._Description.y).toEqual(
      CardAboutStacked._TitleBottom.textStyle.lineHeight +
        CardAboutStacked._TitleBottom.y +
        CardAboutStacked._componentStyles.paddingVertical
    );
  });

  it('should update Bottom text', () => {
    CardAboutStacked.titleBottom = 'Languages';

    testRenderer.forceAllUpdates();
    expect(CardAboutStacked._TitleBottom.content).toEqual('LANGUAGES');
    expect(CardAboutStacked._TitleBottom.x).toEqual(
      CardAboutStacked._componentStyles.paddingHorizontal
    );
    expect(CardAboutStacked._TitleBottom.y).toEqual(
      CardAboutStacked.contentBottom
        ? CardAboutStacked._LeftIconTextContainer.y +
            CardAboutStacked._LeftIconTextContainer.textProperties.lineHeight +
            CardAboutStacked._componentStyles.paddingVertical * 2
        : CardAboutStacked._componentStyles.paddingFirstLine
    );
    expect(CardAboutStacked._TitleBottom.textStyle).toEqual(
      CardAboutStacked._componentStyles.titleTextProperties
    );
  });

  it('should update Bottom text', () => {
    CardAboutStacked.titleBottom = 'Languages';

    testRenderer.forceAllUpdates();
    expect(CardAboutStacked._TitleBottom.content).toEqual('LANGUAGES');
    expect(CardAboutStacked._TitleBottom.x).toEqual(
      CardAboutStacked._componentStyles.paddingHorizontal
    );
    expect(CardAboutStacked._TitleBottom.y).toEqual(
      CardAboutStacked.contentBottom
        ? CardAboutStacked._LeftIconTextContainer.y +
            CardAboutStacked._LeftIconTextContainer.textProperties.lineHeight +
            CardAboutStacked._componentStyles.paddingVertical * 2
        : CardAboutStacked._componentStyles.paddingFirstLine
    );
    expect(CardAboutStacked._TitleBottom.textStyle).toEqual(
      CardAboutStacked._componentStyles.titleTextProperties
    );
  });
  it('should update position of Description', () => {
    CardAboutStacked.descriptionBottom = 'Description';
    CardAboutStacked.titleBottom = 'Languages';
    testRenderer.forceAllUpdates();
    expect(CardAboutStacked._Description.x).toEqual(
      CardAboutStacked._componentStyles.paddingHorizontal
    );
    expect(CardAboutStacked._Description.y).toEqual(
      CardAboutStacked.contentBottom
        ? CardAboutStacked._TitleBottom.y +
            CardAboutStacked._componentStyles.paddingVertical * 2
        : CardAboutStacked._TitleBottom.y +
            CardAboutStacked._componentStyles.paddingVertical * 3
    );
    expect(CardAboutStacked._Description.textStyle).toEqual(
      CardAboutStacked._componentStyles.descriptionTextProperties
    );
  });
});
