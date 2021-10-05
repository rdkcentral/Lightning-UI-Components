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

import Checkbox from '.';
import mdx from './Checkbox.mdx';

export default {
  title: 'Elements / Checkbox',
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
        Checkbox: {
          type: Checkbox,
          checked: args.checked
        }
      };
    }

    _getFocused() {
      return this.tag('Checkbox');
    }
  };
Basic.args = { checked: false };
Basic.argTypes = {
  checked: { control: 'boolean' }
};
Basic.parameters = {
  argActions: {
    checked: (_, component) => {
      component.tag('Checkbox').toggle();
    }
  }
};
