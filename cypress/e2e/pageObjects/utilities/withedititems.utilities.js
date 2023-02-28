import LUIComponent from '../component';

class WithEditItems extends LUIComponent {
  constructor() {
    super({ type: 'utilities', componentName: 'withedititems' });
  }

  get withEditItems() {
    return 'div[type=type] > div[ref=RowComponent] > div[type=Element]';
  }

  get row(){
    return 'div[type=type] > div[ref=RowComponent] > div[type=Element]';
  }

  get rowElements() {
    return `${this.row} div[type*="Button"]`;
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

  get button4() {
    return `${this.row} > div:nth-of-type(4)`;
  }

  get button5() {
    return `${this.row} > div:nth-of-type(5)`;
  }

  get button6() {
    return `${this.row} > div:nth-of-type(6)`;
  }

  get buttonsLabels() {
    return 'div[type*="Button"]  div[type="TextBox"] > div[type="Element"]';
  }

  get firstButton() {
    return `${this.button1} div[ref=Content]>div[type=Element]>div[type=TextBox]>div[type=Element]`;
  }

  get secondButton() {
    return `${this.button2} div[ref=Content]>div[type=Element]>div[type=TextBox]>div[type=Element]`;
  }
}

module.exports = new WithEditItems();
