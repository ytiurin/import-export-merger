const range = (match, length) => [
  match.index,
  match.index + (length || match[0].length),
];

module.exports = { range };
