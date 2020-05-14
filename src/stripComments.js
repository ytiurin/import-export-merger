const stripComments = (str) =>
  str
    .replace(/\/\*[^]*?\*\//g, "")
    .replace(/\/\/.*/g, "")
    .trim();

module.exports = { stripComments };
