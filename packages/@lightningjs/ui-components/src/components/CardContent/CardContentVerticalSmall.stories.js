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
import mdx from './CardContent.mdx';
import { MetadataCardContent as MetadataStory } from '../MetadataCardContent/MetadataCardContent.stories';
import { createModeControl, generateSubStory } from '../../../docs/utils';
import CardContentVerticalSmallComponent from './CardContentVerticalSmall';
import { CardContent } from './CardContent.stories';
import { CATEGORIES } from '../../../docs/constants';
import { controlDescriptions } from '../../../docs/constants';

export default {
  title: `${CATEGORIES[128]}/CardContentVerticalSmall`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const CardContentVerticalSmall = args =>
  class CardContentVerticalSmall extends lng.Component {
    static _template() {
      return {
        CardContentVerticalSmall: {
          type: CardContentVerticalSmallComponent,
          src: tileImage,
          shouldCollapse: args.shouldCollapse
        }
      };
    }
  };

CardContentVerticalSmall.storyName = 'CardContentVerticalSmall';

CardContentVerticalSmall.args = {
  mode: 'focused',
  ...CardContent.args
};
CardContentVerticalSmall.argTypes = {
  ...createModeControl({ summaryValue: CardContentVerticalSmall.args.mode }),
  shouldCollapse: {
    control: 'boolean',
    description: controlDescriptions.shouldCollapse,
    table: {
      defaultValue: { summary: false }
    }
  },
  ...CardContent.argTypes
};
CardContentVerticalSmall.parameters = {
  argActions: CardContent.tileProps.argActions('CardContentVerticalSmall')
};

generateSubStory({
  componentName: 'CardContentVerticalSmall',
  baseStory: CardContentVerticalSmall,
  subStory: MetadataStory,
  targetProperty: 'metadata',
  include: ['title', 'description']
});
