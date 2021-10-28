import lng from '@lightningjs/core';
import { withUpdates, withTags, withHandleKey, withLayout } from './mixins';

class Base extends lng.Component {
  static get __componentName() {
    throw new Error('Every component must have a __componentName getter');
  }

  _construct() {
    this._whenEnabled = new Promise(
      resolve => (this._whenEnabledResolver = resolve)
    );

    this.constructor.__componentName; // Check that __componentName is set
    this._whenEnabled = new Promise(
      resolve => (this._whenEnabledResolver = resolve)
    );
  }

  _firstEnable() {
    this._whenEnabledResolver();
  }

  _update() {
    this._smooth = false;
  }

 _focus() {
    if (this._smooth === undefined) this._smooth = true;
    this._update();
  }

  _unfocus() {
    this._update();
  }
}

function withMixins(baseComponent) {
  return withLayout(withUpdates(withTags(withHandleKey(baseComponent))));
}

export default withMixins(Base);
