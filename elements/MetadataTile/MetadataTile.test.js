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

  it('should set the focus and unfocus scales', async () => {
    const focusScaleConst = 1.5;
    const unfocusScaleConst = 0.9;
    [metadataTile, testRenderer] = createMetadataTile(
      {
        focusScaleConst,
        unfocusScaleConst
      },
      { spyOnMethods: ['_update'] }
    );
    await metadataTile.__updatePromiseSpy;
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

  it('should set first line content', async () => {
    const content = ['text', { icon: 'icon.png', title: 'icon' }];
    [metadataTile, testRenderer] = createMetadataTile(
      { firstLine: content },
      { spyOnMethods: ['_update'] }
    );
    await metadataTile.__updatePromiseSpy;
    testRenderer.update();

    expect(metadataTile.firstLine).toBe(content);
    expect(metadataTile._FirstLine.childList.length).toBe(2);
  });

  it('should set second line text', async () => {
    const content = 'second line text';
    [metadataTile, testRenderer] = createMetadataTile(
      { secondLine: content },
      { spyOnMethods: ['_update'] }
    );
    await metadataTile.__updatePromiseSpy;
    testRenderer.update();
    expect(metadataTile.secondLine).toBe(content);
    expect(metadataTile._SecondLine.childList.length).toBe(3);
  });

  it('should set first line text properties', async () => {
    const font = { fontFace: 'MyGenericFont', fontSize: 50 };
    const firstLine = 'first line text';
    const firstLineTextProperties = font;
    [metadataTile, testRenderer] = createMetadataTile(
      {
        firstLine,
        firstLineTextProperties
      },
      { spyOnMethods: ['_update'] }
    );
    await metadataTile.__updatePromiseSpy;
    testRenderer.update();
    expect(metadataTile.firstLineTextProperties).toBe(font);
    expect(metadataTile._FirstLine.childList.getAt(0).text).toMatchObject(font);
  });

  it('should set second line text properties', async () => {
    const font = { fontFace: 'MyGenericFont', fontSize: 30 };
    const secondLine = 'second line text';
    const secondLineTextProperties = font;
    [metadataTile, testRenderer] = createMetadataTile(
      {
        secondLine,
        secondLineTextProperties
      },
      { spyOnMethods: ['_update'] }
    );
    await metadataTile.__updatePromiseSpy;
    testRenderer.update();
    expect(metadataTile.secondLineTextProperties).toBe(font);
    expect(metadataTile._SecondLine.childList.getAt(0).text).toMatchObject(
      font
    );
  });

  it('should build announce text from the multiple lines', async () => {
    const firstLine = 'First line text';
    const secondLine = 'Second line text';
    [metadataTile, testRenderer] = createMetadataTile(
      {
        firstLine,
        secondLine
      },
      { spyOnMethods: ['_update'] }
    );
    await metadataTile.__updatePromiseSpy;
    expect(metadataTile.announce).toBe(
      `${metadataTile.firstLine}. ${metadataTile.secondLine}`
    );
  });

  it('should build announce text from one line', async () => {
    const firstLine = 'First line text';
    const secondLine = '';
    [metadataTile, testRenderer] = createMetadataTile(
      {
        firstLine,
        secondLine
      },
      { spyOnMethods: ['_update'] }
    );
    await metadataTile.__updatePromiseSpy;
    expect(metadataTile.announce).toBe(`${metadataTile.firstLine}`);
  });
});
