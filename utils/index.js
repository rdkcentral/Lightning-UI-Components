import lng from 'wpe-lightning';

/**
 * Lightning uses ARGB values, use this function
 * to convert know color to Lightning value
 * https://ifpb.github.io/javascript-guide/ecma/expression-and-operator/argb.html
 */
export function rgba2argb(rgbaStr) {
  let rgba = rgbaStr.replace(/rgba\(|\)/g, '').split(',');
  // Multiple Alpha Value
  rgba[3] = rgba[3] * 255;
  return lng.StageUtils.getArgbNumber(rgba);
}

/**
 * Helpers for lng.Tools.getRoundRect
 */
export const RoundRect = {
  /**
   * Returns a value that will render as the given width (w)
   * when passed to lng.Tools.getRoundRect
   * @param {number} w - px value for expected width
   * @param {*} options
   * @param {number} options.padding - px value for both left and right padding
   * @param {number} options.paddingLeft - px value for left padding, overrides options.padding
   * @param {number} options.paddingRight - px value for right padding, overrides options.padding
   * @param {number} options.strokeWidth - px value for stroke width
   */
  getWidth(w = 2, options = {}) {
    const { padding, paddingLeft, paddingRight, strokeWidth } = {
      padding: 0,
      paddingLeft: 0,
      paddingRight: 0,
      strokeWidth: 0,
      ...options
    };

    return (
      w - (paddingLeft || padding) - (paddingRight || padding) - strokeWidth - 2
    );
  },
  /**
   * Returns a value that will render as the given height (h)
   * when passed to lng.Tools.getRoundRect
   * @param {number} h - px value for expected width
   * @param {*} options
   * @param {number} options.padding - px value for both bottom and top padding
   * @param {number} options.paddingBottom - px value for bottom padding, overrides options.padding
   * @param {number} options.paddingTop - px value for top padding, overrides options.padding
   * @param {number} options.strokeWidth - px value for stroke width
   */
  getHeight(h = 2, options = {}) {
    const { padding, paddingBottom, paddingTop, strokeWidth } = {
      padding: 0,
      paddingBottom: 0,
      paddingTop: 0,
      strokeWidth: 0,
      ...options
    };

    return (
      h - (paddingBottom || padding) - (paddingTop || padding) - strokeWidth - 2
    );
  }
};

export const getTheme = (prev = {}, next = {}) => {
  return {
    ...prev,
    ...next,
    focus: {
      ...prev.focus,
      ...next.focus
    },
    unfocus: {
      ...prev.unfocus,
      ...next.unfocus
    }
  };
};
