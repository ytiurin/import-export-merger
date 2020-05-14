const { createMatchRegExp } = require("./createMatchRegExp");
const { disposeRange } = require("./utils");
const { specificityExports } = require("./matchers/specificityExports");

const extractExports = ({ body: destBody, pathMap }) => {
  const aggregates = {},
    reexports = {},
    matchExports = createMatchRegExp(specificityExports);

  let match,
    exports = [];

  while ((match = matchExports(destBody))) {
    let insertText;

    if (match.default && !(match.identifiers && match.identifiers.length)) {
      insertText = "var $default = ";
    }

    destBody = disposeRange(destBody, match.range, insertText).trim();

    if (match.path) {
      const importFilepath = pathMap[match.path] || match.path;

      if (match.all) {
        aggregates[importFilepath] = match.identifiers;

        continue;
      }

      if (match.identifiers) {
        reexports[importFilepath] = match.identifiers;
      }

      continue;
    }

    if (match.identifiers && match.identifiers.length) {
      if (match.default) {
        exports = exports.concat([["default", match.identifiers[0]]]);
      } else {
        exports = exports.concat(match.identifiers);
      }
    } else if (match.default) {
      exports = exports.concat([["default", "$default"]]);
    }
  }

  return {
    aggregates,
    destBody,
    exports,
    reexports,
  };
};

module.exports = { extractExports };
