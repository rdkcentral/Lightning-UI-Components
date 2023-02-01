import LUIComponent from '../component';

class ButtonSmall extends LUIComponent {
  constructor() {
    super({ type: 'controls', componentName: 'buttonsmall' });
  }

  get buttonSmall() {
    return 'div[type=ButtonSmall]';
  }

  get justify() {
    return 'div[type=ButtonSmall]>div[ref=Content]';
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

module.exports = new ButtonSmall();
