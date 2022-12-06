import LUIComponent from '../component';

class Column extends LUIComponent {
  constructor() {
    super({type: 'navigation', componentName: 'column'});
  }

  get column() {
    return 'div[type=type]>div[type=column]>div[type=Element]';
  }

  get columnElements() {
    return `${this.column} div[type*="Button"]`;
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

  get column1() {
    return 'div[type="Button"]';
  }

  get button1() {
    return 'div[type="Button"]:nth-of-type(1):not(:only-child)';
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

  get buttonslabels() {
    return 'div[type*="Button"]  div[type="TextBox"] > div[type="Element"]';
  }

  //=============== Multi Column ===============

  get multiColumn() {
    return 'div[type=type] > div[type=Row]';
  }

  get columns() {
    return `${this.multiColumn} > div[type=Element]`;
  }

  get firstColumn() {
    return `${this.multiColumn} > div[ref=Items] > div[type=Column]:nth-of-type(1) > div[ref=Items]`;
  }

  get secondColumn() {
    return `${this.multiColumn} > div[ref=Items] > div[type=Column]:nth-of-type(2) > div[ref=Items]`;
  }

  get firstColumnButtons() {
    return `${this.firstColumn} > div[type=Button]`;
  }

  get secondColumnButtons() {
    return `${this.secondColumn} > div[type=Button]`;
  }

  get button2Column1() {
    return `${this.firstColumn} > div[type=Button]:nth-of-type(2)`;
  }

  get button1Column2() {
    return `${this.secondColumn} > div[type=Button]:nth-of-type(1)`;
  }

  get button3Column2() {
    return `${this.secondColumn} > div[type=Button]:nth-of-type(3)`;
  }

  //=============== Multi Column ===============
}

module.exports = new Column();