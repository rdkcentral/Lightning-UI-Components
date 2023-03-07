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

import Base from '../Base';
import Icon from '../Icon/index.js';
import { getHexColor } from '../../utils/index.js';
import * as styles from './Badge.styles.js';
import lng from '@lightningjs/core';

export default class Badge extends Base {
  static _template() {
    return {
      rect: true,
      shader: {
        type: lng.shaders.RoundedRectangle
      },
      Text: {
        mountY: 0.5,
        text: {}
      },
      Icon: {
        type: Icon,
        mountY: 0.5,
        signals: {
          itemChanged: '_updateLayout'
        }
      }
    };
  }

  static get __componentName() {
    return 'Badge';
  }

  static get __themeStyle() {
    return styles;
  }

  static get properties() {
    return ['title', 'icon', 'iconAlign', 'iconWidth', 'iconHeight'];
  }

  static get tags() {
    return ['Text', 'Icon'];
  }

  _init() {
    this._Text.on('txLoaded', this._updateLayout.bind(this));
    super._init();
  }

  _update() {
    this._updateText();
    this._updateIcon();
    this._updateLayout();
  }

  _updateLayout() {
    this._updateWidth();
    this._updateBackground();
    this._updatePositions();
  }

  _updateBackground() {
    this.patch({
      h:
        Math.max(this._Text.renderHeight, this._Icon.h) +
        this.style.paddingY * 2,
      color: this.style.backgroundColor,
      shader: { radius: this.style.radius }
    });
  }

  _updateText() {
    if (this._Text) {
      this._Text.patch({
        text: {
          textAlign: this.style.textAlign,
          ...this.style.textStyle,
          text: this.title || ''
        }
      });
    }
  }

  _updateIcon() {
    this._Icon.patch({
      icon: this.icon,
      w: this.iconWidth,
      h: this.iconHeight,
      style: {
        color: getHexColor(this.style.iconColor)
      }
    });
  }

  _updateWidth() {
    let contentSpacing = 0;
    if (this.icon && this.title) {
      contentSpacing = this.style.contentSpacing;
    }

    this.w = this.title
      ? this._Text.renderWidth +
        this.style.paddingX * 2 +
        (this._Icon.finalW || 0) +
        contentSpacing
      : this.style.paddingX * 2 + (this._Icon.finalW || 0);
  }

  _updatePositions() {
    this._Icon.y = this.h / 2;

    if (this.iconAlign === 'left' && this.title) {
      this._Icon.x = this.style.paddingX;
      this._Text.x =
        this._Icon.x + this._Icon.finalW + this.style.contentSpacing;
    } else if (this.iconAlign === 'right' && this.title) {
      this._Text.x = this.style.paddingX;
      this._Icon.x =
        this._Text.x + this._Text.renderWidth + this.style.contentSpacing;
    } else {
      this._Text.x = this.style.paddingX;
      this._Icon.x = this.style.paddingX;
    }

    this._Text.y = this._h / 2 + this.style.offsetY;
    this.signal('loadedBadge', this);
  }

  _getIconHeight() {
    if (this.icon) {
      return !this._Icon.finalH && this._Text
        ? this._Text.text.lineHeight
        : this._Icon.finalH;
    }
    return 0;
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    return this._announce || (this._Text && this._Text.text.text);
  }
}
