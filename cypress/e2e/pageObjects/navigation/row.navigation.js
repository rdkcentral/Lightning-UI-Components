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

  //=============== Skip focus ===============

  get button2() {
    return `${this.row} > div:nth-of-type(2)`;
  }

  get button6() {
    return `${this.row} > div:nth-of-type(6)`;
  }

  get button8() {
    return `${this.row} > div:nth-of-type(8)`;
  }

  get button10() {
    return `${this.row} > div:nth-of-type(10) `;
  }

  get button12() {
    return `${this.row} > div:nth-of-type(12)`;
  }

  get button1label() {
    return `${this.row} > div:nth-of-type(1) > div[type='Element']`;
  }

  get button2label() {
    return `${this.row} > div:nth-of-type(2) div[type='TextBox'] > div[type='Element']`;
  }

  get button3label() {
    return `${this.row} > div:nth-of-type(3) div[type='TextBox'] > div[type='Element']`;
  }

  get button4label() {
    return `${this.row} > div:nth-of-type(4) div[type='TextBox'] > div[type='Element']`;
  }

  get button5label() {
    return `${this.row} > div:nth-of-type(5) > div[type='Element']`;
  }

  get button6label() {
    return `${this.row} > div:nth-of-type(6) div[type='TextBox'] > div[type='Element']`;
  }

  get button7label() {
    return `${this.row} > div:nth-of-type(7) div[type='TextBox'] > div[type='Element']`;
  }

  get button8label() {
    return `${this.row} > div:nth-of-type(8) div[type='TextBox'] > div[type='Element']`;
  }

  get button9label() {
    return `${this.row} > div:nth-of-type(9) > div[type='Element']`;
  }

  get button10label() {
    return `${this.row} > div:nth-of-type(10) div[type='TextBox'] > div[type='Element']`;
  }

  get button11label() {
    return `${this.row} > div:nth-of-type(11) div[type='TextBox'] > div[type='Element']`;
  }

  get button12label() {
    return `${this.row} > div:nth-of-type(12) div[type='TextBox'] > div[type='Element']`;
  }

  get button13label() {
    return `${this.row} > div:nth-of-type(13) > div[type='Element']`;
  }

  get button14label() {
    return `${this.row} > div:nth-of-type(14) > div[type='Element']`;
  }
  //=============== Skip focus ===============
}

module.exports = new Row();
