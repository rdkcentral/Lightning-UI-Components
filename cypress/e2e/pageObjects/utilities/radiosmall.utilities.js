import LUIComponent from '../component';

class RadioSmall extends LUIComponent {
  constructor() {
    super({ type: 'utilities', componentName: 'radiosmall' });
  }

  get radio() {
    return 'div[type=RadioSmall]';
  }

  get knob() {
    return `${this.radio}>div[ref=Knob]`;
  }
}

module.exports = new RadioSmall();
