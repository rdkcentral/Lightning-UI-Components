import LUIComponent from '../component';

class Key extends LUIComponent {
  constructor() {
    super({ type: 'keyboard', componentName: 'key' });
  }

  get key() {
    return 'div[type=Key]';
  }

  get title() {
    return 'div[type=Key] > div[type=Element] > div[ref=TextWrapper] > div[type=TextBox] > div[ref=Text]';
  }
}

module.exports = new Key();
