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
import { default as TextMagnifierComponent } from '.';
import { context } from '@lightningjs/ui-components/src';

export default {
  title: 'Components/TextMagnifier'
};

export const TextMagnifier = () =>
  class TextMagnifier extends lng.Component {
    static _template() {
      return {
        TextMagnifier: {
          type: TextMagnifierComponent,
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet fermentum massa, nec scelerisque magna sodales viverra. Fusce mauris neque, aliquam vitae hendrerit vitae, tempor eu nunc. Vestibulum ligula tellus, feugiat facilisis diam non, scelerisque eleifend justo. Sed fermentum dui velit, eu imperdiet enim pretium vitae. Sed molestie, ex nec lacinia ornare, turpis urna egestas justo, sit amet blandit sapien turpis egestas dui. Sed vel pharetra elit. Quisque auctor risus a elit posuere fermentum. Integer interdum enim vitae arcu faucibus vulputate. Pellentesque sed dolor quis erat venenatis scelerisque in faucibus lectus. Mauris ac semper ante, at lobortis nunc.'
        }
      };
    }

    _init() {
      this.parent.x = -context.theme.layout.marginX;
      this.parent.y = -context.theme.layout.marginY;

      super._init();
    }
  };
