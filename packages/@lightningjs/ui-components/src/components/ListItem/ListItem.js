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

import * as styles from './ListItem.styles.js';
import Button from '../Button';
import TextBox from '../TextBox';
import Icon from '../Icon';

export default class ListItem extends Button {
  static get __componentName() {
    return 'ListItem';
  }

  static get __themeStyle() {
    return styles;
  }

  static _template() {
    return {
      ...super._template(),
      justify: 'left',
      fixed: true,
      Content: {
        ...super._template().Content,
        TextWrapper: {
          mountY: 0.5,
          flex: { direction: 'column' },
          Title: {
            type: TextBox,
            signals: {
              textBoxChanged: '_onTextBoxChanged'
            }
          }
        }
      }
    };
  }
  static get properties() {
    return [
      ...super.properties,
      'description',
      'prefixLogo',
      'suffixLogo',
      'shouldCollapse'
    ];
  }

  static get tags() {
    return [
      ...super.tags,
      { name: 'Description', path: 'Content.TextWrapper.Description' }
    ];
  }

  _onTextBoxChanged() {
    this._updateTitle();
  }

  _update() {
    this._updatePrefixLogo();
    this._updateSuffixLogo();
    super._update();
    this._updateDescription();
  }

  _updateTitle() {
    this._TextWrapper.patch({
      Title: {
        content: this.title
      }
    });
  }

  _updateDescription() {
    if (this._hasDescription) {
      let descriptionPatch = {
        content: this.description,
        style: {
          textStyle: {
            ...this.style.descriptionTextStyle,
            wordWrap: true,
            wordWrapWidth: this._fixedWordWrapWidth
          }
        },
        visible: !this._collapse
      };
      if (!this._Description) {
        descriptionPatch = {
          type: TextBox,
          signals: {
            textBoxChanged: '_onTextBoxChanged'
          },
          ...descriptionPatch
        };
      }
      this._TextWrapper.patch({ Description: descriptionPatch });
    } else {
      this._TextWrapper.patch({ Description: undefined });
    }
  }

  _updateTruncation() {
    if (this._Title) {
      this._Title.patch({
        style: {
          textStyle: {
            ...this.style.textStyle,
            wordWrap: true,
            wordWrapWidth: this._fixedWordWrapWidth
          }
        }
      });
    }
  }

  _updatePrefixLogo() {
    if (this._hasPrefixLogo) {
      this._prefix = this._addLogoProps(this._prefixLogo);
    }
  }

  _updateSuffixLogo() {
    if (this._hasSuffixLogo) {
      this._suffix = this._addLogoProps(this._suffixLogo);
    }
  }

  _addLogoProps(icon) {
    return {
      type: Icon,
      icon,
      style: { color: undefined, ...this.style.logoStyle }
    };
  }

  get _hasPrefixLogo() {
    return this.prefixLogo;
  }

  get _hasSuffixLogo() {
    return this.suffixLogo;
  }

  get _rowProps() {
    return {
      ...super._rowProps,
      autoResizeHeight: true
    };
  }

  get _buttonProps() {
    return {
      ...super._buttonProps,
      alpha: this.style.alpha
    };
  }

  get _hasDescription() {
    return !!this.description;
  }

  get _suffixX() {
    return this.w - this._paddingRight - this._suffixW - this.style.paddingX;
  }

  get _collapse() {
    return this.shouldCollapse && !this._isFocusedMode;
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }

    return this.title + this.description + ', List Item';
  }
}
