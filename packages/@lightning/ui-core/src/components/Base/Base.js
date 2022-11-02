import lng from '@lightningjs/core';
import { context } from '../../globals/index.js';
import {
  withUpdates,
  withTags,
  withHandleKey,
  withLayout,
  withThemeStyles
} from '../../mixins/index.js';
import { isComponentOnScreen } from '../../utils/index.js';

class Base extends lng.Component {
  _construct() {
    this.constructor.__componentName; // Check that __componentName is set
    if (!this.loaded) this.loaded = Promise.resolve(); // By default this is a resolved promise. Components can use _resetLoadedPromise if they requre the functionality
  }

  _init() {
    this.queueRequestUpdate();
  }

  _resetLoadedPromise() {
    this.loaded = new Promise((resolve, reject) => {
      this._resolveLoadedPromise = resolve;
      this._rejectLoadedPromise = reject;
    });
  }

  _update() {}

  _focus() {
    if (this.shouldSmooth === undefined) this.shouldSmooth = true;
    this.queueRequestUpdate();
  }

  _unfocus() {
    this.queueRequestUpdate();
  }

  applySmooth(ref, patch, smooth) {
    if (this.shouldSmooth) {
      ref.smooth = smooth || patch;
    } else {
      ref.patch(patch);
    }
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

  get shouldSmooth() {
    return this._shouldSmooth;
  }

  set shouldSmooth(shouldSmooth) {
    this._shouldSmooth = shouldSmooth;
  }

  get _isDisabledMode() {
    return this.mode === 'disabled';
  }

  get _isUnfocusedMode() {
    return this.mode === 'unfocused';
  }

  get _isFocusedMode() {
    return this.mode === 'focused';
  }

  isFullyOnScreen() {
    return isComponentOnScreen(this);
  }

  getFocusScale() {
    return context.theme.layout.focusScale;
  }

  getUnfocusScale() {
    return 1;
  }
}

function withMixins(baseComponent) {
  return withLayout(
    withThemeStyles(withUpdates(withTags(withHandleKey(baseComponent))))
  );
}

export default withMixins(Base);
