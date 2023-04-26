/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import ListItem from './ListItem';
import * as styles from './ListItemPicker.styles.js';
import Marquee from '../Marquee';
import Icon from '../Icon';
import Row from '../Row';

export default class ListItemPicker extends ListItem {
  static get __componentName() {
    return 'ListItemPicker';
  }

  static get __themeStyle() {
    return styles;
  }

  static get properties() {
    return [...super.properties, 'options', 'selectedIndex'];
  }

  static get tags() {
    return [
      ...super.tags,
      'LeftArrow',
      'RightArrow',
      { name: 'Picker', path: 'Content.TextWrapper.Picker' }
    ];
  }

  _onTextBoxChanged() {
    super._onTextBoxChanged();
    this._alignPicker();
  }

  _construct() {
    super._construct();
    this._options = [];
    this._selectedIndex = 0;
  }

  _update() {
    super._update();
    this._updatePicker();
    this._updateArrows();
    this._updateArrowsAlpha();
    this._updateAlignment();
  }

  _updateAlignment() {
    if (this._isFocusedMode) {
      this.patch({ justify: 'center' });
    } else {
      this.patch({ justify: 'left' });
    }
  }

  _updateArrows() {
    if (!this._isFocusedMode) {
      const offAlpha = 0.001;
      if (this._LeftArrow) {
        this._LeftArrow.alpha = offAlpha;
      }
      if (this._RightArrow) {
        this._RightArrow.alpha = offAlpha;
      }
      return;
    }

    const arrowProps = {
      w: this.style.arrowWidth,
      h: this.style.arrowHeight,
      style: {
        color: this.style.arrowColor
      },
      alpha: this.style.arrowAlphaValue
    };
    if (!this._LeftArrow) {
      this.patch({
        LeftArrow: {
          type: Icon,
          mountY: 0.5,
          y: h => h / 2
        }
      });
    }
    this._LeftArrow.patch({
      ...arrowProps,
      icon: this.style.iconLeftSrc
    });
    this._LeftArrow.smooth = {
      x: this.style.paddingX
    };

    if (!this._RightArrow) {
      this.patch({
        RightArrow: {
          type: Icon,
          mountY: 0.5,
          mountX: 1,
          y: h => h / 2
        }
      });
    }
    this._RightArrow.patch({
      ...arrowProps,
      icon: this.style.iconRightSrc
    });

    this._RightArrow.smooth = {
      x: this.w - this.style.paddingX
    };
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
            selectedChange: '_updateArrowsAlpha'
          }
        }
      });
    }
    this._Picker.patch({
      visible: !this._collapse,
      h: this.style.descriptionTextStyle.lineHeight,
      w,
      items: this.options.map(option => ({
        type: Marquee,
        h: this.style.descriptionTextStyle.lineHeight,
        w,
        centerAlign: this._isFocusedMode,
        title: {
          ...this.style.descriptionTextStyle,
          text: option
        }
      })),
      // We need to reset the selected index to ensure it does not get reset to zero when patching items.
      selectedIndex: this.selectedIndex
    });
    this._alignPicker();
  }

  _alignPicker() {
    this._Picker.patch({
      mountX: this._isFocusedMode ? 0.5 : 0,
      x: this._isFocusedMode ? this._Title.w / 2 : 0
    });
  }

  _updateArrowsAlpha() {
    if (this._Picker) {
      this._selectedIndex = this._Picker.selectedIndex;
    }
    const alpha = this._isFocusedMode ? this.style.arrowAlphaValue : 0;
    if (this._RightArrow) {
      this._RightArrow.alpha =
        this.selectedIndex === this.options.length - 1 && this._isFocusedMode
          ? this.style.arrowAlphaValueLimit
          : alpha;
    }
    if (this._LeftArrow) {
      this._LeftArrow.alpha =
        this.selectedIndex === 0 && this._isFocusedMode
          ? this.style.arrowAlphaValueLimit
          : alpha;
    }
    this.fireAncestors('$announce', this.announce);
  }

  get _fixedWordWrapWidth() {
    const wordWrapWidthFocused =
      this.w -
      this._paddingX -
      this.style.arrowWidth * 2 -
      2 * this.style.titlePadding;
    const wordWrapWidth = this.w - this._paddingLeft - this._paddingRight;
    return this._isFocusedMode ? wordWrapWidthFocused : wordWrapWidth;
  }

  get _collapse() {
    return this.shouldCollapse && !this._isFocusedMode;
  }

  get selectedOption() {
    return this._Picker.selected;
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
