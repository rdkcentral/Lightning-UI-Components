/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
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
export function getWidthByUpCount(theme, upCount = 1) {
  const screenW = theme.layout.screenW;
  const columnCount = theme.layout.columnCount;
  const marginX = theme.layout.marginX;
  const gutterX = theme.layout.gutterX.xs;

  if (upCount < 1 || upCount > columnCount) {
    console.error(
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
export function getWidthByColumnSpan(theme, columnSpan) {
  const columnCount = theme.layout.columnCount;
  const gutterX = theme.layout.gutterX.xs;

  return (
    getWidthByUpCount(theme, columnCount) * columnSpan +
    gutterX * (columnSpan - 1)
  );
}

/**
 * Returns the x position of a specified column number based on the theme's columnCount.
 *
 * @param {number} column
 * @returns {number}
 */
export function getColumnX(theme, column = 1) {
  const columnCount = theme.layout.columnCount;
  const marginX = theme.layout.marginX;
  const gutterX = theme.layout.gutterX.xs;

  return marginX + (getWidthByUpCount(theme, columnCount) + gutterX) * column;
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
export function getDimensions(theme, obj = {}, fallback = {}) {
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
    dimensions = getItemRatioDimensions(theme, ratioX, ratioY, upCount);
  } else if (h && upCount) {
    // calculate dynamic width based off a row upcount and a given height
    dimensions = {
      w: Math.round(getWidthByUpCount(theme, upCount)),
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
export function getItemRatioDimensions(theme, ratioX, ratioY, upCount) {
  let w, h;

  if (ratioX && ratioY && upCount) {
    w = Math.round(getWidthByUpCount(theme, upCount));
    h = Math.round((w / ratioX) * ratioY);
  } else {
    w = 0;
    h = 0;
  }
  return { w, h };
}

export function getAspectRatioW(h, ratio = '16:9', seperator = ':') {
  const [ratioW, ratioH] = ratio.split(seperator);
  return h * (ratioW / ratioH);
}

export function getAspectRatioH(w, ratio = '16:9', seperator = ':') {
  const [ratioW, ratioH] = ratio.split(seperator);
  return w / (ratioW / ratioH);
}

/**
 * Returns the rendered width of a given text texture
 * @param {Object} text - text texture properties
 * @param {string} text.text - text value
 * @param {string} text.fontStyle - css font-style property
 * @param {(string|number)} text.fontWeight - css font-weight property
 * @param {string} [fontSize=0] - css font-size property (in px)
 * @param {string} [text.fontFamily=sans-serif] - css font-weight property
 * @param {string} text.fontFace - alias for fontFamily
 *
 * @return {number} text width
 * */
export function measureTextWidth(text = {}) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const {
    fontStyle,
    fontWeight,
    fontSize,
    fontFamily = text.fontFace || 'sans-serif'
  } = text;
  const fontCss = [
    fontStyle,
    fontWeight,
    fontSize ? `${fontSize}px` : '0',
    `'${fontFamily}'`
  ]
    .filter(Boolean)
    .join(' ');
  ctx.font = fontCss;
  const textMetrics = ctx.measureText(text.text || '');

  return Math.round(textMetrics.width);
}

/**
 * Naively looks for dimensional prop (i.e. w, h, x, y, etc.), first searching for
 * a transition target value then defaulting to the current set value
 * @param {string} prop - property key
 * @param {lng.Component} component - Lightning component to operate against
 */
export function getDimension(prop, component) {
  if (!component) return 0;
  const transition = component.transition(prop);
  if (transition.isRunning()) return transition.targetValue;
  return component[prop];
}

export const getX = getDimension.bind(null, 'x');
export const getY = getDimension.bind(null, 'y');
export const getW = component =>
  getDimension('w', component) || component.renderWidth;
export const getH = component =>
  getDimension('h', component) || component.renderHeight;

/**
 * Abstracts logic for conditionally forcing a zIndex Context on a component so that
 * any child components with zIndex are relative to it, and not the global zIndex context.
 * @param {lng.Component} component
 * @param {number} zOffset
 */
export function createConditionalZContext(component, zOffset) {
  if (!component.zIndex && typeof zOffset !== 'undefined' && zOffset !== 0) {
    component.forceZIndexContext = true;
    component.zIndex = 0;
  }
}

export default {
  getEuclideanDistance,
  getShortestDistance,
  isComponentOnScreen,
  getWidthByUpCount,
  getWidthByColumnSpan,
  getColumnX,
  getDimensions,
  getItemRatioDimensions,
  getAspectRatioW,
  getAspectRatioH,
  measureTextWidth,
  getDimension,
  getX,
  getY,
  getW,
  getH,
  createConditionalZContext
};
