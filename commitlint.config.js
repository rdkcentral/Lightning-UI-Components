const ERROR = 2;

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [0],
    'footer-max-line-length': [ERROR, 'never']
  }
};
