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

  const prototypeChain = getPrototypeChain(obj);

  if (!prototypeChain.length) {
    return obj?.theme?.componentConfig?.[obj.constructor.__componentName] || {};
  }

  return Array.from(prototypeChain)
    .reverse()
    .reduce((acc, curr) => {
      return clone(acc, obj?.theme?.componentConfig?.[curr] || {});
    }, {});
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
 * Recursively removes empty objects from the provided object.
 *
 * @param {object} obj - The object from which to remove empty objects.
 * @returns {object} - The object with empty objects removed.
 */
export function removeEmptyObjects(obj) {
  for (const key in obj) {
    if (
      obj.hasOwnProperty(key) &&
      typeof obj[key] === 'object' &&
      obj[key] !== null
    ) {
      removeEmptyObjects(obj[key]);

      if (Object.keys(obj[key]).length === 0) {
        delete obj[key];
      }
    }
  }

  return obj; // Always return obj, even if it's empty
}

/**
 * Finds unique property names nested under a specified sub-property within an object.
 * @param {object} obj - The object to search.
 * @param {string} subPropertyName - The sub-property name to search for.
 * @returns {string[]} - An array of unique property names found.
 */
export const findPropertiesBySubProperty = (obj, subPropertyName) => {
  // Initialize a Set to store unique property names
  const result = new Set();

  /**
   * Recursively traverses the object and extracts property names under the specified sub-property.
   * @param {object} obj - The object to traverse.
   */
  function traverse(obj) {
    
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object') {
          // If the current key matches the specified sub-property
          if (key === subPropertyName) {
            console.log('>>>', key)
            // Loop through the sub-object's keys and add them to the result set
            for (const subKey in obj[key]) {
              if (obj[key].hasOwnProperty(subKey)) {
                result.add(subKey);
              }
            }
          }
          // Continue recursive traversal
          traverse(obj[key]);
        } else {
          // If the current key matches the specified sub-property
          if (key === subPropertyName) {
            // Add the value to the result set
            result.add(obj[key]);
          }
        }
      }
    }
  }
  
  // Start traversing the object
  traverse(obj);

  // Convert the Set to an array and return
  return Array.from(result);
};

// This map will store hashes of objects to detect duplicates.

