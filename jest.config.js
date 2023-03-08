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

// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
module.exports = {
  resolver: '<rootDir>/../../../jest.resolver.js',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text-summary'],
  coverageThreshold: {
    global: {
      statements: 85,
      functions: 85,
      lines: 85
    }
  },
  maxWorkers: '4',
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts', 'tsx', 'mjs'],
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: [
    '<rootDir>/../ui-components-test-utils/src/jest.env.setup.js'
  ],
  testEnvironment: '<rootDir>/../ui-components-test-utils/src/lng-test-env',
  testEnvironmentOptions: { url: 'http://localhost', resources: 'usable' },
  transform: {},
  verbose: true,
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
};
