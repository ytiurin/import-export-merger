const { validateFunctions } = require("./pipe");

function extend() {
  try {
    var functionQueue = validateFunctions(arguments);
  } catch ({ message }) {
    throw new Error(message);
  }

  return function () {
    const accumulator = arguments[0];
    const restArgs = Array.prototype.slice.call(arguments, 1);

    return functionQueue.reduce(
      (nextAccum, nextFunction) =>
        Object.assign(
          nextAccum,
          nextFunction.apply(this, [nextAccum].concat(restArgs))
        ),
      accumulator
    );
  };
}

module.exports = { extend };
