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
  stories: ['../components/**/*.stories.js']
};
