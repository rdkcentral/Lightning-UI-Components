import LUIComponent from '../component';

class Tile extends LUIComponent {
  constructor() {
    super({ type: 'tiles-cards', componentName: 'tile' });
  }

  get tile() {
    return 'div[type=Tile]';
  }

  get metadata() {
    return 'div[type=MetadataTile]';
  }

  get badgeTitle() {
    return 'div[type=badge]>div'
  }

  get labelTitle() {
    return 'div[type=label]>div[type=element]:nth-child(2)'
  }

  get label() {
    return 'div[type=Label]'
  }

  get blur() {
    return 'div[type=artwork]>div[type=element]'
  }

  get fill() {
    return 'div[type=Artwork]>div[ref=FillColor]'
  }

  get checked() {
    return 'div[type=checkbox]';
  }

  get format() {
    return 'div[type=artwork]>div[type=element]';
  }

}
module.exports = new Tile();