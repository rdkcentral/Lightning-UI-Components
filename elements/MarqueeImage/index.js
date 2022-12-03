import lng from '@lightningjs/core';
import { FadeShader } from '../../textures';

export default class MarqueeImage extends lng.Component {
  static _template() {
    return {
      ImageClipper: {
        boundsMargin: [], // overwrite boundsMargin so text won't de-render if moved offscreen
        ImageBox: {
          Image: {},
          ImageLoopTexture: {}
        }
      }
    };
  }

  // image object
  /**
   * @param {{ lineHeight: number; }} image
   */
  set title(image) {
    this.patch({
      ImageClipper: {
        w: this.finalW + 14,
        h: image.lineHeight + 10,
        ImageBox: {
          Image: {
            rtt: true,
            ...image
          },
          ImageLoopTexture: {}
        }
      }
    });
    this._Image.on('txLoaded', () => {
      if (this.autoStart) {
        this.startScrolling();
      }
    });
    this._Image.loadTexture();
    this._updateShader(this.finalW);
    this._scrolling && this.startScrolling();
  }

  startScrolling(finalW = this.finalW) {
    if (this._imageRenderedW === 0) {
      this._Image.on('txLoaded', () => {
        this.startScrolling();
      });
    }

    if (this._imageRenderedW > finalW - this._fadeW) {
      this._scrolling = true;
      this._ImageLoopTexture.x = this._imageRenderedW + this._offset;
      this._ImageLoopTexture.texture = this._Image.getTexture();
      this._updateShader(finalW);
      this._updateAnimation();
      this._scrollAnimation.start();
    } else {
      // in case the metadata width gets larger on focus and the text goes from being clipped to not
      this._ImageClipper.shader = null;
      this._scrolling = false;
    }
  }

  stopScrolling(finalW = this.finalW) {
    this._scrolling = false;
    if (this._scrollAnimation) {
      this._scrollAnimation.stopNow();
      this._ImageLoopTexture.texture = null;
    }
    this._updateShader(finalW);
  }

  _updateShader(finalW) {
    this.stage.update();
    this._Image.loadTexture();
    this._ImageClipper.patch({
      w: finalW > 0 ? finalW + this._fadeW / 2 : 0,
      shader: { type: FadeShader, positionLeft: this._fadeW / 2, positionRight: this._fadeW },
      rtt: true
    });
  }

  _updateAnimation() {
    this._scrollAnimation && this._scrollAnimation.stopNow();
    this._scrollAnimation = this.animation({
      duration: this._imageRenderedW / 50,
      delay: isNaN(this.delay) ? 1.5 : this.delay,
      repeat: isNaN(this.repeat) ? -1 : this.repeat,
      actions: [
        {
          t: 'ImageBox',
          p: 'x',
          v: {
            sm: 0,
            0: { v: 0 },
            1: { v: -(this._imageRenderedW + this._offset) }
          }
        },
      ]
    });
  }

  get _ImageClipper() {
    return this.tag('ImageClipper');
  }
  get _ImageBox() {
    return this.tag('ImageBox');
  }
  get _Image() {
    return this.tag('Image');
  }
  get _ImageLoopTexture() {
    return this.tag('ImageLoopTexture');
  }
  get _offset() {
    return 0;
  }
  get _fadeW() {
    return 30;
  }
  get _imageRenderedW() {
    return this._Image.renderWidth;
  }
}
