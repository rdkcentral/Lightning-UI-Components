import context from '../../context';

const isInvalidNum = v => isNaN(parseFloat(v)) || v < 0;
class Layout {
  constructor() {
    // FocusScale Multiplier
    this._focusScaleMultiplier = 2;
    // Multiplier Defaults
    this._gutterXMultiplier = 2;
    this._gutterYMultiplier = 2;
    this._marginXMultiplier = 15;
    this._marginYMultiplier = 15;
    this._safeMultiplier = 5;
    this._utilityMultiplier = 10;

    // Layout defaults
    this._spacingBase = 10;
    this._columnCount = 10;
    this._screenH = 1080;
    this._screenW = 1920;
  }

  /**
   * Multipliers
   */

  get focusScaleMultiplier() {
    return this._focusScaleMultiplier;
  }

  set focusScaleMultiplier(v) {
    if (isInvalidNum(v)) return;
    this._focusScaleMultiplier = v;
  }

  get gutterXMultiplier() {
    return this._gutterXMultiplier;
  }

  set gutterXMultiplier(v) {
    if (isInvalidNum(v)) return;
    this._gutterXMultiplier = v;
  }

  get gutterYMultiplier() {
    return this._gutterYMultiplier;
  }

  set gutterYMultiplier(v) {
    if (isInvalidNum(v)) return;
    this._gutterYMultiplier = v;
  }

  get marginXMultiplier() {
    return this._marginXMultiplier;
  }

  set marginXMultiplier(v) {
    if (isInvalidNum(v)) return;
    this._marginXMultiplier = v;
  }

  get marginYMultiplier() {
    return this._marginYMultiplier;
  }

  set marginYMultiplier(v) {
    if (isInvalidNum(v)) return;
    this._marginYMultiplier = v;
  }

  get safeMultiplier() {
    return this._safeMultiplier;
  }

  set safeMultiplier(v) {
    if (isInvalidNum(v)) return;
    this._safeMultiplier = v;
  }

  get utilityMultiplier() {
    return this._utilityMultiplier;
  }

  set utilityMultiplier(v) {
    if (isInvalidNum(v)) return;
    this._utilityMultiplier = v;
  }

  /**
   * Layout values
   */

  get columnCount() {
    return this._columnCount;
  }

  set columnCount(v) {
    if (isInvalidNum(v)) return;
    this._columnCount = v;
  }

  get gutterX() {
    if (!this._gutterX) {
      return this._getGutterXDefaults();
    }
    return this._gutterX;
  }

  set gutterX(v) {
    if ('object' !== typeof v) return;
    this._gutterX = {
      ...this._getGutterXDefaults(),
      ...v
    };
  }

  get gutterY() {
    if (!this._gutterY) {
      return this._getGutterYDefaults();
    }
    return this._gutterY;
  }

  set gutterY(v) {
    if ('object' !== typeof v) return;
    this._gutterY = {
      ...this._getGutterYDefaults(),
      ...v
    };
  }

  get marginX() {
    if (!this._margins) return this._spacingBase * this._marginXMultiplier;
    return this._marginX;
  }

  set marginX(v) {
    if (isInvalidNum(v)) return;
    this._marginX = v;
  }

  get marginY() {
    if (!this._margins) return this._spacingBase * this._marginYMultiplier;
    return this._marginY;
  }

  set marginY(v) {
    if (isInvalidNum(v)) return;
    this._marginY = v;
  }

  get screenW() {
    return this._screenW;
  }

  set screenW(v) {
    if (isInvalidNum(v)) return;
    this._screenW = v;
  }

  get screenH() {
    return this._screenH;
  }

  set screenH(v) {
    if (isInvalidNum(v)) return;
    this._screenH = v;
  }

  get spacingBase() {
    return this._spacingBase;
  }

  set spacingBase(v) {
    if (isInvalidNum(v)) return;
    this._spacingBase = v;
  }

  get safe() {
    if (!this._safe) return this._spacingBase * this._safeMultiplier;
    return this._safe;
  }

  set safe(v) {
    if (isInvalidNum(v)) return;
    this._safe = v;
  }

  get utility() {
    if (!this._utility) return this._spacingBase * this._utilityMultiplier;
    return this._utility;
  }

  set utility(v) {
    if (isInvalidNum(v)) return;
    this._utility = v;
  }

