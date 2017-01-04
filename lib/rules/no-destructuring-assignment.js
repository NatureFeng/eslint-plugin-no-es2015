"use strict";

module.exports = {
  create: function(context) {
    return {
        "VariableDeclarator": function(node) {
          if (node.id.type !== 'Identifier') {
            context.report({
              node: node,
              message: "dont use destructuring assignment."
            });
          }
        }
    };
  }
};
