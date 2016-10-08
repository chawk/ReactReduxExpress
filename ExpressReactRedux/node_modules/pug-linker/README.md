# jade-linker

Link multiple jade ASTs together using include/extends

[![Build Status](https://img.shields.io/travis/jadejs/jade-linker/master.svg)](https://travis-ci.org/jadejs/jade-linker)
[![Dependency Status](https://img.shields.io/gemnasium/jadejs/jade-linker.svg)](https://gemnasium.com/jadejs/jade-linker)
[![NPM version](https://img.shields.io/npm/v/jade-linker.svg)](https://www.npmjs.org/package/jade-linker)

## Installation

    npm install jade-linker

## Usage

```js
var link = require('jade-linker');
```

### `link(ast)`

Flatten the Jade AST of inclusion and inheritance.

This function merely links the AST together; it doesn't read the file system to resolve and parse included and extended files. Thus, the main AST must already have the ASTs of the included and extended files embedded in the `FileReference` nodes. `jade-load` is designed to do that.

## License

  MIT
