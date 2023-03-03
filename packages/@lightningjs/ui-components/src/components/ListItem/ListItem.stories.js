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
import ListItemComponent from './ListItem';
import mdx from './ListItem.mdx';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import xfinity from '../../assets/images/Xfinity-Provider-Logo-Square.png';
import { default as Checkbox } from '../Checkbox';
import { default as Radio } from '../Radio';
import { default as Toggle } from '../Toggle';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[2]}/ListItem`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const ListItem = () =>
  class ListItem extends lng.Component {
    static _template() {
      return {
        ListItem: {
          type: ListItemComponent
        }
      };
    }
  };

ListItem.storyName = 'ListItem';

ListItem.args = {
  title: 'List Item',
  shouldCollapse: false,
  description: 'Description',
  prefix: null,
  prefixLogo: 'none',
  suffix: null,
  suffixLogo: 'none',
  mode: 'focused'
};

ListItem.argTypes = {
  ...createModeControl({ summaryValue: ListItem.args.mode }),
  title: {
    control: 'text',
    description: 'Title text',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  description: {
    control: 'text',
    description: 'Description text',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  shouldCollapse: {
    control: 'boolean',
    description:
      'When in unfocused or disabled mode, if this flag is true the description will collapse (when focused, it will always be expanded)',
    table: {
      defaultValue: { summary: false }
    }
  },
  prefix: {
    control: 'radio',
    options: [null, 'toggle', 'radio', 'checkbox'],
    description: 'Lightning components to be placed to the left of the title',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  prefixLogo: {
    control: 'radio',
    options: ['none', 'xfinity'],
    description:
      'Logo to be placed to the left of the title. If prefix and prefixLogo are both set, prefixLogo will take precedence for what is rendered and prefix will be ignored',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  suffix: {
    control: 'radio',
    options: [null, 'toggle', 'radio', 'checkbox'],
    description: 'Lightning components to be placed to the right of the title',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  suffixLogo: {
    control: 'radio',
    options: ['none', 'xfinity'],
    description:
      'Logo to be placed to the right of the title. If suffix and suffixLogo are both set, suffixLogo will take precedence for what is rendered and suffix will be ignored',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  }
};

const logoSet = {
  none: null,
  xfinity: xfinity
};

const elementSet = {
  toggle: {
    type: Toggle,
    checked: true
  },
  radio: {
    type: Radio,
    checked: true
  },
  checkbox: {
    type: Checkbox,
    checked: true
  }
};

const sharedArgActions = {
  prefix: (prefix, component) => {
    if (prefix == null) {
      component.tag('ListItem').prefix = [];
    } else {
      component.tag('ListItem').prefix = elementSet[prefix];
    }
  },
  prefixLogo: (prefixLogo, component) => {
    component.tag('ListItem').prefixLogo = logoSet[prefixLogo];
  },
  suffixLogo: (suffixLogo, component) => {
    component.tag('ListItem').suffixLogo = logoSet[suffixLogo];
  },
  suffix: (suffix, component) => {
    if (suffix == null) {
      component.tag('ListItem').suffix = [];
    } else {
      component.tag('ListItem').suffix = elementSet[suffix];
    }
  }
};

ListItem.parameters = { argActions: sharedArgActions };
