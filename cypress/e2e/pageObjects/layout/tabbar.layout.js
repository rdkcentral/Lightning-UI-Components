import LUIComponent from '../component';

class TabBar extends LUIComponent {
  constructor() {
    super({ type: 'layout', componentName: 'tabbar' });
  }

  get tabBar() {
    return 'div[type=type] > div[type=TabBar]';
  }
  
  get row() {
    return `${this.tabBar} > div[type=Row] > div[ref=Items]`;
  }

  get rowLabels() {
    return `${this.row} > div[type=Tab] > div[ref=Content] > div[type=Textbox] > div[ref=Text]`;
  }

  get contentSwitcher() {
    return `${this.tabBar} > div[type=ContentSwitcher]`;
  }

  get tab1Row() {
    return `${this.contentSwitcher} > div[type=Row]:nth-of-type(2) > div[ref=Items]`;
  }

  get tab1RowContent() {
    return `${this.tab1Row} > div[type*=Tile]`;
  }

  get tab2Column() {
    return `${this.contentSwitcher} > div[type=Column]:nth-of-type(3) > div[ref=Items]`;
  }

  get tab2ColumnContent() {
    return `${this.tab2Column} > div[type*=Button]`;
  }

  get tab2ColumnLabels() {
    return `${this.tab2ColumnContent} >div[ref=Content] > div[ref=TextWrapper] > div[type=Textbox] > div[ref=Text]`;
  }

  get tab3Row() {
    return `${this.contentSwitcher} > div[type=Row]:nth-of-type(4) > div[ref=Items]`;
  }

  get tab3RowContent() {
    return `${this.tab3Row} > div[type*=Tile]`;
  }

  get tab4Column() {
    return `${this.contentSwitcher} > div[type=Column]:nth-of-type(5) > div[ref=Items]`;
  }

  get tab4ColumnContent() {
    return `${this.tab4Column} > div[type*=Button]`;
  }

  get tab4ColumnLabels() {
    return `${this.tab4ColumnContent} >div[ref=Content] > div[ref=TextWrapper] > div[type=Textbox] > div[ref=Text]`;
  }

  //=============== Custom Tabs ===============

  get customTabs() {
    return 'div[type=type] > div[type=TabBar]';
  }

  get customTabsRow() {
    return `${this.customTabs} > div[type=Row] > div[ref=Items]`;
  }

  get customTabsTiles() {
    return `${this.customTabsRow} > div`;
  }

  get customTabsContentSwitcher() {
    return `${this.customTabs} > div[type=ContentSwitcher]`;
  }

  get customTab1Row() {
    return `${this.customTabsContentSwitcher} > div[type=Row]:nth-of-type(2) > div[ref=Items]`;
  }

  get customTab1RowContent() {
    return `${this.customTab1Row} > div[type*=Tile]`;
  }

  get customTab2Column() {
    return `${this.customTabsContentSwitcher} > div[type=Column]:nth-of-type(3) > div[ref=Items]`;
  }

  get customTab2ColumnContent() {
    return `${this.customTab2Column} > div[type*=Button]`;
  }

  get customTab3Row() {
    return `${this.customTabsContentSwitcher} > div[type=Row]:nth-of-type(4) > div[ref=Items]`;
  }

  get customTab3RowContent() {
    return `${this.customTab3Row} > div[type*=Tile]`;
  }

  get customTab4Column() {
    return `${this.customTabsContentSwitcher} > div[type=Column]:nth-of-type(5) > div[ref=Items]`;
  }

  get customTab4ColumnContent() {
    return `${this.customTab4Column} > div[type*=Button]`;
  }

  //=============== Custom Tabs ===============
}

module.exports = new TabBar();
