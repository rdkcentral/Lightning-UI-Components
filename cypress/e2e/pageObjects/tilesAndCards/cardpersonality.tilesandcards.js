import LUIComponent from '../component';

class CardPersonality extends LUIComponent {
  constructor() {
    super({type: 'tiles-cards', componentName: 'cardpersonality' });
  }

  get card() {
    return 'div[type=CardPersonality]';
  }

  get cardTitle() {
    return `${this.card}>div[ref=Title]>div[ref=Text]`;
  }

  get cardDescription() {
    return `${this.card}>div[ref=Description]>div[ref=Text]`;
  }
}

module.exports = new CardPersonality();