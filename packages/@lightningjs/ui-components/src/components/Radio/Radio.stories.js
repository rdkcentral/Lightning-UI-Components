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
import { default as RadioComponent } from '.';
import mdx from './Radio.mdx';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[512]}/Radio`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Radio = () =>
  class Radio extends lng.Component {
    static _template() {
      return {
        Radio: {
          type: RadioComponent
        }
      };
    }
  };
Radio.args = { checked: false, mode: 'unfocused' };
Radio.argTypes = {
  ...createModeControl({ summaryValue: 'unfocused' }),
  checked: {
    control: 'boolean',
    description: 'Toggles checked between on and off',
    table: { defaultValue: { summary: false } }
  }
};
