import LUIComponent from '../component';

class Knob extends LUIComponent {
  constructor() {
    super({ type: 'utilities', componentName: 'knob' });
  }
  
  get knob() {
    return 'div[type=Knob]';
  }
}

module.exports = new Knob();