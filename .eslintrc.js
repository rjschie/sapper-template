'use strict';

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['svelte3', 'cypress'],
  extends: ['eslint:recommended'],
  overrides: [
    {
      files: ['**/*.svelte'],
      settings: { 'svelte3/ignore-styles': (attrs) => 'lang' in attrs },
      processor: 'svelte3/svelte3',
      env: {
        browser: true,
        es6: true,
        node: true,
      },
    },
    {
      files: ['.eslintrc.js', '*.config.js', 'cypress/**/*', 'src/server.js'],
      extends: ['plugin:cypress/recommended'],
      env: {
        node: true,
      },
    },
  ],
};
