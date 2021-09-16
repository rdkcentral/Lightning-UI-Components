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

// Some stories may only exists for testing in development.
// Add file names to the 2nd glob to skip them in production
const stories =
  process.env.NODE_ENV === 'development'
    ? [
        '../elements/**/*.stories.{js,mdx}',
        '../layout/**/*.stories.{js,mdx}',
        '../mixins/**/*.stories.{js,mdx}'
      ]
    : [
        '../elements/**/*.stories.{js,mdx}',
        '../layout/**/*.stories.{js,mdx}',
        '../mixins/**/*.stories.{js,mdx}'
      ];

module.exports = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-docs'
  ],
  stories
};
