/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  GridOverlay,
  context,
  utils,
  TextBox
} from '@lightningjs/ui-components';
import { createApp, clearInspector } from '../../../index';

let previousID = null;
let remountProps = {};

/* 
  returns boolean of if the story component should remount
    returns true if any of the following are true
    - if the selected story changed
    - parameters.remountAll is true on the story
    - an arg changes an its associated argType has a remount property set to true
*/
function shouldTriggerUpdate({ id, args, argTypes, parameters }) {
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

/** creates a global decorator that creates a single instance of the Lightning app */

export const withLightning = (
  StoryComponent,
  { id, args, argTypes, parameters, globals }
) => {
  const app = createApp({ theme: globals.LUITheme });
  clearInspector();
  app.announcerEnabled = globals.announce;
  app.debug = globals.announce;
  // toggle stage color
  !globals.stageColor
    ? app.stage.setClearColor(utils.getValidColor('#21232A'))
    : app.stage.setClearColor(utils.getValidColor('#cccccc'));

  // // If an update is required patch in the new child element
  if (shouldTriggerUpdate({ id, args, argTypes, parameters })) {
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
      app.tag('StoryComponent').patch(
        parameters.storyDetails
          ? {
              x: context.theme.layout.marginX
            }
          : {
              x: context.theme.layout.marginX,
              y: context.theme.layout.marginY
            }
      );
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

  // add optional story description to the canvas
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
              console.log(y + h + context.theme.spacer.xl);
              app.tag('StoryComponent').y = y + h + context.theme.spacer.xl;
            }
          }
        }
      };
      app.childList.a(StoryDetails);
    }

    app.tag('StoryDetails').patch({ content: parameters.storyDetails });
  }

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
