import lng from '@lightningjs/core';
import Tile from '../Tile';
import withStyles from '../../mixins/withStyles';
import { getValidColor } from '../Styles/Colors';

export const styles = theme => ({
  blurBackgroundColor: theme.palette.getHexColor(
    theme.palette.grey[90],
    theme.palette.opacity[3]
  ),
  blur: 4,
  spacing: theme.spacing(2)
});

class TileCircle extends Tile {
  _construct() {
    super._construct();
    this._blurBackgroundColor = this.styles.blurBackgroundColor;
    this._spacing = this.styles.spacing;
  }

  // override Tile blur since this component should not have a custom blur
  set blur(blur) {}

  set blurBackgroundColor(color) {
    const validColor = getValidColor(color);
    if (validColor && validColor !== this._blurBackgroundColor) {
      this._blurBackgroundColor = validColor;
      this._update();
    }
  }

  get blurBackgroundColor() {
    return this._blurBackgroundColor;
  }

  _updateRadius() {
    if (this._radius) {
      if (this._blur || this._Blur) {
        this._Blur.patch({
          shader: {
            type: lng.shaders.RoundedRectangle,
            radius: this._radius
          }
        });
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
    const imageSize = this.h - this._spacing;
    this._Image.patch({
      x: this.w / 2,
      y: this.h / 2,
      zIndex: 3,
      h: imageSize,
      w: imageSize,
      mount: 0.5,
      shader: {
        type: lng.shaders.RoundedRectangle,
        radius: imageSize / 2
      },
      rtt: true,
      Texture: {
        x: imageSize / 2,
        y: imageSize / 2,
        mount: 0.5,
        scale: 0.6,
        texture: {
          type: lng.textures.ImageTexture,
          src: this._src,
          resizeMode: { type: 'cover' }
        }
      }
    });
  }
}

export default withStyles(TileCircle, styles);
