import LUIComponent from '../component';

class Checkbox extends LUIComponent {
  constructor() {
    super({ type: 'utilities', componentName: 'checkbox' });
  }

  get checkbox() {
    return 'div[type=checkbox]';
  }

  get checked() {
    return 'div[type=checkbox] div[type=icon]';
  }
}

module.exports = new Checkbox();
