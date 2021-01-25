import TestUtils from '../lightning-test-utils';
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
    expect(metadataCard._focusW).toBe(400 * 1.15);

    testRenderer.unfocus();
    testRenderer.update();
    expect(metadataCard._focusW).toBe(400);
  });

  it('should set the focus and unfocus scales', () => {
    metadataCard.focusScale = 1.5;
    metadataCard.unfocusScale = 0.9;
    expect(metadataCard.focusScale).toBe(1.5);
    expect(metadataCard.unfocusScale).toBe(0.9);

    testRenderer.focus();
    testRenderer.update();
    expect(metadataCard._focusW).toBe(400 * 1.5);

    testRenderer.unfocus();
    testRenderer.update();
    expect(metadataCard._focusW).toBe(400 * 0.9);
  });

  it('should not calculate the focus scale if there is no width', () => {
    let [metadataCardNoWidth, testRenderer2] = TestUtils.makeCreateComponent(
      MetadataCard
    )();
    testRenderer2.focus();
    testRenderer2.update();
    expect(metadataCardNoWidth._focusW).toBe(410 * 1.12);
  });

  it('should set justification of the first line', () => {
    metadataCard.justify = 'center';
    expect(metadataCard.justify).toBe('center');
  });

  it('should set marqueeProperties of the first line', () => {
    metadataCard.marqueeProperties = { delayStart: 1 };
    expect(metadataCard.marqueeProperties.delayStart).toBe(1);
  });

  it('should set first line content', () => {
    const content = ['text', { icon: 'icon.png', title: 'icon' }];
    metadataCard.firstLine = content;
    testRenderer.update();
    expect(metadataCard.firstLine).toBe(content);
    expect(metadataCard._FirstLine.childList.length).toBe(2);
  });

  it('should set second line text', () => {
    const content = 'second line text';
    metadataCard.secondLine = content;
    testRenderer.update();
    expect(metadataCard.secondLine).toBe(content);
    expect(metadataCard._SecondLine.childList.length).toBe(3);
  });

  it('should set third line text', () => {
    const content = 'third line text';
    metadataCard.thirdLine = content;
    testRenderer.update();
    expect(metadataCard.thirdLine).toBe(content);
    expect(metadataCard._ThirdLine.childList.length).toBe(3);
  });

  it('should set first line text properties', () => {
    const font = { fontFace: 'MyGenericFont', fontSize: 50 };
    metadataCard.firstLine = 'first line text';
    metadataCard.firstLineTextProperties = font;
    testRenderer.update();
    expect(metadataCard.firstLineTextProperties).toBe(font);
    expect(metadataCard._FirstLine.childList.getAt(0).text).toMatchObject(font);
  });

  it('should set second line text properties', () => {
    const font = { fontFace: 'MyGenericFont', fontSize: 30 };
    metadataCard.secondLine = 'second line text';
    metadataCard.secondLineTextProperties = font;
    testRenderer.update();
    expect(metadataCard.secondLineTextProperties).toBe(font);
    expect(metadataCard._SecondLine.childList.getAt(0).text).toMatchObject(
      font
    );
  });

  it('should set third line text properties', () => {
    const font = { fontFace: 'MyGenericFont', fontSize: 20 };
    metadataCard.thirdLine = 'third line text';
    metadataCard.thirdLineTextProperties = font;
    testRenderer.update();
    expect(metadataCard.thirdLineTextProperties).toBe(font);
    expect(metadataCard._ThirdLine.childList.getAt(0).text).toMatchObject(font);
  });

  it('should render a logo', () => {
    const logo = 'logo.png';
    const width = 50;
    const spacing = 10;
    metadataCard.logo = logo;
    metadataCard.logoW = width;
    metadataCard.logoSpacing = spacing;
    testRenderer.update();
    expect(metadataCard.logo).toBe(logo);
    expect(metadataCard._Logo.src).toBe(logo);
    expect(metadataCard.logoW).toBe(width);
    expect(metadataCard._Logo.w).toBe(width);
    expect(metadataCard.logoSpacing).toBe(spacing);
    expect(metadataCard._Text.flexItem.marginRight).toBe(spacing);
  });

  it('should build announce text from the multiple lines', () => {
    metadataCard.firstLine = 'First line text';
    metadataCard.secondLine = 'Second line text';
    metadataCard.thirdLine = 'Third line text';
    expect(metadataCard.announce).toBe(
      `${metadataCard.firstLine}. ${metadataCard.secondLine}. ${metadataCard.thirdLine}.`
    );
  });
});
