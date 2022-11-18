import LUIComponent from '../component';

class TextBox extends LUIComponent {
  constructor() {
    super({ type: 'text', componentName: 'textbox' });
  }

  get basic() {
    return 'div[type=TextBox]';
  }

  get basicText() {
    return `${this.basic}>div[ref=Text]`;
  }

  get withInlineContentString() {
    return 'div[type=TextBox]>div[type=InlineContent]';
  }
}

module.exports = new TextBox();
