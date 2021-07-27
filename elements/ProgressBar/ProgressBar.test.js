import TestUtils from '../../test/lightning-test-utils';
import ProgressBar from '.';

const createProgressBar = TestUtils.makeCreateComponent(ProgressBar);

describe('ProgressBar', () => {
  let progressBar, testRenderer;

  beforeEach(() => {
    [progressBar, testRenderer] = createProgressBar();
  });
  afterEach(() => {
    progressBar = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the correct height', () => {
    expect(progressBar.h).toBe(8);
  });

  it('renders the progress bar at the correct length', () => {
    [progressBar, testRenderer] = createProgressBar({ w: 500 });
    expect(progressBar.w).toBe(500);
  });

  it('renders the progress at the correct length', () => {
    [progressBar, testRenderer] = createProgressBar({ progress: 0.5, w: 500 });
    expect(progressBar._Progress.transition('w').targetValue).toBe(250);
  });

  it('does not render the progress past the width of the item', () => {
    [progressBar, testRenderer] = createProgressBar({ progress: 1.5, w: 300 });
    expect(progressBar._Progress.transition('w').targetValue).toBe(300);
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

  it('should set radius', () => {
    expect(progressBar.radius).toBeDefined();
  });

  it('should set bar color', () => {
    const barColor = 4289216576;
    progressBar.barColor = barColor;
    setTimeout(() => {
      expect(progressBar.barColor).toBe(barColor);
    }, 0);
  });

  it('should set progress color', () => {
    const progressColor = 4289216576;
    progressBar.progressColor = progressColor;
    setTimeout(() => {
      expect(progressBar.progressColor).toBe(progressColor);
    }, 0);
  });
});
