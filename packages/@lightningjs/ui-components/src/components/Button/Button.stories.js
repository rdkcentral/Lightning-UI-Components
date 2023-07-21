﻿/**
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
import { default as ButtonComponent } from '.';
import Icon from '../Icon';
import Checkbox from '../Checkbox';
import mdx from './Button.mdx';
import lightning from '../../assets/images/ic_lightning_white_32.png';
import { createModeControl } from '../../docs/utils';
import { CATEGORIES } from '../../docs/constants';
import { controlDescriptions } from '../../docs/constants';

export default {
  title: `${CATEGORIES[8]}/Button`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

function getComponentArray(comps) {
  let arr = [];
  switch (comps) {
    case 'icon':
      arr = [{ type: Icon, icon: lightning }];
      break;
    case 'checkbox':
      arr = [{ type: Checkbox, checked: true }];
      break;
    case 'combo':
      arr = [
        { type: Icon, icon: lightning },
        { type: Checkbox, checked: true }
      ];
      break;
  }
  return arr;
}

export const Button = () =>
  class Button extends lng.Component {
    static _template() {
      return {
        Button: {
          type: ButtonComponent
        }
      };
    }
  };

Button.args = {
  title: 'Button',
  fixed: false,
  w: 200,
  justify: 'center',
  prefix: null,
  suffix: null,
  mode: 'focused'
};

const sharedArgTypes = {
  ...createModeControl({ summaryValue: Button.args.mode }),
  title: {
    control: 'text',
    description: 'Title text',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  fixed: {
    control: 'boolean',
    description: controlDescriptions.fixed,
    table: {
      defaultValue: { summary: false }
    }
  },
  w: {
    control: 'number',
    description:
      'When the fixed property is true, this will set the width of the component',
    table: {
      defaultValue: { summary: 0 }
    }
  },
  justify: {
    control: 'radio',
    options: ['left', 'center', 'right'],
    description: 'Justification of button content',
    table: {
      defaultValue: { summary: 'center' }
    }
  },
  prefix: {
    control: 'radio',
    options: [null, 'icon', 'checkbox', 'combo'],
    description: 'Lightning components to be placed to the left of the title',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  suffix: {
    control: 'radio',
    options: [null, 'icon', 'checkbox', 'combo'],
    description: 'Lightning components to be placed to the right of the title',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  }
};
const sharedArgActions = {
  prefix: (prefix, component) => {
    component.tag('Button').prefix = getComponentArray(prefix);
  },
  suffix: (suffix, component) => {
    component.tag('Button').suffix = getComponentArray(suffix);
  }
};

Button.argTypes = sharedArgTypes;
Button.parameters = { argActions: sharedArgActions };
