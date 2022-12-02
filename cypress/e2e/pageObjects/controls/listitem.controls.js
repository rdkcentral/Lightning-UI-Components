import LUIComponent from '../component';

class ListItem extends LUIComponent {
  constructor() {
    super({ type: 'controls', componentName: 'listitem' });
  }

  get listItem() {
    return 'div[type=ListItem]';
  }

  get title() {
    return 'div[ref=Title] > div[ref=Text]';
  }

  get description() {
    return 'div[ref=Description] > div[ref=Text]';
  }

  get prefix() {
    return 'div[ref=Prefix] > div[ref=Items]';
  }

  get prefixToggle() {
    return 'div[ref=Prefix] > div[ref=Items] > div[type=Toggle]';
  }

  get prefixRadio() {
    return 'div[ref=Prefix] > div[ref=Items] > div[type=Radio]';
  }

  get prefixCheckbox() {
    return 'div[ref=Prefix] > div[ref=Items] > div[type=Checkbox]';
  }

  get suffix() {
    return 'div[ref=Suffix] > div[ref=Items]';
  }

  get suffixToggle() {
    return 'div[ref=Suffix] > div[ref=Items] > div[type=Toggle]';
  }

  get suffixRadio() {
    return 'div[ref=Suffix] > div[ref=Items] > div[type=Radio]';
  }

  get suffixCheckbox() {
    return 'div[ref=Suffix] > div[ref=Items] > div[type=Checkbox]';
  }

  get suffixLogo() {
    return 'div[ref=Suffix] > div[ref=Items] > div[type=Icon]';
  }
}

module.exports = new ListItem();
