const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const babelrcConfig = require(path.resolve('../../babel.config.js'));

const options = {
  mode: 'production',
  entry: path.resolve('src', 'index.js'),
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: [
            'default',
            {
              cssDeclarationSorter: true,
              discardComments: {
                removeAllButFirst: true
              }
            }
          ]
        }
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
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
          MiniCssExtractPlugin.loader,
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
  }
};

module.exports = options;
