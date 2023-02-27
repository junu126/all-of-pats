const importRules = require('./eslintRules/import');
const reactRules = require('./eslintRules/react');

module.exports = {
  extends: [
    '.eslintrc.js',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['icon-button', 'import'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    ...importRules,
    ...reactRules,
    'icon-button/icon-button-label': 'warn',
  },
};
