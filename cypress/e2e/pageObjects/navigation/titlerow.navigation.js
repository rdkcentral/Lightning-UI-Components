import LUIComponent from '../component';

class TitleRow extends LUIComponent {
  constructor() {
    super({type: 'navigation', componentName: 'titlerow'});
  }

  get titleRow() {
    return 'div[type=type] > div[type=TitleRow]';
  }

  get row() {
    return `${this.titleRow}> div[type=Element]`;
  }

  get rowElements() {
    return `${this.row} div[type*=Tile]`;
  }

  get tile1() {
    return `${this.row} > div:nth-of-type(1)`;
  }

  get tile6() {
    return `${this.row} > div:nth-of-type(6)`;
  }

  get tile7() {
    return `${this.row} > div:nth-of-type(7)`;
  }

  get tile10() {
    return `${this.row} > div:nth-of-type(10)`;
  }

  get title() {
    return `${this.titleRow} div[ref=Text]`;
  }
}

module.exports = new TitleRow();
