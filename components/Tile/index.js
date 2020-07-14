import lng from 'wpe-lightning';

export default class Tile extends lng.Component {
  set src(src) {
    this.patch({
      Item: {
        src
      }
    });
  }

  set blur(amount) {
    this._Item.on('txLoaded', () => {
      this.patch({
        Item: {
          rtt: true
        },
        Blur: {
          type: lng.components.FastBlurComponent,
          w: this.w,
          h: this.h,
          rtt: true,
          amount,
          zIndex: 2,
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

  get _Item() {
    return this.tag('Item');
  }
}
