import LUIComponent from '../component';

class Row extends LUIComponent {
  constructor() {
    super({ type: 'navigation', componentName: 'row' });
  }

  get row() {
    return 'div[type="type"] > div[type="Row"] > div[type="Element"]';
  }

  get rowElements() {
    return `${this.row} div[type*="Button"]`;
  }

  get button1() {
    return `${this.row} > div:nth-of-type(1)`;
  }

  get buttonsLabels() {
    return 'div[type*="Button"]  div[type="TextBox"] > div[type="Element"]';
  }

  //=============== Centered in parent ===============

  get rowElementsPerColumn() {
    return `${this.row} > div:nth-of-type(1) div[type*="Button"]`;
  }

  get rowElementsCenteredInParent() {
    return `${this.row} > div:nth-of-type(1) > div > div[type='Button']`;
  }

  get button1CenteredInParent() {
    return `${this.row} > div:nth-of-type(1) > div > div:nth-of-type(1)`;
  }

  get button2CenteredInParent() {
    return `${this.row} > div:nth-of-type(1) > div > div:nth-of-type(2)`;
  }

  get button3CenteredInParent() {
    return `${this.row} > div:nth-of-type(1) > div > div:nth-of-type(3)`;
  }

  get buttonRightCenteredInParent() {
    return 'div:nth-of-type(2)  div[type="Button"]';
  }

  get button1LabelCenteredInParent() {
    return `${this.button1CenteredInParent} div[ref="Text"]`;
  }

  get button2LabelCenteredInParent() {
    return `${this.button2CenteredInParent} div[ref="Text"]`;
  }

  get button3LabelCenteredInParent() {
    return `${this.button3CenteredInParent} div[ref="Text"]`;
  }

  get buttonRightLabelCenteredInParent() {
    return `${this.buttonRightCenteredInParent} div[ref="Text"]`;
  }

  //=============== Centered in parent ===============

  //=============== Plinko ===============

  get button1Plinko() {
    return `${this.row} > div:nth-of-type(1) > div[type="Element"] > div:nth-of-type(1)`;
  }

  get button1column1() {
    return `${this.row} > div:nth-of-type(1) > div[type="Element"] > div:nth-of-type(1)`;
  }

  get button2column1() {
    return `${this.row} > div:nth-of-type(1) > div[type="Element"] > div:nth-of-type(2)`;
  }

  get button3column2() {
    return `${this.row} > div:nth-of-type(2) > div[type="Element"] > div:nth-of-type(3)`;
  }

  get button1column2() {
    return `${this.row} > div:nth-of-type(2) > div[type="Element"] > div:nth-of-type(1)`;
  }

  get button2column4() {
    return `${this.row} > div:nth-of-type(4) > div[type="Element"] > div:nth-of-type(2)`;
  }

  get button1column1label() {
    return `${this.row} > div:nth-of-type(1) > div[type="Element"] > div:nth-of-type(1) div[type="TextBox"] > div[type="Element"]`;
  }

  get button2column1label() {
    return `${this.row} > div:nth-of-type(1) > div[type="Element"] > div:nth-of-type(2) div[type="TextBox"] > div[type="Element"]`;
  }

  get button3column1label() {
    return `${this.row} > div:nth-of-type(1) > div[type="Element"] > div:nth-of-type(3) div[type="TextBox"] > div[type="Element"]`;
  }

  get button1column2label() {
    return `${this.row} > div:nth-of-type(2) > div[type="Element"] > div:nth-of-type(1) div[type="TextBox"] > div[type="Element"]`;
  }

  get button2column2label() {
    return `${this.row} > div:nth-of-type(2) > div[type="Element"] > div:nth-of-type(2) div[type="TextBox"] > div[type="Element"]`;
  }

  get button3column2label() {
    return `${this.row} > div:nth-of-type(2) > div[type="Element"] > div:nth-of-type(3) div[type="TextBox"] > div[type="Element"]`;
  }

  get button1column3label() {
    return `${this.row} > div:nth-of-type(3) > div[type="Element"] > div:nth-of-type(1) div[type="TextBox"] > div[type="Element"]`;
  }

  get button2column3label() {
    return `${this.row} > div:nth-of-type(3) > div[type="Element"] > div:nth-of-type(2) div[type="TextBox"] > div[type="Element"]`;
  }

  get button3column3label() {
    return `${this.row} > div:nth-of-type(3) > div[type="Element"] > div:nth-of-type(3) div[type="TextBox"] > div[type="Element"]`;
  }

  get button1column4label() {
    return `${this.row} > div:nth-of-type(4) > div[type="Element"] > div:nth-of-type(1) div[type="TextBox"] > div[type="Element"]`;
  }

  get button2column4label() {
    return `${this.row} > div:nth-of-type(4) > div[type="Element"] > div:nth-of-type(2) div[type="TextBox"] > div[type="Element"]`;
  }

  get button3column4label() {
    return `${this.row} > div:nth-of-type(4) > div[type="Element"] > div:nth-of-type(3) div[type="TextBox"] > div[type="Element"]`;
  }

  get rowElementsPerColumn1() {
    return `${this.row} > div:nth-of-type(1) div[type*="Button"]`;
  }

  get rowElementsPerColumn3() {
    return `${this.row} > div:nth-of-type(3) div[type*="Button"]`;
  }

  get rowElementsPerColumn4() {
    return `${this.row} > div:nth-of-type(4) div[type*="Button"]`;
  }
  //=============== Plinko ===============
}

module.exports = new Row();
