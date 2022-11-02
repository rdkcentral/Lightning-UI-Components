import React from 'react';
import baseTheme from '@suite-themes/base-lightning-tv'
import utils from '../src/utils/index.js';
import debounce from 'debounce';
// import { THEMES } from '../constants';

import { create } from '@storybook/theming/create';
// import brand from './brand.png';
// import { version } from '../package.json';

// export const Theme = create({
//   base: 'dark',
//   appBg: 'rgb(33,	35,	42)',
//   textColor: 'white',
//   // brandTitle: `Lightning UI Components v${version}`,
//   // brandUrl: 'https://github.comcast.com/Lightning/lightning-ui',
//   brandImage: brand
// });

export const createModeControl = (options, defaultValue) => {
  return {
    mode: {
      defaultValue: defaultValue || 'unfocused',
      control: 'radio',
      options:
        options && Array.isArray(options)
          ? ['unfocused', ...options]
          : ['unfocused', 'focused', 'disabled'],
      description: 'Sets the visual mode for the component',
      table: {
        defaultValue: { summary: defaultValue || 'unfocused' }
      },
      type: { name: 'mode', required: true }
    }
  };
};


export const DocsLink = ({ children, id }) => {
  const docsmap = {
    lng: {
      _base: 'https://rdkcentral.github.io/Lightning/docs',
      Component: '/components/overview',
      Text: '/textures/text',
      Transition: '/transitions/attributes'
    }
  };
  const [source, path] = id.split('.');
  const href = docsmap[source]._base + docsmap[source][path];
  return (
    <a href={href} target="_blank">
      {children || id}
    </a>
  );
};

// export const Item = ({ children }) => children;

/**
 * Creates formatted object for markdown prop tables
 * @param {Object} props
 * @param {Object} props.type - TS-style generic/utility type
 */
export const ObjectFormat = ({ object }) => {
  return [
    '{',
    <br />,
    '  ',
    ...utils.flatten(
      Object.entries(object).map(([k, v]) => [
        <span>&nbsp;&nbsp;</span>,
        `${k}: `,
        v,
        ',',
        <br />
      ])
    ),
    '}'
  ].map((x, i) => <Item key={i}>{x}</Item>);
};

/**
 * Formats TS-style generic types
 * @param {Object} props
 * @param {Object} props.children - component children
 * @param {String} props.type - Name of generic type
 */
export const GenericType = ({ children, type }) => {
  return [type, '<', children, '>'].map((x, i) => <Item key={i}>{x}</Item>);
};

export const Theme = ({ theme = {}, isColor = false }) => {
  /** Naively parses a theme object to generate value documentation */
  const getValue = ([key, value], isColor = false) => {
    if (key === '__isColor') return false;
    switch (typeof value) {
      case 'function':
        return <li key={key}>{`${key}: function()`}</li>;
      case 'string':
        return (
          <li key={key}>
            {key}: "{value}"
          </li>
        );
      case 'object':
        return (
          <li key={key}>
            <details>
              <summary>{key}: Object</summary>
              <ul style={{ listStyleType: 'none' }}>
                {Object.entries(value).map(entries =>
                  getValue(entries, '__isColor' in value)
                )}
              </ul>
            </details>
          </li>
        );
      default:
        // converts value to color string if it is a sibling of `__isColor: true` or
        // if "color" is in the key name
        return (
          <li key={key}>
            {key}:{' '}
            {isColor || key.match(/color/i) ? (
              <>
                <span>0x{value.toString(16).toUpperCase()}</span>
                <div
                  style={{
                    display: 'inline-block',
                    width: '20px',
                    height: '20px',
                    margin: '-4px 4px',
                    backgroundColor: `#${value.toString(16).slice(2)}`,
                    opacity:
                      parseInt('0x' + value.toString(16).slice(0, 2)) / 255
                  }}
                ></div>
              </>
            ) : (
              value
            )}
          </li>
        );
    }
  };
  const style = {
    fontFamily: `"Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif`,
    margin: 0,
    fontSize: '14px',
    color: 'white',
    lineHeight: '24px',
    listStyleType: 'none'
  };

  const liStyle = {
    marginTop: '.25em'
  };

  return (
    <ul style={style}>
      {Object.entries(theme).map(entries => getValue(entries, isColor))}
    </ul>
  );
};

export const globalContext = () =>
  document &&
  document.querySelector('iframe') &&
  document.querySelector('iframe').contentWindow &&
  document.querySelector('iframe').contentWindow.CONTEXT;

export const globalTheme = () => {
  const context = globalContext();
  return context && context.theme;
};

export const getPanelsTheme = () => globalTheme() || baseTheme;

