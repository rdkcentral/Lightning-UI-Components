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

import Toggle from '.';
import mdx from './Toggle.mdx';

export default {
  title: 'Elements / Toggle',
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
        flex: { direction: 'column' },
        text: { fontSize: 24, text: 'Press Enter' },
        Toggle: {
          y: 40,
          type: Toggle,
          checked: args.checked,
          onEnter: toggle => {
            args.onEnter('toggled');
            toggle.toggle();
            return true;
          }
        }
      };
    }

    _getFocused() {
      return this.tag('Toggle');
    }
  };
Basic.args = {
  checked: false
};
Basic.argTypes = {
  checked: { control: 'boolean' },
  onEnter: { action: 'onEnter' }
};
