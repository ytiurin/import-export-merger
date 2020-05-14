const { existsSync, lstatSync } = require("fs");

const { resolve } = require("path");

const assertModulePath = (path) => {
  for (const suffix of ["", ".js", "/index.js"]) {
    const filepath = resolve(path + suffix);

    if (existsSync(filepath) && lstatSync(filepath).isFile()) {
      return filepath;
    }
  }
  throw new Error("Could not find file: " + path);
};

module.exports = { assertModulePath };
