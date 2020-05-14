const createIndexOf = (fn) => [
  (result, item, index) => (fn(item) ? index : result),
  -1,
];

module.exports = { createIndexOf };
