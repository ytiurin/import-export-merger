const { pipe } = require("./pipe");

function addMiddleware(middleFn) {
  var _pipe = pipe;

  return function pipe() {
    return _pipe.apply(
      void 0,
      Array.prototype.reduce.call(
        arguments,
        (newArgs, userFn) =>
          newArgs.concat([userFn, createMiddleware(middleFn, userFn.name)]),
        []
      )
    );
  };
}

function createMiddleware(middleFn, fnName) {
  return function (data) {
    middleFn.call(void 0, data, fnName);

    return data;
  };
}

module.exports = { addMiddleware };
