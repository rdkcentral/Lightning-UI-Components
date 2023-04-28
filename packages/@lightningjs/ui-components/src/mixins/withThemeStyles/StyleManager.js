import { generateComponentStyleSource, generateStyle } from './utils.js';
import lng from '@lightningjs/core';

export default class StyleManager extends lng.EventEmitter {
  constructor({ component }) {
    super(...arguments);
    this.component = component;
    // this._style = {}
    this._update();
  }

  async _update() {
    try {
      const componentStyleSource = await generateComponentStyleSource(
        this.component
      );

      this.style = await generateStyle(this.component, componentStyleSource);
    } catch (error) {
      //console.log('STYLE MANAGER ERROR', error);
    }
  }

  async updateStyle() {
    this.style = { foo: 'bar' };
  }

  set style(v) {
    this._style = v;
    this.emit('styleUpdate', this.style);
  }

  get style() {
    return this._style;
  }
}
