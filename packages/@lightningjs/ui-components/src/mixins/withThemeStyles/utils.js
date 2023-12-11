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
import { clone, getValFromObjPath, getHexColor } from '../../utils';
import log from '../../globals/context/logger';

/**
Given a character, return its ASCII value multiplied by its position.
 *
@param {string} char - The character to process.
@param {number} index - The position of the character in the string.
@returns {number} - The ASCII value of the character multiplied by its position.
 */
export const getCharacterValue = (char, index) => {
  return char.charCodeAt(0) * (index + 1);
};

/**
 * Recursively sorts an object by its keys. If an object has nested objects as values,
 * it will sort those nested objects as well.
 *
 * @param {Object} obj - The object to be sorted.
 * @returns {Object} A new object that is a sorted version of the input object.
 */
export const sortObject = obj => {
  const sortedObj = {};
  Object.keys(obj)
    .sort()
    .forEach(key => {
      if (
        typeof obj[key] === 'object' &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        sortedObj[key] = sortObject(obj[key]); // Recursive call for nested objects
      } else {
        sortedObj[key] = obj[key];
      }
    });
  return sortedObj;
};

/**
Given an object, return a sum of the ASCII values of all characters in its
JSON stringified representation, each multiplied by its position.
*
@param {object} obj - The object to process.
@returns {number} - The sum of ASCII values, each multiplied by its position.
*/
export const getCharacterSum = obj => {
  const sortedObj = sortObject(obj);
  const str = JSON.stringify(sortedObj).replace(/[{}:",\s]/g, ''); // Remove brackets, colons, and whitespace
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += getCharacterValue(str[i], i);
  }
  return sum;
};

/**
Given an object, return a "hash" of the object, which is a combination of
the length of its JSON stringified representation and the sum of the ASCII
values of all characters in that string, each multiplied by its position.
*
@param {object} obj - The object to process.
@returns {string} - The hash of the object.
*/
export const getHash = obj => {
  const str = JSON.stringify(obj);
  return str.length + '-' + getCharacterSum(obj);
};

/**
 * Recursively executes functions within an object or array structure, passing them a given context.
 * @param {Function|Object|Array} objOrFunction - The object, array, or function to process.
 * @param {*} theme - The context to pass to any encountered functions.
 * @returns {*} The processed structure with functions executed.
 */
export function executeWithContextRecursive(objOrFunction, theme) {
  if (typeof objOrFunction === 'function') {
    // If the input is a function, execute it with the theme as a parameter
    const result = objOrFunction(theme);
    return executeWithContextRecursive(result, theme);
  } else if (Array.isArray(objOrFunction)) {
    // If the input is an array, iterate through its elements and apply the function recursively.
    return objOrFunction.map(item => executeWithContextRecursive(item, theme));
  } else if (typeof objOrFunction === 'object' && objOrFunction !== null) {
    // If the input is an object (and not null), iterate through its properties and apply the function recursively.
    const result = {};
    for (const key in objOrFunction) {
      if (objOrFunction.hasOwnProperty(key)) {
        result[key] = executeWithContextRecursive(objOrFunction[key], theme);
      }
    }
    return result;
  } else {
    // Return the value as is if it's neither a function, an object, nor an array.
    return objOrFunction;
  }
}

/**
 * Checks if a value is a plain object.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is a plain object, false otherwise.
 */
export function isPlainObject(value) {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    !(value instanceof Date) &&
    !(value instanceof RegExp) &&
    !(value instanceof Function) &&
    !(value instanceof Error)
  );
}

/**
 * Returns the subTheme property of the first parent object that has one, or undefined if none exist.
 *
 * @param {object} obj - The object to search for a subTheme property.
 * @returns {(String | Undefined)} - The value of the subTheme property, or undefined if none exists.
 */
export const getSubTheme = obj => {
  while (obj && (!obj.subTheme || typeof obj.subTheme !== 'string')) {
    obj = obj.p;
  }
  return obj ? obj.subTheme : undefined;
};

/**
 * Returns the component configuration object for the given object based on its prototype chain.
 *
 * @param {object} obj - The object to get the component configuration for.
 * @returns {object} - The component configuration object.
 */
