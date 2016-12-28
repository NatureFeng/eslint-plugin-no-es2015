"use strict";

module.exports = {
  create: function(context) {
    return {
        "ArrowFunctionExpression": function(node) {
            context.report({
              node: node,
              message: "dont use arrow function."
            });
        }
    };
  }
};
