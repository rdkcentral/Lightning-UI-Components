import Tile from '../Tile';
import Icon from '../Icon';

export default class TileIcon extends Tile {
  _construct() {
    super._construct();
    this._iconColor = 0xffffffff;
  }

  set icon(src) {
    this._icon = src;
    this._update();
  }

  get icon() {
    return this._icon;
  }

  set iconW(w) {
    this._iconW = w;
    this._update();
  }

  get iconW() {
    return this._iconW;
  }

  set iconH(h) {
    this._iconH = h;
    this._update();
  }

  get iconH() {
    return this._iconH;
  }

  set iconColor(color) {
    this._iconColor = color;
    this._update();
  }

  get iconColor() {
    return this._iconColor;
  }

  _update() {
    this._whenEnabled.then(() => {
      this._updateIcon();
      super._update();
    });
  }

  _updateIcon() {
    this.patch({
      Item: {
        Icon: {
          type: Icon,
          icon: this._icon,
          color: this._iconColor,
          mount: 0.5,
          x: this.w / 2,
          y: this.h / 2,
          zIndex: 4
        }
      }
    });
    if (this._iconW && this._iconH) {
      this._Icon.patch({ w: this._iconW, h: this._iconH });
    }
  }

  get _Icon() {
    return this.tag('Icon');
  }
}
