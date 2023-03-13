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
import { default as CardSectionComponent } from './CardSection.js';
import sectionIcon from '../../assets/images/ic_check_circle_outline_inverse_24.png';
import mdx from './CardSection.mdx';
import { createModeControl } from '../../../docs/utils';
import { CATEGORIES } from '../../../docs/constants';

export default {
  title: `${CATEGORIES[128]}/CardSection`,
  tag: 'Card',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const CardSection = () =>
  class CardSection extends lng.Component {
    static _template() {
      return {
        Card: {
          type: CardSectionComponent,
          iconHeight: 33,
          iconWidth: 33,
          w: 386
        }
      };
    }
  };

CardSection.args = {
  iconSrc: sectionIcon,
  title: 'Section',
  mode: 'focused'
};

CardSection.argTypes = {
  ...createModeControl({ summaryValue: CardSection.args.mode }),
  iconSrc: {
    control: 'select',
    options: [sectionIcon, 'null'],
    description: 'Icon source',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  title: {
    control: 'text',
    description: 'Title text',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  }
};

CardSection.storyName = 'CardSection';
