import LUIComponent from '../component';

class Label extends LUIComponent {
  constructor() {
    super({ type: 'metadata', componentName: 'label' });
  }

  get label() {
    return 'div[type=Label]';
  }

  get title() {
    return `${this.label}>div[ref=Text]`;
  }
}

module.exports = new Label();
