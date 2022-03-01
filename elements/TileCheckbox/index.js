import Tile from '../Tile';
import LegacyCheckbox from '../Checkbox/LegacyCheckbox';

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
          type: LegacyCheckbox,
          alpha: 1,
          placement: this.placement,
          x:
            this.placement === 'center'
              ? this.w / 2
              : this.w - LegacyCheckbox.styles.w,
          checked: true,
          zIndex: 3,
          mount: 0.5,
          y: this.h - LegacyCheckbox.styles.h
        }
      });
    }
  }
}
