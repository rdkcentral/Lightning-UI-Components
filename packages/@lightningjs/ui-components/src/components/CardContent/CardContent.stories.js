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
import tileImage from '../../assets/images/tile-image.png';
import CardContentComponent from '.';
import mdx from './CardContent.mdx';
import { MetadataCardContent as MetadataStory } from '../MetadataCardContent/MetadataCardContent.stories';
import {
  createModeControl,
  generateSubStory
} from 'lightning-ui-docs/.storybook/utils';
import { CATEGORIES } from 'lightning-ui-docs';
import { controlDescriptions } from '../../../../../apps/lightning-ui-docs/.storybook/utils/constants';

export default {
  title: `${CATEGORIES[128]}/CardContent`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const CardContent = args =>
  class CardContent extends lng.Component {
    static _template() {
      return {
        CardContent: {
          type: CardContentComponent,
          src: tileImage,
          shouldCollapse: args.shouldCollapse,
          orientation: 'horizontal'
        }
      };
    }
  };

const tileCategory = 'Tile';
CardContent.tileProps = {
  argActions: tagName => ({
    badge: (badgeTitle, component) => {
      component.tag(tagName).tile = {
        ...component.tag(tagName).tile,
        badge: { title: badgeTitle }
      };
    },
    label: (labelTitle, component) => {
      component.tag(tagName).tile = {
        ...component.tag(tagName).tile,
        label: {
          title: labelTitle,
          table: { defaultValue: { summary: 'undefined' } }
        }
      };
    },
    progress: (progress, component) => {
      component.tag(tagName).tile = {
        ...component.tag(tagName).tile,
        progressBar: { progress }
      };
    }
  })
};
CardContent.storyName = 'CardContent';

CardContent.args = {
  shouldCollapse: false,
  badge: 'HD',
  label: 'Live',
  progress: 0.5,
  mode: 'focused'
};

CardContent.argTypes = {
  ...createModeControl({ summaryValue: CardContent.args.mode }),
  shouldCollapse: {
    control: 'boolean',
    description: controlDescriptions.shouldCollapse,
    table: {
      defaultValue: { summary: false }
    }
  },
  badge: {
    name: 'title',
    control: 'text',
    description: 'Badge text',
    table: {
      category: tileCategory,
      subcategory: 'Badge',
      defaultValue: { summary: 'undefined' }
    }
  },
  label: {
    name: 'title',
    control: 'text',
    description: 'Text to display in the foreground of the label',
    table: {
      category: tileCategory,
      subcategory: 'Label',
      defaultValue: { summary: 'undefined' }
    }
  },
  progress: {
    control: {
      type: 'range',
      min: 0,
      max: 1,
      step: 0.01
    },
    description: 'percentage of the current progress from 0 to 1',
    table: {
      category: tileCategory,
      subcategory: 'ProgressBar',
      defaultValue: { summary: 0 }
    }
  }
};

CardContent.parameters = {
  argActions: CardContent.tileProps.argActions('CardContent')
};
generateSubStory({
  componentName: 'CardContent',
  baseStory: CardContent,
  subStory: MetadataStory,
  targetProperty: 'metadata',
  include: ['title', 'description', 'details', 'visible']
});
