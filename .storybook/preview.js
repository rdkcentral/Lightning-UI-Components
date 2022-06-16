// these two lines need to be in this order
// to wait until the inspector is enabled before attaching it
import lng from '@lightningjs/core';
import context from '../context';
import '@lightningjs/core/devtools/lightning-inspect';
import { addDecorator } from '@storybook/html';

import theme from './theme';
import rogers from '../themes/rogers';
import xfinity from '../themes/xfinity';
import sky from '../themes/sky';
import Pool from '../utils/pool';
import Speech from '../mixins/withAnnouncer/Speech';
import { withAnnouncer } from '../';
import { getValidColor } from '../Styles';
import GridOverlay from '../layout/GridOverlay';

context.on('themeUpdate', () => {
  window.parent.postMessage('themeSet', '*');
});

window.addEventListener('message', themeSelect, false);
function themeSelect(event) {
  if (!event.data.theme) return;
  switch (event.data.theme) {
    case 'rogers':
      context.setTheme(rogers);
      break;
    case 'xfinity':
      context.setTheme(xfinity);
      break;
    case 'sky':
      context.setTheme(sky);
      break;
    default:
      context.setTheme({});
      break;
  }
}

export const globalTypes = {
  LUITheme: {
    name: 'Theme',
    description: 'Theme select',
    defaultValue: 'base'
  },
  'GridOverlay-alpha': {
    defaultValue: '0'
  },
  'GridOverlay-toggle-showColumns': {
    defaultValue: 'true'
  },
  'GridOverlay-toggle-showMargins': {
    defaultValue: 'false'
  },
  'GridOverlay-toggle-showSafe': {
    defaultValue: 'false'
  },
  'GridOverlay-toggle-showGutters': {
    defaultValue: 'false'
  },
  'GridOverlay-toggle-showText': {
    defaultValue: 'false'
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
window.CONTEXT = context.config({
  keyMetricsCallback() {
    console.log('key metrics callback');
  }
});
context.storybookCustomTheme = JSON.parse(JSON.stringify(context.theme));

function createApp(parameters) {
  // Make sure app is only created once
  if (window.APP) return window.APP;
  Pool.clear();

  const announcerOptions = {
    language: 'en-US',
    ...parameters.announcerOptions
  };

  const appParams = {
    stage: {
      w: 1280,
      h: 720,
      precision: 2 / 3,
      clearColor: getValidColor('#232328'),
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
  };
  window.APP = new (class LightningUIApp extends withAnnouncer(
    lng.Application,
    Speech,
    announcerOptions
  ) {
    _construct() {
      this.announcerTimeout = 15 * 1000;
    }

    _getFocused() {
      return ((this.childList.first || {}).childList || {}).first || this;
    }
  })(appParams);
  document.body.appendChild(window.APP.stage.getCanvas());
  return window.APP;
}

let previousID = null;
addDecorator(
  (StoryComponent, { id, args, parameters, globals, updateGlobals }) => {
    const triggerUpdate = previousID !== id;
    previousID = id;
    const app = createApp(globals.LUITheme);
    app.announcerEnabled = globals.announce;
    app.debug = globals.announce;
    // If an update is required patch in the new child element
    if (triggerUpdate) {
      app.childList.clear();
      app.childList.a({
        StoryComponent: {
          type: class extends StoryComponent() {
            _init() {
              super._init();
              this._refocus(); // Force Lightning to reset focus
            }
          },
          w: w => w,
          h: h => h,
          x: context.theme.layout.marginX,
          y: context.theme.layout.marginY
        }
      });
      app._refocus();
    }
    if (!app.tag('GridOverlay')) {
      app.childList.a({ GridOverlay: { type: GridOverlay, zIndex: 100 } });
    }
    app.tag('GridOverlay').patch({
      // do not render this on top of the actual GridOverlay component's story
      alpha: id.includes('gridoverlay') ? 0 : parseFloat(globals['GridOverlay-alpha']),
      showColumns: globals['GridOverlay-toggle-showColumns'] === 'true',
      showMargins: globals['GridOverlay-toggle-showMargins'] === 'true',
      showSafe: globals['GridOverlay-toggle-showSafe'] === 'true',
      showGutters: globals['GridOverlay-toggle-showGutters'] === 'true',
      showText: globals['GridOverlay-toggle-showText'] === 'true'
    });

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
            parameters.argActions[prop](args[prop], app.tag('StoryComponent'));
          } catch (err) {
            console.error('unable to apply argAction for ' + prop);
          }
        }
      }
      return app.getCanvas();
    }

    return app.stage.getCanvas();
  }
);
