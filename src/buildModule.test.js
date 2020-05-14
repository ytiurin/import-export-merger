const { compileModule } = require("./compileModule");
const { makeModule } = require("./makeModule");
const { pipe } = require("./pipe");

const buildModule = pipe(compileModule, makeModule);

test("export const a = 1, b = x;", () => {
  const moduleBody = buildModule([
    {
      body: "const x = 2; export const a = 1, b = x;",
      filepath: "a",
      pathMap: {},
    },
  ]);
  expect(eval(moduleBody)).toEqual({ a: 1, b: 2 });
});

test('export * as c from "b";', () => {
  const moduleBody = buildModule([
    {
      body: "export * as c from 'b';",
      filepath: "a",
      pathMap: { b: "b" },
    },
    {
      body: "export const a = 1, b = 2;",
      filepath: "b",
      pathMap: {},
    },
  ]);
  expect(eval(moduleBody)).toEqual({ c: { a: 1, b: 2 } });
});

test('export { a, b as c } from "b";', () => {
  const moduleBody = buildModule([
    {
      body: 'export { a, b as c } from "b";',
      filepath: "a",
      pathMap: { b: "b" },
    },
    {
      body: "export const a = 1, b = 2;",
      filepath: "b",
      pathMap: {},
    },
  ]);
  expect(eval(moduleBody)).toEqual({ a: 1, c: 2 });
});

test("export const a = () => {};", () => {
  const moduleBody = buildModule([
    {
      body: "export const a = () => {};",
      filepath: "a",
      pathMap: {},
    },
  ]);
  expect(eval(moduleBody)).toEqual({ a: expect.any(Function) });
});

test("export default name;", () => {
  const moduleBody = buildModule([
    {
      body: "const a = 1; export default a",
      filepath: "a",
      pathMap: {},
    },
  ]);
  expect(eval(moduleBody)).toEqual({ default: 1 });
});

test('import { a, b as c } from "b";', () => {
  const moduleBody = buildModule([
    {
      body: 'import { a, b as c } from "b"; export { a, c };',
      filepath: "a",
      pathMap: { b: "b" },
    },
    {
      body: "export const a = 1, b = 2;",
      filepath: "b",
      pathMap: {},
    },
  ]);
  expect(eval(moduleBody)).toEqual({ a: 1, c: 2 });
});
