import LUIComponent from '../component';

class Distractor extends LUIComponent {
  constructor() {
    super({ type: 'utilities', componentName: 'distractor' });
  }

  get circle1() {
    return 'div[type=Distractor]>div[ref=Circle1]';
  }

  get circle2() {
    return 'div[type=Distractor]>div[ref=Circle2]';
  }

  get circle3() {
    return 'div[type=Distractor]>div[ref=Circle3]';
  }
}

module.exports = new Distractor();
