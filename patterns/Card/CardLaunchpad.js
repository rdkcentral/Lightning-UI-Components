import { CardHorizontal } from '.';

class CardLaunchpad extends CardHorizontal {
  _construct() {
    super._construct();
    this.collapseData = true;
  }

  _focus() {
    this.collapseData = false;
    this._update();
    this.fireAncestors('$itemChanged');
  }

  _unfocus() {
    this.collapseData = true;
    this._update();
    this.fireAncestors('$itemChanged');
  }
}

export default CardLaunchpad;
