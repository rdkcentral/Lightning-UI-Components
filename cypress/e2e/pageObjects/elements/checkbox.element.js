import LUIComponent from '../component';

class Checkbox extends LUIComponent {
  constructor() {
    super({ componentName: 'checkbox' });
  }

  get label() {
    return 'div[type=Checkbox]';
  }
}

module.exports = new Checkbox();