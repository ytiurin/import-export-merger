const { specificityImports } = require("./matchers/specificityImports");
const { createMatchRegExp } = require("./createMatchRegExp");
const { disposeRange } = require("./utils");

const extractImports = ({ destBody, pathMap, ...rest }) => {
  const dependencies = {},
    matchImports = createMatchRegExp(specificityImports);

  let match;

  while ((match = matchImports(destBody))) {
    let defaultDeps = [],
      namedDeps = [];

    destBody = disposeRange(destBody, match.range).trim();

    const importFilepath = pathMap[match.path] || match.path;

    if (match.identifiers && match.identifiers.length) {
      namedDeps = match.identifiers;

      if (match.all) {
        namedDeps = [[match.identifiers[0], "$all"]];
      }
    }

    if (match.defaultIdentifier) {
      defaultDeps = [[match.defaultIdentifier, "default"]];
    }

    dependencies[importFilepath] = (dependencies[importFilepath] || []).concat(
      defaultDeps,
      namedDeps
    );
  }

  return { ...rest, destBody, dependencies, pathMap };
};

module.exports = { extractImports };
