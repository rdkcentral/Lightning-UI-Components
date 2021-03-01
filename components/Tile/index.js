import lng from '@lightningjs/core';
import FocusRing from '../FocusRing';
import withStyles from '../../mixins/withStyles';
import blackBackground from '../Styles/black_background_tile';
import { withUpdates, withTags, withHandleKey } from '../../mixins';

export const styles = theme => ({
  radius: theme.border.radius.medium,
  shadow: theme.materials.luminance,
  blur: 0,
  src: blackBackground,
  focusring: function ({ w, h, radius }) {
    return {
      type: FocusRing,
      w,
      h,
      radius: radius + 2,
      size: theme.spacing(0.5),
      zIndex: 1
    };
  },
  unfocused: {
    scale: () => 1,
    focusring: { alpha: 0 },
    shadow: { alpha: 0 }
  },
  focused: {
    scale: theme.getFocusScale,
    focusring: { alpha: 1 },
    shadow: { alpha: 1 }
  }
});

class Tile extends withUpdates(withTags(withHandleKey(lng.Component))) {
  static _template() {
    return {
      Item: {
        Image: {}
      }
    };
  }

  static get tags() {
    return ['Blur', 'DropShadow', 'FocusRing', 'Item', 'Image'];
  }

  static get properties() {
    return ['radius', 'imgRadius', 'blur', 'src', 'fallbackSrc'];
  }

  _construct() {
    this._radius = this.styles.radius;
    this._src = this._fallbackSrc = this.styles.src;
    this._getFocusScale = this.styles.focused.scale;
    this._getUnfocusScale = this.styles.unfocused.scale;
    this._blur = this.styles.blur;
    super._construct && super._construct();
  }

  _init() {
    this._Image.on('txError', () => {
      this.src = this.src !== this.fallbackSrc ? this.fallbackSrc : null;
      this._update();
    });
  }

  _update() {
    this._whenEnabled.then(() => {
      this._Item.w = this.w;
      this._Item.h = this.h;
      this._updateImage();
      this._updateBlur();
      this._updateRadius();
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

  _updateDropShadow() {
    if (this.hasFocus() || this._shadow) {
      if (!this._shadow) {
        this._shadow = this.styles.shadow({
          w: this.w,
          h: this.h,
          texture: this._Image.getTexture(),
          radius: this.radius
        });
      }
      let DropShadow = this._shadow;
      const style = this.hasFocus()
        ? this.styles.focused.shadow
        : this.styles.unfocused.shadow;
      if (this._smooth) {
        DropShadow.smooth = style;
      } else {
        DropShadow = { ...DropShadow, ...style };
      }
      this.patch({ DropShadow });
    }
  }

  _updateFocusRing() {
    if (this.hasFocus() || this._focusRing) {
      if (!this._focusRing) {
        this._focusRing = this.styles.focusring({
          w: this.w,
          h: this.h,
          radius: this._radius + 2
        });
      }
      let FocusRingComponent = this._focusRing;
      const style = this.hasFocus()
        ? this.styles.focused.focusring
        : this.styles.unfocused.focusring;
      if (this._smooth) {
        FocusRingComponent.smooth = style;
      } else {
        FocusRingComponent = { ...FocusRingComponent, ...style };
      }
      this.patch({ FocusRing: FocusRingComponent });

      if (this.hasFocus()) {
        this._FocusRing.startAnimation();
      } else {
        this._FocusRing.stopAnimation();
      }
    }
  }

  _updateScale() {
    const scale = this.hasFocus()
      ? this._getFocusScale(this.w)
      : this._getUnfocusScale(this.w);
    if (this._smooth) {
      this._Item.smooth = { scale };
      if (this._FocusRing) this._FocusRing.smooth = { scale };
    } else {
      this._Item.scale = scale;
      if (this._FocusRing) this._FocusRing.scale = scale;
    }
  }

  set shadow(shadow) {
    this._shadow = shadow;
    this._requestUpdateDebounce();
  }

  _focus() {
    if (this._smooth === undefined) this._smooth = true;
    this._update();
  }

  _unfocus() {
    this._update();
  }
}

export default withStyles(Tile, styles);
