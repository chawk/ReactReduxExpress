# jade-code-gen

Default code-generator for jade.  It generates HTML via a JavaScript template function.

[![Build Status](https://img.shields.io/travis/jadejs/jade-code-gen/master.svg)](https://travis-ci.org/jadejs/jade-code-gen)
[![Dependency Status](https://img.shields.io/gemnasium/jadejs/jade-code-gen.svg)](https://gemnasium.com/jadejs/jade-code-gen)
[![NPM version](https://img.shields.io/npm/v/jade-code-gen.svg)](https://www.npmjs.org/package/jade-code-gen)

## Installation

    npm install jade-code-gen

## Usage

```js
var generateCode = require('jade-code-gen');
```

### `generateCode(ast, options)`

Generate a JavaScript function string for the given AST.

`ast` is a fully expanded AST for Jade, with all inclusion, extends, and filters resolved.

`options` may contain the following properties that have the same meaning as the options with the same names in `jade`:

 - pretty (boolean): default is `false`
 - compileDebug (boolean): default is `false`
 - doctype (string): default is `undefined`
 - inlineRuntimeFunctions (boolean): default is `false`
 - globals (array of strings): default is `[]`
 - self (boolean): default is `false`

In addition to above, `jade-code-gen` has the following unique options:

 - includeSources (object): map of filename to source string; used if `compileDebug` is `true`; default is `undefined`
 - templateName (string): the name of the generated function; default is `'template'`

```js
var lex = require('jade-lexer');
var parse = require('jade-parser');
var generateCode = require('jade-code-gen');

var funcStr = generateCode(parse(lex('p Hello world!')), {
  compileDebug: false,
  pretty: true,
  inlineRuntimeFunctions: false,
  templateName: 'helloWorld'
});

var func = Function('locals', funcStr);
func();
//=> '\n<p>Hello world!</p>'
```

### `new generateCode.CodeGenerator(ast, options)`

The constructor for the internal class of the code generator. You shouldn't need to use this for most purposes.

## License

  MIT
