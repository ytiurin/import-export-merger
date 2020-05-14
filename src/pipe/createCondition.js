const { pipe } = require("./pipe");

const createCondition = (condFn) => (...funcs) => (data) =>
  condFn(data) ? pipe(...funcs)(data) : data;

module.exports = { createCondition };
