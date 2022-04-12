import lng from '@lightningjs/core';
import { withUpdates, withTags, withHandleKey, withLayout } from './mixins';
import { isComponentOnScreen } from './utils';

class Base extends lng.Component {
  static get __componentName() {
    throw new Error('Every component must have a __componentName getter');
  }

  _construct() {
    this.constructor.__componentName; // Check that __componentName is set
    if (!this.loaded) this.loaded = Promise.resolve(); // By default this is a resolved promise. Components can use _resetLoadedPromise if they requre the functionality
  }

  _init() {
    this._requestUpdateDebounce();
  }

  _resetLoadedPromise() {
    this.loaded = new Promise((resolve, reject) => {
      this._resolveLoadedPromise = resolve;
      this._rejectLoadedPromise = reject;
    });
  }

  _update() {}

  _focus() {
    if (this._smooth === undefined) this._smooth = true;
    this._hasFocus = true; // Flag added as optimization. This should be more performant than calling this.hasFocus() repeatedly in component
    this._requestUpdateDebounce();
  }

  _unfocus() {
    this._hasFocus = false;
    this._requestUpdateDebounce();
  }

  get disabled() {
    return this._disabled;
  }

  set disabled(disabled) {
    if (this._disabled === disabled) {
      return;
    }
    this._disabled = disabled;
    this._requestUpdateDebounce();
  }

  // keep announce methods out of the update lifecycle (do not put in properties array)
  // announce methods do not need to re-render component
  get announce() {
    return this._announce;
  }

  set announce(announce) {
    this._announce = announce;
  }

  get announceContext() {
    return this._announceContext;
  }

  set announceContext(announce) {
    this._announceContext = announce;
  }

  isFullyOnScreen() {
    return isComponentOnScreen(this);
  }
}

function withMixins(baseComponent) {
  return withLayout(withUpdates(withTags(withHandleKey(baseComponent))));
}

export default withMixins(Base);
