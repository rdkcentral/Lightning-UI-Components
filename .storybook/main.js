const stories = [
  '../docs/*.stories.{js,mdx}',
  '../elements/**/*.stories.{js,mdx}',
  '../layout/**/*.stories.{js,mdx}',
  '../patterns/**/*.stories.{js,mdx}',
  '../mixins/**/*.stories.{js,mdx}'
];

module.exports = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    './addons/register'
  ],
  stories,
  staticDirs: ['../assets']
};
