import LUIComponent from '../component';

class Slider extends LUIComponent {
  constructor() {
    super({ type: 'utilities', componentName: 'slider' });
  }

  get basic() {
    return 'div[type=Slider]';
  }

  get container() {
    return `${this.basic}>div[ref=Container]`;
  }

  get sliderBar() {
    return `${this.container}>div[ref=Bar]>div[ref=SliderBar]`;
  }

  get progressBar() {
    return `${this.sliderBar}>div[ref=Progress]`;
  }

  get progressBarValue() {
    return cy.get(`${this.sliderBar}`).invoke('attr', 'w');
  }

  get progressValue() {
    return cy.get(`${this.sliderBar}>div[ref=Progress]`).invoke('attr', 'w');
  }

  get knob() {
    return `${this.container}>div[ref=Bar]>div[ref=Circle]`;
  }

  get leftArrow() {
    return `${this.container}>div[ref=LeftArrow]`;
  }

  get rightArrow() {
    return `${this.container}>div[ref=RightArrow]`;
  }

  get signalHandlingText() {
    return `${this.basic}+div[type=Textbox]>div[ref=Text]`;
  }
}

module.exports = new Slider();