function createSharedReferences(obj) {
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

// TODO: Need to add defaultStyle functionality

/**
 * Returns a unique set of properties by merging default properties and provided ones.
 *
 * @param {string[]} defaultProps - List of default properties.
 * @param {Object} additionalProps - Additional properties provided by the user.
 * @param {string[]} subProps - Sub-properties extracted from a different source.
 * @returns {string[]} - An array of unique properties.
 */
function getUniqueProperties(defaultProps, additionalProps, subProps) {
  return [
    ...new Set([...defaultProps, ...Object.keys(additionalProps), ...subProps])
  ];
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
  payload = clone(payload, tone[toneItem]);
  payload = clone(payload, mode[modeItem]);
  payload = clone(payload, tone[toneItem]?.mode?.[modeItem] || {});
  payload = clone(payload, mode[modeItem]?.tone?.[toneItem] || {});
  return payload;
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
export const generateSolution = ({
  base = {},
  tone = {},
  mode = {},
  defaultStyle = {}
}) => {
  const solution = {};

  const toneProperties = findPropertiesBySubProperty(mode, 'tone');
  const modeProperties = findPropertiesBySubProperty(tone, 'mode');

  const uniqueModes = getUniqueProperties(
    ['unfocused', 'focused', 'disabled'],
    mode,
    modeProperties
  );
  const uniqueTones = getUniqueProperties(
    ['neutral', 'inverse', 'brand'],
    tone,
    toneProperties
  );

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

const FALLBACK_ORDER = [
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

export function enforceContract(inputObj) {
  const result = {};

  for (const key of DEFAULT_KEYS) {
    if (!inputObj.hasOwnProperty(key)) {
      // Find the first fallback property that exists in inputObj
      const fallbackKey = FALLBACK_ORDER.find(fallback =>
        inputObj.hasOwnProperty(fallback)
      );
      if (fallbackKey) {
        result[key] = inputObj[fallbackKey];
      }
    } else {
      result[key] = inputObj[key];
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
  componentConfig = {},
  styleChain = [],
  inlineStyle = {},
  alias = []
} = {}) => {
  if (typeof theme !== 'object') {
    throw new Error('Expected theme to be an object');
  }

  if (typeof componentConfig !== 'object') {
    throw new Error('Expected componentConfig to be an object');
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
      return {
        base,
        mode,
        tone
      };
    }
  });

  /**
   * ComponentConfig settings
   * StyleConfig is deprecated but we will still support it for now
   */
  const componentConfigOrigin =
    componentConfig?.style ||
    (componentConfig?.styleConfig &&
      clone(componentConfig?.style || {}, componentConfig.styleConfig || {}));

  if (!(componentConfig || {}).hasOwnProperty('styleConfig')) {
    log.warn(
      `[Deprecation Warning]: "styleConfig" will soon be deprecated. Refer to the theming section of the latest documentation for guidance on updates and alternatives.`
    );
  }

  /**
   * DefaultStyle will apply to the next level in the hierarchy
   */
  let componentConfigDefaultStyle;
  if (componentConfigOrigin) {
    const defaultStyle = JSON.parse(JSON.stringify(componentConfigOrigin));
    delete defaultStyle.base;
    delete defaultStyle.tone;
    delete defaultStyle.mode;
    componentConfigDefaultStyle = defaultStyle; // Anything in the root level of style
  }

  const componentConfigSanitized = {
    defaultStyle: componentConfigDefaultStyle || {},
    base: componentConfigOrigin?.base || {},
    mode: componentConfigOrigin?.mode || {},
    tone: componentConfigOrigin?.tone || {}
  };

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

  const solution = [
    ...componentDefault,
    componentConfigSanitized,
    local
  ].reduce((acc, style) => {
    const parsed = executeWithContextRecursive(style, theme);
    return clone(acc, generateSolution(parsed));
  }, {});

  const final = formatStyleObj(
    removeEmptyObjects(colorParser({ theme }, solution)) || {},
    alias
  );

  const cleanObj = createSharedReferences(final);

  return enforceContract(cleanObj);
};

/**
 * Parse and process a style object to replace theme strings and process color arrays.
 * @param {string} targetObject - In most cases this will be a theme object
 * @param {object} styleObj - The input style object to be processed.
 * @returns {object} The processed style object with theme strings replaced and color arrays processed.
 */
export const colorParser = (targetObject, styleObj) => {
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

  const style =
    componentStyleSource[`${mode}_${tone}`] ||
    componentStyleSource[`unfocused_${tone}`] ||
    componentStyleSource['unfocused_neutral'] ||
    {};

  const componentStyle = component._componentLevelStyle;
  if (componentStyle) {
    return clone(style, colorParser(component, componentStyle));
  }
  return formatStyleObj(style, component.constructor.aliasStyles);
};

/**
 * Generates a name by concatenating the names of constructors in the prototype chain.
 * @param {object} obj - The object for which to generate the name.
 * @returns {string} - The generated name.
 */
export function generateNameFromPrototypeChain(obj) {
  // Base case: If the object has no prototype or its prototype is null, return its own constructor name (if available).
  if (!Object.getPrototypeOf(obj)) {
    return obj.constructor?.name || '';
  }

  // Recursive step: Get the constructor name of the current object and concatenate it with the name generated from the prototype.
  const currentName = obj.constructor?.name || '';
  const parentName = generateNameFromPrototypeChain(Object.getPrototypeOf(obj));

  // Concatenate the names in reverse order (from the top of the prototype chain to the bottom).
  return parentName ? `${parentName}.${currentName}` : currentName;
}

/**
 * Creates a cache object to store the results of getStyleChainMemoized function calls.
 * @type {object}
 */
const styleChainCache = {};

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
  const styleSet = new Set();
  let proto = componentObj;

  do {
    proto = Object.getPrototypeOf(proto);

    if (proto && proto.constructor) {
      // Check if style was passed in as param in .map(style => {to mixin withThemeStyles(MyComponent, {foo: 'bar'})

      if (
        proto.constructor.__mixinStyle &&
        !styleSet.has(proto.constructor.__mixinStyle)
      ) {
        if (
          typeof proto.constructor.__mixinStyle === 'object' &&
          Object.keys(proto.constructor.__mixinStyle).length
        ) {
          styleSet.add(proto.constructor.__mixinStyle);
        } else if (typeof proto.constructor.__mixinStyle === 'function') {
          styleSet.add(proto.constructor.__mixinStyle);
        }
      }

      // Check if has __themeStyle set
      if (
        proto.constructor.__themeStyle &&
        !styleSet.has(proto.constructor.__themeStyle)
      ) {
        if (
          typeof proto.constructor.__themeStyle === 'object' &&
          Object.keys(proto.constructor.__themeStyle).length
        ) {
          styleSet.add(proto.constructor.__themeStyle);
        } else if (typeof proto.constructor.__themeStyle === 'function') {
          styleSet.add(proto.constructor.__themeStyle);
        }
      }
    }
  } while (proto);

  // Return an array of style objects
  return Array.from(styleSet)
    .map(style => ({
      style
    }))
    .reverse();
};

/**
 * Formats a style object by applying a series of formatter functions.
 *
 * @param {object} originalObj - The original style object to be formatted.
 * @param {array} [aliasStyles=[]] - An array of alias styles to be used during formatting.
 * @returns {object} The formatted style object after applying all formatter functions.
 */
export const formatStyleObj = (originalObj, aliasStyles = []) => {
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
        console.warn(
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
