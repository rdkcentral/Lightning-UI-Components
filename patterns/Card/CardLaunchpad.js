import { CardHorizontal } from '.';

class CardLaunchpad extends CardHorizontal {
  _update() {
    super._update();
    this.collapseData = !this.hasFocus();
  }
}

export default CardLaunchpad;
