import TestUtils from '../../test/lightning-test-utils';
import FocusRing from '.';
import { getHexColor, GREY } from '../../Styles';

const createFocusRing = TestUtils.makeCreateComponent(FocusRing, {
  w: 320,
  h: 180,
  radius: 8,
  size: 8
});

describe('FocusRing', () => {
  let focusRing, testRenderer;

  beforeEach(() => {
    [focusRing, testRenderer] = createFocusRing();
  });

  afterEach(() => {
    focusRing = null;
    testRenderer = null;
  });

  it('should render', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('should hide the FocusRing if no h & w is specified and fade it in otherwise', async done => {
    [focusRing, testRenderer] = createFocusRing(
      { w: 0, h: 0 },
      { spyOnMethods: ['_update'] }
    );
    await focusRing.__updateSpyPromise;
    expect(focusRing._Ring.alpha).toBe(0.001);
    focusRing.patch({
      w: 320,
      h: 180
    });
    await focusRing.__updateSpyPromise; // Update w
    await focusRing.__updateSpyPromise; // Update h
    testRenderer.update();
    expect(focusRing._Ring.alpha).toBe(1);
    done();
  });

  it('should set size', () => {
    [focusRing, testRenderer] = createFocusRing({ size: 4 });
    expect(focusRing.size).toEqual(4);
  });

  it('should set primary color accounting for color type passed', () => {
    const testColor = getHexColor(GREY[5], 96);
    [focusRing, testRenderer] = createFocusRing({
      style: { color: getHexColor(GREY[5], 96) }
    });
    expect(focusRing.color).toEqual(testColor);
  });

  it('should set primary color transition from color', () => {
    const testColor = getHexColor(getHexColor('#663399', 96), 60);
    [focusRing, testRenderer] = createFocusRing({
      style: {
        color: getHexColor(getHexColor('#663399', 96), 60)
      }
    });
    const { transition } = focusRing._ringColors;
    expect(transition).toEqual(testColor);
  });

  it('should set secondary color', () => {
    [focusRing, testRenderer] = createFocusRing({
      style: {
        secondaryColor: getHexColor('#663399', 8)
      }
    });
    const { secondary } = focusRing._ringColors;
    expect(secondary).toEqual(getHexColor('#663399', 8));
  });

  it('should set radius', done => {
    [focusRing, testRenderer] = createFocusRing({ style: { radius: 12 } });
    expect(
      parseInt(focusRing.tag('Ring').texture._lookupId.split(',').pop())
    ).toEqual(12);
    done();
  });

  it('should set the spacing', () => {
    [focusRing, testRenderer] = createFocusRing({
      style: {
        spacing: 50
      }
    });
    const rectSettings = focusRing
      .tag('Ring')
      .texture._lookupId.replace('rect', '')
      .split(',');
    expect(parseInt(rectSettings[0])).toEqual(focusRing.w + 50);
    expect(parseInt(rectSettings[1])).toEqual(focusRing.h + 50);
  });

  it('should start and stop animating', () => {
    [focusRing, testRenderer] = createFocusRing();
    focusRing.startAnimation();
    expect(focusRing._focusRingAnimation.isPlaying()).toBe(true);
    focusRing.stopAnimation();
    expect(focusRing._focusRingAnimation.isPlaying()).toBe(false);
  });

  it('should stop animating if the component becomes inactive', () => {
    [focusRing, testRenderer] = createFocusRing();
    focusRing.startAnimation();
    expect(focusRing._focusRingAnimation.isPlaying()).toBe(true);
    focusRing._inactive();
    expect(focusRing._focusRingAnimation.isPlaying()).toBe(false);
  });

  it('should not animate if shouldAnimate is set to false in the styles', () => {
    [focusRing, testRenderer] = createFocusRing({
      style: { shouldAnimate: false }
    });
    expect(focusRing._componentStyles.shouldAnimate).toBe(false);
    focusRing.startAnimation();
    expect(focusRing._focusRingAnimation).toBe(null);
  });

  it('should create the focus ring animation if it does not exist', () => {
    focusRing._focusRingAnimation = null;
    focusRing.startAnimation();
    expect(focusRing._focusRingAnimation.isPlaying()).toBe(true);
  });
});
