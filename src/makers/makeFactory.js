const { uniq } = require("../utils");
const { getModuleExternal, getModuleName } = require("./getModule");

const toPair = (any) => [].concat(any, any).slice(0, 2);

const makeFactoryArguments = ({ pathMap = {} }, index, modules) => ({
  factoryArguments: Object.values(pathMap)
    .filter(uniq)
    .map((path) => getModuleName(modules, path)),
});

const makeFactoryDestructure = ({ dependencies = {} }, index, modules) => ({
  factoryDestructure: Object.entries(dependencies).reduce(
    (result, [path, identifiers]) =>
      result.concat(
        identifiers.map((identifier) =>
          (getModuleExternal(modules, path) && identifier[1] === "default") ||
          identifier[1] === "$all"
            ? identifier[0] + " = " + getModuleName(modules, path)
            : toPair(identifier).join(
                " = " + getModuleName(modules, path) + "."
              )
        )
      ),
    []
  ),
});

const makeFactoryName = ({ name }) => ({
  factoryName: name + "Factory",
});

const makeFactoryReturnAggregates = ({ aggregates = {} }, index, modules) => ({
  factoryReturnAggregates: Object.entries(aggregates)
    .filter(([, identifiers]) => !identifiers.length)
    .map(([path]) => getModuleName(modules, path)),
});

const makeFactoryReturnIdentifiers = (
  { aggregates = {}, exports = [], reexports = {} },
  index,
  modules
) => {
  const aggregateIdentifiers = Object.entries(aggregates)
    .filter(([, identifiers]) => identifiers.length)
    .reduce(
      (result, [path, identifiers]) =>
        result.concat(
          identifiers.map(
            (identifier) => identifier + ": " + getModuleName(modules, path)
          )
        ),
      []
    );

  const exportIdentifiers = exports.map((identifiers) =>
    toPair(identifiers).join(": ")
  );

  const reexportIdentifiers = Object.entries(reexports).reduce(
    (result, [path, identifiers]) =>
      result.concat(
        identifiers.map((identifier) =>
          toPair(identifier).join(": " + getModuleName(modules, path) + ".")
        )
      ),
    []
  );

  return {
    factoryReturnIdentifiers: [].concat(
      exportIdentifiers,
      reexportIdentifiers,
      aggregateIdentifiers
    ),
  };
};

module.exports = {
  makeFactoryArguments,
  makeFactoryDestructure,
  makeFactoryName,
  makeFactoryReturnAggregates,
  makeFactoryReturnIdentifiers,
};
