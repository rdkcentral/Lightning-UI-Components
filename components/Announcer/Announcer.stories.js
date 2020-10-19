/**
 * Copyright 2020 Comcast Cable Communications Management, LLC
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

import lng from 'wpe-lightning';
import Announcer from '.';
import Column from '../Column';
import Row from '../Row';
import Button from '../Button';
import mdx from './Announcer.mdx';

export default {
  title: 'Announcer',
  component: Announcer,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const rows = [
  {
    type: Row,
    w: 900,
    h: 100,
    itemSpacing: 30,
    items: [
      { type: Button, title: 'Button 1', announceContext: '1 of 3' },
      { type: Button, title: 'Button 2', announceContext: '2 of 3' },
      { type: Button, title: 'Button 3', announceContext: '3 of 3' }
    ]
  },
  {
    type: Row,
    w: 900,
    h: 100,
    itemSpacing: 30,
    items: [
      { type: Button, title: 'Button 1', announceContext: '1 of 3' },
      { type: Button, title: 'Button 2', announceContext: '2 of 3' },
      { type: Button, title: 'Button 3', announceContext: '3 of 3' }
    ]
  },
  {
    type: Row,
    w: 900,
    h: 100,
    itemSpacing: 30,
    items: [
      { type: Button, title: 'Button 1', announceContext: '1 of 3' },
      { type: Button, title: 'Button 2', announceContext: '2 of 3' },
      { type: Button, title: 'Button 3', announceContext: '3 of 3' }
    ]
  }
];

export const Basic = () =>
  class Basic extends Announcer(lng.Component) {
    static _template() {
      return {
        debug: true,
        announcerEnabled: true,
        announcerTimeout: 15 * 1000,
        Column: {
          type: Column,
          w: 900,
          h: 400,
          itemSpacing: 20,
          items: rows
        }
      };
    }

    get announceContext() {
      return [
        'PAUSE-2.2',
        `Press LEFT or RIGHT to review items,
              press UP or DOWN to review categories,
              press CENTER to select`
      ];
    }

    _getFocused() {
      return this.tag('Column');
    }
  };
