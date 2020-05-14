const { dirname } = require("path");
const { mkdirSync, writeFileSync } = require("fs");

const createFileWriter = (filepath) => (output) => {
  mkdirSync(dirname(filepath), { recursive: true });

  writeFileSync(filepath, output, { encoding: "utf8" });
};

module.exports = { createFileWriter };
