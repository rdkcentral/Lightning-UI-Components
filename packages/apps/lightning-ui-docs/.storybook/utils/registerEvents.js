import { context } from '@lightningjs/ui-core';

// creates an array of extensions
// added to the theme by setTheme in themeSelect
// const extensions = [];

export const themeSelectFromMessageEvent = event => {
  themeSelect(event.data.theme);
};

// called in ThemePicker
export const themeSelect = theme => {
  if (!theme) return;
  let targetTheme;
  switch (theme) {
    // Insert other themes to swap to here
    // Can also utilize the "extensions" array above to add to the theme
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
