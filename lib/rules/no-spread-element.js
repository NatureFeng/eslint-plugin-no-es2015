"use strict";

module.exports = {
  create: function(context) {
    return {
        "SpreadElement": function(node) {
          context.report({
            node: node,
            message: "dont use spread element."
          });
        }
    };
  }
};
