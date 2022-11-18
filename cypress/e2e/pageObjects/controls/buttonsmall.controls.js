import LUIComponent from '../component';

class ButtonSmall extends LUIComponent {
  constructor() {
    super({ type: 'controls', componentName: 'buttonsmall' });
  }

  get buttonSmall() {
    return 'div[type=ButtonSmall]';
  }

  get buttonSmallJustify() {
    return 'div[type=ButtonSmall]>div:nth-of-type(2)';
  }

  get buttonSmallTitle() {
    return 'div[type=textbox]>div:nth-of-type(1)';
  }
}

module.exports = new ButtonSmall();
