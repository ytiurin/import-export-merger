const {
  matchExportAllFrom,
  matchExportClass,
  matchExportDeclareFunction,
  matchExportDeclareIdentifiers,
  matchExportDefault,
  matchExportDefaultFrom,
  matchExportDefineFunction,
  matchExportDestructIdentifiers,
  matchExportIdentifiersFrom,
} = require("./matchExports");

test("matchExportAllFrom", () => {
  expect(
    matchExportAllFrom('export * as name from "../module-path"')
  ).toMatchObject({
    all: true,
    identifiers: ["name"],
    path: "../module-path",
    range: [0, 38],
  });
});

test("matchExportClass", () => {
  expect(matchExportClass("export default class ClassName")).toMatchObject({
    default: true,
    identifiers: ["ClassName"],
    range: [0, 15],
  });
});

test("matchExportDeclareFunction", () => {
  expect(matchExportDeclareFunction("export const name = (")).toMatchObject({
    identifiers: ["name"],
    range: [0, 7],
  });
});

test("matchExportDeclareIdentifiers", () => {
  expect(
    matchExportDeclareIdentifiers("export let name1, name2 = variable1;")
  ).toMatchObject({
    identifiers: ["name1", "name2"],
    range: [0, 7],
  });
});

test("matchExportDefault", () => {
  expect(matchExportDefault("export default expression;")).toMatchObject({
    default: true,
    range: [0, 15],
  });
});

test("matchExportDefaultFrom", () => {
  expect(
    matchExportDefaultFrom("export { default } from './module-path';")
  ).toMatchObject({
    default: true,
    path: "./module-path",
    range: [0, 40],
  });
});

test("matchExportDefineFunction", () => {
  expect(matchExportDefineFunction("export function name (")).toMatchObject({
    identifiers: ["name"],
    range: [0, 7],
  });

  expect(matchExportDefineFunction("export default function (")).toMatchObject({
    default: true,
    range: [0, 15],
  });
});

test("matchExportDestructIdentifiers", () => {
  expect(
    matchExportDestructIdentifiers(
      "export const { name1, property2: name2, name3 } = variable"
    )
  ).toMatchObject({
    identifiers: ["name1", "name2", "name3"],
    range: [0, 7],
  });
});

test("matchExportIdentifiersFrom", () => {
  expect(
    matchExportIdentifiersFrom(
      "export { name1, import2 as name2 } from '../module-path'"
    )
  ).toMatchObject({
    identifiers: ["name1", ["name2", "import2"]],
    path: "../module-path",
    range: [0, 56],
  });
});
