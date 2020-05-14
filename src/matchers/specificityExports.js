const {
  matchExportAllFrom,
  matchExportClass,
  matchExportDeclareFunction,
  matchExportDeclareIdentifiers,
  matchExportDefault,
  // matchExportDefaultFrom,
  matchExportDefineFunction,
  matchExportDestructIdentifiers,
  matchExportIdentifiersFrom,
} = require("./matchExports");

const specificityExports = [
  // matchExportDefaultFrom,
  matchExportDefineFunction,
  matchExportDeclareFunction,
  matchExportDestructIdentifiers,
  matchExportDeclareIdentifiers,
  matchExportIdentifiersFrom,
  matchExportClass,
  matchExportAllFrom,
  matchExportDefault,
];

module.exports = { specificityExports };
