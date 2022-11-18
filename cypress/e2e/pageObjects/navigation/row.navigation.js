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

  get button1() {
    return `${this.row} > div:nth-of-type(1)`;
  }

  get buttonsLabels() {
    return 'div[type*="Button"]  div[type="TextBox"] > div[type="Element"]';
  }
}

module.exports = new Row();
