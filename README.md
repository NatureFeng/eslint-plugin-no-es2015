# eslint-config-no-es2015
Some of the eslint rules to disable es2015

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

```sh
$ npm install eslint
```

If you installed `ESLint` globally, you have to install React plugin globally too. Otherwise, install it locally.

```sh
$ npm install eslint-plugin-no-es2015
```

# Configuration

Add `plugins` section and specify ESLint-plugin-no-es2015 as a plugin.

```json
{
  "plugins": [
    "no-es2015"
  ]
}
```

and you can use this plugin like this.

```json
"rules": {
    "no-es2015/only-var": 2,
    "no-es2015/no-class": 2,
    "no-es2015/no-arrow-func": 2,
    "no-es2015/no-import": 2,
    "no-es2015/no-template-string": 2
}
```



# List of supported rules

* no-es2015/only-var: you cant use let or const
* no-es2015/no-destructuring-assignment: you cant use destructuring-assignment // var {a} = {a:1};
* no-es2015/no-destructuring-params: you cant use destructuring-params // function foo([a,b]) {} function bar({a}) {}
* no-es2015/no-class: you cant use class // class A {}
* no-es2015/no-default-params: you cant use default params // function(a = 1) {}
* no-es2015/no-spread-element: you cant use spread element // Math.Max(...[1,2,3])
* no-es2015/no-rest-params: you cant use rest params // function(...a) {}
* no-es2015/no-generator-function: you cant use generator params // function*foo() {}
* no-es2015/no-arrow-func: you cant use arrow function // var a = () => {}
* no-es2015/no-for-of: you cant use for of statement // for(bar of foo) {}
* no-es2015/no-import: you cant use import // import {foo} from 'foo';
* no-es2015/no-template-string: you cant use template string // var a = `i am a template string`;
