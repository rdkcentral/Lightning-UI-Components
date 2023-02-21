import LUIComponent from '../component';

class TooltipBasic extends LUIComponent {
  constructor() {
    super({ type: 'utilities', componentName: 'tooltip' });
  }
 
  get tooltip() {
    return 'div[type=Tooltip]';
  }
 
  get title() {
    return `${this.tooltip} div[type=Element] > div[type=TextBox] > div[ref=Text]`;
  }
}

module.exports = new TooltipBasic();
