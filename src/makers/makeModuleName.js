const { toCamelReplace } = require("../utils");

const createMakeModuleName = () => {
  const used = {};

  return ({ external, filepath }) => {
    if (external) {
      return { name: filepath.replace(...toCamelReplace) };
    }

    try {
      const dirs = filepath.split("/").reverse().slice(1, 3);

      const {
        groups: { filename },
      } = filepath.match(/(?<=^|\/)(?<filename>[^/.]+)(?=\.|$)/);

      let name = filename.replace(...toCamelReplace);
      while (used[name]) {
        let prefix = dirs.shift();
        if (!prefix) {
          break;
        }
        name = (prefix + "/" + name).replace(...toCamelReplace);
      }

      if (used[name]) {
        let n = 2;
        while (used[name + n]) {
          n++;
        }
        name += n;
      }

      used[name] = true;

      return { name };
    } catch (e) {
      throw new Error(`Could not make name of filepath ${filepath}`);
    }
  };
};

module.exports = { createMakeModuleName };
