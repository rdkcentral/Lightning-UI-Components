import LUIComponent from '../component';

class FocusManager extends LUIComponent {
  constructor() {
    super({ type: 'navigation', componentName: 'focusmanager' });
  }

  get focusManager() {
    return 'div[type="type"] > div[type="FocusManager"] > div[type="Element"] > div[type="ButtonFixedWidth"]';
  }

  get row() {
    return 'div[type="type"] > div[type="FocusManager"] > div[type="Element"]';
  }

  get rowElements() {
    return `${this.row} > div[type="ButtonFixedWidth"]`;
  }

  get button1() {
    return `${this.row} > div:nth-of-type(1)`;
  }

  get button2() {
    return `${this.row} > div:nth-of-type(2)`;
  }

  get button3() {
    return `${this.row} > div:nth-of-type(3)`;
  }

  get button1Label() {
    return `${this.row} > div:nth-of-type(1) > div>div>div>div[type="Element"]`;
  }

  get button2Label() {
    return `${this.row} > div:nth-of-type(2) > div>div>div>div[type="Element"]`;
  }

  get button3Label() {
    return `${this.row} > div:nth-of-type(3) > div>div>div>div[type="Element"]`;
  }
}
module.exports = new FocusManager();