export function setGlobalTheme(theme, updateGlobals) {
  document &&
  document.querySelector('iframe') &&
  document.querySelector('iframe').contentWindow &&
  document.querySelector('iframe').contentWindow.postMessage({theme})
  //globalContext().setTheme(THEMES[theme] || {}); // If no theme is found it means that the base theme should be set
  if (updateGlobals) updateGlobals({ LUITheme: theme });
}

export const updateGlobalTheme = (
  updates,
  updateGlobals,
  customTheme = true
) => {
  let context = globalContext();
  if (context) {
    context.updateTheme(updates);
    if (customTheme) {
      const theme = globalTheme();
      const functions = Object.keys(theme).reduce((acc, key) => {
        if ('function' === typeof theme[key]) {
          acc[key] = theme[key];
        }
        return acc;
      }, {});
      globalContext().storybookCustomTheme = {
        ...JSON.parse(JSON.stringify(globalTheme())),
        ...functions,

      };
      updateGlobals({ LUITheme: 'custom' });
    }
  }
};

export const getThemeValueFromString = function (stringValue) {
  if (!stringValue) {
    return;
  }

  let theme = { ...globalTheme() };
  const stringValueArray = stringValue.split('.');
  let success = false;
  for (let i = 0; i < stringValueArray.length; i++) {
    if ('undefined' !== typeof theme[stringValueArray[i]]) {
      theme = theme[stringValueArray[i]];
      if (i === stringValueArray.length - 1) {
        success = true;
      }
    }
  }
  if (success) {
    return theme;
  }
};

const debouncedColorUpdate = debounce((name, value, updateGlobals) => {
  updateGlobalTheme(
    { color: { [name]: utils.getValidColor(value) } },
    updateGlobals
  );
}, 500);

export function colorUpdate() {
  debouncedColorUpdate(...arguments);
}

export function nestedArgs(argsObj = {}, targetProp, ignore = []) {
  return Object.keys(argsObj).reduce((acc, curr) => {
    if (ignore.includes(curr)) return acc;
    return {
      ...acc,
      [targetProp + '_' + curr]: argsObj[curr]
    };
  }, {});
}

export function nestedArgTypes(argTypesObj = {}, targetProp, ignore = []) {
  return Object.keys(argTypesObj).reduce((acc, curr) => {
    if (ignore.includes(curr)) return acc;
    return {
      ...acc,
      [targetProp + '_' + curr]: {
        // Namespaced to avoid conflicts
        name: curr,
        ...argTypesObj[curr],
        table: {
          ...(argTypesObj[curr].table || {}),
          category: targetProp
        }
      }
    };
  }, {});
}

export const prevValues = {};

export function nestedArgActions(componentName, argTypesObj = {}, targetProp, ignore = []) {
  return Object.keys(argTypesObj).reduce((acc, curr) => {
    if (ignore.includes(curr)) return acc;
    return {
      ...acc,
      [targetProp + '_' + curr]: (value, component) => {
        component.tag(componentName).patch({
          [targetProp]: {
            ...prevValues[targetProp],
            [curr.replace(targetProp + '_', '')]:
              'none' === value ? undefined : value // There are issues with merging objects here
          }
        });
        // Allow patching to work with nested objects
        if (!prevValues[targetProp]) {
          prevValues[targetProp] = {};
        }
        prevValues[targetProp][curr.replace(targetProp + '_', '')] =
          'none' === value ? undefined : value;
        component.tag(componentName)._update(); // Update does not trigger is replacing individual properties
      }
    };
  }, {});
}

export function generateSubStory(componentName, BaseStory, SubStory, targetProperty, ignore = []) {
  BaseStory.args = {
    ...BaseStory.args,
    ...nestedArgs(SubStory.args, targetProperty, ['mode', ...ignore])
  };

  BaseStory.argTypes = {
    ...BaseStory.argTypes,
    ...nestedArgTypes(SubStory.argTypes, targetProperty, ['mode', ...ignore])
  };

  if (!(BaseStory && BaseStory.parameters && BaseStory.parameters.argActions)) {
    BaseStory.parameters = {
      argActions: {}
    };
  }

  BaseStory.parameters.argActions = {
    ...BaseStory.parameters.argActions,
    ...nestedArgActions(componentName, SubStory.argTypes, targetProperty, ['mode', ...ignore])
  };
}

export function convertColorsObject(colors) {
  return Object.keys(colors).reduce((acc, curr) => {
    acc[curr] = convertNumToHexAlphaArray(colors[curr]);
    return acc;
  }, {});
}

export function convertNumToHexAlphaArray(color) {
  const [r, g, b, a] = getRgbaString(color);
  return [rgbToHex(r, g, b).toUpperCase(), a * 100];
}

export function getRgbaString(color) {
  const r = ((color / 65536) | 0) % 256;
  const g = ((color / 256) | 0) % 256;
  const b = color % 256;
  const a = ((color / 16777216) | 0) / 255;
  return [r, g, b, a.toFixed(2)];
};

export function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

export function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
