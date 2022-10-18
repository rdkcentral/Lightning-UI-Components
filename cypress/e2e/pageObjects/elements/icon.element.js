import LUIComponent from '../component';

class Icon extends LUIComponent {
  constructor() {
    super({ componentName: 'icon' });
  }

  get icon() {
    return 'div[type=Icon]';
  }
}

module.exports = new Icon();
