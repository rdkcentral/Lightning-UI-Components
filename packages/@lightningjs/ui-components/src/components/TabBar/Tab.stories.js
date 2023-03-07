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
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import lngIcon from '../../assets/images/ic_lightning_white_32.png';
import { default as TabComponent } from './Tab';
import mdx from './Tab.mdx';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[16]}/Tab`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Tab = () =>
  class Tab extends lng.Component {
    static _template() {
      return {
        Tab: {
          type: TabComponent
        }
      };
    }
  };

Tab.args = {
  icon: null,
  title: 'Tab',
  mode: 'focused'
};

Tab.argTypes = {
  ...createModeControl({
    options: ['focused', 'selected', 'disabled'],
    summaryValue: Tab.args.mode
  }),
  icon: {
    control: 'radio',
    options: [null, 'icon'],
    description: 'Lightning components to be placed to the left of the text',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  title: {
    control: 'text',
    description: 'Text content of tab',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  }
};
Tab.parameters = {
  argActions: {
    icon: (icon, component) => {
      component.tag('Tab').icon = icon ? lngIcon : undefined;
    }
  }
};
