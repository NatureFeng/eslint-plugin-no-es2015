"use strict";

module.exports = {
  create: function(context) {
    return {
        "Property": function(node) {
          if (node.method) {
            context.report({
              node: node,
              message: "dont use shorthand method in object."
            });
          }
        }
    };
  }
};
