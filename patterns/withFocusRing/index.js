import FocusRing from '../../elements/FocusRing';
import { withMixinExtensions } from '../../mixins/withExtensions';

function withFocusRing(Base) {
  return class extends Base {
    // Default focus ring
    get _FocusRing() {
      return this.tag('FocusRing');
    }

    get _focusRingType() {
      return FocusRing;
    }

    _construct() {
      super._construct();
      this.focusStyle = { alpha: 1 };
      this.unfocusStyle = { alpha: 0 };
    }

    _update() {
      this._updateFocusRing(); // Needs to be patched in before other updates
      super._update && super._update();
    }

    _updateFocusRing() {
      if (!this._componentStyles || !this._componentStyles.focusRing) {
        if (this._FocusRing) {
          this.patch({
            FocusRing: undefined
          });
        }
        return;
      }

      if (this.hasFocus() || this._FocusRing) {
        if (!this._FocusRing) {
          this.patch({ FocusRing: { type: this._focusRingType } });
        }

        this._FocusRing.patch({
          w: this.w,
          h: this.h,
          variant: this.variant,
          zIndex: this.zIndex + 10,
          style: {
            color: this._componentStyles.focusRingColor,
            radius: this._componentStyles.radius || 0 + 2
          }
        });

        const style = this.hasFocus() ? this.focusStyle : this.unfocusStyle;

        if (this._smooth) {
          this._FocusRing.smooth = style;
        } else {
          this._FocusRing.patch(style);
        }

        if (this.hasFocus()) {
          this._FocusRing.startAnimation();
        } else {
          this._FocusRing.stopAnimation();
        }
      }
    }
  };
}

export default Base =>
  withMixinExtensions(withFocusRing(Base), withFocusRing.name);
