import TestUtils from '../../test/lightning-test-utils';
import AboutCard from './AboutCard';

const createAboutCardComponent = TestUtils.makeCreateComponent(AboutCard);

describe('aboutCard', () => {
  let aboutCard, testRenderer;
  const lightningPath = 'assets/images/ic_lightning_white_32.png';

  beforeEach(() => {
    [aboutCard, testRenderer] = createAboutCardComponent({
      title: 'some string'
    });
  });
  afterEach(() => {
    aboutCard = null;
    testRenderer = null;
  });
  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('has the correct static props getter', () => {
    expect(aboutCard.constructor.properties).toMatchObject([
      'title',
      'description',
      'iconWidth',
      'iconHeight',
      'iconRight',
      'textRight',
      'iconLeft',
      'textLeft'
    ]);
  });

  it('has the correct static tags getter', () => {
    expect(aboutCard.constructor.tags).toMatchObject([
      'Background',
      'Title',
      'Description',
      'LeftIconTextContainer',
      'RightIconTextContainer'
    ]);
  });

  it('should update Container', () => {
    testRenderer.forceAllUpdates();
    expect(aboutCard._LeftIconTextContainer.x).toEqual(
      aboutCard._componentStyles.paddingHorizontal
    );
    testRenderer.forceAllUpdates();
    aboutCard._update();
    expect(aboutCard._LeftIconTextContainer.y).toEqual(
      aboutCard._Title.textStyle.lineHeight +
        aboutCard._componentStyles.paddingVertical +
        aboutCard._componentStyles.paddingFirstLine
    );
    expect(aboutCard._RightIconTextContainer.x).toEqual(
      !aboutCard.iconLeft && !aboutCard.textLeft
        ? aboutCard._componentStyles.paddingHorizontal
        : aboutCard.w - aboutCard._componentStyles.paddingHorizontal
    );
    expect(aboutCard._RightIconTextContainer.y).toEqual(
      aboutCard._Title.textStyle.lineHeight +
        aboutCard._componentStyles.paddingVertical +
        aboutCard._componentStyles.paddingFirstLine
    );
    expect(aboutCard._RightIconTextContainer.contentSpacing).toEqual(
      aboutCard._componentStyles.contentSpacing
    );
  });

  it('should set description position', () => {
    testRenderer.forceAllUpdates();
    aboutCard._update();
    expect(aboutCard._Description.y).toEqual(
      aboutCard._hasContent
        ? (aboutCard._RightIconTextContainer.y ||
            aboutCard._LeftIconTextContainer.y) +
            (aboutCard.iconHeight ||
              aboutCard._LeftIconTextContainer.textProperties.lineHeight ||
              aboutCard._RightIconTextContainer.textProperties.lineHeight) +
            aboutCard._componentStyles.paddingVertical
        : aboutCard._Title.textStyle.lineHeight +
            aboutCard._componentStyles.paddingVertical +
            aboutCard._componentStyles.paddingFirstLine
    );
    expect(aboutCard._Description.x).toEqual(
      aboutCard._componentStyles.paddingHorizontal
    );
  });

  it('should update title style', () => {
    testRenderer.forceAllUpdates();
    expect(aboutCard._Title.textStyle).toEqual(
      aboutCard._componentStyles.titleTextProperties
    );
  });

  it('should check for content', () => {
    testRenderer.forceAllUpdates();
    expect(aboutCard._hasContent).toBe(
      Boolean(
        aboutCard.iconLeft ||
          aboutCard.iconRight ||
          aboutCard.textLeft ||
          aboutCard.textRight
      )
    );
  });
  describe('updating content', () => {
    it('should update the left icon text container', () => {
      aboutCard.iconLeft = lightningPath;
      aboutCard.textLeft = 'About Card Icon';
      expect(aboutCard._LeftIconTextContainer.content).toEqual([]);
      aboutCard._updateContent();
      testRenderer.forceAllUpdates();
      expect(aboutCard._LeftIconTextContainer.content).toEqual([
        { icon: lightningPath },
        'About Card Icon'
      ]);
    });
  });

  it('should update the right icon text container', () => {
    aboutCard.iconRight = lightningPath;
    aboutCard.textRight = 'Hi Just testing';
    expect(aboutCard._RightIconTextContainer.content).toEqual([]);
    aboutCard._updateContent();
    expect(aboutCard._RightIconTextContainer.content).toEqual([
      { icon: lightningPath },
      'Hi Just testing'
    ]);
  });
});
