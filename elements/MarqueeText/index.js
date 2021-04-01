import lng from '@lightningjs/core';
import FadeShader from './FadeShader';

export default class MarqueeText extends lng.Component {
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

  _construct() {
    this._shouldSmooth = false;
    this._contentTexture = {};
    this._scrolling = false;
    this._centerAlign = false;
    this._autoStart = false;
  }

  _init() {
    this._w = this.w;

    this._Content.on('txLoaded', () => {
      if (this._contentTexture.h === undefined) {
        this._ContentClipper.h =
          this._contentTexture.text && this._contentTexture.text.lineHeight
            ? this._contentTexture.text.lineHeight
            : this._Content.finalH;
      }

      // in case the metadata width gets larger on focus and the text goes from being clipped to not
      if (this._shouldClip) {
        this._updateShader();
      } else {
        this._ContentClipper.shader = null;
        this._shouldCenter && this._centerTexture();
      }

      (this.autoStart || this._scrolling) && this.startScrolling();
    });

    this._update();
  }

  _update() {
    this._updateColor();
    this._updateTexture();
    this._updateShader();
    (this.autoStart || this._scrolling) && this.startScrolling();
  }

  _updateColor() {
    if (this._color) {
      this._Content.smooth = { color: this._color };
    }
  }

  _updateTexture() {
    this.patch({
      ContentClipper: {
        w: this._w + 14,
        ContentBox: {
          Content: {
            rtt: true,
            ...this._contentTexture
          },
          ContentLoopTexture: {}
        }
      }
    });

    this._Content.loadTexture();
  }

  _updateShader() {
    this.stage.update();
    this._Content.loadTexture();
    this._ContentClipper.patch({
      w: this._w > 0 ? this._w + this._fadeW / 2 : 0,
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
          t: 'ContentBox',
          p: 'x',
          v: {
            sm: 0,
            0: { v: 0 },
            0.5: { v: -(this._textRenderedW + this._offset) }
          }
        },
        {
          t: 'ContentClipper',
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

  _centerTexture() {
    if (this.shouldSmooth) {
      this._ContentBox.smooth = {
        x: (this._w - this._textRenderedW) / 2
      };
    } else {
      this._ContentBox.x = (this._w - this._textRenderedW) / 2;
    }
  }

  startScrolling() {
    if (this._textRenderedW === 0) {
      this._Content.on('txLoaded', () => {
        this.startScrolling();
      });
    }

    if (this._shouldClip) {
      this._scrolling = true;
      this._ContentLoopTexture.x = this._textRenderedW + this._offset;
      this._ContentLoopTexture.texture = this._Content.getTexture();
      this._updateAnimation();
      this._scrollAnimation.start();
    } else {
      this._scrolling = false;
    }
  }

  stopScrolling() {
    this._scrolling = false;
    if (this._scrollAnimation) {
      this._scrollAnimation.stopNow();
      this._ContentLoopTexture.texture = null;
    }
  }

  get _shouldClip() {
    // using fadeW / 4 so that if something like the last character is slightly opacitied out,
    // but still visible, we don't unnecessarily scroll
    return this._textRenderedW > this._w - this._fadeW / 4;
  }

  get _shouldCenter() {
    return (
      this._centerAlign ||
      (this._Content.text && this._Content.text.textAlign === 'center')
    );
  }

  set shouldSmooth(smooth) {
    if (this._shouldSmooth !== smooth) {
      this._shouldSmooth = smooth;
    }
  }

  get shouldSmooth() {
    return this._shouldSmooth;
  }

  set autoStart(autoStart) {
    if (this._autoStart !== autoStart) {
      this._autoStart = autoStart;
      this._update();
    }
  }

  get autoStart() {
    return this._autoStart;
  }

  set title(text) {
    this._contentTexture = this._title = { text };
    this._update();
  }

  get title() {
    return this._title && this._title.text && this._title.text.text;
  }

  set centerAlign(centerAlign) {
    if (this._centerAlign !== centerAlign) {
      this._centerAlign = centerAlign;
      this._update();
    }
  }

  get centerAlign() {
    return this._centerAlign;
  }

  set contentTexture(texture) {
    this._contentTexture = { texture };
    this._update();
  }

  get contentTexture() {
    return this._contentTexture.texture;
  }

  set color(color) {
    if (this._color !== color) {
      this._color = color;
      this._update();
    }
  }

  get color() {
    return this._color;
  }

  set w(w) {
    if (this._w !== w) {
      this._w = w;
      this._update();
    }
  }

  get w() {
    return this._w;
  }

  get _ContentClipper() {
    return this.tag('ContentClipper');
  }
  get _ContentBox() {
    return this.tag('ContentBox');
  }
  get _Content() {
    return this.tag('Content');
  }
  get _ContentLoopTexture() {
    return this.tag('ContentLoopTexture');
  }
  get _offset() {
    return 32;
  }
  get _fadeW() {
    return 100;
  }
  get _textRenderedW() {
    return this._Content.renderWidth;
  }
}
