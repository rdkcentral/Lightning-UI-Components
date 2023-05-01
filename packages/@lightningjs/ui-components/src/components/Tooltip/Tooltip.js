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

import { Bubble } from '../../textures';
import TextBox from '../TextBox';
import Base from '../Base';
import * as styles from './Tooltip.styles.js';

export default class Tooltip extends Base {
  static get __componentName() {
    return 'Tooltip';
  }

  static get __themeStyle() {
    return styles;
  }

  static _template() {
    return {
      alpha: 0.001,
      scale: 0.5,
      mountX: 0.5,
      x: w => w / 2,
      Background: {
        Text: {
          type: TextBox,
          signals: {
            textBoxChanged: '_textLoaded'
          }
        }
      }
    };
  }

  static get properties() {
    return ['title', 'delayVisible', 'timeVisible'];
  }

  static get tags() {
    return ['Background', { name: 'Text', path: 'Background.Text' }];
  }

  _update() {
    this._updateText();
    this._clearTimers();
    if (this._isFocusedMode) {
      this.transitionIn();
    } else {
      this._transitionOut();
    }
  }

  _updateText() {
    if (this._Text) {
      this._Text.patch({
        content: this.title,
        style: { textStyle: this.style.textStyle }
      });
    }
  }

  _textLoaded() {
    this._updateBackground();
    this._updateTextPosition();
  }

  _updateBackground() {
    const backgroundH =
      this._Text.finalH + this.style.paddingY * 2 + this.style.pointerH;
    const backgroundW = this._Text.finalW + this.style.paddingX * 2;

    this.patch({
      w: backgroundW,
      h: backgroundH,
      mountY: 1,
      y: -this.style.marginBottom,
      Background: {
        w: backgroundW,
        h: backgroundH,
        texture: {
          type: Bubble,
          w: backgroundW,
          h: backgroundH,
          radius: this.style.radius,
          pointerW: this.style.pointerW,
          pointerH: this.style.pointerH,
          color: this.style.backgroundColor
        }
      }
    });
  }

  _updateTextPosition() {
    if (this._Text) {
      this._Text.patch({
        mount: 0.5,
        x: this._Background.w / 2,
        y: (this._Background.h - this.style.pointerH) / 2
      });
    }
  }

  _clearTimers() {
    clearTimeout(this._hideTimer);
    clearTimeout(this._showTimer);
  }

  transitionIn() {
    const smooth = {
      smooth: {
        alpha: [1, this.style.transition],
        scale: [1, this.style.transition]
      }
    };

    if (this.delayVisible) {
      this._showTimer = setTimeout(() => {
        this.patch({ smooth });
      }, this.delayVisible);
    } else {
      this._showTimer = undefined;
      this.patch({ smooth });
    }

    this._hideTimer = this.timeVisible
      ? setTimeout(() => {
          this._unfocus();
        }, this.timeVisible + (this.delayVisible || 0))
      : undefined;
  }

  _transitionOut() {
    this.patch({
      smooth: {
        alpha: [0, this.style.transition],
        scale: [0.5, this.style.transition]
      }
    });
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    return this._announce || (this._Text && this._Text.announce);
  }
}
