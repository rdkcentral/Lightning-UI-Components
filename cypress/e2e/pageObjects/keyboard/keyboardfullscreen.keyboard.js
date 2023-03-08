import LUIComponent from '../component';

class KeyboardFullscreen extends LUIComponent {
  constructor() {
    super({ type: 'keyboard', componentName: 'keyboardfullscreen' });
  }

  get keyboardFullscreen() {
    return 'div[type=KeyboardFullScreen] > div[type=Column] > div[type=Element]';
  }

  get rows() {
    return `${this.keyboardFullscreen} > div[type=Row]`;
  }

  get centerKeyboard() {
    return 'div[type=KeyboardFullScreen]';
  }

  get centerKeys() {
    return `${this.keyboardFullscreen} > div:nth-of-type(1)`;
  }

  get row1Elements() {
    return `${this.keyboardFullscreen} > div:nth-of-type(1) > div[type=Element] > div[type=Key]`;
  }

  get row2Elements() {
    return `${this.keyboardFullscreen} > div:nth-of-type(2) > div[type=Element] > div[type=Key]`;
  }

  get button1Row1() {
    return `${this.keyboardFullscreen} > div:nth-of-type(1) > div[type=Element] > div:nth-of-type(10)`;
  }

  get button1Row1Label() {
    return `${this.keyboardFullscreen} > div:nth-of-type(1) > div[type=Element] > div:nth-of-type(10) div[type=TextBox] > div[type=Element]`;
  }

  get button2Row1Label() {
    return `${this.keyboardFullscreen} > div:nth-of-type(1) > div[type=Element] > div:nth-of-type(11) div[type=TextBox] > div[type=Element]`;
  }

  get button3Row1() {
    return `${this.keyboardFullscreen} > div:nth-of-type(1) > div[type=Element] > div:nth-of-type(12)`;
  }

  get button1Row2() {
    return `${this.keyboardFullscreen} > div:nth-of-type(2) > div[type=Element] >  div:nth-of-type(1)`;
  }

  get button3Row2() {
    return `${this.keyboardFullscreen} > div:nth-of-type(2) > div[type=Element] >  div:nth-of-type(3)`;
  }

  get button26Row2() {
    return `${this.keyboardFullscreen} > div:nth-of-type(2) > div[type=Element] >  div:nth-of-type(26)`;
  }

  get button3Row2Label() {
    return `${this.keyboardFullscreen} > div:nth-of-type(2) > div[type=Element] >  div:nth-of-type(3) div[type=TextBox] > div[type=Element]`;
  }

  get button1Row1LabelSwitchMode() {
    return 'div[type=KeyboardFullScreen] > div:nth-of-type(2) > div[type=Element] > div:nth-of-type(1)  > div[type=Element] > div:nth-of-type(10)  div[type=TextBox] > div[type=Element]';
  }

  get button3Row2LabelSwitchMode() {
    return 'div[type=KeyboardFullScreen] > div:nth-of-type(2) > div[type=Element] > div:nth-of-type(2) > div[type=Element] > div:nth-of-type(3) div[type=TextBox] > div[type=Element]';
  }
}

module.exports = new KeyboardFullscreen();
