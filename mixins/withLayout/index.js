import { default as context } from '../../context';
import { getDimensions } from '../../Styles/Layout';
import { stringifyCompare } from '../../utils';

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
        ratioX = '',
        ratioY = '',
        upCount = ''
      } = this._itemLayout || {};
      // Store a string representation of all values from previous update to compare and decide if layout should change
      const layoutString =
        Object.values(context.theme.layout).join('') +
        `${w}${h}${ratioX}${ratioY}${upCount}`;
      if (layoutString !== this._previousDimensionData) {
        this._previousDimensionData = layoutString;
        return true;
      }
      return false;
    }

    _updateItemLayout() {
      if (!this._allowUpdate()) return;
      const { w, h } = getDimensions(this._itemLayout);
      // If there is not enough information passed in args t∏o calculate item size
      // Do not try to set h/w this will cause issues sizing the focus ring
      if (h || w) {
        const width = context.theme.layout.screenW;
        const height = context.theme.layout.screenH;
        this.h = h || w * (height / width);
        this.w = w || h * (width / height);
        super._update && super._update();
      }
    }
  };
}
