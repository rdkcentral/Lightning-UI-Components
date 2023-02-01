import LUIComponent from '../component';

class Button extends LUIComponent {
  constructor() {
    super({ type: 'controls', componentName: 'button' });
  }

  get button() {
    return 'div[type=button]';
  }

  get justify() {
    return 'div[type=button]>div[ref=Content]';
  }

  get checkbox() {
    return 'div[type=Checkbox]';
  }

  get icon() {
    return 'div[type=icon]';
  }

  get title() {
    return 'div[ref=TextWrapper] > div[type=TextBox] > div[ref=Text]';
  }
}

module.exports = new Button();
