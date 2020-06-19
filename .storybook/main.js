const path = require('path');

const lightningInspector = path.resolve(
  '.storybook/addons/addon-lightning-inspector/register.js'
)
const codeSandboxEmbed = path.resolve(
  '.storybook/addons/addon-codesandbox-embed/register.js'
)
module.exports = {
  addons: [
    '@storybook/addon-storysource',
    '@storybook/addon-docs',
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    lightningInspector,
    codeSandboxEmbed
  ],
  stories: ['../components/**/*.stories.js'],
  webpackFinal: config => {
    config.module.rules[0].exclude = /node_modules\/(?!(wpe-lightning)\/)/;
    // uncomment to debug webpack config
    // console.dir(config, { depth: null });
    return config;
  }
};
