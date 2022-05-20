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

  get _surfaceScale() {
    return this._hasFocus ? this._focusScale : this._unfocusScale;
  }

  get _focusScale() {
    return this._componentStyles.getFocusScale(this._w, this._h);
  }

  get _unfocusScale() {
    return this._componentStyles.getUnfocusScale(this._w, this._h);
  }

  get innerH() {
    return this.h;
  }

  get innerW() {
    return this.w;
  }

  _update() {
    this._updateLayout();
    this._updateScale();
  }

  _updateLayout() {
    this._Background.patch({
      texture: lng.Tools.getRoundRect(
        this.innerW - 2, // Reference the underscored values here in cause the h or w getters need to be overwritten for alignment - see Tile
        this.innerH - 2,
        this._componentStyles.radius,
        0,
        null,
        true,
        this._stateColor
      )
    });
  }

  _updateScale() {
    if (this._smooth) {
      this.smooth = {
        scale: [
          this._surfaceScale,
          this._hasFocus
            ? this._componentStyles.animationEntrance
            : this._componentStyles.animationExit
        ]
      };
    } else {
      this.patch({ scale: this._surfaceScale });
    }
  }
}

export default withExtensions(withStyles(Surface, styles));
