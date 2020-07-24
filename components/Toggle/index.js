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
        Circle: {
          zIndex: 2,
          x: 8,
          y: 8,
          texture: lng.Tools.getRoundRect(
            RoundRect.getWidth(16),
            RoundRect.getHeight(16),
            7,
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

  _handleEnter() {
    this.toggle();
  }

  _update() {
    const { checked } = this;
    this._Circle.smooth = { x: checked ? 40 : 8 };
  }

  get _Container() {
    return this.tag('Container');
  }
  get _Circle() {
    return this._Container.tag('Circle');
  }
}
