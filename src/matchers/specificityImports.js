const {
  matchImportAll,
  matchImportDefault,
  matchImportIdentifiers,
  matchImportModule,
} = require("./matchImports");

const specificityImports = [
  matchImportAll,
  matchImportIdentifiers,
  matchImportDefault,
  matchImportModule,
];

module.exports = { specificityImports };
