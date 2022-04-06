import lng from '@lightningjs/core';
import { Arrow } from '../../textures';
import Base from '../../Base';
import { withExtensions } from '../../mixins';
import withStyles from '../../mixins/withThemeStyles';
import styles from './Slider.styles';
import { getValidColor } from '../../Styles/Colors';
import ProgressBar from '../ProgressBar';
import Icon from '../Icon';
import Knob from '../Knob';

class Slider extends Base {
  static get __componentName() {
    return 'Slider';
  }

  static _template() {
    return {
      Container: {
        mountY: 0.5,
        Bar: {
          mountY: 0.5,
          SliderBar: {
            type: ProgressBar,
            progress: 0.5,
            mountY: 0.5
          },
          Circle: {
            type: Knob,
            mountY: 0.5,
            zIndex: 5 // places circle knob on top of sliderBar
          }
        },
        LeftArrow: {
          mountY: 0.5,
          y: h => h / 2
        },
        RightArrow: {
          mountY: 0.5,
          y: h => h / 2
        }
      }
    };
  }

  static get properties() {
    return ['max', 'min', 'step', 'value'];
  }

  static get tags() {
    return [
      'Container',
      'SliderBar',
      'Bar',
      'Circle',
      {
        name: 'LeftArrow',
        path: 'Container.LeftArrow'
      },
      {
        name: 'RightArrow',
        path: 'Container.RightArrow'
      }
    ];
  }

  _construct() {
    super._construct();
    this._min = 0;
    this._max = 100;
    this._step = 1;
    this._value = 0;
  }

  _update() {
    this._updateSliderLayout();
    this._updatePositions();
    this._updateArrows();
    this.signal('onChange', this.value, this);
  }

  _updateCirclePosition() {
    this._SliderBar.progress =
      this.value < this.min ? this.min / this.max : this.value / this.max;
    let xCirclePosition;
    if (this.value < this.min || this.value + this.step < this.min) {
      xCirclePosition = (this.min / this.max) * this._calculatedSliderWidth;
    } else if (this.value > this.max || this.value - this.step > this.max) {
      xCirclePosition = this._calculatedSliderWidth;
      this._SliderBar.progress = this._calculatedSliderWidth;
    } else {
      if (this.min < 0 || this.max < 0) {
        xCirclePosition =
          ((this.value - this.min) / (this.max - this.min)) *
          this._calculatedSliderWidth;
        this._SliderBar.progress =
          (this.value - this.min) / (this.max - this.min);
      } else {
        xCirclePosition = (this.value / this.max) * this._calculatedSliderWidth;
      }
    }

    this._Circle.patch({
      x: xCirclePosition,
      y:
        (this._componentStyles.containerHeight -
          this._componentStyles.sliderHeight) /
          2 +
        (this._componentStyles.innerCircleSize +
          this._componentStyles.sliderHeight) /
          2,
      alpha: this.hasFocus() && !this.disabled ? 1 : 0
    });
  }

  _handleLeft() {
    if (!this.disabled) {
      if (typeof this.onLeft === 'function') {
        return this.onLeft(this);
      }
      const value = this.value - this.step;
      this.value = value >= this.min ? value : this.min;
      this._updateCirclePosition();
      return true;
    }
    return false;
  }

  _handleRight() {
    if (!this.disabled) {
      if (typeof this.onRight === 'function') {
        return this.onRight(this);
      }
      const value = this.value + this.step;
      this.value = value <= this.max ? value : this.max;
      this._updateCirclePosition();
      return true;
    }
    return false;
  }