export const getComponentConfig = obj => {
  if (!isPlainObject(obj)) return {};
  return obj?.theme?.componentConfig?.[obj.constructor.__componentName] || {};
};

/**
 * Returns an array of the names of all components in the prototype chain of the given object.
 * @param {object} obj - The object to get the prototype chain from.
 * @returns {string[]} - An array of component names.
 */
export const getPrototypeChain = obj => {
  if (!isPlainObject(obj)) return [];
  const prototypeChain = new Set();
  let proto = obj;

  if (obj.constructor && obj.constructor.__componentName) {
    prototypeChain.add(obj.constructor.__componentName);
  }

  /**
   * Traverse the prototype chain and add component names to the set
   */
  do {
    proto = Object.getPrototypeOf(proto);
    if (proto !== null && typeof proto === 'object') {
      // Add only components that support theming
      if (proto.constructor.__componentName) {
        prototypeChain.add(proto.constructor.__componentName);
      }
    }
  } while (proto);

  // Convert the set to an array and return it
  return Array.from(prototypeChain);
};

/**
 * Recursively removes properties from an object that are themselves empty objects.
 * Does not remove arrays, non-plain objects, or non-empty objects.
 *
 * @param {Object} obj - The object to clean of empty objects.
 * @returns {Object} The cleaned object.
 */
export function removeEmptyObjects(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && isPlainObject(obj[key])) {
      removeEmptyObjects(obj[key]); // Recurse into the object

      // After recursion, if the object is empty, delete it from the parent
      if (Object.keys(obj[key]).length === 0) {
        delete obj[key];
      }
    }
  }

  return obj; // Always return obj, even if it's empty
}

// This map will store hashes of objects to detect duplicates.

export function createSharedReferences(obj = {}) {
  const seenObjects = new Map();

  // Generates a hash for an object.
  // Sorting keys ensures consistent hash regardless of property order.
  function hash(object) {
    return JSON.stringify(object, Object.keys(object).sort());
  }

  function process(currentObj) {
    for (const key in currentObj) {
      if (currentObj.hasOwnProperty(key)) {
        const value = currentObj[key];
        if (typeof value === 'object' && value !== null) {
          // Ensure it's an object
          const valueHash = hash(value);
          if (seenObjects.has(valueHash)) {
            // If we've seen this object before, replace the current reference
            // with the original reference.
            currentObj[key] = seenObjects.get(valueHash);
          } else {
            seenObjects.set(valueHash, value);
            process(value); // Recursively process this object
          }
        }
      }
    }
  }

  process(obj);

  return obj;
}

/**
 * Combines the provided properties and returns a list of unique properties.
 *
 * @param {string[]} defaultProps - Default property names.
 * @param {Object} additionalProps - Object whose keys are additional property names.
 * @param {string[]} subProps - Sub property names.
 * @returns {string[]} - Array of unique property names.
 */
export function getUniqueProperties(defaultProps = []) {
  if (!Array.isArray(defaultProps)) {
    throw new TypeError('Expected defaultProps to be an array of strings.');
  }

  return [...new Set(defaultProps)];
}

/**
 * Generate the payload by cloning and merging multiple objects.
 *
 * @param {Object} base - The base object to start with.
 * @param {Object} defaultStyle - Default styles provided by the user.
 * @param {string} toneItem - The current tone being processed.
 * @param {string} modeItem - The current mode being processed.
 * @param {Object} tone - Tone configurations.
 * @param {Object} mode - Mode configurations.
 * @returns {Object} - The merged payload.
 */
export function generatePayload(
  base,
  defaultStyle,
  toneItem,
  modeItem,
  tone,
  mode
) {
  let payload = clone(defaultStyle, base);
  payload = clone(payload, tone?.[toneItem]);
  payload = clone(payload, mode?.[modeItem]);
  payload = clone(payload, tone?.[toneItem]?.mode?.[modeItem] || {});
  payload = clone(payload, mode?.[modeItem]?.tone?.[toneItem] || {});
  return payload;
}

