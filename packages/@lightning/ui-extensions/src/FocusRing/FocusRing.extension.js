import { FocusRing, context, pool } from '@lightning/ui';

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
          alpha: 1,
          scale: [1, context.theme.animation.standardEntrance]
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
            context.theme.animation.expressiveEntrance // TODO: shoud this be xfast?
          ]
        };
      }

      _update() {
        super._update();
        this._updateFocusRing();
        this._updateFocusRingStyles();

        // Make sure the actual FocusRing updates run this frame, not next frame
        // B/C the rounded rectangle texture in FocusRing needs to render with
        // the updated width/height of this component
        if (this._FocusRing) {
          this._FocusRing._update();
        }
      }

      // Make sure any calls to _updateLayout update the focusRing ex. Button
      _updateLayout() {
        super._updateLayout();
        this._updateFocusRing();
        this._updateFocusRingStyles();

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
          }

          this._FocusRing.patch({
            w: calculatedW,
            h: calculatedH,
            x: calculatedW / 2,
            y: calculatedH / 2,
            tone: this.tone,
            alpha: 0,
            scale: 1,
            zIndex: this.parent.core.findZContext().zIndex + zOffset,
            style: {
              ...this.style.focusRingStyle,
              // allow overriding radius in focusRingStyles
              radius: this.style?.focusRingStyle?.radius ?? this.style.radius
            }
          });

          // Get values from FocusRing to set proper scale when unfocused so it animates in properly
          const { borderWidth, spacing } = this._FocusRing._componentStyle;

          // adding 2 to account for rounded rectangle bug
          const offset = (borderWidth + spacing) * 2 + 2;
          const focusRingScaleW = calculatedW / (calculatedW + offset);
          const focusRingScaleH = calculatedH / (calculatedH + offset);

          this._FocusRing.scale = this._unfocusedFocusRingScale = Math.min(
            focusRingScaleW,
            focusRingScaleH
          );
        }
      }

      _updateFocusRingStyles() {
        if (!this._FocusRing) return;

        // Update variant and styles
        const focusRingPatch = {
          tone: this.tone
        };

        if (this._isFocusedMode) {
          this.applySmooth(
            this._FocusRing,
            { ...focusRingPatch, ...this._focusStyle },
            { ...focusRingPatch, ...this._smoothFocusStyle }
          );
        } else {
          this.applySmooth(
            this._FocusRing,
            { ...focusRingPatch, ...this._unfocusStyle },
            { ...focusRingPatch, ...this._smoothUnfocusStyle }
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
