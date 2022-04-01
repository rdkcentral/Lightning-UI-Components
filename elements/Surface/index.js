import Base from '../../Base';
import styles from './Surface.styles';
import withStyles from '../../mixins/withThemeStyles';
import { withExtensions } from '../../mixins';
import lng from '@lightningjs/core';

class Surface extends Base {
  static _template() {
    return {
      Background: {}
    };
  }

  static get __componentName() {
    return 'Surface';
  }

  static get tags() {
    return ['Background'];
  }

  get _stateColor() {
    if (this.hasFocus() && !this.disabled) {
      return this._componentStyles.backgroundColorFocused;
    } else if (!this.hasFocus() && !this.disabled) {
      return this._componentStyles.backgroundColorUnfocused;
    } else {
      return this._componentStyles.backgroundColorDisabled;
    }
  }

  _update() {
    this._updateLayout();
  }

  _updateLayout() {
    this._Background.patch({
      texture: lng.Tools.getRoundRect(
        this.w - 2,
        this.h - 2,
        this._componentStyles.radius,
        0,
        null,
        true,
        this._stateColor
      )
    });
  }
}

export default withExtensions(withStyles(Surface, styles));
