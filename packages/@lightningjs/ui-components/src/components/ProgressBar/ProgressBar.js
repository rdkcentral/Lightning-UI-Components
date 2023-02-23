import lng from '@lightningjs/core';
import Base from '../Base/index.js';
import * as styles from './ProgressBar.styles.js';

export default class ProgressBar extends Base {
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
    if (this._progressChanged) {
      this.fireAncestors('$announce', this.announce);
      this._progressChanged = false;
    }
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

  _setProgress(progress) {
    this._progressChanged = progress !== this._progress;
    return progress;
  }

  set announce(announce) {
    super.announce = announce;
  }

  get announce() {
    if (this._announce) {
      return this._announce;
    }

    let progress = this.progress;
    if (progress > 1) {
      progress = 1;
    } else if (progress < 0) {
      progress = 0;
    }
    return `${progress * 100}%`;
  }
}
