﻿/**
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

import * as styles from './Button.styles';
import Row from '../Row';
import Surface from '../Surface';
import TextBox from '../TextBox'; // There seams to be some issue with the circular dependency here

/**
 * Button Component
 *
 * Generic Button Component that handles setting text icon and checkbox
 */
export default class Button extends Surface {
  static get __componentName() {
    return 'Button';
  }

  static get __themeStyle() {
    return styles;
  }

  static get properties() {
    return ['fixed', 'justify', 'prefix', 'suffix', 'title'];
  }

  static get aliasStyles() {
    return [{ prev: 'titlePadding', curr: 'contentSpacing' }];
  }

  static get tags() {
    return [
      ...super.tags,
      'Content',
      { name: 'TextWrapper', path: 'Content.TextWrapper' },
      { name: 'Title', path: 'Content.TextWrapper.Title' },
      { name: 'Prefix', path: 'Content.Prefix' },
      { name: 'Suffix', path: 'Content.Suffix' }
    ];
  }

  static _template() {
    return {
      ...super._template(),
      Content: {
        mount: 0.5,
        x: w => w / 2,
        y: h => h / 2,
        zIndex: 2 // ensure content (title) is rendered above Surface Background
      }
    };
  }

  _update() {
    this._updatePrefix();
    this._updateTitle();
    this._updateSuffix();
    this._updateAllPositioning();
    this._updateTruncation();
  }

  _updateAllPositioning() {
    this._updatePositions();
    this._updateContentDimensions();
    this._updateSurfaceDimensions();
    this._updateContentPosition();
    // delaying the super._update call so we update the surface sizing after the button has finished updating
    super._update();
  }

  $itemChanged() {
    this._updateAllPositioning();
    this._updateTruncation();
  }

  _onTitleTextBoxChanged() {
    this._updateAllPositioning();
  }

  _updatePositions() {
    if (this._hasPrefix && this._Prefix !== undefined) {
      this._Prefix.x = this._prefixX;
    }
    if (this._hasTitle) {
      this._TextWrapper.x = this._titleX;
    }
    if (this._hasSuffix && this._Suffix !== undefined) {
      this._Suffix.x = this._suffixX;
    }
  }

  _updatePrefix() {
    const prefixString = JSON.stringify(this.prefix);
    if (this.prefix) {
      let prefixPatch = {
        style: {
          itemSpacing: this.style.itemSpacing
        }
      };
      if (!this._Prefix) {
        prefixPatch = {
          ...this._rowProps,
          ...prefixPatch
        };
      }
      this._Content.patch({ Prefix: prefixPatch });
      this._updatePrefixSuffixStyles('prefix');
    } else {
      this._Content.patch({ Prefix: undefined });
    }
    this._prevPrefix = prefixString;
  }

  _updatePrefixSuffixStyles(type = 'prefix') {
    /**
     * Repatching all items re-renders all the components in the Prefix/Suffix Rows.
     * This can cause items to shift while their layout in the Row is re-calculated if
     * any of the items do not have width or height on their initial render (ex. an Icon
     * does not have width and height until after its texture loads).
     * If the contents of the Prefix/Suffix are the same components and this update was triggered
     * from something else (ex. a change in mode), only update the styles applied to the
     * items in the Prefix (ex. updating the color to the value appropriate to the new mode).
     */
    const map = {
      prefix: {
        tag: this._Prefix,
        prop: this.prefix,
        prevProp: this._prevPrefix
      },
      suffix: {
        tag: this._Suffix,
        prop: this.suffix,
        prevProp: this._prevSuffix
      }
    };
    const { tag, prop } = map[type];
    let { prevProp } = map[type];
    const propString = JSON.stringify(prop);

    if (propString !== prevProp) {
      prevProp = propString;
      tag.items = this._addButtonProps(prop);
    } else {
      tag.Items.children.forEach((item, idx) => {
        item.color = Array.isArray(prop) ? prop[idx].color : prop.color;
        item.style = {
          ...item.style,
          color: this.style.contentColor
        };
      });
    }
  }

