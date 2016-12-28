'use strict';

module.exports = {
  rules: {
    'only-var': require('./lib/rules/only-var'),
    'no-class': require('./lib/rules/no-class'),
    'no-arrow-func': require('./lib/rules/no-arrow-func'),
    'no-import': require('./lib/rules/no-import'),
    'no-template-string': require('./lib/rules/no-template-string')
  },
};
