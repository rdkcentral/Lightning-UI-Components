import Button from '../../components/Button/Button';

export default class SignalButton extends Button {
  onEnter() {
    this.signal(this.signalName);
  }
  set signalName(signalName) {
    this._signalName = signalName;
  }
  get signalName() {
    return this._signalName;
  }
}
