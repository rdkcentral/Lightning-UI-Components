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
import Icon from '../Icon';
import { getHexColor, getMaxRoundRadius } from '../../utils';
import * as styles from './Badge.styles';
import lng from '@lightningjs/core';

export default class Badge extends Base {
  static _template() {
    return {
      Text: {
        mountY: 0.5
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
    return ['Background', 'Text', 'Icon'];
  }

  _init() {
    this._Text.on('txLoaded', this._updateLayout.bind(this));
    super._init();
  }

  _update() {
    this._updateText();
    this._updateIcon();
    this._updateLayout();
    this._updateVisibility();
  }

  _updateVisibility() {
    this.alpha = this.title || this.icon ? 1 : 0;
  }

  _updateLayout() {
    this._updateWidth();
    this._updateBackground();
    this._updatePositions();
    this.signal('loadedBadge', this);
  }

  _updateBackground() {
    const height =
      Math.max(this._Text.renderHeight, this._Icon.h) + this.style.paddingY * 2;

    this.patch({
      h: height,
      texture: lng.Tools.getRoundRect(
        this.w,
        height,
        getMaxRoundRadius(this.style.radius, this.w, height),
        this.style.strokeWidth,
        this.style.strokeColor,
        true,
        this.style.backgroundColor
      )
    });
  }

  _updateText() {
    if (this._Text) {
      this._Text.patch({
        text: {
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
    let width = 0;
    if (this.title && this.icon) {
      width =
        this._Text.renderWidth +
        this._Icon.finalW +
        this.style.contentSpacing +
        this.style.paddingX * 2;
    } else if (this.title) {
      width = this._Text.renderWidth + this.style.paddingX * 2;
    } else if (this.icon) {
      width = this._Icon.finalW + this.style.paddingX * 2;
    }

    this.w = width;
  }

  _updatePositions() {
    this._Icon.y = this.h / 2;

    if (this.iconAlign === 'left' && this.title && this.icon) {
      this._Icon.x = this.style.paddingX;
      this._Text.x =
        this._Icon.x + this._Icon.finalW + this.style.contentSpacing;
    } else if (this.iconAlign === 'right' && this.title && this.icon) {
      this._Text.x = this.style.paddingX;
      this._Icon.x =
        this._Text.x + this._Text.renderWidth + this.style.contentSpacing;
    } else {
      this._Text.x = this.style.paddingX;
      this._Icon.x = this.style.paddingX;
    }

    this._Text.y = this._h / 2 + this.style.offsetY;
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
    return this._announce || this.title;
  }
}
