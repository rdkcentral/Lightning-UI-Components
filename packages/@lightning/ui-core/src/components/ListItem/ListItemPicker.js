import ListItem from './ListItem';
import lng from '@lightningjs/core';
import * as styles from './ListItemPicker.styles.js';
import Marquee from '../Marquee';
import Row from '../Row';
import { Arrow } from '../../textures';
import utils from '../../utils';
import { withExtensions } from '../../mixins/index.js';

class ListItemPicker extends ListItem {
  static get __componentName() {
    return 'ListItemPicker';
  }

  static get __themeStyle() {
    return styles;
  }

  static _template() {
    return {
      ...super._template(),
      justify: 'center',
      LeftArrow: {
        mountY: 0.5,
        y: h => h / 2
      },
      RightArrow: {
        mountY: 0.5,
        mountX: 1,
        y: h => h / 2
      }
    };
  }

  static get properties() {
    return [...super.properties, 'options', 'selectedOptionIndex'];
  }

  static get tags() {
    return [
      ...super.tags,
      'LeftArrow',
      'RightArrow',
      { name: 'Picker', path: 'Content.TextWrapper.Picker' }
    ];
  }

  _init() {
    this._options = [];
    this._selectedOptionIndex = 0;
  }

  _update() {
    super._update();
    this._updateArrows();
    this._updatePicker();
  }

  _updateArrows() {
    this._updateLeftArrow();
    this._updateRightArrow();
  }

  _updateLeftArrow() {
    this._LeftArrow.texture = {
      ...this._arrowTexture,
      direction: 'left'
    };
    this.applySmooth(this._LeftArrow, {
      color: this.style.arrowColor,
      x: this.style.paddingX
    });
  }

  _updateRightArrow() {
    this._RightArrow.texture = {
      ...this._arrowTexture,
      direction: 'right'
    };
    this.applySmooth(this._RightArrow, {
      color: this.style.arrowColor,
      x: this.w - this.style.paddingX
    });
  }

  _onTextBoxChanged() {
    super._onTextBoxChanged();
    if (this._Picker) {
      this._Picker.x = (this._Picker.w - this._Title.w) / -2;
    }
  }

  _updatePicker() {
    const w = this.w - this._paddingX - this.style.arrowWidth * 2;

    if (!this._Picker) {
      this._TextWrapper.patch({
        Picker: {
          type: Row,
          clipping: true,
          alwaysScroll: true,
          signals: {
            selectedChange: '_onSelectedChange'
          }
        }
      });
    }
    this._Picker.patch({
      visible: !this._collapse,
      h: this.style.descriptionTextStyle.lineHeight,
      w,
      x: (w - this._Title.w) / -2,
      items: this.options.map(option => ({
        type: Marquee,
        h: this.style.descriptionTextStyle.lineHeight,
        w,
        title: {
          ...this.style.descriptionTextStyle,
          textAlign: 'center',
          text: option
        }
      }))
    });
  }

  _onSelectedChange() {
    if (this.selectedIndex === this.options.length - 1) {
      this._RightArrow.alpha = this.style.arrowAlphaValueLimit;
    } else {
      this._RightArrow.alpha = this.style.arrowAlphaValue;
    }
    if (this.selectedIndex === 0) {
      this._LeftArrow.alpha = this.style.arrowAlphaValueLimit;
    } else {
      this._LeftArrow.alpha = this.style.arrowAlphaValue;
    }
    this.fireAncestors('$announce', this.announce);
  }

  get _arrowTexture() {
    return {
      type: Arrow,
      w: this.style.arrowWidth,
      h: this.style.arrowHeight,
      color: lng.StageUtils.getRgbString(
        utils.getValidColor(this.style.arrowColor)
      )
    };
  }

  get _collapse() {
    return this.shouldCollapse && !this._isFocusedMode;
  }

  get selectedOption() {
    return this._Picker.selected;
  }

  get selectedIndex() {
    return this._Picker.selectedIndex;
  }

  _handleLeft() {
    if (typeof this.onLeft === 'function') {
      return this.onLeft(this);
    }
    this._Picker.selectPrevious();
    return true;
  }

  _handleRight() {
    if (typeof this.onRight === 'function') {
      return this.onRight(this);
    }
    this._Picker.selectNext();
    return true;
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }
    return this.title + this.options[this.selectedIndex] + ', List Item';
  }
}

export default withExtensions(ListItemPicker);
