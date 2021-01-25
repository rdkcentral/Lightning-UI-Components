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
          mount: 0.5,
          x: this.w / 2,
          y: this.h / 2,
          smooth: { alpha: 1 },
          texture: lng.Tools.getRoundRect(
            this.w + this._size * 2,
            this.h + this._size * 2,
            this._radius
          )
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
