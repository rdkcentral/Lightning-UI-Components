import LUIComponent from '../component';

class TextBox extends LUIComponent {
  constructor() {
    super({ type: 'text', componentName: 'textbox' });
  }

  get basic() {
    return 'div[ref=StoryComponent] > div[type=TextBox]';
  }

  get basicText() {
    return `${this.basic} > div[ref=Text]`;
  }

  get withInlineContentString() {
    return `${this.basic} > div[type=InlineContent]`;
  }
}

module.exports = new TextBox();
