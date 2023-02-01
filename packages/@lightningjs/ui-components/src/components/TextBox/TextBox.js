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
import * as styles from './TextBox.styles';
import Base from '../Base';
import InlineContent from '../InlineContent';
import Marquee from '../Marquee';
import { context } from '../../globals';
import utils from '../../utils';

/**
 *
 * Get defaults directly from @lightningjs/core to ensure correct fallback values
 *
 */
const lightningTextDefaults = Object.entries(
  Object.getOwnPropertyDescriptors(lng.textures.TextTexture.prototype)
).reduce((acc, [prop]) => {
  const value = lng.textures.TextTexture.prototype[prop];
  if (prop.startsWith('_') || ['undefined', 'function'].includes(typeof value))
    return acc;
  return {
    [prop]: value,
    ...acc
  };
}, {});

export default class TextBox extends Base {
  static _template() {
    return {
      alpha: 0.001
    };
  }

  static get __componentName() {
    return 'TextBox';
  }

  static get __themeStyle() {
    return styles;
  }

  static get tags() {
    return ['InlineContent', 'Marquee', 'Text'];
  }

  static get properties() {
    return ['content', 'marquee', ...InlineContent.properties];
  }

  _setDimensions(w, h) {
    let width = w;
    let height = h;
    if (!this._isInlineContent) {
      width = this.w || this._Text.texture.getRenderWidth();
      height = this._Text.texture.getRenderHeight();
    }

    const sizeChanged = this.w !== width || this.h !== height;

    if (width && height && sizeChanged) {
      this.h = height;
      this.w = width;
      // Position updates can produce flash of poorly positioned content, hide the element until measurements are made.
      if (this.alpha < 1) {
        this.patch({
          alpha: 1
        });
      }

      this._notifyAncestors();
    }
  }

  _setContent(content) {
    this._isInlineContent = false;
    if (Array.isArray(content) || utils.isMarkupString(content)) {
      this._isInlineContent = true;
    }
    if ('string' !== typeof content && !this._isInlineContent) {
      return '';
    }
    return content;
  }

  get title() {
    return this._content;
  }

  _notifyAncestors(w = this.w, h = this.h) {
    this.fireAncestors('$itemChanged');
    this.signal('textBoxChanged', { w, h });
  }

  _construct() {
    super._construct();
    this._marqueeContentListenerAttached = false;
    this._marqueeOverrideLoopX = undefined;
    this._resetMarqueePromise();
  }

  _update() {
    if (!this.content) {
      // If content is not defined hide the component, but do NOT set visibility
      // as a parent component may need to control that (i.e. Control Button)

      // guard to make sure _notifyAncestors is not called numerous times for components like Input
      if (this._Text || this._InlineContent) {
        this.w = this.h = 0;
        this._notifyAncestors(); // need to alert parents that the width and height are now 0
        // makes sure that elements are removed
        this.patch({ Text: undefined, InlineContent: undefined });
      }

      return;
    }

    this._isInlineContent ? this._updateInlineContent() : this._updateText();

    this._updateMarquee();
  }

  _updateInlineContent() {
    this.patch({ Text: undefined });

    const inlineContentPatch = InlineContent.properties.reduce((acc, prop) => {
      if (this[prop] != undefined) {
        acc[prop] = this[prop];
      }
      return acc;
    }, {});

    if (this.style.textStyle.wordWrapWidth > 0) {
      inlineContentPatch.w = this.style.textStyle.wordWrapWidth;
      inlineContentPatch.rtt = true;
    }

    this.patch({
      alpha: 1,
      InlineContent: {
        type: InlineContent,
        ...inlineContentPatch,
        signals: {
          loadedInlineContent: '_setDimensions'
        }
      }
    });
  }

  _updateText() {
    this.patch({ InlineContent: undefined });

    if (!this._Text) {
      this.patch({ Text: {} });
      this._Text.on('txLoaded', this._setDimensions.bind(this));
    }

    const fontStyle = this._textStyleSet;

    if (this._Text) {
      this._Text.patch({
        y: this.style.offsetY,
        x: this.style.offsetX,
        text: {
          ...lightningTextDefaults, // order matters this should always be first
          ...fontStyle
        }
      });
    }
  }

