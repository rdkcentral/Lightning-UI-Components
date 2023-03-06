import LUIComponent from '../component';

class ControlRow extends LUIComponent {
  constructor() {
    super({ type: 'navigation', componentName: 'controlrow' });
  }

  get controlRow() {
    return 'div[type="ControlRow"]';
  }

  get elements() {
    return `${this.controlRow} > div[type="Element"] > div`;
  }

  get tileRow() {
    return `${this.controlRow} > div[type=Element]`;
  }

  get controlSmallIcons() {
    return 'div[type="ControlSmall"]';
  }

  get tileIcons() {
    return 'div[type=ControlRow] > div[type=Element] > div[type=Tile]';
  }

  get controlSmall1() {
    return 'div[type=ControlSmall]:nth-of-type(1)';
  }

  get controlSmall2() {
    return 'div[type=ControlSmall]:nth-of-type(2)';
  }

  get controlSmall3() {
    return 'div[type=ControlSmall]:nth-of-type(3)';
  }

  get controlSmall4() {
    return `${this.elements}:nth-of-type(9)`
  }

  get controlSmall5() {
    return `${this.elements}:nth-of-type(10)`
  }

  get controlSmall6() {
    return `${this.elements}:nth-of-type(11)`
  }

  get tile1() {
    return 'div[type=Tile]:nth-of-type(4)';
  }

  get tile2() {
    return 'div[type=Tile]:nth-of-type(5)';
  }

  get tile3() {
    return 'div[type=Tile]:nth-of-type(6)';
  }

  get tile4() {
    return 'div[type=Tile]:nth-of-type(7)';
  }

  get tile5() {
    return 'div[type=Tile]:nth-of-type(8)';
  }

  get row() {
    return `${this.controlRow} > div[type="Element"] > div[type=Tile]`;
  }

  get title() {
    return `${this.controlRow} > div[ref="Title"] > div[ref=Text]`;
  }
}

module.exports = new ControlRow();
