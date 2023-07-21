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
import tileImage from '../../assets/images/tile-image.png';
import mdx from './CardContent.mdx';
import { MetadataCardContent as MetadataStory } from '../MetadataCardContent/MetadataCardContent.stories';
import { createModeControl, generateSubStory } from '../../docs/utils';
import { default as CardContentHorizontalLargeComponent } from './CardContentHorizontalLarge';
import { default as Icon } from '../Icon';
import xfinityLogo from '../../assets/images/Xfinity-Provider-Logo-2x1.png';
import { CardContent } from './CardContent.stories';
import { CATEGORIES } from '../../docs/constants';
import { controlDescriptions } from '../../docs/constants';

export default {
  title: `${CATEGORIES[8]}/CardContentHorizontalLarge`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const CardContentHorizontalLarge = args =>
  class CardContentHorizontalLarge extends lng.Component {
    static _template() {
      return {
        CardContentHorizontalLarge: {
          type: CardContentHorizontalLargeComponent,
          src: tileImage,
          shouldCollapse: args.shouldCollapse,
          collapseToMetadata: args.collapseToMetadata,
          metadata: {
            provider: {
              providers: [
                {
                  type: Icon,
                  w: 96,
                  h: 48,
                  icon: xfinityLogo
                }
              ],
              visibleCount: 3
            }
          }
        }
      };
    }
  };
CardContentHorizontalLarge.args = {
  collapseToMetadata: false,
  mode: 'focused',
  ...CardContent.args
};
CardContentHorizontalLarge.argTypes = {
  ...createModeControl({ summaryValue: CardContentHorizontalLarge.args.mode }),
  collapseToMetadata: {
    control: 'boolean',
    description: controlDescriptions.collapseToMetadata,
    table: {
      defaultValue: { summary: false }
    }
  },
  ...CardContent.argTypes
};
CardContentHorizontalLarge.parameters = {
  argActions: CardContent.tileProps.argActions('CardContentHorizontalLarge')
};

generateSubStory({
  componentName: 'CardContentHorizontalLarge',
  baseStory: CardContentHorizontalLarge,
  subStory: MetadataStory,
  targetProperty: 'metadata',
  include: ['title', 'description', 'details']
});

CardContentHorizontalLarge.storyName = 'CardContentHorizontalLarge';
