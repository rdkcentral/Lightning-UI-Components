import LUIComponent from '../component';

class Control extends LUIComponent {
  constructor() {
    super({ type: 'controls', componentName: 'control' });
  }

  get control() {
    return 'div[type=control]';
  }

  get icon() {
    return 'div[type=control]>div[ref=Content]';
  }

  get title() {
    return 'div[ref=TextWrapper] > div[type=TextBox] > div[ref=Text]';
  }
}

module.exports = new Control();
