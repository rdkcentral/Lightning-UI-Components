import TestUtils from '../../test/lightning-test-utils';
import Slider from '.';

const createSlider = TestUtils.makeCreateComponent(Slider);

describe('Slider', () => {
  let slider, testRenderer;

  beforeEach(() => {
    [slider, testRenderer] = createSlider();
    testRenderer.update();
  });
  afterEach(() => {
    slider = null;
    testRenderer = null;
  });

  it('renders', () => {
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets properties', () => {
    [slider, testRenderer] = createSlider({
      min: 1,
      max: 10,
      step: 0.5,
      value: 5
    });
    testRenderer.update();
    const tree = testRenderer.toJSON(2);
    expect(tree).toMatchSnapshot();
  });

  it('sets the inital LeftBar and Circle textures without smoothing', () => {
    [slider, testRenderer] = createSlider({
      min: 1,
      max: 10,
      step: 1,
      value: 5
    });

    expect(slider._SliderBar.w).toBeGreaterThan(0);
  });

  it('Circle x position when value is greater than the max value', () => {
    [slider, testRenderer] = createSlider({
      min: 1,
      max: 10,
      step: 1,
      value: 15
    });

    expect(slider._Circle.x).toEqual(slider._calculatedSliderWidth);
  });

  it('Circle x position when value is less than the min value', () => {
    [slider, testRenderer] = createSlider({
      min: 1,
      max: 10,
      step: 1,
      value: 0
    });

    expect(slider._Circle.x).toEqual((1 / 10) * slider._calculatedSliderWidth);
  });

  it('Circle x position and progress bar width when minimum value is negative', () => {
    [slider, testRenderer] = createSlider({
      min: -10,
      max: 10,
      step: 1,
      value: 3
    });

    expect(slider._Circle.x).toEqual(
      ((slider.value - slider.min) / (slider.max - slider.min)) *
        slider._calculatedSliderWidth
    );
    expect(slider._SliderBar.progress).toEqual(
      (slider.value - slider.min) / (slider.max - slider.min)
    );
  });

  it('Alpha value of arrow when value is equal to max value', () => {
    [slider, testRenderer] = createSlider({
      min: 1,
      max: 10,
      step: 1,
      value: 1,
      disabled: false
    });

    expect(slider._LeftArrow.alpha).toEqual(0.5);
  });

  it('Alpha value of arrow when mode is set to disabled', () => {
    [slider, testRenderer] = createSlider({
      min: 1,
      max: 10,
      step: 1,
      value: 1,
      mode: 'disabled'
    });

    expect(slider._LeftArrow.alpha).toEqual(0);
  });

  it('Arrow height when image is used for arrows', () => {
    [slider, testRenderer] = createSlider({
      min: 1,
      max: 10,
      step: 1,
      value: 2,
      smooth: true
    });
    slider._componentStyle.iconLeftSrc = undefined;
    slider._componentStyle.iconRightSrc = undefined;
    slider._updateArrows();
    expect(slider._LeftArrow.h).toEqual(0);
  });

  it('Width larger than knob and arrows', () => {
    [slider, testRenderer] = createSlider({
      min: 1,
      max: 10,
      step: 1,
      value: 2,
      w: 300
    });
    expect(slider._calculatedSliderWidth).toEqual(
      300 -
        slider._componentStyle.arrowSpacing * 2 -
        slider._componentStyle.arrowWidth * 2
    );
  });

  it('handle left override function', () => {
    [slider, testRenderer] = createSlider({
      min: 1,
      max: 10,
      step: 1,
      value: 2,
      disabled: false,
      onLeft: () => {
        return false;
      }
    });
    slider._handleLeft();
    expect(slider.onLeft()).toEqual(false);
  });

  it('handle left when mode is set to disabled', () => {
    [slider, testRenderer] = createSlider({
      min: 1,
      max: 10,
      step: 1,
      value: 2,
      mode: 'disabled'
    });
    expect(slider._handleLeft()).toEqual(false);
  });

  it('handle right override function', () => {
    [slider, testRenderer] = createSlider({
      min: 1,
      max: 10,
      step: 1,
      value: 2,
      disabled: false,
      onRight: () => {
        return false;
      }
    });
    slider._handleRight();
    expect(slider.onRight()).toEqual(false);
  });

  it('handle right when mode is set to disabled', () => {
    [slider, testRenderer] = createSlider({
      min: 1,
      max: 10,
      step: 1,
      value: 2,
      mode: 'disabled'
    });
    expect(slider._handleRight()).toEqual(false);
  });

  describe('key handling', () => {
    describe('right', () => {
      beforeEach(() => {
        [slider, testRenderer] = createSlider({
          max: 2,
          value: 0
        });
      });

      it('increases the value', () => {
        slider._handleRight();
        expect(slider.value).toEqual(1);
      });

      it('stops increasing at max value', () => {
        slider._handleRight();
        slider._handleRight();
        expect(slider.value).toEqual(2);
        slider._handleRight();
        expect(slider.value).toEqual(2);
      });

      it('updates the LeftBar and Circle textures with smoothing', async () => {
        [slider, testRenderer] = createSlider(
          { max: 2, value: 1 },
          { spyOnMethods: ['_update'] }
        );
        await slider.__updateSpyPromise;
        expect(slider._SliderBar._Progress.w).toEqual(0);

        testRenderer.keyPress('Right');
        await slider.__updateSpyPromise;

        TestUtils.fastForward(slider._SliderBar);
        testRenderer.update();
        const updatedWidth = testRenderer.getInstance()._SliderBar._Progress.w;
        expect(updatedWidth).toBeGreaterThan(0);
      });
    });

    describe('left', () => {
      beforeEach(() => {
        [slider, testRenderer] = createSlider({
          max: 2,
          value: 2
        });
      });

      it('decreases the value', () => {
        slider._handleLeft();
        expect(slider.value).toEqual(1);
      });

      it('stops decreasing at the min value', () => {
        slider._handleLeft();
        slider._handleLeft();
        expect(slider.value).toEqual(0);
        slider._handleLeft();
        expect(slider.value).toEqual(0);
      });

      it('updates the LeftBar and Circle textures with smoothing', async () => {
        [slider, testRenderer] = createSlider(
          {
            max: 2,
            value: 2
          },
          {
            spyOnMethods: ['_update']
          }
        );
        await slider.__updateSpyPromise;
        const initialWidth = slider._SliderBar.w;
        expect(slider._SliderBar.w).toEqual(initialWidth);

        testRenderer.keyPress('Left');
        await slider.__updateSpyPromise;

        TestUtils.fastForward(slider._SliderBar);
        testRenderer.update();
        const updatedWidth = slider._SliderBar._Progress.w;
        expect(updatedWidth).toBeLessThan(initialWidth);
      });
    });
  });

  describe('onChange signal', () => {
    beforeEach(() => {
      Slider.prototype.signal = jest.fn();
      [slider, testRenderer] = createSlider({
        value: 50
      });
    });

    it('is fired on init', () => {
      expect(slider.signal).toBeCalledWith('onChange', 50, slider);
    });

    it('is fired on key left', async () => {
      [slider, testRenderer] = createSlider(
        { value: 50 },
        { spyOnMethods: ['_update'] }
      );
      await slider.__updateSpyPromise;
      slider._handleLeft();
      await slider.__updateSpyPromise;
      expect(slider.signal).toBeCalledWith('onChange', 49, slider);
    });

    it('is fired on key right', async () => {
      [slider, testRenderer] = createSlider(
        { value: 50 },
        { spyOnMethods: ['_update'] }
      );
      await slider.__updateSpyPromise;
      slider._handleRight();
      await slider.__updateSpyPromise;
      expect(slider.signal).toBeCalledWith('onChange', 51, slider);
    });
  });
});
