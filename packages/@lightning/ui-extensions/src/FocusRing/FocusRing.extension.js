import { FocusRing, context, pool, utils } from '@lightning/ui';

context.on('themeUpdate', pool.clear);

export function focusRingExtensionGenerator({ zOffset = -2 } = {}) {
  return function focusRingExtension(Base) {
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
          alpha: [1, context.theme.animation.standardEntrance],
          scale: [1, context.theme.animation.standardEntrance]
        };
      }

      get _unfocusStyle() {
        return {
          alpha: 0
        };
      }

      get _smoothUnfocusStyle() {
        return {
          alpha: [0, { duration: context.theme.animation.duration.none }]
        };
      }

      _update() {
        super._update();
        this._updateFocusRing();

        // Make sure the actual FocusRing updates run this frame, not next frame
        // B/C the rounded rectangle texture in FocusRing needs to render with
        // the updated width/height of this component
        if (this._FocusRing) {
          this._FocusRing._update();
        }
      }

      // Focus transitions are fired once on mode change
      get mode() {
        return super.mode;
      }
      set mode(v) {
        const shouldUpdateStyle = v !== this.mode;
        super.mode = v;
        if (shouldUpdateStyle) {
          this._updateFocusStyle();
        }
      }

      _updateZContext() {
        // ensure zIndex Context for extension z offset settings
        utils.createConditionalZContext(this, zOffset);
      }

      // Make sure any calls to _updateLayout update the focusRing ex. Button
      _updateLayout() {
        super._updateLayout();
        this._updateFocusRing();

        // See note in _update()
        if (this._FocusRing) {
          this._FocusRing._update();
        }
      }

      _updateFocusRing() {
        // support variable height, like Tile with metadataLocation set to bottom
        const calculatedW = this.innerW || this.w;
        const calculatedH = this.innerH || this.h;

        // Only patch the FocusRing for the first time if item is focused
        if (this._isFocusedMode) {
          if (!this._FocusRing) {
            const focusRingComp =
              pool.get('focusring') ||
              pool.create({
                name: 'focusring',
                component: {
                  type: FocusRing,
                  alpha: 0.001, // Hide when first loads
                  mount: 0.5
                },
                stage: this.stage
              });

            this.patch({ FocusRing: focusRingComp });

            // if you didn't have ring, need to update focus style after creating it.
            // You would expect not to need this b/c updateFocusStyle is called in the  _focus method
            // after super_focus(), however, the _update flow happens on the following frame
            // due to queueRequestUpdate.
            this._updateFocusStyle();
          }
        }

        // allow sizing to be update even if not focused (for size changes on unfocus)
        if (this._FocusRing) {
          // if the Base component is in the middle of of a w/h transition, we can still
          // patch the size update b/c the update flow happens for each frame
          this._FocusRing.patch({
            w: calculatedW,
            h: calculatedH,
            x: calculatedW / 2,
            y: calculatedH / 2,
            zIndex: zOffset,
            style: {
              ...this.style.focusRingStyle,
              // allow overriding radius in focusRingStyles
              radius: this.style?.focusRingStyle?.radius ?? this.style.radius
            }
          });
        }
      }

      // moved this calc to helper method
      _getUnfocusScale() {
        // support variable height, like Tile with metadataLocation set to bottom
        const calculatedW = this.innerW || this.w;
        const calculatedH = this.innerH || this.h;
        // this is really just a pre-focus style so it starts scaled down

        // Get values from FocusRing to set proper scale when unfocused so it animates in properly
        // This works by patching the scale to the "before" size on focus before it's smoothed to
        // scale = 1 in _updateFocusStyle
        const { borderWidth, spacing } = this._FocusRing._componentStyle;
        const offset = (borderWidth + spacing) * 2;
        const focusRingScaleW = calculatedW / (calculatedW + offset);
        const focusRingScaleH = calculatedH / (calculatedH + offset);
        return Math.min(focusRingScaleW, focusRingScaleH);
      }

      _updateFocusStyle() {
        if (!this._FocusRing) return;

        if (this._isFocusedMode) {
          // arguably could plan an animation from the scaled down size to larger scale, but
          // using this legacy style of patching down and then transitioning up for now.
          this._FocusRing.patch({
            scale: this._getUnfocusScale()
          });

          this.applySmooth(
            this._FocusRing,
            this._focusStyle,
            this._smoothFocusStyle
          );
        } else {
          this.applySmooth(
            this._FocusRing,
            this._unfocusStyle,
            this._smoothUnfocusStyle
          );
        }
      }

      _extensionCleanup() {
        this.patch({ FocusRing: undefined });
        super._extensionCleanup && super._extensionCleanup();
      }
    };
  };
}

const focusRingExtension = focusRingExtensionGenerator();
export default focusRingExtension;
