import lng from '@lightningjs/core';
import { withAnnouncer, Speech, pool, context } from '@lightning/ui-core';
import {
  themeSelect,
  themeSelectFromMessageEvent
} from './.storybook/utils/registerEvents';

export const CATEGORIES = {
  0: 'Accessibility',
  2: 'Controls',
  4: 'Foundations',
  8: 'Keyboard',
  16: 'Layout',
  32: 'Metadata',
  64: 'Navigation',
  128: 'Tiles & Cards',
  256: 'Text',
  512: 'Utilities',
  1024: 'Docs',
  2048: 'Collections'
};

// create Lightning App
export const createApp = parameters => {
  // Make sure app is only created once if path=/story
  if (window.top.location.search.indexOf('path=/docs/') <= -1) {
    if (window.APP) return window.APP;
  }

  pool.clear();

  const announcerOptions = {
    language: 'en-US',
    ...parameters.announcerOptions
  };

  const appParams = {
    stage: {
      w: 1280,
      h: 720,
      precision: 2 / 3,
      canvas2d: false,
      useImageWorker: false,
      inspector: false,
      defaultFontFace: 'XfinityStandardMedium',
      fontSharp: {
        precision: 2 / 3,
        fontSize: 12
      }
    },
    debug: true
  };

  window.CONTEXT = context; // Used by addons

  window.APP = new (class LightningUIApp extends withAnnouncer(
    lng.Application,
    Speech,
    announcerOptions
  ) {
    _construct() {
      this.announcerTimeout = 15 * 1000;
    }

    _attach() {
      setTimeout(() => {
        if (parameters.theme) {
          themeSelect(parameters.theme).then(() => {
            window.addEventListener(
              'message',
              themeSelectFromMessageEvent,
              false
            );
          });
        } else {
          window.addEventListener(
            'message',
            themeSelectFromMessageEvent,
            false
          );
        }
      });
    }

    $storyChanged() {
      this.emit('storyChanged');
    }

    _getFocused() {
      return ((this.childList.first || {}).childList || {}).first || this;
    }
  })(appParams);
  document.body.appendChild(window.APP.stage.getCanvas());
  return window.APP;
};

export const clearInspector = () => {
  // Clear any lightning inspector info
  if (document.querySelectorAll('[type=StoryApp]').length > 1) {
    const div = document.querySelector('[type=StoryApp]');
    div && div.parentNode.remove();
  }

  // Move lightning inspector out of the foreground
  if (window.top.location.search.indexOf('path=/docs/') > -1) {
    document.body.classList.remove('canvas');
    const div = document.querySelector('[type=StoryApp]');
    div && (div.parentNode.style.zIndex = -1);
  } else {
    document.body.classList.add('canvas');
  }
};
