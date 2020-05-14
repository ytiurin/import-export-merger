const { createCondition, extend, map, pipe, side } = require("./pipe");
const { extractExports } = require("./extractExports");
const { extractImports } = require("./extractImports");
const { createMakeModuleName } = require("./makers");

const ifNotExternal = createCondition(({ external }) => !external);
let makeModuleName = createMakeModuleName();

const compileModule = pipe(
  map(
    ifNotExternal(extend(extractExports, extractImports)),
    extend((module) => makeModuleName(module))
  ),
  side(() => {
    makeModuleName = createMakeModuleName();
  })
);

module.exports = { compileModule };
