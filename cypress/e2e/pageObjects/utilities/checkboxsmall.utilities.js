import LUIComponent from '../component';

class CheckboxSmall extends LUIComponent {
  constructor() {
    super({type: 'utilities', componentName: 'checkboxsmall'});
  }

  get checkboxSmall() {
    return 'div[type=checkboxsmall]';
  }

  get checked() {
    return `${this.checkboxSmall} div[type=icon]`
  }
}

module.exports = new CheckboxSmall();
