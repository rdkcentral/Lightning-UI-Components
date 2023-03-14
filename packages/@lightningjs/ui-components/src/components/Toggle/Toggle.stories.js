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

import lng from '@lightningjs/core';
import { default as ToggleComponent } from '.';
import mdx from './Toggle.mdx';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[512]}/Toggle`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Toggle = () =>
  class Toggle extends lng.Component {
    static _template() {
      return {
        flex: { direction: 'column' },
        Toggle: {
          type: ToggleComponent,
          onEnter: toggle => {
            alert('Sample onEnter override');
            toggle.toggle();
            return true;
          }
        }
      };
    }
  };
Toggle.args = {
  checked: false,
  mode: 'focused'
};

Toggle.argTypes = {
  ...createModeControl({ summaryValue: 'focused' }),
  checked: {
    control: 'boolean',
    description: 'The state of the toggle being checked',
    table: {
      defaultValue: { summary: true }
    }
  }
};
