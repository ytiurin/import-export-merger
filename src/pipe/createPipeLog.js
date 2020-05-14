const { openSync, writeSync } = require("fs");

const createPipeLog = (fn) => {
  const fd = openSync(fn, "w");
  const n = {};

  return (data, fnName) => {
    if (!n[fnName]) {
      n[fnName] = 1;
    }

    const header = `${fnName} ${n[fnName] && n[fnName]++}\n`;
    const underscore = "-".repeat(header.length) + "\n";
    writeSync(fd, underscore + header + underscore);
    writeSync(fd, JSON.stringify(data, null, 2) + "\n\n");
  };
};

module.exports = { createPipeLog };
