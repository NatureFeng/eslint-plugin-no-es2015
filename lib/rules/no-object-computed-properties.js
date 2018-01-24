"use strict";

module.exports = {
  create: function(context) {
    return {
        "Property": function(node) {
          if (node.computed) {
            context.report({
              node: node,
              message: "dont use computed property in object."
            });
          }
        }
    };
  }
};
