const prettierRules = require('./eslintRules/prettier');
const eslintRules = require('./eslintRules/eslint');
const jestRules = require('./eslintRules/jest');
const noRules = require('./eslintRules/no');
const typescriptEslintRules = require('./eslintRules/typescriptEslint');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  plugins: ['@typescript-eslint', 'prettier', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    ...prettierRules,
    ...eslintRules,
    ...jestRules,
    ...noRules,
    ...typescriptEslintRules,
  },
  overrides: [
    {
      files: ['**/*.spec.js', '**/*.spec.jsx'],
      env: {
        jest: true,
      },
    },
  ],
};
