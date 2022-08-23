import TestUtils from '../../test/lightning-test-utils';
import CardAbout from './CardAbout';

const createCardAboutComponent = TestUtils.makeCreateComponent(CardAbout);

describe('CardAbout', () => {
  let CardAbout, testRenderer;
  const lightningPath = 'assets/images/ic_lightning_white_32.png';

  beforeEach(() => {
    [CardAbout, testRenderer] = createCardAboutComponent({
      title: 'some string'
    });
  });
  afterEach(() => {
    CardAbout = null;
    testRenderer = null;
  });
  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('has the correct static props getter', () => {
    expect(CardAbout.constructor.properties).toMatchObject([
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
    expect(CardAbout.constructor.tags).toMatchObject([
      'Background',
      'Title',
      'Description',
      'LeftIconTextContainer',
      'RightIconTextContainer'
    ]);
  });

  it('should update Container', () => {
    testRenderer.forceAllUpdates();
    expect(CardAbout._LeftIconTextContainer.x).toEqual(
      CardAbout.style.paddingHorizontal
    );
    testRenderer.forceAllUpdates();
    CardAbout._update();
    expect(CardAbout._LeftIconTextContainer.y).toEqual(
      CardAbout._Title.textStyle.lineHeight +
        CardAbout.style.paddingVertical +
        CardAbout.style.paddingFirstLine
    );
    expect(CardAbout._RightIconTextContainer.x).toEqual(
      !CardAbout.iconLeft && !CardAbout.textLeft
        ? CardAbout.style.paddingHorizontal
        : CardAbout.w - CardAbout.style.paddingHorizontal
    );
    expect(CardAbout._RightIconTextContainer.y).toEqual(
      CardAbout._Title.textStyle.lineHeight +
        CardAbout.style.paddingVertical +
        CardAbout.style.paddingFirstLine
    );
    expect(CardAbout._RightIconTextContainer.contentSpacing).toEqual(
      CardAbout.style.contentSpacing
    );
  });

  it('should set description position', () => {
    testRenderer.forceAllUpdates();
    CardAbout._update();
    expect(CardAbout._Description.y).toEqual(
      CardAbout._hasContent
        ? (CardAbout._RightIconTextContainer.y ||
            CardAbout._LeftIconTextContainer.y) +
            (CardAbout.iconHeight ||
              CardAbout._LeftIconTextContainer.textProperties.lineHeight ||
              CardAbout._RightIconTextContainer.textProperties.lineHeight) +
            CardAbout.style.paddingVertical
        : CardAbout._Title.textStyle.lineHeight +
            CardAbout.style.paddingVertical +
            CardAbout.style.paddingFirstLine
    );
    expect(CardAbout._Description.x).toEqual(CardAbout.style.paddingHorizontal);
  });

  it('should update title style', () => {
    testRenderer.forceAllUpdates();
    expect(CardAbout._Title.textStyle).toEqual(
      CardAbout.style.titleTextProperties
    );
  });

  it('should check for content', () => {
    testRenderer.forceAllUpdates();
    expect(CardAbout._hasContent).toBe(
      Boolean(
        CardAbout.iconLeft ||
          CardAbout.iconRight ||
          CardAbout.textLeft ||
          CardAbout.textRight
      )
    );
  });
  describe('updating content', () => {
    it('should update the left icon text container', () => {
      CardAbout.iconLeft = lightningPath;
      CardAbout.textLeft = 'About Card Icon';
      expect(CardAbout._LeftIconTextContainer.content).toEqual([]);
      CardAbout._updateContent();
      testRenderer.forceAllUpdates();
      expect(CardAbout._LeftIconTextContainer.content).toEqual([
        { icon: lightningPath },
        'About Card Icon'
      ]);
    });
  });

  it.only('should update the right icon text container', () => {
    CardAbout.iconRight = lightningPath;
    CardAbout.textRight = 'Hi Just testing';
    expect(CardAbout._RightIconTextContainer.content).toEqual([]);
    CardAbout._updateContent();
    expect(CardAbout._RightIconTextContainer.content).toEqual([
      { color: 4294375161, icon: lightningPath },
      'Hi Just testing'
    ]);
  });
});
