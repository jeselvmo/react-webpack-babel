module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['airbnb-base', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    AppUtils: true,
  },
  plugins: ['react'],
  rules: {
    'comma-dangle': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'arrow-parens': 0,
    'global-require': 0,
    'object-curly-newline': 0,
    'arrow-body-style': 0,
    'class-methods-use-this': 0,
    'react/display-name': 0,
    'func-names': 0,
    'no-return-assign': 0,
    'function-paren-newline': 0,
    'implicit-arrow-linebreak': 0,
    'max-len': 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'prefer-destructuring': 0,
    'import/order': 0,
  },
  settings: {
    'import/resolver': 'webpack',
  },
};
