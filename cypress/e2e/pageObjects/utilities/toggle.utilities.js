import LUIComponent from '../component';

class Toggle extends LUIComponent {
  constructor() {
    super({ type: 'utilities', componentName: 'toggle' });
  }

  get toggle() {
    return 'div[type=Toggle]';
  }

  get container() {
    return `${this.toggle}>div[ref=Container]`;
  }

  get knob() {
    return `${this.container}>div[ref=Knob]`;
  }
}
module.exports = new Toggle();