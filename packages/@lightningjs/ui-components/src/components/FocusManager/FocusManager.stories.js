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
import FocusManager from '.';
import mdx from './FocusManager.mdx';
import { withSelections } from '../../mixins';
import { CATEGORIES } from 'lightning-ui-docs';
import Button from '../Button';

export default {
  title: `${CATEGORIES[64]}/FocusManager`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Rows = () =>
  class RowExample extends lng.Component {
    static _template() {
      return {
        Row: {
          type: withSelections(FocusManager),
          direction: 'row',
          items: [
            { type: ButtonFixedWidth, title: 'Left' },
            { type: ButtonFixedWidth, title: 'Center', x: 250 },
            { type: ButtonFixedWidth, title: 'Right', x: 500 }
          ]
        }
      };
    }
  };

export const WrapSelected = () =>
  class WrapSelectedExample extends lng.Component {
    static _template() {
      return {
        Row: {
          y: 50,
          type: FocusManager,
          direction: 'row',
          wrapSelected: true, // allows cycling through items
          items: [
            { type: ButtonFixedWidth, title: 'Left' },
            { type: ButtonFixedWidth, title: 'Center', x: 250 },
            { type: ButtonFixedWidth, title: 'Right', x: 500 }
          ]
        },
        Text: {
          y: 0,
          text: {
            fontSize: 20,
            text: 'Key in one direction a bunch of times'
          }
        }
      };
    }
  };

export const Columns = () =>
  class ColumnExample extends lng.Component {
    static _template() {
      return {
        Column: {
          type: FocusManager,
          direction: 'column',
          items: [
            { type: ButtonFixedWidth, title: 'Top' },
            { type: ButtonFixedWidth, title: 'Middle', y: 150 },
            { type: ButtonFixedWidth, title: 'Bottom', y: 300 }
          ]
        }
      };
    }
  };

export const ColumnWithRows = () =>
  class ColumnWithRowsExample extends lng.Component {
    static _template() {
      return {
        Column: Column({
          items: [Row(), Row({ y: 150 }), Row({ y: 300 })]
        })
      };
    }
  };

function Row({ y = 0 } = {}) {
  return {
    type: FocusManager,
    direction: 'row',
    y,
    items: [
      { type: ButtonFixedWidth, title: 'Left' },
      { type: ButtonFixedWidth, title: 'Center', x: 250 },
      { type: ButtonFixedWidth, title: 'Right', x: 500 }
    ]
  };
}

function Column({ items }) {
  return {
    type: FocusManager,
    direction: 'column',
    items
  };
}

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
