/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 RDK Management
 *
 * Licensed under the Apache License, Version 2.0 (the License);
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
 */

const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const babelrcConfig = require(path.resolve('../../babel.config.js'));
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge.strategy({ module: 'replace', plugins: 'append' })(
  baseConfig,
  {
    output: {
      path: path.resolve(process.cwd(), 'dist'),
      publicPath: '',
      filename: 'index.js',
      libraryTarget: 'commonjs2'
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        generateStatsFile: true
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$|jsx$/,
          loader: 'babel-loader',
          options: babelrcConfig
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack']
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  mode: 'local',
                  localIdentName: '[name]__[local]-[hash:base64:5]'
                },
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  ctx: {
                    'postcss-preset-env': {
                      preserve: false,
                      importFrom: [
                        path.resolve(
                          'node_modules',
                        )
                      ]
                    }
                  }
                }
              }
            }
          ]
        }
      ]
    },
    externals: [
      nodeExternals({
        modulesFromFile: true,
      })
    ]
  }
);
