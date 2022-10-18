import LUIComponent from '../component';

class Badge extends LUIComponent {
  constructor() {
    super({ componentName: 'badge' });
  }

  get badge() {
    return 'div[type=Badge]';
  }
}

module.exports = new Badge();
