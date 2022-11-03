import LUIComponent from '../component';

class FocusManager extends LUIComponent {
  constructor() {
    super({ type: 'layout', componentName: 'focusmanager' });
  }

  get focusManager() {
    return 'div[type="type"] > div[type="FocusManager"] > div[type="Element"] > div[type="Button"]';
  }

  get row() {
    return 'div[type="type"] > div[type="FocusManager"] > div[type="Element"]';
  }

  get rowElements() {
    return `${this.row} > div[type="Button"]`;
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
    return `${this.row} > div:nth-of-type(1) > div[type="Element"]`;
  }

  get button2Label() {
    return `${this.row} > div:nth-of-type(2) > div[type="Element"]`;
  }

  get button3Label() {
    return `${this.row} > div:nth-of-type(3) > div[type="Element"]`;
  }
}

module.exports = new FocusManager();