/**
 * Recursively searches for and returns all the property keys nested within the specified key in the object.
 *
 * @param {Object} obj - The object to search through.
 * @param {string} keyToFind - The key whose nested keys are to be found.
 * @returns {string[]} An array containing all nested property keys under the specified key.
 */
function findNestedKeys(obj, keyToFind) {
  const nestedKeys = [];

  /**
   * Inner function to recursively search for nested keys.
   *
   * @param {Object} obj - The nested object to search through.
   */
  function searchNestedKeys(obj) {
    if (typeof obj === 'object' && obj !== null) {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          nestedKeys.push(key); // Add the nested key to the array
        }
      }
    }
  }

  /**
   * Outer function to initiate search when the specified key is found.
   *
   * @param {Object} obj - The object to search through.
   */
  function searchForKey(obj) {
    if (typeof obj === 'object' && obj !== null) {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (key === keyToFind) {
            searchNestedKeys(obj[key]); // Start searching for nested keys
            break; // Once the specified key is found, we don't need to look further at this level
          }
          searchForKey(obj[key]); // Continue searching for the specified key
        }
      }
    }
  }

  searchForKey(obj); // Initialize the search with the object
  return nestedKeys; // Return the array of nested keys
}

/**
 * Generates a solution based on the provided configurations.
 *
 * @param {Object} options - The configuration options for generating the solution.
 * @param {Object} [options.base={}] - Base object.
 * @param {Object} [options.tone={}] - Tone configurations.
 * @param {Object} [options.mode={}] - Mode configurations.
 * @param {Object} [options.defaultStyle={}] - Default styles provided by the user.
 * @returns {Object} - The generated solution with shared references and merged identical properties.
 */
export const generateSolution = (
  { base = {}, tone = {}, mode = {}, defaultStyle = {} },
  modeKeys = [],
  toneKeys = []
) => {
  const solution = {};

  const uniqueModes = getUniqueProperties([
    'focused',
    'disabled',
    ...modeKeys,
    'unfocused' // Unfocused must be at the end for proper fallback since base === 'unfocused' in many cases
  ]);

  const uniqueTones = getUniqueProperties([
    'neutral',
    'inverse',
    'brand',
    ...toneKeys
  ]);

  for (const modeItem of uniqueModes) {
    for (const toneItem of uniqueTones) {
      const payload = generatePayload(
        base,
        defaultStyle,
        toneItem,
        modeItem,
        tone,
        mode
      );
      solution[`${modeItem}_${toneItem}`] = payload;
    }
  }

  return solution;
};

const DEFAULT_KEYS = [
  // ORDER MATTERS
  'unfocused_neutral',
  'unfocused_inverse',
  'unfocused_brand',
  'focused_neutral',
  'focused_inverse',
  'focused_brand',
  'disabled_neutral',
  'disabled_inverse',
  'disabled_brand'
];

/**
 * Enforce a contract on an input object by ensuring that it contains a set of specified keys
 * and, if not, substituting them with values from fallback keys in a predefined order.
 *
 * @param {Object} inputObj - The input object to enforce the contract on.
 * @returns {Object} - An object that adheres to the contract, with missing keys replaced by fallback values.
 */
export function enforceContract(inputObj) {
  const result = {};
  for (const key of [...DEFAULT_KEYS, ...Object.keys(inputObj)]) {
    if (!inputObj.hasOwnProperty(key)) {
      // Find the first fallback property that exists in inputObj
      const fallbackKey = DEFAULT_KEYS.find(fallback =>
        inputObj.hasOwnProperty(fallback)
      );
      if (fallbackKey) {
        const fallback = inputObj[fallbackKey];
        result[key] = typeof fallback !== 'object' ? {} : fallback;
      } else {
        result[key] = {};
      }
    } else {
      if (typeof inputObj[key] !== 'object') {
        // If the value is not an object, replace it with an empty object
        result[key] = {};
      } else {
        result[key] = inputObj[key];
      }
    }
  }
  return result;
}

/**
 * Generates the source style object for a given component by merging base, mode, and tone styles from the component's style chain
 * @param {object} component - The component for which to generate the style source
 * @returns {object} - The source style object for the component
 */
