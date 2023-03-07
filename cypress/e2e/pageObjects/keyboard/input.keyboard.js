import LUIComponent from '../component';

class Keyboard extends LUIComponent {
  constructor() {
    super({ type: 'keyboard', componentName: 'input' });
  }

  get input() {
    return 'div[type=input]';
  }

  get eyebrow() {
    return `${this.input} > div[ref=Eyebrow] > div[ref=Text]`;
  }

  get helpText() {
    return `${this.input} > div[ref=HelpText] > div[ref=Text]`;
  }

  get inputField() {
    return 'div[ref=Title] > div[ref=Text]';
  }

  get prefix() {
    return `${this.input} > div[ref=Content]`;
  }

  get suffix() {
    return `${this.prefix}`;
  }
  
  get listening() {
    return 'div[ref=Cursor]';
  } 
}

module.exports = new Keyboard();
