> This tool has a significant design drawback. It doesn't support import a variable by a reference. Still, functions imports work fine.

# import-export-merger

[Try a web tool](https://ytiurin.github.io/import-export-merger/)

_Merge javascript files with imports/exports into one function._ Made to pack code in one file, exculding external dependencies. This is an alternative to code bundling for small libraries.

Having three files:

```javascript
/* index.js */

import { a } from "./moduleA";

export * from "./moduleB";
```

```javascript
/* moduleA.js */

import "external";

export const a = 1;
```

```javascript
/* moduleB.js */

import { a } from "./moduleA";

const b = () => a + 1;

export default b;
```

Merging files result to a function:

```javascript
(function (indexFactory, moduleBFactory, moduleAFactory, external) {
  var moduleAExports = moduleAFactory(external);
  var moduleBExports = moduleBFactory(moduleAExports);
  return indexFactory(moduleAExports, moduleBExports);
})(
  function indexFactory(moduleA, moduleB) {
    var a = moduleA.a;

    return Object.assign({}, moduleB);
  },
  function moduleBFactory(moduleA) {
    var a = moduleA.a;
    const b = () => a + 1;

    var $default = b;
    return { default: $default };
  },
  function moduleAFactory(external) {
    const a = 1;
    return { a: a };
  },
  external
);
```

Final code with UMD declaration:

```javascript
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["external"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("external"));
  } else {
    root.myLibrary = factory(root.external);
  }
})(typeof self !== "undefined" ? self : this, function (external) {
  return (function (indexFactory, moduleBFactory, moduleAFactory, external) {
    var moduleAExports = moduleAFactory(external);
    var moduleBExports = moduleBFactory(moduleAExports);
    return indexFactory(moduleAExports, moduleBExports);
  })(
    function indexFactory(moduleA, moduleB) {
      var a = moduleA.a;

      return Object.assign({}, moduleB);
    },
    function moduleBFactory(moduleA) {
      var a = moduleA.a;
      const b = () => a + 1;

      var $default = b;
      return { default: $default };
    },
    function moduleAFactory(external) {
      const a = 1;
      return { a: a };
    },
    external
  );
});
```

UMD is enabled by default.

## Install

```bash
npm install import-export-merger
```

## Use as CLI

Basic usage:

```bash
npx iemerger src
```

Looking for `./src/index.js` in current working directory and output result to `<STDIN>`

Output to file:

```bash
npx iemerger src --output my-library.js
```

Use CLI in combination with other tools.

Format output with [prettier](https://prettier.io/ "Opinionated Code Formatter"):

```bash
npx iemerger src | npx prettier --parser=babel > my-library.js
```

Process merged code with with [babel](https://babeljs.io/ "The compiler for next generation JavaScript"):

```bash
npx iemerger src | npx babel -f my-library.js -o my-library.js
```

Minify result with [uglifyjs](http://lisperator.net/uglifyjs/ "JavaScript parser, compressor, minifier written in JS"):

```bash
npx iemerger src | npx uglifyjs -o my-library.js
```

Combine tools:

```bash
npx iemerger src | npx babel -f my-library.js | npx uglifyjs -o my-library.js
```

## Use with Node

The library API consists of functions, that are composed with `pipe`.

To read file and return a function code:

```javascript
import { compileModule, makeModule, map, pipe } from "import-export-merger";
import { readFiles } from "import-export-merger/fs";

const merge = pipe(readFiles, map(fileToModule), compileModule, makeModule);

const output = merge("./src/index.js");
```

To get code from predefined strings:

```javascript
import { rawToModule, compileModule, makeModule } from "import-export-merger";

const merge = pipe(rawToModule, compileModule, makeModule);

const output = merge([
  { body: 'import { myFunction } from "./moduleB";', filepath: "./moduleA" },
  { body: "export function myFunction() {}", filepath: "./moduleB" },
]);
```

Add UMD wrapper:

```javascript
import { makeUMD, pickExternals, supply } from "import-export-merger";

const [makeUMDBody, supplyExternals] = supply(
  makeUMD,
  pickExternals,
  "myLibrary"
);

const merge = pipe(
  // ...
  compileModule,
  supplyExternals,
  makeModule,
  makeUMD
);
```

## How it works?

All imports and exports are located with _regular expressions_ and replaced with ES5 compatible code.

## Where can it be used?

It can be used in an automation flow, when building small NPM modules. It doesn't include external dependencies or non-javascript resources into the build, thus, working faster.

## Dynamic imports

Dynamic imports are not supported.

## Comments

All commentary code is cut out from the source, to prevent bad syntax extraction.
