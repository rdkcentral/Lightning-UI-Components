import LUIComponent from '../component';

class Gradient extends LUIComponent {
  constructor() {
    super({ type: 'foundations', componentName: 'gradient' });
  }

  get gradient() {
    return 'div[type=Gradient]';
  }
}

module.exports = new Gradient();
