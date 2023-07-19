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
import { default as CardTitleComponent } from './CardTitle.js';
import { createModeControl } from '../../docs/utils';

export default {
  title: 'Tiles & Cards/CardTitle',
  tag: 'Card'
};
export const CardTitle = () =>
  class CardTitle extends lng.Component {
    static _template() {
      return {
        Card: {
          type: CardTitleComponent
        }
      };
    }
  };

CardTitle.args = {
  title: 'Title',
  description: 'Description',
  details: 'Details',
  mode: 'focused'
};

CardTitle.argTypes = {
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
  details: {
    control: 'text',
    description: 'Details text',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  }
};

CardTitle.storyName = 'CardTitle';
