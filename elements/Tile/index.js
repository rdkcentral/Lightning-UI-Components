import lng from '@lightningjs/core';
import FocusRing from '../FocusRing';
import withStyles from '../../mixins/withStyles';
import blackBackground from '../../Styles/black_background_tile';
import Base from '../Base';
import Gradient from '../Gradient';

export const styles = theme => ({
  shouldAnimate: true,
  radius: theme.border.radius.medium,
  shadow: theme.materials.shadow,
  blur: 0,
  src: blackBackground,
  focusringType: FocusRing,
  focusring: function ({ w, h, radius, color }) {
    return {
      w,
      h,
      radius: radius + 2,
      color,
      size: theme.spacing(0.5),
      zIndex: 1
    };
  },
  unfocused: {
    focusring: { alpha: 0 },
    shadow: { alpha: 0 }
  },
  focused: {
    focusring: { alpha: 1 },
    shadow: { alpha: 1 }
  }
});

class Tile extends Base {
  static _template() {
    return {
      Item: {
        Image: {}
      }
    };
  }

  static get tags() {
    return [
      'Blur',
      'DropShadow',
      'FocusRing',
      'Item',
      'Image',
      'FocusImage',
      'Gradient'
    ];
  }

  static get properties() {
    return [
      'radius',
      'imgRadius',
      'focusImgRadius',
      'blur',
      'src',
      'focusSrc',
      'fallbackSrc',
      'focusRingColor',
      'gradientColor',
      'focusGradient',
      'persistGradient'
    ];
  }

  _construct() {
    this._radius = this.styles.radius;
    this._shouldAnimate = this.styles.shouldAnimate;
    this._src = this._fallbackSrc = this.styles.src;
    this._blur = this.styles.blur;
    this._createShadow = this.styles.shadow;
    this._createFocusRing = this.styles.focusring;
    this._focusRingColor = this.styles.focusRingColor;
    this._focusRingType = this.styles.focusringType;
    this._focusedStyle = this.styles.focused;
    this._unfocusedStyle = this.styles.unfocused;
    super._construct && super._construct();
  }

  _init() {
    this._Image.on('txError', () => {
      this.src = this.src !== this.fallbackSrc ? this.fallbackSrc : null;
      if (this.imgRadius === 0 && this.radius) {
        this.imgRadius = this.radius;
      }
      this._update();
    });
    super._init();
  }

  _update() {
    this._whenEnabled.then(() => {
      this._Item.w = this.w;
      this._Item.h = this.h;
      this._updateImage();
      this._updateFocusImage();
      this._updateBlur();
      this._updateRadius();
      this._updateGradient();
      this._updateDropShadow();
      this._updateFocusRing();
      this._updateScale();
    });
  }

  _updateImage() {
    this._Image.patch({
      rtt: true,
      zIndex: 2,
      w: this.w,
      h: this.h,
      texture: {
        type: lng.textures.ImageTexture,
        src: this._src,
        resizeMode: { type: 'cover', w: this.w, h: this.h }
      }
    });
  }

  _updateFocusImage() {
    if (this._focusSrc && (this.hasFocus() || this._FocusImage)) {
      if (!this._FocusImage) {
        this._Item.patch({
          FocusImage: {
            alpha: 0.001,
            firstLoad: true,
            rtt: true,
            zIndex: 2,
            w: this.w,
            h: this.h,
            texture: {
              type: lng.textures.ImageTexture,
              src: this._focusSrc,
              resizeMode: { type: 'cover', w: this.w, h: this.h }
            }
          }
        });
        this._FocusImage.on('txLoaded', () => {
          this._FocusImage.off('txLoaded');
          this._FocusImage.firstLoad = false;
          this._updateFocusImageAlpha();
        });
      } else if (!this._FocusImage.firstLoad) {
        this._updateFocusImageAlpha();
      }
    }
  }

  _updateFocusImageAlpha() {
    const focusImageAlpha = this.hasFocus() ? 1 : 0;
    const imageAlpha = Number(!focusImageAlpha);
    if (this._smooth) {
      this._FocusImage.smooth = { alpha: focusImageAlpha };
      this._Image.smooth = { alpha: imageAlpha };
    } else {
      this._FocusImage.alpha = focusImageAlpha;
      this._Image.alpha = imageAlpha;
    }
  }

  _patchBlur() {
    this._Item.patch({
      Blur: {
        type: lng.components.FastBlurComponent,
        w: this.w,
        h: this.h,
        rtt: true,
        zIndex: 3,
        content: {
          Image: {
            w: this._Image.w,
            h: this._Image.h,
            texture: this._Image.getTexture()
          }
        }
      }
    });
  }

  _updateBlur() {
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

  _updateRadius() {
    if (this._radius) {
      if (this._imgRadius === undefined || this._imgRadius !== 0) {
        this._Image.patch({
          shader: {
            type: lng.shaders.RoundedRectangle,
            radius: this._imgRadius || this._radius
          }
        });
      }
      if (
        this._FocusImage &&
        (this._focusImgRadius === undefined || this._focusImgRadius !== 0)
      ) {
        this._FocusImage.patch({
          shader: {
            type: lng.shaders.RoundedRectangle,
            radius: this._focusImgRadius || this._radius
          }
        });
      }
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

  _updateGradient() {
    if (this._shouldShowGradient) {
      const gradientParams = {
        x: -1,
        w: this.w + 2,
        h: this.h + 1,
        radius: this.radius,
        zIndex: 3
      };
      if (this._gradientColor) {
        gradientParams.gradientColor = this._gradientColor;
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

  _updateDropShadow() {
    if (this.hasFocus() || this._shadow) {
      if (!this._shadow) {
        this._shadow = this._createShadow({
          w: this.w,
          h: this.h,
          borderRadius: this.radius
        });
      }
      let DropShadow = this._shadow;
      const style = this.hasFocus()
        ? this._focusedStyle.shadow
        : this._unfocusedStyle.shadow;
      if (this._smooth) {
        DropShadow.smooth = style;
      } else {
        DropShadow = { ...DropShadow, ...style };
      }
      this.patch({ DropShadow });
    }
  }

  vibrantCallback() {
    this.focusRingColor = this.vibrantFocusRing;
    this._update();
  }

  _updateFocusRing() {
    if (this.hasFocus() || this._FocusRing) {
      const focusRingPatch = this._createFocusRing({
        w: this.w,
        h: this.h,
        radius: this._radius,
        color: this.focusRingColor
      });

      if (!this._FocusRing) {
        focusRingPatch.type = this._focusRingType;
      }
      this.patch({ FocusRing: focusRingPatch });

      const style = this.hasFocus()
        ? this._focusedStyle.focusring
        : this._unfocusedStyle.focusring;
      if (this._smooth) {
        this._FocusRing.smooth = style;
      } else {
        this._FocusRing.patch(style);
      }

      if (this.hasFocus() && this._shouldAnimate) {
        this._FocusRing.startAnimation();
      } else {
        this._FocusRing.stopAnimation();
      }
    }
  }

  _updateScale() {
    const scale = this.hasFocus()
      ? this._getFocusScale(this.w, this.h)
      : this._getUnfocusScale(this.w, this.h);
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

  get _shouldShowGradient() {
    if (this.persistGradient) {
      return true;
    } else if (this.focusGradient && this.hasFocus()) {
      return true;
    } else {
      return false;
    }
  }

  set shadow(shadow) {
    this._shadow = shadow;
    this._requestUpdateDebounce();
  }
}

export default withStyles(Tile, styles);
