import LUIComponent from '../component';

class WithAnnouncerBasic extends LUIComponent {
  constructor() {
    super({ type: 'accessibility', componentName: 'withannouncer' });
  }

  get withAnnouncer() {
    return 'div[type=type] > div[type=Column]';
  }

  get row() {
    return 'div[type=type] > div[type=Column] > div[type=Element] > div[type=Row] > div[type=Element]';
  }

  get rows() {
    return 'div[type=type] > div[type=Column] > div[type=Element] > div[type=Row]';
  }

  get rowParent() {
    return 'div[type=type] > div[type=Column] > div[type=Element]';
  }

  get row1Elements() {
    return `${this.rowParent} > div[type=Row]:nth-of-type(1) > div[type=Element] > div[type*="Button"]`;
  }

  get row2Elements() {
    return `${this.rowParent} > div[type=Row]:nth-of-type(2) > div[type=Element] > div[type*="Button"]`;
  }

  get row3Elements() {
    return `${this.rowParent} > div[type=Row]:nth-of-type(3) > div[type=Element] > div[type*="Button"]`;
  }

  get row1() {
    return `${this.rowParent} > div[type=Row]:nth-of-type(1) > div[type=Element]`;
  }

  get row2() {
    return `${this.rowParent} > div[type=Row]:nth-of-type(2) > div[type=Element]`;
  }

  get row3() {
    return `${this.rowParent} > div[type=Row]:nth-of-type(3) > div[type=Element]`;
  }

  get rowButton() {
    return `${this.rows} > div[type=Element] > div[type=Button]`;
  }

  get buttonlabels() {
    return 'div[type*="Button"] > div[ref=Content] > div[ref=TextWrapper] > div[ref=Title] > [ref=Text]';
  }
}

module.exports = new WithAnnouncerBasic();
