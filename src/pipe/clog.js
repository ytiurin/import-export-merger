function clog() {
  if (typeof arguments[0] === "function") {
    var formatFn = arguments[0];

    return function () {
      console.log(formatFn.apply(void 0, arguments));

      return arguments[0];
    };
  } else {
    console.log.apply(
      void 0,
      Array.prototype.map.call(arguments, (arg) =>
        arg.charAt ? arg : JSON.stringify(arg, null, 2)
      )
    );

    return arguments[0];
  }
}

module.exports = { clog };
