"use strict";

module.exports = {
  create: function(context) {
    return {
        "ClassDeclaration": function(node) {
            context.report({
              node: node,
              message: "dont use class."
            });
        }
    };
  }
};
