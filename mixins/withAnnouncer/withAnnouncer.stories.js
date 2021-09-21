/**
 * Copyright 2021 Comcast Cable Communications Management, LLC
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

import withAnnouncer from '.';
import { Row } from '../../layout';
import { Button } from '../../elements';
import mdx from './withAnnouncer.mdx';

export default {
  title: 'Mixins / withAnnouncer',
  component: withAnnouncer,
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
        debug: true,
        announcerEnabled: true,
        announcerTimeout: 15 * 1000,
        Content: {
          type: Row,
          w: 900,
          h: 100,
          itemSpacing: 30,
          items: [
            { type: Button, title: 'Button A', announceContext: '1 of 3' },
            { type: Button, title: 'Button B', announceContext: '2 of 3' },
            { type: Button, title: 'Button C', announceContext: '3 of 3' }
          ]
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
      return this.tag('Content');
    }
  };
