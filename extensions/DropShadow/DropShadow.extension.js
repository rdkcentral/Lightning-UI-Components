import Shadow from '../../elements/Shadow';

// An Extension Generator returns an extension/mixin function, but takes arguments to
// provide configurable behavior
export function dropShadowExtensionGenerator({
  componentsToMask = [],
  zOffset = -1
} = {}) {
  return function WithDropShadow(Base) {
    return class WithDropShadow extends Base {
      get _DropShadow() {
        return this.tag('DropShadow');
      }

      _update() {
        super._update();
        if (!super._updateLayout) {
          this._updateDropShadow();
        }
      }

      // Make sure any calls to _updateLayout update the shadow ex. Button
      _updateLayout() {
        super._updateLayout();
        this._updateDropShadow();
      }

      _updateDropShadow() {
        const shouldMask = componentsToMask.includes(
          this.constructor.__componentName
        );
        const shadowPatch = {
          maskShadow: shouldMask,
          // support variable height, like Tile with metadataLocation set to bottom
          w: this.innerW || this.w,
          h: this.innerH || this.h,
          mode: this.mode,
          style: {
            // pass in radius value from base
            radius: this.style.radius || 0
          },
          zIndex: this.parent.core.findZContext().zIndex + zOffset
        };

        if (!this._DropShadow) {
          shadowPatch.type = Shadow;
        }
        this.patch({ DropShadow: shadowPatch });
      }

      _destroy() {
        this.patch({ DropShadow: undefined });
        super._destroy && super._destroy();
      }
    };
  };
}

// The default export is the extension created by the generator with no arguments
const dropShadowExtension = dropShadowExtensionGenerator();
export default dropShadowExtension;
