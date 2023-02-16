const path = require('path');

module.exports = async ({ config, mode }) => {
  config.resolve.alias['@lightning-inspect'] =
    mode === 'PRODUCTION'
      ? path.resolve(__dirname, '../lightning-inspect/production')
      : path.resolve(__dirname, '../lightning-inspect/development');
  config.optimization.minimize = false; // Minification seams to to break FocusManager navigation
  return config;
};
