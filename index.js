'use strict';

module.exports = {
  rules: {
    'no-includes': require('./lib/rules/no-includes'),
    'only-var': require('./lib/rules/only-var'),
    'no-destructuring-assignment': require('./lib/rules/no-destructuring-assignment'),
    'no-destructuring-params': require('./lib/rules/no-destructuring-params'),
    'no-class': require('./lib/rules/no-class'),
    'no-default-params': require('./lib/rules/no-default-params'),
    'no-spread-element': require('./lib/rules/no-spread-element'),
    'no-rest-params': require('./lib/rules/no-rest-params'),
    'no-generator-function': require('./lib/rules/no-generator-function'),
    'no-arrow-func': require('./lib/rules/no-arrow-func'),
    'no-for-of': require('./lib/rules/no-for-of'),
    'no-import': require('./lib/rules/no-import'),
    'no-template-string': require('./lib/rules/no-template-string')
  },
};
