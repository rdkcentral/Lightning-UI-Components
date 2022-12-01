import LUIComponent from '../component';

class Artwork extends LUIComponent {
  constructor() {
    super({ type: 'foundations', componentName: 'artwork' });
  }

  get artwork() {
    return 'div[type=Artwork]';
  }

  get image() {
    return `${this.artwork}>div[ref=Image]`;
  }

  get blur() {
    return `${this.artwork}>div[ref=Blur]`;
  }

  get fill() {
    return `${this.artwork}>div[ref=FillColor]`;
  }

  get foregroundImage() {
    return `${this.artwork}>div[ref=ForegroundImage]`;
  }

  get centerImage() {
    return `${this.artwork}>div[ref=CenterImage]`;
  }

  get centerImageContainedImage() {
    return `${this.centerImage}>div[ref=Image]`;
  }

  get gradient() {
    return `${this.artwork}>div[ref=Gradient]`;
  }
}

module.exports = new Artwork();
