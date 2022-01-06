import lng from '@lightningjs/core';
import Base from '../Base';
import { getValidColor } from '../../Styles/Colors';
import style from './CardArtwork.styles';
import withStyles from '../../mixins/withStyles';

class CardArtwork extends withStyles(Base, style) {
  static get properties() {
    return ['src', 'circleImage', 'imageSize', 'blur', 'blurBackgroundColor'];
  }
  static get tags() {
    return ['Image', 'Item', 'Blur'];
  }
  static _template() {
    return {
      w: w => w,
      h: h => h,
      Item: {
        Image: {
          Blur: {
            content: {
              Background: {
                color: {}
              }
            }
          }
        }
      }
    };
  }

  _construct() {
    super._construct();
    this._circleImage = false;
    this.padding = this.styles.padding;
    this._blurBackgroundColor = this.styles.blurBackgroundColor;
    this._blurBackground = false;
  }

  _init() {
    this._update();
    super._init();
  }
  _update() {
    this._updateImage();
    super._update();
  }

  _setBlurBackgroundColor(blurBackgroundColor) {
    return getValidColor(blurBackgroundColor) || this.blurBackgroundColor;
  }

  _updateRadius() {
    if (this._radius) {
      if (this._blur || this._Blur) {
        this._Blur.patch({
          shader: {
            type: lng.shaders.RoundedRectangle,
            radius: this._radius * 2
          }
        });
      }
    }
  }
  _updateBlur() {
    this._Blur.content.Background.color = this.blurBackgroundColor;
    const alpha = this._blur > 0 ? 1 : 0;
    const amount = this._blur;
    if (this._blur || this._Blur) {
      this._patchBlur();
      if (this._smooth) {
        this._Blur.smooth = { alpha, amount };
      } else {
        this._Blur.patch({ alpha, amount });
      }
    }
  }

  _patchBlur() {
    this._Item.patch({
      Blur: {
        type: lng.components.FastBlurComponent,
        w: this.w,
        h: this.h,
        rtt: true,
        zIndex: 2,
        amount: this.styles.blur,
        content: {
          Image: {
            h: this.h,
            w: this.w,
            texture: this._Image.getTexture()
          },
          Background: {
            h: this.h,
            w: this.w,
            rect: true,
            color: this.blurBackgroundColor
          }
        }
      }
    });
  }

  _updateImage() {
    if (this._circleImage) {
      if (!this.imageSize) {
        this._imageSize = this.w > this.h ? this.h : this.w;
      }
      if (this.blurBackground) {
        var updatedImageSize = this.imageSize - this.padding;
      } else {
        updatedImageSize = this.imageSize;
      }

      this._Image.patch({
        x: this.w / 2,
        y: this.h / 2,
        h: updatedImageSize,
        w: updatedImageSize,
        zIndex: 3,
        mount: 0.5,
        shader: {
          type: lng.shaders.RoundedRectangle,
          radius: updatedImageSize / 2
        },
        rtt: true,
        src: this.src,
        Texture: {
          x: updatedImageSize / 2,
          y: updatedImageSize / 2,
          mount: 0.5,
          scale: 0.6,
          texture: {
            src: this.src,
            type: lng.textures.ImageTexture,
            resizeMode: {
              type: 'cover',
              w: this.w,
              h: this.w
            }
          }
        }
      });
      if (this.blurBackground) {
        this._updateBlur();
        this._patchBlur();
      }
    }
    if (!this._circleImage) {
      this._Image.patch({
        src: this.src,
        w: this.w,
        h: this.h,
        texture: {
          type: lng.textures.ImageTexture,
          src: this._src,
          resizeMode: { type: 'cover', w: this.w, h: this.h }
        }
      });
    }
  }
}

export default CardArtwork;
