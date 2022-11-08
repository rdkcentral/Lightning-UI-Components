import LUIComponent from '../component';

class TextBox extends LUIComponent {
  constructor() {
    super({ type: 'text', componentName: 'textbox' });
  }

  get base() {
    return 'div[type=TextBox]';
  }

  get baseText() {
    return `${this.base}>div[ref=Text]`;
  }

  get withInlineContentString() {
    return 'div[type=TextBox]>div[type=InlineContent]';
  }
}

module.exports = new TextBox();
