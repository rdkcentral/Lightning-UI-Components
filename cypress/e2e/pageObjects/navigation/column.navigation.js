import LUIComponent from '../component';

class Column extends LUIComponent {
  constructor() {
    super({ type: 'navigation', componentName: 'column' });
  }

  get column() {
    return 'div[type=type]>div[type=column]>div>div[type=row]:nth-of-type(1)';
  }

  get rows() {
    return 'div[type=type]>div[type=column]>div>div[type=row]>div[type=Element]';
  }

  get rowElements() {
    return 'div[type=type]>div[type=column]>div>div[type=row]>div>div[type="Button"]';
  }

  get row1() {
    return 'div[type="type"] > div[type="Column"] > div[type="Element"] > div:nth-of-type(1) > div[type="Element"]';
  }

  get row2() {
    return 'div[type="type"] > div[type="Column"] > div[type="Element"] > div:nth-of-type(2) > div[type="Element"]';
  }

  get button1() {
    return 'div[type=row]>div>div[type="Button"]:nth-of-type(1):not(:only-child)';
  }

  get button2() {
    return 'div[type=row]>div>div[type="Button"]:nth-of-type(2)';
  }

  get button3() {
    return 'div[type=row]>div>div[type="Button"]:nth-of-type(3)';
  }

  get button4() {
    return 'div[type="Element"] > div:nth-of-type(2) > div[type="Element"] > div[type="Button"]';
  }

  get button1Label() {
    return 'div[type="Button"]:nth-of-type(1):not(:only-child)> div[type="Element"]>div>div[type="TextBox"]>div[type="Element"]';
  }

  get button2Label() {
    return 'div[type="Button"]:nth-of-type(2):not(:only-child)> div[type="Element"]>div>div[type="TextBox"]>div[type="Element"]';
  }

  get button3Label() {
    return 'div[type="Button"]:nth-of-type(3):not(:only-child)> div[type="Element"]>div>div[type="TextBox"]>div[type="Element"]';
  }

  get button4Label() {
    return 'div[type="Element"] > div:nth-of-type(2) > div[type="Element"] > div[type="Button"]>div>div>div[type="TextBox"]>div[type="Element"]';
  }
}

module.exports = new Column();
