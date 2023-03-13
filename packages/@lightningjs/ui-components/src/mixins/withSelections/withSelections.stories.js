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
import { Button, Row } from '../../components';
import withSelectionsMixin from '.';
import mdx from './withSelections.mdx';
import { CATEGORIES } from '../../../docs/constants';

export default {
  title: `${CATEGORIES[512]}/withSelections`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const withSelections = () => {
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
                y: h => h + 20
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

  return class withSelections extends lng.Component {
    static _template() {
      return {
        Items: {
          type: withSelectionsMixin(Row),
          y: 100,
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
        },
        Title: {
          text: {}
        }
      };
    }

    _firstEnable() {
      this.tag('Title').text.text =
        'Selected: ' + this.tag('Items').currentSelected.title;
    }

    $onSelect() {
      this.tag('Title').text.text =
        'Selected: ' + this.tag('Items').currentSelected.title;
    }
  };
};

withSelections.storyName = 'withSelections';
