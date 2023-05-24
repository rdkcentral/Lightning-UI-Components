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

import lng from '@lightningjs/core';
import logger from '../globals/context/logger';

/**
 *
 * Layout Utils
 *
 */

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear'
 * that is a function which will clear the timer to prevent previously scheduled executions.
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */
export function debounce(func, wait, immediate) {
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  }

  var debounced = function () {
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function () {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };

  debounced.flush = function () {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;

      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
}

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

/**
 * /Layout utils
 */

export function getAspectRatioW(h, ratio = '16:9', seperator = ':') {
  const [ratioW, ratioH] = ratio.split(seperator);
  return h * (ratioW / ratioH);
}

export function getAspectRatioH(w, ratio = '16:9', seperator = ':') {
  const [ratioW, ratioH] = ratio.split(seperator);
  return w / (ratioW / ratioH);
}

/**
 * Combines rgb hex string and alpha into argb hexadecimal number
 * @param {string|number} hex - 6 alphanumeric characters between 0-f or argb hexadecimal number
 * @param {number} [alpha] - number between 0-1 (0 is invisible, 1 is opaque)
 */
export function getHexColor(hex, alpha = 1) {
  if (!hex) {
    return 0x00;
  }

  if (typeof hex === 'number') {
    hex = hex.toString(16).slice(2);
  }

  hex = hex.replace('#', '');

  const hexAlpha = Math.round(alpha * 255).toString(16);
  const str = `0x${hexAlpha}${hex}`;
  return Number(str);
}

/**
 * Returns valid string of HEX color
 *
 * @param {string} color
 * @param {boolean} fill
 */
export function getValidColor(color) {
  if (/^0x[0-9a-fA-F]{8}/g.test(color)) {
    // User enters a valid 0x00000000 hex code
    return Number(color);
  } else if (/^#[0-9a-fA-F]{6}/g.test(color)) {
    // User enters valid #000000 hex code
    return getHexColor(color.substr(1, 6));
  } else if (typeof color === 'string' && /^[0-9]{8,10}/g.test(color)) {
    return parseInt(color);
  } else if (
    typeof color === 'number' &&
    /^[0-9]{8,10}/g.test(color.toString())
  ) {
    return color;
  } else if (typeof color === 'string' && color.indexOf('rgba') > -1) {
    return rgba2argb(color);
  } else if (typeof color === 'string' && color.indexOf('rgb') > -1) {
    const rgba = [...color.replace(/rgb\(|\)/g, '').split(','), '255'];
    return lng.StageUtils.getArgbNumber(rgba);
  }
  return null;
}

function simplifyFraction([numerator, denominator]) {
  for (let i = numerator; i > 0; i--) {
    if (!(numerator % i) && !(denominator % i)) {
      return [numerator / i, denominator / i];
    }
  }
}

/**
 * Reduce a fraction represented as a string
 * @param {string} - a reprentation of a fraction in this format 16/9
 * @return {string} - a reduced representation of the fraction
 */
export function reduceFraction(string) {
  return simplifyFraction(string.split('/').map(n => +n)).join('/');
}

/**
 * Gets the value at `path` of `object`.
 * @param {Object} object
 * @param {string|Array} path
 * @return {*} value if exists else undefined
 */
export const getValFromObjPath = (object, path) => {
  if (typeof path === 'string')
    path = path.split('.').filter(key => key.length);
  return path.reduce((dive, key) => dive && dive[key], object);
};

/**
 * Lightning uses ARGB values, use this function
 * to convert know color to Lightning value
 * https://ifpb.github.io/javascript-guide/ecma/expression-and-operator/argb.html
 */
export function rgba2argb(rgbaStr) {
  const rgba = rgbaStr.replace(/rgba\(|\)/g, '').split(',');
  // Multiple Alpha Value
  rgba[3] = rgba[3] * 255;
  return lng.StageUtils.getArgbNumber(rgba);
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function lowercaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
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
  getWidth(w, options = {}) {
    const { padding, paddingLeft, paddingRight, strokeWidth } = {
      padding: 0,
      paddingLeft: 0,
      paddingRight: 0,
      strokeWidth: 0,
      ...options
    };

    if (!w) return 0;

    return (
      w - (paddingLeft || padding) - (paddingRight || padding) - strokeWidth
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
  getHeight(h, options = {}) {
    const { padding, paddingBottom, paddingTop, strokeWidth } = {
      padding: 0,
      paddingBottom: 0,
      paddingTop: 0,
      strokeWidth: 0,
      ...options
    };

    if (!h) return 0;

    return (
      h - (paddingBottom || padding) - (paddingTop || padding) - strokeWidth
    );
  }
};

/**
 * Merges two objects together and returns the duplicate.
 *
 * @param {Object} target - object to be cloned
 * @param {Object} [object] - secondary object to merge into clone
 */
export function clone(target, object) {
  // Make sure getters and setters are applied correctly
  const _clone = Object.create(Object.getPrototypeOf(target));
  Object.defineProperties(_clone, Object.getOwnPropertyDescriptors(target));
  if (!object || target === object) return _clone;

  for (const key in object) {
    const value = object[key];
    if (target.hasOwnProperty(key)) {
      _clone[key] = getMergeValue(key, target, object);
    } else {
      _clone[key] = value;
    }
  }

  return _clone;
}

function getMergeValue(key, target, object) {
  const targetVal = target[key];
  const objectVal = object[key];
  const targetValType = typeof targetVal;
  const objectValType = typeof objectVal;

  if (
    targetValType !== objectValType ||
    objectValType === 'function' ||
    Array.isArray(objectVal)
  ) {
    return objectVal;
  }

  if (objectVal && objectValType === 'object') {
    return clone(targetVal, objectVal);
  }

  return objectVal;
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
 * Returns first argument that is a number. Useful for finding ARGB numbers. Does not convert strings to numbers
 * @param {...*} number - maybe a number
 **/
export function getFirstNumber(...numbers) {
  return numbers.find(Number.isFinite);
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
 * Array.prototype.flat() is not supported in WPE Browser
 *
 * @param {array} arr
 *
 * @return {array}
 */
export function flatten(arr) {
  return arr.reduce(
    (flat, toFlatten) =>
      flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten),
    []
  );
}

export function objectPropertyOf(object, path) {
  return path.reduce(
    (obj, key) => (obj && obj[key] !== 'undefined' ? obj[key] : undefined),
    object
  );
}

export function stringifyCompare(objA, objB) {
  return JSON.stringify(objA) === JSON.stringify(objB);
}

export function delayForAnimation(callback, delay = 16) {
  setTimeout(callback, delay);
}

export function downloadFile(content, fileName, contentType) {
  const validContentTypes = ['plain', 'json'];
  if (!validContentTypes.includes(contentType)) {
    contentType = 'plain';
  }
  const dataStr =
    `data:text/${contentType};charset=utf-8,` +
    encodeURIComponent(JSON.stringify(content));
  const dlAnchorElem = document.createElement('a');
  dlAnchorElem.setAttribute('href', dataStr);
  dlAnchorElem.setAttribute('download', fileName);
  dlAnchorElem.click();
}

export const degreesToRadians = deg => deg * (Math.PI / 180);

/**
 *
 * Markup utils
 *
 */

const MARKUP_STRING_PATTERN = /({ICON.*?}|{BADGE:.*?}|{NEWLINE}|{TEXT:.*?})/g;

export function isMarkupString(str = '') {
  if (typeof str !== 'string') {
    return false;
  }
  return MARKUP_STRING_PATTERN.test(str);
}

/**
 * Returns an array of strings and icon, badge, newline, and text objects from a string using the syntax:
 * 'This is an {ICON:<title>|<url>} and {BADGE:<title>} badge test with a {NEWLINE} newline and {TEXT:<text>|<style>}.'
 *
 * i.e. 'This is an {ICON:settings|./assets/icons/settings.png} icon and {BADGE:HD} badge with a{NEWLINE} and {TEXT:red text|red}.'
 *  would create the array:
 *  [
 *    'This is an ',
 *    { icon: './assets/icons/settings.png', title: 'settings' },
 *    ' icon and ',
 *    { badge: 'HD' },
 *    ' badge with a',
 *    { newline: true },
 *    ' and ',
 *    { text: 'red text', style: 'red' },
 *    '.'
 *  ]
 *
 * @param {(string|object)} str
 *
 * @return {array}
 */
export function parseInlineContent(str = '') {
  const content = [];
  if ((str && typeof str === 'string') || str.text) {
    const string = typeof str === 'string' ? str : str.text;
    const iconRegEx = /^{ICON:(.*?)?\|(.*?)?}$/g;
    const badgeRegEx = /^{BADGE:(.*?)}$/g;
    const newlineRegEx = /^{NEWLINE}$/g;
    const textRegEx = /^{TEXT:(.*?)?\|(.*?)?}$/g;

    const splitStr = string.split(MARKUP_STRING_PATTERN);

    if (splitStr && splitStr.length) {
      splitStr.forEach(item => {
        let formattedItem = item;
        const badge = badgeRegEx.exec(item);
        const icon = iconRegEx.exec(item);
        const newline = newlineRegEx.exec(item);
        const text = textRegEx.exec(item);

        if (badge && badge[1]) {
          formattedItem = { badge: badge[1] };
        } else if (icon && icon[1]) {
          formattedItem = { title: icon[1], icon: icon[2] || icon[1] };
        } else if (newline) {
          formattedItem = { newline: true };
        } else if (text && text[1]) {
          formattedItem = { text: text[1], style: text[2] };
        }
        content.push(formattedItem);
      });
    }
  }
  return content;
}

/**
 * Given any number of arguments, returns the greatest number passed to the function.
 * If no valid numbers are passed in (ex. NaN, undefined, null), `undefined` will be returned.
 * @param {...*} arguments Any number of arguments may be passed into the function.
 *
 * @return {number|undefined} The greatest number passed in as an argument or `undefined` if no valid number was passed in.
 */
export function max() {
  if (!arguments) {
    return;
  }

  const args = Array.from(arguments).filter(arg => !isNaN(arg) && arg != null);

  if (!args.length) {
    return;
  }

  return Math.max(...args);
}

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

/**
 * Runs a side effect function when any values of specified properties on an element change.
 * @param {Object} options - defines the `element`, `watchProps`, and `sideEffect` options
 * @param {lng.Element} options.element - Lightning element on which property changes will watched
 * @param {String[]} options.watchProps - properties that when their value changes a side effect function is invoked
 * @param {Function} options.sideEffect - function to be invoked when a watched property's value changes
 * @returns {lng.Element}
 */
export function watchForUpdates({
  element,
  watchProps = [],
  sideEffect = () => {}
}) {
  if (!element?.isElement) {
    logger.error(
      `watchForUpdates: Expected a Lightning Element passed to element parameter, received ${typeof element}`
    );
  }

  const initialOnAfterUpdate = element.__core?._onAfterUpdate;

  element.onAfterUpdate = function (element) {
    let hasChanged = false;

    watchProps.forEach(prop => {
      if (element.transition(prop) && element.transition(prop).isRunning()) {
        return;
      }

      const prevValueKey = `__watchPrev${prop}`;
      const nextValue = element[prop];

      if (nextValue !== element[prevValueKey]) {
        element[prevValueKey] = nextValue;
        hasChanged = true;
      }
    });

    if (hasChanged) {
      sideEffect();
    }

    // if an element already has an onAfterUpdate function, preserve that behavior
    if (initialOnAfterUpdate) {
      initialOnAfterUpdate(element);
    }
  }.bind(this);

  return element;
}

const utils = {
  isMarkupString,
  capitalizeFirstLetter,
  degreesToRadians,
  downloadFile,
  delayForAnimation,
  stringifyCompare,
  objectPropertyOf,
  flatten,
  getDimension,
  getFirstNumber,
  measureTextWidth,
  clone,
  getMergeValue,
  RoundRect,
  rgba2argb,
  getValFromObjPath,
  reduceFraction,
  getValidColor,
  getHexColor,
  getAspectRatioH,
  getAspectRatioW,
  getWidthByUpCount,
  getDimensions,
  getWidthByColumnSpan,
  createConditionalZContext,
  watchForUpdates
};

export default utils;
