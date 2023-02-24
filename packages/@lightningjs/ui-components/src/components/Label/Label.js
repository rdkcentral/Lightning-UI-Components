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

import lng from '@lightningjs/core';
import Base from '../Base/index.js';
import * as styles from './Label.styles.js';

export default class Label extends Base {
  static _template() {
    return {
      Background: {},
      Text: {
        mountY: 0.5,
        mountX: 0.5,
        text: {}
      }
    };
  }

  static get __componentName() {
    return 'Label';
  }

  static get __themeStyle() {
    return styles;
  }

  static get properties() {
    return ['title'];
  }

  static get tags() {
    return ['Background', 'Text'];
  }

  _init() {
    this._Text.on('txLoaded', this._updateBackground.bind(this));
    super._init();
  }

  _update() {
    this._updateBackground();
    this._updateText();
  }

  _updateText() {
    if (this._Text) {
      this._Text.patch({
        text: {
          ...this.style.textStyle,
          text: this.title
        }
      });
    }
  }

  _updateBackground() {
    this._Text.x = this.w / 2;
    this._Text.y = this.h / 2 + this.style.offsetY;

    this.h = !this.title
      ? 0
      : this._Text.renderHeight + 2 * this.style.paddingY;
    this.w = !this.title ? 0 : this._Text.renderWidth + 2 * this.style.paddingX;

    this._Background.patch({
      texture: lng.Tools.getRoundRect(
        // Compensating for the extra two pixels getRoundRect adds.
        this.w - 2,
        this.h - 2,
        this.style.radius,
        0,
        null,
        true,
        this.style.backgroundColor
      )
    });
    this.signal('loadedLabel', this);
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    return this._announce || (this._Text && this._Text.text.text);
  }
}
