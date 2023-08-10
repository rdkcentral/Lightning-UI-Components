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
import FocusManager from '.';
import mdx from './FocusManager.mdx';
import { CATEGORIES } from '../../docs/constants';
import Button from '../Button';
import { useArgs } from '@storybook/client-api';

export default {
  title: `${CATEGORIES[8]}/FocusManager`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = () => {
  const [args, updateArgs, resetArgs] = useArgs();
  console.log(args,   )
  return class Basic extends lng.Component {
    static _template() {
      return {
        FocusManager: {
          type: FocusManager,
          direction: 'row',
          items: []
        },

        itemsCol: [
          { type: ButtonFixedWidth, title: 'Top'},
          { type: ButtonFixedWidth, title: 'Center', y: 250 },
          { type: ButtonFixedWidth, title: 'Bottom', y: 500 }
        ],

        itemsRow: [
          { type: ButtonFixedWidth, title: 'Left', x: 0, y: 250},
          { type: ButtonFixedWidth, title: 'Center', x: 250, y: 250 },
          { type: ButtonFixedWidth, title: 'Right', x: 500, y: 250 }
        ]

       

      };
    }

  }
};


class ButtonFixedWidth extends Button {
  static get __componentName() {
    return 'ButtonSmall';
  }

  _init() {
    this.fixed = true;
    this.w = 200;
    super._init();
  }
}

Basic.args = {
  direction: 'row',
  wrapSelected: false
};

Basic.argTypes = {
  direction: {
    control: 'radio',
    options: ['row', 'column'],
    description: 'The navigation direction for focus (left/right or up/down)',
    table: {
      defaultValue: { summary: 'row' }
    }
  },
  wrapSelected: {
    control: 'boolean',
    description:
      'When set to true, the focus will loop back to the beginning of the list after reaching the last item, and vice versa. This enables continuous navigation through the list without dead ends. If wrapSelected is set to false (the default value), the focus will stop at the first or last item, depending on the navigation direction',
    table: {
      defaultValue: { summary: false }
    }
  }
};

Basic.parameters = { argActions: {
  
  direction: (direction, component) => {

    component.tag('FocusManager').items = direction === "row"
    ?component.itemsRow
    :component.itemsCol

    component.tag('FocusManager').direction = direction

 }
} 
};
