import lng from '@lightningjs/core';
import { Arrow, Circle } from '../../textures';

const arrowWidth = 10;
const arrowHeight = 16;
const spacing = 10;
const sliderHeight = 4;
const containerHeight = 20;
const sliderWidth = 328;
const w = sliderWidth + (arrowWidth * 2 + spacing * 2);

export default class Slider extends lng.Component {
  static getLeftBarTexture(w = 0) {
    return lng.Tools.getRoundRect(w, sliderHeight, 2, 0, 0, true, 0xff141417);
  }

  static getRightBarTexture(w) {
    return lng.Tools.getRoundRect(w, sliderHeight, 2, 0, 0, true, 0xffb1b1bd);
  }

  static getCircleTexture() {
    return {
      type: Circle,
      radius: 10,
      color: '#141417',
      stroke: true,
      strokeColor: '#ececf2',
      strokeWidth: 2
    };
  }

  static getLeftArrowTexture() {
    return {
      type: Arrow,
      direction: 'left',
      w: arrowWidth,
      h: arrowHeight
    };
  }

  static getRightArrowTexture() {
    return {
      type: Arrow,
      direction: 'right',
      w: arrowWidth,
      h: arrowHeight
    };
  }

  static _template() {
    return {
      h: containerHeight,
      Container: {
        h: containerHeight,
        LeftArrow: {
          texture: Slider.getLeftArrowTexture(),
          mountY: 0.5,
          y: h => h / 2
        },
        Bar: {
          y: containerHeight / 2 - sliderHeight + 1,
          x: arrowWidth * 2 - 2,
          LeftBar: {
            texture: Slider.getLeftBarTexture(),
            zIndex: 1
          },
          RightBar: {},
          Circle: {
            texture: Slider.getCircleTexture(),
            mount: 0.5,
            y: 3,
            zIndex: 2
          }
        },
        RightArrow: {
          texture: Slider.getRightArrowTexture(),
          mountY: 0.5,
          y: h => h / 2
        }
      }
    };
  }

  _construct() {
    // set defaults
    this._min = 0;
    this._max = 100;
    this._step = 1;
    this._value = 0;
    this._w = w;
    this._sliderWidth = sliderWidth;
  }

  _init() {
    if (this.value > this.min) this._update();
    this._updateSliderWidth();
  }

  _updateSliderWidth() {
    this._sliderWidth = this._getSliderWidth(this._w);
    this._RightBar.patch({
      texture: Slider.getRightBarTexture(this._sliderWidth)
    });
    this._RightArrow.patch({
      x: this._sliderWidth + arrowWidth * 3
    });
    this._update();
  }

  _handleLeft() {
    const value = this.value - this.step;
    this.value = value >= this.min ? value : this.min;
  }

  _handleRight() {
    const value = this.value + this.step;
    this.value = value <= this.max ? value : this.max;
  }

  _update() {
    this.signal('onChange', this.value, this);

    const position =
      Math.round(
        ((this.value - this.min) / (this.max - this.min)) * this._sliderWidth +
          0.5
      ) + 1;

    // shift progress bar and circle indicator
    this._LeftBar.patch({
      texture: Slider.getLeftBarTexture(position),
      smooth: { w: position }
    });
    this._Circle.setSmooth('x', position + 2);

    // fade arrows at min/max
    if (this.value === this.min) {
      this._LeftArrow.setSmooth('alpha', 0.48);
    } else {
      this._LeftArrow.setSmooth('alpha', 1);
    }

    if (this.value === this.max) {
      this._RightArrow.setSmooth('alpha', 0.48);
    } else {
      this._RightArrow.setSmooth('alpha', 1);
    }
  }

  _getSliderWidth(w) {
    return w - (arrowWidth * 2 + spacing * 2);
  }

  get min() {
    return this._min;
  }

  set min(min) {
    if (this._min !== min) {
      this._min = min;
      this._update();
    }
  }

  get max() {
    return this._max;
  }

  set max(max) {
    if (this._max !== max) {
      this._max = max;
      this._update();
    }
  }

  get step() {
    return this._step;
  }

  set step(step) {
    if (this._step !== step) {
      this._step = step;
      this._update();
    }
  }

  get value() {
    return this._value;
  }

  set value(value) {
    if (this._value !== value) {
      this._value = value;
      this._update();
    }
  }

  get w() {
    return this._w;
  }

  set w(w) {
    if (w > 0 && this._w !== w) {
      this._w = w;
    }
    this._updateSliderWidth();
  }

  get _Container() {
    return this.tag('Container');
  }

  get _LeftBar() {
    return this.tag('LeftBar');
  }

  get _RightBar() {
    return this.tag('RightBar');
  }

  get _Circle() {
    return this.tag('Circle');
  }

  get _LeftArrow() {
    return this.tag('Container').tag('LeftArrow');
  }

  get _RightArrow() {
    return this.tag('Container').tag('RightArrow');
  }
}
