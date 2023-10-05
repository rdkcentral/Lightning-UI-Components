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
import remarkGfm from 'remark-gfm'; // needed for Tables, Links, etc in MDX
const path = require('path');

const config = {
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        outline: false, // disable outline addon
        measure: false, // disable measure addon
        viewport: false // disable viewport addon
      }
    },
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm] //  needed for MDX to use Github Flavored Markdown
          }
        }
      }
    },
    '@storybook/addon-designs',
    '@storybook/addon-storysource'
  ],
  stories: [
    '../src/*.mdx',
    '../../../@lightningjs/ui-components/src/**/*.mdx',
    '../../../@lightningjs/ui-components/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../@lightningjs/ui-components-test-utils/src/docs/*.mdx',
    '../../../@lightningjs/ui-components-test-utils/src/docs/**/*.mdx'
  ],
  staticDirs: ['../../../@lightningjs/ui-components/src/assets'],
  // TODO: How to handle images between projects
  // could use something like '../public' or '../static' in the root
  core: {
    disableTelemetry: true
  },
  framework: {
    name: '@storybook/html-webpack5',
    options: {}
  },
  docs: {
    autodocs: false
  },
  async webpackFinal(config) {
    config.optimization.minimize = false; // Minification seams to to break FocusManager navigation
    // Shorter alias for inspector
    config.resolve.alias['lightningInspect'] = path.resolve(
      __dirname,
      '../../../../node_modules/@lightningjs/core/devtools/lightning-inspect'
    );
    return config;
  }
};

export default config;
