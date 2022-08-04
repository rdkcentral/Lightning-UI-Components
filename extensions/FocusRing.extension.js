import FocusRing from '../elements/FocusRing';
import context from '../context';
import { getThemeAnimation } from '../utils';

export default function focusRingExtension(Base) {
  return class WithFocusRing extends Base {
    get _FocusRing() {
      return this.tag('FocusRing');
    }

    get _focusStyle() {
      return {
        alpha: 1,
        scale: 1
      };
    }

    get _smoothFocusStyle() {
      return {
        alpha: 1,
        scale: [
          1,
          getThemeAnimation('emphasizedEntrance', 'fast')
        ]
      };
    }

    get _unfocusStyle() {
      return {
        alpha: 0,
        scale: this._unfocusedFocusRingScale
      };
    }

    get _smoothUnfocusStyle() {
      return {
        alpha: 0,
        scale: [
          this._unfocusedFocusRingScale,
          getThemeAnimation('expressiveEntrance', 'xFast')
        ]
      };
    }

    _update() {
      this._updateFocusRing();
      this._updateFocusRingStyles();
      super._update();
    }

    _updateFocusRing() {
      // Reference the underscore value to support Tile with metadataLocation set to bottom
      const calculatedW = this._w;
      const calculatedH = this._h;

      // Only patch the FocusRing for the first time if item is focused
      if (!this._FocusRing) {
        this.patch({
          FocusRing: {
            type: FocusRing,
            alpha: 0.001, // Hide when first loads
            mount: 0.5,
            w: calculatedW,
            h: calculatedH,
            x: calculatedW / 2,
            y: calculatedH / 2,
            zIndex: this.parent.core.findZContext().zIndex - 1
          }
        });

        // Get values from FocusRing to set proper scale when unfocused so it animates in properly
        const { borderWidth, spacing } = this._FocusRing._componentStyles;

        // adding 2 to account for rounded rectangle bug
        const focusRingScaleW =
          calculatedW / (calculatedW + borderWidth * 2 + spacing * 2 + 2);
        const focusRingScaleH =
          calculatedH / (calculatedH + borderWidth * 2 + spacing * 2 + 2);

        this._FocusRing.scale = this._unfocusedFocusRingScale = Math.min(
          focusRingScaleW,
          focusRingScaleH
        );
      }

      // Update width of the FocusRing if the component w/h is updated
      if (
        calculatedW !== this._FocusRing.w ||
        calculatedH !== this._FocusRing.h
      ) {
        this._FocusRing.patch({
          w: calculatedW,
          h: calculatedH,
          x: calculatedW / 2,
          y: calculatedH / 2
        });
      }
    }

    _updateFocusRingStyles() {
      // Update variant and styles
      let focusRingPatch = {
        variant: this.variant,
        style: {
          radius: this._componentStyles.radius || 0
        }
      };

      if (this.hasFocus()) {
        if (this._smooth) {
          focusRingPatch.smooth = this._smoothFocusStyle;
        } else {
          focusRingPatch = { ...focusRingPatch, ...this._focusStyle };
        }
        this._FocusRing.patch(focusRingPatch);
        this._FocusRing.startAnimation();
      } else {
        if (this._smooth) {
          focusRingPatch.smooth = this._smoothUnfocusStyle;
        } else {
          focusRingPatch = { ...focusRingPatch, ...this._unfocusStyle };
        }
        this._FocusRing.patch(focusRingPatch);
        this._FocusRing.stopAnimation();
      }
    }

    _destroy() {
      this.patch({ FocusRing: undefined });
      super._destroy && super._destroy();
    }
  };
}
