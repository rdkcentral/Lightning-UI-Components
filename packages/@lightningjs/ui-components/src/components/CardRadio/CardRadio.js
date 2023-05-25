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

import CardTitle from '../Card/CardTitle';
import TextBox from '../TextBox';
import * as styles from './CardRadio.styles.js';
import Radio from '../Radio';

export default class CardRadio extends CardTitle {
  static get __componentName() {
    return 'CardRadio';
  }

  static get __themeStyle() {
    return styles;
  }

  static get properties() {
    return [...super.properties, 'subtitle'];
  }

  static get tags() {
    return [...super.tags, 'Subtitle'];
  }

  static _template() {
    return {
      ...super._template(),
      Subtitle: {
        type: TextBox,
        signals: {
          textBoxChanged: '_updateSubtitlePosition'
        }
      }
    };
  }

  _update() {
    super._update();
    this._updateSubtitle();
    this._updateRadio();
    this._updateDescriptionPosition();
    this._updateSubtitlePosition();
  }

  _updateSubtitle() {
    this._Subtitle.patch({
      content: this.subtitle,
      style: {
        textStyle: {
          ...this.style.subtitleTextStyle,
          wordWrapWidth: this._calculateTextWidth()
        }
      }
    });
  }

  _updateRadio() {
    const RadioPatch = {
      w: this.style.iconWidth,
      h: this.style.iconHeight,
      x: this.w - this.style.iconWidth - this.style.paddingHorizontal,
      y:
        (this._Title.style.textStyle.lineHeight - this.style.iconHeight) / 2 +
        this.style.paddingVertical +
        this.style.paddingVertical / 4,
      checked: true
    };
    if (!this._Radio) {
      RadioPatch.type = Radio;
    }
    this.patch({ Radio: RadioPatch, alpha: this.style.alpha });
  }

  _updateSubtitlePosition() {
    this._Subtitle.x = this.style.paddingHorizontal;
    this._Subtitle.y = this.style.paddingVertical + this._Title.h;
  }

  _updateDescriptionPosition() {
    this._Description.x = this.style.paddingHorizontal;
    this._Description.y =
      2 * this.style.paddingVertical + this._Title.h + this._Subtitle.h;
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    return (
      this._announce || [
        this._Title && this._Title.announce,
        this._Subtitle && this._Subtitle.announce,
        this._Description && this._Description.announce,
        this._Details && this._Details.announce
      ]
    );
  }
}
