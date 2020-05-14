const toCamelReplace = [/\W+(\w?)/g, (match, p1) => p1.toUpperCase()];

module.exports = { toCamelReplace };
