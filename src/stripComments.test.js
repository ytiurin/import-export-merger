const { stripComments } = require("./stripComments");

test("Strip comments", () => {
  expect(
    stripComments(`
// hello
// hello
/*
  hello
*/
  hi
/*
  hello
*/
`)
  ).toBe("hi");
});
