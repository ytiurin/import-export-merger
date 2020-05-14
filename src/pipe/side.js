const side = (fn) => (arg) => void fn(arg) || arg;

module.exports = { side };
