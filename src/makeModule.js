const { extend, map, pipe } = require("./pipe");

const {
  makeFactoryArguments,
  makeFactoryDestructure,
  makeFactoryName,
  makeFactoryReturnAggregates,
  makeFactoryReturnIdentifiers,
  makeFinal,
} = require("./makers");

const makeModule = pipe(
  map(
    extend(
      makeFactoryName,
      makeFactoryArguments,
      makeFactoryDestructure,
      makeFactoryReturnAggregates,
      makeFactoryReturnIdentifiers
    )
  ),
  makeFinal
);

module.exports = { makeModule };
