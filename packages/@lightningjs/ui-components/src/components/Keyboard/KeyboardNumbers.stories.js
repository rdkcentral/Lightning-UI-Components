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
import mdx from './Keyboard.mdx';
import { CATEGORIES } from '../../docs/constants';
import { context } from '../../globals';
import utils from '../../utils';
import { default as KeyboardNumbersComponent } from './KeyboardNumbers';
import { Keyboard } from './Keyboard.stories';

export default {
  title: `${CATEGORIES[8]}/KeyboardNumbers`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const KeyboardNumbers = () =>
  class KeyboardNumbers extends lng.Component {
    static _template() {
      return {
        Keyboard: {
          type: KeyboardNumbersComponent,
          defaultFormat: 'dialpad'
        },
        w: utils.getWidthByUpCount(context.theme, 1)
      };
    }
  };

KeyboardNumbers.storyName = 'KeyboardNumbers';

KeyboardNumbers.args = {
  centerKeyboard: false,
  centerKeys: false,
  defaultFormat: 'dialpad',
  mode: 'focused'
};

KeyboardNumbers.argTypes = {
  ...Keyboard.sharedArgTypes,
  defaultFormat: {
    description: 'Select the format of dialpad',
    control: 'radio',
    options: ['dialpad', 'dialpadExtended'],
    table: {
      defaultValue: { summary: 'undefined' }
    }
  }
};

KeyboardNumbers.parameters = {
  argActions: {
    defaultFormat: (format, component) => {
      component.tag('Keyboard').$toggleKeyboard(format);
      component._refocus();
    }
  }
};
