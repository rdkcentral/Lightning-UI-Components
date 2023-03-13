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
import NavigationManager from '.';
import mdx from './NavigationManager.mdx';
import { CATEGORIES } from '../../../docs/constants';
import Button from '../Button';

class ButtonFixedWidth extends Button {
  static get __componentName() {
    return 'ButtonSmall';
  }

  _init() {
    this.fixed = true;
    this.w = 200;
    super._init();
  }
}

function createRow(props = {}) {
  return {
    type: NavigationManager,
    direction: 'row',
    items: [
      { type: ButtonFixedWidth, title: 'Left' },
      { type: ButtonFixedWidth, title: 'Center', x: 250 },
      { type: ButtonFixedWidth, title: 'Right', x: 500 }
    ],
    ...props
  };
}

export default {
  title: `${CATEGORIES[64]}/NavigationManager`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Row = () =>
  class RowExample extends lng.Component {
    static _template() {
      return {
        Row: createRow()
      };
    }
  };

export const Column = () =>
  class RowExample extends lng.Component {
    static _template() {
      return {
        Row: {
          type: NavigationManager,
          direction: 'column',
          items: [
            { type: ButtonFixedWidth, title: 'Top' },
            { type: ButtonFixedWidth, title: 'Center' },
            { type: ButtonFixedWidth, title: 'Bottom' }
          ]
        }
      };
    }
  };

export const ColumnOfRows = () =>
  class RowExample extends lng.Component {
    static _template() {
      return {
        Row: {
          type: NavigationManager,
          direction: 'column',
          plinko: true,
          items: [
            createRow({ autoResizeHeight: true }),
            createRow({ autoResizeHeight: true }),
            createRow({ autoResizeHeight: true })
          ]
        }
      };
    }
  };
