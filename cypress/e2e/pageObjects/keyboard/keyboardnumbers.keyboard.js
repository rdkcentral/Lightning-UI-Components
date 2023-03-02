import LUIComponent from '../component';

class KeyboardNumbers extends LUIComponent {
  constructor() {
    super({type: 'keyboard', componentName: 'keyboardnumbers'});
  }

  get keyboardNumbers() {
    return 'div[type=KeyboardNumbers] > div[type=Column] > div[type=Element]';
  }

  get rows() {
    return `${this.keyboardNumbers} > div[type=Row]`;
  }

  get rowsDialpadExtended() {
    return 'div[type=KeyboardNumbers] > div[ref=DialpadExtended] > div[type=Element] > div[type=Row]';
  }

  get row1Elements() {
    return `${this.keyboardNumbers} > div:nth-of-type(1) > div[type=Element]`;
  }

  get row2Elements() {
    return `${this.keyboardNumbers} > div:nth-of-type(2) > div[type=Element]`;
  }

  get row3Elements() {
    return `${this.keyboardNumbers} > div:nth-of-type(3) > div[type=Element]`;
  }

  get row4Elements() {
    return `${this.keyboardNumbers} > div:nth-of-type(4) > div[type=Element]`;
  }

  get row1Button1() {
    return `${this.row1Elements} > div:nth-of-type(1)`;
  }

  get row1Button1Label() {
    return `${this.row1Elements} > div:nth-of-type(1) div[type=TextBox] > div[type=Element]`;
  }

  get row4Button1() {
    return `${this.row4Elements} > div:nth-of-type(1)`;
  }

  get row4Button1Label() {
    return `${this.row4Elements} > div:nth-of-type(1) div[type=TextBox] > div[type=Element]`;
  }

  get row1Button2() {
    return `${this.row1Elements} > div:nth-of-type(2)`;
  }

  get row1Button2Label() {
    return `${this.row1Elements} > div:nth-of-type(2) div[type=TextBox] > div[type=Element]`;
  }

  get row1Buttons() {
    return `${this.row1Elements} > div[type=Key]`;
  }

  get centerKeyboard() {
    return 'div[type=KeyboardNumbers]';
  }

  get centerKeys() {
    return `${this.keyboardNumbers} > div:nth-of-type(4)`;
  }

  get row5DeleteButton() {
    return `${this.keyboardNumbers} > div:nth-of-type(5) > div[type=Element] > div[type=Key]`;
  }
}

module.exports = new KeyboardNumbers();
