import lng from 'wpe-lightning';
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

  get title() {
    return ((this._Content && this._Content.text) || {}).text;
  }

  set title(text) {
    this._updateTexture({ text }, text.lineHeight);
  }

  set centerAlign(centerAlign) {
    this._centerAlign = centerAlign;
  }

  get centerAlign() {
    return this._centerAlign;
  }

  set contentTexture(texture) {
    this._updateTexture({ texture });
  }

  get contentTexture() {
    return this._Content.getTexture();
  }

  _updateTexture(texture, h) {
    this._ContentClipper.removeAllListeners();
    this._Content.on('txLoaded', () => {
      if (h === undefined) {
        this._ContentClipper.h = this._Content.finalH;
      }
      this.autoStart && this.startScrolling();
    });

    this.patch({
      ContentClipper: {
        w: this.finalW + 14,
        ContentBox: {
          Content: {
            rtt: true,
            ...texture
          },
          ContentLoopTexture: {}
        }
      }
    });

    if (h !== undefined) {
      this._ContentClipper.h = h;
    }

    this._Content.loadTexture();
    this._updateShader(this.finalW);
    this._scrolling && this.startScrolling();
  }

  set color(color) {
    this._Content.smooth = { color };
  }

  startScrolling(finalW = this.finalW) {
    if (this._textRenderedW === 0) {
      this._Content.on('txLoaded', () => {
        this.startScrolling();
      });
    }

    if (this._textRenderedW > finalW - this._fadeW) {
      this._scrolling = true;
      this._ContentLoopTexture.x = this._textRenderedW + this._offset;
      this._ContentLoopTexture.texture = this._Content.getTexture();
      this._updateShader(finalW);
      this._updateAnimation();
      this._scrollAnimation.start();
    } else {
      // in case the metadata width gets larger on focus and the text goes from being clipped to not
      this._ContentClipper.shader = null;
      if (
        this._centerAlign ||
        (this._Content.text && this._Content.text.textAlign === 'center')
      ) {
        this._centerTexture(finalW);
      }
      this._scrolling = false;
    }
  }

  stopScrolling(finalW = this.finalW) {
    this._scrolling = false;
    if (this._scrollAnimation) {
      this._scrollAnimation.stopNow();
      this._ContentLoopTexture.texture = null;
    }
    this._updateShader(finalW);
  }

  _updateShader(finalW) {
    this.stage.update();
    this._Content.loadTexture();
    this._ContentClipper.patch({
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

  _centerTexture(finalW) {
    this._ContentBox.x = ((finalW || this.finalW) - this._textRenderedW) / 2;
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
    return 30;
  }
  get _textRenderedW() {
    return this._Content.renderWidth;
  }
}
