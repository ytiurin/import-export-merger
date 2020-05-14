const { pipe } = require("./pipe");

const map = (...funcs) => (array) => array.map(pipe(...funcs));

module.exports = { map };
