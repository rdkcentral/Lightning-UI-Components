/**
 * Copyright 2020 Comcast Cable Communications Management, LLC
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
import FadeShader from './FadeShader';

export default class MarqueeText extends lng.Component {
  static _template() {
    return {
      TextClipper: {
        boundsMargin: [], // overwrite boundsMargin so text won't de-render if moved offscreen
        TextBox: {
          Text: {},
          TextLoopTexture: {}
        }
      }
    };
  }

  get title() {
    return ((this._Text && this._Text.text) || {}).text;
  }

  set title(text) {
    this.patch({
      TextClipper: {
        w: this.finalW + 14,
        h: text.lineHeight + 10,
        TextBox: {
          Text: {
            rtt: true,
            text: { ...text }
          },
          TextLoopTexture: {}
        }
      }
    });
    this._Text.on('txLoaded', () => {
      if (this.autoStart) {
        this.startScrolling();
      }
    });
    this._Text.loadTexture();
    this._updateShader(this.finalW);
    this._scrolling && this.startScrolling();
  }

  set color(color) {
    this.tag('TextBox.Text').smooth = { color };
  }

  startScrolling(finalW = this.finalW) {
    if (this._textRenderedW === 0) {
      this._Text.on('txLoaded', () => {
        this.startScrolling();
      });
    }

    if (this._textRenderedW > finalW - this._fadeW) {
      this._scrolling = true;
      this._TextLoopTexture.x = this._textRenderedW + this._offset;
      this._TextLoopTexture.texture = this._Text.getTexture();
      this._updateShader(finalW);
      this._updateAnimation();
      this._scrollAnimation.start();
    } else {
      // in case the metadata width gets larger on focus and the text goes from being clipped to not
      this._TextClipper.shader = null;
      if (this._Text.text && this._Text.text.textAlign === 'center') {
        this._centerText(finalW);
      }
      this._scrolling = false;
    }
  }

  stopScrolling(finalW = this.finalW) {
    this._scrolling = false;
    if (this._scrollAnimation) {
      this._scrollAnimation.stopNow();
      this._TextLoopTexture.texture = null;
    }
    this._updateShader(finalW);
  }

  _updateShader(finalW) {
    this.stage.update();
    this._Text.loadTexture();
    this._TextClipper.patch({
      w: finalW > 0 ? finalW + this._fadeW / 2 : 0,
      shader: { type: FadeShader, positionLeft: 0, positionRight: this._fadeW },
      rtt: true
    });
  }

  _updateAnimation() {
    this._scrollAnimation && this._scrollAnimation.stopNow();
    this._scrollAnimation = this.animation({
      duration: this._textRenderedW / 50,
      delay: isNaN(this.delay) ? 1.5 : this.delay,
      repeat: isNaN(this.repeat) ? -1 : this.repeat,
      actions: [
        {
          t: 'TextBox',
          p: 'x',
          v: {
            sm: 0,
            0: { v: 0 },
            0.5: { v: -(this._textRenderedW + this._offset) }
          }
        },
        {
          t: 'TextClipper',
          p: 'shader.positionLeft',
          v: {
            sm: 0,
            0: { v: 0 },
            0.1: { v: this._fadeW },
            0.4: { v: this._fadeW },
            0.5: { v: 0 }
          }
        }
      ]
    });
  }

  _centerText(finalW) {
    this._TextBox.x = ((finalW || this.finalW) - this._textRenderedW) / 2;
  }

  get _TextClipper() {
    return this.tag('TextClipper');
  }
  get _TextBox() {
    return this.tag('TextBox');
  }
  get _Text() {
    return this.tag('Text');
  }
  get _TextLoopTexture() {
    return this.tag('TextLoopTexture');
  }
  get _offset() {
    return 32;
  }
  get _fadeW() {
    return 30;
  }
  get _textRenderedW() {
    return this._Text.renderWidth;
  }
}
