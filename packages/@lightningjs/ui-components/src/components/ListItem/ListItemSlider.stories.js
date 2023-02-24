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
import { default as ListItemSliderComponent } from './ListItemSlider';
import mdx from './ListItemSlider.mdx';
import {
  createModeControl,
  generateSubStory
} from 'lightning-ui-docs/.storybook/utils';
import { Basic as SliderStory } from '../Slider/Slider.stories';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[2]}/ListItemSlider`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const ListItemSlider = () =>
  class ListItemSlider extends lng.Component {
    static _template() {
      return {
        ListItemSlider: {
          type: ListItemSliderComponent
        }
      };
    }
  };

ListItemSlider.storyName = 'ListItemSlider';

ListItemSlider.args = {
  title: 'List Item',
  value: 50,
  shouldCollapse: false,
  mode: 'focused'
};

ListItemSlider.argTypes = {
  ...createModeControl({ summaryValue: ListItemSlider.args.mode }),
  title: {
    control: 'text',
    description: 'Title text',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  value: {
    control: 'number',
    description: 'Current slider value',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  shouldCollapse: {
    control: 'boolean',
    description:
      'When in unfocused or disabled mode, if shouldCollapse property is true it will collapse the slider (when focused, it will always be expanded)',
    table: {
      defaultValue: { summary: false }
    }
  }
};

ListItemSlider.argActions = {
  shouldCollapse: (shouldCollapse, component) => {
    component.tag('ListItemSlider').shouldCollapse = shouldCollapse;
  }
};

generateSubStory({
  componentName: 'ListItemSlider',
  baseStory: ListItemSlider,
  subStory: SliderStory,
  targetProperty: 'slider',
  include: ['min', 'max', 'step']
});
