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
import { CATEGORIES } from '../../docs/constants';
import { createModeControl } from '../../docs/utils';
import { default as CardComponent } from './Card.js';
import mdx from './Card.mdx';

export default {
  title: `${CATEGORIES[128]}/Card`,
  tag: 'Card',

  parameters: {
    docs: {
      page: mdx
    }
  }
};
export const Card = args =>
  class Card extends lng.Component {
    static _template() {
      return {
        Card: {
          title: args.title,
          type: CardComponent
        }
      };
    }
  };

Card.args = {
  title: 'Title',
  mode: 'focused'
};

Card.argTypes = {
  ...createModeControl({ summaryValue: Card.args.mode }),
  title: {
    control: 'text',
    description: 'Title text',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  }
};
