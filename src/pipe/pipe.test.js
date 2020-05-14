const { pipe } = require("./pipe");

const identity = (a) => a;
const increment = (a) => (a >> 0) + 1;
const sum = (a, b) => a + b;

test("Empty arguments should not throw an error", () => {
  expect(() => pipe()).not.toThrow();
});

test("Argument should only be a function", () => {
  expect(() => pipe(1)).toThrow();
});

test("Should return function", () => {
  expect(typeof pipe()).toBe("function");
});

test("Zero arguments should return undefined", () => {
  expect(pipe()()).toBeUndefined();
});

test("Should return result of the first function", () => {
  expect(pipe(() => 1)()).toBe(1);
});

test("Should return the passed argument through identity", () => {
  expect(pipe(identity)(1)).toBe(1);
});

test("Should return the passed argument through multiple identities", () => {
  expect(pipe(identity, identity)(1)).toBe(1);
});

test("Should return correct value of increment", () => {
  expect(pipe(increment)(0)).toBe(1);
});

test("Should return correct value of multiple increments", () => {
  expect(pipe(increment, increment)(0)).toBe(2);
});

test("First function should return right number of arguments", () => {
  expect(pipe(sum)(1, 2)).toBe(3);
});
