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

const { resolveToUnqualified } = require('pnpapi');

async function resolveDevToolsFilePath() {
  try {
    const lngDevTools = await resolveToUnqualified('@lightningjs/core/devtools/lightning-inspect', __dirname);
    console.log('Resolved DevTools File Path:', lngDevTools);
    return lngDevTools;
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}

module.exports = async ({ config }) => {
  // Disable minification as it seems to break FocusManager navigation
  config.optimization.minimize = false;

  // Shorter alias for the inspector module
  config.resolve.alias['lightningInspect'] = await resolveDevToolsFilePath();

  return config;
};
