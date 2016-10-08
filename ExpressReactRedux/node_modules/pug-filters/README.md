# jade-filters

Code for processing filters in jade templates

[![Build Status](https://img.shields.io/travis/jadejs/jade-filters/master.svg)](https://travis-ci.org/jadejs/jade-filters)
[![Dependency Status](https://img.shields.io/gemnasium/jadejs/jade-filters.svg)](https://gemnasium.com/jadejs/jade-filters)
[![NPM version](https://img.shields.io/npm/v/jade-filters.svg)](https://www.npmjs.org/package/jade-filters)

## Installation

    npm install jade-filters

## Usage

```
var filters = require('jade-filters');
```

### `filters.handleFilters(ast, filters)`

Renders all `Filter` nodes in a Jade AST (`ast`), using user-specified filters (`filters`) or a JSTransformer.

### `filters.runFilter(name, str[, options[, currentDirectory]])`

Invokes filter through `jstransformer`.

This is internally used in `filters.handleFilters`, and is a lower-level interface exclusively for invoking JSTransformer-based filters.

`name` represents the name of the JSTransformer.

`str` represents the string to render.

`currentDirectory` is used when attempting to `require` the transformer module.

`options` may contain the following properties:

- `minify` (boolean): whether or not to attempt minifying the result from the transformer. If minification fails, the original result is returned.

## License

  MIT
