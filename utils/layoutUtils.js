import context from '../context';

export function getEuclideanDistance(xA, yA, xB, yB) {
  const xDiff = xA - xB;
  const yDiff = yA - yB;
  return Math.sqrt(Math.pow(xDiff, 2) + Math.sqrt(Math.pow(yDiff, 2)));
}

/**
 * Returns the shortest distance between a coordinate and a corner or center of an element.
 * @param {[number, number]} coordinate
 * @param {Element} element
 *
 * @return {number} shortest distance between a coordinate and a corner or center of an element.
 */
export function getShortestDistance(coordinate, element) {
  const [xA, yA] = coordinate;
  const [xB, yB] = element.core ? element.core.getAbsoluteCoords(0, 0) : [0, 0];

  const distanceToStart = getEuclideanDistance(xA, yA, xB, yB);
  const distanceToMiddle = getEuclideanDistance(
    xA,
    yA,
    xB + element.w / 2,
    yB + element.h / 2
  );
  const distanceToEnd = getEuclideanDistance(
    xA,
    yA,
    xB + element.w,
    yB + element.h
  );

  return Math.min(distanceToStart, distanceToMiddle, distanceToEnd);
}

export function isComponentOnScreen(component) {
  if (!component) return false;

  const {
    w,
    h,
    core: { renderContext: { px, py }, _scissor: scissor = [] } = {}
  } = component;
  const stageH = component.stage.h / component.stage.getRenderPrecision();
  const stageW = component.stage.w / component.stage.getRenderPrecision();

  const wVis = px >= 0 && px + w <= stageW;
  const hVis = py >= 0 && py + h <= stageH;

  if (!wVis || !hVis) return false;

  if (scissor && scissor.length) {
    const [
      leftBounds = null,
      topBounds = null,
      clipWidth = null,
      clipHeight = null
    ] = scissor;

    const withinLeftClippingBounds =
      Math.round(px + w) >= Math.round(leftBounds);
    const withinRightClippingBounds =
      Math.round(px) <= Math.round(leftBounds + clipWidth);
    const withinTopClippingBounds = Math.round(py + h) >= Math.round(topBounds);
    const withinBottomClippingBounds =
      Math.round(py + h) <= Math.round(topBounds + clipHeight);

    return (
      withinLeftClippingBounds &&
      withinRightClippingBounds &&
      withinTopClippingBounds &&
      withinBottomClippingBounds
    );
  }

  return true;
}

/**
 * Returns the width of an item based on upCount.
 *
 * @param {number} upCount
 * @returns {number}
 */
export function getWidthByUpCount(upCount = 1) {
  const screenW = context.theme.layout.screenW;
  const columnCount = context.theme.layout.columnCount;
  const marginX = context.theme.layout.marginX;
  const gutterX = context.theme.layout.gutterX.xs;

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

/**
 * Returns the width of an item based on how many columns to span.
 *
 * @param {number} columnSpan
 * @returns {number}
 */
export function getWidthByColumnSpan(columnSpan) {
  const columnCount = context.theme.layout.columnCount;
  const gutterX = context.theme.layout.gutterX.xs;

  return (
    getWidthByUpCount(columnCount) * columnSpan + gutterX * (columnSpan - 1)
  );
}

/**
 * Returns the x position of a specified column number based on the theme's columnCount.
 *
 * @param {number} column
 * @returns {number}
 */
export function getColumnX(column = 1) {
  const columnCount = context.theme.layout.columnCount;
  const marginX = context.theme.layout.marginX;
  const gutterX = context.theme.layout.gutterX.xs;

  return marginX + (getWidthByUpCount(columnCount) + gutterX) * column;
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
      w: Math.round(getWidthByUpCount(upCount)),
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
    w = Math.round(getWidthByUpCount(upCount));
    h = Math.round((w / ratioX) * ratioY);
  } else {
    w = 0;
    h = 0;
  }
  return { w, h };
}
