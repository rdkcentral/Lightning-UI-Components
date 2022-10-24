import TestUtils from '../../test/lightning-test-utils';
import ProgressBar from '.';
import defaultThemeStyles, { base, palette } from './ProgressBar.styles';

jest.mock('./ProgressBar.styles', () => {
  const originalDefaultModule = jest.requireActual(
    './ProgressBar.styles'
  ).default;
  const originalPaletteDefaultModule = jest.requireActual(
    './ProgressBar.styles'
  ).paletteDefault;
  const originalBase = jest.requireActual('./ProgressBar.styles').base;
  const originalPalette = jest.requireActual('./ProgressBar.styles').palette;

  return {
    __esModule: true, // This makes it all work
    default: jest
      .fn()
      .mockImplementation((...args) => originalDefaultModule(...args)),
    paletteDefault: originalPaletteDefaultModule,
    base: jest.fn().mockImplementation((...args) => originalBase(...args)),
    palette: jest.fn().mockImplementation((...args) => originalPalette(...args))
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

  it('sets the announce string to the progress percentage', () => {
    progressBar.progress = 0.5;
    testRenderer.forceAllUpdates();
    expect(progressBar.announce).toBe('50%');
  });

  it('overrides the announce string', () => {
    const overrideString = 'Custom announce string';
    progressBar.announce = overrideString;
    testRenderer.forceAllUpdates();
    expect(progressBar.announce).toBe(overrideString);
  });

  it('reannounces on progress change', () => {
    progressBar.fireAncestors = jest.fn();
    progressBar.progress = 0.2;
    testRenderer.forceAllUpdates();
    expect(progressBar.fireAncestors).toHaveBeenCalledWith('$announce', '20%');
  });

  it('has a base theme', () => {
    expect(typeof base).toBe('function');
    expect(base(baseTheme)).toEqual(
      expect.objectContaining({
        h: expect.any(Number),
        radius: expect.any(Number),
        animation: expect.any(Object)
      })
    );
  });

  it('has style palettes', () => {
    expect(typeof palette).toBe('function');
    const paletteStyles = palette(baseTheme);
    expect(Object.keys(paletteStyles).length).toBe(3);
    expect(paletteStyles.neutral).toBeDefined();
    expect(paletteStyles.brand).toBeDefined();
    expect(paletteStyles.inverse).toBeDefined();
  });

  it('renders the correct height', async done => {
    expect(progressBar.h).toBe(8);
    done();
  });

  it('renders the progress bar at the correct length', () => {
    progressBar.w = 500;
    expect(progressBar.w).toBe(500);
  });

  it('renders the progress at the correct length', async done => {
    progressBar.w = 500;
    progressBar.progress = 0.5;
    await progressBar.__updateSpyPromise;
    expect(progressBar._Progress.transition('w').targetValue).toBe(250);
    done();
  });

  it('does not render the progress past the width of the item', async done => {
    progressBar.w = 300;
    progressBar.progress = 1.5;
    await progressBar.__updateSpyPromise;
    expect(progressBar._Progress.transition('w').targetValue).toBe(300);
    done();
  });

  it('renders the progress at the correct length if passed through in component creation', () => {
    [progressBar, testRenderer] = createProgressBar({ progress: 0.5, w: 400 });
    expect(progressBar._Progress.transition('w').targetValue).toBe(200);
  });

  it('animates the progress at the correct length over a set duration', async done => {
    progressBar.w = 400;
    progressBar.progress = 0.5;
    const duration = 3;
    progressBar.style = {
      animation: {
        duration
      }
    };
    await progressBar.__updateSpyPromise;
    expect(progressBar._componentStyle.animation.duration).toBe(duration);
    progressBar.progress = 1;
    await progressBar.__updateSpyPromise;
    expect(progressBar._Progress.transition('w').settings.duration).toBe(
      duration
    );
    done();
  });

  it('animates the progress with a givin timing function', async done => {
    progressBar.w = 400;
    progressBar.progress = 0.5;
    const curve = 'linear';
    progressBar.style = {
      animation: {
        timingFunction: curve
      }
    };
    await progressBar.__updateSpyPromise;
    expect(progressBar._componentStyle.animation.timingFunction).toBe(curve);
    expect(progressBar._Progress.transition('w').settings.timingFunction).toBe(
      curve
    );
    done();
  });

  it('animates the progress after a given delay', async done => {
    progressBar.w = 400;
    progressBar.progress = 0.5;
    const delay = 2;
    progressBar.style = {
      animation: {
        delay
      }
    };
    await progressBar.__updateSpyPromise;
    expect(progressBar._componentStyle.animation.delay).toBe(delay);
    expect(progressBar._Progress.transition('w').settings.delay).toBe(delay);
    done();
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
    [progressBar, testRenderer] = createProgressBar({ progress: 0, w: 400 });
    progressBar.progress = 0.5;
    progressBar.requestUpdate(true);
    expect(progressBar._Progress.transition('w').targetValue).toBeGreaterThan(
      0
    );
    expect(progressBar._Progress.transition('alpha').targetValue).toBe(1);
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
