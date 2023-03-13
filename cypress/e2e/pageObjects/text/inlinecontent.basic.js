import LUIComponent from '../component';

class InlineContent extends LUIComponent {
  constructor() {
    super({ type: 'text', componentName: 'inlinecontent' });
  }

  get inlinecontent() {
    return 'div[type=InlineContent]';
  }

  get icon() {
    return `${this.inlinecontent} > div:nth-child(2)`;
  }

  get element() {
    return `${this.inlinecontent} > div:nth-child(3)`;
  }
}

module.exports = new InlineContent();
