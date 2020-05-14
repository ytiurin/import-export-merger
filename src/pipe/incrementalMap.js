const createOmitRepeated = () => {
  const memo = [];

  return (any) => {
    if (!~memo.indexOf(any)) {
      memo.push(any);

      return true;
    }
  };
};

const incrementalMap = (mapFn) => (initialValue) => {
  const omitRepeated = createOmitRepeated(),
    result = [];

  let queue = [].concat(initialValue);

  const tailFn = (tail, compareFn) => {
    const filterFn = compareFn
      ? (newItem) => queue.every((compItem) => compareFn(compItem, newItem))
      : omitRepeated;

    queue = queue.concat(tail.filter(filterFn));
  };

  let item,
    index = 0;
  while ((item = queue.shift())) {
    result.push(mapFn(tailFn, item, index++, initialValue));
  }

  return result;
};

module.exports = { incrementalMap };
