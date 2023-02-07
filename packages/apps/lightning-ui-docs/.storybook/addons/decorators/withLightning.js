import { GridOverlay, context, utils } from '@lightning/ui-core';
import { createApp, clearInspector } from '../../../index';

let previousID = null;

/** creates a global decorator that creates a single instance of the Lightning app */

export const withLightning = (
  StoryComponent,
  { id, args, parameters, globals }
) => {
  const triggerUpdate = previousID !== id;
  previousID = id;
  const app = createApp({ theme: globals.LUITheme });
  clearInspector();
  app.announcerEnabled = globals.announce;
  app.debug = globals.announce;
  // toggle stage color
  !globals.stageColor
    ? app.stage.setClearColor(utils.getValidColor('#21232A'))
    : app.stage.setClearColor(utils.getValidColor('#cccccc'));

  // // If an update is required patch in the new child element
  if (triggerUpdate) {
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
          // TODO: Assess what config.optimization.minimize is doing different in production vs develop
          // check string to see if it includes Element in the name string
          get componentTarget() {
            return this.childList &&
              this.childList.first &&
              this.childList.first.constructor.name !== 'Element'
              ? this.childList.first
              : this;
          }
          _init() {
            if (this.componentTarget) {
              // Notify application every time the style is updated. Used for componentStyles panel
              this.componentTarget.on('styleUpdated', () => {
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
    app._refocus();
  }

  // sets mode
  app
    .tag('StoryComponent')
    ._setState(
      !args.mode || (args.mode && args.mode === 'focused')
        ? 'ModeFocusState'
        : 'ModeUnfocusState'
    );
  // // forces position update on theme change instead of just when triggerUpdate is true
  context.on('themeUpdate', () => {
    app.tag('StoryComponent') &&
      app.tag('StoryComponent').patch({
        x: context.theme.layout.marginX,
        y: context.theme.layout.marginY
      });
  });
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
  // applying argAction
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
  return app.stage.getCanvas();
};
