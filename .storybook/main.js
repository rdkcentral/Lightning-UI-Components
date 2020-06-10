module.exports = {
  addons: [
    '@storybook/addon-storysource',
    '@storybook/addon-docs',
  ],
  stories: ['../components/**/*.stories.js'],
  webpackFinal: config => {
    const newRules = config.module.rules.slice(1);
    config.module.rules = newRules;

    return config;
  }
};
