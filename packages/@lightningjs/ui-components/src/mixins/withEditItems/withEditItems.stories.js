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

import { Button, TextBox, Row } from '../../components';
import mdx from './withEditItems.mdx';
import { default as withEditItemsMixin } from '.';
import { CATEGORIES } from '../../../docs/constants';
/**
 * Shared Args and Arg Types from Row
 */
import * as RowProps from '../../components/Row/Row.stories.js';
export default {
  title: `${CATEGORIES[512]}/withEditItems`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const withEditItems = () =>
  class withEditItems extends lng.Component {
    static _template() {
      return {
        RowComponent: {
          type: withEditItemsMixin(Row),
          y: 300,
          items: Array.apply(null, { length: 6 }).map((_, i) => ({
            type: Button,
            title: `Button ${i + 1}`,
            w: 150
          }))
        },
        TextBox: {
          type: TextBox,
          content:
            'Press enter to toggle edit mode. \nWhen in edit mode, use left/right arrows to move items \nPress enter again to exit edit mode'
        }
      };
    }

    _handleEnter() {
      this.tag('RowComponent').toggleEdit();
    }
  };
withEditItems.args = RowProps.Row.args;
withEditItems.argTypes = RowProps.Row.argTypes;

withEditItems.storyName = 'withEditItems';
