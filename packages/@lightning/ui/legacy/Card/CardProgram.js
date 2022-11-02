import { CardHorizontal } from '.';

export default class CardProgram extends CardHorizontal {
  _update() {
    super._update();
    this.collapseArt = !this.hasFocus();
  }
}
