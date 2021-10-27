import ListItem from '.';
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

  _update() {
    this._Slider.w =
      this._Container.finalW -
      (this.styles.paddingLeft + this.styles.paddingRight); // set sliderWidth here to ensure the parent has rendered

    super._update();
    this._updateSlider();
  }

  _updateSlider() {
    const sliderValues = ['value'].reduce((acc, curr) => {
      if ('undefined' !== typeof this[curr]) acc[curr] = this[curr];
      return acc;
    }, {});

    this._Slider.patch(sliderValues);

    this._previousFocus = this.hasFocus();
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

  _getFocused() {
    return this._Slider;
  }

  _onSliderChange(value, slider) {
    if (this._Subtitle) {
      this._Subtitle.text.text = value;
      this.signal('onSliderChange', value, slider);
    }
  }

  static get properties() {
    return [...super.properties, 'max', 'min', 'step', 'value'];
  }

  static get tags() {
    return [...super.tags, { name: 'Slider', path: 'Right.Slider' }];
  }

  get announce() {
    return this._announce
      ? this._announce
      : [this._title, this._value].join(' ');
  }
  set announce(announce) {
    if (this._announce !== announce) {
      this._announce = announce;
      this._update();
    }
  }

  _getValue() {
    return this._Slider.value;
  }

  _setValue(value) {
    this._Slider.value = value;
  }

  _getMax() {
    return this._Slider.max;
  }

  _setMax(max) {
    return (this._Slider.max = max);
  }

  _getMin() {
    return this._Slider.min;
  }

  _setMin(min) {
    this._Slider.min = min;
  }

  _getStep() {
    return this._Slider.step;
  }

  _setStep(step) {
    return (this._Slider.step = step);
  }
}
