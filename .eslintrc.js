module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true
  },
  plugins: ['jest', 'prettier'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'prettier'],
  rules: {
    quotes: [2, 'single', 'avoid-escape'],
    'no-extra-boolean-cast': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: false,
        singleQuote: true,
        tabWidth: 2,
        printWidth: 80
      }
    ],
    'space-before-function-paren': [
      'ignore',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module'
  }
};
