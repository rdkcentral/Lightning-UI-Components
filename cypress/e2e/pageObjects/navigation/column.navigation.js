import LUIComponent from '../component';

class Column extends LUIComponent {
  constructor() {
    super({ type: 'navigation', componentName: 'column' });
  }

  get column() {
    return 'div[type=type]>div[type=column]>div[type=Element]';
  }

  get columnElements() {
    return `${this.column} div[type*="Button"]`;
  }

  get rows() {
    return 'div[type=column]>div[type=Element]';
  }

  get rowElements() {
    return 'div[type=type]>div[type=column]>div>div[type=row]>div>div[type="Button"]';
  }

  get row() {
    return 'div[type="Column"] > div[type="Element"] > div[type="Row"] > div[type="Element"]';
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

  get firstColumnButtons() {
    return `${this.firstColumn} > div[type=Button]`;
  }

  get row2button1() {
    return 'div[type="Element"] :nth-of-type(2) >div>div[type="Button"]:nth-of-type(1)';
  }

  get row2button2() {
    return 'div[type="Element"] :nth-of-type(2) >div>div[type="Button"]:nth-of-type(2)';
  }

  get row2button3() {
    return 'div[type="Element"] :nth-of-type(2) >div>div[type="Button"]:nth-of-type(3)';
  }

  get secondColumn() {
    return `${this.multiColumn} > div[ref=Items] > div[type=Column]:nth-of-type(2) > div[ref=Items]`;
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

  //=============== Sticky Title ===============

  get stickyTitle() {
    return 'div[type=type] > div[type=Column]';
  }

  get stickyTitleColumn() {
    return `${this.stickyTitle} > div[ref=Items]`;
  }

  get stickyTitleRow() {
    return `${this.stickyTitleColumn} > div`;
  }

  get stickyTitleButton() {
    return `${this.stickyTitleColumn} > div[type=Button]`;
  }

  get stickyTitleButtonLabels() {
    return 'div[type*="Button"]  div[type="TextBox"] > div[type="Element"]';
  }

  get stickyTitleButtonText() {
    return `${this.stickyTitleButton} > div[ref=Content] > div > div > div[ref=Text]`;
  }

  get stickyTitleHeader() {
    return `${this.stickyTitleColumn} > div[type=ColumnHeader] > div[ref=Label]`;
  }

  get stickyTitleRowContent() {
    return `${this.stickyTitleButton} > div[ref=Content]`;
  }

  get stickyTitleStickyHeader() {
    return `${this.stickyTitle} + div[type=ColumnHeader] > div[ref=Label]`;
  }

  get stickyHeader1() {
    return `${this.stickyTitleColumn} > div:nth-of-type(9) > div[ref=Label]`;
  }

  get stickyHeader2() {
    return `${this.stickyTitleColumn} > div:nth-of-type(18) > div[ref=Label]`;
  }

  get stickyHeader3() {
    return `${this.stickyTitleColumn} > div:nth-of-type(27) > div[ref=Label]`;
  }

  get stickyHeader4() {
    return `${this.stickyTitleColumn} > div:nth-of-type(36) > div[ref=Label]`;
  }

  get stickyButton1() {
    return `${this.stickyTitleColumn} > div:nth-of-type(1)`;
  }

  get stickyButton8() {
    return `${this.stickyTitleColumn} > div:nth-of-type(8)`;
  }

  get stickyButton18() {
    return `${this.stickyTitleColumn} > div:nth-of-type(17)`;
  }

  get stickyButton28() {
    return `${this.stickyTitleColumn} > div:nth-of-type(26)`;
  }

  get stickyButton38() {
    return `${this.stickyTitleColumn} > div:nth-of-type(35)`;
  }

  get stickyButton48() {
    return `${this.stickyTitleColumn} > div:nth-of-type(44)`;
  }

  //=============== Sticky Title ===============

  //=============== Adding Items ===============

  get addingItems() {
    return 'div[type=type] > div[type=Column]';
  }

  get addingItemsColumn() {
    return `${this.addingItems} > div[ref=Items]`;
  }

  get addingItemsRow() {
    return `${this.addingItemsColumn} > div`;
  }

  get addingItemsButton() {
    return `${this.addingItemsColumn} > div[type=Button]`;
  }

  get addingItemsButtonLabels() {
    return 'div[type*="Button"]  div[type="TextBox"] > div[type="Element"]';
  }

  get firstAddingItemsButton() {
    return `${this.addingItemsColumn} > div[type=Button]:nth-of-type(1)`;
  }

  get addingItemsRowContent() {
    return `${this.addingItemsButton} > div[ref=Content]`;
  }

  get button1AddingItems() {
    return `${this.addingItemsColumn} > div[type=Button]:nth-of-type(1) > div[ref=Content] > div > div > div[ref=Text]`;
  }

  get button2AddingItems() {
    return `${this.addingItemsColumn} > div[type=Button]:nth-of-type(2) > div[ref=Content] > div > div > div[ref=Text]`;
  }

  get button3AddingItems() {
    return `${this.addingItemsColumn} > div[type=Button]:nth-of-type(3) > div[ref=Content] > div > div > div[ref=Text]`;
  }

  get button4AddingItems() {
    return `${this.addingItemsColumn} > div[type=Button]:nth-of-type(4) > div[ref=Content] > div > div > div[ref=Text]`;
  }

  get button5AddingItems() {
    return `${this.addingItemsColumn} > div[type=Button]:nth-of-type(5) > div[ref=Content] > div > div > div[ref=Text]`;
  }

  get button6AddingItems() {
    return `${this.addingItemsColumn} > div[type=Button]:nth-of-type(6) > div[ref=Content] > div > div > div[ref=Text]`;
  }

  get button7AddingItems() {
    return `${this.addingItemsColumn} > div[type=Button]:nth-of-type(7) > div[ref=Content] > div > div > div[ref=Text]`;
  }

  get button8AddingItems() {
    return `${this.addingItemsColumn} > div[type=Button]:nth-of-type(8) > div[ref=Content] > div > div > div[ref=Text]`;
  }

  get button9AddingItems() {
    return `${this.addingItemsColumn} > div[type=Button]:nth-of-type(9) > div[ref=Content] > div > div > div[ref=Text]`;
  }

  //=============== Adding Items ===============

  //=============== Removing Items =============

  get removingItems() {
    return 'div[type=type] > div[type=Column]';
  }

  get removingItemsColumn() {
    return `${this.removingItems} > div[ref=Items]`;
  }

  get removingItemsRow() {
    return `${this.removingItemsColumn} > div`;
  }

  get removingItemsButton() {
    return `${this.removingItemsColumn} > div[type=Button]`;
  }

  get removingItemsButtonLabels() {
    return 'div[type*="Button"]  div[type="TextBox"] > div[type="Element"]';
  }

  get firstRemovingItemsButton() {
    return `${this.removingItemsColumn} > div[type=Button]:nth-of-type(1)`;
  }

  get removingItemsRowContent() {
    return `${this.removingItemsButton} > div[ref=Content]`;
  }

  get button1RemovingItems() {
    return `${this.removingItemsColumn} > div[type=Button]:nth-of-type(1) > div[ref=Content] > div > div > div[ref=Text]`;
  }

  get button2RemovingItems() {
    return `${this.removingItemsColumn} > div[type=Button]:nth-of-type(2) > div[ref=Content] > div > div > div[ref=Text]`;
  }

  get button3RemovingItems() {
    return `${this.removingItemsColumn} > div[type=Button]:nth-of-type(3) > div[ref=Content] > div > div > div[ref=Text]`;
  }

  get button9RemovingItems() {
    return `${this.removingItemsColumn} > div[type=Button]:nth-of-type(9) > div[ref=Content] > div > div > div[ref=Text]`;
  }

  //=============== Removing Items =============

  //=============== Skipfocus =============
  get skipFocus() {
    return 'div[type=type] > div[type=Column]';
  }

  get skipFocusColumn() {
    return `${this.skipFocus} > div[type=Element]`;
  }

  get firstcolumnbutton() {
    return 'div[type=button]:nth-of-type(2)';
  }

  get lastcolumnbutton() {
    return 'div[type=button]:nth-of-type(48)';
  }
  //=============== Skipfocus =============
  //=============== Expandableheightrow =============
  get expandableheightrow() {
    return 'div[type="Type"] > div[type="Column"] > div[type="Element"]';
  }

  get expandableheightrow1button1() {
    return `${this.expandableheightrow} > div[type=row]:nth-of-type(1)>div[type=element]>div[type=expandingbutton]:nth-of-type(1)`;
  }

  get expandableheightrow1button3() {
    return `${this.expandableheightrow} > div[type=row]:nth-of-type(1)>div[type=element]>div[type=expandingbutton]:nth-of-type(3)`;
  }

  get expandableheightrow15button3() {
    return `${this.expandableheightrow} > div[type=row]:nth-of-type(15)>div[type=element]>div[type=expandingbutton]:nth-of-type(3)`;
  }

  get expandableheightrow15button1() {
    return `${this.expandableheightrow} > div[type=row]:nth-of-type(15)>div[type=element]>div[type=expandingbutton]:nth-of-type(1)`;
  }
  //=============== Expandableheightrow =============
  //=============== Skipplinko ====================
  get skipplinkorows() {
    return 'div[type=Element] > div[type=type] > div[type=Column] > div[type=Element] > div[type=row]';
  }

  get skipplinkorows1() {
    return `${this.skipplinkorows}:nth-child(1) > div[type=Element] > div[type=tile]`;
  }

  get skipplinkorows2() {
    return `${this.skipplinkorows}:nth-child(2) > div[type=Element] > div[type=tile]`;
  }

  get skipplinkorows3() {
    return `${this.skipplinkorows}:nth-child(3) > div[type=Element] > div[type=tile]`;
  }

  get skipplinkorow1() {
    return `${this.skipplinkorows}:nth-child(1) > div[type=Element]`;
  }

  get skipplinkorow2() {
    return `${this.skipplinkorows}:nth-child(2) > div[type=Element]`;
  }

  get skipplinkorow3() {
    return `${this.skipplinkorows}:nth-child(3) > div[type=Element]`;
  }

  get skipplinkobutton1() {
    return `${this.skipplinkorow1} > div[type=Tile]:nth-child(1)`;
  }

  get skipplinkobutton2() {
    return `${this.skipplinkorow2} > div[type=Tile]:nth-child(1)`;
  }

  get skipplinkobutton3() {
    return `${this.skipplinkorow3} > div[type=Tile]:nth-child(1)`;
  }

  get skipplinkobutton3last() {
    return `${this.skipplinkorow3} > div[type=Tile]:nth-child(5)`;
  }

  get skipplinkobutton1last() {
    return `${this.skipplinkorow1} > div[type=Tile]:nth-child(5)`;
  }
  //=============== Skipplinko =============  
}

module.exports = new Column();
