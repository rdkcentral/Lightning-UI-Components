import LUIComponent from '../component';

class Surface extends LUIComponent {
  constructor() {
    super({ type: 'foundations', componentName: 'surface' });
  }

  get surface() {
    return 'div[type=Surface]';
  }

}

module.exports = new Surface();