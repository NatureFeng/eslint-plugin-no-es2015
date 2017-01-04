"use strict";

module.exports = {
  create: function(context) {
    return {
        "FunctionDeclaration": function(node) {
          node.params && node.params.forEach(function(param) {
            if('ArrayPattern' === param.kind || 'ObjectPattern' === param.kind) {
              context.report({
                node: node,
                message: "dont use destructuring params."
              });
            }
          });
        }
    };
  }
};
