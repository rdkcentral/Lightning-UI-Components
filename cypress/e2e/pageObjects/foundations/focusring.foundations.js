import LUIComponent from '../component';

class FocusRing extends LUIComponent {
  constructor() {
    super({ type: 'foundations', componentName: 'focusring' });
  }

  get focusRing() {
    return 'div[type=FocusRing]';
  }

  get focusringanimate() {
    return 'div[type=FocusRing] > div[type=Element]';
  }
}

module.exports = new FocusRing();
