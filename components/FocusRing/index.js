/**
 * Focus Ring Component
 *
 * Blurred Ring to focus items and images
 *
 */
import lng from 'wpe-lightning';
import withStyles from '../../mixins/withStyles';
import { COLORS_NEUTRAL, getHexColor } from '../Styles/Styles';

export const styles = theme => ({
  color: getHexColor(COLORS_NEUTRAL.light2, 8),
  background: { color: getHexColor(COLORS_NEUTRAL.light2, 8) },
  focusRingAnimation: theme.animations.gradient
});

class FocusRing extends lng.Component {
  _construct() {
    this._whenEnabled = new Promise(
      resolve => (this._enable = resolve),
      console.error
    );
    this.color = this.styles.background.color;
    this._focusRingAnimation = this.styles.focusRingAnimation;
  }

  _init() {
    this._update();
  }

  set size(size) {
    this._size = size;
    this._update();
  }

  set radius(radius) {
    this._radius = radius;
    this._update();
  }

  set focusRingAnimation(focusRingAnimation) {
    this._focusRingAnimation = focusRingAnimation;
    this._update();
  }

  _update() {
    this._whenEnabled.then(() => {
      this.patch({
        Ring: {
          w: w => w + this._size * 2,
          h: h => h + this._size * 2,
          x: -this._size,
          y: -this._size,
          rect: true,
          shader: {
            type: lng.shaders.RoundedRectangle,
            radius: this._radius
          }
        }
      });
      this._focusRingAnimation &&
        this._Ring.animation(this._focusRingAnimation).start();
    });
  }

  get _Ring() {
    return this.tag('Ring');
  }
}

export default withStyles(FocusRing, styles);
