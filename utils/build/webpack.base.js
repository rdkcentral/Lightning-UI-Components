const path = require('path');
const babelrcConfig = require(path.resolve('../../babel.config.js'));

const options = {
  mode: 'production',
  entry: path.resolve('src', 'index.js'),
  optimization: {
    minimizer: []
  },
  resolve: {
    alias: {
      'wpe-lightning': path.resolve(__dirname, 'node_modules/wpe-lightning')
    },
    mainFields: ['module', 'main']
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$|jsx$/,
        loader: 'babel-loader',
        options: babelrcConfig
      }
    ]
  }
};

module.exports = options;