  _updateTitle() {
    if (this._hasTitle) {
      let titlePatch = {
        content: this.title,
        style: { textStyle: this.style.textStyle }
      };
      if (!this._Title) {
        titlePatch = {
          type: TextBox,
          mountY: 0.5,
          y: h => h / 2,
          signals: {
            textBoxChanged: '_onTitleTextBoxChanged'
          },
          ...titlePatch
        };
      }
      this._Content.patch({
        TextWrapper: {
          mountY: 0.5,
          Title: titlePatch
        }
      });
    } else {
      this._Content.patch({ TextWrapper: { Title: undefined } });
    }
  }

  _updateSuffix() {
    if (this.suffix) {
      let suffixPatch = {
        style: {
          itemSpacing: this.style.itemSpacing
        }
      };
      if (!this._Suffix) {
        suffixPatch = {
          ...this._rowProps,
          ...suffixPatch
        };
      }
      this._Content.patch({ Suffix: suffixPatch });
      this._updatePrefixSuffixStyles('suffix');
    } else {
      this._Content.patch({ Suffix: undefined });
    }
  }

  _updateTruncation() {
    /**
     * needs to run before rest of content updates to prevent a bug causing text
     * to sometimes truncate and then un-truncate(with no width change) when
     * toggling fixed after toggling focus
     */
    if (this._Title) {
      this._Title.patch({
        style: {
          textStyle: {
            ...this.style.textStyle,
            wordWrap: this.fixed,
            wordWrapWidth: this.fixed ? this._fixedWordWrapWidth : 0
          }
        }
      });
    }
  }

  _updateContentDimensions() {
    const contentDimensionsPatch = {};
    const y = this.h / 2;

    // reference transition targets to ensure we aren't checking against intermittent values
    if (this._Content.transition('w').targetValue !== this._contentW) {
      this._Content.w = this._contentW;
    }

    if (this._Content.y !== y) {
      contentDimensionsPatch.y = y;
    }

    if (Object.keys(contentDimensionsPatch).length > 0) {
      this._Content.patch(contentDimensionsPatch);
    }
  }

  _updateContentPosition() {
    this._Content.patch(this._contentProps);
  }

  _updateSurfaceDimensions() {
    let newWidth = this.w;
    if (this.fixed) {
      newWidth = this._w;
    } else {
      newWidth = this._calcDynamicWidth();
    }

    if (newWidth !== this.w) {
      this.w = newWidth;
    }

    // In order to ensure the "hSetByUser" flag is not set to true,
    // skip over "set h" by directly updating "_h"
    // Using the "get h" return statement does not force an update to the inspector,
    // whereas this will ensure the "height" attribute is updated
    if (!this._hSetByUser && !this.style.h) {
      this._h = this.style.textStyle.lineHeight + this.style.paddingY * 2;
    }

    // TODO breaks row resizing if this is wrapped in the width conditional above
    this.fireAncestors('$itemChanged');
  }

  _calcDynamicWidth() {
    // if no title, ignore minWidth and use prefix/suffix width
    // when the title is collapsed, width should be the same as if there is no title
    return (!this._hasTitle && (this._hasPrefix || this._hasSuffix)) ||
      (this._Title &&
        !this._Title.visible &&
        (this._hasPrefix || this._hasSuffix))
      ? this._contentW + this._paddingX
      : Math.max(this._contentW + this._paddingX, this.style.minWidth);
  }

  _addButtonProps(arr) {
    const items = Array.isArray(arr) ? arr : [arr];
    return items.map(item => ({
      ...this._buttonProps,
      ...item,
      style: {
        color: this.style.contentColor,
        ...item.style
      }
    }));
  }

  _getJustify() {
    return !!this._justify ? this._justify : this.style.justify;
  }

