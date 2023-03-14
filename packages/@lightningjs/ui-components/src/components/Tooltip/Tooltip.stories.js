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
import Button from '../Button';
import { createModeControl } from '../../docs/utils';
import mdx from './Tooltip.mdx';
import { default as TooltipComponent } from '.';
import { CATEGORIES } from '../../docs/constants';

export default {
  title: `${CATEGORIES[512]}/Tooltip`,
  args: {
    title: 'Tooltip',
    delayVisible: 0,
    timeVisible: 0,
    mode: 'focused'
  },
  argTypes: {
    ...createModeControl({ options: ['focused'], summaryValue: 'focused' }),
    title: {
      control: 'text',
      description: 'Text content of tooltip',
      table: { defaultValue: { summary: 'undefined' } }
    },
    delayVisible: {
      control: 'number',
      description:
        'Start with unfocused mode and set the delay value in milliseconds, now change the mode to focused to see the required changes',
      table: { defaultValue: { summary: 'undefined' } }
    },
    timeVisible: {
      control: 'number',
      description:
        'Start with unfocused mode and set the time value in milliseconds, now change the mode to focused to see the required changes',
      table: { defaultValue: { summary: 'undefined' } }
    }
  },
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const sharedArgActions = {
  argActions: {
    delayVisible: (delayVisible, component) => {
      component.tag('Tooltip').delayVisible = delayVisible;
    },
    timeVisible: (timeVisible, component) => {
      component.tag('Tooltip').timeVisible = timeVisible;
    }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Tooltip: {
          type: TooltipComponent,
          x: 1280 / 2,
          delayVisible: args.delayVisible,
          timeVisible: args.timeVisible
        }
      };
    }
  };

Basic.parameters = { ...sharedArgActions };

export const LongTitle = Basic.bind({});
LongTitle.args = {
  title:
    'This is a long message. Text will remain on a single line and does not have a maximum width'
};

LongTitle.parameters = { ...sharedArgActions };

export const WithButton = args =>
  class WithButton extends lng.Component {
    static _template() {
      return {
        Button: {
          type: class extends Button {
            _getFocused() {
              return this.childList.getByRef('Tooltip');
            }
          },
          x: 200,
          y: 100,
          title: 'Button',
          backgroundType: 'stroke',
          Tooltip: {
            type: TooltipComponent,
            title: args.title,
            delayVisible: args.delayVisible,
            timeVisible: args.timeVisible
          }
        }
      };
    }
  };

WithButton.args = {};

WithButton.parameters = {
  argActions: {
    title: (title, component) => {
      component.tag('Button.Tooltip').title = title;
    },
    delayVisible: (delayVisible, component) => {
      component.tag('Button.Tooltip').delayVisible = delayVisible;
    },
    timeVisible: (timeVisible, component) => {
      component.tag('Button.Tooltip').timeVisible = timeVisible;
    }
  }
};