export const generateComponentStyleSource = ({
  theme = {},
  styleChain = [],
  inlineStyle = {},
  alias = []
} = {}) => {
  if (typeof theme !== 'object') {
    throw new Error('Expected theme to be an object');
  }

  if (!Array.isArray(styleChain)) {
    throw new Error('Expected styleChain to be an array');
  }

  if (typeof inlineStyle !== 'object') {
    throw new Error('Expected inlineStyle to be an object');
  }

  if (!Array.isArray(alias)) {
    throw new Error('Expected alias to be an array');
  }

  /**
   * Component default styles
   */
  const componentDefault = styleChain.map(({ style }) => {
    if (
      typeof style === 'object' &&
      !style.base &&
      !style.mode &&
      !style.tone &&
      !style.default
    ) {
      return { base: style };
    } else {
      const { base = {}, mode = {}, tone = {} } = style;

      let componentConfigDefaultStyle;
      if (style) {
        const defaultStyle = JSON.parse(JSON.stringify(style));
        delete defaultStyle.base;
        delete defaultStyle.tone;
        delete defaultStyle.mode;
        componentConfigDefaultStyle = defaultStyle; // Anything in the root level of style
      }

      return {
        defaultStyle: componentConfigDefaultStyle || {},
        base,
        mode,
        tone
      };
    }
  });

  /**
   * Local / Instance level styles
   * DefaultStyle will apply to the next level in the hierarchy
   */
  let localDefaultStyle;
  if (inlineStyle) {
    const defaultStyle = JSON.parse(JSON.stringify(inlineStyle));
    delete defaultStyle.base;
    delete defaultStyle.tone;
    delete defaultStyle.mode;
    localDefaultStyle = defaultStyle; // Anything in the root level of style
  }

  const local = {
    defaultStyle: localDefaultStyle || {},
    base: inlineStyle?.base || {},
    mode: inlineStyle?.mode || {},
    tone: inlineStyle?.tone || {}
  };

  // Merge all the styles together into one array to loop
  const merged = [...componentDefault, local];

  // Execute all style functions with the theme
  const parsedStyles = merged.map(style => {
    return executeWithContextRecursive(style, theme);
  });

  // Find all the keys that are in mode/tone as well as nested under mode and tone this will help generate the final solution
  const modeKeys = findNestedKeys(parsedStyles, 'mode');
  const toneKeys = findNestedKeys(parsedStyles, 'tone');

  // Merge all the styles together into one object
  const solution = parsedStyles.reduce((acc, style) => {
    return clone(acc, generateSolution(style, modeKeys, toneKeys));
  }, {});

  const final = formatStyleObj(
    removeEmptyObjects(colorParser({ theme }, solution)) || {},
    alias
  );

  const cleanObj = createSharedReferences(final);

  return enforceContract(cleanObj);
};

/**
 *
 * Default properties directly from @lightningjs/core to ensure correct fallback values
 *
 */
const lightningTextDefaults = Object.entries(
  Object.getOwnPropertyDescriptors(lng.textures.TextTexture.prototype)
).reduce((acc, [prop]) => {
  const value = lng.textures.TextTexture.prototype[prop];
  if (prop.startsWith('_') || ['undefined', 'function'].includes(typeof value))
    return acc;
  return {
    [prop]: value,
    ...acc
  };
}, {});

/**
 * Parse and process a style object to replace theme strings and process color arrays.
 * @param {object} targetObject - In most cases, this will be a theme object.
 * @param {object} styleObj - The input style object to be processed.
 * @returns {object} The processed style object with theme strings replaced and color arrays processed.
 */
