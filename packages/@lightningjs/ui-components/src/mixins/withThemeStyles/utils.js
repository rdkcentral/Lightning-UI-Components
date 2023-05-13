import { clone, getValFromObjPath, getHexColor } from '../../utils';
import context from '../../globals/context';
import lng from '@lightningjs/core';

export const lngComponentCheck = obj => {
  if (!(obj instanceof lng.Component)) {
    throw new Error('Parameter must be a LightningJS component');
  }
};

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
 * @returns {Promise<string[]>} - An array of component names.
 */
export const getPrototypeChain = obj => {
  lngComponentCheck(obj);
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
 * Generates the source style object for a given component by merging base, mode, and tone styles from the component's style chain
 * @param {object} component - The component for which to generate the style source
 * @returns {object} - The source style object for the component
 */
export const generateComponentStyleSource = async component => {
  lngComponentCheck(component);
  const styleChain = await getStyleChain.call(component);
  let finalStyle = {};

  // Process all styles in styleChain
  styleChain.forEach(({ style }) => {
    // If the object does not appear to be from an es6 import, merge it as a base style
    if (
      typeof style === 'object' &&
      !style.base &&
      !style.mode &&
      !style.tone &&
      !style.default
    ) {
      clone(finalStyle, { base: style });
    } else {
      // Merge styles in the following order: Base, Mode, Tone
      const { base, mode, tone } = style;

      if (base && typeof base === 'function') {
        finalStyle = clone(finalStyle, {
          base: base(context.theme) || {}
        });
      } else if (base && typeof base === 'object') {
        finalStyle = clone(finalStyle, { base });
      }

      if (mode && typeof mode === 'function') {
        finalStyle = clone(finalStyle, {
          mode: mode(context.theme) || {}
        });
      } else if (mode && typeof mode === 'object') {
        finalStyle = clone(finalStyle, { mode });
      }

      if (tone && typeof tone === 'function') {
        finalStyle = clone(finalStyle, {
          tone: tone(context.theme) || {}
        });
      } else if (tone && typeof tone === 'object') {
        finalStyle = clone(finalStyle, { tone });
      }

      // If component config set at theme level for mode
      if (component._componentConfig?.styleConfig?.mode) {
        finalStyle = clone(finalStyle, {
          mode: component._componentConfig.styleConfig.mode
        });
      }

      // If component config set at theme level for tone
      if (component._componentConfig?.styleConfig?.tone) {
        finalStyle = clone(finalStyle, {
          tone: component._componentConfig.styleConfig.tone
        });
      }

      // If set at component level style.styleConfig.mode
      if (component._componentLevelStyle?.styleConfig?.mode) {
        finalStyle = clone(finalStyle, {
          mode: component._componentLevelStyle.styleConfig.mode
        });
      }

      // If set at component level style.styleConfig.tone
      if (component._componentLevelStyle?.styleConfig?.tone) {
        finalStyle = clone(finalStyle, {
          tone: component._componentLevelStyle.styleConfig.tone
        });
      }
    }
  });
  return finalStyle;
};

/**
 * Generates the final style object for a component using its style source.
 * @param {object} component - The component for which to generate a style object.
 * @param {object} componentStyleSource - The style source object for the component.
 * @returns {Promise<object>} - The generated style object.
 */
export const generateStyle = async (component, componentStyleSource) => {
  lngComponentCheck(component);
  const {
    mode = 'unfocused',
    tone = 'neutral',
    _componentConfig: componentConfig = {},
    _componentLevelStyle: componentLevelStyle = {}
  } = component;

  const modeStyle = componentStyleSource?.mode?.[mode];
  const toneStyle = componentStyleSource?.tone?.[tone];
  const toneModeStyle = toneStyle?.mode?.[mode];
  const styleConfigMode = componentConfig?.styleConfig?.mode?.[mode];
  const styleConfigTone = componentConfig?.styleConfig?.tone?.[tone];

  // Start with base styles
  let finalStyle = componentStyleSource.base || {};

  // Add mode style
  if (modeStyle) {
    finalStyle = clone(finalStyle, modeStyle);
  }

  // Add tone style
  if (toneStyle) {
    finalStyle = clone(finalStyle, toneStyle);
  }

  // Tones can contain mode styles
  if (toneModeStyle) {
    finalStyle = clone(finalStyle, toneModeStyle);
  }

  // StyleConfig modes can override
  if (styleConfigMode) {
    finalStyle = clone(finalStyle, styleConfigMode);
  }

  // StyleConfig tones can override
  if (styleConfigTone) {
    finalStyle = clone(finalStyle, styleConfigTone);
  }

  // Add theme level style
  if (
    typeof componentConfig?.style === 'object' &&
    Object.keys(componentConfig.style).length
  ) {
    finalStyle = clone(finalStyle, componentConfig?.style);
  }

  // Add component level style
  if (
    typeof componentLevelStyle === 'object' &&
    Object.keys(componentLevelStyle).length
  ) {
    finalStyle = clone(finalStyle, componentLevelStyle);
  }

  // Process style object
  const processedStyle = JSON.stringify(finalStyle, (_, value) => {
    if ('string' === typeof value && value.startsWith('theme.')) {
      // Support theme strings example: theme.radius.md
      return getValFromObjPath(component, value); // If no theme value exists, the property will be removed from the object
    } else if (Array.isArray(value) && 2 === value.length) {
      // Process value as a color ['#663399', 1]
      return getHexColor(value[0], value[1]);
    }
    return value;
  });

  return JSON.parse(processedStyle);
};

/**
 * Traverse up the prototype chain to create an array of all the styles that are present in the Components ancestors
 * @return {Promise<{ style: object | function }[]>} - An array of style objects containing either an object of styles or a function to return an object of styles.
 */
export async function getStyleChain() {
  const styleSet = new Set();
  let proto;
  do {
    proto = !proto ? this : Object.getPrototypeOf(proto);
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
    .map(style => {
      return {
        style
      };
    })
    .reverse();
}
