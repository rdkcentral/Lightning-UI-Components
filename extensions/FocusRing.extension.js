import FocusRing from '../elements/FocusRing';
import context from '../context';
import Pool from '../utils/pool';

context.on('themeUpdate', Pool.clear);

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
        scale: [1, context.theme.animations.standardEntrance]
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
          context.theme.animations.expressiveEntrance // TODO: shoud this be xfast?
        ]
      };
    }

    _update() {
      super._update();
      this._updateFocusRing();
      this._updateFocusRingStyles();
    }

    // Make sure any calls to _updateLayout update the focusRing ex. Button
    _updateLayout() {
      super._updateLayout();
      this._updateFocusRing();
    }

    _updateFocusRing() {
      // support variable height, like Tile with metadataLocation set to bottom
      const calculatedW = this.innerW || this.w;
      const calculatedH = this.innerH || this.h;

      // Only patch the FocusRing for the first time if item is focused
      if (this.mode === 'focused') {
        if (!this._FocusRing) {
          const focusRingComp =
            Pool.get('focusring') ||
            Pool.create({
              name: 'focusring',
              component: {
                type: FocusRing,
                alpha: 0.001, // Hide when first loads
                mount: 0.5
              },
              stage: this.stage
            });

          this.patch({
            FocusRing: focusRingComp
          });
        }

        this._FocusRing.patch({
          w: calculatedW,
          h: calculatedH,
          x: calculatedW / 2,
          y: calculatedH / 2,
          palette: this.palette,
          style: this.style.focusRingStyle,
          alpha: 0,
          scale: 1,
          zIndex: this.parent.core.findZContext().zIndex - 1
        });

        // Get values from FocusRing to set proper scale when unfocused so it animates in properly
        const { borderWidth, spacing } = this._FocusRing._componentStyle;

        // adding 2 to account for rounded rectangle bug
        const offset = borderWidth * 2 + spacing * 2 + 2;
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
        palette: this.palette,
        style: {
          radius: this.style.radius || 0
        }
      };

      if (this.mode === 'focused') {
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

    _destroy() {
      this.patch({ FocusRing: undefined });
      super._destroy && super._destroy();
    }
  };
}
