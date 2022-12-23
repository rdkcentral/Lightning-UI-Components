import LUIComponent from '../component';

class ScrollWrapper extends LUIComponent {
  constructor() {
    super({ type: 'layout', componentName: 'scrollwrapper' });
  }

  get textarray() {
    return 'div[type=scrollwrapper]';
  }

  get basic() {
    return 'div[type=scrollwrapper]';
  }

  get scrollprogressbar() {
    return 'div[type=progressbar]>div[ref=Progress]';
  }

  get showScrollBar() {
    return 'div[type=scrollslider]';
  }

  get scrollcontainer() {
    return 'div[ref=ScrollContainer]';
  }

  get fadecontainer() {
    return 'div[ref=FadeContainer]';
  }

  get objectArrayTile() {
    return 'div[type=element]>div[type=element]>div[type=tile]';
  }

  get progress() {
    return 'div[type=ScrollWrapper]>div[ref=FadeContainer]>div[ref=ScrollContainer]';
  }
}

module.exports = new ScrollWrapper();
