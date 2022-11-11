import LUIComponent from '../component';

class Wave extends LUIComponent {
  constructor() {
    super({ type: 'utilities', componentName: 'wave' });
  }

  get wave() {
    return 'div[type=Wave]';
  }

  get left1() {
    return 'div[type=Wave]>div[ref=Left1]';
  }

  get left2() {
    return 'div[type=Wave]>div[ref=Left2]';
  }

  get middle() {
    return 'div[type=Wave]>div[ref=Middle]';
  }

  get right1() {
    return 'div[type=Wave]>div[ref=Right1]';
  }

  get right2() {
    return 'div[type=Wave]>div[ref=Right2]';
  }
}

module.exports = new Wave();
