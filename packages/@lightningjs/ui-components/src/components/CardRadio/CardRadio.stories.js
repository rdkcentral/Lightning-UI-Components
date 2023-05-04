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
import { default as CardRadioComponent } from './CardRadio.js';
import mdx from './CardRadio.mdx';
import sectionIcon from '../../assets/images/ic_check_circle_outline_inverse_24.png';
import { createModeControl } from '../../docs/utils';
import { CATEGORIES } from '../../docs/constants';

export default {
  title: `${CATEGORIES[128]}/CardRadio`,
  tag: 'Card',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const description =
  "Get Hulu and stream the TV you love, anytime, on your favorite devices. We're talking new TV, classic TV, laugh-your-face-off TV, cry-your-eyes-out TV, and every other kind of TV.  Plus, get Hulu Originals –- shows you can't watch anywhere else -- and movies, docs, kids shows, and more. It's all on Hulu, and it's all waiting for you";

const Details =
  'This is a sample disclaimer. This is a sample disclaimer. This is a sample disclaimer. This is a sample disclaimer. This is a sample disclaimer. This is a sample disclaimer';

export const CardRadio = () =>
  class CardRadio extends lng.Component {
    static _template() {
      return {
        Card: {
          type: CardRadioComponent,
          h: 386
        }
      };
    }
  };

CardRadio.args = {
  title: 'Hulu (ad-supported)',
  description: description,
  details: Details,
  subtitle: '$6.99 per month plus taxes & fees',
  logo: sectionIcon,
  mode: 'focused'
};

CardRadio.argTypes = {
  ...createModeControl({ summaryValue: 'focused' }),
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
  logo: {
    control: 'select',
    options: [sectionIcon, 'null'],
    description: 'Icon source',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  subtitle: {
    control: 'text',
    description: 'subtitle text',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  details: {
    control: 'text',
    description: 'Details text',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  }
};

CardRadio.storyName = 'CardRadio';
