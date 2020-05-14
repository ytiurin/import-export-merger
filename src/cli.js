const OPTION_KEY_HELP = "-h";
const OPTION_KEY_HELP_LONG = "--help";
const OPTION_KEY_NAME = "-n";
const OPTION_KEY_NAME_LONG = "--name";
const OPTION_KEY_NO_UMD_LONG = "--no-umd";
const OPTION_KEY_OUTPUT = "-o";
const OPTION_KEY_OUTPUT_LONG = "--output";
const OPTION_KEY_QUITE = "-q";
const OPTION_KEY_QUITE_LONG = "--quite";
const OPTION_KEY_VERSION = "-v";
const OPTION_KEY_VERSION_LONG = "--version";

const { basename, extname, resolve } = require("path");
const { existsSync } = require("fs");
const { performance } = require("perf_hooks");

const { assertModulePath, createFileWriter, readFiles } = require("./fs");
const { clog, createCondition, map, pipe, supply } = require("./pipe");
const { compileModule } = require("./compileModule");
const { fileToModule } = require("./toModule");
const { makeModule } = require("./makeModule");
const { makeUMD, pickExternals } = require("./makers");
const { toCamelReplace } = require("./utils");

const greedyOptions = [
  OPTION_KEY_NAME_LONG,
  OPTION_KEY_NAME,
  OPTION_KEY_OUTPUT_LONG,
  OPTION_KEY_OUTPUT,
];

let userArg,
  i = process.argv.length - 1,
  argStack = [],
  userParams = {};

while ((userArg = process.argv[i--])) {
  if (userArg[0] === "-") {
    userParams[userArg] = ~greedyOptions.indexOf(userArg)
      ? argStack.pop()
      : true;
  } else {
    argStack.push(userArg);
  }
}

let userPath = argStack[0],
  entryPath;
if (userPath === "iemerger" || basename(userPath, ".js") === "iemerger") {
  try {
    entryPath = assertModulePath(process.cwd());
  } catch (e) {
    entryPath = "";
  }
} else {
  entryPath = assertModulePath(resolve(process.cwd(), userPath));
}

const showHelp =
  userParams[OPTION_KEY_HELP] || userParams[OPTION_KEY_HELP_LONG];

if (showHelp || !existsSync(entryPath)) {
  console.log(`Usage: iemerger [options] <entry_path>

Options:
  -h, --help            show this help and exit
      --no-umd          don't use UMD declaration
  -n, --name <name>     set module name in global object (window or global),
                        when used with UMD declaration
                        By default, the name is a current working folder
  -o, --output <path>   output path. Default output is <STDIN>
  -q, --quite           output only errors
  -v, --version         show release version
`);
  process.exit();
}

const showVersion =
  userParams[OPTION_KEY_VERSION] || userParams[OPTION_KEY_VERSION_LONG];

if (showVersion) {
  console.log(require("../package.json")["version"]);
  process.exit();
}

const output =
  userParams[OPTION_KEY_OUTPUT] || userParams[OPTION_KEY_OUTPUT_LONG];

const isQuite =
  !output || userParams[OPTION_KEY_QUITE] || userParams[OPTION_KEY_QUITE_LONG];

const outputPath =
  output &&
  resolve(
    process.cwd(),
    output + (extname(output) === ".js" ? "" : "/index.js")
  );

const writeFile = createFileWriter(outputPath);

const isUMD = !userParams[OPTION_KEY_NO_UMD_LONG];

const ifQuite = createCondition(() => isQuite);
const ifNotQuite = createCondition(() => !isQuite);
const ifUMD = createCondition(() => isUMD);

const cwd = process.cwd() || "";
const globalName =
  userParams[OPTION_KEY_NAME] ||
  userParams[OPTION_KEY_NAME_LONG] ||
  cwd.substring(cwd.lastIndexOf("/") + 1).replace(...toCamelReplace);

const [makeUMDBody, supplyExternals] = supply(
  makeUMD,
  pickExternals,
  globalName
);

const startTime = performance.now();

const merge = pipe(
  ifNotQuite(clog((entryPath) => `Entry file: ${entryPath}`)),
  readFiles,
  ifNotQuite(clog(({ length }) => `Files read: ${length}`)),
  map(fileToModule),
  compileModule,
  ifUMD(supplyExternals),
  makeModule,
  ifUMD(makeUMDBody),
  ifQuite((string) => process.stdout.write(string)),
  ifNotQuite(
    clog(
      () => `Merged in ${Math.round(performance.now() - startTime) / 1000}s`
    ),
    writeFile,
    clog(() => `Write output to: ${outputPath}`)
  )
);

try {
  merge(entryPath);
} catch ({ message }) {
  throw new Error(message);
}
