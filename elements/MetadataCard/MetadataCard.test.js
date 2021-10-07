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

  it('should set the focus and unfocus scales', done => {
    metadataCard.focusScaleConst = 1.5;
    metadataCard.unfocusScaleConst = 0.9;
    setTimeout(() => {
      expect(metadataCard.focusScaleConst).toBe(1.5);
      expect(metadataCard.unfocusScaleConst).toBe(0.9);
      done();
    }, 1);
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

  it('should set first line content', done => {
    const content = ['text', { icon: 'icon.png', title: 'icon' }];
    metadataCard.firstLine = content;
    testRenderer.update();
    setTimeout(() => {
      expect(metadataCard.firstLine).toBe(content);
      expect(metadataCard._FirstLine.childList.length).toBe(2);
      done();
    }, 1);
  });

  it('should set second line text', done => {
    const content = 'second line text';
    metadataCard.secondLine = content;
    testRenderer.update();
    setTimeout(() => {
      expect(metadataCard.secondLine).toBe(content);
      expect(metadataCard._SecondLine.childList.length).toBe(3);
      done();
    }, 0);
  });

  it('should set third line text', done => {
    const content = 'third line text';
    metadataCard.thirdLine = content;
    testRenderer.update();
    setTimeout(() => {
      expect(metadataCard.thirdLine).toBe(content);
      expect(metadataCard._ThirdLine.childList.length).toBe(3);
      done();
    }, 0);
  });

  it('should set first line text properties', done => {
    const font = { fontFace: 'MyGenericFont', fontSize: 50 };
    metadataCard.firstLine = 'first line text';
    metadataCard.firstLineTextProperties = font;
    testRenderer.update();
    setTimeout(() => {
      expect(metadataCard.firstLineTextProperties).toBe(font);
      expect(metadataCard._FirstLine.childList.getAt(0).text).toMatchObject(
        font
      );
      done();
    }, 0);
  });

  it('should set second line text properties', done => {
    const font = { fontFace: 'MyGenericFont', fontSize: 30 };
    metadataCard.secondLine = 'second line text';
    metadataCard.secondLineTextProperties = font;
    testRenderer.update();
    setTimeout(() => {
      expect(metadataCard.secondLineTextProperties).toBe(font);
      expect(metadataCard._SecondLine.childList.getAt(0).text).toMatchObject(
        font
      );
      done();
    }, 0);
  });

  it('should set third line text properties', done => {
    const font = { fontFace: 'MyGenericFont', fontSize: 20 };
    metadataCard.thirdLine = 'third line text';
    metadataCard.thirdLineTextProperties = font;
    testRenderer.update();
    setTimeout(() => {
      expect(metadataCard.thirdLineTextProperties).toBe(font);
      expect(metadataCard._ThirdLine.childList.getAt(0).text).toMatchObject(
        font
      );
      done();
    }, 0);
  });

  it('should render a logo', done => {
    const logo = 'logo.png';
    const width = 50;
    const spacing = 10;
    metadataCard.logo = logo;
    metadataCard.logoW = width;
    metadataCard.logoSpacing = spacing;
    testRenderer.update();

    setTimeout(() => {
      testRenderer.update();
      expect(metadataCard.logo).toBe(logo);
      expect(metadataCard._Logo.src).toBe(logo);
      expect(metadataCard.logoW).toBe(width);
      expect(metadataCard._Logo.w).toBe(width);
      expect(metadataCard.logoSpacing).toBe(spacing);
      // TODO: Is this supposed to be true?
      //expect(metadataCard._Text.flexItem.marginRight).toBe(spacing);
      done();
    }, 2);
  });

  it('should build announce text from the multiple lines', done => {
    metadataCard.firstLine = 'First line text';
    metadataCard.secondLine = 'Second line text';
    metadataCard.thirdLine = 'Third line text';

    setTimeout(() => {
      expect(metadataCard.announce).toBe(
        `${metadataCard.firstLine}. ${metadataCard.secondLine}. ${metadataCard.thirdLine}`
      );
      done();
    }, 0);
  });

  it('should announce text from only some lines', done => {
    metadataCard.firstLine = 'First line text';

    setTimeout(() => {
      expect(metadataCard.announce).toBe(`${metadataCard.firstLine}`);
      done();
    }, 0);
  });
});
