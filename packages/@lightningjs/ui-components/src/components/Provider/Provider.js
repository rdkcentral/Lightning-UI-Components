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
import Base from '../Base';
import Row from '../Row';
import Icon from '../Icon';
import TextBox from '../TextBox';
import * as styles from './Provider.styles.js';

export default class Provider extends Base {
  static get __componentName() {
    return 'Provider';
  }

  static get __themeStyle() {
    return styles;
  }

  static _template() {
    return {
      Row: {
        type: Row,
        autoResizeWidth: true
      }
    };
  }

  static get properties() {
    return ['disableRadius', 'counterText', 'providers', 'visibleCount'];
  }

  static get tags() {
    return ['Row'];
  }

  get providersHidden() {
    return this.providers.length - this.visibleCount;
  }

  _construct() {
    this._providers = [];
    super._construct();
  }

  _update() {
    this._updateProviders();
    this._updateCounter();
  }

  _updateProviders() {
    const providerList = [];
    this.providers.slice(0, this.visibleCount).forEach(provider => {
      // Create a starting point for each provider icon.
      let patch = {
        centerInParent: true,
        radius: this.disableRadius ? 0 : this.style.radius,
        alpha: this.style.alpha,
        style: provider.style
      };
      if (
        // If the provider is a pre-configured Icon, allow it to override the default behavior.
        provider.type === Icon &&
        provider.icon &&
        provider.w &&
        provider.h
      ) {
        // Maintain the ratio of the source icon while enforcing the height specified in the styles.
        const ratio = provider.w / provider.h;
        patch = {
          type: Icon,
          icon: provider.icon,
          ...provider,
          w: this.style.itemSize * ratio,
          h: this.style.itemSize,
          ...patch
        };
      } else {
        // If the provider is just a string, create the rest of the Icon.
        patch = {
          type: Icon,
          w: this.style.itemSize,
          h: this.style.itemSize,
          ...patch
        };
        if (typeof provider === 'object') {
          patch = { ...patch, ...provider };
        } else {
          patch.icon = provider;
        }
      }
      providerList.push(patch);
    });
    this._Row.patch({
      style: {
        itemSpacing: this.style.itemSpacing
      },
      items: providerList,
      h: this.style.itemSize
    });
  }

  _updateCounter() {
    if (this.providers.length > this.visibleCount) {
      const remaining = this.providersHidden;
      const counter = {
        announce: `+${remaining}`,
        alpha: this.style.alpha,
        w: this.style.itemSize,
        h: this.style.itemSize,
        centerInParent: true,
        Background: {
          w: this.style.itemSize,
          h: this.style.itemSize,
          texture: lng.Tools.getRoundRect(
            this.style.itemSize,
            this.style.itemSize,
            this.style.radius,
            0,
            null,
            true,
            this.style.counterBackgroundColor
          )
        },
        Text: {
          type: TextBox,
          mountX: 0.5,
          mountY: 0.5,
          x: this.style.itemSize / 2,
          y: this.style.itemSize / 2,
          content: this.counterText || `+${remaining}`,
          style: { textStyle: this.style.counterTextStyle }
        }
      };
      this._Row.appendItems([counter]);
    }
  }

  $itemChanged() {
    this.signal('providerChanged');
  }

_setVisibleCount(visibleCount){
  if (visibleCount<1){
    console.log("Minimum visible count should be greater than or equal to 1")
  }
if (visibleCount>this.providers.length){
  console.log("Maximum visible count must be less than or equal to the number of providers")
}
return Math.min(Math.max(1,visibleCount),this.providers.length)
}

  get w() {
    return this._Row.w;
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    return (
      this._announce ||
      (this._Row.items &&
        this._Row.items.length &&
        this._Row.items.map(item => item.announce))
    );
  }
}
