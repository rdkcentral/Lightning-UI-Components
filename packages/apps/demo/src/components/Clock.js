import { TextBox } from '@lightningjs/ui-components';

export default class Clock extends TextBox {
  _construct() {
    super._construct();
    this._startTime();
  }

  _update() {
    this.style.textStyle = this.theme.typography.headline1;
    super._update();
  }

  _startTime() {
    const today = new Date();
    const h = today.getHours();
    let m = today.getMinutes();
    m = this._checkTime(m);
    this.content = h + ':' + m;
    setTimeout(this._startTime.bind(this), 1000);
  }

  _checkTime(i) {
    if (i < 10) {
      i = '0' + i;
    } // add zero in front of numbers < 10
    return i;
  }
}
