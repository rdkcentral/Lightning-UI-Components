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

      /**
       * Only patch the FocusRing for the first time if item is focused
       */
      if (!this.tag('FocusRing')) {
        this.patch({
          FocusRing: {
            type: FocusRing,
            alpha: 0.001, // Hide when first loads
            h: this.h,
            mount: 0.5,
            w: this.w,
            x: w => w / 2,
            y: h => h / 2,
            zIndex: -1
          }
        });
        // Get the values from the FocusRing to establish the proper scale when unfocused so it animates in properly
        const { borderWidth, spacing } = this.tag('FocusRing')._componentStyles;
        const focusRingScaleW =
          this.w / (this.w + borderWidth * 2 + spacing * 2 + 2); // 2 to account for rounded rectangle bug
        const focusRingScaleH =
          this.h / (this.h + borderWidth * 2 + spacing * 2 + 2);
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
        this.w !== this.tag('FocusRing').w ||
        this.h !== this.tag('FocusRing').h
      ) {
        this.tag('FocusRing').patch({
          x: w => w / 2,
          y: h => h / 2,
          w: this.w,
          h: this.h
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
          focusRingPatch.alpha = 1;
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
        this.tag('FocusRing').alpha = 0;
      }
    }
  },
  destroy() {
    this.patch({ FocusRing: undefined });
    // TODO: Remove all animations
  }
};