  get _contentProps() {
    let mountX;
    let x;

    switch (this.justify) {
      case 'left':
        mountX = 0;
        x = this._paddingLeft;
        break;
      case 'right':
        mountX = 1;
        x = this.w - this._paddingRight;
        break;
      case 'center':
      default:
        mountX = 0.5;
        x = this.w / 2;
        break;
    }
    return { mountX, x };
  }

  get _buttonProps() {
    return {
      centerInParent: true,
      mode: this.mode
    };
  }

  get _hasPrefix() {
    return !!(this.prefix && Object.keys(this.prefix).length);
  }

  get _prefixW() {
    return this._hasPrefix && this._Prefix !== undefined ? this._Prefix.w : 0;
  }

  get _prefixX() {
    return 0;
  }

  get _hasTitle() {
    return !!this.title;
  }

  get _titleW() {
    // get the pre-calculated text width of the title to solve some race condition bugs
    if (
      this._hasTitle &&
      this._Title &&
      this._Title._Text &&
      this._Title.visible
    ) {
      return this._Title.w;
    }
    return 0;
  }

  get _titleX() {
    return this._hasPrefix ? this._prefixW + this.style.contentSpacing : 0;
  }

  get _hasSuffix() {
    return !!(this.suffix && Object.keys(this.suffix).length);
  }

  get _suffixW() {
    return this._hasSuffix && this._Suffix !== undefined ? this._Suffix.w : 0;
  }

  get _suffixX() {
    if (this._hasTitle) {
      return this._titleW + this._TextWrapper.x + this.style.contentSpacing;
    } else if (this._hasPrefix) {
      return this._prefixW + this.style.itemSpacing;
    }
    return 0;
  }

  get _contentW() {
    if (this._hasSuffix) {
      return this._suffixX + this._suffixW;
    } else if (this._hasTitle && this._Title && this._Title.visible) {
      return this._titleX + this._titleW;
    } else if (this._hasPrefix) {
      return this._prefixX + this._prefixW;
    }
    return 0;
  }

  get _rowProps() {
    return {
      type: Row,
      mountY: 0.5,
      autoResizeHeight: true,
      autoResizeWidth: true
    };
  }

  get _totalTitlePaddingX() {
    let totalTitlePadding = 0;
    if (this._hasPrefix) {
      totalTitlePadding += this.style.contentSpacing;
    }
    if (this._hasSuffix) {
      totalTitlePadding += this.style.contentSpacing;
    }
    return totalTitlePadding;
  }

  /**
   * Button w must be >= nonTextSpace + smallest possible width of truncated
   * text(width of the first set of characters before a space + width of TextBox.maxLinesSuffix).
   * Disregarding this results in the contents of the button being a greater width than the
   * fixed w of the Button(w/o decreasing _paddingX or _totalTitlePadding).
   */
  get _fixedWordWrapWidth() {
    const { w, _paddingX, _prefixW, _suffixW, _totalTitlePaddingX } = this;
    const nonTextSpace = _paddingX + _prefixW + _suffixW + _totalTitlePaddingX;
    return Math.max(1, w - nonTextSpace);
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }

    // TODO - Localization?
    // Do we need a locale file with
    // component translations?
    const announce = [];
    if (this.title) {
      announce.push(this.title);
    }
    announce.push(this._announceComponentName);
    if (this._hasPrefix && this._Prefix.items.length) {
      announce.push(...this._Prefix.items.map(item => item.announce));
    }
    if (this._hasSuffix && this._Suffix.items.length) {
      announce.push(...this._Suffix.items.map(item => item.announce));
    }

    return announce;
  }

  get _announceComponentName() {
    return Button.__componentName;
  }

  get _paddingX() {
    return this._paddingLeft + this._paddingRight;
  }

  get _paddingLeft() {
    return this._hasTitle ? this.style.paddingX : this.style.paddingXNoTitle;
  }

  get _paddingRight() {
    return this._hasTitle ? this.style.paddingX : this.style.paddingXNoTitle;
  }
}
