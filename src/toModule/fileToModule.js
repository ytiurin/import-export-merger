const fileToModule = ({ body, external, filepath, froms, paths }) => ({
  body,
  external,
  filepath,
  pathMap: (froms || []).reduce(
    (pathMap, from, index) => Object.assign(pathMap, { [from]: paths[index] }),
    {}
  ),
});
module.exports = { fileToModule };
