import LUIComponent from '../component';

class Label extends LUIComponent {
  constructor() {
    super({ type: 'text', componentName: 'label' });
  }

  get label() {
    return 'div[type=Label]';
  }

  get labelTitle() {
    return `${this.label}>div[ref=Text]`;
  }
}

module.exports = new Label();
