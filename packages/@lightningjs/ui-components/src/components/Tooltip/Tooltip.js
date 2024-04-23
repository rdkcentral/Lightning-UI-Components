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

import Bubble from '../../textures/Bubble';
import TextBox from '../TextBox';
import Base from '../Base';
import * as styles from './Tooltip.styles';
import { getMaxRoundRadius } from '../../utils';

export default class Tooltip extends Base {
  static get __componentName() {
    return 'Tooltip';
  }

  static get __themeStyle() {
    return styles;
  }

  static _template() {
    return {
      alpha: 0,
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

  static get aliasStyles() {
    return [
      { prev: 'pointerH', curr: 'pointerHeight' },
      { prev: 'pointerW', curr: 'pointerWidth' }
    ];
  }

  _update() {
    this._updateText();
    this._updateBackground();
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
    this._updateBackgroundHeight();
    this._updateTextPosition();
  }

  /**
   * patches Background prop updates
   */
  _updateBackground() {
    this.patch({
      Background: {
        w: this._Background.w,
        h: this._Background.h,
        texture: {
          type: Bubble,
          w: this._Background.w,
          h: this._Background.h,
          radius: getMaxRoundRadius(
            this.style.radius,
            this._Background.w / 2,
            this._Background.h / 2,
            0
          ),
          pointerWidth: this.style.pointerWidth,
          pointerHeight: this.style.pointerHeight,
          color: this.style.backgroundColor
        }
      }
    });
  }

  /**
   * updates height of background when text height or width is changed
   */
  _updateBackgroundHeight() {
    const backgroundH =
      this._Text.finalH + this.style.paddingY * 2 + this.style.pointerHeight;
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
          h: backgroundH
        }
      }
    });
  }

  _updateTextPosition() {
    if (this._Text) {
      this._Text.patch({
        mount: 0.5,
        x: this._Background.w / 2,
        y: (this._Background.h - this.style.pointerHeight) / 2
      });
    }
  }

  _clearTimers() {
    clearTimeout(this._hideTimer);
    clearTimeout(this._showTimer);
  }

  _transitionIn() {
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

  _focus() {
    this._clearTimers();
    this._transitionIn();
  }

  _unfocus() {
    this._clearTimers();
    this._transitionOut();
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    return this._announce || (this._Text && this._Text.announce);
  }
}
