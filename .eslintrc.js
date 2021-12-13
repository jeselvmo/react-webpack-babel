module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:react/recommended'],
  globals: {
    AppUtils: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['import', 'react'],
  rules: {
    'no-console': 1,
  },
  settings: {
    'import/resolver': 'webpack',
    react: {
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
  },
};
