import { makeCreateComponent } from '@lightning/ui-test-utils';
import FocusRing from '.';
import { utils } from '@lightning/ui-core';

const createFocusRing = makeCreateComponent(FocusRing, {
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
    const testColor = utils.getHexColor('#663399', 0.96);
    [focusRing, testRenderer] = createFocusRing({
      style: { color: utils.getHexColor('#663399', 0.96) }
    });
    expect(focusRing._Ring.colorUl).toEqual(testColor);
  });

  it('should set primary color transition from color', () => {
    const testColor = utils.getHexColor(
      utils.getHexColor('#663399', 0.96),
      0.7
    );
    [focusRing, testRenderer] = createFocusRing({
      style: {
        color: utils.getHexColor(utils.getHexColor('#663399', 0.96), 0.7)
      }
    });
    const { transition } = focusRing._ringColors;
    expect(transition).toEqual(testColor);
  });

  it('should set secondary color', () => {
    [focusRing, testRenderer] = createFocusRing({
      style: {
        secondaryColor: utils.getHexColor('#663399', 0.08)
      }
    });
    const { secondary } = focusRing._ringColors;
    expect(secondary).toEqual(utils.getHexColor('#663399', 0.08));
  });

  it('should set radius and include the size of the ring', done => {
    [focusRing, testRenderer] = createFocusRing({ style: { radius: 12 } });
    expect(
      parseInt(focusRing.tag('Ring').texture._lookupId.split(',').pop())
    ).toEqual(18);
    done();
  });

  it('should set radius to 0 and not add padding', done => {
    [focusRing, testRenderer] = createFocusRing({ style: { radius: 0 } });
    expect(
      parseInt(focusRing.tag('Ring').texture._lookupId.split(',').pop())
    ).toEqual(0);
    done();
  });

  it('should set radius to 0 in an array and not add padding', done => {
    [focusRing, testRenderer] = createFocusRing({
      style: { radius: [0, 0, 0, 0] }
    });
    expect(
      parseInt(focusRing.tag('Ring').texture._lookupId.split(',').pop())
    ).toEqual(0);
    done();
  });

  it('should set the spacing', () => {
    const spacing = 50;
    [focusRing, testRenderer] = createFocusRing({ style: { spacing } });

    const rectSettings = focusRing
      .tag('Ring')
      .texture._lookupId.replace('rect', '')
      .split(',');
    const offset = spacing * 2 + focusRing.style.borderWidth;
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

  it.skip('should stop animating if the component becomes inactive', () => {
    [focusRing, testRenderer] = createFocusRing();
    focusRing.startAnimation();
    expect(focusRing._focusRingAnimation.isPlaying()).toBe(true);
    focusRing._inactive();
    expect(focusRing._focusRingAnimation.isPlaying()).toBe(false);
  });
});
