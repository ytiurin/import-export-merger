const disposeRange = (string, [from, to], insertText = "") =>
  string.slice(0, from).concat(insertText + string.slice(to));

module.exports = { disposeRange };
