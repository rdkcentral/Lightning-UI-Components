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
import Badge from '.';
import mdx from './Badge.mdx';
import lightning from '../../assets/images/ic_lightning_white_32.png';
import circle from '../../assets/images/circle.svg';
import { CATEGORIES } from '../../docs/constants';

export default {
  title: `${CATEGORIES[32]}/Badge`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Text = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Badge: {
          type: Badge,
          title: args.title
        }
      };
    }
  };
Text.args = {
  title: 'HD'
};
Text.argTypes = {
  title: {
    description: 'Badge text',
    control: 'text',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  }
};

export const IconSVG = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Badge: {
          type: Badge,
          icon: circle,
          iconWidth: 24,
          title: 'HD'
        }
      };
    }
  };
IconSVG.args = {
  iconAlign: 'left'
};

IconSVG.argTypes = {
  iconAlign: {
    control: 'select',
    options: ['left', 'right'],
    description: 'Side of the text the icon will appear on',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  }
};
export const IconPNG = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Badge: {
          type: Badge,
          icon: lightning
        }
      };
    }
  };

export const TextWithIcon = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Badge: {
          type: Badge,
          icon: lightning
        }
      };
    }
  };

TextWithIcon.args = {
  title: 'HD',
  iconAlign: 'left'
};

TextWithIcon.argTypes = {
  iconAlign: {
    control: 'select',
    options: ['left', 'right'],
    description: 'Side of the text the icon will appear on',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  title: {
    control: 'text',
    description: 'Badge text',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  }
};
