import { getDimensions, SCREEN } from '../../Styles/Layout';
import { stringifyCompare } from '../../utils';

export default function withLayout(Base) {
  return class extends Base {
    get itemLayout() {
      return this._itemLayout;
    }

    set itemLayout(itemLayout) {
      if (!stringifyCompare(this._itemLayout, itemLayout)) {
        this._itemLayout = itemLayout;
        const { w, h } = getDimensions(itemLayout);
        // If there is not enough information passed in args to calculate item size
        // Do not try to set h/w this will cause issues sizing the focus ring
        if (h || w) {
          const { w: width, h: height } = SCREEN;
          this.h = h || w * (height / width);
          this.w = w || h * (width / height);
          super._update && super._update();
        }
      }
    }
  };
}
