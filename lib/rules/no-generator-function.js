"use strict";

module.exports = {
  create: function(context) {
    return {
        "FunctionDeclaration": function(node) {
          if (node.generator) {
            context.report({
              node: node,
              message: "dont use generator function."
            });
          }
        }
    };
  }
};
