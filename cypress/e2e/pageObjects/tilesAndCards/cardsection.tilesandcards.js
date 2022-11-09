import LUIComponent from '../component';

class CardSection extends LUIComponent {
  constructor() {
    super({ type: 'tiles-cards', componentName: 'cardsection' });
  }

  get card() {
    return 'div[type=CardSection]';
  }

  get cardTitle() {
    return `${this.card}>div[ref=Title]>div[ref=Text]`;
  }

  get cardDescription() {
    return `${this.card}>div[ref=Description]>div[ref=Text]`;
  }
}

module.exports = new CardSection();
