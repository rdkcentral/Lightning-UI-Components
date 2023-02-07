import baseTheme from '@suite-themes/base-lightning-tv';
import { utils } from '@lightning/ui-core';
import debounce from 'debounce';

// Component Styles Panel
export const globalApp = () =>
  document &&
  document.querySelector('iframe') &&
  document.querySelector('iframe').contentWindow &&
  document.querySelector('iframe').contentWindow.APP;

  // Component Styles Panel and Theme Picker
export const globalContext = () =>
  document &&
  document.querySelector('iframe') &&
  document.querySelector('iframe').contentWindow &&
  document.querySelector('iframe').contentWindow.CONTEXT;

// Component Styles Panel, Theme Panel, Theme Picker
export const globalTheme = () => {
  const context = globalContext();
  return context && context.theme;
};

// Theme Panel
export const getPanelsTheme = () => globalTheme() || baseTheme;

// Theme Picker
export function setGlobalTheme(theme, updateGlobals) {
  document &&
    document.querySelector('iframe') &&
    document.querySelector('iframe').contentWindow &&
    document.querySelector('iframe').contentWindow.postMessage({ theme });
  //globalContext().setTheme(THEMES[theme] || {}); // If no theme is found it means that the base theme should be set
  if (updateGlobals) updateGlobals({ LUITheme: theme });
}

// Component Styles and Theme Panels
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
        if (typeof theme[key] === 'function') {
          acc[key] = theme[key];
        }
        return acc;
      }, {});
      globalContext().storybookCustomTheme = {
        ...JSON.parse(JSON.stringify(globalTheme())),
        ...functions
      };
      updateGlobals({ LUITheme: 'custom' });
    }
  }
};


const debouncedColorUpdate = debounce((name, value, updateGlobals) => {
    updateGlobalTheme(
      { color: { [name]: utils.getValidColor(value) } },
      updateGlobals
    );
  }, 500);
  
  // Theme Panel
  export function colorUpdate() {
    debouncedColorUpdate(...arguments);
  }