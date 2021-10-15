// these two lines need to be in this order
// to wait until the inspector is enabled before attaching it
import lng from '@lightningjs/core';
import '@lightningjs/core/devtools/lightning-inspect';
import { addDecorator } from '@storybook/html';
import theme from './theme';
import withAnnouncer from '../mixins/withAnnouncer';

export const globalTypes = {
  announce: {
    name: 'Announce',
    description: 'Enable a11y announcing of components',
    defaultValue: 'off',
    toolbar: {
      icon: 'speaker',
      items: ['off', 'on']
    }
  }
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { hideNoControlsWarning: true },
  docs: {
    inlineStories: true,
    theme
  },
  options: {
    enableShortcuts: false
  }
}

const white = 0xffffffff;
const grey = 0xff141417;
const stage = {
  w: 1280,
  h: 720,
  precision: 2/3,
  clearColor: grey,
  debug: false,
  canvas2d: false,
  useImageWorker: false,
  inspector: false,
  defaultFontFace: 'XfinityStandardMedium',
  textRenderSharpPrecision: 1,
  textRenderSharpFontSize: 1
};

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

let storyId;
let app;

// Prevent scrolling when navigating with arrows on canvas
window.addEventListener(
  'keydown',
  function (e) {
    if (!document.body.classList.contains('canvas')) return;
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

addDecorator((StoryComponent, { id, args, argTypes, kind, parameters, story, globals }) => {
  const announce = globals.announce === 'on';
  class StoryApp extends withAnnouncer(lng.Application) {
    _init() {
      setTimeout(() => {
        this._refocus();
      }, 0);
      this.debug = announce;
      this.announcerEnabled = announce;
      this.announcerTimeout = 15 * 1000;
    }

    _getFocused() {
      return this.childList.first || this;
    }
  }
  function createApp() {
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
        x: 90,
        y: 40
      }
    };

    //Expose the APP for debugging
    window.APP = app;

    return app;
  }

  function clearInspector() {
    // Clear any lightning inspector info
    if (document.querySelectorAll('[type=StoryApp]').length > 1) {
      let div = document.querySelector('[type=StoryApp]');
      div && div.parentNode.remove();
    };

    // Move lightning inspector out of the foreground
    if (window.top.location.search.indexOf('path=/docs/') > -1) {
      document.body.classList.remove('canvas');
      let div = document.querySelector('[type=StoryApp]');
      div && (div.parentNode.style.zIndex = -1);
    } else {
      document.body.classList.add('canvas');
    }
  }

  // render a new App if we've just swapped stories
  // or if the story component is missing children (for sandboxing purposes?)
  // or if the forceReload parameter is set i.e. Basic.parameters = { forceReload: true }
  if (id !== storyId || !app.tag('StoryComponent').children.length || parameters.forceReload) {
    storyId = id;
    app = createApp();
    clearInspector();
  } else {
    // tag is what we use to target a component for controls.
    // there can only be one target per story
    const tag = parameters.tag || kind;
    const storyComponent = app.tag('StoryComponent');
    const component = storyComponent.tag(tag) || storyComponent;
    app.debug = announce;
    app.announcerEnabled = announce;
    for (const arg in args) {
        const argValue = args[arg];

        if (!component) {
          console.error(`.storybook/preview.js - No tag '${tag}' found inside story '${story}'. Change the component tag name to '${tag}' or set "${story}.parameters = { tag: '${storyComponent.childList.first.tags[0]}' }"`);
        }

        // argActions are callbacks keyed to args.
        // An argAction will override the default setter behavior on arg changes via control

        // The callback accepts three arguments:
        // argValue: any - current value of the given arg key
        // storyComponent: lng.Component - instance of returned class in the story
        // args: Object<any> - complete args object passed into the storyFn

        // example:
        // Basic.argTypes = { focused: { control: 'boolean' } }
        // Basic.parameters = {
        //   argActions: {
        //     focused: (isFocused, component) => {
        //       component._getFocused = isFocused ? () => component.tag('Button') : () => {};
        //       component._refocus();
        //     }
        //   }
        // }
        if (arg in (parameters.argActions || {})) {
          const argAction = parameters.argActions[arg];
          argAction(argValue, storyComponent, args);
        } else if (argValue !== component[arg]) {
          // if forceReload is on the argType, create a new app
          // example: Basic.argTypes = { title: { forceReload: true }}
          if (argTypes[arg].forceReload) {
            app = createApp();
            clearInspector();
            return app.getCanvas();
          }

          // only apply an arg value directly if the component has a dedicated setter, otherwise return a new app.
          // We are assuming that a setter will handle UI updates for value changes
          const proto = component.type ? component.type.prototype : component.__proto__;
          const descriptor = getDescriptor(proto, arg);

          if (descriptor && descriptor.set) {
            component[arg] = argValue;
          } else {
            app = createApp();
            clearInspector();
            return app.getCanvas();
          }
      }
    }
  }
  return app.getCanvas();
});

function getDescriptor(prototype, property) {
  let proto = prototype.__proto__;
  let descriptor = Object.getOwnPropertyDescriptor(prototype, property);

  while (descriptor === undefined && proto !== null) {
    if (proto.constructor.isPrototypeOf(lng.Component)) break;
    descriptor = Object.getOwnPropertyDescriptor(proto, property);
    proto = proto.__proto__;
  };

  return descriptor;
}