  // keep this out of the update lifecycle
  set marqueeOverrideLoopX(v) {
    this._marqueeOverrideLoopX = v;
    if (this._Marquee) this._Marquee.overrideLoopX = this._marqueeOverrideLoopX;
    this._resolveAwaitMarqueeOverrideX();
  }

  get marqueeOverrideLoopX() {
    return this._marqueeOverrideLoopX;
  }

  _resetMarqueePromise() {
    this._awaitMarqueeOverrideX = new Promise((resolve, reject) => {
      this._resolveAwaitMarqueeOverrideX = resolve;
      this._rejectAwaitMarqueeOverrideX = reject;
    });
  }

  _loadedMarqueeContent() {
    this.signal('willMarquee', this._Marquee);
  }

  _updateMarquee() {
    const contentTag = this._isInlineContent ? this._InlineContent : this._Text;

    if (this._Marquee && !this.marquee) {
      this._toggleMarquee(contentTag);
    }

    if (this.marquee) {
      this._resetMarqueePromise();
      const marqueePatch = {
        w: this.style.textStyle.wordWrapWidth || this.w,
        h: this.h,
        y: this.style.offsetY,
        x: this.style.offsetX,
        signals: {
          marqueeContentLoaded: '_loadedMarqueeContent'
        }
      };

      if (!this._Marquee) {
        marqueePatch.type = Marquee;
      }

      if (this._isInlineContent) {
        this._InlineContent.w = 0; // ensure we're copying the full, unwrapped inlineContent
        marqueePatch.contentTexture = contentTag.getTexture();
        marqueePatch.w = this.style.textStyle.wordWrapWidth || this.w;
      } else {
        marqueePatch.title = {
          text: contentTag.text.text,
          ...this._textStyleSet,
          wordWrapWidth: 0,
          maxLines: 1
        };
      }

      this.patch({
        Marquee: marqueePatch
      });
      if (!this._marqueeContentListenerAttached) {
        this._marqueeContentListenerAttached = true;
      }
      if ('undefined' !== typeof this._marqueeOverrideLoopX) {
        this._awaitMarqueeOverrideX.then(() => {
          this._toggleMarquee(contentTag);
        });
      } else {
        this._toggleMarquee(contentTag);
      }
    }
  }

  get _textStyleFromString() {
    return (
      this.style.typography[
        typeof this.style.textStyle === 'string'
          ? this.style.textStyle
          : this.style.defaultTextStyle
      ] || this.style.typography.body1
    );
  }

  get _textStyleSet() {
    const fontStyle = {
      ...this._textStyleFromString,
      ...(null !== this.style.textStyle &&
      'object' === typeof this.style.textStyle &&
      Object.keys(this.style.textStyle)
        ? this.style.textStyle
        : this.style.typography[this.style.textStyle])
    };

    // make sure TextBox is actually applying/adhering to the width if only w is defined
    if (!this._isInlineContent) {
      if (!fontStyle.wordWrapWidth) {
        fontStyle.wordWrapWidth = this.w;
      }
    }

    this.constructor.properties.forEach(prop => {
      if ('fontStyle' !== prop && 'undefined' !== typeof this[`_${prop}`]) {
        const key = 'content' === prop ? 'text' : prop;
        fontStyle[key] = this[`_${prop}`];
      }
    });
    return fontStyle;
  }

  _toggleMarquee(contentTag) {
    if (this.marquee) {
      contentTag.alpha = 0.001;
      this._Marquee.alpha = 1;
      this._Marquee.startScrolling();
    } else {
      contentTag.alpha = 1;
      this._Marquee.alpha = 0.001;
      this._Marquee.stopScrolling();
    }
  }

  toggleMarquee() {
    const contentTag = this._isInlineContent ? this._InlineContent : this._Text;
    this._toggleMarquee(contentTag);
  }

  get announce() {
    return (
      this._announce ||
      (this._isInlineContent && this._InlineContent
        ? this._InlineContent.announce
        : this.content)
    );
  }

  set announce(announce) {
    super.announce = announce;
  }

  set smooth(v) {
    context.warn(
      'warning: value smoothing is known to cause bugs with the TextBox - patch updated values instead.'
    );
    super.smooth = v;
  }
}
