import lng from '@lightningjs/core';
import withStyles from '../../mixins/withStyles';
import { getValidColor } from '../../Styles/Colors';

export const styles = theme => ({
  h: 8,
  w: 410,
  radius: theme.border.radius.xsmall,
  barColor: theme.palette.grey[20],
  progressColor: theme.palette.getHexColor(theme.palette.grey[0], 96)
});
export class ProgressBar extends lng.Component {
  static _template() {
    return {
      Bar: { zIndex: 1 },
      Progress: { alpha: 0, zIndex: 2 }
    };
  }

  _construct() {
    this._w = this.styles.w;
    this.h = this.styles.h;
    this._progress = 0;
    this._radius = this.styles.radius;
    this._progressColor = this.styles.progressColor;
    this._barColor = this.styles.barColor;
    this._animationDuration = 0;
  }

  _init() {
    this._update();
  }

  _update() {
    const p = this.w * this.progress;
    const w = p <= 0 ? 0 : Math.min(p, this._w);

    this._Bar.texture = lng.Tools.getRoundRect(
      // getRoundRect adds 2 to the width
      this.w - 2,
      this.h,
      this.radius,
      0,
      0,
      true,
      this.barColor
    );

    this._Progress.texture = lng.Tools.getRoundRect(
      w + 1,
      this.h,
      this.radius,
      0,
      0,
      true,
      this.progressColor
    );

    this._Progress.smooth = {
      w: [w, { duration: this._animationDuration }],
      alpha: Number(w > 0)
    };
  }

  set animationDuration(duration) {
    if (this._animationDuration !== duration) {
      this._animationDuration = duration;
      this._update();
    }
  }

  get animationDuration() {
    return this._animationDuration;
  }

  get progress() {
    return this._progress;
  }

  set progress(progress) {
    if (progress !== this._progress) {
      this._progress = progress;
      this._update();
    }
  }

  get w() {
    return this._w;
  }

  set w(w) {
    if (w !== this._w) {
      super._w = w;
      this._update();
    }
  }

  get barColor() {
    return this._barColor;
  }
  set barColor(barColor) {
    const validColor = getValidColor(barColor);
    if (validColor && validColor !== this._barColor) {
      this._barColor = validColor;
      this._update();
    }
  }

  get progressColor() {
    return this._progressColor;
  }
  set progressColor(progressColor) {
    const validColor = getValidColor(progressColor);
    if (validColor && validColor !== this._progressColor) {
      this._progressColor = validColor;
      this._update();
    }
  }

  get radius() {
    return this._radius;
  }
  set radius(radius) {
    if (radius !== this._radius) {
      this._radius = radius;
      this._update();
    }
  }

  get _Bar() {
    return this.tag('Bar');
  }

  get _Progress() {
    return this.tag('Progress');
  }
}

export default withStyles(ProgressBar, styles);
