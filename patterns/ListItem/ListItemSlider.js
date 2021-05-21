import ListItem, { ListItemBase } from '.';
import Slider from '../../elements/Slider';

export default class ListItemSlider extends ListItem {
  static _template() {
    return {
      ...super._template(),
      Container: {
        ...super._template().Container,
        Right: {
          ...super._template().Right,
          Slider: {
            type: Slider,
            zIndex: 2,
            alpha: 0,
            signals: {
              onChange: '_onSliderChange'
            }
          }
        }
      }
    };
  }

  _init() {
    this.icon = undefined;
    super._init();
    this._update();
  }

  _update() {
    this._Slider.w =
      this._Container.finalW -
      (this.styles.paddingLeft + this.styles.paddingRight); // set sliderWidth here to ensure the parent has rendered

    super._update();
    this._updateSlider();
  }

  _updateSlider() {
    if (this.hasFocus()) {
      this._Slider.smooth = { alpha: 1 };
      this._Container.patch({
        flex: {
          direction: 'column',
          justifyContent: 'space-around'
        }
      });
      this.stage.update();
      this._Left.patch({
        y: -1,
        w: this._Container.finalW - 32,
        flex: {
          direction: 'row',
          justifyContent: 'space-between'
        }
      });
      this._Right.patch({
        w: this._Container.finalW - 32,
        h: 0,
        y: -10,
        flex: {
          direction: 'row',
          justifyContent: 'flex-start'
        }
      });
    } else {
      this._Slider.smooth = { alpha: 0 };
      this._Container.patch({
        flex: {
          direction: 'row',
          justifyContent: 'flex-start'
        }
      });
      this.stage.update();
      this._Left.patch({
        w: 0,
        flex: {
          direction: 'column',
          justifyContent: 'flex-end'
        }
      });
      this._Right.patch({
        w: 0,
        h: 0,
        flex: {
          direction: 'column'
        }
      });
    }
  }

  _focus() {
    super._focus();
    this._update();
  }

  _unfocus() {
    super._unfocus();
    this._update();
  }

  _getFocused() {
    return this._Slider;
  }

  _onSliderChange(value, slider) {
    if (this._Subtitle) {
      this._Subtitle.text.text = value;
      this.signal('onSliderChange', value, slider);
    }
  }

  get max() {
    return this._Slider.max;
  }

  set max(max) {
    this._Slider.max = max;
  }

  get min() {
    return this._Slider.min;
  }

  set min(min) {
    this._Slider.min = min;
  }

  get step() {
    return this._Slider.step;
  }

  set step(step) {
    this._Slider.step = step;
  }

  get subtitle() {
    return this.value;
  }

  get value() {
    return this._Slider.value;
  }

  set value(value) {
    this._Slider.value = value;
  }

  get _Slider() {
    return this.tag('Container.Right.Slider');
  }

  get _rightOffset() {
    return 0;
  }
}
