import LUIComponent from '../component';

class Notification extends LUIComponent {
  constructor() {
    super({ type: 'foundations', componentName: 'notification' });
  }

  get notification() {
    return 'div[type=Notification] > div[ref=Container]';
  }

  get actionArea() {
    return `${this.notification} > div[ref=ActionArea] div[type=Element]`;
  }

  get description() {
    return `${this.notification} div[ref=Description] div[type=Element]`;
  }

  get title() {
    return `${this.notification} div[ref=Title] div[type=Element]`;
  }

  get icon() {
    return `${this.notification} div[type=Icon]`;
  }
}

module.exports = new Notification();
