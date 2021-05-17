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

import lng from '@lightningjs/core';

import CarouselRow from '.';
import Button from '../Button';
import mdx from './CarouselRow.mdx';

export default {
  title: 'CarouselRow',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        CarouselRow: {
          type: CarouselRow,
          itemSpacing: 100,
          items: Array(10)
            .fill({
              type: Button,
              title: 'Button',
              w: 150
            })
            .map((btn, i) => ({ ...btn, title: btn.title + i })),
          selectedIndex: args.selectedIndex
        }
      };
    }

    _getFocused() {
      return this.tag('CarouselRow');
    }
  };
Basic.args = {
  selectedIndex: 0
};
Basic.argTypes = {
  selectedIndex: {
    control: { type: 'number', min: 0, step: 1, max: 9 }
  }
};
Basic.parameters = {
  argActions: {}
};
