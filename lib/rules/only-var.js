"use strict";

module.exports = {
  create: function(context) {
    function report(node) {
      var definedToken = sourceCode.getFirstToken(node);
      context.report({
        node: node,
        message: "dont use let or const.",
        fix(fixer) {
          return fixer.replaceText(definedToken, "var");
        }
      });
    }

    return {
        "VariableDeclaration": function(node) {
          var kind = node.kind;
          if (kind === 'let' || kind === 'const') {
            report(node);
          }
        }
    };
  }
};
