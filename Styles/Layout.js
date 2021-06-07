/**
 * Grid
 *
 * Contains global grid style information to easily maintain consistency throughout components.
 */

/**
 * Sets up spacing configurations to correctly position Items and Rows.
 */
export const GRID = {
  gutters: {
    horizontal: 80,     // space between rows
    vertical: 40        // space between columns (items)
  },
  margin: {
    x: 80,
    y: 64
  },
  spacingIncrement: 8,  // the grid is built on an 8-point system
  columnWidth: 110
};

/**
 * Establishes the screen size to be 1080p resolution (1920x1080).
 */
export const SCREEN = {
  w: 1920,
  h: 1080
};

export const GRID_SIZE_PARAMS = {
  // Width of a Grid assuming a margins on the left and right of the screen
  w: SCREEN.w - GRID.margin.x * 2,
  // Height of a Grid assuming a space for the header and a 48px margin at the bottom of the screen
  h: SCREEN.h - GRID.margin.y - (GRID.gutters.vertical * 3) - GRID.spacingIncrement,
  // Y position adds space between the header and the top of the Grid
  y: GRID.gutters.vertical,
  // Sets the items container in from the left by the margin amount
  itemPosX: GRID.margin.x,
  // Sets the spacing between Rows
  itemSpacing: GRID.gutters.vertical
};

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
  let { w, h, ratioX, ratioY, upCount } = obj;
  let fallbackW = fallback.w || 0;
  let fallbackH = fallback.h || 0;
  let dimensions = {};

  // hard set width and height values were passed in and should override other params
  if (w && h) {
    dimensions = {
      w,
      h: h
    };
  } else if (h && ratioX && ratioY) { // hard set height and ratio values were passed in, meaning the row has items with mixed ratios, so the width needs to be calculated
    dimensions = {
      w: Math.round(h * ratioX / ratioY),
      h: h
    };
  // calculate dynamic width and height based off item ratios
  } else if (ratioX && ratioY && upCount) {
    dimensions = getItemRatioDimensions(ratioX, ratioY, upCount);
  } else if (h && upCount) { // calculate dynamic width based off a row upcount and a given height
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
  } else {   // not enough information was provided to properly size the component
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
export function calculateColumnWidth(upCount) {
  // the screen width, minus the margin x on each side
  let rowWidth = SCREEN.w - (GRID.margin.x * 2);

  if (upCount) {
    // the total space of column gaps in between items
    let columnGapTotal = (upCount - 1) * GRID.gutters.vertical;

    // the remaining amount of space left for all items
    let totalColumnsWidth = rowWidth - columnGapTotal;

    // the width of each item in that remaining width
    let itemWidth = totalColumnsWidth / upCount;

    return itemWidth;
  }
  return rowWidth;
}

/**
 * This will return the absolute Y position by subtracting the Y margin from the current position.
 *
 * Some divs (like the GridWrapper) are positioned with the margins already taken into account,
 * but if we want to position a row based off the specs from the designs, we may have to
 * subtract that margin here in order to avoid aaccounting for it twice.
 *
 * @param { number } y
 *
 * @return { number }
 */
export function getAbsoluteYPosition(y) {
  return y - GRID.margin.y;
}

/**
 * This will return the absolute X position by subtracting the X margin from the current position.
 *
 * Some divs (like the GridWrapper) are positioned with the margins already taken into account,
 * but if we want to position a row based off the specs from the designs, we may have to
 * subtract that margin here in order to avoid aaccounting for it twice.
 *
 * @param { number } x
 *
 * @return { number }
 */
export function getAbsoluteXPosition(x) {
  return x - GRID.margin.x;
}
