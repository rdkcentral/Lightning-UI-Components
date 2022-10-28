import TestUtils from '../../test/lightning-test-utils';
import CardAbout from './CardAbout';

const createCardAboutComponent = TestUtils.makeCreateComponent(CardAbout);

describe('cardAbout', () => {
  let cardAbout, testRenderer;
  const lightningPath = 'assets/images/ic_lightning_white_32.png';

  beforeEach(() => {
    [cardAbout, testRenderer] = createCardAboutComponent({
      title: 'some string'
    });
  });

  afterEach(() => {
    cardAbout = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets the announce string to the title, middle, and description text', () => {
    const title = 'Title';
    const description = 'Description';
    const iconLeft = { icon: 'left.png', title: 'left' };
    const iconRight = { icon: 'right.png', title: 'right' };
    const textLeft = '00%';
    const textRight = '00%';
    cardAbout.patch({
      title,
      description,
      iconLeft,
      iconRight,
      textLeft,
      textRight
    });
    testRenderer.forceAllUpdates();
    expect(cardAbout.announce).toEqual([
      title.toUpperCase(),
      `${iconLeft.title} ${textLeft}`,
      `${iconRight.title} ${textRight}`,
      description
    ]);
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    cardAbout.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(cardAbout.announce).toBe(overrideString);
  });

  it('has the correct static props getter', () => {
    expect(cardAbout.constructor.properties).toMatchObject([
      'title',
      'description',
      'iconRight',
      'textRight',
      'iconLeft',
      'textLeft'
    ]);
  });

  it('has the correct static tags getter', () => {
    expect(cardAbout.constructor.tags).toMatchObject([
      'Background',
      'Title',
      'Description',
      'LeftIconTextContainer',
      'RightIconTextContainer'
    ]);
  });

  it('should update Container', () => {
    testRenderer.forceAllUpdates();
    expect(cardAbout._LeftIconTextContainer.x).toEqual(
      cardAbout.style.paddingHorizontal
    );
    testRenderer.forceAllUpdates();
    cardAbout._update();
    expect(cardAbout._LeftIconTextContainer.y).toEqual(
      cardAbout._Title.textStyle.lineHeight +
        cardAbout.style.paddingVertical +
        cardAbout.style.paddingFirstLine
    );
    expect(cardAbout._RightIconTextContainer.x).toEqual(
      !cardAbout.iconLeft && !cardAbout.textLeft
        ? cardAbout.style.paddingHorizontal
        : cardAbout.w - cardAbout.style.paddingHorizontal
    );
    expect(cardAbout._RightIconTextContainer.y).toEqual(
      cardAbout._Title.textStyle.lineHeight +
        cardAbout.style.paddingVertical +
        cardAbout.style.paddingFirstLine
    );
    expect(cardAbout._RightIconTextContainer.contentSpacing).toEqual(
      cardAbout.style.contentSpacing
    );
  });

  it('should set description position', () => {
    testRenderer.forceAllUpdates();
    cardAbout._update();
    expect(cardAbout._Description.y).toEqual(
      cardAbout._hasContent
        ? (cardAbout._RightIconTextContainer.y ||
            cardAbout._LeftIconTextContainer.y) +
            (cardAbout._LeftIconTextContainer.style.textStyle.lineHeight ||
              cardAbout._RightIconTextContainer.style.textStyle.lineHeight) +
            cardAbout.style.paddingVertical
        : cardAbout._Title.textStyle.lineHeight +
            cardAbout.style.paddingVertical +
            cardAbout.style.paddingFirstLine
    );
    expect(cardAbout._Description.x).toEqual(cardAbout.style.paddingHorizontal);
  });

  it('should update title style', () => {
    testRenderer.forceAllUpdates();
    expect(cardAbout._Title.textStyle).toEqual(cardAbout.style.titleTextStyle);
  });

  it('should check for content', () => {
    testRenderer.forceAllUpdates();
    expect(cardAbout._hasContent).toBe(
      Boolean(
        cardAbout.iconLeft ||
          cardAbout.iconRight ||
          cardAbout.textLeft ||
          cardAbout.textRight
      )
    );
  });
  describe('updating content', () => {
    it('should update the left icon text container', () => {
      cardAbout.iconLeft = lightningPath;
      cardAbout.textLeft = 'About Card Icon';
      expect(cardAbout._LeftIconTextContainer.content).toEqual([]);
      cardAbout._updateContent();
      testRenderer.forceAllUpdates();
      expect(cardAbout._LeftIconTextContainer.content).toEqual([
        { icon: lightningPath, alpha: 1 },
        'About Card Icon'
      ]);
    });
  });

  it('should update the right icon text container', () => {
    cardAbout.iconRight = lightningPath;
    cardAbout.textRight = 'Hi Just testing';
    expect(cardAbout._RightIconTextContainer.content).toEqual([]);
    cardAbout._updateContent();
    expect(cardAbout._RightIconTextContainer.content).toEqual([
      { icon: lightningPath, alpha: 1 },
      'Hi Just testing'
    ]);
  });
});
