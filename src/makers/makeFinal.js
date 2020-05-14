const { uniq } = require("../utils/");
const { getModuleExternal, getModuleName } = require("./getModule");

const makeFactoryBody = ({ args, body, destructures, name, returnValue }) =>
  `function ${name}(${args}) {
${destructures}
${body}
return ${returnValue}
}`;

const makeModuleFactory = ({
  destBody,
  factoryArguments,
  factoryDestructure,
  factoryName,
  factoryReturnAggregates,
  factoryReturnIdentifiers,
}) =>
  makeFactoryBody({
    args: factoryArguments.join(", "),
    body: destBody,
    destructures: factoryDestructure.length
      ? "var " + factoryDestructure.join(", ") + ";"
      : "",
    name: factoryName,
    returnValue: !factoryReturnAggregates.length
      ? "{ " + factoryReturnIdentifiers.join(", ") + " }"
      : "Object.assign({ " +
        factoryReturnIdentifiers.join(", ") +
        " }, " +
        factoryReturnAggregates.join(", ") +
        ");",
  });

const makeFinalBody = ({
  factoriesBodies,
  factoriesCalls,
  factoriesNames,
  mainCall,
}) => `(function(${factoriesNames}) {
${factoriesCalls}
return ${mainCall};
})(
${factoriesBodies}
);
`;

const makeFinal = (modules) =>
  makeFinalBody({
    factoriesBodies: modules
      .map((module) =>
        module.external ? module.name : makeModuleFactory(module)
      )
      .join(",\n"),
    factoriesCalls: modules
      .slice(1)
      .filter(({ external }) => !external)
      .reverse()
      .map(
        ({ name, pathMap = [] }) =>
          "var " +
          name +
          "Exports = " +
          name +
          "Factory(" +
          Object.values(pathMap)
            .filter(uniq)
            .map(
              (path) =>
                getModuleName(modules, path) +
                (getModuleExternal(modules, path) ? "" : "Exports")
            )
            .join(", ") +
          ");"
      )
      .join("\n"),
    factoriesNames: modules
      .map(({ name, external }) => name + (external ? "" : "Factory"))
      .join(", "),
    mainCall:
      modules[0].name +
      "Factory(" +
      Object.values(modules[0].pathMap)
        .filter(uniq)
        .map(
          (path) =>
            getModuleName(modules, path) +
            (getModuleExternal(modules, path) ? "" : "Exports")
        )
        .join(", ") +
      ")",
  });

module.exports = { makeFinal };
