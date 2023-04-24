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

import Surface from '../Surface';
import Icon from '../Icon';
import TextBox from '../TextBox';
import * as styles from './Tab.styles.js';

export default class Tab extends Surface {
  static _template() {
    return {
      ...super._template(),
      Content: {
        mount: 0.5,
        x: w => w / 2,
        y: h => h / 2,
        Text: {
          type: TextBox,
          mountY: 0.5,
          signals: {
            textBoxChanged: '_onTextBoxChanged'
          }
        }
      }
    };
  }

  static get __themeStyle() {
    return styles;
  }

  static get __componentName() {
    return 'Tab';
  }

  static get properties() {
    return ['icon', 'title'];
  }

  static get tags() {
    return [
      ...super.tags,
      'Content',
      {
        name: 'Icon',
        path: 'Content.Icon'
      },
      {
        name: 'Text',
        path: 'Content.Text'
      }
    ];
  }

  _onTextBoxChanged() {
    this._updateContent();
    this._updateTabSize();
  }

  _update() {
    super._update();
    this._updateIcon();
    this._updateText();
    this._updateContent();
    this._updateTabSize();
  }

  _updateIcon() {
    if (this.icon) {
      const iconPatch = {
        src: this.icon,
        w: this.style.iconSize,
        h: this.style.iconSize,
        y: this._Content.h / 2,
        color: this.style.iconColor
      };
      if (!this.title) {
        iconPatch.mountX = 0.5;
        iconPatch.x = this._Content.w / 2;
      }
      if (this._Icon) {
        this._Icon.patch(iconPatch);
      } else {
        this._Content.patch({
          Icon: {
            type: Icon,
            mountY: 0.5,
            ...iconPatch
          }
        });
      }
    } else {
      this._Content.patch({ Icon: undefined });
    }
  }

  _updateText() {
    const textPatch = {
      content: this.title,
      style: { textStyle: this.style.textStyle },
      y: this._Content.h / 2
    };
    if (this.icon) {
      textPatch.mountX = 0;
      textPatch.x = this._iconW + this.style.iconMarginRight;
    } else {
      textPatch.mountX = 0.5;
      textPatch.x = this._Content.w / 2;
    }
    this._Text.patch(textPatch);
  }

  _updateContent() {
    this._Content.patch({
      w:
        this._iconW +
        (this.title ? this.style.iconMarginRight : 0) +
        this._textW,
      h: Math.max(this._iconH, this._Text.h)
    });
  }

  _updateTabSize() {
    if (this.title || this.icon) {
      this.patch({
        w: this._paddingX * 2 + this._Content.w,
        h: this.style.paddingY * 2 + this._Content.h
      });
    } else {
      this.patch({ w: 0, h: 0 });
    }
  }

  get _textW() {
    return this.title ? this._Text.w : 0;
  }

  get _iconW() {
    return this.icon ? this._Icon.w : 0;
  }

  get _iconH() {
    return this.icon ? this._Icon.h : 0;
  }

  get _paddingX() {
    return this.title ? this.style.paddingX : this.style.noTitlePaddingX;
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    return this._announce || (this._Text && this._Text.announce);
  }
}
