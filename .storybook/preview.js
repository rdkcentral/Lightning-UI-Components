// these two lines need to be in this order
// to wait until the inspector is enabled before attaching it
import lng from 'wpe-lightning';
import 'wpe-lightning/devtools/lightning-inspect';
import { addDecorator } from '@storybook/html';
import theme from './theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme,
    inlineStories: true,
  }
}

const white = 0xffffffff;
const black = 0x00000000;
const stage = {
  w: 920,
  h: 480,
  clearColor: black,
  debug: false,
  canvas2d: false,
  useImageWorker: false,
  inspector: false,
  defaultFontFace: 'XfinityStandardMedium'
};
class StoryApp extends lng.Application {
  _init() {
    setTimeout(() => {
      this._refocus();
    }, 0);
  }

  _getFocused() {
    return this.childList.first || this;
  }
}

/**
 * To customize the stage in each storybook file...
 *
 * Add the following to the default export:
 *
 * export default {
 *   ...
 *   parameters: { stage: { h: 800 }
 * }
 *
 * You can also apply it to each individual story:
 *
 * export const StoryName = () => ...
 *
 * StoryName.story = {
 *   parameters: { stage: { h: 800 }
 * }
 */

addDecorator((StoryComponent, { parameters }) => {
  if (window.APP) {
    window.APP.destroy();
  }

  const app = new StoryApp({
    stage: {
      ...stage,
      ...(parameters.stage || {})
    }
  });
  app.children = {
    StoryComponent: {
      type: StoryComponent(),
      w: w => w,
      h: h => h,
      x: 40,
      y: 40,
    }
  };

  // Clear any lightning inspector info
  if (document.querySelectorAll('[type=StoryApp]').length > 1) {
    let div = document.querySelector('[type=StoryApp]');
    div && div.parentNode.remove();
  };

  // Move lightning inspector out of the foreground
  if (window.top.location.search.indexOf('path=/docs/') > -1) {
    let div = document.querySelector('[type=StoryApp]');
    div && (div.parentNode.style.zIndex = -1);
  }

  return app.stage.getCanvas();
});
