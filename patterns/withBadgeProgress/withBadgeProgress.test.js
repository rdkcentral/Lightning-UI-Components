import TestUtils from '../../test/lightning-test-utils';
import withBadgeProgress from '.';
import Tile from '../../elements/Tile';

const createTileWithBadgeProgress = (base, props) =>
  TestUtils.makeCreateComponent(withBadgeProgress(base))(props);

describe('withBadgeProgress', () => {
  let component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createTileWithBadgeProgress(Tile);
  });
  afterEach(() => {
    component = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should set the component display name', () => {
    expect(component.constructor.name).toBe('TileWithBadgeProgress');
  });

  it('should display badge, badgePadding, and Badge position', done => {
    const badge = 'HD';
    const badgePadding = 40;
    component.badge = badge;
    component._badgePadding = badgePadding;
    component.badgeLocation = 'upperLeft';
    testRenderer.update();

    setTimeout(() => {
      expect(component.badge).toBe(badge);
      expect(component._badgePadding).toBe(badgePadding);
      expect(component._Badge.x).toBe(component.x + badgePadding);
      expect(component._Badge.y).toBe(badgePadding);
      done();
    }, 100);
  });

  it('should display the progress bar', done => {
    const progress = 0.5;
    const progressBarPadding = 50;
    component.progress = progress;
    component._progressBarPadding = progressBarPadding;
    testRenderer.update();

    setTimeout(() => {
      expect(component.progress).toBe(progress);
      expect(component._progressBarPadding).toBe(progressBarPadding);
      expect(component._ProgressBar.x).toBe(progressBarPadding);
      expect(component._ProgressBar.y).toBe(
        component._unfocusedHeight -
          component._ProgressBar.h -
          progressBarPadding
      );
      done();
    }, 100);
  });

  it('should alpha the progress off if progress is 0', () => {
    component.progress = 0.5; // need to make sure the ProgressBar has been created
    testRenderer.update();
    testRenderer.focus();
    expect(component._ProgressBar.alpha).toBe(1);

    component.progress = 0;
    testRenderer.focus();
    testRenderer.update();
    expect(component._ProgressBar.alpha).toBe(0);
  });
});
