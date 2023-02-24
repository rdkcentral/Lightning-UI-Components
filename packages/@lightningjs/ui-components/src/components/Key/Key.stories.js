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
import KeyComponent from './index.js';
import lightning from '../../assets/images/ic_lightning_white_32.png';
import mdx from './Key.mdx';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[8]}/Key`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Key: {
          type: KeyComponent
        }
      };
    }
  };

Basic.parameters = {};
Basic.args = {
  title: 'A',
  size: 'sm',
  mode: 'focused'
};

Basic.argTypes = {
  ...createModeControl({ summaryValue: 'focused' }),
  size: {
    control: 'select',
    options: ['sm', 'md', 'lg', 'xl'],
    description: 'Width of the Key',
    table: {
      defaultValue: { summary: 'sm' }
    }
  },
  title: {
    control: 'text',
    description: 'Key character',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  }
};

export const KeyIcon = () =>
  class KeyIcon extends lng.Component {
    static _template() {
      return {
        Key: {
          type: KeyComponent,
          icon: lightning
        }
      };
    }
  };
KeyIcon.args = {
  size: 'sm',
  mode: 'focused'
};

KeyIcon.argTypes = {
  ...createModeControl({ summaryValue: 'focused' }),
  size: {
    control: 'select',
    options: ['sm', 'md', 'lg', 'xl'],
    description: 'Width of the Key',
    table: {
      defaultValue: { summary: 'sm' }
    }
  }
};

KeyIcon.parameters = {};
