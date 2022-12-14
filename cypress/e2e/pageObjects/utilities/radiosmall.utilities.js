import LUIComponent from '../component';

class RadioSmall extends LUIComponent {
  constructor() {
    super({ type: 'utilities', componentName: 'radiosmall' });
  }

  // TODO: Merge getters when components are grouped together
  get radio() {
    return 'div[type=RadioSmall]';
  }

  get radioSmall() {
    return 'div[type=RadioSmall]';
  }

  get knob() {
    return `${this.radio}>div[ref=Knob]`;
  }
}

module.exports = new RadioSmall();
