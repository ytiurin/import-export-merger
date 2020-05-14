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
  fromPath,
  identifierAs,
  identifierAssign,
  identifierReassign,
  importAll,
  importDefault,
  importIdentifiers,
  importModule,
} = require("./expressions");

test("exportAllFrom", () => {
  const match = "export * as name from './module-path';".match(
    RegExp(exportAllFrom)
  );
  expect(match.groups).toMatchObject({
    identifier: "name",
    path: "./module-path",
  });
});

test("exportClass", () => {
  const match = "export default class ClassName".match(RegExp(exportClass));
  expect(match.groups).toMatchObject({
    default: "default",
    identifier: "ClassName",
  });
});

test("exportDeclareFunction", () => {
  const match = "export const name = () => {}".match(
    RegExp(exportDeclareFunction)
  );
  expect(match.groups).toMatchObject({
    identifier: "name",
  });
});

test("exportDeclareIdentifiers 1", () => {
  const match = "export let name1, name2 = variable1;".match(
    RegExp(exportDeclareIdentifiers)
  );
  expect(match.groups).toMatchObject({
    identifiers: "name1, name2 = variable1",
  });
});

test("exportDeclareIdentifiers 2", () => {
  const match = `export const a =
typeof x !== 'undefined' &&
typeof x.y !== 'undefined' &&
typeof x.y.z !== 'undefined'
  ? b
  : c
`.match(RegExp(exportDeclareIdentifiers));
  expect(match.groups).toMatchObject({
    identifiers: `a =
typeof x !== 'undefined' &&`,
  });
});

test("exportDefault", () => {
  const match = "export default expression;".match(RegExp(exportDefault));
  expect(match[0]).toBe("export default ");
});

test("exportDefaultFrom", () => {
  const match = "export { default } from './module-path';".match(
    RegExp(exportDefaultFrom)
  );
  expect(match.groups).toMatchObject({
    default: "default",
    path: "./module-path",
  });
});

test("exportDefineFunction", () => {
  const match = "export default function name() {}".match(
    RegExp(exportDefineFunction)
  );
  expect(match.groups).toMatchObject({
    default: "default",
    identifier: "name",
  });
});

test("exportDestructIdentifiers", () => {
  const match = `export const { name1, name2: variable2, name3 } = variable0`.match(
    RegExp(exportDestructIdentifiers)
  );
  expect(match.groups).toMatchObject({
    identifiers: "name1, name2: variable2, name3",
  });
});

test("exportIdentifiers", () => {
  const match = "export { name1, import2 as name2 } from './module-path';".match(
    RegExp(exportIdentifiers)
  );
  expect(match.groups).toMatchObject({
    identifiers: "name1, import2 as name2",
    path: "./module-path",
  });
});

test("identifierAs 1", () => {
  const match = "name".match(RegExp(identifierAs));
  expect(match.groups).toMatchObject({ left: "name", right: void 0 });
});

test("identifierAs 2", () => {
  const match = "import1 as name1".match(RegExp(identifierAs));
  expect(match.groups).toMatchObject({ left: "import1", right: "name1" });
});

test("identifierAssign", () => {
  const match = "name1 = 1, name2 = variable1, name3".match(
    RegExp(identifierAssign, "g")
  );
  expect(match).toMatchObject(["name1", "name2", "name3"]);
});

test("identifierReassign", () => {
  const match = "property: name".match(RegExp(identifierReassign));
  expect(match.groups).toMatchObject({ left: "property", right: "name" });
});

test("importAll", () => {
  const match = "import * as name from './module-path';".match(
    RegExp(importAll)
  );
  expect(match.groups).toMatchObject({
    identifier: "name",
    path: "./module-path",
  });
});

test("importDefault", () => {
  const match = "import name from './module-path';".match(
    RegExp(importDefault)
  );
  expect(match.groups).toMatchObject({
    identifier: "name",
    path: "./module-path",
  });
});

test("importIdentifiers", () => {
  const match = "import name, { name1, name2 } from './module-path';".match(
    RegExp(importIdentifiers)
  );
  expect(match.groups).toMatchObject({
    identifier: "name",
    identifiers: "name1, name2",
    path: "./module-path",
  });
});

test("identifierAssign", () => {
  const match = `export * from './module-path1';
import './module-path2';
`.match(RegExp(fromPath, "g"));
  expect(match).toMatchObject(["./module-path1", "./module-path2"]);
});
