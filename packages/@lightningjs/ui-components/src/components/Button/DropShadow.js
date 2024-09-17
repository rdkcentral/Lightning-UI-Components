import Shadow from '../Shadow/Shadow';
import utils from '../../utils';

export default function WithDropShadow(Base) {
  return class WithDropShadow extends Base {
    get _DropShadow() {
      return this.tag('DropShadow');
    }

    _update() {
      super._update();
      this._updateZContext();
      if (!super._updateLayout) {
        this._updateDropShadow();
      }
    }

    _updateZContext() {
      utils.createConditionalZContext(this, -2);
    }
    // Make sure any calls to _updateLayout update the shadow ex. Button
    _updateLayout() {
      super._updateLayout();
      this._updateDropShadow();
    }

    _updateDropShadow() {
      const shouldMask = ['Surface'].some(comp =>
        this._prototypeChain.has(comp)
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
        zIndex: -2
      };

      if (!this._DropShadow) {
        shadowPatch.type = Shadow;
      }
      this.patch({ DropShadow: shadowPatch });
    }

    _extensionCleanup() {
      this.patch({ DropShadow: undefined });
      super._extensionCleanup && super._extensionCleanup();
    }
  };
}
