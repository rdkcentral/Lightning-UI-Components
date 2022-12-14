import LUIComponent from '../component';

class Card extends LUIComponent {
  constructor() {
    super({ type: 'tiles-cards', componentName: 'card' });
  }

  get card() {
    return 'div[type=Card]';
  }

  get title() {
    return `${this.card}>div[ref=Title]>div[ref=Text]`;
  }
}

module.exports = new Card();