export const colorParser = (targetObject, styleObj) => {
  // Check if targetObject is an object
  if (typeof targetObject !== 'object' || targetObject === null) {
    throw new TypeError('targetObject must be an object.');
  }

  // Check if styleObj is an object
  if (typeof styleObj !== 'object' || styleObj === null) {
    throw new TypeError('styleObj must be an object.');
  }

  // Process style object and remove unnecessary properties
  const processedStyle = JSON.stringify(styleObj, (_, value) => {
    if (-1 < ['tone', 'mode'].indexOf(_)) return undefined; // Remove any tone/mode or mode/tone properties as they have already been processed
    if ('string' === typeof value && value.startsWith('theme.')) {
      // Support theme strings example: theme.radius.md
      return getValFromObjPath(targetObject, value); // If no theme value exists, the property will be removed from the object
    } else if (Array.isArray(value) && value.length === 2) {
      // Process value as a color ['#663399', 1]
      return getHexColor(value[0], value[1]);
    }
    // TODO: what is best way to detect a font obj?
    // Ensure text styles contain all default values from Text texture.
    // This prevents properties that exist on a previous theme persisting on the current theme when switching themes by creating a new object each time.
    if (typeof value === 'object' && value?.fontFace) {
      return { ...lightningTextDefaults, ...value };
    }
    return value;
  });

  return JSON.parse(processedStyle || {});
};

/**
 * Generates the final style object for a component using its style source.
 * @param {object} component - The component for which to generate a style object.
 * @param {object} componentStyleSource - The style source object for the component.
 * @returns {object} - The generated style object.
 */
export const generateStyle = (component, componentStyleSource = {}) => {
  if (!isPlainObject(component)) return {};
  const { mode = 'unfocused', tone = 'neutral' } = component;
  return (
    componentStyleSource[`${mode}_${tone}`] ||
    componentStyleSource['unfocused_neutral'] ||
    {}
  );
};

/**
 * Generates a name by concatenating the names of constructors in the prototype chain.
 * @param {object} obj - The object for which to generate the name.
 * @returns {string} - The generated name.
 */
export function generateNameFromPrototypeChain(obj, name = '') {
  if (!obj) return name;
  const proto = Object.getPrototypeOf(obj);
  if (!proto || !proto.constructor) return name;
  const componentName = `${name ? name + '.' : ''}${
    proto?.constructor?.__componentName || ''
  }`
    .replace(/\.*$/, '')
    .trim();
  const result = generateNameFromPrototypeChain(proto, componentName);
  return result;
}
/**
 * Creates a cache object to store the results of getStyleChainMemoized function calls.
 * @type {object}
 */
const styleChainCache = {};

/**
 * Flush the memoization cache for styleChain
 *
 */
export const clearStyleChainCache = () => {
  for (const key in styleChainCache) {
    if (styleChainCache.hasOwnProperty(key)) {
      delete styleChainCache[key];
    }
  }
};

/**
 * Memoized version of getStyleChain function. Retrieves the style chain for a component by traversing its prototype chain.
 * @param {object} componentObj - The component object to get the style chain from.
 * @returns {{ style: (object | function) }[]} - An array of style objects containing either an object of styles or a function to return an object of styles.
 */
export const getStyleChainMemoized = componentObj => {
  /**
   * Create a cache key based on the stringified component object.
   * @type {string}
   */

  const cacheKey = generateNameFromPrototypeChain(componentObj);

  // Check if the result is already in the cache
  if (styleChainCache[cacheKey]) {
    return styleChainCache[cacheKey];
  }

  /**
   * Compute the style chain using the getStyleChain function.
   * @type {{ style: (object | function) }[]}
   */
  const styleChain = getStyleChain(componentObj);

  // Cache the result for future use
  styleChainCache[cacheKey] = styleChain;

  // Return the style chain
  return styleChain;
};

/**
 * Traverse up the prototype chain to create an array of all the styles that are present in the Components ancestors
 * @param {object} componentObj - The component object to get the style chain from.
 * @returns {{ style: (object | function) }[]} - An array of style objects containing either an object of styles or a function to return an object of styles.
 */
