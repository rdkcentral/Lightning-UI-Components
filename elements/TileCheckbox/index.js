import Tile from '../Tile';
import Checkbox from '../Checkbox';

export default class TileCheckbox extends Tile {
  static get tags() {
    return [
      ...super.tags,
      {
        name: 'Checkbox',
        path: 'Item.Checkbox'
      }
    ];
  }

  static get properties() {
    return [...super.properties, 'checked', 'placement'];
  }

  _construct() {
    super._construct();
    this._checked = false;
    this._placement = 'right';
  }

  _update() {
    super._update();
    this._updateCheckbox();
  }

  _updateCheckbox() {
    if (this._Checkbox) {
      this._Checkbox.smooth = { alpha: this.checked ? 1 : 0 };
    } else if (this.checked) {
      this._Item.patch({
        Checkbox: {
          type: Checkbox,
          alpha: 1,
          placement: this.placement,
          x:
            this.placement === 'center'
              ? this.w / 2
              : this.w - Checkbox.styles.w,
          checked: true,
          zIndex: 3,
          mount: 0.5,
          y: this.h - Checkbox.styles.h
        }
      });
    }
  }
}
