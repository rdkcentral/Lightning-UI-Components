import lng from 'wpe-lightning';

import {
  CORNER_RADIUS,
  COLORS_BASE,
  COLORS_NEUTRAL,
  getHexColor
} from '../Styles';

export default class ProgressBar extends lng.Component {
  static _template() {
    return {
      Bar: {},
      Progress: { alpha: 0 }
    };
  }

  _construct() {
    this._w = 410;
    this._h = 8;
    this._progress = 0;
  }

  _init() {
    this._Bar.texture = lng.Tools.getRoundRect(
      // getRoundRect adds 2 to the width
      this.w - 2,
      this.h,
      this._radius,
      0,
      0,
      true,
      getHexColor(COLORS_BASE.inactive, 96)
    );
    this._update();
  }

  _update() {
    let w = this.w * this.progress;
    if (w > this.w) w = this.w;
    if (w < 0) w = 0;

    this._Progress.texture = lng.Tools.getRoundRect(
      // transitioning to/from 0 texture width looks like it's missing a fill
      w + 1,
      this.h,
      this._radius,
      0,
      0,
      true,
      getHexColor(COLORS_NEUTRAL.light2, 96)
    );
    this._Progress.smooth = {
      w,
      alpha: Number(w > 0)
    };
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

  get _radius() {
    return CORNER_RADIUS.xsmall;
  }
  get _Bar() {
    return this.tag('Bar');
  }
  get _Progress() {
    return this.tag('Progress');
  }
}
