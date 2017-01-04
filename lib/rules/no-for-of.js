"use strict";

module.exports = {
  create: function(context) {
    return {
        "ForOfStatement": function(node) {
            context.report({
              node: node,
              message: "dont use for of statement."
            });
        }
    };
  }
};
