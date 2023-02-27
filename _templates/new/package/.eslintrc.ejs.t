---
to: packages/<%= pkg_name %>/.eslintrc.js
---
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: '../../.eslintrc.js',
};
