const { disposeRange, identity } = require("../utils/");
const {
  identifierAs,
  importAll,
  importDefault,
  importIdentifiers,
  importModule,
} = require("./expressions");
const { range } = require("./range");

const matchImportAll = (codeString) => {
  const match = codeString.match(RegExp(importAll));
  if (match) {
    return {
      all: true,
      identifiers: [match.groups.identifier].filter(identity),
      match,
      path: match.groups.path,
      range: range(match),
    };
  }
};

const matchImportDefault = (codeString) => {
  const match = codeString.match(RegExp(importDefault));

  if (match) {
    return {
      defaultIdentifier: match.groups.identifier,
      match,
      path: match.groups.path,
      range: range(match),
    };
  }
};

const matchImportIdentifiers = (codeString) => {
  const match = codeString.match(RegExp(importIdentifiers));
  const identifiers = [];

  if (match) {
    let identMatch,
      identBody = match.groups.identifiers;

    while ((identMatch = identBody.match(identifierAs))) {
      identBody = disposeRange(identBody, range(identMatch));
      identifiers.push(
        identMatch.groups.right
          ? [identMatch.groups.right, identMatch.groups.left]
          : identMatch.groups.left
      );
    }

    return {
      defaultIdentifier: match.groups.identifier,
      identifiers,
      match,
      path: match.groups.path,
      range: range(match),
    };
  }
};

const matchImportModule = (codeString) => {
  const match = codeString.match(RegExp(importModule));

  if (match) {
    return {
      match,
      path: match.groups.path,
      range: range(match),
    };
  }
};

module.exports = {
  matchImportAll,
  matchImportDefault,
  matchImportIdentifiers,
  matchImportModule,
};
