import LUIComponent from '../component';

class CardPersonality extends LUIComponent {
  constructor() {
    super({ type: 'tiles-cards', componentName: 'cardpersonality' });
  }

  // TODO: Merge getters when components are grouped together
  get card() {
    return 'div[type=CardPersonality]';
  }

  get cardPersonality() {
    return 'div[type=CardPersonality]';
  }

  get title() {
    return `${this.card}>div[ref=Title]>div[ref=Text]`;
  }

  get description() {
    return `${this.card}>div[ref=Description]>div[ref=Text]`;
  }
}

module.exports = new CardPersonality();
