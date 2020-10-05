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
    this._updateIcon();
    super._update();
  }

  _updateIcon() {
    this.patch({
      Item: {
        Icon: {
          type: Icon,
          icon: this._icon,
          x: w => w / 2,
          y: h => h / 2,
          mount: 0.5,
          zIndex: 3
        }
      }
    });
  }

  get _Icon() {
    return this._Item.tag('Icon');
  }
}
