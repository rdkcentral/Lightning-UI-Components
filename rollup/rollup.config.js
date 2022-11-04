import { babel } from '@rollup/plugin-babel';
import dts from 'rollup-plugin-dts';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

export default cliArgs => [
  {
    input: './index.d.ts',
    output: [{ file: `./dist/${cliArgs.name}.d.ts`, format: 'es' }],
    plugins: [
      dts({
        compilerOptions: {
          sourceMap: true,
          module: 'es6',
          target: 'ES2020',
          moduleResolution: 'node',
          allowJs: true,
          esModuleInterop: true,
          allowSyntheticDefaultImports: true,
          strict: false,
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
