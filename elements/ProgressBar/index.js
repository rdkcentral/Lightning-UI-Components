import lng from '@lightningjs/core';
import Base from '../../Base';
import { withExtensions } from '../../mixins';
import * as styles from './ProgressBar.styles';

class ProgressBar extends Base {
  static _template() {
    return {
      Bar: { zIndex: 1 },
      Progress: { alpha: 0, zIndex: 2 }
    };
  }

  static get __themeStyle() {
    return styles;
  }

  static get __componentName() {
    return 'ProgressBar';
  }

  static get properties() {
    return ['progress'];
  }

  static get tags() {
    return ['Bar', 'Progress'];
  }

  _construct() {
    super._construct && super._construct();
    this._progress = 0;
  }

  _update() {
    this._updateTextures();
    this._updateProgress();
  }

  _updateTextures() {
    this._Bar.texture = lng.Tools.getRoundRect(
      // getRoundRect adds 2 to the width
      this.w - 2,
      this.h,
      this.style.radius,
      0,
      0,
      true,
      this.style.barColor
    );

    this._Progress.texture = lng.Tools.getRoundRect(
      this.w + 1,
      this.h,
      this.style.radius,
      0,
      0,
      true,
      this.style.progressColor
    );
  }

  _updateProgress() {
    const p = this.w * this._progress;
    const w = p <= 0 ? 0 : Math.min(p, this.w);
    this._Progress.smooth = {
      w: [w, this.style.animation],
      alpha: Number(w > 0)
    };
  }
}

export default withExtensions(ProgressBar);
