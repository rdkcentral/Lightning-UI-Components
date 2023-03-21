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
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  ignorePatterns: [
    'node_modules',
    'dist',
    'coverage',
    'build',
    'storybook-static',
    '**/*.json'
  ],
  plugins: ['jest', 'prettier'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
  rules: {
    'import/no-useless-path-segments': 'error', // Please note this rule has been patched with Yarn to allow imports from npm packages to apply. The open issue can be found here https://github.com/import-js/eslint-plugin-import/issues/1280
    'no-console': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(table|warn|error|info|trace)$/]",
        message: 'Unexpected property on console object was called'
      }
    ],
    quotes: [2, 'single', 'avoid-escape'],
    'no-extra-boolean-cast': 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        singleQuote: true,
        trailingComma: 'none',
        arrowParens: 'avoid',
        tabWidth: 2
      }
    ],
    'space-before-function-paren': [
      0,
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],
    'id-blacklist': [
      2,
      '_updateDimensions',
      '_updateTextureCoords',
      '_updateCollision',
      '_updateAttachedFlag',
      '_updateEnabledFlag'
    ],
    'no-prototype-builtins': [0]
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 'latest',
    sourceType: 'module',
    jsx: true,
    ecmaFeatures: {
      // Fix to allow react components with jsx
      jsx: true
    }
  },
  overrides: [
    {
      files: ['**/*.d.ts'],
      env: { browser: true, es6: true, node: true },
      extends: [
        'plugin:prettier/recommended',
        'prettier',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
      ],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2018,
        sourceType: 'module'
      },
      rules: {
        'no-prototype-builtins': [0],
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': [1, { ignoreDeclarationMerge: true }]
      },
      plugins: ['@typescript-eslint', 'eslint-plugin-import']
    }
  ]
};
