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

  _init() {
    this.w = this.w || 410;
    this.h = this._barHeight;
    this._Bar.texture = lng.Tools.getRoundRect(
      this.w,
      this._barHeight,
      this._radius,
      0,
      0,
      true,
      getHexColor(COLORS_BASE.inactive, 96)
    );
    this._update();
  }

  set progress(progress) {
    this._progress = progress;
    this._update();
  }

  _update() {
    let { progress } = this;

    let w = this.w * (progress || 0);
    if (w > this.w) w = this.w;
    else if (w < 0) w = 0;

    this._Progress.smooth = {
      w,
      alpha: Number(w > 0),
      texture: lng.Tools.getRoundRect(
        w,
        this._barHeight,
        this._radius,
        0,
        0,
        true,
        getHexColor(COLORS_NEUTRAL.light2, 96)
      )
    };
  }

  get progress() {
    return this._progress;
  }

  get _barHeight() {
    return 8;
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
