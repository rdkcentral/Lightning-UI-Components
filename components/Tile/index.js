import lng from 'wpe-lightning';
import FocusRing from '../FocusRing';
import withStyles from '../../mixins/withStyles';

export const styles = theme => ({
  radius: theme.border.radius.small,
  unfocus: {
    patch: function() {
      this.tag('FocusRing').hide();
      setTimeout(() => {
        this.patch({ FocusRing: undefined });
      }, 0.5);
      this.setSmooth('scale', 1.0);
    }
  },
  focus: {
    patch: function() {
      this.patch({
        FocusRing: {
          type: FocusRing,
          w: this.w,
          h: this.h,
          blur: 4,
          size: theme.spacing(2),
          shadow: {
            padding: theme.spacing(5),
            blur: 3,
            alpha: 0.7
          },
          imageTexture: this._Item.getTexture()
        }
      });
      this.setSmooth('scale', theme.getFocusScale(this.w));
    }
  }
});

class Tile extends lng.Component {
  static _template() {
    return {
      Item: {}
    };
  }

  _construct() {
    this._radius = this.styles.radius;
  }

  _init() {
    this._update();
  }

  _update() {
    this._updateImage();
    this._updateBlur();
    this._updateRadius();
  }

  _updateImage() {
    this.patch({
      Item: {
        rtt: true,
        zIndex: 2,
        src: this._src,
        resizeMode: { type: 'cover' }
      }
    });
  }

  _updateBlur() {
    let amount = this._blur;
    this._Item.removeAllListeners();
    this._Item.on('txLoaded', () => {
      this.patch({
        Blur: {
          type: lng.components.FastBlurComponent,
          w: this.w,
          h: this.h,
          rtt: true,
          zIndex: 3,
          content: {
            Image: {
              texture: this._Item.getTexture()
            }
          }
        }
      });
      if (this._smooth) {
        this._Blur.smooth = { amount };
      } else {
        this._Blur.amount = amount;
      }
    });
  }

  _updateRadius() {
    this.patch({
      shader: {
        type: lng.shaders.RoundedRectangle,
        radius: this._radius
      }
    });
  }

  set src(src) {
    this._src = src;
    this._update();
  }

  set blur(amount) {
    this._blur = amount;
    this._update();
  }

  set radius(radius) {
    this._radius = radius;
    this._update();
  }

  set shadow({
    w = this.w,
    h = this.h,
    radius = this._radius || 0,
    blur = 2,
    margin = 4,
    ...opts
  }) {
    this.patch({
      DropShadow: {
        texture: lng.Tools.getShadowRect(w, h, radius, blur, margin),
        zIndex: -1,
        ...opts
      }
    });
  }

  _focus() {
    if (this._smooth === undefined) this._smooth = true;
    this.styles.focus.patch.apply(this);
  }

  _unfocus() {
    this.styles.unfocus.patch.apply(this);
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

  get _Blur() {
    return this.tag('Blur');
  }
}

export default withStyles(Tile, styles);
