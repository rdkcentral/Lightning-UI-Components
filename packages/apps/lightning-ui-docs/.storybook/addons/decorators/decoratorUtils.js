import {
  GridOverlay,
  context,
  utils,
  TextBox
} from '@lightningjs/ui-components/src';

let previousID = null;
let remountProps = {};
/**
 * returns true if any of the following are true
 *    - if the selected story changed
 *    - parameters.remountAll is true on the story
 *    - an arg changes an its associated argType has a remount property set to true
 * @returns boolean of if the story component should remount
 */
export function shouldTriggerUpdate({ id, args, argTypes, parameters }) {
  const storyChanged = previousID !== id;
  let triggerUpdate = storyChanged;
  previousID = id;

  // create remountProps object to track which props should trigger remounting
  if (storyChanged) {
    remountProps = {};
    if (parameters.remountAll) {
      // track all props except mode for triggering remount
      Object.keys(args).forEach(key => {
        if (key === 'mode') {
          return;
        }
        remountProps[key] = args[key];
      });
    } else {
      // track only props with truthy remount property on their associated argType
      Object.keys(argTypes).forEach(key => {
        if (argTypes[key].remount) {
          remountProps[key] = args[key];
        }
      });
    }
  }

  // evaluate if any props tracked in remountProps changed and should trigger a remount
  Object.keys(remountProps).forEach(key => {
    if (remountProps[key] !== args[key]) {
      triggerUpdate = true;
      remountProps[key] = args[key];
    }
  });

  return triggerUpdate;
}

/**
 * sets mode
 * @param {s} app
 * @returns
 */
export function setMode(app, args) {
  return app
    .tag('StoryComponent')
    ._setState(
      !args.mode || (args.mode && args.mode === 'focused')
        ? 'ModeFocusState'
        : 'ModeUnfocusState'
    );
}

export function addGridOverlay(app, id, globals) {
  if (!app.tag('GridOverlay')) {
    app.childList.a({ GridOverlay: { type: GridOverlay, zIndex: 100 } });
  }
  app.tag('GridOverlay').patch({
    // do not render this on top of the actual GridOverlay component's story
    alpha: id.includes('gridoverlay')
      ? 0
      : parseFloat(globals['GridOverlay-alpha']),
    showColumns: globals['GridOverlay-toggle-showColumns'] === 'true',
    showMargins: globals['GridOverlay-toggle-showMargins'] === 'true',
    showSafe: globals['GridOverlay-toggle-showSafe'] === 'true',
    showGutters: globals['GridOverlay-toggle-showGutters'] === 'true',
    showText: globals['GridOverlay-toggle-showText'] === 'true'
  });
  return app;
}

/**
 * add optional story description to the canvas
 * @param {*} app
 * @param {*} parameters
 * @returns
 */
export function addStoryDescription(app, parameters) {
  if (parameters.storyDetails) {
    if (!app.tag('StoryDetails')) {
      const StoryDetails = {
        StoryDetails: {
          type: TextBox,
          content: parameters.storyDetails,
          style: {
            textStyle: {
              wordWrapWidth:
                context.theme.layout.screenW - context.theme.spacer.sm * 2
            }
          },
          x: context.theme.spacer.sm,
          y: context.theme.spacer.sm,
          onAfterUpdate: ({ y, h }) => {
            if (h > context.theme.layout.marginY) {
              app.tag('StoryComponent').y = y + h + context.theme.spacer.xl;
            }
          }
        }
      };
      app.childList.a(StoryDetails);
    }

    app.tag('StoryDetails').patch({ content: parameters.storyDetails });
  }
  return app;
}

/**
 *
 * @param {*} app
 * @param {*} StoryComponent
 * @returns
 */
export function addChildElement(app, StoryComponent) {
  app.childList.clear();
  app.childList.a({
    StoryComponent: {
      type: class extends StoryComponent() {
        static _states() {
          return [
            class ModeUnfocusState extends this {
              _getFocused() {
                return this;
              }
            },
            class ModeFocusState extends this {
              _getFocused() {
                return this.componentTarget; // Text Element
              }
            }
          ];
        }
        // FIXME: Assess what config.optimization.minimize is doing different in production vs develop - this was prior to v7 upgrade
        get componentTarget() {
          // using this check on type Element because production vs develop build issue
          return this.childList.first instanceof lng.Component
            ? this.childList.first
            : this;
        }
        _init() {
          if (this.componentTarget) {
            // Notify application every time the style is updated. Used for componentStyles panel
            this.componentTarget.on('styleUpdated', () => {
              //FIXME: why are we setting this time out here and in setup?
              setTimeout(() => {
                this.fireAncestors('$storyChanged');
              });
            });
          }
          super._init();
          this._refocus(); // Force Lightning to reset focus
        }
        _setup() {
          setTimeout(() => {
            this.fireAncestors('$storyChanged');
          });
        }
      },
      w: w => w,
      h: h => h,
      x: context.theme.layout.marginX,
      y: context.theme.layout.marginY
    }
  });
  return app._refocus();
}

export function addControlProps(args, parameters, LightningUIComponent) {
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
}

/**
 * adds argActions to story
 * @param {a} parameters
 * @param {*} LightningUIComponent
 * @returns
 */
export function addArgActions(parameters, LightningUIComponent) {
  if (
    LightningUIComponent &&
    parameters.argActions &&
    Object.keys(parameters.argActions).length
  ) {
    for (const prop in parameters.argActions) {
      if ('function' === typeof parameters.argActions[prop]) {
        try {
          parameters.argActions[prop](args[prop], app.tag('StoryComponent'));
        } catch (err) {
          console.error('unable to apply argAction for ' + prop);
        }
      }
    }
    return app.getCanvas();
  }
}
