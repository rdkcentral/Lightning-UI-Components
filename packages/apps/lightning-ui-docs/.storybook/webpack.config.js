const path = require('path');

module.exports = async ({ config, mode }) => {
  config.resolve.alias['@lightningjs/core'] = path.resolve(
    __dirname,
    '../node_modules/@lightningjs/core'
  ); // Make sure both storybook and lightning/ui components use the same instance of @lightingjs/core otherwise you will get shader errors
  config.resolve.alias['@lightning-inspect'] =
    mode === 'PRODUCTION'
      ? path.resolve(__dirname, '../lightning-inspect/production')
      : path.resolve(__dirname, '../lightning-inspect/development');
  config.optimization.minimize = false; // Minification seams to to break FocusManager navigation
  return config;
};
