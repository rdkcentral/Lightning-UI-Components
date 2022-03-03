import lng from '@lightningjs/core';

/**
 * Gets the value at `path` of `object`.
 * @param {Object} object
 * @param {string|Array} path
 * @returns {*} value if exists else undefined
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

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

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
 * @returns {number} text width
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
    const regex = /({ICON.*?}|{BADGE:.*?}|{NEWLINE}|{TEXT:.*?})/g;
    const iconRegEx = /^{ICON:(.*?)?\|(.*?)?}$/g;
    const badgeRegEx = /^{BADGE:(.*?)}$/g;
    const newlineRegEx = /^{NEWLINE}$/g;
    const textRegEx = /^{TEXT:(.*?)?\|(.*?)?}$/g;

    const splitStr = string.split(regex);

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
