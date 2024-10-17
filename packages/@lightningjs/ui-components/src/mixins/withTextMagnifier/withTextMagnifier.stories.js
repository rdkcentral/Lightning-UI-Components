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
import withTextMagnifier from '.';
import Column from '../../components/Column/Column';
import Row from '../../components/Row/Row';
import Button from '../../components/Button/Button';

export default {
  title: 'Utilities/withTextMagnifier',
  component: withTextMagnifier
};

const rows = [
  {
    type: Row,
    w: 1920 - 160, // x offset from preview.js * 2,
    h: 100,
    itemSpacing: 30,
    items: [
      {
        type: Button,
        title: 'Button 1',
        announceContext: '1 of 3'
      },
      {
        type: Button,
        title: 'Button 2',
        announceContext: '2 of 3'
      },
      { type: Button, title: 'Button 3', announceContext: '3 of 3' }
    ]
  },
  {
    type: Row,
    w: 1920 - 160, // x offset from preview.js * 2,
    h: 100,
    itemSpacing: 30,
    items: [
      {
        type: Button,
        title: 'Button 1',
        announceContext: '1 of 3'
      },
      {
        type: Button,
        title: 'Button 2',
        announceContext: '2 of 3'
      },
      { type: Button, title: 'Button 3', announceContext: '3 of 3' }
    ]
  },
  {
    type: Row,
    w: 1920 - 160, // x offset from preview.js * 2,
    h: 100,
    itemSpacing: 30,
    items: [
      {
        type: Button,
        title: 'Button 1',
        announceContext: '1 of 3'
      },
      {
        type: Button,
        title: 'Button 2',
        announceContext: '2 of 3'
      },
      { type: Button, title: 'Button 3', announceContext: '3 of 3' }
    ]
  }
];

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Column: {
          type: Column,
          w: 1920 - 160, // x offset from preview.js * 2,
          h: 400,
          style: {
            itemSpacing: 20
          },
          items: rows
        }
      };
    }

    _init() {
      this.fireAncestors('$toggleTextMagnifier', true);
    }

    _detach() {
      this.fireAncestors('$toggleTextMagnifier', false);
    }
  };
