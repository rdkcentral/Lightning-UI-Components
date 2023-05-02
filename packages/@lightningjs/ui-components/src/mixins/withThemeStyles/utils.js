import { clone, getValFromObjPath, getHexColor } from '../../utils';
import context from '../../globals/context';

export const generateComponentStyleSource = async component => {
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

      //TODO: Add styleConfig overrides
      if (component._componentConfig?.styleConfig?.mode) {
        finalStyle = clone(finalStyle, {
          mode: component._componentConfig?.styleConfig?.mode
        });
      }
    }
  });
  return finalStyle;
};

export const generateStyle = async (component, componentStyleSource) => {
  const {
    mode = 'unfocused',
    tone = 'neutral',
    _componentConfig: componentConfig = {},
    _componentLevelStyleSource: componentLevelStyleSource = {}
  } = component;

  const modeStyle = componentStyleSource?.mode?.[mode];
  const toneStyle = componentStyleSource?.tone?.[tone];

  let finalStyle = componentStyleSource.base || {};

  // Add mode style
  if (modeStyle) {
    finalStyle = clone(finalStyle, modeStyle);
  }

  // Add tone style
  if (toneStyle) {
    finalStyle = clone(finalStyle, toneStyle);
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
    typeof componentLevelStyleSource === 'object' &&
    Object.keys(componentLevelStyleSource).length
  ) {
    finalStyle = clone(finalStyle, componentLevelStyleSource);
  }

  // Process style object
  const processedStyle = JSON.stringify(finalStyle, (_, value) => {
    if ('string' === typeof value && value.startsWith('theme.')) {
      // Support theme strings example: theme.radius.md
      return getValFromObjPath(this, value); // If no theme value exists, the property will be removed from the object
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
 * @return {Array}
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
