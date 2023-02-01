import LUIComponent from '../component';

class ControlSmall extends LUIComponent {
  constructor() {
    super({ type: 'controls', componentName: 'controlsmall' });
  }

  get controlSmall() {
    return 'div[type=controlsmall]';
  }

  get icon() {
    return 'div[type=controlsmall]>div[ref=Content]';
  }

  get justify() {
    return `${this.icon}`;
  }

  get title() {
    return 'div[ref=TextWrapper] > div[type=TextBox] > div[ref=Text]';
  }
}

module.exports = new ControlSmall();
