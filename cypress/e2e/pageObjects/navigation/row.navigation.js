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
    return `${this.button1CenteredInParent} div`;
  }

  get button2LabelCenteredInParent() {
    return `${this.button2CenteredInParent} div`;
  }

  get button3LabelCenteredInParent() {
    return `${this.button3CenteredInParent} div`;
  }

  get buttonRightLabelCenteredInParent() {
    return `${this.buttonRightCenteredInParent} div`;
  }

  get button1() {
    return `${this.row} > div:nth-of-type(1)`;
  }

  get buttonsLabels() {
    return 'div[ref="Label"]';
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

  get button4Label() {
    return `${this.row} > div:nth-of-type(4) > div[type="Element"]`;
  }

  get button5Label() {
    return `${this.row} > div:nth-of-type(5) > div[type="Element"]`;
  }

  get button6Label() {
    return `${this.row} > div:nth-of-type(6) > div[type="Element"]`;
  }

  get button7Label() {
    return `${this.row} > div:nth-of-type(7) > div[type="Element"]`;
  }

  get button8Label() {
    return `${this.row} > div:nth-of-type(8) > div[type="Element"]`;
  }

  get button9Label() {
    return `${this.row} > div:nth-of-type(9) > div[type="Element"]`;
  }

  get button10Label() {
    return `${this.row} > div:nth-of-type(10) > div[type="Element"]`;
  }

  get button11Label() {
    return `${this.row} > div:nth-of-type(11) > div[type="Element"]`;
  }

  get button12Label() {
    return `${this.row} > div:nth-of-type(12) > div[type="Element"]`;
  }
}

module.exports = new Row();
