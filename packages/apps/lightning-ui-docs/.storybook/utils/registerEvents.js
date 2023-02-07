import { context } from '@lightning/ui-core';
import xfinity from '@suite-themes/xfinity-lightning-tv';
import rogers from '@suite-themes/rogers-lightning-tv';
import sky from '@suite-themes/sky-lightning-tv';
import xfinityGames from '@suite-themes/xfinity-games-lightning-tv';
import xumo from '@suite-themes/xumo-lightning-tv';
import {
  focusRingExtensionGenerator,
  dropShadowExtensionGenerator
} from '@lightning/ui-extensions';

// creates an array of extensions
// added to the theme by setTheme in themeSelect
const extensions = [
  {
    targetComponent: ['Surface', 'Knob'],
    extension: focusRingExtensionGenerator({ zOffset: -2 })
  },
  {
    targetComponent: ['Surface'],
    extension: dropShadowExtensionGenerator({
      componentsToMask: ['Button', 'Card'],
      zOffset: -1
    })
  }
];

export const themeSelectFromMessageEvent = event => {
  themeSelect(event.data.theme);
};

// called in ThemePicker
export const themeSelect = theme => {
  if (!theme) return;
  let targetTheme;
  switch (theme) {
    case 'rogers':
      targetTheme = {
        ...rogers,
        extensions
      };
      break;
    case 'xfinity':
      targetTheme = {
        ...xfinity,
        extensions
      };
      break;
    case 'sky':
      targetTheme = sky;

      break;
    case 'xfinitygames':
      targetTheme = {
        ...xfinityGames,
        extensions
      };
      break;
    case 'xumo':
      targetTheme = {
        ...xumo,
        extensions
      };
      break;
    default:
      targetTheme = {};
      break;
  }
  return context.setTheme(targetTheme);
};

// registers all window events needed on load
// called in preview.js file
export const registerEventListeners = () => {
  // logger and stores themes
  context.debug = true;
  context.on('themeUpdate', () => {
    window.parent.postMessage('themeSet', '*');
  });

  // Prevent scrolling when navigating with arrows on canvas
  window.addEventListener(
    'keydown',
    function (e) {
      if (
        ['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(
          e.code
        ) > -1
      ) {
        e.preventDefault();
      }
    },
    false
  );
  context.storybookCustomTheme = JSON.parse(JSON.stringify(context.theme));
};
