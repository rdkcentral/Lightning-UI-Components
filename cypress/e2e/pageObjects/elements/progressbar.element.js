import LUIComponent from '../component';

class ProgressBar extends LUIComponent {
  constructor() {
    super({ componentName: 'progressbar' });
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
}

module.exports = new ProgressBar();
