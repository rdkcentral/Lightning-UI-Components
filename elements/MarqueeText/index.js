import { FadeShader } from '../../textures';
import Base from '../Base';

export default class MarqueeText extends Base {
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
  static get tags() {
    return ['ContentClipper', 'ContentBox', 'Content', 'ContentLoopTexture'];
  }

  static get properties() {
    return [
      'shouldSmooth',
      'autoStart',
      'centerAlign',
      'color',
      'title',
      'contentTexture'
    ];
  }
  _construct() {
    super._construct();
    this._shouldSmooth = false;
    this._scrolling = false;
    this._centerAlign = false;
    this._autoStart = false;
    this._fadeW = 100;
    this._offset = 32;
  }

  _init() {
    super._init();
    this._Content.on('txLoaded', this._updateContentTexture.bind(this));
    this._update();
  }
  _detach() {
    this._Content.off('txLoaded', this._updateContentTexture.bind(this));
  }
  _updateContentTexture() {
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
        w: this.w + 14,
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
      w: this.w > 0 ? this.w + this._fadeW / 2 : 0,
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
        x: (this.w - this._textRenderedW) / 2
      };
    } else {
      this._ContentBox.x = (this.w - this._textRenderedW) / 2;
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
    return this._textRenderedW > this.w - this._fadeW / 4;
  }

  get _shouldCenter() {
    return (
      this._centerAlign ||
      (this._Content.text && this._Content.text.textAlign === 'center')
    );
  }

  _setContentTexture(texture) {
    this._contentTexture = { texture };
    return this._contentTexture;
  }

  _setTitle(text) {
    this._title = { text };
    this._contentTexture = this._title;
    return this._title.text.text;
  }

  get _textRenderedW() {
    return this._Content.renderWidth;
  }
}
