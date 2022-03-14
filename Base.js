import lng from '@lightningjs/core';
import { withUpdates, withTags, withHandleKey, withLayout } from './mixins';
import { isComponentOnScreen } from './utils';

class Base extends lng.Component {
  static get __componentName() {
    throw new Error('Every component must have a __componentName getter');
  }

  _construct() {
    this.constructor.__componentName; // Check that __componentName is set
  }

  _update() {}

  _focus() {
    if (this._smooth === undefined) this._smooth = true;
    this._update();
  }

  _unfocus() {
    this._update();
  }

  // keep announce methods out of the update lifecycle (do not put in properties array)
  // announce methods do not need to re-render component
  get announce() {
    return this._announce;
  }

  set announce(announce) {
    this._announce = announce;
  }

  isFullyOnScreen() {
    return isComponentOnScreen(this);
  }
}

function withMixins(baseComponent) {
  return withLayout(withUpdates(withTags(withHandleKey(baseComponent))));
}

export default withMixins(Base);
