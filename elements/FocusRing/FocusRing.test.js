import TestUtils from '../../test/lightning-test-utils';
import FocusRing from '.';
import { getHexColor, GREY } from '../../Styles';

const createFocusRing = TestUtils.makeCreateComponent(FocusRing, {
  w: 320,
  h: 180,
  radius: 8
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

  it('should set size', () => {
    [focusRing, testRenderer] = createFocusRing({ size: 4 });
    expect(focusRing.size).toEqual(4);
  });

  it('should set primary color accounting for color type passed', () => {
    const testColor = getHexColor(GREY[5], 96);
    [focusRing, testRenderer] = createFocusRing({
      style: { color: getHexColor(GREY[5], 96) }
    });
    expect(focusRing._Ring.colorUl).toEqual(testColor);
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

  it('should set radius and include the size of the ring', done => {
    [focusRing, testRenderer] = createFocusRing({ style: { radius: 12 } });
    expect(
      parseInt(focusRing.tag('Ring').texture._lookupId.split(',').pop())
    ).toEqual(18);
    done();
  });

  it('should set the spacing', () => {
    const spacing = 50;
    [focusRing, testRenderer] = createFocusRing({ style: { spacing } });
    const rectSettings = focusRing
      .tag('Ring')
      .texture._lookupId.replace('rect', '')
      .split(',');
    const offset = spacing * 2 + focusRing._componentStyles.borderWidth;
    expect(parseInt(rectSettings[0])).toEqual(focusRing.w + offset);
    expect(parseInt(rectSettings[1])).toEqual(focusRing.h + offset);
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
});
