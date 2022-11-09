import LUIComponent from '../component';

class Button extends LUIComponent {
  constructor() {
    super({ type: 'controls', componentName: 'button' });
  }

  get button() {
    return 'div[type=button]';
  }

  get justify() {
    return 'div[type=button]>div:nth-of-type(2)';
  }

  get checkbox() {
    return 'div[type=Checkbox]';
  }

  get icon() {
    return 'div[type=icon]';
  }

  get buttonTitle() {
    return 'div[type=textbox]>div:nth-of-type(1)';
  }

}

module.exports = new Button();