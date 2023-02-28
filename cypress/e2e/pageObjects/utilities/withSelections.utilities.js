import LUIComponent from '../component';

class WithSelections extends LUIComponent {
  constructor() {
    super({ type: 'utilities', componentName: 'withselections' });
  }

  get withSelections() {
    return 'div[type=type] > div[type=Row] > div[type=Element]';
  }

  get row() {
    return `${this.withSelections}`;
  }

  get underlinedButton() {
    return 'div[type=UnderlineButton]';
  }

  get rowButtons() {
    return `${this.row} > div[type=UnderlineButton]`;
  }

  get button1() {
    return `${this.row} > div[type=UnderlineButton]:nth-of-type(1)`;
  }

  get button1labelwithselections() {
    return `${this.row} > div[type=UnderlineButton]:nth-of-type(1) > div[ref=Content] > div[ref=TextWrapper] > div[ref=Title] > div[ref=Text]`;
  }

  get button2labelwithselections() {
    return `${this.row} > div[type=UnderlineButton]:nth-of-type(2) > div[ref=Content] > div[ref=TextWrapper] > div[ref=Title] > div[ref=Text]`;
  }

  get button3labelwithselections() {
    return `${this.row} > div[type=UnderlineButton]:nth-of-type(3) > div[ref=Content] > div[ref=TextWrapper] > div[ref=Title] > div[ref=Text]`;
  }

  get title() {
    return 'div[type=type] > div[ref=Title]';
  }
}

module.exports = new WithSelections();
