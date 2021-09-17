/**
 * Copyright 2020 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

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
    y: 112
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
  }
  // hard set height and ratio values were passed in, meaning the row has items with mixed ratios,
  // so the width needs to be calculated
  else if (h && ratioX && ratioY) {
    dimensions = {
      w: Math.round((h * ratioX) / ratioY),
      h: h
    };
  }
  // calculate dynamic width and height based off item ratios
  else if (ratioX && ratioY && upCount) {
    dimensions = getItemRatioDimensions(ratioX, ratioY, upCount);
  }
  // calculate dynamic width based off a row upcount and a given height
  else if (h && upCount) {
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
  }
  // not enough information was provided to properly size the component
  else {
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
  let rowWidth = SCREEN.w - GRID.margin.x * 2;

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
