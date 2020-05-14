const { readFileSync } = require("fs");
const { dirname, resolve } = require("path");

const { assertModulePath } = require("./assertModulePath");
const { createIndexOf, createIsRepeated, uniq } = require("../utils");
const { fromPath } = require("../matchers/expressions");
const { stripComments } = require("../stripComments");

const readFiles = (path) => {
  const result = [],
    isRepeated = createIsRepeated();

  let queue = [assertModulePath(path)],
    filepath,
    finishRead = false;

  while ((filepath = queue.shift())) {
    const indexOfFile = result.reduce(
      ...createIndexOf(({ filepath: path }) => filepath === path)
    );

    if (~indexOfFile) {
      result.splice(indexOfFile, 1);
    }

    if (filepath[0] !== "/") {
      result.push({
        external: true,
        filepath,
      });
      continue;
    }

    const body = stripComments(readFileSync(filepath, "utf8"));

    const froms = (body.match(new RegExp(fromPath, "g")) || []).filter(uniq);

    const paths = froms.map((from) =>
      from[0] !== "."
        ? from
        : assertModulePath(resolve(dirname(filepath), from))
    );

    result.push({
      body,
      filepath,
      froms,
      paths,
    });

    if (finishRead) {
      continue;
    }

    queue = queue.concat(paths);
    finishRead = isRepeated(queue);
  }

  return result;
};

module.exports = { readFiles };
