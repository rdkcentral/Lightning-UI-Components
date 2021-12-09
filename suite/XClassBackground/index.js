import LinearGradient from '../../textures/LinearGradient';
import Base from '../../elements/Base';
import { getHexColor } from '../../Styles';

const BLUE = getHexColor('0E54E1');
const CYAN = getHexColor('4fd1c7');
const BLUE_OVERLAY = getHexColor('10009D');
const PURPLE = 'rgba(111, 42, 211, 73)';
const PURPLE_TRANSPARENT = 'rgba(232, 125, 255, 0)';

export default class XClassBackground extends Base {
  static _template() {
    return {
      BlueGradient: {
        rect: true,
        w: w => w,
        h: h => h,
        colorLeft: BLUE,
        colorRight: CYAN
      },
      PurpleGradient: {},
      BlueOverlay: {
        rect: true,
        w: w => w,
        h: h => h,
        color: BLUE_OVERLAY,
        alpha: 0.2
      }
    };
  }

  static get tags() {
    return ['BlueGradient', 'PurpleGradient', 'BlueOverlay'];
  }

  _init() {
    super._init();
    this._addPurple();
  }

  _addPurple() {
    this._PurpleGradient.patch({
      x: this.w / 2,
      texture: {
        type: LinearGradient,
        w: this.w / 2,
        h: this.h,
        degrees: 45,
        steps: [
          { percent: 0, color: PURPLE },
          { percent: 0.5, color: PURPLE_TRANSPARENT }
        ]
      }
    });
  }
}
