const getModuleExternal = (modules, path) =>
  (modules.find(({ filepath }) => filepath === path) || {}).external;

const getModuleName = (modules, path) =>
  (modules.find(({ filepath }) => filepath === path) || {}).name;

module.exports = { getModuleExternal, getModuleName };
