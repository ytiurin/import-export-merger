const ALL = "\\s*\\*\\s*",
  ANY = "[^;\\n]*",
  AS = "\\s+as\\s+",
  ASSIGN = "\\s*=\\s*",
  BOI = "^",
  BRACE_CLOSE = "\\s*}\\s*",
  BRACE_OPEN = "\\s*{\\s*",
  CLASS = "\\s*class\\s*",
  COMMA = "\\s*,\\s*",
  DECLARE = "\\s*(?:let|const|var)\\s*",
  DEFAULT = "\\s*(?<default>default)\\s*",
  EOI = "$",
  EOL = "\\n",
  // ESCAPE_COMMENTS = "(?![^]*([^\\/][^\\*])*[^]*\\*\\/)",
  EXPORT = "export\\s*",
  FROM = "\\s*from\\s*",
  FUNCTION = "\\s*function\\*?\\s*",
  IMPORT = "import\\s*",
  PARENT_OPEN = "\\s*\\(\\s*",
  QUOTE = "['\"]",
  REASSIGN = "\\s*:\\s*",
  TERMINATE = "\\s*;",
  WORD = "\\w+",
  after = (...terms) => "(?=" + terms.join("") + ")",
  before = (...terms) => "(?<=" + terms.join("") + ")",
  identifier = (...terms) => "(?<identifier>" + terms.join("") + ")",
  identifiers = (...terms) => "(?<identifiers>" + terms.join("") + ")",
  join = (...terms) => terms.join(""),
  left = (...terms) => "(?<left>" + terms.join("") + ")",
  may = (...terms) => "(?:" + terms.join("") + ")*",
  oneOf = (...terms) => "(?:" + terms.join("|") + ")",
  oneOrMany = (...terms) => "(?:" + terms.join("") + ")+",
  path = (...terms) => "['\"](?<path>" + terms.join("") + ")['\"]",
  right = (...terms) => "(?<right>" + terms.join("") + ")";

// export *[ as name] from "./module-path";
// export\s*\s*\*\s*(?:\s+as\s+(?<identifier>\w+))*\s*from\s*['"](?<path>.*)['"](?:\s*;)*
const exportAllFrom = join(
  EXPORT,
  ALL,
  may(AS, identifier(WORD)),
  FROM,
  path(ANY),
  may(TERMINATE)
);

// export[ default] class ClassName
// export\s*(?:\s*(?<default>default)\s*)*\s*class\s*(?<identifier>\w+)
const exportClass = join(EXPORT, may(DEFAULT), CLASS, identifier(WORD));

// export const name = (
// export\s*\s*(?:let|const|var)\s*(?<identifier>\w+)\s*=\s*\s*\(\s*
const exportDeclareFunction = join(
  EXPORT,
  DECLARE,
  identifier(WORD),
  ASSIGN,
  PARENT_OPEN
);

// export let name1[, name2[ = variable1]];
// export\s*\s*(?:let|const|var)\s*(?<identifiers>(?:\w+(?:\s*=\s*.*)*(?:\s*,\s*)*)+)(?=(?:\s*;|\n|$))
const exportDeclareIdentifiers = join(
  EXPORT,
  DECLARE,
  identifiers(oneOrMany(WORD, may(ASSIGN, ANY), may(COMMA))),
  after(oneOf(TERMINATE, EOL, EOI))
);

// export default
// export\s*\s*(?<default>default)\s*;
const exportDefault = join(EXPORT, DEFAULT);

// export { default } from '../module-path';
// export\s*\s*{\s*\s*(?<default>default)\s*\s*}\s*\s*from\s*['"](?<path>.*)['"](?:\s*;)*
const exportDefaultFrom = join(
  EXPORT,
  BRACE_OPEN,
  DEFAULT,
  BRACE_CLOSE,
  FROM,
  path(ANY),
  may(TERMINATE)
);

// export[ default] function[ name](
// export\s*(?:\s*(?<default>default)\s*)*\s*function\**\s*(?:(?<identifier>\w+))*\s*\(\s*
const exportDefineFunction = join(
  EXPORT,
  may(DEFAULT),
  FUNCTION,
  may(identifier(WORD)),
  PARENT_OPEN
);

