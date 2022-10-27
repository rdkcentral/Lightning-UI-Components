import LUIComponent from '../component';

class Card extends LUIComponent {
  constructor() {
    super({type: 'patterns', componentName: 'card' });
  }

  get base() {
    return 'div[type=Card]';
  }

  get personality() {
    return 'div[type=CardPersonality]';
  }

  get personalityTitle() {
    return `${this.personality}>div[ref=Title]>div[ref=Text]`;
  }

  get personalityDescription() {
    return `${this.personality}>div[ref=Description]>div[ref=Text]`;
  }
}

module.exports = new Card();