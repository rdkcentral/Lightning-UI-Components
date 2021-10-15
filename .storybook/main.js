// Some stories may only exists for testing in development.
// Add file names to the 2nd glob to skip them in production
const stories =
  process.env.NODE_ENV === 'development'
    ? [
        '../docs/Introduction.stories.mdx',
        '../docs/Readme.stories.mdx',
        '../docs/Contributing.stories.mdx',
        '../collections/(**/)?*.stories.{js,mdx}',
        '../elements/**/*.stories.{js,mdx}',
        '../layout/**/*.stories.{js,mdx}',
        '../patterns/(**/)?*.stories.{js,mdx}',
        '../mixins/(**/)?*.stories.{js,mdx}'
      ]
    : [
        '../docs/Introduction.stories.mdx',
        '../docs/Readme.stories.mdx',
        '../docs/Contributing.stories.mdx',
        '../collections/(**/)?*.stories.{js,mdx}',
        '../elements/**/*.stories.{js,mdx}',
        '../layout/**/*.stories.{js,mdx}',
        '../patterns/**/!(ListItemBase).stories.{js,mdx}',
        '../mixins/(**/)?*.stories.{js,mdx}'
      ];

module.exports = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource'
  ],
  stories
};
