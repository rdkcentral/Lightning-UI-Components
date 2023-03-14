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
import { Row as RowBasic } from '../Row/Row.stories.js';
import Tile from '../Tile';
import mdx from './TitleRow.mdx';
import { default as TitleRowComponent } from '.';
import { CATEGORIES } from '../../docs/constants';

export default {
  title: `${CATEGORIES[64]}/TitleRow`,
  parameters: {
    docs: {
      page: mdx
    }
  },
  args: {
    title: 'Row Title',
    ...RowBasic.args
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'title text to be displayed above the row',
      table: {
        defaultValue: { summary: 'undefined' }
      }
    },
    ...RowBasic.argTypes
  }
};

const createItems = length => {
  return Array.from({ length }).map((_, index) => ({
    type: Tile,
    itemLayout: {
      ratioX: 16,
      ratioY: 9,
      upCount: 4
    },
    announce: 'Tile',
    announceContext: `${index + 1} of ${length}`
  }));
};

export const TitleRow = () =>
  class TitleRow extends lng.Component {
    static _template() {
      return {
        TitleRow: {
          type: TitleRowComponent,
          items: createItems(12)
        }
      };
    }

    _getFocused() {
      return this.tag('TitleRow');
    }
  };

TitleRow.storyName = 'TitleRow';
