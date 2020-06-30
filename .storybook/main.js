const path = require('path');

const lightningInspector = path.resolve(
  '.storybook/addons/addon-lightning-inspector/register.js'
)
module.exports = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-knobs/register',
    lightningInspector,
  ],
  stories: ['../components/**/*.stories.js'],
  webpackFinal: config => {
    config.module.rules[0].exclude = /node_modules\/(?!(wpe-lightning)\/)/;
    // uncomment to debug webpack config
    // console.dir(config, { depth: null });
    return config;
  }
};
