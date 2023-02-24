import LUIComponent from '../component';

class Provider extends LUIComponent {
  constructor() {
    super({ type: 'utilities', componentName: 'provider' });
  }

  get provider() {
    return 'div[type=Provider] > div[type=Row]';
  }

  get marquee() {
    return `${this.provider} > div[type=Element]`;
  }

  get row() {
    return `${this.provider} > div[type=Element]`;
  }

  get text() {
    return 'div[type=Textbox] > div[ref=Text]';
  }

}

module.exports = new Provider();