// export const { name1[, name2[ : variable1]] } = variable0;
// export\s*\s*(?:let|const|var)\s*\s*{\s*(?<identifiers>(?:\w+(?:(?:\s*:\s*\w+)*)*(?:\s*,\s*)*)+)\s*}\s*\s*=\s*
const exportDestructIdentifiers = join(
  EXPORT,
  DECLARE,
  BRACE_OPEN,
  identifiers(oneOrMany(WORD, may(REASSIGN, WORD), may(COMMA))),
  BRACE_CLOSE,
  ASSIGN
);

// export { name1[, import2[ as name2]] }[ from './module-path']
// export\s*\s*{\s*(?<identifiers>(?:\w+(?:\s+as\s+\w+)*(?:\s*,\s*)*)+)\s*}\s*(?:\s*from\s*['"](?<path>.*)['"])*(?:\s*;)*
const exportIdentifiers = join(
  EXPORT,
  BRACE_OPEN,
  identifiers(oneOrMany(WORD, may(AS, WORD), may(COMMA))),
  BRACE_CLOSE,
  may(FROM, path(ANY)),
  may(TERMINATE)
);

// name1, import2 as name2, name3
// (?<left>\w+)(?:\s+as\s+(?<right>\w+))*(?:\s*,\s*)*
const identifierAs = join(left(WORD), may(AS, right(WORD)), may(COMMA));

// name1, name2 = variable2, name3;
// (?<=(?:^|\s*,\s*))(?<identifier>\w+)(?=(?:\s*=\s*|\s*,\s*|\s*;|$))
const identifierAssign = join(
  before(oneOf(BOI, COMMA)),
  identifier(WORD),
  after(oneOf(ASSIGN, COMMA, TERMINATE, EOI))
);

// name1, name0: name2, name3
// (?<left>\w+)(?:\s+as\s+(?<right>\w+))*(?:\s*,\s*)*
const identifierReassign = join(
  left(WORD),
  may(REASSIGN, right(WORD)),
  may(COMMA)
);

// import *[ as name] from "./module-path";
// import\s*\s*\*\s*(?:\s+as\s+(?<identifier>\w+))*\s*from\s*['"](?<path>.*)['"](?:\s*;)*
const importAll = join(
  IMPORT,
  ALL,
  may(AS, identifier(WORD)),
  FROM,
  path(ANY),
  may(TERMINATE)
);

// import name from './module-path'[;]
// import\s*(?<identifier>\w+)\s*from\s*['"](?<path>.*)['"](?:\s*;)*
const importDefault = join(
  IMPORT,
  identifier(WORD),
  FROM,
  path(ANY),
  may(TERMINATE)
);

// import [defaultExport, ]{ name1[, import2[ as name2]] } from './module-path'[;]
// import\s*(?:(?<identifier>\w+)\s*,\s*)*\s*{\s*(?<identifiers>(?:\w+(?:\s+as\s+\w+)*(?:\s*,\s*)*)+)\s*}\s*\s*from\s*['"](?<path>.*)['"](?:\s*;)*
const importIdentifiers = join(
  IMPORT,
  may(identifier(WORD), COMMA),
  BRACE_OPEN,
  identifiers(oneOrMany(WORD, may(AS, WORD), may(COMMA))),
  BRACE_CLOSE,
  FROM,
  path(ANY),
  may(TERMINATE)
);

// import './module-path';
// import\s*['"](?<path>.*)['"](?:\s*;)*
const importModule = join(IMPORT, path(ANY), may(TERMINATE));

// from[ import] './module-path';
// (?<=(?:\s*from\s*|import\s*)['"]).*(?=['"])
const fromPath = join(before(oneOf(FROM, IMPORT), QUOTE), ANY, after(QUOTE));

module.exports = {
  exportAllFrom,
  exportClass,
  exportDeclareFunction,
  exportDeclareIdentifiers,
  exportDefault,
  exportDefaultFrom,
  exportDefineFunction,
  exportDestructIdentifiers,
  exportIdentifiers,
  fromPath,
  identifierAs,
  identifierAssign,
  identifierReassign,
  importAll,
  importDefault,
  importIdentifiers,
  importModule,
};
