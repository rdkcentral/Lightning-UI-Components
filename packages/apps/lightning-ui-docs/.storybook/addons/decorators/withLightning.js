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

import { context, utils } from '@lightningjs/ui-components/src';
import { createApp, clearInspector } from '../../../index';
import {
  shouldTriggerUpdate,
  setMode,
  addGridOverlay,
  addStoryDescription,
  addArgActions,
  addChildElement
} from './decoratorUtils';

/** creates a global decorator that creates a single instance of the Lightning app */

export const withLightning = (
  StoryComponent,
  { id, args, argTypes, parameters, globals }
) => {
  /**
   * the Lightning Element in the 'dom'
   */
  const app = createApp({ theme: globals.LUITheme });
  clearInspector();
  app.announcerEnabled = globals.announce;
  app.debug = globals.announce;
  // toggle stage color
  !globals.stageColor
    ? app.stage.setClearColor(utils.getValidColor('#21232A'))
    : app.stage.setClearColor(utils.getValidColor('#cccccc'));

  // If an update is required patch in the new child element
  if (shouldTriggerUpdate({ id, args, argTypes, parameters })) {
    addChildElement(app, StoryComponent);
  }

  setMode(app, args);
  //forces position update on theme change instead of just when triggerUpdate is true
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

  addGridOverlay(app, id, globals);

  addStoryDescription(app, parameters);

  /**
   * the first child under StoryComponent
   */
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
  addArgActions(parameters, LightningUIComponent);
  return app.stage.getCanvas();
};
