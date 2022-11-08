import LUIComponent from '../component';

class CardTitle extends LUIComponent {
  constructor() {
    super({type: 'tiles-cards', componentName: 'cardtitle' });
  }

  get card() {
    return 'div[type=CardTitle]';
  }

  get cardTitle() {
    return `${this.card}>div[ref=Title]>div[ref=Text]`;
  }

  get cardDescription() {
    return `${this.card}>div[ref=Description]>div[ref=Text]`;
  }
}

module.exports = new CardTitle();