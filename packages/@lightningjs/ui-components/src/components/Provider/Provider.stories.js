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
import ProviderComponent from '.';
import { default as Icon } from '../Icon';
import mdx from './Provider.mdx';
import xfinityLogo from '../../assets/images/XfinityLogo16x9.png';
import { CATEGORIES } from '../../docs/constants';

export default {
  title: `${CATEGORIES[512]}/Provider`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const sharedArgs = {
  counterText: null,
  disableRadius: false
};
const sharedArgTypes = {
  visibleCount: {
    control: { type: 'range', min: 1, max: 10, step: 1 },
    description: 'number of visible providers',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  counterText: {
    control: 'select',
    options: [null, '...'],
    description: 'Text to display in counter (overrides default behavior)',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  disableRadius: {
    control: 'boolean',
    description: 'Disable applying radius to icons',
    table: {
      defaultValue: { summary: false }
    }
  }
};

export const Provider = () =>
  class Provider extends lng.Component {
    static _template() {
      return {
        Provider: {
          type: ProviderComponent,
          providers: Array(10).fill({
            icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
            announce: 'Tomato'
          }),
          visibleCount: 3
        }
      };
    }
  };

Provider.args = sharedArgs;
Provider.argTypes = sharedArgTypes;

export const WithCustomIconSize = () =>
  class WithCustomIconSize extends lng.Component {
    static _template() {
      return {
        Provider: {
          type: ProviderComponent,
          providers: [
            {
              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
              announce: 'tomato'
            },
            {
              type: Icon,
              w: 85,
              h: 48,
              // Xfinity icon is from the Xfinity Brand Press Materials from https://corporate.comcast.com/press/kit
              icon: xfinityLogo,
              announce: 'XFinity Logo Wide'
            },
            ...Array.apply(null, { length: 8 }).map(() => ({
              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
              announce: 'tomato'
            }))
          ],
          visibleCount: 3
        }
      };
    }
  };

WithCustomIconSize.args = sharedArgs;
WithCustomIconSize.argTypes = sharedArgTypes;
