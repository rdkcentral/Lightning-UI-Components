import TestUtils from '../../test/lightning-test-utils';
import MetadataSmall from '.';
import lightningbolt from '../../assets/images/ic_lightning_white_32.png';

const createComponent = TestUtils.makeCreateComponent(MetadataSmall, {
  title: 'title',
  w: 310,
  h: 130
});

describe('MetadataSmall', () => {
  let component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createComponent();
  });
  afterEach(() => {
    component = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should have a lighter or darker data alpha depending on the content', () => {
    component.data = 'Trending';
    expect(component._dataAlpha).toBe(component.styles.data.alphaLight);
    component.data = ['array', 'data'];
    expect(component._dataAlpha).toBe(component.styles.data.alphaDark);
  });

  it("should wrap the title smaller if there's a logo present", () => {
    let [metadataWithLogo] = TestUtils.makeCreateComponent(MetadataSmall, {
      logo: lightningbolt,
      logoWidth: 1920,
      logoHeight: 1080
    })();
    const fullWrap = component._Title.wordWrapWidth;
    const shortWrap = metadataWithLogo._Title.wordWrapWidth;
    expect(shortWrap).toBeLessThan(fullWrap);

    metadataWithLogo = null;
  });

  it('should show a progress bar if a progress value is provided', () => {
    let [metadataWithProgress] = TestUtils.makeCreateComponent(MetadataSmall, {
      progress: 0.2
    })();

    expect(metadataWithProgress._ProgressBar).toBeDefined();

    metadataWithProgress = null;
  });

  it("shouldn't truncate short data", () => {
    expect(component._shouldClipData).toBe(false);
    // Canvas mock doesn't render text, just uses length
    // https://github.com/hustcc/jest-canvas-mock/issues/67
    Object.defineProperty(component, '_dataRenderW', {
      get: jest.fn(() => component.w / 2)
    });

    expect(component._shouldClipData).toBe(false);
  });

  it('should truncate data that would overflow', () => {
    expect(component._shouldClipData).toBe(false);
    // Canvas mock doesn't render text, just uses length
    // https://github.com/hustcc/jest-canvas-mock/issues/67
    Object.defineProperty(component, '_dataRenderW', {
      get: jest.fn(() => component.w)
    });

    expect(component._shouldClipData).toBe(true);
  });
});
