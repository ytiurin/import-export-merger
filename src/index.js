module.exports = Object.assign(
  require("./compileModule"),
  require("./makeModule"),
  require("./makers/makeUMD"),
  require("./pipe"),
  require("./stripComments"),
  require("./toModule")
);
