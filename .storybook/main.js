module.exports = {
  addons: ['@storybook/addon-storysource'],
  stories: ['../components/**/*.stories.[tj]s'],
  webpackFinal: config => {
    const newRules = config.module.rules.slice(1);
    config.module.rules = newRules;

    return config;
  }
};
