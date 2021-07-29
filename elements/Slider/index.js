import lng from '@lightningjs/core';
import { Arrow, Circle } from '../../textures';
import Base from '../Base';
import { withStyles } from '../../mixins';
import styles from './Slider.styles';

export default class Slider extends withStyles(Base, styles) {
  static getLeftBarTexture(w = 0) {
    return lng.Tools.getRoundRect(
      w,
      this.styles.sliderHeight,
      2,
      0,
      0,
      true,
      0xff141417
    );
  }

  static getRightBarTexture(w) {
    return lng.Tools.getRoundRect(
      w,
      this.styles.sliderHeight,
      2,
      0,
      0,
      true,
      0xffb1b1bd
    );
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
      w: this._arrowWidth,
      h: this._arrowHeight
    };
  }

  static getRightArrowTexture() {
    return {
      type: Arrow,
      direction: 'right',
      w: this._arrowWidth,
      h: this._arrowHeight
    };
  }

  static _template() {
    return {
      h: this.styles.containerHeight,
      Container: {
        h: this.styles.containerHeight,
        LeftArrow: {
          texture: Slider.getLeftArrowTexture(),
          mountY: 0.5,
          y: h => h / 2
        },
        Bar: {
          y: this.styles.containerHeight / 2 - this.styles.sliderHeight + 1,
          x: this.styles.arrowWidth * 2 - 2,
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

  static get properties() {
    return ['max', 'min', 'step', 'value', 'w'];
  }

  static get tags() {
    return [
      'Container',
      'LeftBar',
      'RightBar',
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
    this._sliderWidth = this.styles.sliderWidth;
    this._arrowWidth = this.styles.arrowWidth;
    this._arrowHeight = this.styles.arrowHeight;
    this._spacing = this.styles.spacing;
    this._sliderHeight = this.styles.sliderHeight;
    this._containerHeight = this.styles.containerHeight;
    // set defaults
    this._min = 0;
    this._max = 100;
    this._step = 1;
    this._value = 0;
    this._w =
      this._sliderWidth +
      (this.styles.arrowWidth * 2 + this.styles.spacing * 2);
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
      x: this._sliderWidth + this._arrowWidth * 3
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
    return w - (this._arrowWidth * 2 + this._spacing * 2);
  }

  _setW(w) {
    if (w > 0 && this._w !== w) {
      this._w = w;
    }
    this._updateSliderWidth();
    return w;
  }
}
