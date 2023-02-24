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

import Icon from '../Icon/index.js';
import Badge from '../Badge/index.js';
import { parseInlineContent, flatten } from '../../utils/index.js';
import Base from '../Base/index.js';
import * as styles from './InlineContent.styles.js';

export default class InlineContent extends Base {
  static get properties() {
    return [
      'content',
      'contentProperties',
      'badgeY',
      'badgeProperties',
      'justify',
      'contentWrap',
      'customStyleMappings'
    ];
  }

  static get __componentName() {
    return 'InlineContent';
  }

  static get __themeStyle() {
    return styles;
  }

  _construct() {
    super._construct();
  }

  _update() {
    this._updateContent();
    this._waitForComponentLoad();
  }

  _updateContent() {
    this.childList.clear();
    if (this._parsedContent && this._parsedContent.length) {
      this.patch({
        flex: {
          direction: 'row',
          wrap: !!this.contentWrap,
          justifyContent:
            this.justify != undefined ? this.justify : this.style.justify
        }
      });

      this._parsedContent.forEach((item, index) => {
        const isLast = index === this._parsedContent.length - 1;
        const base = {
          flexItem: {
            ...this.contentProperties,
            // apply contentProperties object props first if those are defined
            // otherwise will use the style props
            marginBottom: isLast ? 0 : this._marginBottom,
            marginRight: isLast
              ? 0
              : this.contentProperties.marginRight || this.style.contentSpacing
          }
        };

        // text not separated by icons/badges are grouped together
        if (typeof item === 'string' || item.text) {
          if (typeof this._parsedContent[index + 1] === 'string') {
            base.flexItem.marginRight = 0;
          }
          this.childList.a(this._createText(base, item));
        } else if (item.icon) {
          this.childList.a(this._createIcon(base, item));
        } else if (item.badge) {
          this.childList.a(this._createBadge(base, item.badge));
        } else if (item.newline && this.contentWrap) {
          this.childList.a({ h: 0, w: this.w });
        }
      });
    }
  }

  _waitForComponentLoad() {
    if (this.children.length) {
      Promise.all(
        this.children.map(
          child => new Promise(resolve => child.on('txLoaded', resolve))
        )
      ).finally(() => this._contentLoaded());
    } else {
      this.h = 0;
      this._contentLoaded();
    }
  }

  _notifyAncestors() {
    this.fireAncestors('$loadedInlineContent', this);
    this.signal('loadedInlineContent', this.finalW, this.multiLineHeight);
  }

  _contentLoaded() {
    // TODO: FIX --figure out an alternative to using setTimeout
    // perhaps have to wait until Lightning Flexboxes can emit a signal (like textures) when they've finished loading
    if (this.children.length) {
      this.stage.update();
      setTimeout(() => {
        this.multiLineHeight = this.finalH;
        if (
          this.flex &&
          this.flex._layout &&
          this.flex._layout._lineLayouter &&
          this.flex._layout._lineLayouter._lines
        ) {
          this.multiLineHeight =
            this.style.textStyle.lineHeight *
            this.flex._layout._lineLayouter._lines.length;
          this.h = this.multiLineHeight;
          this._notifyAncestors();
        } else {
          this._contentLoaded();
        }
      }, 10);
    } else {
      this._notifyAncestors();
    }
  }

  _createIcon(base, iconProps) {
    const y =
      (this.textHeight > this.style.textStyle.lineHeight
        ? this.textHeight
        : this.style.textStyle.lineHeight) - this.style.iconH;
    return {
      ...base,
      type: Icon,
      y: y,
      w: this.style.iconW,
      h: this.style.iconH,
      signals: {
        itemChanged: '_updateIconPosition'
      },
      ...iconProps
    };
  }

  _createText(base, text) {
    const textOverrideStyles =
      typeof text.style === 'string'
        ? this.customStyleMappings[text.style]
        : text.style;

    return {
      ...base,
      y: this.textY !== undefined ? this.textY : this.style.textY,
      h: this.textHeight,
      text: {
        ...this.style.textStyle,
        ...textOverrideStyles,
        text: text.text || text
      }
    };
  }

  _createBadge(base, badge) {
    return {
      ...base,
      y: this.badgeY || 0,
      ...this.badgeProperties,
      type: Badge,
      title: badge,
      signals: {
        loadedBadge: '_loadedBadge'
      }
    };
  }

  _updateIconPosition(icon) {
    icon.y = this.style.textStyle.lineHeight - icon.h;
  }

  _loadedBadge(badge) {
    if (this.badgeY === undefined) {
      badge.y = this.style.textStyle.lineHeight - badge.h;
    }
  }

  /**
   * RegEx Lookbehinds do not work in WPE Browser, but we want the space
   * at the end of the previous string to prevent weird wrapping,
   * so we need to separate on spaces, then re-attach to the previous string
   *
   * @param { array } parsedContent
   *
   * @return { array }
   */
  _formatSpaces(parsedContent) {
    return flatten(
      (parsedContent || []).map(item =>
        typeof item === 'string' ? item.split(/(\s+)/) : item
      )
    )
      .map((item, index, arr) => {
        if (item === ' ') return false;
        if (arr[index + 1] === ' ') return item + ' ';
        return item;
      })
      .filter(Boolean);
  }

  _setContent(content) {
    if (content !== this._content) {
      this._content = content;
      let parsedContent = this._content;
      if (content && !Array.isArray(content)) {
        parsedContent = parseInlineContent(content);
      }

      this._parsedContent = this._formatSpaces(parsedContent);
    }
    return content;
  }

  _setBadgeProperties(badgeProperties) {
    if (typeof badgeProperties === 'object') {
      return badgeProperties;
    }
  }

  _getBadgeProperties() {
    return this._badgeProperties || {};
  }

  _setContentProperties(contentProperties) {
    if (typeof contentProperties === 'object') {
      return contentProperties;
    }
  }

  _getContentProperties() {
    return this._contentProperties || {};
  }

  _setCustomStyleMappings(customStyleMappings) {
    if (typeof customStyleMappings === 'object') {
      return customStyleMappings;
    }
  }

  _getCustomStyleMappings() {
    return this._customStyleMappings || {};
  }

  get textHeight() {
    return this.style.textStyle.lineHeight || this.style.textStyle.fontSize;
  }

  get _marginBottom() {
    if (this.contentProperties.marginBottom !== undefined) {
      return this.contentProperties.marginBottom;
    }
    if (this.style.marginBottom) {
      return this.style.marginBottom;
    }
    return 0;
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }
    const announce =
      this._parsedContent &&
      this._parsedContent.reduce((announce, item) => {
        if (typeof item === 'string') {
          announce += item;
        } else if (item.announce) {
          announce += item.announce;
        } else if (item.text) {
          announce += item.text;
        } else if (item.title) {
          announce += item.title;
        } else if (item.badge) {
          announce += item.badge;
        }
        return announce + ' ';
      }, '');
    return announce ? announce.replace(/\s+(?=\s)|\s$/g, '') : '';
  }
}
