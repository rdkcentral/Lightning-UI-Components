import lng from '@lightningjs/core';
import { Arrow } from '../../textures';
import Base from '../../Base';
import { withExtensions } from '../../mixins';
import * as styles from './Slider.styles';
import { getValidColor } from '../../utils';
import ProgressBar from '../ProgressBar';
import Icon from '../Icon';
import Knob from '../Knob';

class Slider extends Base {
  static get __componentName() {
    return 'Slider';
  }

  static get __themeStyles() {
    return styles;
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
      y: this._SliderBar.y,
      alpha: this.mode === 'focused' ? 1 : 0
    });
  }

  _handleLeft() {
    if (this.mode !== 'disabled') {
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
    if (this.mode !== 'disabled') {
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
      h: this.style.containerHeight,
      w: this.w || this.style.minWidth,
      Bar: {
        x: this.style.arrowSpacing + this.style.arrowWidth,
        SliderBar: {
          y: this.style.containerHeight / 2,
          w: this._calculatedSliderWidth,
          palette: this.palette,
          style: {
            ...this.style.progressBarStyles,
            animationDuration: 0
          }
        }
      }
    });
    this._Circle.patch({
      w: this.style.innerCircleSize,
      h: this.style.innerCircleSize,
      color: this.style.circleColor,
      palette: this.palette,
      mode: this.mode,
      style: {
        radius: this.style.radius,
        circleSize: this.style.innerCircleSize,
        circleColor: this.style.circleColor
      }
    });
  }

  _updatePositions() {
    this._updateCirclePosition();
    // fade arrows at min/max
    let sliderArrowAlphaLeft;
    let sliderArrowAlphaRight;
    if (this.mode !== 'disabled' && this.value <= this.min) {
      sliderArrowAlphaLeft = this.style.arrowAlphaValueLimit;
      sliderArrowAlphaRight = this.style.arrowAlphaValue;
    } else if (this.mode !== 'disabled' && this.value >= this.max) {
      sliderArrowAlphaLeft = this.style.arrowAlphaValue;
      sliderArrowAlphaRight = this.style.arrowAlphaValueLimit;
    } else {
      sliderArrowAlphaLeft = sliderArrowAlphaRight = this.style.arrowAlphaValue;
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
    if (!this.style.iconLeftSrc && !this.style.iconRightSrc) {
      const arrowTexture = {
        type: Arrow,
        w: this.style.arrowWidth,
        h: this.style.arrowHeight,
        color: lng.StageUtils.getRgbString(getValidColor(this.style.arrowColor))
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
        w: this.style.arrowWidth,
        h: this.style.arrowHeight
      };
      this._LeftArrow.patch({
        ...arrowProps,
        src: this.style.iconLeftSrc
      });
      this._RightArrow.patch({
        ...arrowProps,
        src: this.style.iconRightSrc
      });
    }
    const rightArrowX =
      this.style.arrowSpacing + this._calculatedSliderWidth + this._Bar.x;
    const color = this.style.arrowColor;
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
      this.style.arrowSpacing * 2 + this.style.arrowWidth * 2;
    return this.w < totalArrowSize + this._Circle.w
      ? this.style.minWidth - totalArrowSize
      : this.w - totalArrowSize;
  }
}

export default withExtensions(Slider);
