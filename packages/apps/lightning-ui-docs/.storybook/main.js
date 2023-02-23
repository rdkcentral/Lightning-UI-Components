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
    '../../../@lightningjs/ui-components/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../@lightningjs/ui-components/docs/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  staticDirs: ['../../../@lightningjs/ui-components/src/assets'], // TODO: How to handle images between projects
  core: {
    disableTelemetry: true
  }
};
