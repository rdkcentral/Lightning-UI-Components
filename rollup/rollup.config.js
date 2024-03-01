import path from 'path';
import { fileURLToPath } from 'url';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import dts from 'rollup-plugin-dts';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { visualizer } from 'rollup-plugin-visualizer';

// Determine current file and directory based on URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Common plugin configurations
const babelPlugins = [
  '@babel/plugin-transform-optional-chaining',
  '@babel/plugin-transform-nullish-coalescing-operator',
];

const babelOptions = {
  presets: ['@babel/preset-env'],
  plugins: babelPlugins,
  compact: false
};

// Rollup configuration
export default cliArgs => {
  const bundleFileName = cliArgs.name ? cliArgs.name : 'bundle';
  const outputDir = './dist/';
  const isAnalyze = process.env.ANALYZE;

  return [
    {
      input: './index.d.ts',
      output: [{ file: `${outputDir}${bundleFileName}.d.ts`, format: 'es' }],
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
            emitDeclarationOnly: true,
          },
        }),
      ],
    },
    {
      input: './index.js',
      external: ['@lightningjs/core'],
      output: [
        {
          sourcemap: true,
          file: `${outputDir}${bundleFileName}.min.mjs`,
          format: 'es',
        },
        {
          sourcemap: true,
          file: `${outputDir}${bundleFileName}.min.cjs`,
          format: 'cjs',
        },
      ],
      plugins: [
        resolve({ exportConditions: ['node'] }),
        peerDepsExternal(),
        image(),
        json(),
        getBabelOutputPlugin(babelOptions),
        terser({
          module: true,
          mangle: false,
          compress: false,
          format: {
            beautify: true, // Output more readable code
          },
          keep_classnames: true,
          keep_fnames: true,
        }),
        isAnalyze && visualizer({
          filename: './bundle-analysis.html',
          open: true,
        }),
      ].filter(Boolean),
    },
  ];
};
