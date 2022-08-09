import { default as context } from '../../context';
import { stringifyCompare, getDimensions } from '../../utils';

export default function withLayout(Base) {
  return class extends Base {
    _construct() {
      super._construct && super._construct();
      this._previousDimensionData = null; // Store the previous dimension data to compare next time _updateItemLayout is called
    }

    get itemLayout() {
      return this._itemLayout;
    }

    set itemLayout(itemLayout) {
      if (!stringifyCompare(this._itemLayout, itemLayout)) {
        this._itemLayout = itemLayout;
        this._updateItemLayout();
      }
    }

    _allowUpdate() {
      const {
        w = '',
        h = '',
        circle = '',
        ratioX = '',
        ratioY = '',
        upCount = ''
      } = this._itemLayout || {};
      // Store a string representation of all values from previous update to compare and decide if layout should change
      const layoutString =
        Object.values(context.theme.layout).join('') +
        `${w}${h}${circle ? 1 : 0}${ratioX}${ratioY}${upCount}`;
      if (layoutString !== this._previousDimensionData) {
        this._previousDimensionData = layoutString;
        return true;
      }
      return false;
    }

    _updateItemLayout() {
      if (!this._allowUpdate()) return;
      const { w, h } = getDimensions(this._itemLayout);
      if (this._itemLayout && this._itemLayout.circle) {
        this.w = this.innerH;
        this._layoutCircleMode = true;
        if (this.style) this.style.radius = this.h / 2;
      } else if (h || w) {
        // If there is not enough information passed in args to calculate item size
        const width = context.theme.layout.screenW;
        const height = context.theme.layout.screenH;
        this.w = w || h * (width / height); // Width must be set first in order for Cards to be displayed properly
        this.h = h || w * (height / width);
      }
      if (
        !this._itemLayout ||
        (!this._itemLayout.circle && this._layoutCircleMode)
      ) {
        // Cleanup after circle layout removed
        this.style.radius = undefined;
        this._layoutCircleMode = false;
      }
      super._update && super._update();
      this.fireAncestors('$itemChanged');
    }
  };
}
