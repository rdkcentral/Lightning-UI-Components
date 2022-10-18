import LUIComponent from '../component';

class Label extends LUIComponent {
  constructor() {
    super({ componentName: 'label' });
  }

  get label() {
    return 'div[type=Label]';
  }
}

module.exports = new Label();
