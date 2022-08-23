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
    horizontal: 80, // space between rows
    vertical: 40 // space between columns (items)
  },
  margin: {
    x: 80,
    y: 64
  },
  spacingIncrement: 8, // the grid is built on an 8-point system
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
  h:
    SCREEN.h -
    GRID.margin.y -
    GRID.gutters.vertical * 3 -
    GRID.spacingIncrement,
  // Y position adds space between the header and the top of the Grid
  y: GRID.gutters.vertical,
  // Sets the items container in from the left by the margin amount
  itemPosX: GRID.margin.x,
  // Sets the spacing between Rows
  itemSpacing: GRID.gutters.vertical
};

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
