import LUIComponent from '../component';

class CardAboutStacked extends LUIComponent {
  constructor() {
    super({ type: 'tiles-cards', componentName: 'cardaboutstacked' });
  }

  get cardaboutstacked() {
    return 'div[type=cardaboutstacked]';
  }

  get title() {
    return 'div[type=CardAboutStacked]>div[ref=Title]>div[ref=Text]';
  }
  
  get titlebottom() {
    return'div[type=CardAboutStacked]>div[ref=TitleBottom]>div[ref=Text]';
}

get descriptionbottom() {
    return 'div[type=CardAboutStacked]>div[ref=DescriptionBottom]>div[ref=Text]';
}

}
module.exports = new CardAboutStacked();