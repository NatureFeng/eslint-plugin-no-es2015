"use strict";

module.exports = {
  create: function(context) {
    return {
        "ImportDeclaration": function(node) {
            context.report({
              node: node,
              message: "dont use import."
            });
        }
    };
  }
};
