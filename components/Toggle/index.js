import lng from 'wpe-lightning';
import { RoundRect } from '../../utils';

export default class Toggle extends lng.Component {
  static _template() {
    return {
      checked: false,
      Container: {
        w: 64,
        h: 32,
        texture: lng.Tools.getRoundRect(
          RoundRect.getWidth(64, { strokeWidth: 2 }),
          RoundRect.getHeight(32, { strokeWidth: 2 }),
          14,
          2,
          0xffececf2,
          true,
          0xff141417
        ),
        Knob: {
          zIndex: 2,
          x: 6,
          y: 7,
          texture: lng.Tools.getRoundRect(
            RoundRect.getWidth(16),
            RoundRect.getHeight(16),
            8,
            0,
            0,
            true,
            0xffececf2
          )
        }
      }
    };
  }

  toggle() {
    this.checked = !this.checked;
    this._update();
    return this;
  }

  _init() {
    this._update();
  }

  get onEnter() {
    return this._onEnter || this.toggle;
  }

  set onEnter(onEnter) {
    this._onEnter = onEnter;
  }

  _handleEnter() {
    if (typeof this.onEnter === 'function') {
      this.onEnter(this);
    }
  }

  _update() {
    const { checked } = this;
    this._Knob.smooth = { x: checked ? 40 : 6 };
  }

  get _Container() {
    return this.tag('Container');
  }
  get _Knob() {
    return this._Container.tag('Knob');
  }
}
