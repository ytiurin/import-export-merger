import "codemirror/mode/javascript/javascript.js";
import "codemirror/lib/codemirror.css";

import CodeMirror from "codemirror";
import { format } from "prettier/standalone";
import parser from "prettier/parser-babel";

import {
  compileModule,
  createCondition,
  makeModule,
  makeUMD,
  pickExternals,
  pipe,
  rawToModule,
  stripComments,
  supply,
} from "import-export-merger";

import "./style.css";

const initSources = [
  [
    "./index",
    `import { a } from './moduleA';

export * from './moduleB';
`,
  ],
  [
    "./moduleA",
    `import 'external';

export const a = 1;
`,
  ],
  [
    "./moduleB",
    `import { a } from './moduleA';

const b = () => a + 1;

export default b;
`,
  ],
];

let isUMD = false;

const ifUMD = createCondition(() => isUMD);
const [makeUMDBody, supplyExternals] = supply(
  makeUMD,
  pickExternals,
  "myLibrary"
);

const merge = pipe(
  rawToModule,
  compileModule,
  ifUMD(supplyExternals),
  makeModule,
  ifUMD(makeUMDBody)
);

document.body.innerHTML = `
<div class="layout">
  <h1>import-export-merger</h1>
  <p>Merge javascript files with imports/exports into one function. <a href="https://github.com/ytiurin/import-export-merger" target="_blank">Source on github</a>.</p>
  <div class="all-panels">
    <div class="left-column">
      <div class="source-editors"></div>
      <div class="add-button">
        <button id="add-editor">+ Add module</button>
      </div>
    </div>
    <div class="right-column">
      <div class="editor-header">
        Merged code
        <input type="checkbox" id="umd" />
        <label for="umd">
          add
          <abbr title="Universal Module Definition">UMD</abbr>
        </label>
      </div>
      <div class="error-panel"></div>
    </div>
  </div>
</div>
`;

const createSourceEditor = (header, value) => {
  const isIndex = header == "./index";

  const element = document.createElement("div");
  element.innerHTML = `<div class='editor-header'>
  ${(!isIndex && `<button title="Delete module">-</button>`) || ""}
  ${header}
</div>`;
  elSourceEditors.appendChild(element);

  const editor = CodeMirror(element, {
    value,
    mode: "javascript",
  });

  let destroyOuter;
  const destroy = (userDestroy) => {
    if (userDestroy) {
      destroyOuter = userDestroy;
      return;
    }
    editor.setOption("mode", "text/x-csrc");
    editor
      .getWrapperElement()
      .parentNode.removeChild(editor.getWrapperElement());
    element.parentNode.removeChild(element);
    destroyOuter && destroyOuter();
  };

  if (!isIndex) {
    element.getElementsByTagName("button")[0].addEventListener("click", () => {
      destroy();
      onEditorChange();
    });
  }

  return [editor, destroy];
};

const elSourceEditors = document.getElementsByClassName("source-editors")[0];

const onEditorChange = () => {
  let merged = merge(
    sourceEditors.map(({ editor, filepath }) => ({
      body: stripComments(editor.getValue()),
      filepath,
    }))
  );

  try {
    merged = format(merged, {
      parser: "babel",
      plugins: [parser],
    });

    showError();
  } catch (e) {
    showError(e);
  }

  destEditor.setValue(merged);
};

const addSourceEditor = ([filepath, body]) => {
  const [editor, destroy] = createSourceEditor(filepath, body);
  editor.on("change", onEditorChange);
  const editorItem = { editor, destroy, filepath };
  destroy(() => {
    sourceEditors.splice(sourceEditors.indexOf(editorItem), 1);
  });
  return editorItem;
};

const sourceEditors = initSources.map(addSourceEditor);

const destEditor = CodeMirror(
  document.getElementsByClassName("right-column")[0],
  {
    mode: "javascript",
  }
);

onEditorChange();

const letter = ((n = 0) => ({
  next: () => "CDEFGHIJKLMNOPQRSTUVWXYZ"[n++] || n + 2,
}))();

document.getElementById("add-editor").addEventListener("click", () => {
  if (sourceEditors.length > 40) {
    return;
  }
  const moduleName = "./module" + letter.next();
  sourceEditors.push(addSourceEditor([moduleName, "// " + moduleName]));
  onEditorChange();
});

function showError(e) {
  const el = document.getElementsByClassName("error-panel")[0];
  if (e) {
    el.classList.add("error");
    el.innerHTML = e.message;
  } else {
    el.classList.remove("error");
  }
}

document
  .getElementById("umd")
  .addEventListener("change", ({ target: { checked } }) => {
    isUMD = checked;
    onEditorChange();
  });
