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

module.exports = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    './addons/register',
   'storybook-addon-turbo-build' // Speed up final build
  ],
  stories: [
    '../src/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../@lightningjs/ui-components/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../@lightningjs/ui-components/docs/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  staticDirs: ['../../../@lightningjs/ui-components/src/assets'], // TODO: How to handle images between projects
  core: {
    disableTelemetry: true
  }
};
