module.exports = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    './addons/register',
   'storybook-addon-turbo-build' // Speed up final build
  ],
  stories: [
    // '../../../@lightning/ui/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../@lightning/ui-core/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../@lightning/ui-core/docs/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  staticDirs: ['../../../@lightning/ui-core/src/assets'], // TODO: How to handle images between projects
  core: {
    disableTelemetry: true
  }
};
