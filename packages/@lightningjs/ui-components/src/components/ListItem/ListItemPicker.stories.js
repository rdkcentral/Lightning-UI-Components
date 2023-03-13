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
import { default as ListItemPickerComponent } from './ListItemPicker';
import mdx from './ListItemPicker.mdx';
import { createModeControl } from '../../docs/utils';
import { CATEGORIES } from '../../docs/constants';

export default {
  title: `${CATEGORIES[2]}/ListItemPicker`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const ListItemPicker = args =>
  class ListItemPicker extends lng.Component {
    static _template() {
      return {
        ListItemPicker: {
          type: ListItemPickerComponent,
          options: args.options
        }
      };
    }
  };

ListItemPicker.storyName = 'ListItemPicker';

ListItemPicker.args = {
  title: 'List Item',
  options: ['Description1', 'Description2', 'Description3'],
  shouldCollapse: false,
  mode: 'focused'
};

ListItemPicker.argTypes = {
  ...createModeControl({ summaryValue: ListItemPicker.args.mode }),
  title: {
    control: 'text',
    description: 'Title text',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  shouldCollapse: {
    control: 'boolean',
    description:
      'When in unfocused or disabled mode,if this flag is true the description will collapse (when focused, it will always be expanded)',
    table: {
      defaultValue: { summary: false }
    }
  },
  options: {
    control: 'object',
    description: 'List of selectable options',
    table: { defaultValue: { summary: 'undefined' } }
  }
};
