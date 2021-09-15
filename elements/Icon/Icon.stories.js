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

import Icon from '.';
import circle from '../../assets/images/circle.svg';
import lightning from '../../assets/images/ic_lightning_white_32.png';
import mdx from './Icon.mdx';

export default {
  title: 'Elements / Icon',
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
        Icon: {
          type: Icon,
          w: 50,
          h: 50,
          icon: circle
        }
      };
    }

    _getFocused() {
      return this.tag('Icon');
    }
  };

export const InlineSvg = () =>
  class InlineSvg extends lng.Component {
    static _template() {
      return {
        Icon: {
          type: Icon,
          w: 50,
          h: 50,
          icon:
            '<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></svg>'
        }
      };
    }

    _getFocused() {
      return this.tag('Icon');
    }
  };

export const PNG = () =>
  class PNG extends lng.Component {
    static _template() {
      return {
        Icon: {
          type: Icon,
          w: 32,
          h: 32,
          icon: lightning
        }
      };
    }

    _getFocused() {
      return this.tag('Icon');
    }
  };