  _updateSliderLayout() {
    this._Container.patch({
      h: this._componentStyles.containerHeight,
      w: this.w || this._componentStyles.minWidth,
      Bar: {
        x:
          this._componentStyles.arrowSpacing + this._componentStyles.arrowWidth,
        SliderBar: {
          y:
            (this._componentStyles.containerHeight -
              this._componentStyles.sliderHeight) /
            2,
          w: this._calculatedSliderWidth,
          variant: this.variant,
          style: {
            ...this._componentStyles.progressBarStyles,
            animationDuration: 0
          }
        }
      }
    });
    this._Circle.patch({
      w: this._componentStyles.innerCircleSize,
      h: this._componentStyles.innerCircleSize,
      color: this._componentStyles.circleColor,
      variant: this.variant,
      style: {
        radius: this._componentStyles.radius,
        circleSize: this._componentStyles.innerCircleSize,
        circleColor: this._componentStyles.circleColor
      }
    });
  }

  _updatePositions() {
    this._updateCirclePosition();
    // fade arrows at min/max
    let sliderArrowAlphaLeft;
    let sliderArrowAlphaRight;
    if (this.value <= this.min) {
      sliderArrowAlphaLeft = this._componentStyles.arrowAlphaValueLimit;
      sliderArrowAlphaRight = this._componentStyles.arrowAlphaValue;
    } else if (this.value >= this.max) {
      sliderArrowAlphaLeft = this._componentStyles.arrowAlphaValue;
      sliderArrowAlphaRight = this._componentStyles.arrowAlphaValueLimit;
    } else {
      sliderArrowAlphaLeft = sliderArrowAlphaRight =
        this._componentStyles.arrowAlphaValue;
    }
    if (this.disabled) {
      sliderArrowAlphaLeft = sliderArrowAlphaRight =
        this._componentStyles.arrowAlphaDisabled;
    }
    if (this._smooth) {
      this._LeftArrow.smooth = { alpha: sliderArrowAlphaLeft };
      this._RightArrow.smooth = { alpha: sliderArrowAlphaRight };
    } else {
      this._LeftArrow.patch({
        alpha: sliderArrowAlphaLeft
      });
      this._RightArrow.patch({
        alpha: sliderArrowAlphaRight
      });
    }
    if (!this._LeftArrow.texture || !this._RightArrow.texture) {
      this._updateArrows();
    }
  }

  _updateArrows() {
    if (
      !this._componentStyles.iconLeftSrc &&
      !this._componentStyles.iconRightSrc
    ) {
      const arrowTexture = {
        type: Arrow,
        w: this._componentStyles.arrowWidth,
        h: this._componentStyles.arrowHeight,
        color: lng.StageUtils.getRgbString(
          getValidColor(this._componentStyles.arrowColor)
        )
      };
      this._LeftArrow.h = this._RightArrow.h = 0;
      this._LeftArrow.w = this._RightArrow.w = 0;
      this._LeftArrow.texture = {
        ...arrowTexture,
        direction: 'left'
      };

      this._RightArrow.texture = {
        ...arrowTexture,
        direction: 'right'
      };
    } else {
      const arrowProps = {
        texture: undefined,
        type: Icon,
        w: this._componentStyles.arrowWidth,
        h: this._componentStyles.arrowHeight
      };
      this._LeftArrow.patch({
        ...arrowProps,
        src: this._componentStyles.iconLeftSrc
      });
      this._RightArrow.patch({
        ...arrowProps,
        src: this._componentStyles.iconRightSrc
      });
    }
    const rightArrowX =
      this._componentStyles.arrowSpacing +
      this._calculatedSliderWidth +
      this._Bar.x;
    const color = this._componentStyles.arrowColor;
    if (this._smooth) {
      this._RightArrow.patch({
        smooth: {
          color,
          x: rightArrowX
        }
      });
      this._LeftArrow.smooth = { color };
    } else {
      this._RightArrow.patch({
        color,
        x: rightArrowX
      });
      this._LeftArrow.patch({ color });
    }
  }

  get _calculatedSliderWidth() {
    const totalArrowSize =
      this._componentStyles.arrowSpacing * 2 +
      this._componentStyles.arrowWidth * 2;
    return this.w < totalArrowSize + this._Circle.w
      ? this._componentStyles.minWidth - totalArrowSize
      : this.w - totalArrowSize;
  }
}
export default withExtensions(withStyles(Slider, styles));
