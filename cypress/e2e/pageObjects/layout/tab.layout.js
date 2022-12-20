import LUIComponent from '../component';

class Tab extends LUIComponent {
  constructor() {
    super({type: 'layout', componentName: 'tab'});
  }

  get tab() {
    return 'div[type=Tab]';
  }

  get rowElements() {
    return 'div[type=Tab]';
  }

  get title() {
    return 'div[type=Tab] > div[type=Element] > div[type=TextBox] > div[type=Element]';
  }
}

module.exports = new Tab();