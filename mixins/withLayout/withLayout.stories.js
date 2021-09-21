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
import withLayout from '.';
import mdx from './withLayout.mdx';
import { Column } from '../../layout';
import { Button } from '../../elements';

export default {
  title: 'Mixins/withLayout',
  parameters: {
    docs: {
      page: mdx
    },
    stage: { w: 800, h: 600 }
  }
};

export const Basic = args => {
  return class Basic extends lng.Component {
    static _template() {
      return {
        Wrapper: {
          type: lng.Component,
          h: 600,
          w: 800,
          Column: {
            h: 600,
            type: Column,
            itemSpacing: 100,
            items: [
              {
                type: withLayout(Button),
                title: 'Button',
                w: 320,
                h: 180,
                itemLayout: {
                  w: args.w,
                  h: args.h
                }
              },
              {
                type: withLayout(Button),
                title: 'Button',
                w: 320,
                h: 180,
                itemLayout: {
                  h: args.h,
                  ratioX: args.ratioX,
                  ratioY: args.ratioY
                }
              },
              {
                type: withLayout(Button),
                title: 'Button',
                w: 320,
                h: 180,
                itemLayout: {
                  ratioX: args.ratioX,
                  ratioY: args.ratioY,
                  upCount: args.upCount
                }
              },
              {
                type: withLayout(Button),
                title: 'Button',
                w: 320,
                h: 180,
                itemLayout: {
                  h: args.h,
                  upCount: args.upCount
                }
              },
              {
                type: withLayout(Button),
                title: 'Button',
                w: 320,
                h: 180,
                itemLayout: {
                  h: args.h
                }
              },
              {
                type: withLayout(Button),
                title: 'Button',
                w: 320,
                h: 180,
                itemLayout: {
                  w: args.w
                }
              }
            ]
          }
        }
      };
    }

    _getFocused() {
      return this.tag('Wrapper.Column');
    }
  };
};

Basic.args = {
  w: 340,
  h: 180,
  ratioX: 16,
  ratioY: 9,
  upCount: 4
};

Basic.argTypes = {
  w: { control: 'number' },
  h: { control: 'number' },
  ratioX: { control: 'number' },
  ratioY: { control: 'number' },
  upCount: { control: 'number' }
};
