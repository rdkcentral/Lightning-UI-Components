import lng from '@lightningjs/core';
import {
  withStyles,
  withUpdates,
  withTags,
  withHandleKey,
  withLayout,
  withVibrant
} from '../../mixins';

const baseStyles = theme => ({
  getUnfocusScale: () => 1,
  getFocusScale: theme.getFocusScale
  // withVibrant: true
});

class Base extends lng.Component {
  _construct() {
    this._whenEnabled = new Promise(resolve => (this._firstEnable = resolve));
    this._getFocusScale = this.styles.getFocusScale || function () {};
    this._getUnfocusScale = this.styles.getUnfocusScale || function () {};
  }

  _init() {
    this._update();
  }

  _update() {}

  _focus() {
    if (this._smooth === undefined) this._smooth = true;
    this._update();
  }

  _unfocus() {
    this._update();
  }
}

function withMixins(baseComponent) {
  if (baseComponent.styles.withVibrant) {
    baseComponent = withVibrant(baseComponent);
  }
  return withLayout(withUpdates(withTags(withHandleKey(baseComponent))));
}

export default withMixins(withStyles(Base, baseStyles));
