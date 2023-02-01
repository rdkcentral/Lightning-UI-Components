import NestedSlider from './NestedSlider';
import ListItem from './ListItem';
import * as styles from './ListItemSlider.styles.js';
import { withExtensions, TextBox } from '@lightning/ui-core';

class ListItemSlider extends ListItem {
  static get __componentName() {
    return 'ListItemSlider';
  }

  static get __themeStyle() {
    return styles;
  }

  static _template() {
    const template = super._template;
    return {
      ...template(),
      Content: {
        ...template().Content,
        Slider: {
          type: NestedSlider,
          signals: {
            onChange: '_onSliderChanged'
          }
        }
      }
    };
  }

  static get properties() {
    return [...super.properties, 'slider', 'value'];
  }

  static get tags() {
    return [
      ...super.tags,
      { name: 'Slider', path: 'Content.Slider' },
      { name: 'Value', path: 'Content.TextWrapper.Value' }
    ];
  }

  _construct() {
    super._construct();
    this.value = 50;
  }

  _update() {
    super._update();
    this._updateSliderPosition();
    this._updateValue();
  }

  _updateTextWrapper() {
    if (this._hasTitle || this._hasValue) {
      if (this._collapse) {
        this._TextWrapper.patch({
          y: -(this.style.paddingVertical / 2)
        });
      } else {
        this._TextWrapper.patch({
          y: this.h / 2 - 2 * this.style.paddingVertical
        });
      }
    }
  }

  _updateValue() {
    if (this._hasValue) {
      let valuePatch = {
        content: this.value.toString(),
        style: { textStyle: { ...this.style.valueTextStyle } },
        mountX: 1,
        x: this.w - this._paddingX
      };
      if (!this._Value) {
        valuePatch = {
          type: TextBox,
          signals: {
            textBoxChanged: '_onTextBoxChanged'
          },
          ...valuePatch
        };
      }
      this._Content.patch({
        TextWrapper: {
          Value: valuePatch
        }
      });
    } else {
      this.patch({
        Content: {
          TextWrapper: {
            Value: undefined
          }
        }
      });
    }
  }

  _updateSliderPosition() {
    this._Slider.patch({
      ...this._getSliderProps()
    });
  }

  _getSliderProps() {
    let sliderProps = {
      ...this.slider,
      visible: !this._collapse,
      alpha: this.style.alpha,
      y: this._TextWrapper.h + this.style.paddingY,
      w: this.w - this._paddingLeft - this._paddingRight,
      x: this.w / 2 - this.style.paddingY,
      mode: this.mode,
      value: this.value
    };
    if (this._isDisabledMode || this._isUnfocusedMode) {
      sliderProps = {
        ...sliderProps,
        mountX: 0.5,
        w: this.w + this.style.paddingY,
        x: this.w / 2 - this.style.paddingY
      };
    }
    return sliderProps;
  }

  get _hasValue() {
    return this.value != undefined || this.value != null;
  }

  get _fixedWordWrapWidth() {
    const titleWrapWidth =
      this.w - this._paddingLeft - this._paddingRight - this._paddingX;
    return titleWrapWidth;
  }

  _onSliderChanged(value, Slider) {
    if (value >= Slider.max) {
      this.value = Slider.max;
    } else if (value <= Slider.min) {
      this.value = Slider.min;
    } else {
      this.value = Slider.value;
    }
  }

  _handleLeft() {
    if (typeof this.onLeft === 'function') {
      return this.onLeft(this);
    } else if (this._Slider && !this._isDisabledMode) {
      return this._Slider._handleLeft();
    }
    return false;
  }

  _handleRight() {
    if (typeof this.onRight === 'function') {
      return this.onRight(this);
    } else if (this._Slider && !this._isDisabledMode) {
      return this._Slider._handleRight();
    }
    return false;
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }

    return this.title + this.value + ', List Item Slider';
  }
}

export default withExtensions(ListItemSlider);
