function pipe() {
  try {
    var functionQueue = validateFunctions(arguments);
  } catch (e) {
    throw new Error(e.message);
  }

  return function () {
    if (!functionQueue[0]) {
      return;
    }

    var contextArgs = Array.prototype.slice.call(arguments, 1),
      cursor = 1,
      nextFunction,
      result = functionQueue[0].apply(this, arguments);

    while ((nextFunction = functionQueue[cursor++])) {
      result = nextFunction.apply(this, [result].concat(contextArgs));
    }

    return result;
  };
}

function validateFunctions(userArgs) {
  try {
    return Array.prototype.map.call(userArgs, (fn, index) => {
      var type = typeof fn;

      if (type !== "function") {
        throw {
          index: index,
          type: type,
        };
      }

      return fn;
    });
  } catch (params) {
    throw new Error(
      "pipe argument " +
        params.index +
        ": expected a function, but got a " +
        params.type
    );
  }
}

module.exports = {
  pipe,
  validateFunctions,
};
