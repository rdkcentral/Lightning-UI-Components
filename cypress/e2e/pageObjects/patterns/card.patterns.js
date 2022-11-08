import LUIComponent from '../component';

class Card extends LUIComponent {
  constructor() {
    super({type: 'patterns', componentName: 'card' });
  }

  get base() {
    return 'div[type=Card]';
  }

  get baseTitle() {
    return `${this.base}>div[ref=Title]>div[ref=Text]`;
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

  get section() {
    return 'div[type=CardSection]';
  }

  get sectionTitle() {
    return `${this.section}>div[ref=Title]>div[ref=Text]`;
  }

  get sectionIconSrc() {
    return `${this.section}>div[ref=Icon]`;
  }

  get title() {
    return 'div[type=CardTitle]';
  }

  get titleTitle() {
    return `${this.title}>div[ref=Title]>div[ref=Text]`;
  }

  get titleDescription() {
    return `${this.title}>div[ref=Description]>div[ref=Text]`;
  }
}

module.exports = new Card();