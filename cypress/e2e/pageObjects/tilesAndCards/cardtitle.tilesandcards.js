import LUIComponent from '../component';

class CardTitle extends LUIComponent {
  constructor() {
    super({ type: 'tiles-cards', componentName: 'cardtitle' });
  }

  // TODO: Merge getters when components are grouped together
  get card() {
    return 'div[type=CardTitle]';
  }

  get cardTitle() {
    return 'div[type=CardTitle]';
  }

  get title() {
    return `${this.card}>div[ref=Title]>div[ref=Text]`;
  }

  get description() {
    return `${this.card}>div[ref=Description]>div[ref=Text]`;
  }

  get details() {
    return `${this.card}>div[ref=Details]>div[ref=Text]`;
  }

}

module.exports = new CardTitle();
