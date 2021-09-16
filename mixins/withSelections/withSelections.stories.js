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
import { Button } from '../../elements';
import { FocusManager } from '../../layout';
import withSelections from '.';
import mdx from './withSelections.mdx';

export default {
  title: 'Mixins/withSelections',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = () => {
  class UnderlineButton extends Button {
    get isSelected() {
      return this._isSelected;
    }

    set isSelected(v) {
      this._whenEnabled.then(() => {
        if (v !== this._isSelected) {
          this._isSelected = v;
          if (v) {
            this.patch({
              Line: {
                rect: true,
                color: 0xffffffff,
                w: w => w,
                h: 4,
                y: 50
              }
            });
          } else {
            this.patch({
              Line: undefined
            });
          }
        }
      });
    }
  }

  return class Example extends lng.Component {
    static _template() {
      return {
        Title: {
          text: {}
        },
        Items: {
          type: withSelections(FocusManager),
          y: 100,
          direction: 'row',
          items: [
            {
              type: UnderlineButton,
              title: 'Left'
            },
            {
              type: UnderlineButton,
              title: 'Center',
              x: 150
            },
            {
              type: UnderlineButton,
              title: 'Right',
              x: 312
            }
          ]
        }
      };
    }
    _firstEnable() {
      this.tag('Title').text.text =
        'Selected: ' + this.tag('Items').currentSelected.title;
    }
    _getFocused() {
      return this.tag('Items');
    }
    $onSelect() {
      this.tag('Title').text.text =
        'Selected: ' + this.tag('Items').currentSelected.title;
    }
  };
};
