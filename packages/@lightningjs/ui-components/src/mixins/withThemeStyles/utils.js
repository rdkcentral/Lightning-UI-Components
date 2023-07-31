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
import context from '../../globals/context';

export function executeWithContext(objOrFunction) {
  if (typeof objOrFunction === 'function') {
    // If the input is a function, execute it with the context.theme as a parameter
    return objOrFunction(context.theme);
  } else if (typeof objOrFunction === 'object') {
    // If the input is an object, you can perform other operations here if needed.
    // For now, let's just return the input object.
    return objOrFunction;
  } else {
    return {};
  }
}
/**
 * Checks if a value is a plain object.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is a plain object, false otherwise.
 */
function isPlainObject(value) {
  return (
    typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    !(value instanceof Date) &&
    !(value instanceof RegExp) &&
    !(value instanceof Function)
  );
}

/**
 * Returns the subTheme property of the first parent object that has one, or undefined if none exist.
 *
 * @param {object} obj - The object to search for a subTheme property.
 * @returns {(string | undefined)} - The value of the subTheme property, or undefined if none exists.
 */
export const getSubTheme = obj => {
  let parent = obj.p;
  while (parent && !parent.subTheme) {
    parent = parent.parent;
  }
  return parent && parent.subTheme;
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
  if (!prototypeChain) {
    return (
      context.theme?.componentConfig?.[obj.constructor.__componentName] || {}
    );
  }

  return Array.from(prototypeChain)
    .reverse()
    .reduce((acc, curr) => {
      return clone(acc, context.theme?.componentConfig?.[curr] || {});
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
function removeEmptyObjects(obj) {
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

  if (Object.keys(obj).length === 0) {
    return; // Exit if the current object is empty
  }
  return obj;
}

export function styleFormatter(obj, target, search) {
  // Check if obj is an object and not null
  if (obj === null || typeof obj !== 'object') {
    return [];
  }

  // Check if target is a string
  if (typeof target !== 'string') {
    return [];
  }

  // Check if search is a string
  if (typeof search !== 'string') {
    return [];
  }

  // Attempt to find the property of 'target' in obj
  if (obj.hasOwnProperty(target)) {
    const targetObj = obj[target];

    // Check if targetObj is an object, not null, and has keys
    if (
      targetObj !== null &&
      typeof targetObj === 'object' &&
      Object.keys(targetObj).length > 0
    ) {
      // Check each value in targetObj
      for (const key in targetObj) {
        if (targetObj.hasOwnProperty(key)) {
          const value = targetObj[key];

          // Check if the value is an object that has a key of search
          if (
            typeof value === 'object' &&
            value !== null &&
            value.hasOwnProperty(search)
          ) {
            const nestedObj = value[search];

            // Check if the nestedObj is an object that also has keys
            if (
              typeof nestedObj === 'object' &&
              Object.keys(nestedObj).length > 0
            ) {
              return [nestedObj, `${target}.${key}.${search}`];
            }
          }
        }
      }
    }
  }
  return [];
}

/**
 * Generates the source style object for a given component by merging base, mode, and tone styles from the component's style chain
 * @param {object} component - The component for which to generate the style source
 * @returns {object} - The source style object for the component
 */
export const generateComponentStyleSource = component => {
  if (!isPlainObject(component)) return {};

  const styleChain = getStyleChain(component);

  let finalStyle = {};
  // Process all styles in styleChain
  styleChain.forEach(({ style }) => {
    // If the object does not appear to be from an es6 import, merge it as a base style
    if (
      // If passed into the mixin as an object
      typeof style === 'object' &&
      !style.base &&
      !style.mode &&
      !style.tone &&
      !style.default
    ) {
      finalStyle = clone(finalStyle, { base: style });
    } else {
      const { base, mode, tone } = style;

      // 1. Merge all the styles in order
      /** Base Level: Component Style File */
      finalStyle = clone(finalStyle, { base: executeWithContext(base) });
      finalStyle = clone(finalStyle, { tone: executeWithContext(tone) });
      finalStyle = clone(finalStyle, { mode: executeWithContext(mode) });
    }
  });

  /** Theme Level: ComponentConfig */

  // Deprecated styleConfig
  if (component._componentConfig?.styleConfig) {
    finalStyle = clone(finalStyle, component._componentConfig.styleConfig);
  }

  const componentConfigStyle = component._componentConfig?.style;

  // Theme level component config for base
  if (componentConfigStyle?.base) {
    finalStyle = clone(finalStyle, {
      base: componentConfigStyle.base
    });
  }

  if (componentConfigStyle?.tone) {
    finalStyle = clone(finalStyle, {
      tone: componentConfigStyle.tone
    });
  }

  if (componentConfigStyle?.mode) {
    finalStyle = clone(finalStyle, {
      mode: componentConfigStyle.mode
    });
  }

  if (componentConfigStyle) {
    finalStyle = clone(finalStyle, {
      mode: componentConfigStyle.mode
    });
  }

  if (componentConfigStyle) {
    finalStyle = clone(finalStyle, { overwrite: componentConfigStyle }); // Anything in root level of style
  }

  /** Component Level */

  // Deprecated styleConfig
  if (component._componentLevelStyle?.styleConfig) {
    finalStyle = clone(finalStyle, component._componentLevelStyle.styleConfig);
  }

  const componentStyle = component._componentLevelStyle;
  // Theme level component config for base
  if (componentStyle?.base) {
    finalStyle = clone(finalStyle, {
      base: componentStyle.base
    });
  }

  if (componentStyle?.tone) {
    finalStyle = clone(finalStyle, {
      tone: componentStyle.tone
    });
  }

  if (componentStyle?.mode) {
    finalStyle = clone(finalStyle, {
      mode: componentStyle.mode
    });
  }

  // Create all possible settings

  const {
    base = {},
    mode = {},
    tone: toneOriginal = {},
    overwrite = {}
  } = finalStyle;

  // By default every component has an unfocused mode
  const solution = {};
  const tone = { ...{ neutral: {} }, ...toneOriginal };
  for (const modeItem in { ...{ unfocused: {} }, ...mode }) {
    for (const toneItem in { ...{ neutral: {} }, ...tone }) {
      /**
       * Merge order
       * 1. base -> tone
       * 2. tone
       * 3. tone/mode
       * 4. mode
       * 5. mode/tone
       */
      let payload = clone(base, tone[toneItem]);
      payload = clone(payload, tone[toneItem]?.mode?.[modeItem] || {});
      payload = clone(payload, mode[modeItem]);
      payload = clone(payload, mode[modeItem]?.tone?.[toneItem] || {});

      solution[modeItem + '_' + toneItem] = clone(payload, overwrite);
    }
  }
  

  // Process style object
  const processedStyle = JSON.stringify(solution, (_, value) => {
    if (-1 < ['tone', 'mode'].indexOf(_)) return undefined; // Remove any tone/mode or mode/tone properties as they have already been processed
    if ('string' === typeof value && value.startsWith('theme.')) {
      // Support theme strings example: theme.radius.md
      return getValFromObjPath(component, value); // If no theme value exists, the property will be removed from the object
    } else if (Array.isArray(value) && value.length === 2) {
      // Process value as a color ['#663399', 1]
      return getHexColor(value[0], value[1]);
    }
    return value;
  });
  
  return removeEmptyObjects(JSON.parse(processedStyle)) || {};
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
    componentStyleSource[`unfocused_neutral`] ||
    {};
  const componentStyle = component._componentLevelStyle;
  if (componentStyle) {
    return clone(style, componentStyle); // TODO: Need to check for edge cases. Need to run through parser method
  }
  return style;
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
 * Replaces alias values in the provided style object with their corresponding aliases.
 * @param {Object} value - The style object to process.
 * @param {Array<Object>} [aliasStyles=[]] - Optional array of alias styles to apply.
 * @returns {Object} The style object with alias values replaced.
 */
export const replaceAliasValues = (value, aliasStyles = []) => {
  // TODO: Replace with regex replace for performance
  const styleObj = clone(value, {});
  const aliasProps = [
    { prev: 'height', curr: 'h', skipWarn: true },
    { prev: 'width', curr: 'w', skipWarn: true },
    ...aliasStyles
  ];
  aliasProps.forEach(alias => {
    if (
      alias &&
      typeof alias.prev === 'string' &&
      typeof alias.curr === 'string' &&
      styleObj[alias.prev]
    ) {
      !alias.skipWarn &&
        console.warn(
          `The style property "${alias.prev}" is deprecated and will be removed in a future release. Please use "${alias.curr}" instead.`
        );
      Object.defineProperty(
        styleObj,
        alias.curr,
        Object.getOwnPropertyDescriptor(styleObj, alias.prev)
      );
      delete styleObj[alias.prev];
    }
  });
  return styleObj;
};