  _getGutterXDefaults() {
    return {
      xsmall: this._spacingBase * this._gutterXMultiplier,
      small: this._spacingBase * (this._gutterXMultiplier * 2),
      medium: this._spacingBase * (this._gutterXMultiplier * 3),
      large: this._spacingBase * (this._gutterXMultiplier * 4),
      xlarge: this._spacingBase * (this._gutterXMultiplier * 5)
    };
  }

  _getGutterYDefaults() {
    return {
      xsmall: this._spacingBase * this._gutterYMultiplier,
      small: this._spacingBase * (this._gutterYMultiplier * 2),
      medium: this._spacingBase * (this._gutterYMultiplier * 3),
      large: this._spacingBase * (this._gutterYMultiplier * 4),
      xlarge: this._spacingBase * (this._gutterYMultiplier * 5)
    };
  }
}

export const layout = new Layout();

export function spacing(multiplier) {
  let base = 1;
  const theme = context.theme;
  if (theme && theme.layout && theme.layout.spacingBase) {
    base = theme.layout.spacingBase;
  }
  return base * multiplier;
}

export function calculateColumnWidth(upCount = 1) {
  const screenW = context.theme.layout.screenW;
  const columnCount = context.theme.layout.columnCount;
  const marginX = context.theme.layout.marginX;
  const gutterX = context.theme.layout.gutterX.xsmall;

  if (upCount < 1 || upCount > columnCount) {
    context.error(
      `Column expects a number between 1 & ${columnCount}. Received ${upCount}`
    );
    return;
  }

  // the screen width, minus the margin x on each side
  const columnWidth = screenW - marginX * 2;
  // the total space of column gaps in between items
  const columnGapTotal = (upCount - 1) * gutterX;
  // the remaining amount of space left for all items
  const totalColumnsWidth = columnWidth - columnGapTotal;
  // the width of each item in that remaining width
  return totalColumnsWidth / upCount;
}

export function getFocusScale(w) {
  return w && context.theme.layout.focusScaleMultiplier > 1
    ? (w +
        context.theme.layout.spacingBase *
          context.theme.layout.focusScaleMultiplier) /
        w
    : 1;
}

export function getUnfocusScale() {
  return 1;
}

/**
 * Determines the width and height of an item based off the data passed into the item
 * (either all necessary parameters to calculate the dimensions dynamically,
 * OR all the necessary parameters to hard set the dimensions).
 *
 * @param { object } obj
 * @param { object } fallback
 *
 * @return { { number, number } }
 */
export function getDimensions(obj = {}, fallback = {}) {
  const { w, h, ratioX, ratioY, upCount } = obj;
  const fallbackW = fallback.w || 0;
  const fallbackH = fallback.h || 0;
  let dimensions = {};

  // hard set width and height values were passed in and should override other params
  if (w && h) {
    dimensions = {
      w,
      h: h
    };
  } else if (h && ratioX && ratioY) {
    // hard set height and ratio values were passed in, meaning the row has items with mixed ratios, so the width needs to be calculated
    dimensions = {
      w: Math.round((h * ratioX) / ratioY),
      h: h
    };
    // calculate dynamic width and height based off item ratios
  } else if (ratioX && ratioY && upCount) {
    dimensions = getItemRatioDimensions(ratioX, ratioY, upCount);
  } else if (h && upCount) {
    // calculate dynamic width based off a row upcount and a given height
    dimensions = {
      w: Math.round(calculateColumnWidth(upCount)),
      h: h
    };
  } else if (h) {
    dimensions = {
      w: fallbackW,
      h: h
    };
  } else if (w) {
    dimensions = {
      w: w,
      h: fallbackH
    };
  } else {
    // not enough information was provided to properly size the component
    dimensions = {
      w: fallbackW,
      h: fallbackH
    };
  }

  dimensions = {
    ...dimensions,
    ratioX,
    ratioY,
    upCount
  };

  return dimensions;
}

/**
 * Calculates the width and height of an item based off the given ratios
 * and number of columns across the screen that should be visible before peaking
 *
 * @param { number } ratioX
 * @param { number } ratioY
 * @param { number } upCount
 *
 * @return { { number, number } }
 */
export function getItemRatioDimensions(ratioX, ratioY, upCount) {
  let w, h;

  if (ratioX && ratioY && upCount) {
    w = Math.round(calculateColumnWidth(upCount));
    h = Math.round((w / ratioX) * ratioY);
  } else {
    w = 0;
    h = 0;
  }
  return { w, h };
}

/**
 * Calculates the width of an item given how many columns are requested
 *
 * @param { number } upCount
 *
 * @return { number }
 */
