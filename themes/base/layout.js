import context from '../../context';

const isInvalidNum = v => isNaN(parseFloat(v)) || v < 0;
class Layout {
  constructor() {
    // Multiplier Defaults
    this._gutterXMultiplier = 4;
    this._gutterYMultiplier = 4;
    this._marginXMultiplier = 15;
    this._marginYMultiplier = 15;
    this._safeMultiplier = 5;
    this._utilityMultiplier = 10;

    // Layout defaults
    this._columnCount = 10;
    this._screenH = 1080;
    this._screenW = 1920;
    this._spacingBase = 10;
  }

  /**
   * Multipliers
   */

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
    if (isInvalidNum(v)) return;
    this._gutterX = v;
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
      small: this._spacingBase * this._gutterXMultiplier,
      medium: this._spacingBase * (this._gutterXMultiplier * 2),
      large: this._spacingBase * (this._gutterXMultiplier * 3),
      xlarge: this._spacingBase * (this._gutterXMultiplier * 4)
    };
  }

  _getGutterYDefaults() {
    return {
      small: this._spacingBase * this._gutterYMultiplier,
      medium: this._spacingBase * (this._gutterYMultiplier * 2),
      large: this._spacingBase * (this._gutterYMultiplier * 3),
      xlarge: this._spacingBase * (this._gutterYMultiplier * 4)
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
  const gutterX = context.theme.layout.gutterX.small;

  if (upCount < 1 || upCount > columnCount) {
    context.error(
      `Column expects a number between 1 & ${columnCount}. Received ${upCount}`
    );
    return;
  }

  // Total width of column container after outer margins have been subtracted
  const containerWidth = screenW - marginX * 2;

  // Total of all gutters is equal to the gutter value multiplied by the 1 less that the total column count
  const totalGutterXWidth = gutterX * (columnCount - 1);

  /**
   * Single column width is equal to the container minus the total of the gutters divided by the column count.
   * The Single column value is then multiplied by the upCount
   */
  return ((containerWidth - totalGutterXWidth) / columnCount) * upCount;
}

export function getFocusScale(w) {
  return w ? (w + context.theme.layout.spacingBase * 2) / w : 1;
}

export function getUnfocusScale() {
  return 1;
}
