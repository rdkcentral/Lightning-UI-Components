import lng from '@lightningjs/core';
import Base from '../../Base';
import { withExtensions } from '../../mixins';
import withStyles from '../../mixins/withThemeStyles';
import styles from './ProgressBar.styles';
import withFocusRing from '../../patterns/withFocusRing';

class ProgressBar extends Base {
  static _template() {
    return {
      Bar: { zIndex: 1 },
      Progress: { alpha: 0, zIndex: 2 }
    };
  }

  static get __componentName() {
    return 'ProgressBar';
  }

  static get properties() {
    return ['animationDuration', 'progress', 'w', 'h'];
  }

  static get tags() {
    return ['Bar', 'Progress'];
  }

  _construct() {
    super._construct && super._construct();
    this._progress = 0;
    this._animationDuration = 0;
  }

  _update() {
    if (!this.w) {
      this.w = this._componentStyles.w;
    }
    if (!this.h) {
      this.h = this._componentStyles.h;
    }

    this._Bar.texture = lng.Tools.getRoundRect(
      // getRoundRect adds 2 to the width
      this._componentStyles.w - 2,
      this._componentStyles.h,
      this._componentStyles.radius,
      0,
      0,
      true,
      this._componentStyles.barColor
    );

    this._Progress.texture = lng.Tools.getRoundRect(
      this._componentStyles.w + 1,
      this._componentStyles.h,
      this._componentStyles.radius,
      0,
      0,
      true,
      this._componentStyles.progressColor
    );
    this._updateProgress();
  }

  _updateProgress() {
    const p = this._componentStyles.w * this._progress;
    const w = p <= 0 ? 0 : Math.min(p, this._componentStyles.w);
    this._Progress.smooth = {
      w: [w, { duration: this._animationDuration }],
      alpha: Number(w > 0)
    };
  }
}

export default withFocusRing(withExtensions(withStyles(ProgressBar, styles)));
