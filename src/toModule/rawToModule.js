const { createIndexOf, createIsRepeated, uniq } = require("../utils");
const { fromPath } = require("../matchers/expressions");

const rawToModule = (raws) => {
  const result = [],
    isRepeated = createIsRepeated();

  const rawMap = Object.fromEntries(
    raws.map(({ body, filepath }) => [filepath, body])
  );

  let queue = [raws[0].filepath],
    filepath,
    finishRead = false;

  while ((filepath = queue.shift())) {
    const indexOfFile = result.reduce(
      ...createIndexOf(({ filepath: path }) => filepath === path)
    );

    if (~indexOfFile) {
      result.splice(indexOfFile, 1);
    }

    const body = rawMap[filepath];

    if (!body) {
      result.push({ external: true, filepath });
      continue;
    }

    const froms = (body.match(new RegExp(fromPath, "g")) || []).filter(uniq);

    const pathMap = Object.fromEntries(froms.map((from) => [from, from]));

    result.push({
      body,
      external: false,
      filepath,
      pathMap,
    });

    if (finishRead) {
      continue;
    }

    queue = queue.concat(froms);
    finishRead = isRepeated(queue);
  }

  return result;
};

module.exports = { rawToModule };
