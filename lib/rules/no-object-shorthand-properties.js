"use strict";

module.exports = {
  create: function(context) {
    return {
        "Property": function(node) {
          if (node.shorthand) {
            context.report({
              node: node,
              message: "dont use shorthand property in object."
            });
          }
        }
    };
  }
};
