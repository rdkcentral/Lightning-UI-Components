import LUIComponent from '../component';

class ToggleSmall extends LUIComponent {
  constructor() {
    super({ type: 'utilities', componentName: 'togglesmall' });
  }

  // TODO: Merge getters when components are grouped together
  get toggle() {
    return 'div[type=ToggleSmall]';
  }

  get toggleSmall() {
    return 'div[type=ToggleSmall]';
  }

  get container() {
    return `${this.toggle}>div[ref=Container]`;
  }

  get knob() {
    return `${this.container}>div[ref=Knob]`;
  }
}
module.exports = new ToggleSmall();
