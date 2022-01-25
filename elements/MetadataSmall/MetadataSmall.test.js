import TestUtils from '../../test/lightning-test-utils';
import MetadataSmall from '.';

const createMetadataSmall = TestUtils.makeCreateComponent(MetadataSmall, {
  w: 400
});

describe('MetadataSmall', () => {
  let metadataSmall, testRenderer;

  beforeEach(() => {
    [metadataSmall, testRenderer] = createMetadataSmall();
  });
  afterEach(() => {
    metadataSmall = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should calculate the focus scale', () => {
    testRenderer.focus();
    testRenderer.update();
    expect(Math.floor(metadataSmall._focusW)).toBe(
      Math.floor(metadataSmall.focusScaleConst * metadataSmall.w)
    );

    testRenderer.unfocus();
    testRenderer.update();
    expect(metadataSmall._focusW).toBe(400);
  });

  it('should set the focus and unfocus scales', async () => {
    [metadataSmall, testRenderer] = createMetadataSmall(
      {
        focusScaleConst: 1.5,
        unfocusScaleConst: 0.9
      },
      { spyOnMethods: ['_update'] }
    );
    await metadataSmall.__updateSpyPromise;
    expect(metadataSmall.focusScaleConst).toBe(1.5);
    expect(metadataSmall.unfocusScaleConst).toBe(0.9);
    testRenderer.focus();
    testRenderer.update();
    expect(metadataSmall._focusW).toBe(400 * 1.5);

    testRenderer.unfocus();
    testRenderer.update();
    expect(metadataSmall._focusW).toBe(400 * 0.9);
  });

  it('should set justification of the first line', () => {
    metadataSmall.justify = 'center';
    expect(metadataSmall.justify).toBe('center');
  });

  it('should set marqueeProperties of the first line', () => {
    metadataSmall.marqueeProperties = { delayStart: 1 };
    expect(metadataSmall.marqueeProperties.delayStart).toBe(1);
  });

  it('should set first line content', async () => {
    const content = ['text'];
    [metadataSmall, testRenderer] = createMetadataSmall(
      { firstLine: content },
      { spyOnMethods: ['_update'] }
    );
    await metadataSmall.__updateSpyPromise;
    testRenderer.update();
    expect(metadataSmall.firstLine).toBe(content);
  });

  it('should set second line text', async () => {
    const content = 'second line text';
    [metadataSmall, testRenderer] = createMetadataSmall(
      { secondLine: content },
      { spyOnMethods: ['_update'] }
    );
    await metadataSmall.__updateSpyPromise;
    testRenderer.update();

    expect(metadataSmall.secondLine).toBe(content);
    expect(metadataSmall._SecondLine.childList.length).toBe(3);
  });

  it('should set first line text properties', async () => {
    const font = { fontFace: 'MyGenericFont', fontSize: 50 };
    metadataSmall.firstLine = 'first line text';
    metadataSmall.firstLineTextProperties = font;
    [metadataSmall, testRenderer] = createMetadataSmall(
      { firstLine: 'first line text', firstLineTextProperties: font },
      { spyOnMethods: ['_update'] }
    );
    await metadataSmall.__updateSpyPromise;
    testRenderer.update();
    expect(metadataSmall.firstLineTextProperties).toBe(font);
    expect(metadataSmall._FirstLine.style).toMatchObject(font);
  });

  it('should set second line text properties', async () => {
    const font = { fontFace: 'MyGenericFont', fontSize: 30 };
    [metadataSmall, testRenderer] = createMetadataSmall(
      {
        secondLine: 'second line text',
        secondLineTextProperties: font
      },
      { spyOnMethods: ['_update'] }
    );
    await metadataSmall.__updateSpyPromise;
    testRenderer.update();

    expect(metadataSmall.secondLineTextProperties).toBe(font);
    expect(metadataSmall._SecondLine.childList.getAt(0).text).toMatchObject(
      font
    );
  });

  it('should render a logo', async () => {
    const logo = 'logo.png';
    const width = 50;
    const spacing = 10;
    [metadataSmall, testRenderer] = createMetadataSmall(
      {
        logo,
        logoW: width,
        logoSpacing: spacing
      },
      { spyOnMethods: ['_update'] }
    );
    await metadataSmall.__updateSpyPromise;

    testRenderer.update();
    expect(metadataSmall.logo).toBe(logo);
    expect(metadataSmall._Logo.src).toBe(logo);
    expect(metadataSmall.logoW).toBe(width);
    expect(metadataSmall._Logo.w).toBe(width);
    expect(metadataSmall.logoSpacing).toBe(spacing);
    // TODO: Is this supposed to be true?
    // expect(metadataSmall._Text.flexItem.marginRight).toBe(spacing);
  });

  it('should build announce text from the multiple lines', async () => {
    const firstLine = 'First line text';
    const secondLine = 'Second line text';
    [metadataSmall, testRenderer] = createMetadataSmall(
      {
        firstLine,
        secondLine
      },
      { spyOnMethods: ['_update'] }
    );
    await metadataSmall.__updateSpyPromise;
    expect(metadataSmall.announce).toBe(`${firstLine}. ${secondLine}`);
  });

  it('should announce text from only some lines', async () => {
    const firstLine = 'First line text';
    [metadataSmall, testRenderer] = createMetadataSmall(
      {
        firstLine
      },
      { spyOnMethods: ['_update'] }
    );
    await metadataSmall.__updateSpyPromise;
    expect(metadataSmall.announce).toBe(`${metadataSmall.firstLine}`);
  });
});
