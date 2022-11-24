import LUIComponent from '../component';

class ButtonSmall extends LUIComponent {
  constructor() {
    super({ type: 'controls', componentName: 'buttonsmall' });
  }

  get buttonSmall() {
    return 'div[type=ButtonSmall]';
  }

  get buttonSmallJustify() {
    return 'div[type=ButtonSmall] > div:nth-of-type(2)';
  }

  get buttonSmallTitle() {
    return 'div[ref=TextWrapper] > div[type=TextBox] > div[ref=Text]';
  }
}

module.exports = new ButtonSmall();
