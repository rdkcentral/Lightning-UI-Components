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
import { stringifyCompare } from '../../utils/index.js';

export default class ContentSwitcher extends Base {
  static get __componentName() {
    return 'ContentSwitcher';
  }

  static get properties() {
    return ['selectedIndex'];
  }

  _construct() {
    super._construct();
    this._selectedIndex = 0;
    this._contentItems = [];
  }

  _update() {
    super._update();
    this._updateSelected();
  }

  _updateSelected() {
    if (this._preveSelectedIndex !== this.selectedIndex) {
      if (this._preveSelectedIndex !== undefined) {
        const prevContent = this.tag(`Content${this._preveSelectedIndex}`);
        prevContent.smooth = { alpha: 0 };
        if (this._hasContent) {
          prevContent._getTransition('alpha').once('finish', () => {
            this._fadeInContent();
          });
        } else if (this.selectedIndex !== undefined) {
          this._fadeInContent();
        }
      } else if (this._hasContent) {
        this._fadeInContent();
      }
      this._preveSelectedIndex = this.selectedIndex;
    }
  }

  _fadeInContent() {
    this._selectedContent.smooth = { alpha: 1 };
    this._selectedContent._getTransition('alpha').once('finish', () => {
      this.h = this._selectedContent.h;
      this.signal('contentHeightChange', this.h);
    });
  }

  _updateContent() {
    const allContent = this.contentItems.reduce((acc, item, idx) => {
      let component;
      const tagName = `Content${idx}`;

      if (typeof item === 'function') {
        const componentLoader = item();
        if (componentLoader.then) {
          // update template async after component has loaded
          this._loadAsyncComponent(componentLoader, idx);
        } else {
          component = componentLoader;
        }
      } else {
        component = item;
      }

      if (component) {
        acc[tagName] = {
          ...component,
          alpha: 0
        };
      }

      return acc;
    }, {});
    this.patch(allContent);
  }

  _loadAsyncComponent(componentLoader, idx) {
    componentLoader.then(component => {
      const tagName = `Content${idx}`;
      this.patch({ [tagName]: { ...component, alpha: 0 } });
    });
  }

  set contentItems(contentItems) {
    if (!stringifyCompare(contentItems, this._contentItems)) {
      this._contentItems = contentItems;
      this._updateContent();
    }
  }

  get contentItems() {
    return this._contentItems;
  }

  get _hasContent() {
    return this._selectedContent && this._selectedContent.children.length > 0;
  }

  get _selectedContent() {
    return this.tag(`Content${this.selectedIndex}`);
  }

  _getFocused() {
    if (this._hasContent) {
      return this._selectedContent;
    }
  }
}
