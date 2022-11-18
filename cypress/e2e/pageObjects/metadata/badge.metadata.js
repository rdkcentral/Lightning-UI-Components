import LUIComponent from '../component';

class Badge extends LUIComponent {
  constructor() {
    super({ type: 'metadata', componentName: 'badge' });
  }

  get badge() {
    return 'div[type=Badge]';
  }

  get icon() {
    return 'div[type = icon]';
  }

  get text() {
    return `${this.badge} > div[type=TextBox] > div[type=Element]`;
  }

  get iconAlign() {
    return 'div[type=Badge]> div[type=TextBox]';
  }
}

module.exports = new Badge();
