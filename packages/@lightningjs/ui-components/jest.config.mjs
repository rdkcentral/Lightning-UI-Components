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

import sharedConfig from '../../../jest.config.js';

// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
export default {
  ...sharedConfig,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    '<rootDir>/**/*.js',
    '!**/coverage/**',
    '!**/docs/**',
    '!<rootDir>/**/*.{stories,test,xtest,styles}.js',
    '!<rootDir>/**/{Item,Styles}/*.js', // exclude temporary components
    '!<rootDir>/test/**'
  ],

  // A map from regular expressions to module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js'
  },

  // The root directory that Jest should scan for tests and modules within
  rootDir: '.',

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: ['jest-webgl-canvas-mock'],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: []
};
