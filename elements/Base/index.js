import lng from '@lightningjs/core';
import {
  withStyles,
  withUpdates,
  withTags,
  withHandleKey,
  withLayout
  // withVibrant
} from '../../mixins';
import { isComponentOnScreen } from '../../utils';

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
    this.queueRequestUpdate();
  }

  _update() {}

  _focus() {
    if (this._smooth === undefined) this._smooth = true;
    this.queueRequestUpdate();
  }

  _unfocus() {
    this.queueRequestUpdate();
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
  // if (baseComponent.styles.withVibrant) {
  //   baseComponent = withVibrant(baseComponent);
  // }
  return withLayout(withUpdates(withTags(withHandleKey(baseComponent))));
}

export default withMixins(withStyles(Base, baseStyles));
