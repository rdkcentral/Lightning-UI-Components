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
import mdx from './withLayout.mdx';
import { Tile } from '../../components';
import { CATEGORIES } from '../../docs/constants';

export default {
  title: `${CATEGORIES[512]}/withLayout`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const withLayout = () => {
  return class withLayout extends lng.Component {
    static _template() {
      return {
        Item: {
          type: Tile,
          artwork: {
            src: 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg',
            mode: 'contain'
          }
        }
      };
    }
  };
};

withLayout.storyName = 'withLayout';

withLayout.args = {
  ratioX: 16,
  ratioY: 9,
  upCount: 3,
  circle: false
};

withLayout.argTypes = {
  ratioX: {
    control: { type: 'number', min: 0 },
    description: 'The units of x resolution relative to the screen height',
    table: { defaultValue: { summary: 0 } }
  },
  ratioY: {
    control: { type: 'number', min: 0 },
    description: 'The units of y resolution relative to the screen width',
    table: { defaultValue: { summary: 0 } }
  },
  upCount: {
    control: { type: 'number', min: 0 },
    description:
      'The number of items that should be displayed within screen bounds',
    table: { defaultValue: { summary: 0 } }
  },
  circle: {
    control: 'boolean',
    description: 'Boolean changing format to circle if true',
    table: { defaultValue: { summary: false } }
  }
};

withLayout.parameters = {
  argActions: Object.keys(withLayout.args).reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: (val, component) => {
        component.tag('Item').itemLayout = {
          ...component.tag('Item').itemLayout,
          [curr]: val
        };
      }
    };
  }, {})
};