export const getStyleChain = componentObj => {
  const styleMap = new Map(); // Use a Map to store styles as JSON strings
  let proto;

  do {
    proto = !proto ? componentObj : Object.getPrototypeOf(proto);
    if (proto?.constructor === Object) break; // Stop traversing the prototype chain if we reach the Object prototype
    if (
      proto &&
      typeof proto === 'object' &&
      proto.hasOwnProperty('constructor')
    ) {
      // ComponentConfig Level
      const { style: componentConfigStyle } = getComponentConfig(proto);
      if (Object.keys(componentConfigStyle || {}).length) {
        if (!styleMap.has(componentConfigStyle)) {
          styleMap.set(componentConfigStyle, { style: componentConfigStyle });
        }
      }

      // Access the __themeStyle property from the current prototype's constructor
      const themeStyle =
        proto.constructor.hasOwnProperty('__themeStyle') &&
        proto.constructor.__themeStyle;

      if (Object.keys(themeStyle || {}).length) {
        if (!styleMap.has(themeStyle)) {
          styleMap.set(themeStyle, { style: { ...themeStyle } });
        }
      } else if (typeof themeStyle === 'function') {
        // If the style is a function, add it to the styleMap
        if (!styleMap.has(themeStyle)) {
          styleMap.set(themeStyle, { style: themeStyle });
        }
      }

      // Access the __mixinStyle property from the current prototype's constructor
      const mixinStyle =
        proto.constructor.hasOwnProperty('__mixinStyle') &&
        proto.constructor.__mixinStyle;

      if (Object.keys(mixinStyle || {}).length) {
        if (!styleMap.has(mixinStyle)) {
          styleMap.set(mixinStyle, { style: mixinStyle });
        }
      }
    }
  } while (proto);

  // Convert the values of the Map (unique styles) back to an array
  const uniqueStyles = Array.from(styleMap.values());

  // Return an array of unique style objects with a "style" property
  return uniqueStyles.map(style => style).reverse();
};

/**
 * Formats a style object by applying a series of formatter functions.
 *
 * @param {object} originalObj - The original style object to be formatted.
 * @param {array} [aliasStyles=[]] - An array of alias styles to be used during formatting.
 * @returns {object} The formatted style object after applying all formatter functions.
 */
export const formatStyleObj = (originalObj, aliasStyles = []) => {
  if (typeof originalObj !== 'object' || originalObj === null) {
    throw new Error('The originalObj parameter must be an object.');
  }

  const formatters = new Set();

  // Adding a key-value pair to the 'formatters' Set.
  // This pattern is used so more formatters can be easily added if required at a later time
  formatters.add([replaceAliasValues, [aliasStyles]]);

  // Generating an array from the 'formatters' Set
  const formattersArray = Array.from(formatters);

  // Using reduce to apply functions from 'formattersArray' to 'finalStyle'
  // Each function takes 'obj' (initially 'finalStyle') as input and applies transformations
  // The result of the previous function is passed as input to the next function
  // The final transformed style is assigned to 'this._style'
  return formattersArray.reduce(
    (obj, [func, args]) => func(obj, ...args),
    originalObj
  );
};

/**
 * Replaces alias values in the provided style object with their corresponding aliases.
 * @param {object} value - The style object to process.
 * @param {Array<Object>} [aliasStyles=[]] - Optional array of alias styles to apply.
 * @returns {object} The style object with alias values replaced.
 */
export const replaceAliasValues = (value, aliasStyles = []) => {
  if (typeof value !== 'object' || value === null) {
    throw new Error('Value must be an object');
  }

  if (!Array.isArray(aliasStyles)) {
    throw new Error('Alias styles must be an array');
  }

  let str = JSON.stringify(value);
  const aliasProps = [
    { prev: 'height', curr: 'h', skipWarn: true },
    { prev: 'width', curr: 'w', skipWarn: true },
    ...(aliasStyles || [])
  ];

  aliasProps.forEach(alias => {
    if (
      alias &&
      typeof alias.prev === 'string' &&
      typeof alias.curr === 'string'
    ) {
      !alias.skipWarn &&
        str.search(`"${alias.prev}":`) >= 0 &&
        log.warn(
          `The style property "${alias.prev}" is deprecated and will be removed in a future release. Please use "${alias.curr}" instead.`
        );
      str = str.replace(
        new RegExp(`"${alias.prev}":`, 'gi'),
        `"${alias.curr}":`
      );
    }
  });
  return JSON.parse(str);
};
