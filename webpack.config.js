const babelrcConfig = require('./babel.config.js');
const { getIfUtils } = require('webpack-config-utils');
const path = require('path');

module.exports = env => {
  const { ifNotProduction } = getIfUtils(`${env}`);

  const config = {
    module: {
      rules: [
        {
          test: /\.js$|jsx$/,
          exclude: /node_modules[\\/](?!@wpe-lightning-ui[\\/]).*/,
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
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  mode: 'local',
                  localIdentName: '[name]__[local]-[hash:base64:5]'
                },
                importLoaders: 1,
                sourceMap: ifNotProduction()
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  ctx: {
                    'postcss-preset-env': {
                      preserve: true,
                      importFrom: [
                        path.resolve(
                          'components',
                          'theme/styles/color.module.css'
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
  return config;
};
