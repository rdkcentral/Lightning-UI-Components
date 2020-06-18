const path = require('path');

module.exports = {
  addons: [
    '@storybook/addon-storysource',
    '@storybook/addon-docs',
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    path.resolve('.storybook/register.js')
  ],
  stories: ['../components/**/*.stories.js'],
  webpackFinal: config => {
    config.module.rules[0].exclude = /node_modules\/(?!(wpe-lightning)\/)/;
    // uncomment to debug webpack config
    // console.dir(config, { depth: null });
    return config;
  }
};
