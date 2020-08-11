const path = require('path');

const lightningInspector = path.resolve(
  '.storybook/addons/addon-lightning-inspector/register.js'
);

// Some stories may only exists for testing in development.
// Add file names to the 2nd glob to skip them in production
const stories =
  process.env.NODE_ENV === 'development'
    ? [
        '../components/**/*.stories.{js,mdx}',
        '../mixins/*.stories.{js,mdx}'
      ]
    : [
        '../components/**/!(ListItemBase).stories.{js,mdx}',
        '../mixins/*.stories.{js,mdx}'
      ];

module.exports = {
  addons: [
    '@storybook/addon-storysource',
    '@storybook/addon-docs',
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    lightningInspector
  ],
  stories
};
