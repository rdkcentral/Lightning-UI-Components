import LUIComponent from '../component';

class Radio extends LUIComponent {
  constructor() {
    super({ type: 'utilities', componentName: 'radio' });
  }

  get radio() {
    return 'div[type=Radio]';
  }

  get knob() {
    return `${this.radio} div[ref=Knob]`;
  }
}

module.exports = new Radio();
