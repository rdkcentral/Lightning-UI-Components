import lng from '@lightningjs/core';
import {
  withStyles,
  withUpdates,
  withTags,
  withHandleKey,
  withLayout
  // withVibrant
} from '../../mixins';

const baseStyles = theme => ({
  getUnfocusScale: () => 1,
  getFocusScale: theme.getFocusScale
  // withVibrant: true
});

class Base extends lng.Component {
  _construct() {
    this._whenEnabled = new Promise(
      resolve => (this._whenEnabledResolver = resolve)
    );
    this._getFocusScale = this.styles.getFocusScale || function () {};
    this._getUnfocusScale = this.styles.getUnfocusScale || function () {};
  }

  _firstEnable() {
    this._whenEnabledResolver();
  }

  _init() {
    this._requestUpdateDebounce();
  }

  _update() {}

  _focus() {
    if (this._smooth === undefined) this._smooth = true;
    this._requestUpdateDebounce();
  }

  _unfocus() {
    this._requestUpdateDebounce();
  }

  // keep announce methods out of the update lifecycle (do not put in properties array)
  // announce methods does not re-render component
  get announce() {
    return this._announce;
  }
  set announce(announce) {
    this._announce = announce;
  }
}

function withMixins(baseComponent) {
  // if (baseComponent.styles.withVibrant) {
  //   baseComponent = withVibrant(baseComponent);
  // }
  return withLayout(withUpdates(withTags(withHandleKey(baseComponent))));
}

export default withMixins(withStyles(Base, baseStyles));
