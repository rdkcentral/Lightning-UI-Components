import { makeCreateComponent, fastForward } from '@lightningjs/ui-test-utils';
import SliderLarge from './SliderLarge.js';
import { jest } from '@jest/globals';

const createSlider = makeCreateComponent(SliderLarge);

describe('SliderLarge', () => {
  let sliderLarge, testRenderer;

  beforeEach(() => {
    [sliderLarge, testRenderer] = createSlider();
    testRenderer.update();
  });

  afterEach(() => {
    sliderLarge = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets properties', () => {
    [sliderLarge, testRenderer] = createSlider({
      min: 1,
      max: 10,
      step: 0.5,
      value: 5
    });
    testRenderer.update();
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets the initial LeftBar and Circle textures without smoothing', () => {
    [sliderLarge, testRenderer] = createSlider({
      min: 1,
      max: 10,
      step: 1,
      value: 5
    });
    testRenderer.forceAllUpdates();
    expect(sliderLarge._SliderBar.w).toBeGreaterThan(0);
  });

  it('Circle x position when value is greater than the max value', () => {
    [sliderLarge, testRenderer] = createSlider({
      min: 1,
      max: 10,
      step: 1,
      value: 15
    });
    testRenderer.forceAllUpdates();
    expect(sliderLarge._Circle.x).toEqual(sliderLarge._calculatedSliderWidth);
  });

  it('Circle x position when value is less than the min value', () => {
    [sliderLarge, testRenderer] = createSlider({
      min: 1,
      max: 10,
      step: 1,
      value: 0
    });
    testRenderer.forceAllUpdates();
    expect(sliderLarge._Circle.x).toEqual(
      (1 / 10) * sliderLarge._calculatedSliderWidth
    );
  });

  it('Circle x position and progress bar width when minimum value is negative', () => {
    [sliderLarge, testRenderer] = createSlider({
      min: -10,
      max: 10,
      step: 1,
      value: 3
    });
    testRenderer.forceAllUpdates();
    expect(sliderLarge._Circle.x).toEqual(
      ((sliderLarge.value - sliderLarge.min) /
        (sliderLarge.max - sliderLarge.min)) *
        sliderLarge._calculatedSliderWidth
    );
    expect(sliderLarge._SliderBar.progress).toEqual(
      (sliderLarge.value - sliderLarge.min) /
        (sliderLarge.max - sliderLarge.min)
    );
  });

  it('Alpha value of arrow when value is equal to max value', () => {
    [sliderLarge, testRenderer] = createSlider({
      min: 1,
      max: 10,
      step: 1,
      value: 1,
      disabled: false
    });
    testRenderer.forceAllUpdates();
    expect(sliderLarge._LeftArrow.alpha).toEqual(0.5);
  });

  it('Alpha value of arrow when mode is set to disabled', () => {
    [sliderLarge, testRenderer] = createSlider({
      min: 1,
      max: 10,
      step: 1,
      value: 1,
      mode: 'disabled'
    });
    testRenderer.forceAllUpdates();
    expect(sliderLarge._LeftArrow.alpha).toEqual(0);
  });

  it('Width larger than knob and arrows', () => {
    [sliderLarge, testRenderer] = createSlider({
      min: 1,
      max: 10,
      step: 1,
      value: 2,
      w: 300
    });
    expect(sliderLarge._calculatedSliderWidth).toEqual(
      300 -
        sliderLarge.style.arrowSpacing * 2 -
        sliderLarge.style.arrowWidth * 2
    );
  });

  it('handle left override function', () => {
    [sliderLarge, testRenderer] = createSlider({
      min: 1,
      max: 10,
      step: 1,
      value: 2,
      disabled: false,
      onLeft: () => {
        return false;
      }
    });
    sliderLarge._handleLeft();
    expect(sliderLarge.onLeft()).toEqual(false);
  });

  it('handle left when mode is set to disabled', () => {
    [sliderLarge, testRenderer] = createSlider({
      min: 1,
      max: 10,
      step: 1,
      value: 2,
      mode: 'disabled'
    });
    expect(sliderLarge._handleLeft()).toEqual(false);
  });

  it('handle right override function', () => {
    [sliderLarge, testRenderer] = createSlider({
      min: 1,
      max: 10,
      step: 1,
      value: 2,
      disabled: false,
      onRight: () => {
        return false;
      }
    });
    sliderLarge._handleRight();
    expect(sliderLarge.onRight()).toEqual(false);
  });

  it('handle right when mode is set to disabled', () => {
    [sliderLarge, testRenderer] = createSlider({
      min: 1,
      max: 10,
      step: 1,
      value: 2,
      mode: 'disabled'
    });
    expect(sliderLarge._handleRight()).toEqual(false);
  });

  describe('key handling', () => {
    describe('right', () => {
      beforeEach(() => {
        [sliderLarge, testRenderer] = createSlider({
          max: 2,
          value: 0
        });
      });

      it('increases the value', () => {
        sliderLarge._handleRight();
        expect(sliderLarge.value).toEqual(1);
      });

      it('stops increasing at max value', () => {
        sliderLarge._handleRight();
        sliderLarge._handleRight();
        expect(sliderLarge.value).toEqual(2);
        sliderLarge._handleRight();
        expect(sliderLarge.value).toEqual(2);
      });

      it('updates the Bar and Circle textures with smoothing', async () => {
        [sliderLarge, testRenderer] = createSlider(
          { max: 2, value: 1 },
          { spyOnMethods: ['_update'] }
        );
        await sliderLarge.__updateSpyPromise;
        expect(sliderLarge._SliderBar._Progress.w).toEqual(0);

        testRenderer.keyPress('Right');
        await sliderLarge.__updateSpyPromise;

        fastForward(sliderLarge._SliderBar);
        testRenderer.update();
        const updatedWidth = testRenderer.getInstance()._SliderBar._Progress.w;
        expect(updatedWidth).toBeGreaterThan(0);
      });
    });

    describe('left', () => {
      beforeEach(() => {
        [sliderLarge, testRenderer] = createSlider({
          max: 2,
          value: 2
        });
      });

      it('decreases the value', () => {
        sliderLarge._handleLeft();
        expect(sliderLarge.value).toEqual(1);
      });

      it('stops decreasing at the min value', () => {
        sliderLarge._handleLeft();
        sliderLarge._handleLeft();
        expect(sliderLarge.value).toEqual(0);
        sliderLarge._handleLeft();
        expect(sliderLarge.value).toEqual(0);
      });

      it('updates the Bar and Circle textures with smoothing', async () => {
        [sliderLarge, testRenderer] = createSlider(
          {
            max: 2,
            value: 2
          },
          {
            spyOnMethods: ['_update']
          }
        );
        await sliderLarge.__updateSpyPromise;
        const initialWidth = sliderLarge._SliderBar.w;
        expect(sliderLarge._SliderBar.w).toEqual(initialWidth);

        testRenderer.keyPress('Left');
        await sliderLarge.__updateSpyPromise;

        fastForward(sliderLarge._SliderBar);
        testRenderer.update();
        const updatedWidth = sliderLarge._SliderBar._Progress.w;
        expect(updatedWidth).toBeLessThan(initialWidth);
      });
    });
  });

  describe('onChange signal', () => {
    beforeEach(() => {
      SliderLarge.prototype.signal = jest.fn();
      [sliderLarge, testRenderer] = createSlider({
        value: 50
      });
    });

    it('is fired on init', () => {
      expect(sliderLarge.signal).toBeCalledWith('onChange', 50, sliderLarge);
    });

    it('is fired on key left', async () => {
      [sliderLarge, testRenderer] = createSlider(
        { value: 50 },
        { spyOnMethods: ['_update'] }
      );
      await sliderLarge.__updateSpyPromise;
      sliderLarge._handleLeft();
      await sliderLarge.__updateSpyPromise;
      expect(sliderLarge.signal).toBeCalledWith('onChange', 49, sliderLarge);
    });

    it('is fired on key right', async () => {
      [sliderLarge, testRenderer] = createSlider(
        { value: 50 },
        { spyOnMethods: ['_update'] }
      );
      await sliderLarge.__updateSpyPromise;
      sliderLarge._handleRight();
      await sliderLarge.__updateSpyPromise;
      expect(sliderLarge.signal).toBeCalledWith('onChange', 51, sliderLarge);
    });
  });
});
