import lng from 'wpe-lightning';
import withStyles from '../../mixins/withStyles';
import { GREY, getHexColor } from '../Styles/Colors';

export const styles = theme => ({
  h: 8,
  w: 410,
  radius: theme.border.radius.xsmall,
  barColor: GREY[20],
  progressColor: getHexColor(GREY[0], 96)
});
export class ProgressBar extends lng.Component {
  static _template() {
    return {
      Bar: {},
      Progress: { alpha: 0 }
    };
  }

  _construct() {
    this._w = this.styles.w;
    this.h = this.styles.h;
    this._progress = 0;
    this._radius = this.styles.radius;
    this._progressColor = this.styles.progressColor;
    this._barColor = this.styles.barColor;
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
      w,
      alpha: Number(w > 0)
    };
  }

  _getColor(color, fill = false) {
    if (/^0x[0-9a-fA-F]{8}/g.test(color)) {
      // User enters a valid 0x00000000 hex code
      return Number(color);
    } else if (/^#[0-9a-fA-F]{6}/g.test(color)) {
      // User enters valid #000000 hex code
      return getHexColor(color.substr(1, 6), fill ? 96 : null);
    } else if (typeof color === 'string' && /^[0-9]{8-10}/g.test(color)) {
      return parseInt(color);
    } else if (
      typeof color === 'number' &&
      /^[0-9]{8-10}/g.test(color.toString())
    ) {
      return color;
    }
    return null;
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
    const validColor = this._getColor(barColor);
    if (validColor && validColor !== this._barColor) {
      this._barColor = validColor;
      this._update();
    }
  }

  get progressColor() {
    return this._progressColor;
  }
  set progressColor(progressColor) {
    const validColor = this._getColor(progressColor, true);
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
