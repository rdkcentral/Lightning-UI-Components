import TestUtils from '../../test/lightning-test-utils';
import ProgressBar from '.';
import defaultThemeStyles, {
  variantDefault,
  base,
  variants
} from './ProgressBar.styles';

jest.mock('./ProgressBar.styles', () => {
  const originalDefaultModule = jest.requireActual(
    './ProgressBar.styles'
  ).default;
  const originalVariantDefaultModule = jest.requireActual(
    './ProgressBar.styles'
  ).variantDefault;
  const originalBase = jest.requireActual('./ProgressBar.styles').base;
  const originalVariants = jest.requireActual('./ProgressBar.styles').variants;

  return {
    __esModule: true, // This makes it all work
    default: jest
      .fn()
      .mockImplementation((...args) => originalDefaultModule(...args)),
    variantDefault: originalVariantDefaultModule,
    base: jest.fn().mockImplementation((...args) => originalBase(...args)),
    variants: jest
      .fn()
      .mockImplementation((...args) => originalVariants(...args))
  };
});

import baseTheme from '../../themes/base';
const createProgressBar = TestUtils.makeCreateComponent(ProgressBar);

describe('ProgressBar', () => {
  let progressBar, testRenderer;

  beforeEach(() => {
    defaultThemeStyles.mockClear();
    [progressBar, testRenderer] = createProgressBar(
      {},
      { spyOnMethods: ['_update'] }
    );
  });

  afterEach(() => {
    progressBar = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has a default variant of neutral', () => {
    expect(variantDefault).toBe('neutral');
  });

  it('has a base theme', () => {
    expect(typeof base).toBe('function');
    expect(base(baseTheme)).toEqual(
      expect.objectContaining({
        w: expect.any(Number),
        h: expect.any(Number),
        radius: expect.any(Number)
      })
    );
  });

  it('has style variants', () => {
    expect(typeof variants).toBe('function');
    const variantStyles = variants(baseTheme);
    expect(Object.keys(variantStyles).length).toBe(3);
    expect(variantStyles.neutral).toBeDefined();
    expect(variantStyles.brand).toBeDefined();
    expect(variantStyles.inverse).toBeDefined();
  });

  it('expects the processThemeStyles function to be exported from styles by default', () => {
    expect(typeof defaultThemeStyles).toBe('function');
    expect(defaultThemeStyles).toHaveBeenCalledTimes(1);
    expect(defaultThemeStyles).toHaveBeenLastCalledWith(
      expect.any(Object),
      undefined
    );
  });

  it('renders the correct height', async done => {
    expect(progressBar.h).toBe(8);
    done();
  });

  it('renders the progress bar at the correct length', () => {
    [progressBar, testRenderer] = createProgressBar({ w: 500 });
    expect(progressBar.w).toBe(500);
  });

  it('renders the progress at the correct length', () => {
    [progressBar, testRenderer] = createProgressBar({ progress: 0.5, w: 500 });
    expect(progressBar._Progress.transition('w').targetValue).toBe(250);
  });

  it('does not render the progress past the width of the item', async done => {
    progressBar.patch({ progress: 1.5, w: 300 });
    await progressBar.__updateSpyPromise;
    expect(progressBar._Progress.transition('w').targetValue).toBe(300);
    done();
  });

  it('renders the progress at the correct length if passed through in component creation', () => {
    [progressBar, testRenderer] = createProgressBar({ progress: 0.5 });
    expect(progressBar._Progress.transition('w').targetValue).toBe(205);
  });

  it('animates the progress at the correct length over a set duration', () => {
    [progressBar, testRenderer] = createProgressBar({ progress: 0.5 });
    const duration = 3;
    progressBar.animationDuration = duration;
    expect(progressBar.animationDuration).toBe(duration);
    progressBar.progress = 1;
    progressBar._update();
    expect(progressBar._Progress.transition('w').settings.duration).toBe(
      duration
    );
  });

  it('should alpha the progress off if progress is set to zero', () => {
    progressBar.progress = 0;
    expect(progressBar._Progress.transition('w').targetValue).toBe(0);
    expect(progressBar._Progress.transition('alpha').targetValue).toBe(0);
  });

  it('should alpha the progress off if there is progress is invalid', () => {
    progressBar.progress = -0.5;
    expect(progressBar._Progress.transition('w').targetValue).toBe(0);
    expect(progressBar._Progress.transition('alpha').targetValue).toBe(0);
  });

  it('should alpha the progress on if there is valid progress', () => {
    progressBar.progress = 0.5;
    progressBar._update();
    expect(progressBar._Progress.transition('w').targetValue).toBeGreaterThan(
      0
    );
    expect(progressBar._Progress.transition('alpha').targetValue).toBe(1);
  });

  it('should not set width and update if width is not changed', () => {
    [progressBar, testRenderer] = createProgressBar({ progress: 1.5, w: 300 });
    const updateSpy = jest.spyOn(progressBar, '_update');
    progressBar.w = 300;
    expect(updateSpy).not.toHaveBeenCalled();
  });

  it('should set bar color', () => {
    const barColor = 4289216576;
    [progressBar] = createProgressBar({ barColor });
    expect(progressBar.barColor).toBe(barColor);
  });

  it('should set progress color', () => {
    const progressColor = 4289216576;
    [progressBar] = createProgressBar({ progressColor });
    expect(progressBar.progressColor).toBe(progressColor);
  });
});
