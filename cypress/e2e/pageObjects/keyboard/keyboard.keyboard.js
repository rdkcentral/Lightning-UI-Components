import LUIComponent from '../component';

class Keyboard extends LUIComponent {
  constructor() {
    super({type: 'keyboard', componentName: 'keyboard'});
  }

  get keyboard() {
    return 'div[type=Keyboard] > div[type=Column] > div[type=Element]';
  }

  get centerKeyboard() {
    return 'div[type=Keyboard]';
  }

  get centerKeys() {
    return `${this.keyboard} > div:nth-of-type(2)`;
  }

  get rows() {
    return `${this.keyboard} > div[type=Row]`
  }

  get row1Elements() {
    return `${this.keyboard} > div:nth-of-type(1) > div[type=Element]`
  }

  get row1Buttons() {
    return `${this.row1Elements} > div[type=Key]`
  }

  get row1Button1() {
    return `${this.row1Elements} > div:nth-of-type(1)`
  }

  get row1Button1Label() {
    return `${this.row1Elements} > div:nth-of-type(1) div[type=TextBox] > div[type=Element]`
  }

  get row1Button6Label() {
    return `${this.row1Elements} > div:nth-of-type(6) div[type=TextBox] > div[type=Element]`
  }

  get row5SpaceButtonLabel() {
    return `${this.keyboard} > div:nth-of-type(5) > div[type=Element] > div:nth-of-type(2) div[type=TextBox] > div[type=Element]`
  }
}

module.exports = new Keyboard();
