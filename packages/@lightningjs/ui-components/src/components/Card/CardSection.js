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

import Card from './Card';
import Icon from '../Icon';
import * as styles from './CardSection.styles';

export default class CardSection extends Card {
  static get __componentName() {
    return 'CardSection';
  }

  static get __themeStyle() {
    return styles;
  }

  static get tags() {
    return [...super.tags, 'Icon'];
  }

  static get properties() {
    return [...super.properties, 'iconWidth', 'iconHeight', 'iconSrc'];
  }

  _update() {
    super._update();
    this._updateIcon();
  }

  _updateIcon() {
    const iconObject = {
      w: this.iconWidth || this.style.iconWidth,
      h: this.iconHeight || this.style.iconHeight,
      icon: this.iconSrc,
      x: this.w - this.iconWidth - this.style.paddingHorizontal,
      y:
        (this._Title.style.textStyle.lineHeight - this.iconHeight) / 2 +
        this.style.paddingVertical
    };
    if (!this._Icon) {
      iconObject.type = Icon;
    }
    this.patch({ Icon: iconObject });
  }

  _calculateTextWidth() {
    const textWidth = this.w - this.style.paddingHorizontal * 2;
    return this.iconSrc ? textWidth - this.iconWidth : textWidth;
  }
}
