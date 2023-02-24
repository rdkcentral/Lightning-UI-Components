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
import lightningbolt from '../../assets/images/ic_lightning_white_32.png';
import circle from '../../assets/images/circle.svg';
import { getHexColor } from '../../utils/index.js';
import { createModeControl } from 'lightning-ui-docs/.storybook/utils';
import { default as MetadataBaseComponent } from '.';
import mdx from './MetadataBase.mdx';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[32]}/MetadataBase`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const MetadataBase = () =>
  class MetadataBase extends lng.Component {
    static _template() {
      return {
        MetadataBase: {
          type: MetadataBaseComponent
        }
      };
    }
  };

MetadataBase.storyName = 'MetadataBase';

MetadataBase.args = {
  w: 400,
  title: 'Title',
  subtitle: [
    '94%',
    {
      icon: lightningbolt,
      style: { color: getHexColor('00ff00') },
      title: 'Green Lightning Bolt'
    },
    '86%',
    {
      icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
      title: 'Rotten Tomatoes rating'
    }
  ],
  description: 'Description',
  logo: circle,
  logoTitle: 'Logo title',
  logoPosition: 'right',
  mode: 'unfocused'
};

MetadataBase.argTypes = {
  ...createModeControl({ summaryValue: MetadataBase.args.mode }),
  w: {
    control: 'number',
    description: 'width of component',
    table: {
      defaultValue: { summary: 0 }
    }
  },
  title: {
    control: 'text',
    description: 'Title text',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  subtitle: {
    control: 'object',
    description: 'subtitle content',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  description: {
    control: 'text',
    description: 'description text',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  logo: {
    control: 'select',
    options: ['none', circle],
    description: 'Image to use for logo',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  logoTitle: {
    control: 'text',
    description: 'Title to use for logo in announcer',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  logoPosition: {
    control: 'select',
    options: ['right', 'left'],
    description: 'Position logo on the left/right side',
    table: {
      defaultValue: { summary: 'right' }
    }
  }
};
