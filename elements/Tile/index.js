import lng from '@lightningjs/core';
import styles from './Tile.styles';
import Base from '../../Base';
import { withExtensions } from '../../mixins';
import withStyles from '../../mixins/withThemeStyles';
import Gradient from '../Gradient';
import Pool from '../../utils/pool';

class Tile extends Base {
  static _template() {
    return {
      Item: {
        Image: {}
      }
    };
  }

  static get name() {
    return 'Tile';
  }

  static get properties() {
    return ['src', 'focusSrc', 'fallbackSrc'];
  }

  static get tags() {
    return [
      { name: 'Blur', path: 'Item.Blur' },
      'DropShadow',
      'FocusRing',
      'Item',
      'Image',
      'FocusImage',
      'Gradient'
    ];
  }

  static get __componentName() {
    return 'Tile';
  }

  get _shouldShowGradient() {
    if (this._componentStyles.persistGradient) {
      return true;
    } else if (this._componentStyles.focusGradient && this.hasFocus()) {
      return true;
    } else {
      return false;
    }
  }

  _update() {
    this._Item.w = this.finalW;
    this._Item.h = this.finalH;
    this._updateImage();
    this._updateBlur();
    this._updateRadius();
    this._updateGradient();
    this._updateScale();
  }

  _updateImage() {
    if (this._componentStyles.blur > 1) {
      const _Image = this._Item.childList.getByRef('Blur');
      if (_Image) {
        this._Item.childList.remove(_Image);
      }
    } else {
      this._Image.patch({
        rtt: true,
        zIndex: 2,
        w: this.finalW,
        h: this.finalH,
        texture: {
          type: lng.textures.ImageTexture,
          radius: this._componentStyles.radius,
          src: this._src,
          resizeMode: { type: 'cover', w: this.w, h: this.h }
        }
      });
    }
  }

  _updateBlur() {
    if (this._componentStyles.blur > 0) {
      const alpha = this._componentStyles.blur > 0 ? 1 : 0;
      const amount = this._componentStyles.blur;
      this._Item.patch({
        Blur: {
          alpha,
          amount,
          type: lng.components.FastBlurComponent,
          w: this.w,
          h: this.h,
          rtt: true,
          zIndex: 3,
          content: {
            Image: {
              w: this._Image.w,
              h: this._Image.h,
              texture: {
                type: lng.textures.ImageTexture,
                radius: this._componentStyles.radius,
                src: this._src,
                resizeMode: { type: 'cover', w: this.w, h: this.h }
              }
            }
          }
        }
      });
    } else if (this._Blur) {
      const _Blur = this._Item.childList.getByRef('Blur');
      this._Item.childList.remove(_Blur);
    }
  }

  _updateRadius() {
    if (this._componentStyles.radius > 0) {
      this._Item.patch({
        shader: {
          type: lng.shaders.RoundedRectangle,
          radius: this._componentStyles.radius
        }
      });
    } else {
      this._Item.patch({
        shader: null
      });
    }
  }

  _updateGradient() {
    // TODO: Remove gradient if changed
    if (this._shouldShowGradient) {
      const gradientParams = {
        x: -1,
        y: 1,
        w: this.w + 2,
        h: this.h + 1,
        radius: this._componentStyles.radius,
        zIndex: 3
      };
      if (this._componentStyles.gradientColor) {
        gradientParams.gradientColor = this._componentStyles.gradientColor;
      }
      if (!this._Gradient) {
        this._Item.patch({ Gradient: { type: Gradient, ...gradientParams } });
      } else {
        this._Gradient.patch(gradientParams);
      }
    }

    if (this._Gradient) {
      const alpha = Number(this._shouldShowGradient);
      if (this._smooth) {
        this._Gradient.smooth = { alpha };
      } else {
        this._Gradient.alpha = alpha;
      }
    }
  }

  _updateScale() {
    const scale = this.hasFocus()
      ? this._componentStyles.getFocusScale(this.w, this.h)
      : this._componentStyles.getUnfocusScale(this.w, this.h);
    if (this._smooth) {
      this._Item.smooth = { scale };
      if (this._FocusRing) this._FocusRing.smooth = { scale };
      if (this._DropShadow) this._DropShadow.smooth = { scale };
    } else {
      this._Item.scale = scale;
      if (this._FocusRing) this._FocusRing.scale = scale;

      if (this._DropShadow) this._DropShadow.scale = scale;
    }
  }
}

export default withExtensions(withStyles(Tile, styles));
