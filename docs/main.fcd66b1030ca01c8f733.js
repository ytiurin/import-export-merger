(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/FHB":function(t,e,r){"use strict";t.exports={fileToModule:function(t){var e=t.body,r=t.external,n=t.filepath,o=t.froms,i=t.paths;return{body:e,external:r,filepath:n,pathMap:(o||[]).reduce((function(t,e,r){return Object.assign(t,(n={},o=e,a=i[r],o in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a,n));var n,o,a}),{})}}}},"/skv":function(t,e,r){"use strict";var n=r("ET/h").pipe;function o(t,e){return function(r){return t.call(void 0,r,e),r}}t.exports={addMiddleware:function(t){var e=n;return function(){return e.apply(void 0,Array.prototype.reduce.call(arguments,(function(e,r){return e.concat([r,o(t,r.name)])}),[]))}}}},"2v7z":function(t,e,r){"use strict";t.exports={range:function(t,e){return[t.index,t.index+(e||t[0].length)]}}},"5Vpr":function(t,e,r){"use strict";t.exports={side:function(t){return function(e){return void t(e)||e}}}},"8i1p":function(t,e,r){"use strict";var n=r("usie"),o=n.matchExportAllFrom,i=n.matchExportClass,a=n.matchExportDeclareFunction,u=n.matchExportDeclareIdentifiers,c=n.matchExportDefault,f=[n.matchExportDefineFunction,a,n.matchExportDestructIdentifiers,u,n.matchExportIdentifiersFrom,i,o,c];t.exports={specificityExports:f}},"8oZC":function(t,e,r){"use strict";var n=function(t){var e=t.amdDeps,r=t.body,n=t.factoryArgs,o=t.globalDeps,i=t.globalName,a=t.nodeDeps;return'(function (root, factory) {\n  if (typeof define === "function" && define.amd) {\n    define(['.concat(e,'], factory);\n  } else if (typeof module === "object" && module.exports) {\n    module.exports = factory(').concat(a,");\n  } else {\n    ").concat(i?"root.".concat(i," = factory(").concat(o,");"):"",'\n  }\n})(typeof self !== "undefined" ? self : this, function (').concat(n,") {\n  return ").concat(r,"\n});\n")};t.exports={makeUMD:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return n({amdDeps:e.map((function(t){return'"'+t.name+'"'})).join(", "),body:t,factoryArgs:e.map((function(t){return t.varName})).join(", "),globalDeps:e.map((function(t){return"root."+t.varName})).join(", "),globalName:r,nodeDeps:e.map((function(t){return'require("'+t.name+'")'})).join(", ")})},pickExternals:function(t){return t.filter((function(t){return t.external})).map((function(t){return{name:t.filepath,varName:t.name}}))}}},"93I3":function(t,e,r){"use strict";function n(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var i=r("zbNc").toHashReduce,a=r("J2Kw").uniq;t.exports={createIsRepeated:function(){var t={};return function(e){var r,o=(r=(e.filter&&e.filter(a).join()||e).toString().split("")).reduce.apply(r,n(i)),u=t[o];return t[o]=!0,u}}}},CP4k:function(t,e,r){"use strict";t.exports={getModuleExternal:function(t,e){return(t.find((function(t){return t.filepath===e}))||{}).external},getModuleName:function(t,e){return(t.find((function(t){return t.filepath===e}))||{}).name}}},CgBI:function(t,e,r){"use strict";var n=r("s7Oi"),o=n.createCondition,i=n.extend,a=n.map,u=n.pipe,c=n.side,f=r("dYqI").extractExports,s=r("IFWm").extractImports,l=r("Qqj3").createMakeModuleName,p=o((function(t){return!t.external})),d=l(),m=u(a(p(i(f,s)),i((function(t){return d(t)}))),c((function(){d=l()})));t.exports={compileModule:m}},"ET/h":function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){try{return Array.prototype.map.call(t,(function(t,e){var r=n(t);if("function"!==r)throw{index:e,type:r};return t}))}catch(t){throw new Error("pipe argument "+t.index+": expected a function, but got a "+t.type)}}t.exports={pipe:function(){try{var t=o(arguments)}catch(t){throw new Error(t.message)}return function(){if(t[0]){for(var e,r=Array.prototype.slice.call(arguments,1),n=1,o=t[0].apply(this,arguments);e=t[n++];)o=e.apply(this,[o].concat(r));return o}}},validateFunctions:o}},IFWm:function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=r("c2qy").specificityImports,c=r("PA6C").createMatchRegExp,f=r("w21e").disposeRange;t.exports={extractImports:function(t){for(var e,r=t.destBody,n=t.pathMap,i=a(t,["destBody","pathMap"]),s={},l=c(u);e=l(r);){var p=[],d=[];r=f(r,e.range).trim();var m=n[e.path]||e.path;e.identifiers&&e.identifiers.length&&(d=e.identifiers,e.all&&(d=[[e.identifiers[0],"$all"]])),e.defaultIdentifier&&(p=[[e.defaultIdentifier,"default"]]),s[m]=(s[m]||[]).concat(p,d)}return o(o({},i),{},{destBody:r,dependencies:s,pathMap:n})}}},J2Kw:function(t,e,r){"use strict";t.exports={uniq:function(t,e,r){return r.indexOf(t)===e}}},J6RI:function(t,e,r){(e=r("JPst")(!1)).push([t.i,"body {\n  margin: 0;\n}\n\nh1 {\n  margin: 0.67rem;\n  font-size: 18px;\n}\np {\n  margin: 0 0.67rem 0.67rem;\n}\n\n.CodeMirror {\n  flex: 1 0 0;\n}\n\n.layout {\n  display: flex;\n  height: 100vh;\n  width: 100vw;\n\n  flex-direction: column;\n}\n\n.all-panels {\n  display: flex;\n\n  flex-direction: row;\n  flex-grow: 1;\n}\n\n.left-column,\n.right-column {\n  display: flex;\n  width: 50%;\n\n  flex-direction: column;\n}\n\n.left-column {\n}\n\n.left-column .add-button {\n  flex-basis: 0;\n}\n\n.left-column .source-editors,\n.left-column .source-editors > div {\n  display: flex;\n\n  flex-grow: 1;\n  flex-direction: column;\n}\n\n.add-button {\n  line-height: 2rem;\n  text-align: center;\n}\n\n.editor-header {\n  background: #f3f3f3;\n  line-height: 2rem;\n  padding: 0 4px;\n}\n\n.error-panel {\n  display: none;\n  padding: 8px 4px;\n}\n\n.error-panel.error {\n  background-color: #fff0f0;\n  color: #ff3838;\n  display: block;\n}\n",""]),t.exports=e},JCzE:function(t,e,r){"use strict";function n(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var i=r("w21e"),a=i.createIndexOf,u=i.createIsRepeated,c=i.uniq,f=r("YKGV").fromPath;t.exports={rawToModule:function(t){for(var e,r=[],o=u(),i=Object.fromEntries(t.map((function(t){var e=t.body;return[t.filepath,e]}))),s=[t[0].filepath],l=!1;e=s.shift();){var p=r.reduce.apply(r,n(a((function(t){var r=t.filepath;return e===r}))));~p&&r.splice(p,1);var d=i[e];if(d){var m=(d.match(new RegExp(f,"g"))||[]).filter(c),y=Object.fromEntries(m.map((function(t){return[t,t]})));r.push({body:d,external:!1,filepath:e,pathMap:y}),l||(l=o(s=s.concat(m)))}else r.push({external:!0,filepath:e})}return r}}},KPNZ:function(t,e,r){"use strict";t.exports={incrementalMap:function(t){return function(e){for(var r,n,o=(r=[],function(t){if(!~r.indexOf(t))return r.push(t),!0}),i=[],a=[].concat(e),u=function(t,e){var r=e?function(t){return a.every((function(r){return e(r,t)}))}:o;a=a.concat(t.filter(r))},c=0;n=a.shift();)i.push(t(u,n,c++,e));return i}}}},OMi8:function(t,e,r){var n=r("LboF"),o=r("J6RI");"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};n(o,i);t.exports=o.locals||{}},PA6C:function(t,e,r){"use strict";t.exports={createMatchRegExp:function(t){var e=0;return function(r){for(var n;t[e]&&!(n=t[e](r));)e++;return n}}}},PtR2:function(t,e,r){"use strict";function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}t.exports={disposeRange:function(t,e){var r=n(e,2),o=r[0],i=r[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return t.slice(0,o).concat(a+t.slice(i))}}},Qqj3:function(t,e,r){"use strict";t.exports=Object.assign(r("CP4k"),r("XmVL"),r("pRui"),r("jgbK"),r("8oZC"))},RvTm:function(t,e,r){"use strict";function n(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}t.exports={supply:function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];return i=r.map((function(t){return t})),[function(e){return t.apply(void 0,[e].concat(n(i)))}].concat(n(r.map((function(t,e){return"function"==typeof t?function(r){return i[e]=t(r),r}:t}))));var i}}},SFmg:function(t,e,r){"use strict";var n=r("w21e"),o=n.disposeRange,i=n.identity,a=r("YKGV"),u=a.identifierAs,c=a.importAll,f=a.importDefault,s=a.importIdentifiers,l=a.importModule,p=r("2v7z").range;t.exports={matchImportAll:function(t){var e=t.match(RegExp(c));if(e)return{all:!0,identifiers:[e.groups.identifier].filter(i),match:e,path:e.groups.path,range:p(e)}},matchImportDefault:function(t){var e=t.match(RegExp(f));if(e)return{defaultIdentifier:e.groups.identifier,match:e,path:e.groups.path,range:p(e)}},matchImportIdentifiers:function(t){var e=t.match(RegExp(s)),r=[];if(e){for(var n,i=e.groups.identifiers;n=i.match(u);)i=o(i,p(n)),r.push(n.groups.right?[n.groups.right,n.groups.left]:n.groups.left);return{defaultIdentifier:e.groups.identifier,identifiers:r,match:e,path:e.groups.path,range:p(e)}}},matchImportModule:function(t){var e=t.match(RegExp(l));if(e)return{match:e,path:e.groups.path,range:p(e)}}}},TLsk:function(t,e,r){"use strict";var n=r("s7Oi"),o=n.extend,i=n.map,a=n.pipe,u=r("Qqj3"),c=u.makeFactoryArguments,f=u.makeFactoryDestructure,s=u.makeFactoryName,l=u.makeFactoryReturnAggregates,p=u.makeFactoryReturnIdentifiers,d=u.makeFinal,m=a(i(o(s,c,f,l,p)),d);t.exports={makeModule:m}},XVCO:function(t,e,r){"use strict";var n=r("ET/h").validateFunctions;t.exports={extend:function(){try{var t=n(arguments)}catch(t){var e=t.message;throw new Error(e)}return function(){var e=this,r=arguments[0],n=Array.prototype.slice.call(arguments,1);return t.reduce((function(t,r){return Object.assign(t,r.apply(e,[t].concat(n)))}),r)}}}},XmVL:function(t,e,r){"use strict";function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var i=r("w21e").uniq,a=r("CP4k"),u=a.getModuleExternal,c=a.getModuleName,f=function(t){return[].concat(t,t).slice(0,2)};t.exports={makeFactoryArguments:function(t,e,r){var n=t.pathMap,o=void 0===n?{}:n;return{factoryArguments:Object.values(o).filter(i).map((function(t){return c(r,t)}))}},makeFactoryDestructure:function(t,e,r){var o=t.dependencies,i=void 0===o?{}:o;return{factoryDestructure:Object.entries(i).reduce((function(t,e){var o=n(e,2),i=o[0],a=o[1];return t.concat(a.map((function(t){return u(r,i)&&"default"===t[1]||"$all"===t[1]?t[0]+" = "+c(r,i):f(t).join(" = "+c(r,i)+".")})))}),[])}},makeFactoryName:function(t){return{factoryName:t.name+"Factory"}},makeFactoryReturnAggregates:function(t,e,r){var o=t.aggregates,i=void 0===o?{}:o;return{factoryReturnAggregates:Object.entries(i).filter((function(t){return!n(t,2)[1].length})).map((function(t){var e=n(t,1)[0];return c(r,e)}))}},makeFactoryReturnIdentifiers:function(t,e,r){var o=t.aggregates,i=void 0===o?{}:o,a=t.exports,u=void 0===a?[]:a,s=t.reexports,l=void 0===s?{}:s,p=Object.entries(i).filter((function(t){return n(t,2)[1].length})).reduce((function(t,e){var o=n(e,2),i=o[0],a=o[1];return t.concat(a.map((function(t){return t+": "+c(r,i)})))}),[]),d=u.map((function(t){return f(t).join(": ")})),m=Object.entries(l).reduce((function(t,e){var o=n(e,2),i=o[0],a=o[1];return t.concat(a.map((function(t){return f(t).join(": "+c(r,i)+".")})))}),[]);return{factoryReturnIdentifiers:[].concat(d,m,p)}}}},YKGV:function(t,e,r){"use strict";var n="[^;\\n]*",o="\\s+as\\s+",i="\\s*,\\s*",a="\\s*(?:let|const|var)\\s*",u="\\s*(?<default>default)\\s*",c="export\\s*",f="\\s*from\\s*",s="import\\s*",l="\\w+",p=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return"(?="+e.join("")+")"},d=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return"(?<="+e.join("")+")"},m=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return"(?<identifier>"+e.join("")+")"},y=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return"(?<identifiers>"+e.join("")+")"},h=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.join("")},g=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return"(?<left>"+e.join("")+")"},v=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return"(?:"+e.join("")+")*"},b=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return"(?:"+e.join("|")+")"},x=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return"(?:"+e.join("")+")+"},j=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return"['\"](?<path>"+e.join("")+")['\"]"},O=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return"(?<right>"+e.join("")+")"},w=h(c,"\\s*\\*\\s*",v(o,m(l)),f,j(n),v("\\s*;")),A=h(c,v(u),"\\s*class\\s*",m(l)),E=h(c,a,m(l),"\\s*=\\s*","\\s*\\(\\s*"),I=h(c,a,y(x(l,v("\\s*=\\s*",n),v(i))),p(b("\\s*;","\\n","$"))),S=h(c,u),M=h(c,"\\s*{\\s*",u,"\\s*}\\s*",f,j(n),v("\\s*;")),R=h(c,v(u),"\\s*function\\*?\\s*",v(m(l)),"\\s*\\(\\s*"),C=h(c,a,"\\s*{\\s*",y(x(l,v("\\s*:\\s*",l),v(i))),"\\s*}\\s*","\\s*=\\s*"),D=h(c,"\\s*{\\s*",y(x(l,v(o,l),v(i))),"\\s*}\\s*",v(f,j(n)),v("\\s*;")),F=h(g(l),v(o,O(l)),v(i)),k=h(d(b("^",i)),m(l),p(b("\\s*=\\s*",i,"\\s*;","$"))),P=h(g(l),v("\\s*:\\s*",O(l)),v(i)),N=h(s,"\\s*\\*\\s*",v(o,m(l)),f,j(n),v("\\s*;")),T=h(s,m(l),f,j(n),v("\\s*;")),B=h(s,v(m(l),i),"\\s*{\\s*",y(x(l,v(o,l),v(i))),"\\s*}\\s*",f,j(n),v("\\s*;")),V=h(s,j(n),v("\\s*;")),$=h(d(b(f,s),"['\"]"),n,p("['\"]"));t.exports={exportAllFrom:w,exportClass:A,exportDeclareFunction:E,exportDeclareIdentifiers:I,exportDefault:S,exportDefaultFrom:M,exportDefineFunction:R,exportDestructIdentifiers:C,exportIdentifiers:D,fromPath:$,identifierAs:F,identifierAssign:k,identifierReassign:P,importAll:N,importDefault:T,importIdentifiers:B,importModule:V}},Zzya:function(t,e,r){"use strict";t.exports={clog:function(){if("function"==typeof arguments[0]){var t=arguments[0];return function(){return console.log(t.apply(void 0,arguments)),arguments[0]}}return console.log.apply(void 0,Array.prototype.map.call(arguments,(function(t){return t.charAt?t:JSON.stringify(t,null,2)}))),arguments[0]}}},c2a7:function(t,e,r){"use strict";t.exports=Object.assign(r("CgBI"),r("TLsk"),r("8oZC"),r("s7Oi"),r("fW2k"),r("hCvQ"))},c2qy:function(t,e,r){"use strict";var n=r("SFmg"),o=n.matchImportAll,i=n.matchImportDefault,a=[o,n.matchImportIdentifiers,i,n.matchImportModule];t.exports={specificityImports:a}},dYqI:function(t,e,r){"use strict";var n=r("PA6C").createMatchRegExp,o=r("w21e").disposeRange,i=r("8i1p").specificityExports;t.exports={extractExports:function(t){for(var e,r=t.body,a=t.pathMap,u={},c={},f=n(i),s=[];e=f(r);){var l=void 0;if(!e.default||e.identifiers&&e.identifiers.length||(l="var $default = "),r=o(r,e.range,l).trim(),e.path){var p=a[e.path]||e.path;if(e.all){u[p]=e.identifiers;continue}e.identifiers&&(c[p]=e.identifiers)}else e.identifiers&&e.identifiers.length?s=e.default?s.concat([["default",e.identifiers[0]]]):s.concat(e.identifiers):e.default&&(s=s.concat([["default","$default"]]))}return{aggregates:u,destBody:r,exports:s,reexports:c}}}},"ds+p":function(t,e,r){"use strict";t.exports={createIndexOf:function(t){return[function(e,r,n){return t(r)?n:e},-1]}}},fW2k:function(t,e,r){"use strict";t.exports={stripComments:function(t){return t.replace(/\/\*[^]*?\*\//g,"").replace(/\/\/.*/g,"").trim()}}},hCvQ:function(t,e,r){"use strict";t.exports=Object.assign(r("/FHB"),r("JCzE"))},jgbK:function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){o=function(t,e){return new f(t,void 0,e)};var r=a(RegExp),u=RegExp.prototype,c=new WeakMap;function f(t,e,n){var o=r.call(this,t,e);return c.set(o,n||c.get(t)),o}function s(t,e){var r=c.get(e);return Object.keys(r).reduce((function(e,n){return e[n]=t[r[n]],e}),Object.create(null))}return i(f,r),f.prototype.exec=function(t){var e=u.exec.call(this,t);return e&&(e.groups=s(e,this)),e},f.prototype[Symbol.replace]=function(t,e){if("string"==typeof e){var r=c.get(this);return u[Symbol.replace].call(this,t,e.replace(/\$<([^>]+)>/g,(function(t,e){return"$"+r[e]})))}if("function"==typeof e){var o=this;return u[Symbol.replace].call(this,t,(function(){var t=[];return t.push.apply(t,arguments),"object"!==n(t[t.length-1])&&t.push(s(t,o)),e.apply(this,t)}))}return u[Symbol.replace].call(this,t,e)},o.apply(this,arguments)}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function a(t){var e="function"==typeof Map?new Map:void 0;return(a=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return u(t,arguments,s(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),f(n,t)})(t)}function u(t,e,r){return(u=c()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&f(o,r.prototype),o}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return p(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var d=r("w21e").toCamelReplace;t.exports={createMakeModuleName:function(){var t={};return function(e){var r=e.external,n=e.filepath;if(r)return{name:n.replace.apply(n,l(d))};try{for(var i=n.split("/").reverse().slice(1,3),a=n.match(o(/(?<=^|\/)([\0-\x2D0-\uFFFF]+)(?=\.|$)/,{filename:1})).groups.filename,u=a.replace.apply(a,l(d));t[u];){var c,f=i.shift();if(!f)break;u=(c=f+"/"+u).replace.apply(c,l(d))}if(t[u]){for(var s=2;t[u+s];)s++;u+=s}return t[u]=!0,{name:u}}catch(t){throw new Error("Could not make name of filepath ".concat(n))}}}}},mBfV:function(t,e,r){"use strict";var n=r("ET/h").pipe;t.exports={map:function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return t.map(n.apply(void 0,e))}}}},pRui:function(t,e,r){"use strict";var n=r("w21e").uniq,o=r("CP4k"),i=o.getModuleExternal,a=o.getModuleName;t.exports={makeFinal:function(t){return e={factoriesBodies:t.map((function(t){return t.external?t.name:(c=(e=t).destBody,f=e.factoryArguments,s=e.factoryDestructure,l=e.factoryName,p=e.factoryReturnAggregates,d=e.factoryReturnIdentifiers,r={args:f.join(", "),body:c,destructures:s.length?"var "+s.join(", ")+";":"",name:l,returnValue:p.length?"Object.assign({ "+d.join(", ")+" }, "+p.join(", ")+");":"{ "+d.join(", ")+" }"},n=r.args,o=r.body,i=r.destructures,a=r.name,u=r.returnValue,"function ".concat(a,"(").concat(n,") {\n").concat(i,"\n").concat(o,"\nreturn ").concat(u,"\n}"));var e,r,n,o,i,a,u,c,f,s,l,p,d})).join(",\n"),factoriesCalls:t.slice(1).filter((function(t){return!t.external})).reverse().map((function(e){var r=e.name,o=e.pathMap,u=void 0===o?[]:o;return"var "+r+"Exports = "+r+"Factory("+Object.values(u).filter(n).map((function(e){return a(t,e)+(i(t,e)?"":"Exports")})).join(", ")+");"})).join("\n"),factoriesNames:t.map((function(t){return t.name+(t.external?"":"Factory")})).join(", "),mainCall:t[0].name+"Factory("+Object.values(t[0].pathMap).filter(n).map((function(e){return a(t,e)+(i(t,e)?"":"Exports")})).join(", ")+")"},r=e.factoriesBodies,o=e.factoriesCalls,u=e.factoriesNames,c=e.mainCall,"(function(".concat(u,") {\n").concat(o,"\nreturn ").concat(c,";\n})(\n").concat(r,"\n);\n");var e,r,o,u,c}}},pxh2:function(t,e,r){"use strict";t.exports={toCamelReplace:[/\W+(\w?)/g,function(t,e){return e.toUpperCase()}]}},pzuo:function(t,e,r){"use strict";t.exports={identity:function(t){return t}}},rZM3:function(t,e,r){"use strict";var n=r("ET/h").pipe;t.exports={createCondition:function(t){return function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return function(e){return t(e)?n.apply(void 0,r)(e):e}}}}},s7Oi:function(t,e,r){"use strict";t.exports=Object.assign(r("/skv"),r("Zzya"),r("rZM3"),r("XVCO"),r("KPNZ"),r("mBfV"),r("ET/h"),r("5Vpr"),r("RvTm"))},tjUo:function(t,e,r){"use strict";r.r(e);r("+dQi"),r("p77/");var n=r("VrN/"),o=r.n(n),i=r("MlsZ"),a=r("YQPV"),u=r.n(a),c=r("c2a7");r("OMi8");function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var l=!1,p=Object(c.createCondition)((function(){return l})),d=f(Object(c.supply)(c.makeUMD,c.pickExternals,"myLibrary"),2),m=d[0],y=d[1],h=Object(c.pipe)(c.rawToModule,c.compileModule,p(y),c.makeModule,p(m));document.body.innerHTML='\n<div class="layout">\n  <h1>import-export-merger</h1>\n  <p>Merge javascript files with imports/exports into one function. <a href="https://github.com/ytiurin/import-export-merger" target="_blank">Source on github</a>.</p>\n  <div class="all-panels">\n    <div class="left-column">\n      <div class="source-editors"></div>\n      <div class="add-button">\n        <button id="add-editor">+ Add module</button>\n      </div>\n    </div>\n    <div class="right-column">\n      <div class="editor-header">\n        Merged code\n        <input type="checkbox" id="umd" />\n        <label for="umd">\n          add\n          <abbr title="Universal Module Definition">UMD</abbr>\n        </label>\n      </div>\n      <div class="error-panel"></div>\n    </div>\n  </div>\n</div>\n';var g=document.getElementsByClassName("source-editors")[0],v=function(){var t=h(x.map((function(t){var e=t.editor,r=t.filepath;return{body:Object(c.stripComments)(e.getValue()),filepath:r}})));try{t=Object(i.format)(t,{parser:"babel",plugins:[u.a]}),w()}catch(t){w(t)}j.setValue(t)},b=function(t){var e=f(t,2),r=e[0],n=f(function(t,e){var r="./index"==t,n=document.createElement("div");n.innerHTML="<div class='editor-header'>\n  ".concat(r?"":'<button title="Delete module">-</button>',"\n  ").concat(t,"\n</div>"),g.appendChild(n);var i,a=o()(n,{value:e,mode:"javascript"}),u=function(t){t?i=t:(a.setOption("mode","text/x-csrc"),a.getWrapperElement().parentNode.removeChild(a.getWrapperElement()),n.parentNode.removeChild(n),i&&i())};return r||n.getElementsByTagName("button")[0].addEventListener("click",(function(){u(),v()})),[a,u]}(r,e[1]),2),i=n[0],a=n[1];i.on("change",v);var u={editor:i,destroy:a,filepath:r};return a((function(){x.splice(x.indexOf(u),1)})),u},x=[["./index","import { a } from './moduleA';\n\nexport * from './moduleB';\n"],["./moduleA","import 'external';\n\nexport const a = 1;\n"],["./moduleB","import { a } from './moduleA';\n\nconst b = () => a + 1;\n\nexport default b;\n"]].map(b),j=o()(document.getElementsByClassName("right-column")[0],{mode:"javascript"});v();var O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{next:function(){return"CDEFGHIJKLMNOPQRSTUVWXYZ"[t++]||t+2}}}();function w(t){var e=document.getElementsByClassName("error-panel")[0];t?(e.classList.add("error"),e.innerHTML=t.message):e.classList.remove("error")}document.getElementById("add-editor").addEventListener("click",(function(){if(!(x.length>40)){var t="./module"+O.next();x.push(b([t,"// "+t])),v()}})),document.getElementById("umd").addEventListener("change",(function(t){var e=t.target.checked;l=e,v()}))},usie:function(t,e,r){"use strict";var n=r("w21e"),o=n.disposeRange,i=n.identity,a=r("YKGV"),u=a.exportAllFrom,c=a.exportClass,f=a.exportDeclareFunction,s=a.exportDeclareIdentifiers,l=a.exportDefault,p=a.exportDefaultFrom,d=a.exportDefineFunction,m=a.exportDestructIdentifiers,y=a.exportIdentifiers,h=a.identifierAs,g=a.identifierAssign,v=a.identifierReassign,b=r("2v7z").range;t.exports={matchExportAllFrom:function(t){var e=t.match(RegExp(u));if(e)return{all:!0,identifiers:[e.groups.identifier].filter(i),match:e,path:e.groups.path,range:b(e)}},matchExportClass:function(t){var e=t.match(RegExp(c));if(e){var r=Boolean(e.groups.default);return{default:r,identifiers:[e.groups.identifier].filter(i),match:e,range:b(e,7+(r&&8))}}},matchExportDeclareFunction:function(t){var e=t.match(RegExp(f));if(e)return{identifiers:[e.groups.identifier].filter(i),match:e,range:b(e,7)}},matchExportDeclareIdentifiers:function(t){var e=t.match(RegExp(s));if(e)return{identifiers:e.groups.identifiers.match(RegExp(g,"g")),match:e,range:b(e,7)}},matchExportDefault:function(t){var e=t.match(RegExp(l));if(e)return{default:!0,match:e,range:b(e,15)}},matchExportDefaultFrom:function(t){var e=t.match(RegExp(p));if(e)return{default:!0,match:e,path:e.groups.path,range:b(e)}},matchExportDefineFunction:function(t){var e=t.match(RegExp(d));if(e){var r=Boolean(e.groups.default);return{default:r,identifiers:[e.groups.identifier].filter(i),match:e,range:b(e,7+(r&&8))}}},matchExportDestructIdentifiers:function(t){var e=t.match(RegExp(m));if(e){for(var r,n=[],i=e.groups.identifiers;r=i.match(v);)i=o(i,b(r)),n.push(r.groups.right||r.groups.left);return{identifiers:n,match:e,range:b(e,7)}}},matchExportIdentifiersFrom:function(t){var e=t.match(RegExp(y));if(e){for(var r,n=[],i=e.groups.identifiers;r=i.match(h);)i=o(i,b(r)),n.push(r.groups.right?[r.groups.right,r.groups.left]:r.groups.left);return{identifiers:n,match:e,path:e.groups.path,range:b(e)}}}}},w21e:function(t,e,r){"use strict";t.exports=Object.assign(r("ds+p"),r("93I3"),r("PtR2"),r("pzuo"),r("pxh2"),r("zbNc"),r("J2Kw"))},zbNc:function(t,e,r){"use strict";t.exports={toHashReduce:[function(t,e){return(t<<5)-t+e.charCodeAt(0)|0},0]}}},[["tjUo",1,2]]]);