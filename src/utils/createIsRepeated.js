const { toHashReduce } = require("./toHashReduce");
const { uniq } = require("./uniq");

const createIsRepeated = () => {
  const hashMemo = {};

  return (any) => {
    const queueHash = ((any.filter && any.filter(uniq).join()) || any)
      .toString()
      .split("")
      .reduce(...toHashReduce);

    const repeated = hashMemo[queueHash];

    hashMemo[queueHash] = true;

    return repeated;
  };
};

module.exports = { createIsRepeated };
