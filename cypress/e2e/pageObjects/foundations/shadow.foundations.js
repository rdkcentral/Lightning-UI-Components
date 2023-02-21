import LUIComponent from '../component';

class Shadow extends LUIComponent {
  constructor() {
    super({ type: 'foundations', componentName: 'shadow' });
  }

  get shadow() {
    return 'div[type=Shadow]';
  }

  get maskShadow() {
    return `${this.shadow} > div[type=Element]`
  }

}

module.exports = new Shadow();
