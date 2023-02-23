module.exports = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    './addons/register',
   'storybook-addon-turbo-build' // Speed up final build
  ],
  stories: [
    // '../../../@lightningjs/ui/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../@lightningjs/ui-core/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../@lightningjs/ui-core/docs/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  staticDirs: ['../../../@lightningjs/ui-core/src/assets'], // TODO: How to handle images between projects
  core: {
    disableTelemetry: true
  }
};
