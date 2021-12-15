// these two lines need to be in this order
// to wait until the inspector is enabled before attaching it
import context from '../context';
import '@lightningjs/core/devtools/lightning-inspect';
import { addDecorator } from '@storybook/html';
import { withAnnouncer } from '../';
import BaseTheme from '../themes/base';
import extensions from '../themes/xfinity/extensions';
import lng from '@lightningjs/core';
import withAnnouncer from '../mixins/withAnnouncer';
import Pool from '../utils/pool';
import Speech from '../mixins/withAnnouncer/Speech';
import theme from './theme';
import XfinityTheme from '../themes/xfinity';

context.on('themeUpdate', () => {
  window.parent.postMessage('themeSet', '*');
});

export const globalTypes = {
  LUITheme: {
    name: 'Theme',
    description: 'Theme select',
    defaultValue: 'base',
    toolbar: {
      items: [
        { title: 'Base', value: 'base' },
        { title: 'Xfinity', value: 'xfinity' },
        { title: 'Custom', value: 'custom' }
      ],
      showName: true
    }
  }
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    hideNoControlsWarning: true,
    expanded: true
  },
  docs: {
    inlineStories: true,
    theme
  }
};

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

// Setup Lightning UI Theme
let lightningUITheme = {};
window.CONTEXT = context.config({
  theme: {
    ...lightningUITheme,
    extensions
  },
  keyMetricsCallback() {
    console.log('key metrics callback');
  }
});
context.storybookCustomTheme = JSON.parse(JSON.stringify(context.theme));

function createLightningUIApp(announcerOptions) {
  return class LightningUIApp extends withAnnouncer(lng.Application, window.Speech, announcerOptions) {
    _construct() {
      this.announcerTimeout = 15 * 1000;
    }

    _getFocused() {
      return ((this.childList.first || {}).childList || {}).first || this;
    }
  };
}

function createApp(parameters) {
  // Make sure app is only created once
  if (window.APP) return window.APP;
  Pool.clear();

  // const white = 0xffffffff;
  const grey = 0xff141417;
  const announcerOptions = { language: 'en-US', ...parameters.announcerOptions };
  window.APP = createLightningUIApp(announcerOptions)({
    stage: {
      w: 1280,
      h: 720,
      precision: 2 / 3,
      clearColor: grey,
      debug: false,
      canvas2d: false,
      useImageWorker: false,
      inspector: true,
      defaultFontFace: 'XfinityStandardMedium',
      fontSharp: {
        precision: 2 / 3,
        fontSize: 12
      }
    },
    debug: true
  });
  document.body.appendChild(window.APP.stage.getCanvas());
  return window.APP;
}

function setTheme(themeName) {
  let theme = BaseTheme;
  switch (themeName) {
    case 'xfinity':
      theme = XfinityTheme;
      break;
    case 'custom':
      theme = { ...context.storybookCustomTheme, name: 'Custom' };
      break;
  }
  context.setTheme(theme);
}

let previousID = null;
addDecorator((StoryComponent, { id, args, parameters, globals }) => {
  setTheme(globals.LUITheme);
  const triggerUpdate = previousID !== id;
  previousID = id;
  const app = createApp(parameters);
  app.announcerEnabled = globals.announce;
  app.debug = globals.announce;
  // If an update is required patch in the new child element
  if (triggerUpdate) {
    app.childList.clear();
    app.childList.a({
      StoryComponent: {
        type: class extends StoryComponent() {
          _init() {
            this._refocus(); // Force Lightning to reset focus
          }
        },
        w: w => w,
        h: h => h,
        x: 90,
        y: 40
      }
    });
    app._refocus();
  }

  const isDefault =
    Object.keys(parameters.argTypes)
      .map(prop => {
        return parameters.argTypes[prop].defaultValue === args[prop];
      })
      .filter(Boolean).length === Object.keys(parameters.argTypes).length;

  const LightningUIComponent = app.tag('StoryComponent').childList.first;
  if (LightningUIComponent && Object.keys(args).length) {
    for (const prop in args) {
      // Apply arguments from controls
      const propValue =
        'undefined' !== typeof args[prop]
          ? args[prop]
          : parameters.argTypes[prop].defaultValue;
      if (!parameters.argActions || !parameters.argActions[prop]) {
        LightningUIComponent[prop] = propValue;
      }
    }
  }

  if (
    LightningUIComponent &&
    parameters.argActions &&
    Object.keys(parameters.argActions).length
  ) {
    for (const prop in parameters.argActions) {
      if ('function' === typeof parameters.argActions[prop]) {
        try {
          const propValue =
            'undefined' !== typeof args[prop]
              ? args[prop]
              : parameters.argTypes[prop].defaultValue;
          if ('undefined' !== typeof propValue)
            parameters.argActions[prop](args[prop], app.tag('StoryComponent'));
        } catch (err) {
          console.error('unable to apply argAction for ' + prop);
        }
      }
    }
    return app.getCanvas();
  }

  return app.stage.getCanvas();
});