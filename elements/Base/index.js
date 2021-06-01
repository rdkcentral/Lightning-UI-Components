import lng from '@lightningjs/core';
import { withStyles, withUpdates, withTags, withHandleKey } from '../../mixins';

const baseStyles = theme => ({});

class Base extends lng.Component {
  _update() {
    this._updateFocusScale();
  }

  _updateFocusScale() {}

  _focus() {
    this._update();
  }

  _unfocus() {
    this._update();
  }
}

export default withStyles(
  withUpdates(withTags(withHandleKey(Base))),
  baseStyles
);
