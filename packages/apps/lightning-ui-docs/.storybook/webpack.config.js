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

const path = require('path');
const { resolveToUnqualified } = require('pnpapi');
const packageName = '@lightningjs/core';
const fileName = 'devtools/lightning-inspect';
let resolvedFilePath
try {
  // Resolve the file path using the PnP API
  resolvedFilePath = resolveToUnqualified(
    `${packageName}/${fileName}`,
    __dirname
  );
  console.log('Resolved File Path!:', resolvedFilePath);
} catch (error) {
  console.error('Error!:', error.message);
}

module.exports = async ({ config, mode }) => {
  config.optimization.minimize = false; // Minification seams to to break FocusManager navigation
  // Shorter alias for inspector
  config.resolve.alias['lightningInspect'] = resolvedFilePath;
  return config;
};
