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
import { useGlobals } from '@storybook/manager-api';
import { AddonPanel } from '@storybook/components';
import { ComponentStyleTable, ResetButton } from '../components';
import { globalApp } from '../../utils/themeUtils';
import { createTitle } from '../../utils/helpers';

let component;
let storybookInit;

/**
 * @returns the full Component Style Panel add-on
 */
export default params => {
  const APP = globalApp();
  const [{ LUITheme }] = useGlobals();
  if (APP) {
    component = APP._getFocused().childList.first;
  }

  return (
    <AddonPanel {...params}>
      <div className="component-styles-panel-wrapper">
        <h1>Current Theme: {createTitle(LUITheme)}</h1>
        <ResetButton />
        <ComponentStyleTable {...component} />
        <p>Below should show only if now styles are available</p>
        <h3>No theme values available on this component.</h3>
      </div>
    </AddonPanel>
  );
};
