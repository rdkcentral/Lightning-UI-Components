import LUIComponent from '../component';

class CardContentHorizontalLarge extends LUIComponent {
  constructor() {
    super({ type: 'tiles-cards', componentName: 'cardcontenthorizontallarge' });
  }

  get cardContentHorizontalLarge() {
    return 'div[type=CardContentHorizontalLarge]';
  }

  get contentTile() {
    return `${this.cardContentHorizontalLarge} > div[ref=Tile]`;
  }

  get badge() {
    return `${this.contentTile} > div[ref=Tile] > div[ref=Content] > div[type=Badge] > div[ref=Text]`;
  }

  get label() {
    return `${this.contentTile} > div[ref=Tile] > div[ref=Content] > div[type=Label] > div[ref=Text]`;
  }

  get progressBar() {
    return `${this.contentTile} > div[ref=Tile] > div[ref=Content] > div[type=ProgressBar]`;
  }

  get progressBarValue() {
    return cy.get(`${this.progressBar}`).invoke('attr', 'w');
  }

  get progressValue() {
    return cy
      .get(`${this.progressBar} > div[ref=Progress]`)
      .invoke('attr', 'w');
  }

  get metadata() {
    return `${this.cardContentHorizontalLarge} > div[type=MetadataCardContent]`;
  }

  get description() {
    return `${this.metadata} > div[ref=Text] > div[ref=Description] > div[ref=Text]`;
  }

  get title() {
    return `${this.metadata} > div[ref=Text] > div[ref=Title] > div[ref=Text]`;
  }

  get details() {
    return `${this.metadata} > div[ref=DetailsWrapper] > div[type=Element] > div[type=Textbox] > div[ref=Text]`;
  }
}

module.exports = new CardContentHorizontalLarge();
