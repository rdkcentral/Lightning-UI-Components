import lng from 'wpe-lightning';
import FocusRing from '../FocusRing';
import withStyles from '../../mixins/withStyles';
import blackBackground from '../Styles/black_background_tile';
import withHandleKey from '../../mixins/withHandleKey';

export const styles = theme => ({
  radius: theme.border.radius.small,
  shadow: theme.materials.luminance,
  blur: 0,
  src: blackBackground,
  focusring: function ({ w, h, radius }) {
    return {
      type: FocusRing,
      w,
      h,
      radius,
      size: theme.spacing(1),
      focusRingAnimation: theme.animations.gradient,
      zIndex: -1
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

class Tile extends withHandleKey(lng.Component) {
  static _template() {
    return {
      Item: {
        Image: {}
      }
    };
  }

  _construct() {
    this._whenEnabled = new Promise(
      resolve => (this._enable = resolve),
      console.error
    );
    this._radius = this.styles.radius;
    this._src = this.styles.src;
    this._getFocusScale = this.styles.focused.scale;
    this._getUnfocusScale = this.styles.unfocused.scale;
    this._blur = this.styles.blur;
  }

  _init() {
    this._update();
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
      src: this._src,
      w: this.w,
      h: this.h,
      resizeMode: { type: 'cover' }
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
            texture: this._Image.getTexture()
          }
        }
      }
    });
  }

  _updateBlur() {
    let amount = this._blur;
    this._patchBlur();
    if (this._smooth) {
      this._Blur.smooth = { amount };
    } else {
      this._Blur.amount = amount;
    }
  }

  _updateRadius() {
    this._Item.patch({
      shader: {
        type: lng.shaders.RoundedRectangle,
        radius: this._radius
      }
    });
  }

  _updateDropShadow() {
    if (!this._shadow) {
      this._shadow = this.styles.shadow({
        w: this.w,
        h: this.h,
        texture: this._Image.getTexture()
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

  _updateFocusRing() {
    if (!this._focusRing) {
      this._focusRing = this.styles.focusring({
        w: this.w,
        h: this.h,
        radius: this._radius
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
  }

  _updateScale() {
    const scale = this.hasFocus()
      ? this._getFocusScale(this.w)
      : this._getUnfocusScale(this.w);
    if (this._smooth) {
      this._Item.smooth = { scale };
      this._FocusRing.smooth = { scale };
    } else {
      this._Item.scale = scale;
      this._FocusRing.scale = scale;
    }
  }

  set src(src) {
    if (this._src !== src) {
      this._src = src;
      this._update();
    }
  }

  set blur(amount) {
    this._blur = amount;
    this._update();
  }

  set radius(radius) {
    this._radius = radius;
    this._update();
  }

  set shadow(shadow) {
    this._shadow = shadow;
    this._update();
  }

  _focus() {
    if (this._smooth === undefined) this._smooth = true;
    this._update();
  }

  _unfocus() {
    this._update();
  }

  get src() {
    return this._src;
  }

  get blur() {
    return this._blur;
  }

  get radius() {
    return this._radius;
  }

  get _Item() {
    return this.tag('Item');
  }

  get _Image() {
    return this.tag('Image');
  }

  get _Blur() {
    return this.tag('Blur');
  }

  get _DropShadow() {
    return this.tag('DropShadow');
  }

  get _FocusRing() {
    return this.tag('FocusRing');
  }
}

export default withStyles(Tile, styles);
