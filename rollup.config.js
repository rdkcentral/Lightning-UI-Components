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

import { babel } from '@rollup/plugin-babel';
import dts from 'rollup-plugin-dts';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default cliArgs => [
  {
    input: './index.d.ts',
    output: [{ file: `./dist/${cliArgs.name}.d.ts`, format: 'es' }],
    plugins: [
      dts({
        compilerOptions: {
          lib: ['ES2018', 'DOM'],
          outDir: 'types',
          sourceMap: true,
          module: 'Node16',
          target: 'ES2020',
          moduleResolution: 'node',
          allowJs: true,
          esModuleInterop: true,
          allowSyntheticDefaultImports: true,
          strict: true,
          noImplicitOverride: true,
          resolveJsonModule: true,
          declaration: true,
          declarationMap: true,
          emitDeclarationOnly: true
        }
      })
    ]
  },
  {
    input: './index.js',
    output: {
      sourcemap: true,
      file: cliArgs.name
        ? `./dist/${cliArgs.name}.min.js`
        : './dist/bundle.min.js',
      format: 'esm'
    },
    treeshake: {
      preset: 'smallest',
      moduleSideEffects: false // Important to make sure final bundle only includes necessary imports from os lightning/ui
    },
    plugins: [
      resolve({ exportConditions: ['node'] }),
      peerDepsExternal(),
      image(),
      json(),
      babel({ babelHelpers: 'bundled', exclude: ['node_modules/**'] }),
      terser({ keep_classnames: true, keep_fnames: true })
    ]
  }
];
