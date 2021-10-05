import TestUtils from '../../test/lightning-test-utils';
import MetadataTile from '.';

const createMetadataTile = TestUtils.makeCreateComponent(MetadataTile, {
  w: 400
});

describe('MetadataTile', () => {
  let metadataTile, testRenderer;

  beforeEach(() => {
    [metadataTile, testRenderer] = createMetadataTile();
  });
  afterEach(() => {
    metadataTile = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should calculate the focus scale', () => {
    testRenderer.focus();
    testRenderer.update();
    expect(Math.floor(metadataTile._focusW)).toBe(
      Math.floor(metadataTile.focusScaleConst * metadataTile.w)
    );

    testRenderer.unfocus();
    testRenderer.update();
    expect(metadataTile._focusW).toBe(400);
  });

  it('should set the focus and unfocus scales', () => {
    metadataTile.focusScaleConst = 1.5;
    metadataTile.unfocusScaleConst = 0.9;
    setTimeout(() => {
      expect(metadataTile.focusScaleConst).toBe(1.5);
      expect(metadataTile.unfocusScaleConst).toBe(0.9);
    }, 0);
    testRenderer.focus();
    testRenderer.update();
    expect(metadataTile._focusW).toBe(400 * 1.5);
    testRenderer.unfocus();
    testRenderer.update();
    expect(metadataTile._focusW).toBe(400 * 0.9);
  });

  it('should set justification of the first line', () => {
    metadataTile.justify = 'center';
    expect(metadataTile.justify).toBe('center');
    metadataTile.justify = 'flex-start';
    expect(metadataTile.justify).toBe('flex-start');
  });

  it('should set marqueeProperties of the first line', () => {
    metadataTile.marqueeProperties = { delayStart: 1 };
    expect(metadataTile.marqueeProperties.delayStart).toBe(1);
  });

  it('should set first line content', () => {
    const content = ['text', { icon: 'icon.png', title: 'icon' }];
    metadataTile.firstLine = content;
    testRenderer.update();
    setTimeout(() => {
      expect(metadataTile.firstLine).toBe(content);
      expect(metadataTile._FirstLine.childList.length).toBe(2);
    }, 0);
  });

  it('should set second line text', () => {
    const content = 'second line text';
    metadataTile.secondLine = content;
    testRenderer.update();
    setTimeout(() => {
      expect(metadataTile.secondLine).toBe(content);
      expect(metadataTile._SecondLine.childList.length).toBe(3);
    }, 0);
  });

  it('should set first line text properties', () => {
    const font = { fontFace: 'MyGenericFont', fontSize: 50 };
    metadataTile.firstLine = 'first line text';
    metadataTile.firstLineTextProperties = font;
    testRenderer.update();
    setTimeout(() => {
      expect(metadataTile.firstLineTextProperties).toBe(font);
      expect(metadataTile._FirstLine.childList.getAt(0).text).toMatchObject(
        font
      );
    }, 0);
  });

  it('should set second line text properties', () => {
    const font = { fontFace: 'MyGenericFont', fontSize: 30 };
    metadataTile.secondLine = 'second line text';
    metadataTile.secondLineTextProperties = font;
    testRenderer.update();
    setTimeout(() => {
      expect(metadataTile.secondLineTextProperties).toBe(font);
      expect(metadataTile._SecondLine.childList.getAt(0).text).toMatchObject(
        font
      );
    }, 0);
  });

  it('should build announce text from the multiple lines', () => {
    metadataTile.firstLine = 'First line text';
    metadataTile.secondLine = 'Second line text';
    setTimeout(() => {
      expect(metadataTile.announce).toBe(
        `${metadataTile.firstLine}. ${metadataTile.secondLine}.`
      );
    }, 0);
  });
});
