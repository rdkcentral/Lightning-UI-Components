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

import * as styles from './Card.styles.js';
import TextBox from '../TextBox';
import Surface from '../Surface';

export default class Card extends Surface {
  static get __componentName() {
    return 'Card';
  }

  static get __themeStyle() {
    return styles;
  }

  static get properties() {
    return [...super.properties, 'title'];
  }

  static get tags() {
    return [...super.tags, 'Title'];
  }

  static _template() {
    return {
      ...super._template(),
      Title: {
        type: TextBox,
        signals: {
          textBoxChanged: 'queueRequestUpdate'
        }
      }
    };
  }

  _update() {
    super._update();
    this._updateTitle();
    this._updateTitlePosition();
  }

  _updateTitle() {
    this._Title.patch({
      content: this.title,
      style: {
        textStyle: {
          ...this.style.titleTextStyle,
          wordWrapWidth: this._calculateTextWidth()
        }
      }
    });
  }

  _calculateTextWidth() {
    return this.w - this.style.paddingHorizontal * 2;
  }

  _updateTitlePosition() {
    this._Title.x = this.style.paddingHorizontal;
    this._Title.y = this.style.paddingVertical;
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    return this._announce || (this._Title && this._Title.announce);
  }
}
