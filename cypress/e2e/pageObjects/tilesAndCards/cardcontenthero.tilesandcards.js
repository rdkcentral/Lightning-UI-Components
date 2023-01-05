import LUIComponent from '../component';

class CardContentHero extends LUIComponent {
  constructor() {
    super({ type: 'tiles-cards', componentName: 'cardcontenthero' });
  }

  get cardcontenthero() {
    return 'div[type=CardContentHero]';
  }

  get collapsetometadata() {
    return 'div[type=Tile]';
  }

  get shouldcollapse() {
    return 'div[type=MetadataCardContent]'
  }

  get badgeTitle() {
    return 'div[type=Badge]>div[ref=Text]'
  }

  get labelTitle() {
    return 'div[type=Label]>div[ref=Text]'
  }

  get progressBar() {
    return 'div[type=ProgressBar]';
  }

  get progressBarValue() {
    return cy.get('[ref=ProgressBar]').invoke('attr', 'w');
  }

  get progressValue() {
    return cy.get('[ref=Progress]').invoke('attr', 'w');
  }

  get metadataDescription() {
    return 'div[type=MetadataCardContent]>div[ref=Text]>div[ref=Description]>div[ref=Text]'
  }

  get metadataDetails() {
    return 'div[type=MetadataCardContent]>div[ref=DetailsWrapper]>div[ref=DetailsFader]>div[ref=Details]>div[ref=Text]'
  }

  get metadataTitle() {
    return 'div[type=MetadataCardContent]>div[ref=Text]>div[ref=Title]>div[ref=Text]'
  }
}
module.exports = new CardContentHero();
