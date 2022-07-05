import TestUtils from '../../test/lightning-test-utils';
import withBadgeProgress from '.';
import Tile from '../../elements/Tile';

const createTileWithBadgeProgress = (base, props) =>
  TestUtils.makeCreateComponent(withBadgeProgress(base))(props);

describe('withBadgeProgress', () => {
  let component, testRenderer;

  beforeEach(() => {
    [component, testRenderer] = createTileWithBadgeProgress(Tile, { w: 300 });
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

  it('should display badge, and Badge position', () => {
    const badge = 'HD';
    const badgePadding = component.styles.badgePadding;
    const badgeLocation = 'upperLeft';

    [component, testRenderer] = createTileWithBadgeProgress(Tile, {
      w: 300,
      badge,
      badgeLocation
    });

    expect(component.badge).toBe(badge);
    expect(component._Badge.x).toBe(component.x + badgePadding);
    expect(component._Badge.y).toBe(badgePadding);
  });

  it('should display the progress bar', () => {
    const progress = 0.5;
    const progressBarPadding = component.styles.progressBarPadding;

    [component, testRenderer] = createTileWithBadgeProgress(Tile, {
      w: 300,
      progress
    });

    expect(component.progress).toBe(progress);
    expect(component._ProgressBar.x).toBe(progressBarPadding);
    expect(component._ProgressBar.y).toBe(
      component._unfocusedTileHeight -
        component._ProgressBar.h -
        progressBarPadding
    );
  });

  it('should alpha the progress off if progress is 0', async () => {
    component.progress = 0.5; // need to make sure the ProgressBar has been created
    testRenderer.update();
    testRenderer.focus();
    await TestUtils.nextTick();
    expect(component._ProgressBar.alpha).toBe(1);
    component.progress = 0;
    testRenderer.update();
    await TestUtils.nextTick(2e3);
    expect(component._ProgressBar.alpha).toBe(0);
  });
});
