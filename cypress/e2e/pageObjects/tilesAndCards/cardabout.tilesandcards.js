import LUIComponent from '../component';

class CardAbout extends LUIComponent {
  constructor() {
    super({ type: 'tiles-cards', componentName: 'cardabout' });
  }

  get cardAbout() {
    return 'div[type=type] > div[type=CardAbout]';
  }

  get description() {
    return `${this.cardAbout} > div[ref=Description] > div[ref=Text]`;
  }

  get iconLeft() {
    return `${this.cardAbout} > div[ref=LeftIconTextContainer] > div[type=Icon]`;
  }

  get iconRight() {
    return `${this.cardAbout} > div[ref=RightIconTextContainer] > div[type=Icon]`;
  }

  get textLeft() {
    return `${this.cardAbout} > div[ref=LeftIconTextContainer] > div[type=Element]`;
  }

  get textRight() {
    return `${this.cardAbout} > div[ref=RightIconTextContainer] > div[type=Element]`;
  }

  get title() {
    return `${this.cardAbout} > div[ref=Title] > div[ref=Text]`;
  }
}

module.exports = new CardAbout();
