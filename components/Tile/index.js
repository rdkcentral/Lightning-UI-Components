import lng from 'wpe-lightning';
import FocusRing from '../FocusRing';
import withStyles from '../../mixins/withStyles';

export const styles = {
  rounded: 2,
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
          size: 12,
          shadow: {
            padding: 40,
            blur: 3,
            alpha: 0.7
          },
          imageTexture: this._Item.getTexture()
        }
      });
      this.setSmooth('scale', 1.12);
    }
  }
};

class Tile extends lng.Component {
  set src(src) {
    this.patch({
      Item: {
        rtt: true,
        zIndex: 2,
        src,
        resizeMode: { type: 'cover' }
      }
    });
  }

  set blur(amount) {
    this._Item.on('txLoaded', () => {
      this.patch({
        Blur: {
          type: lng.components.FastBlurComponent,
          w: this.w,
          h: this.h,
          rtt: true,
          amount,
          zIndex: 3,
          content: {
            Image: {
              texture: this._Item.getTexture()
            }
          }
        }
      });
    });
  }

  set rounded(radius) {
    this._radius = radius;
    this.patch({
      shader: {
        type: lng.shaders.RoundedRectangle,
        radius
      }
    });
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
    this.styles.focus.patch.apply(this);
  }

  _unfocus() {
    this.styles.unfocus.patch.apply(this);
  }

  get _Item() {
    return this.tag('Item');
  }
}

export default withStyles(Tile, styles);
