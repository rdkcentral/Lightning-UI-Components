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
    'no-console': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(table|warn|error|info|trace)$/]",
        message: 'Unexpected property on console object was called'
      }
    ],
    quotes: [2, 'single', 'avoid-escape'],
    'no-extra-boolean-cast': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        singleQuote: true,
        tabWidth: 2,
        printWidth: 80
      }
    ],
    'space-before-function-paren': [
      0,
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],
    'id-blacklist': [
      2,
      '_updateDimensions',
      '_updateTextureCoords',
      '_updateCollision',
      '_updateAttachedFlag',
      '_updateEnabledFlag'
    ],
    'no-prototype-builtins': [0]
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module'
  }
};
