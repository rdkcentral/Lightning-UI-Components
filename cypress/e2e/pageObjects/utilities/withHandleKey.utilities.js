import LUIComponent from '../component';

class WithHandleKey extends LUIComponent {
  constructor() {
    super({ type: 'utilities', componentName: 'withhandlekey' });
  }

  get withHandleKey() {
    return 'div[type=type] > div[type=Row] > div[type=Element]';
  }

  get row() {
    return `${this.withHandleKey}`;
  }

  get rowTiles() {
    return `${this.row} > div[type=Tile]`;
  }
}

module.exports = new WithHandleKey();
