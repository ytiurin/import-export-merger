const { disposeRange, identity } = require("../utils/");
const {
  exportAllFrom,
  exportClass,
  exportDeclareFunction,
  exportDeclareIdentifiers,
  exportDefault,
  exportDefaultFrom,
  exportDefineFunction,
  exportDestructIdentifiers,
  exportIdentifiers,
  identifierAs,
  identifierAssign,
  identifierReassign,
} = require("./expressions");
const { range } = require("./range");

const matchExportAllFrom = (codeString) => {
  const match = codeString.match(RegExp(exportAllFrom));
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

const matchExportClass = (codeString) => {
  const match = codeString.match(RegExp(exportClass));

  if (match) {
    const isDefault = Boolean(match.groups.default);

    return {
      default: isDefault,
      identifiers: [match.groups.identifier].filter(identity),
      match,
      range: range(match, 7 + (isDefault && 8)),
    };
  }
};

const matchExportDeclareFunction = (codeString) => {
  const match = codeString.match(RegExp(exportDeclareFunction));

  if (match) {
    return {
      identifiers: [match.groups.identifier].filter(identity),
      match,
      range: range(match, 7),
    };
  }
};

const matchExportDeclareIdentifiers = (codeString) => {
  const match = codeString.match(RegExp(exportDeclareIdentifiers));

  if (match) {
    return {
      identifiers: match.groups.identifiers.match(
        RegExp(identifierAssign, "g")
      ),
      match,
      range: range(match, 7),
    };
  }
};

const matchExportDefault = (codeString) => {
  const match = codeString.match(RegExp(exportDefault));

  if (match) {
    return {
      default: true,
      match,
      range: range(match, 15),
    };
  }
};

const matchExportDefaultFrom = (codeString) => {
  const match = codeString.match(RegExp(exportDefaultFrom));

  if (match) {
    return {
      default: true,
      match,
      path: match.groups.path,
      range: range(match),
    };
  }
};

const matchExportDefineFunction = (codeString) => {
  const match = codeString.match(RegExp(exportDefineFunction));

  if (match) {
    const isDefault = Boolean(match.groups.default);

    return {
      default: isDefault,
      identifiers: [match.groups.identifier].filter(identity),
      match,
      range: range(match, 7 + (isDefault && 8)),
    };
  }
};

const matchExportDestructIdentifiers = (codeString) => {
  const match = codeString.match(RegExp(exportDestructIdentifiers));

  if (match) {
    const identifiers = [];

    let identMatch,
      identBody = match.groups.identifiers;

    while ((identMatch = identBody.match(identifierReassign))) {
      identBody = disposeRange(identBody, range(identMatch));
      identifiers.push(identMatch.groups.right || identMatch.groups.left);
    }

    return {
      identifiers,
      match,
      range: range(match, 7),
    };
  }
};

const matchExportIdentifiersFrom = (codeString) => {
  const match = codeString.match(RegExp(exportIdentifiers));

  if (match) {
    const identifiers = [];

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
      identifiers,
      match,
      path: match.groups.path,
      range: range(match),
    };
  }
};

module.exports = {
  matchExportAllFrom,
  matchExportClass,
  matchExportDeclareFunction,
  matchExportDeclareIdentifiers,
  matchExportDefault,
  matchExportDefaultFrom,
  matchExportDefineFunction,
  matchExportDestructIdentifiers,
  matchExportIdentifiersFrom,
};
