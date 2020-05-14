const supply = (consumer, ...providers) =>
  ((accumulator) => [
    (data) => consumer(data, ...accumulator),
    ...providers.map((provider, index) =>
      typeof provider === "function"
        ? (data) => {
            accumulator[index] = provider(data);
            return data;
          }
        : provider
    ),
  ])(providers.map((provider) => provider));

module.exports = { supply };
