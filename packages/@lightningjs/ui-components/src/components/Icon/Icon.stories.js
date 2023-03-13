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
import Icon from '.';
import lightning from '../../assets/images/ic_lightning_white_32.png';
import mdx from './Icon.mdx';
import { CATEGORIES } from '../../docs/constants';

export default {
  title: `${CATEGORIES[4]}/Icon`,
  parameters: {
    docs: {
      page: mdx
    },
    argActions: {
      w: (w, component) => {
        component.tag('Icon').w = w;
        component._refocus();
      },
      h: (h, component) => {
        component.tag('Icon').h = h;
        component._refocus();
      }
    }
  }
};

const sharedArgs = {
  w: 50,
  h: 50
};

const sharedArgTypes = {
  w: {
    control: {
      type: 'range',
      min: 1,
      max: 96
    },
    description: 'Width of the icon',
    table: {
      defaultValue: { summary: 0 }
    }
  },
  h: {
    control: { type: 'range', min: 1, max: 96 },
    description: 'Height of the icon',
    table: {
      defaultValue: { summary: 0 }
    }
  }
};

export const PNG = () =>
  class PNG extends lng.Component {
    static _template() {
      return {
        Icon: {
          type: Icon,
          icon: lightning,
          announce: 'Lightning bolt'
        }
      };
    }
  };

PNG.args = sharedArgs;

PNG.argTypes = sharedArgTypes;

export const SVG = () =>
  class SVG extends lng.Component {
    static _template() {
      return {
        Icon: {
          type: Icon,
          icon: '<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></svg>',
          announce: 'Red circle'
        }
      };
    }
  };

SVG.args = sharedArgs;

SVG.argTypes = sharedArgTypes;
