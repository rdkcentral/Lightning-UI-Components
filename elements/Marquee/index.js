import { FadeShader } from '../../textures';
import Base from '../../Base';
import styles from './Marquee.styles';
import { withExtensions } from '../../mixins';
import withStyles from '../../mixins/withThemeStyles';
import { getValidColor } from '../../Styles';

class Marquee extends Base {
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

  static get tags() {
    return ['ContentClipper', 'ContentBox', 'Content', 'ContentLoopTexture'];
  }

  static get properties() {
    return ['autoStart', 'title', 'contentTexture', 'color', 'centerAlign'];
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
    const restartScrolling =
      this.autoStart || this._scrolling || this._shouldTryScrolling;
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
      this._shouldCenter && this._centerTexture();
    }

    restartScrolling && this.startScrolling();
  }

  _update() {
    this._updateColor();
    this._updateTexture();
    this._updateShader();
    (this.autoStart || this._scrolling) && this.startScrolling();
  }

  _updateColor() {
    if (this.color) {
      this._Content.smooth = { color: getValidColor(this.color) };
    }
  }

  get _currentTexture() {
    return this._Content.text || this._Content.texture;
  }

  _updateTexture() {
    let content = {};
    if (this.contentTexture) {
      content = { texture: this.contentTexture };
    } else if (this.title) {
      content = { text: this.title };
    }

    this.patch({
      ContentClipper: {
        w: this.w + 14,
        ContentBox: {
          Content: {
            rtt: true,
            ...content
          },
          ContentLoopTexture: {}
        }
      }
    });
  }

  _updateShader() {
    this._ContentClipper.patch({
      w: this.w > 0 ? this.w + this._componentStyles.fadeW / 2 : 0,
      shader: {
        type: FadeShader,
        positionLeft: 0,
        positionRight: this._componentStyles.fadeW
      },
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
            0.5: { v: -(this._textRenderedW + this._componentStyles.offset) }
          }
        },
        {
          t: 'ContentClipper',
          p: 'shader.positionLeft',
          v: {
            sm: 0,
            0: { v: 0 },
            0.1: { v: this._componentStyles.fadeW },
            0.4: { v: this._componentStyles.fadeW },
            0.5: { v: 0 }
          }
        }
      ]
    });
  }

  _centerTexture() {
    if (this._componentStyles.shouldSmooth) {
      this._ContentBox.smooth = {
        x: (this.w - this._textRenderedW) / 2
      };
    } else {
      this._ContentBox.x = (this.w - this._textRenderedW) / 2;
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
      this._ContentLoopTexture.x =
        this._textRenderedW + this._componentStyles.offset;
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
    // using fadeW / 4 so that if something like the last character is slightly opacitied out,
    // but still visible, we don't unnecessarily scroll
    return this._textRenderedW > this.w - this._componentStyles.fadeW / 4;
  }

  _shouldCenter() {
    return (
      this._centerAlign ||
      (this._Content.text && this._Content.text.textAlign === 'center')
    );
  }

  get _textRenderedW() {
    return this._Content.renderWidth;
  }
}

export default withExtensions(withStyles(Marquee, styles));
