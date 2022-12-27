import LUIComponent from '../component';

class CardAboutLarge extends LUIComponent {
  constructor() {
    super({ type: 'tiles-cards', componentName: 'cardaboutlarge' });
  }

  get cardAboutLarge() {
    return 'div[type=type] > div[type=CardAboutLarge]';
  }

  get description() {
    return `${this.cardAboutLarge} > div[ref=Description] > div[ref=Text]`;
  }

  get title() {
    return `${this.cardAboutLarge} > div[ref=Title] > div[ref=Text]`;
  }
}

module.exports = new CardAboutLarge();
