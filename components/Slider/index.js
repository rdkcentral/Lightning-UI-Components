import lng from 'wpe-lightning';
import { Arrow, Circle } from '../textures';

const arrowWidth = 10;
const arrowHeight = 16;
const spacing = 10;
const sliderHeight = 4;
const sliderWidth = 330;
const containerHeight = 20;
const containerWidth = arrowWidth * 2 + spacing * 2 + sliderWidth;

export default class Slider extends lng.Component {
  static getLeftBarTexture(w = 0) {
    return lng.Tools.getRoundRect(w, sliderHeight, 2, 0, 0, true, 0xff141417);
  }

  static getRightBarTexture() {
    return lng.Tools.getRoundRect(
      sliderWidth,
      sliderHeight,
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
      Container: {
        w: containerWidth,
        h: containerHeight,
        LeftArrow: {
          texture: Slider.getLeftArrowTexture()
        },
        Bar: {
          y: 5,
          x: arrowWidth * 2,
          LeftBar: {
            texture: Slider.getLeftBarTexture(),
            zIndex: 1
          },
          RightBar: {
            texture: Slider.getRightBarTexture()
          },
          Circle: {
            texture: Slider.getCircleTexture(),
            mount: 0.5,
            y: 3,
            zIndex: 2
          }
        },
        RightArrow: {
          x: sliderWidth + arrowWidth * 3 + 1,
          texture: Slider.getRightArrowTexture()
        }
      }
    };
  }

  _init() {
    this.min = this.min || 0;
    this.max = this.max || 100;
    this.step = this.step || 1;
    this.value = this.value || this.min;

    if (this.value > this.min) this._update();
  }

  _handleLeft() {
    const value = this.value - this.step;
    this.value = value >= this.min ? value : this.min;
    this._update();
  }

  _handleRight() {
    const value = this.value + this.step;
    this.value = value <= this.max ? value : this.max;
    this._update();
  }

  _update() {
    this.signal('onChange', this.value, this);

    const position =
      ((this.value - this.min) / (this.max - this.min)) * sliderWidth + 0.5;

    this._LeftBar.patch({
      texture: Slider.getLeftBarTexture(position),
      smooth: { w: position }
    });
    this._Circle.setSmooth('x', position);

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

  get _LeftBar() {
    return this.tag('LeftBar');
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
