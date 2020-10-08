import Tile from '../Tile';
import Icon from '../Icon';

export default class TileIcon extends Tile {
  set icon(src) {
    this._icon = src;
    this._update();
  }

  get icon() {
    return this._icon;
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
          mount: 0.5,
          x: this.w / 2,
          y: this.h / 2,
          zIndex: 3
        }
      }
    });
  }
}
