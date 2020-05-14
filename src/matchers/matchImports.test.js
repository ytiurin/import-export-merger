const {
  matchImportAll,
  matchImportDefault,
  matchImportIdentifiers,
  matchImportModule,
} = require("./matchImports");

test("matchImportAll", () => {
  expect(
    matchImportAll('import * as name from "../module-path"')
  ).toMatchObject({
    all: true,
    identifiers: ["name"],
    path: "../module-path",
    range: [0, 38],
  });
});

test("matchImportModule", () => {
  expect(matchImportModule("import '../module-path'")).toMatchObject({
    path: "../module-path",
    range: [0, 23],
  });
});

test("matchImportDefault", () => {
  expect(
    matchImportDefault("import name from '../module-path';")
  ).toMatchObject({
    defaultIdentifier: "name",
    path: "../module-path",
    range: [0, 34],
  });
});

test("matchImportIdentifiers", () => {
  expect(
    matchImportIdentifiers(
      "import name, { name1, import2 as name2 } from '../module-path';"
    )
  ).toMatchObject({
    defaultIdentifier: "name",
    identifiers: ["name1", ["name2", "import2"]],
    path: "../module-path",
    range: [0, 63],
  });
});
