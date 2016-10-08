# jade-attrs

Generate code for Jade attributes

[![Build Status](https://img.shields.io/travis/jadejs/jade-attrs/master.svg)](https://travis-ci.org/jadejs/jade-attrs)
[![Dependency Status](https://img.shields.io/gemnasium/jadejs/jade-attrs.svg)](https://gemnasium.com/jadejs/jade-attrs)
[![NPM version](https://img.shields.io/npm/v/jade-attrs.svg)](https://www.npmjs.org/package/jade-attrs)

## Installation

    npm install jade-attrs

## Usage

```js
var compileAttrs = require('jade-attrs');
```

### `compileAttrs(attrs, options)`

Compile `attrs` to a JavaScript string that evaluates to the attributes in the desired format.

`options` MUST include the following properties:

- `terse`: whether or not to use HTML5-style terse boolean attributes
- `runtime`: callback that takes a runtime function name and returns the source code that will evaluate to that function at runtime
- `format`: output format; must be `html` or `object`

`attrs` is an array of attributes, with each attribute having the form of `{ name, val, mustEscape }`. `val` represents a JavaScript string that evaluates to the value of the attribute, either statically or dynamically.

```js
var compileAttrs = require('jade-attrs');
var jadeRuntime = require('jade-runtime');

function getBaz () { return 'baz<>'; }

var attrs = [
  {name: 'foo',  val: '"bar"',    mustEscape: true },
  {name: 'baz',  val: 'getBaz()', mustEscape: true },
  {name: 'quux', val: true,       mustEscape: false}
];
var result, finalResult;

// HTML MODE
result = compileAttrs(attrs, {
  terse:   true,
  format:  'html',
  runtime: function (name) { return 'jadeRuntime.' + name; }
});
//=> '" foo=\\"bar\\"" + jadeRuntime.attr("baz", getBaz(), true, true) + " quux"'

finalResult = Function('jadeRuntime, getBaz',
  'return (' + result + ');'
);
finalResult(jadeRuntime, getBaz);
// => ' foo="bar" baz="baz&lt;&gt;" quux'

// OBJECT MODE
result = compileAttrs(attrs, {
  terse:   true,
  format:  'object',
  runtime: function (name) { return 'jadeRuntime.' + name; }
});
//=> '{"foo": "bar","baz": jadeRuntime.escape(getBaz()),"quux": true}'

finalResult = Function('jadeRuntime, getBaz',
  'return (' + result + ');'
);
finalResult(jadeRuntime, getBaz);
//=> { foo: 'bar', baz: 'baz&lt;&gt;', quux: true }
```

## License

  MIT
