import TestUtils from '../../test/lightning-test-utils';
import MetadataCard from '.';

const createMetadataCard = TestUtils.makeCreateComponent(MetadataCard, {
  w: 400
});

describe('MetadataCard', () => {
  let metadataCard, testRenderer;

  beforeEach(() => {
    [metadataCard, testRenderer] = createMetadataCard();
  });
  afterEach(() => {
    metadataCard = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should calculate the focus scale', () => {
    testRenderer.focus();
    testRenderer.update();
    expect(Math.floor(metadataCard._focusW)).toBe(
      Math.floor(metadataCard.focusScaleConst * metadataCard.w)
    );

    testRenderer.unfocus();
    testRenderer.update();
    expect(metadataCard._focusW).toBe(400);
  });

  it('should set the focus and unfocus scales', async () => {
    [metadataCard, testRenderer] = createMetadataCard(
      {
        focusScaleConst: 1.5,
        unfocusScaleConst: 0.9
      },
      { spyOnMethods: ['_update'] }
    );
    await metadataCard.__updateSpyPromise;
    expect(metadataCard.focusScaleConst).toBe(1.5);
    expect(metadataCard.unfocusScaleConst).toBe(0.9);
    testRenderer.focus();
    testRenderer.update();
    expect(metadataCard._focusW).toBe(400 * 1.5);

    testRenderer.unfocus();
    testRenderer.update();
    expect(metadataCard._focusW).toBe(400 * 0.9);
  });

  it('should set justification of the first line', () => {
    metadataCard.justify = 'center';
    expect(metadataCard.justify).toBe('center');
  });

  it('should set marqueeProperties of the first line', () => {
    metadataCard.marqueeProperties = { delayStart: 1 };
    expect(metadataCard.marqueeProperties.delayStart).toBe(1);
  });

  it('should set first line content', async () => {
    const content = ['text', { icon: 'icon.png', title: 'icon' }];
    [metadataCard, testRenderer] = createMetadataCard(
      { firstLine: content },
      { spyOnMethods: ['_update'] }
    );
    await metadataCard.__updateSpyPromise;
    testRenderer.update();
    expect(metadataCard.firstLine).toBe(content);
    expect(metadataCard._FirstLine.childList.length).toBe(2);
  });

  it('should set second line text', async () => {
    const content = 'second line text';
    [metadataCard, testRenderer] = createMetadataCard(
      { secondLine: content },
      { spyOnMethods: ['_update'] }
    );
    await metadataCard.__updateSpyPromise;
    testRenderer.update();

    expect(metadataCard.secondLine).toBe(content);
    expect(metadataCard._SecondLine.childList.length).toBe(3);
  });

  it('should set third line text', async () => {
    const content = 'third line text';
    [metadataCard, testRenderer] = createMetadataCard(
      { thirdLine: content },
      { spyOnMethods: ['_update'] }
    );
    await metadataCard.__updateSpyPromise;
    testRenderer.update();
    testRenderer.update();
    expect(metadataCard.thirdLine).toBe(content);
    expect(metadataCard._ThirdLine.childList.length).toBe(3);
  });

  it('should set first line text properties', async () => {
    const font = { fontFace: 'MyGenericFont', fontSize: 50 };
    metadataCard.firstLine = 'first line text';
    metadataCard.firstLineTextProperties = font;
    [metadataCard, testRenderer] = createMetadataCard(
      { firstLine: 'first line text', firstLineTextProperties: font },
      { spyOnMethods: ['_update'] }
    );
    await metadataCard.__updateSpyPromise;
    testRenderer.update();
    expect(metadataCard.firstLineTextProperties).toBe(font);
    expect(metadataCard._FirstLine.childList.getAt(0).text).toMatchObject(font);
  });

  it('should set second line text properties', async () => {
    const font = { fontFace: 'MyGenericFont', fontSize: 30 };
    [metadataCard, testRenderer] = createMetadataCard(
      {
        secondLine: 'second line text',
        secondLineTextProperties: font
      },
      { spyOnMethods: ['_update'] }
    );
    await metadataCard.__updateSpyPromise;
    testRenderer.update();

    expect(metadataCard.secondLineTextProperties).toBe(font);
    expect(metadataCard._SecondLine.childList.getAt(0).text).toMatchObject(
      font
    );
  });

  it('should set third line text properties', async () => {
    const font = { fontFace: 'MyGenericFont', fontSize: 20 };
    [metadataCard, testRenderer] = createMetadataCard(
      {
        thirdLine: 'third line text',
        thirdLineTextProperties: font
      },
      { spyOnMethods: ['_update'] }
    );
    metadataCard.__updateSpyPromise;
    testRenderer.update();
    expect(metadataCard.thirdLineTextProperties).toBe(font);
    expect(metadataCard._ThirdLine.childList.getAt(0).text).toMatchObject(font);
  });

  it('should render a logo', async () => {
    const logo = 'logo.png';
    const width = 50;
    const spacing = 10;
    [metadataCard, testRenderer] = createMetadataCard(
      {
        logo,
        logoW: width,
        logoSpacing: spacing
      },
      { spyOnMethods: ['_update'] }
    );
    await metadataCard.__updateSpyPromise;

    testRenderer.update();
    expect(metadataCard.logo).toBe(logo);
    expect(metadataCard._Logo.src).toBe(logo);
    expect(metadataCard.logoW).toBe(width);
    expect(metadataCard._Logo.w).toBe(width);
    expect(metadataCard.logoSpacing).toBe(spacing);
    // TODO: Is this supposed to be true?
    // expect(metadataCard._Text.flexItem.marginRight).toBe(spacing);
  });

  it('should build announce text from the multiple lines', async () => {
    const firstLine = 'First line text';
    const secondLine = 'Second line text';
    const thirdLine = 'Third line text';
    [metadataCard, testRenderer] = createMetadataCard(
      {
        firstLine,
        secondLine,
        thirdLine
      },
      { spyOnMethods: ['_update'] }
    );
    await metadataCard.__updateSpyPromise;
    expect(metadataCard.announce).toStrictEqual([
      firstLine,
      secondLine,
      thirdLine
    ]);
  });

  it('should announce text from only some lines', async () => {
    const firstLine = 'First line text';
    [metadataCard, testRenderer] = createMetadataCard(
      {
        firstLine
      },
      { spyOnMethods: ['_update'] }
    );
    await metadataCard.__updateSpyPromise;
    expect(metadataCard.announce).toStrictEqual([firstLine, '', '']);
  });
});
