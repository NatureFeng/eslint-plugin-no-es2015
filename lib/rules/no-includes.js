"use strict";

module.exports = {
  create: function(context) {
    return {
        "MemberExpression": function(node) {
          if (node.property.name === 'includes') {
            context.report({
              node: node,
              message: "dont use includes method."
            });
          }
        }
    };
  }
};
