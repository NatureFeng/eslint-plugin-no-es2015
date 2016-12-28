"use strict";

module.exports = {
  create: function(context) {
    return {
        "TemplateLiteral": function(node) {
            context.report({
              node: node,
              message: "dont use template string."
            });
        }
    };
  }
};
