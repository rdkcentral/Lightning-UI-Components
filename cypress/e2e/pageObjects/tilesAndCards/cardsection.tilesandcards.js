import LUIComponent from '../component';

class CardSection extends LUIComponent {
  constructor() {
    super({ type: 'tiles-cards', componentName: 'cardsection' });
  }

  // TODO: Merge getters when components are grouped together
  get card() {
    return 'div[type=CardSection]';
  }

  get cardSection() {
    return 'div[type=CardSection]';
  }

  get title() {
    return `${this.card}>div[ref=Title]>div[ref=Text]`;
  }

  get description() {
    return `${this.card}>div[ref=Description]>div[ref=Text]`;
  }
}

module.exports = new CardSection();
