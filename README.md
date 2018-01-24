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
    "no-es2015/no-object-computed-properties": 2,
    "no-es2015/no-object-shorthand-properties": 2,
    "no-es2015/no-object-shorthand-method": 2,
    "no-es2015/only-var": 2,
    "no-es2015/no-destructuring-assignment": 2,
    "no-es2015/no-destructuring-params": 2,
    "no-es2015/no-class": 2,
    "no-es2015/no-default-params": 2,
    "no-es2015/no-spread-element": 2,
    "no-es2015/no-rest-params": 2,
    "no-es2015/no-generator-function": 2,
    "no-es2015/no-arrow-func": 2,
    "no-es2015/no-for-of": 2,
    "no-es2015/no-import": 2,
    "no-es2015/no-template-strin": 2
}
```



# List of supported rules

* `no-es2015/only-var`: you can't use `let` or `const`.
* `no-es2015/no-destructuring-assignment`: you can't use destructuring-assignment `var {a} = {a:1};`.
* `no-es2015/no-destructuring-params`: you can't use destructuring-params `function foo([a,b]) {} function bar({a}) {}`.
* `no-es2015/no-class`: you can't use class `class A {}`.
* `no-es2015/no-default-params`: you can't use default params `function(a = 1) {}`.
* `no-es2015/no-spread-element`: you can't use spread element `Math.Max(...[1,2,3])`.
* `no-es2015/no-rest-params`: you can't use rest params `function(...a) {}`.
* `no-es2015/no-generator-function`: you can't use generator params `function*foo() {}`.
* `no-es2015/no-arrow-func`: you can't use arrow function `var a = () => {}`.
* `no-es2015/no-for-of`: you can't use for of statement `for(bar of foo) {}`.
* `no-es2015/no-import`: you can't use import `import {foo} from 'foo'`.
* `no-es2015/no-template-string`: you can't use template string <code>var a = &#96;i am a template string&#96;</code>.
* `no-object-computed-properties`: you can't use computed-properties `{[foo]: bar}`
* `no-object-shorthand-properties`: you can't use shorthand-properties `{foo}`
* `no-object-shorthand-method`: you can't use shorthand-method `{foo() {}}`
