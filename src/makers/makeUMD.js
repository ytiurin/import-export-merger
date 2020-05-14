const makeUMDBody = ({
  amdDeps,
  body,
  factoryArgs,
  globalDeps,
  globalName,
  nodeDeps,
}) => {
  return `(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([${amdDeps}], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(${nodeDeps});
  } else {
    ${globalName ? `root.${globalName} = factory(${globalDeps});` : ""}
  }
})(typeof self !== "undefined" ? self : this, function (${factoryArgs}) {
  return ${body}
});
`;
};

const makeUMD = (body, externals = [], globalName = "") =>
  makeUMDBody({
    amdDeps: externals.map(({ name }) => '"' + name + '"').join(", "),
    body,
    factoryArgs: externals.map(({ varName }) => varName).join(", "),
    globalDeps: externals.map(({ varName }) => "root." + varName).join(", "),
    globalName,
    nodeDeps: externals.map(({ name }) => 'require("' + name + '")').join(", "),
  });

const pickExternals = (modules) =>
  modules
    .filter(({ external }) => external)
    .map(({ filepath, name }) => ({ name: filepath, varName: name }));

module.exports = {
  makeUMD,
  pickExternals,
};
