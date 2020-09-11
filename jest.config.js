/**
 * Copyright 2020 Comcast Cable Communications Management, LLC
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
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/**/*.js',
    '!**/coverage/**',
    '!<rootDir>/**/*.{stories,test,xtest}.js',
    '!<rootDir>/**/{Item}/*.js', // exclude temporary components
    '!<rootDir>/**/lightning-test-renderer.js',
    '!<rootDir>/**/lightning-test-utils.js'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'html'],
  coverageThreshold: {
    global: {
      statements: 90,
      functions: 90,
      lines: 90
    }
  },
  maxWorkers: '4',
  moduleFileExtensions: ['js', 'json', 'jsx', 'node', 'ts', 'tsx', 'mjs'],
  moduleNameMapper: {},
  rootDir: '.',
  roots: ['<rootDir>/components', '<rootDir>/utils'],
  setupFiles: ['jest-webgl-canvas-mock'],
  testEnvironment: 'jest-environment-jsdom-fifteen',
  testEnvironmentOptions: { resources: 'usable' },
  testPathIgnorePatterns: [],
  transform: {
    '^.+\\.mjs$': 'babel-jest',
    '^.+\\.[t|j]sx?$': 'babel-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!wpe-lightning(-sdk)?)'],
  verbose: true
};
