import LUIComponent from '../component';

class MetadataBase extends LUIComponent {
  constructor() {
    super({ type: 'metadata', componentName: 'metadatabase' });
  }

  get metadataBase() {
    return 'div[type=MetadataBase]';
  }

  get title() {
    return `${this.metadataBase} > div[type=Element] > div[ref=Title] > div[ref=Text]`; 
  }

  get description() {
    return `${this.metadataBase} > div[type=Element] > div[ref=Description] > div[ref=Text]`;  
  }

  get logo() {
    return 'div[texture-type="StaticCanvasTexture"]';
  }

  get subtitleLeft() {
    return 'div[type=MetadataBase] > div[type=Element] > div:nth-of-type(2) > div[ref=Subtitle] > div > div[type=Element]:nth-of-type(1)';
  }

  get subtitleRight() {
    return 'div[type=MetadataBase] > div[type=Element] > div:nth-of-type(2) > div[ref=Subtitle] > div > div[type=Element]:nth-of-type(3)';
  }
}

module.exports = new MetadataBase();
