import FocusRing from '../elements/FocusRing';
import context from '../context';

export default {
  methods: {
    after__update() {
      /** If component does not have FocusRing true clean up any previous element and stop execution */
      if (
        !this._componentStyles ||
        this.disabled ||
        !this._componentStyles.focusRing
      ) {
        if (this.tag('FocusRing')) {
          this.patch({
            FocusRing: undefined
          });
        }
        return;
      }

      const _focused = this.hasFocus();
      const calculatedW = this._w; // Reference the underscore value to support Tile with metadataLocation set to bottom
      const calculatedH = this._h;
      /**
       * Only patch the FocusRing for the first time if item is focused
       */
      if (!this.tag('FocusRing')) {
        this.patch({
          FocusRing: {
            type: FocusRing,
            alpha: 0.001, // Hide when first loads
            h: calculatedH,
            mount: 0.5,
            w: calculatedW,
            x: calculatedW / 2,
            y: calculatedH / 2,
            zIndex: this.parent.core.findZContext().zIndex - 1
          }
        });
        // Get the values from the FocusRing to establish the proper scale when unfocused so it animates in properly
        const { borderWidth, spacing } = this.tag('FocusRing')._componentStyles;
        const focusRingScaleW =
        calculatedW / (calculatedW + borderWidth * 2 + spacing * 2 + 2); // 2 to account for rounded rectangle bug
        const focusRingScaleH =
        calculatedH / (calculatedH + borderWidth * 2 + spacing * 2 + 2);
        this._unfocusedFocusRingScale = Math.min(
          focusRingScaleW,
          focusRingScaleH
        );
        this.tag('FocusRing').scale = this._unfocusedFocusRingScale;
      }

      if (_focused) {
        this.tag('FocusRing').alpha = 1; // Ensure FocusRing is visible
      }

      /**
       * Update width of the FocusRing if the component w/h is updated
       */
      if (
        calculatedW !== this.tag('FocusRing').w ||
        calculatedH !== this.tag('FocusRing').h
      ) {
        this.tag('FocusRing').patch({
          x: calculatedW / 2,
          y: calculatedH / 2,
          w: calculatedW,
          h: calculatedH
        });
      }

      /**
       * Update variant and styles
       */
      const focusRingPatch = {
        variant: this.variant,
        style: {
          radius: this._componentStyles.radius || 0
        }
      };

      if (_focused) {
        if (this._smooth) {
          focusRingPatch.scale = [
            1,
            {
              duration: context.theme.animations.emphasizedEntranceDuration,
              delay: context.theme.animations.emphasizedEntranceDelay,
              timingFunction: context.theme.animations.emphasizedEntrance
            }
          ];
        } else {
          focusRingPatch.scale = 1;
        }
      } else {
        if (this._smooth) {
          focusRingPatch.scale = [
            this._unfocusedFocusRingScale,
            {
              duration: context.theme.animations.emphasizedExitDuration,
              delay: context.theme.animations.emphasizedExitDelay,
              timingFunction: context.theme.animations.emphasizedExit
            }
          ];
        } else {
          focusRingPatch.scale = this._unfocusedFocusRingScale;
        }
      }

      if (this._smooth) {
        this.tag('FocusRing').smooth = focusRingPatch;
      } else {
        this.tag('FocusRing').patch(focusRingPatch);
      }

      if (_focused) {
        this.tag('FocusRing').startAnimation();
      } else {
        this.tag('FocusRing').stopAnimation();
      }
    }
  },
  destroy() {
    this.patch({ FocusRing: undefined });
    // TODO: Remove all animations
  }
};
