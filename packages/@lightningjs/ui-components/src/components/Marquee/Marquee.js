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

import * as styles from './Marquee.styles.js';
import { FadeShader } from '../../shaders';
import utils from '../../utils/index.js';
import Base from '../Base';

export default class Marquee extends Base {
  static _template() {
    return {
      ContentClipper: {
        boundsMargin: [], // overwrite boundsMargin so text won't de-render if moved offscreen
        ContentBox: {
          Content: {},
          ContentLoopTexture: {}
        }
      }
    };
  }

  static get __componentName() {
    return 'Marquee';
  }

  static get __themeStyle() {
    return styles;
  }

  static get tags() {
    return [
      'ContentClipper',
      {
        name: 'ContentBox',
        path: 'ContentClipper.ContentBox'
      },
      {
        name: 'Content',
        path: 'ContentClipper.ContentBox.Content'
      },
      {
        name: 'ContentLoopTexture',
        path: 'ContentClipper.ContentBox.ContentLoopTexture'
      }
    ];
  }

  static get properties() {
    return [
      'autoStart',
      'title',
      'contentTexture',
      'color',
      'centerAlign',
      'delay',
      'repeat',
      'overrideLoopX'
    ];
  }

  _construct() {
    super._construct();
    this._scrolling = false;
    this._autoStart = false;
    this._centerAlign = false;
  }

  _init() {
    this._Content.on('txLoaded', this._updateContentTexture.bind(this));
    super._init();
  }

  _updateContentTexture() {
    const restartScrolling = this._restartScrolling;
    this.stopScrolling();

    if (!this._currentTexture.h) {
      this._ContentClipper.h =
        this._currentTexture.text && this._currentTexture.text.lineHeight
          ? this._currentTexture.text.lineHeight
          : this._Content.finalH;
    }
    // in case the metadata width gets larger on focus and the text goes from being clipped to not
    if (this._shouldClip) {
      this._updateShader();
    } else {
      this._ContentClipper.shader = null;
      this._positionTexture();
    }

    restartScrolling && this.startScrolling();
    this.signal('marqueeContentLoaded');
  }

  _update() {
    this._updateColor();
    this._updateTexture();
    this._updateShader();
    this._restartScrolling && this.startScrolling();
  }

  get _restartScrolling() {
    return this.autoStart || this._scrolling || this._shouldTryScrolling;
  }

  _updateColor() {
    if (this.color) {
      this._Content.smooth = { color: utils.getValidColor(this.color) };
    }
  }

  get _currentTexture() {
    return this._Content.text || this._Content.texture || {};
  }

  _updateTexture() {
    const content = { rtt: true };
    if (this.contentTexture) {
      content.texture = this.contentTexture;
    } else if (this.title) {
      content.text = {
        ...this.style.textStyle,
        ...this.title,
        text: this.textContent
      };
    }

    this.patch({
      ContentClipper: {
        w: this.w + 14,
        ContentBox: {
          Content: content,
          ContentLoopTexture: {}
        }
      }
    });
    this.signal('marqueeContentLoaded'); // TODO: Check if this extra signal is needed since the txLoaded event should emit it already?
  }

  _updateShader() {
    this._ContentClipper.patch({
      w: this.w > 0 ? this.w + this.style.fadeW / 2 : 0,
      shader: {
        type: FadeShader,
        positionLeft: 0,
        positionRight: this.style.fadeW
      },
      rtt: true
    });
  }

  _updateAnimation() {
    this._scrollAnimation && this._scrollAnimation.stopNow();
    this._scrollAnimation = this.animation({
      duration: this._loopWidth / 50,
      delay: isNaN(this.delay) ? 1.5 : this.delay,
      repeat: isNaN(this.repeat) ? -1 : this.repeat,
      actions: [
        {
          t: 'ContentBox',
          p: 'x',
          v: {
            sm: 0,
            0: { v: 0 },
            0.5: { v: -(this._loopWidth + this.style.offset) }
          }
        },
        {
          t: 'ContentClipper',
          p: 'shader.positionLeft',
          v: {
            sm: 0,
            0: { v: 0 },
            0.1: { v: this.style.fadeW },
            0.4: { v: this.style.fadeW },
            0.5: { v: 0 }
          }
        }
      ]
    });
  }

  _positionTexture() {
    const x = this._shouldCenter() ? (this.w - this._textRenderedW) / 2 : 0;
    if (this.style.shouldSmooth) {
      this._ContentBox.smooth = { x };
    } else {
      this._ContentBox.x = x;
    }
  }

  startScrolling() {
    this._Content.off('txLoaded', this.startScrolling.bind(this));

    this._shouldTryScrolling = true;
    if (this._textRenderedW === 0) {
      // can switch to .once in LUI5.0 requiring higher Lightning Core version
      this._Content.on('txLoaded', this.startScrolling.bind(this));
    }
    if (this._shouldClip) {
      this._scrolling = true;
      this._ContentLoopTexture.x = this._loopWidth + this.style.offset;
      this._ContentLoopTexture.texture = this._Content.getTexture();
      this._updateAnimation();
      this._scrollAnimation.start();
    } else {
      this._scrolling = false;
    }
  }

  stopScrolling() {
    this._shouldTryScrolling = false;
    this._scrolling = false;
    if (this._scrollAnimation) {
      this._scrollAnimation.stopNow();
      this._ContentLoopTexture.texture = null;
    }
  }

  get _shouldClip() {
    // using fadeW / 4 so that if something like the last character is slightly
    // faded out but still visible, we don't unnecessarily scroll
    return this._textRenderedW > this.w - this.style.fadeW / 4;
  }

  _shouldCenter() {
    return (
      this._centerAlign ||
      (this._Content.text && this._Content.text.textAlign === 'center')
    );
  }

  _setAutoStart(autoStart) {
    // if the component is changed from  autoStarting to not,
    // cancel the current scrolling behavior,
    // otherwise the component can continue to scroll from its previous state
    if (this.autoStart && !autoStart) {
      // Calling this ensures that the animation is stopped, and the texture
      // is properly positioned if it needs to be centered. Otherwise, if it
      // is un-clipped text, it is positioned at 0.
      this._updateContentTexture();
    }
    return autoStart;
  }

  _setCenterAlign(center) {
    // The Content texture needs to be updated if centerAlign
    // is changed, but we need the new value first.
    this._centerAlign = center;
    this._updateContentTexture();
    return center;
  }

  get textContent() {
    return this.title && this.title.text ? this.title.text : this.title;
  }

  get _loopWidth() {
    return this.overrideLoopX || this._textRenderedW;
  }

  get _textRenderedW() {
    return this._Content.renderWidth;
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    return this._announce || (this.title && this.title.text);
  }
}
