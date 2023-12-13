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

import React from 'react';
import { AddonPanel } from '@storybook/components';
import { ComponentStylesTable } from '../components';
import { globalApp } from '../../utils/themeUtils.js';

let component;
//let storybookInit;
/**
 * @returns the full Component Style Panel add-on
 */
export default params => {
  const APP = globalApp();

  /**
   * TODO: update controls when changing from Story to story
   */
  const updatePanel = () => {
    console.log('updatePanel');
  };
  // NOTE: loads panel properly from story to story but carries over props values in control but not in the theme from story to story if the props were changed in previous story
  if (APP) {
    component = APP._getFocused().childList.first;
    //updatePanel();
  }

  // NOTE: old logic
  // only loads panel when changing stories not on initial load, a little wonky between stories too

  // if (APP && !storybookInit) {
  //   APP.on('storyChanged', () => {
  //     component = APP._getFocused().childList.first;
  //     //if (component) updatePanel(); // NOTE: updatePanel called setFields & updateTone
  //   });
  //   storybookInit = true;
  // }

  return (
    <AddonPanel {...params}>
      <div className="component-styles-panel-wrapper">
        {params.active ? (
          <>
            <ComponentStylesTable {...component} />
          </>
        ) : (
          <></>
        )}
      </div>
    </AddonPanel>
  );
};
