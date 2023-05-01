import { clone, getValFromObjPath, getHexColor } from '../../utils';
import context from '../../globals/context';

export const generateComponentStyleSource = async component => {
  const styleChain = await getStyleChain.call(component);

  // Process all styles in styleChain
  let v = {};
  styleChain.forEach(({ style }) => {
    if (
      // If the object does not appear to be from an es6 import merge is as a base style
      typeof style === 'object' &&
      !style.base &&
      !style.mode &&
      !style.tone &&
      !style.default
    ) {
      clone(v, { base: style });
    } else {
      /**
       * Merge order
       *
       * 1. Base
       * 2. Mode
       * 3. Tone
       */
      const { base, mode, tone } = style;

      if (base && typeof base === 'function') {
        v = clone(v, {
          base: base(context.theme) || {}
        });
      } else if (base && typeof base === 'object') {
        v = clone(v, {
          base
        });
      }

      if (mode && typeof mode === 'function') {
        v = clone(v, {
          mode: mode(context.theme) || {}
        });
      } else if (mode && typeof mode === 'object') {
        v = clone(v, {
          mode
        });
      }

      if (tone && typeof tone === 'function') {
        v = clone(v, {
          tone: tone(context.theme) || {}
        });
      } else if (tone && typeof tone === 'object') {
        v = clone(v, {
          tone
        });
      }

      //TODO: Add styleConfig overrides
    }
  });
  return v;
};

export const generateStyle = async (component, componentStyleSource) => {
  const {
    mode = 'unfocused',
    tone = 'neutral',
    componentConfig = {},
    _componentLevelStyleSource: componentLevelStyleSource = {}
  } = component;
  const modeStyle = componentStyleSource?.mode?.[mode];
  const toneStyle = componentStyleSource?.tone?.[tone];

  let v = componentStyleSource.base || {};
  // Mode style
  if (modeStyle) {
    v = clone(v, modeStyle);
  }
  // Tone style
  if (toneStyle) {
    v = clone(v, toneStyle);
  }

  // Theme Level style example: this.theme.componentStyle.foo = 'bar'
  if (
    typeof componentConfig?.style === 'object' &&
    Object.keys(componentConfig.style).length
  ) {
    v = clone(v, componentConfig?.style);
  }

  // Component Level style example: MyComponent.style.foo = 'bar'
  if (
    typeof componentLevelStyleSource === 'object' &&
    Object.keys(componentLevelStyleSource).length
  ) {
    v = clone(v, componentLevelStyleSource);
  }

  // Support theme strings example: theme.radius.md
  const processedStyle = JSON.stringify(v, (key, value) => {
    if ('string' === typeof value && value.startsWith('theme.')) {
      return getValFromObjPath(this, value); // If no theme value exists the property will be removed from the object
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
      // Check if style was passed in as param in.map(style => {to mixin withThemeStyles(MyComponent, {foo: 'bar'})
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

  return Array.from(styleSet)
    .map(style => {
      return {
        style
      };
    })
    .reverse();
}
