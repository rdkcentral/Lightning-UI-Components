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
import { default as ShadowComponent } from '.';
import mdx from './Shadow.mdx';
import { createModeControl } from '../../../docs/utils';
import { CATEGORIES } from '../../../docs/constants';

export default {
  title: `${CATEGORIES[4]}/Shadow`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Shadow = () =>
  class Shadow extends lng.Component {
    static _template() {
      return {
        Shadow: {
          type: ShadowComponent,
          w: 200,
          h: 200
        }
      };
    }
  };
Shadow.args = {
  maskShadow: false,
  mode: 'focused'
};
Shadow.argTypes = {
  ...createModeControl({ summaryValue: 'focused' }),
  maskShadow: {
    control: 'boolean',
    description:
      'Enables a holepunch shader to mask out the component shape. Useful for transparent button states that should not show the shadow behind the element. However, requires an additional draw call for rtt.',
    table: {
      defaultValue: { summary: false }
    }
  }
};
