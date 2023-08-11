/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assests/tipografia.ttf */ "./src/assests/tipografia.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assests/Amagro-bold.ttf */ "./src/assests/Amagro-bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assests/old-concrete-texture-with-blue-paint.jpg */ "./src/assests/old-concrete-texture-with-blue-paint.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assests/3200146.jpg */ "./src/assests/3200146.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'tipografia';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: 'am';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

@keyframes popout {
    from {
        transform: scale(0);
    }
    80% {
        transform: scale(1.2);
    }
    to {
        transform: scale(1);
    }
}

@-webkit-keyframes popout {
    from {
        transform: scale(0);
    }
    80% {
        transform: scale(1.2);
    }
    to {
        transform: scale(1);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0%;
    }
    to {
        opacity: 100%;
    }
}

@-webkit-keyframes fadeIn {
    from {
        opacity: 1%;
    }
    to {
        opacity: 100%;
    }
}

/* Custom Properties */
:root {
    --default-font: 1rem;
    --small-spacing: 15px;
    --large-spacing: 30px;
    --button-paddng: 3px 20px;
    --small-padding: 15px;
    --large-padding: 50px;
    --border-radius: 20px;
    --white: rgb(255, 253, 250);
    --black: rgb(7, 6, 6);
    --blue: rgb(61, 61, 206);
    --grey: #b3b1af;
    --red: #9f271e;
}

/* CSS reset and general rules */
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'am', 'tipografia', sans-serif, 'Times New Roman', Times, serif;
    font-size: var(--default-font);
}

html {
    height: 100vh;
}

#selectionMenu {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) no-repeat center center fixed;
    background-size: cover;
}

#gameMenu {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_3___}) no-repeat center center fixed;
    background-size: cover;
}

body {
}

header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15vh;
    margin: var(--small-spacing);
}

.header-text-selection {
    font-size: 4rem;
    padding: var(--small-padding);
    border: 3px solid var(--white);
    border-radius: var(--border-radius);
    color: var(--white);
    background-color: rgb(0, 0, 0, 0.3);
}

.header-text-game {
    font-size: 4rem;
    padding: var(--small-padding);
    border: 3px solid var(--blue);
    border-radius: var(--border-radius);
    color: var(--white);
    background: rgb(0, 0, 0, 0.3);
}

main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--small-spacing);
    height: 80vh;
}

footer {
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: var(--white);
}

button {
    width: fit-content;
    padding: var(--button-paddng);
    border-radius: var(--border-radius);
}

button:hover {
    cursor: grab;
}

#container {
    background-color: rgb(0, 0, 0, 0.3);
    padding: var(--small-padding);
    border-radius: var(--border-radius);
    border: 3px solid var(--blue);
}

.faded-in {
    animation: fadeIn ease 3s;
}

/* Name Menu */
form {
    display: flex;
    flex-direction: column;
    border: 3px solid var(--white);
    border-radius: var(--border-radius);
    padding: var(--large-padding);
    color: var(--white);
    background-color: rgb(0, 0, 0, 0.3);
    margin-bottom: 150px;
}

.start-btn {
    margin-top: var(--large-spacing);
    width: 50%;
    border: 3px solid var(--white);
    background: rgb(0, 0, 0, 0.3);
    color: var(--white);
}

.start-btn-cont {
    display: flex;
    justify-content: center;
}

/* Ship placement menu */
.ship-placement-cont {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--small-spacing);
}

.hover {
    background-color: rgba(34, 189, 78, 0.6);
}

.selected {
    background-color: aquamarine;
}

.ship-place-text {
    font-size: 1.5rem;
    color: var(--white);
}

.placement-message {
    text-align: center;
    padding: var(--small-padding);
}

.reset-btn,
.rotate-btn {
    border: 3px solid var(--blue);
    color: var(--white);
    background: rgb(0, 0, 0, 0.3);
}
/* Game menu */
#grid {
    display: grid;
    grid-template-columns: repeat(10, 1fr);

    background-color: var(--blue);
    border: 3px solid var(--black);

    flex-grow: 1;
    height: 500px;
    width: 500px;
}

.name-cont {
    display: flex;
    justify-content: space-between;
    width: 1015px; /*Change this when resizing grid sizes*/
}

.name {
    color: var(--white);
    font-size: 1.2rem;
}

.player-grid-cont {
    display: flex;
    gap: var(--small-spacing);
}

#gridItem {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
}

.grid-item:hover {
    cursor: grab;
}

.circle-miss {
    background-color: var(--grey);
    border-radius: 50%;
    width: 30%;
    height: 30%;
}

.circle-hit {
    background-color: var(--red);
    border-radius: 50%;
    width: 30%;
    height: 30%;
}

/* Game over screen */
.shader {
    position: fixed;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 1;
}

.gameOverCont {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: var(--small-spacing);
    background: var(--black);
    color: var(--white);
    border-radius: var(--border-radius);
    border: 3px solid var(--blue);
    position: fixed;
    top: 30%;
    left: 50%;
    width: 25%;
    height: 15%;
    margin-left: -12.5%;
    z-index: 2;

    animation: popout 1s ease;
    -webkit-animation: popout 1s ease;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'tipografia';\n    src: url('./assests/tipografia.ttf');\n}\n\n@font-face {\n    font-family: 'am';\n    src: url('./assests/Amagro-bold.ttf');\n}\n\n@keyframes popout {\n    from {\n        transform: scale(0);\n    }\n    80% {\n        transform: scale(1.2);\n    }\n    to {\n        transform: scale(1);\n    }\n}\n\n@-webkit-keyframes popout {\n    from {\n        transform: scale(0);\n    }\n    80% {\n        transform: scale(1.2);\n    }\n    to {\n        transform: scale(1);\n    }\n}\n\n@keyframes fadeIn {\n    from {\n        opacity: 0%;\n    }\n    to {\n        opacity: 100%;\n    }\n}\n\n@-webkit-keyframes fadeIn {\n    from {\n        opacity: 1%;\n    }\n    to {\n        opacity: 100%;\n    }\n}\n\n/* Custom Properties */\n:root {\n    --default-font: 1rem;\n    --small-spacing: 15px;\n    --large-spacing: 30px;\n    --button-paddng: 3px 20px;\n    --small-padding: 15px;\n    --large-padding: 50px;\n    --border-radius: 20px;\n    --white: rgb(255, 253, 250);\n    --black: rgb(7, 6, 6);\n    --blue: rgb(61, 61, 206);\n    --grey: #b3b1af;\n    --red: #9f271e;\n}\n\n/* CSS reset and general rules */\n* {\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n    font-family: 'am', 'tipografia', sans-serif, 'Times New Roman', Times, serif;\n    font-size: var(--default-font);\n}\n\nhtml {\n    height: 100vh;\n}\n\n#selectionMenu {\n    background: url('./assests/old-concrete-texture-with-blue-paint.jpg') no-repeat center center fixed;\n    background-size: cover;\n}\n\n#gameMenu {\n    background: url('./assests/3200146.jpg') no-repeat center center fixed;\n    background-size: cover;\n}\n\nbody {\n}\n\nheader {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 15vh;\n    margin: var(--small-spacing);\n}\n\n.header-text-selection {\n    font-size: 4rem;\n    padding: var(--small-padding);\n    border: 3px solid var(--white);\n    border-radius: var(--border-radius);\n    color: var(--white);\n    background-color: rgb(0, 0, 0, 0.3);\n}\n\n.header-text-game {\n    font-size: 4rem;\n    padding: var(--small-padding);\n    border: 3px solid var(--blue);\n    border-radius: var(--border-radius);\n    color: var(--white);\n    background: rgb(0, 0, 0, 0.3);\n}\n\nmain {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: var(--small-spacing);\n    height: 80vh;\n}\n\nfooter {\n    font-size: 0.8rem;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    color: var(--white);\n}\n\nbutton {\n    width: fit-content;\n    padding: var(--button-paddng);\n    border-radius: var(--border-radius);\n}\n\nbutton:hover {\n    cursor: grab;\n}\n\n#container {\n    background-color: rgb(0, 0, 0, 0.3);\n    padding: var(--small-padding);\n    border-radius: var(--border-radius);\n    border: 3px solid var(--blue);\n}\n\n.faded-in {\n    animation: fadeIn ease 3s;\n}\n\n/* Name Menu */\nform {\n    display: flex;\n    flex-direction: column;\n    border: 3px solid var(--white);\n    border-radius: var(--border-radius);\n    padding: var(--large-padding);\n    color: var(--white);\n    background-color: rgb(0, 0, 0, 0.3);\n    margin-bottom: 150px;\n}\n\n.start-btn {\n    margin-top: var(--large-spacing);\n    width: 50%;\n    border: 3px solid var(--white);\n    background: rgb(0, 0, 0, 0.3);\n    color: var(--white);\n}\n\n.start-btn-cont {\n    display: flex;\n    justify-content: center;\n}\n\n/* Ship placement menu */\n.ship-placement-cont {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: var(--small-spacing);\n}\n\n.hover {\n    background-color: rgba(34, 189, 78, 0.6);\n}\n\n.selected {\n    background-color: aquamarine;\n}\n\n.ship-place-text {\n    font-size: 1.5rem;\n    color: var(--white);\n}\n\n.placement-message {\n    text-align: center;\n    padding: var(--small-padding);\n}\n\n.reset-btn,\n.rotate-btn {\n    border: 3px solid var(--blue);\n    color: var(--white);\n    background: rgb(0, 0, 0, 0.3);\n}\n/* Game menu */\n#grid {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n\n    background-color: var(--blue);\n    border: 3px solid var(--black);\n\n    flex-grow: 1;\n    height: 500px;\n    width: 500px;\n}\n\n.name-cont {\n    display: flex;\n    justify-content: space-between;\n    width: 1015px; /*Change this when resizing grid sizes*/\n}\n\n.name {\n    color: var(--white);\n    font-size: 1.2rem;\n}\n\n.player-grid-cont {\n    display: flex;\n    gap: var(--small-spacing);\n}\n\n#gridItem {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid black;\n}\n\n.grid-item:hover {\n    cursor: grab;\n}\n\n.circle-miss {\n    background-color: var(--grey);\n    border-radius: 50%;\n    width: 30%;\n    height: 30%;\n}\n\n.circle-hit {\n    background-color: var(--red);\n    border-radius: 50%;\n    width: 30%;\n    height: 30%;\n}\n\n/* Game over screen */\n.shader {\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    height: 100%;\n    width: 100%;\n    background: rgba(0, 0, 0, 0.8);\n    z-index: 1;\n}\n\n.gameOverCont {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: var(--small-spacing);\n    background: var(--black);\n    color: var(--white);\n    border-radius: var(--border-radius);\n    border: 3px solid var(--blue);\n    position: fixed;\n    top: 30%;\n    left: 50%;\n    width: 25%;\n    height: 15%;\n    margin-left: -12.5%;\n    z-index: 2;\n\n    animation: popout 1s ease;\n    -webkit-animation: popout 1s ease;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nameSelection: () => (/* binding */ nameSelection)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");


//Global variables
const body = document.querySelector('body');
const main = document.querySelector('main');
const html = document.querySelector('html');
const shipList = ['Carrier', 'Battleship', 'Destroyer', 'Submarine', 'Patrolboat'];
const battleshipText = document.querySelector('.header-text-selection');

// DOM creation

// Creates menu to select your name
function nameSelection() {
    const form = document.createElement('form');
    const label = document.createElement('label');
    const nameInput = document.createElement('input');
    const startGame = document.createElement('button');
    const btnCont = document.createElement('div');

    html.setAttribute('id', 'selectionMenu');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('placeholder', 'Choose a name');
    label.setAttribute('for', 'name');
    label.textContent = 'Name:';
    startGame.setAttribute('type', 'button');
    startGame.classList.add('start-btn');
    startGame.textContent = 'Start Game';
    startGame.addEventListener('click', () => {
        localStorage.setItem('name', `${nameInput.value}`);
        chooseShipPlacement();
    });
    btnCont.classList.add('start-btn-cont');

    main.appendChild(form);
    btnCont.appendChild(startGame);
    form.append(label, nameInput, btnCont);
}

// Creates the DOM for the user to select where they want to place there ships.
function chooseShipPlacement() {
    main.textContent = ''; // Clears main

    // Ship placement DOM
    const container = document.createElement('div');
    const header = document.createElement('p');
    const rotateBtn = document.createElement('button');
    const message = document.createElement('p');
    const gridCont = document.createElement('div');
    const grid = document.createElement('div');

    html.setAttribute('id', 'gameMenu');
    battleshipText.className = '';
    battleshipText.classList.add('header-text-game');
    header.setAttribute('class', 'placement-message');
    message.classList.add('ship-place-text');
    container.setAttribute('id', 'container');
    rotateBtn.classList.add('rotate-btn');
    gridCont.classList.add('ship-placement-cont');
    grid.setAttribute('id', 'grid');

    // Rotate button to set orientation of ship placement
    rotateBtn.textContent = 'Rotate';
    rotateBtn.value = 'x';
    rotateBtn.addEventListener('click', () => {
        if (rotateBtn.value === 'x') {
            rotateBtn.value = 'y';
        } else {
            rotateBtn.value = 'x';
        }
    });

    // Grid UI creation for player ship placement choice
    let x = 0;
    let y = -1;
    for (let i = 0; i < 100; i++) {
        x++;
        if (i % 10 === 0) {
            x = 0;
            y++;
        }
        const gridItem = document.createElement('div');

        // Assigns coordinates to each grid item
        gridItem.setAttribute('id', 'gridItem');
        gridItem.setAttribute('data-x', x);
        gridItem.setAttribute('data-y', y);

        grid.appendChild(gridItem);
    }

    header.appendChild(message);
    gridCont.append(rotateBtn, grid);
    container.append(header, gridCont);
    main.appendChild(container);

    const gridItems = document.querySelectorAll('#gridItem');
    let shipListIndex = 0;

    // Takes in a grid Item as a paramter. Adds marker that displays where each ship has been added to the grid. Also saves the ship's location and length to local storage. This runs on gridItem click
    function saveShipLocation() {
        // Selects the hovered items and adds the selected class to mark the selection location
        const hovered = document.querySelectorAll('.hover');
        let conditionMet = false;
        for (let i = 0; i < hovered.length; i++) {
            if (hovered[i].classList.contains('selected')) {
                conditionMet = true;
                break;
            }
        }
        if (conditionMet) return false;
        hovered.forEach((gridItem) => gridItem.classList.add('selected'));

        //Determine ship length
        let length = 0;
        if (Number(hovered[0].dataset.x) === Number(hovered[hovered.length - 1].dataset.x)) {
            length = 1 + Number(hovered[hovered.length - 1].dataset.y) - Number(hovered[0].dataset.y);
        } else {
            length = 1 + Number(hovered[hovered.length - 1].dataset.x) - Number(hovered[0].dataset.x);
        }

        // Saves data to local storage
        localStorage.setItem(
            shipList[shipListIndex],
            JSON.stringify({
                start: [Number(hovered[0].dataset.x), Number(hovered[0].dataset.y)],
                end: [Number(hovered[hovered.length - 1].dataset.x), Number(hovered[hovered.length - 1].dataset.y)],
                length: length,
            }),
        );
        shipListIndex++;
        return true;
    }

    // Takes in the shipList index as a paramter. Returns a promise that dynamically changes text to tell the user which ship is being placed.
    // Also implements the hover effect and ship saving logic
    function placeShip(index) {
        let resolvePlaceShip;
        const shipPlacementPromise = new Promise((resolve) => {
            resolvePlaceShip = resolve; // Capture the resolve function
            message.textContent = `Place your ${shipList[index]}`;
            gridItems.forEach((item) => {
                item.value = ``;
                item.value = `${shipList[index]}`;
                item.addEventListener('click', handleGridClick);
            });
            implementHover(rotateBtn);
        });

        // Executes when a gridItem is clicked. Saves the placed ship's location or requries the user to select a new location if an error occurs
        function handleGridClick() {
            if (saveShipLocation()) {
                gridItems.forEach((item) => item.removeEventListener('click', handleGridClick));
                resolvePlaceShip();
            } else {
                alert('Choose another location');
            }
        }

        return shipPlacementPromise;
    }
    // Cycles through each ship type
    placeShip(0)
        .then(() => placeShip(1))
        .then(() => placeShip(2))
        .then(() => placeShip(3))
        .then(() => placeShip(4))
        .then(() => displayGame());
}

// Displays the main game UI, which includes the user's and computer's board
function displayGame() {
    main.textContent = '';
    const gridContainer = document.createElement('div');
    const nameContainer = document.createElement('div');
    const player1Name = document.createElement('p');
    const player2Name = document.createElement('p');
    const player1Grid = document.createElement('div');
    const player2Grid = document.createElement('div');

    // Creates and assigns gameboards to each grid
    player1Grid.gameData = (0,_player__WEBPACK_IMPORTED_MODULE_0__.player)(localStorage.getItem('name'));
    player2Grid.gameData = (0,_player__WEBPACK_IMPORTED_MODULE_0__.player)('Computer');

    player1Grid.setAttribute('id', 'grid');
    player1Grid.classList.add('faded-in');
    player2Grid.setAttribute('id', 'grid');
    player2Grid.classList.add('faded-in');
    player1Name.classList.add('name');
    player2Name.classList.add('name');
    gridContainer.classList.add('player-grid-cont', 'faded-in');
    nameContainer.classList.add('name-cont', 'faded-in');

    player1Name.textContent = localStorage.getItem('name');
    player2Name.textContent = 'Admiral LongSnout';

    createGrid(player1Grid, player2Grid);

    main.append(nameContainer, gridContainer);
    nameContainer.append(player1Name, player2Name);
    gridContainer.append(player1Grid, player2Grid);

    // Add ships to user's board
    Object.keys(localStorage).forEach((key) => {
        if (key === 'name') return;
        const value = JSON.parse(localStorage.getItem(key));
        player1Grid.gameData.playerBoard.placeShip(value.start, value.end, value.length, `${key}`);
    });

    // Adds ships to computer's board
    let length = 5;
    shipList.forEach((ship) => {
        const coors = getRandomArbitrary(0, 9, length);
        player2Grid.gameData.playerBoard.placeShip(coors.startCoor, coors.endCoor, length, `${ship}`);
        if (ship === 'Destroyer') return;
        length--;
    });
}

// A function that takes each player's grid element as parameters. Assigns coordinates to each grid item as well as click-to-attack capabilities for the enemy board.
function createGrid(player1Grid, player2Grid) {
    let x = 0;
    let y = -1;
    for (let i = 0; i < 100; i++) {
        x++;
        if (i % 10 === 0) {
            x = 0;
            y++;
        }

        const gridItems = [document.createElement('div'), document.createElement('div')];

        // Assigns coordinates to each grid item
        gridItems.forEach((item) => {
            item.setAttribute('id', 'gridItem');
            item.setAttribute('data-x', x);
            item.setAttribute('data-y', y);
        });

        gridItems[1].style['cursor'] = 'grab';

        // Event listener for computer grid
        gridItems[1].addEventListener('click', () => {
            // Sends an attack to the players board based on the grid location clicked
            player2Grid.gameData.playerBoard.recieveAttack(gridItems[1].dataset.x, gridItems[1].dataset.y);

            // Updates moves made by player1
            player1Grid.gameData.movesMade.push(`${gridItems[1].dataset.x}, ${gridItems[1].dataset.y}`);

            // Updates grid item with red circle if hit, grey circle if miss
            const hitMark = document.createElement('span');
            if (
                `${gridItems[1].dataset.x}, ${gridItems[1].dataset.y}` ===
                player2Grid.gameData.playerBoard.missedShots[player2Grid.gameData.playerBoard.missedShots.length - 1]
            ) {
                hitMark.classList.add('circle-miss');
            } else {
                hitMark.classList.add('circle-hit');
                checkIfGameOver(player2Grid);
            }
            gridItems[1].append(hitMark);

            // After the player's move, the computer attacks. Computer grid click events are suspended until it is player's move again. Brief pause is given between turns
            player2Grid.querySelectorAll('div').forEach((gridItem) => {
                gridItem.style['pointerEvents'] = 'none';
            });
            setTimeout(() => {
                computerAttack(player1Grid, player2Grid);
                player2Grid.querySelectorAll('div').forEach((gridItem) => {
                    if (gridItem.firstChild) {
                        return;
                    } else {
                        gridItem.style['pointerEvents'] = 'all';
                    }
                });
            }, 2000);
        });

        player1Grid.appendChild(gridItems[0]);
        player2Grid.appendChild(gridItems[1]);
    }
}

// Displays winner of game with option to play again
function displayGameOverScreen(winner) {
    const shader = document.createElement('div');
    const container = document.createElement('div');
    const message = document.createElement('p');
    const reset = document.createElement('button');

    shader.classList.add('shader');
    container.classList.add('gameOverCont');
    reset.classList.add('reset-btn');

    message.textContent = `${winner} wins!`;
    reset.textContent = 'Play again';

    reset.addEventListener('click', () => chooseShipPlacement());

    container.append(message, reset);
    main.append(shader, container);
}

// Helper functions

// A function to create the computer's attack and mark the result on the player's grid
function computerAttack(player1Grid, player2Grid) {
    const computerAttack = player2Grid.gameData.randomAttackCoor(); // Random coordinate generated as the computer's move
    player1Grid.gameData.playerBoard.recieveAttack(computerAttack[0], computerAttack[1]);

    const hitMark = document.createElement('span');
    if (
        `${computerAttack[0]}, ${computerAttack[1]}` === player1Grid.gameData.playerBoard.missedShots[player1Grid.gameData.playerBoard.missedShots.length - 1]
    ) {
        hitMark.classList.add('circle-miss');
    } else {
        hitMark.classList.add('circle-hit');
        checkIfGameOver(player1Grid);
    }
    document.querySelectorAll(`[data-x="${computerAttack[0]}"][data-y="${computerAttack[1]}"]`)[0].append(hitMark);
}

// Checks if all ships on the player's board are sunk
function checkIfGameOver(board) {
    if (board.gameData.playerBoard.statusOfShips()) {
        let winner = '';
        if (board === 'player1Grid') {
            winner = 'Admiral LongSnout';
        } else {
            winner = localStorage.getItem('name');
        }
        displayGameOverScreen(winner);
    }
    return;
}

// Implements the hover effect on the placement grid. Accepts x-y rotation button as arguments.
function implementHover(rotateBtn) {
    const gridItems = document.querySelectorAll('#gridItem');

    // Changes grid highlight hover effect depending on selected ship type
    gridItems.forEach((item) => {
        item.addEventListener('mouseover', () => {
            if (rotateBtn.value === 'x') {
                switch (item.value) {
                    case 'Carrier':
                        addHorizontalHoverEffect(item, 6, 4);
                        break;
                    case 'Battleship':
                        addHorizontalHoverEffect(item, 7, 3);
                        break;
                    case 'Destroyer':
                        addHorizontalHoverEffect(item, 8, 2);
                        break;
                    case 'Submarine':
                        addHorizontalHoverEffect(item, 8, 2);
                        break;
                    case 'Patrolboat':
                        addHorizontalHoverEffect(item, 9, 1);
                        break;
                }
            } else {
                switch (item.value) {
                    case 'Carrier':
                        addVerticalHoverEffect(gridItems, item, 6, 4);
                        break;
                    case 'Battleship':
                        addVerticalHoverEffect(gridItems, item, 7, 3);
                        break;
                    case 'Destroyer':
                        addVerticalHoverEffect(gridItems, item, 8, 2);
                        break;
                    case 'Submarine':
                        addVerticalHoverEffect(gridItems, item, 8, 2);
                        break;
                    case 'Patrolboat':
                        addVerticalHoverEffect(gridItems, item, 9, 1);
                        break;
                }
            }
        });
        item.addEventListener('mouseout', () => {
            gridItems.forEach((item) => item.classList.remove('hover'));
        });
    });
}

// Adds hovering effects to grid items to show ship placement horizontally.
// Accepts the grid item, the maximum x coordinate value for the hover effect to occur past,
// and the number of grid items after the hovered item to display the effect
function addHorizontalHoverEffect(gridItem, numLimit, numlength) {
    if (Number(gridItem.dataset.x) < numLimit) {
        gridItem.classList.add('hover');
        let nextSib = gridItem.nextElementSibling;
        for (let i = 0; i < numlength; i++) {
            nextSib.classList.add('hover');
            nextSib = nextSib.nextElementSibling;
        }
    }
}

// Adds hovering effects to grid items to show ship placement verticaly.
// Accepts nodelist of all grid items, the grid item, the maximum y coordinate value for the hover effect to occur past,
// and the number of grid items after the hovered item to display the effect
function addVerticalHoverEffect(gridItems, gridItem, numLimit, numlength) {
    if (Number(gridItem.dataset.y) < numLimit) {
        gridItem.classList.add('hover');
        let indexOfCurrent = Array.from(gridItems).indexOf(gridItem);
        for (let i = 0; i < numlength; i++) {
            indexOfCurrent += 10;
            gridItems[indexOfCurrent].classList.add('hover');
        }
    }
}

// Returns random coordinates that are length "length"
function getRandomArbitrary(min, max, length) {
    const xy = Math.floor(Math.random() * (2 - 0) + 0);
    let startCoor = [];
    let endCoor = [];

    startCoor.push(Math.floor(Math.random() * (max - min) + min));
    startCoor.push(Math.floor(Math.random() * (max - min) + min));
    if (xy === 0) {
        if (startCoor[0] + length > 9) {
            endCoor.push(startCoor[0] - length);
        } else {
            endCoor.push(startCoor[0] + length);
        }
        endCoor.push(startCoor[1]);
    } else {
        endCoor.push(startCoor[0]);
        if (startCoor[1] + length > 9) {
            endCoor.push(startCoor[1] - length);
        } else {
            endCoor.push(startCoor[1] + length);
        }
    }

    return { startCoor, endCoor };
}




/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const createShip = __webpack_require__(/*! ./ships */ "./src/ships.js");

const gameboard = () => {
    let boardInformation = {}; // Tracks locations of all ships
    let missedShots = []; // Tracks the coordinates of each missed shot as an array of string coordinates

    // Places a ship down on the game board. Accepts 2 arrays (start/end coordinates), the length, and name of the ship.
    const placeShip = ([startX, startY], [endX, endY], length, name) => {
        const ship = createShip(length); // Creates ship
        const startCord = [startX, startY];
        const endCord = [endX, endY];
        boardInformation[`${name}`] = { ship: ship, location: {} }; // Created ship is stored in boardInformation with property being the ship name. Value of this property is another object with ship information stored in 'ship' and ship location stored in 'location'

        // Records all coordinates the ship spans on the gameboard as property names for shipname object
        if (startCord[0] === endCord[0]) {
            if (startCord[1] < endCord[1]) {
                for (let i = 0; i <= length - 1; i++) {
                    boardInformation[`${name}`]['location'][`${startX}, ${startY + i}`] = true;
                }
            } else {
                for (let i = 0; i <= length - 1; i++) {
                    boardInformation[`${name}`]['location'][`${startX}, ${startY - i}`] = true;
                }
            }
        } else {
            if (startCord[0] < endCord[0]) {
                for (let i = 0; i <= length - 1; i++) {
                    boardInformation[`${name}`]['location'][`${startX + i}, ${startY}`] = true;
                }
            } else {
                for (let i = 0; i <= length - 1; i++) {
                    boardInformation[`${name}`]['location'][`${startX - i}, ${startY}`] = true;
                }
            }
        }
    };

    // Checks if attack at given coordinate hits a ship. If hit, records a hit on the ship.If misses, records the coordinate of the missed shot. Accepts an X and Y coordinate as arguments
    const recieveAttack = (x, y) => {
        for (let ship in boardInformation) {
            if (`${x}, ${y}` in boardInformation[ship]['location']) {
                boardInformation[ship]['ship'].hit();
                return true;
            }
        }
        missedShots.push(`${x}, ${y}`);
        return false;
    };

    // Traverses object and checks the sunk status of each ship. If all are sunken, returns true.
    const statusOfShips = () => {
        for (let ship in boardInformation) {
            if (boardInformation[ship]['ship'].isSunk() === false) {
                return false;
            }
        }
        return true;
    };

    return {
        boardInformation,
        placeShip,
        recieveAttack,
        missedShots,
        statusOfShips,
    };
};

module.exports = gameboard;


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   player: () => (/* binding */ player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gameboard__WEBPACK_IMPORTED_MODULE_0__);


const player = (name) => {
    const playerBoard = _gameboard__WEBPACK_IMPORTED_MODULE_0___default()();
    let movesMade = []; // An array that contains all coordinates targeted by the player.

    // A function that randomly chooses a coordinate with the value including/between the given min and max.
    const randomAttackCoor = (min, max) => {
        // if (playerBoard.missedShots[missedShots.length - 1] !== movesMade[movesMade.length - 1]) If the last coordinate hit a target

        const randomCoor = randomCoordinate(min, max);

        if (movesMade.includes(`${randomCoor[0]}, ${randomCoor[1]}`)) {
            return randomAttackCoor(min, max);
        } else {
            movesMade.push(`${randomCoor[0]}, ${randomCoor[1]}`);
            return randomCoor;
        }
    };

    return { name, playerBoard, randomAttackCoor, movesMade };
};

// Function to create a random coordinate point. Each axis value of the coordinate points will between the min and max value, defaulted to 1 and 10 respectively.
function randomCoordinate(min = 0, max = 9) {
    return [
        Math.floor(Math.random() * (max - min + 1)) + min,
        Math.floor(Math.random() * (max - min + 1)) + min,
    ];
}




/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((module) => {

const createShip = (shipLength) => {
    let numOfHits = 0; // The number of times the ship has been hit

    const getNumHits = () => {
        // returns number of hits the ship has taken
        return numOfHits;
    };

    const hit = () => {
        // Increases the number of hits by 1
        numOfHits++;
        return true;
    };

    const isSunk = () => {
        // Checks if the number of hits is equal to the length of the ship. If so, the ship is sunken
        if (numOfHits === shipLength) {
            return true;
        } else {
            return false;
        }
    };
    return { shipLength, getNumHits, hit, isSunk };
};

module.exports = createShip;


/***/ }),

/***/ "./src/assests/3200146.jpg":
/*!*********************************!*\
  !*** ./src/assests/3200146.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "eb2c28a5d6591402266a.jpg";

/***/ }),

/***/ "./src/assests/Amagro-bold.ttf":
/*!*************************************!*\
  !*** ./src/assests/Amagro-bold.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "25c73f990a22f8b8cf06.ttf";

/***/ }),

/***/ "./src/assests/old-concrete-texture-with-blue-paint.jpg":
/*!**************************************************************!*\
  !*** ./src/assests/old-concrete-texture-with-blue-paint.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "61ad11676a0b0f774700.jpg";

/***/ }),

/***/ "./src/assests/tipografia.ttf":
/*!************************************!*\
  !*** ./src/assests/tipografia.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a568414d599c346c4136.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");



window.addEventListener('load', () => (0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.nameSelection)());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsNkhBQTJDO0FBQ3ZGLDRDQUE0QywrSEFBNEM7QUFDeEYsNENBQTRDLGlMQUFxRTtBQUNqSCw0Q0FBNEMsdUhBQXdDO0FBQ3BGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxVQUFVLEtBQUssVUFBVSxhQUFhLGFBQWEsY0FBYyxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZ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V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNvQjs7QUFFekMsc0NBQXNDLHNEQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwLy4vc3JjL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZS1zaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZS1zaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZS1zaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZS1zaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGUtc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlLXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXN0cy90aXBvZ3JhZmlhLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYXNzZXN0cy9BbWFncm8tYm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2VzdHMvb2xkLWNvbmNyZXRlLXRleHR1cmUtd2l0aC1ibHVlLXBhaW50LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYXNzZXN0cy8zMjAwMTQ2LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICd0aXBvZ3JhZmlhJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdhbSc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbkBrZXlmcmFtZXMgcG9wb3V0IHtcbiAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgcG9wb3V0IHtcbiAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIG9wYWNpdHk6IDAlO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDEwMCU7XG4gICAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMSU7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTAwJTtcbiAgICB9XG59XG5cbi8qIEN1c3RvbSBQcm9wZXJ0aWVzICovXG46cm9vdCB7XG4gICAgLS1kZWZhdWx0LWZvbnQ6IDFyZW07XG4gICAgLS1zbWFsbC1zcGFjaW5nOiAxNXB4O1xuICAgIC0tbGFyZ2Utc3BhY2luZzogMzBweDtcbiAgICAtLWJ1dHRvbi1wYWRkbmc6IDNweCAyMHB4O1xuICAgIC0tc21hbGwtcGFkZGluZzogMTVweDtcbiAgICAtLWxhcmdlLXBhZGRpbmc6IDUwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIC0td2hpdGU6IHJnYigyNTUsIDI1MywgMjUwKTtcbiAgICAtLWJsYWNrOiByZ2IoNywgNiwgNik7XG4gICAgLS1ibHVlOiByZ2IoNjEsIDYxLCAyMDYpO1xuICAgIC0tZ3JleTogI2IzYjFhZjtcbiAgICAtLXJlZDogIzlmMjcxZTtcbn1cblxuLyogQ1NTIHJlc2V0IGFuZCBnZW5lcmFsIHJ1bGVzICovXG4qIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogJ2FtJywgJ3RpcG9ncmFmaWEnLCBzYW5zLXNlcmlmLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZGVmYXVsdC1mb250KTtcbn1cblxuaHRtbCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuI3NlbGVjdGlvbk1lbnUge1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4jZ2FtZU1lbnUge1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5ib2R5IHtcbn1cblxuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxNXZoO1xuICAgIG1hcmdpbjogdmFyKC0tc21hbGwtc3BhY2luZyk7XG59XG5cbi5oZWFkZXItdGV4dC1zZWxlY3Rpb24ge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBwYWRkaW5nOiB2YXIoLS1zbWFsbC1wYWRkaW5nKTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS13aGl0ZSk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmhlYWRlci10ZXh0LWdhbWUge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBwYWRkaW5nOiB2YXIoLS1zbWFsbC1wYWRkaW5nKTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwLCAwLjMpO1xufVxuXG5tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IHZhcigtLXNtYWxsLXNwYWNpbmcpO1xuICAgIGhlaWdodDogODB2aDtcbn1cblxuZm9vdGVyIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG5idXR0b24ge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBwYWRkaW5nOiB2YXIoLS1idXR0b24tcGFkZG5nKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IGdyYWI7XG59XG5cbiNjb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjMpO1xuICAgIHBhZGRpbmc6IHZhcigtLXNtYWxsLXBhZGRpbmcpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJsdWUpO1xufVxuXG4uZmFkZWQtaW4ge1xuICAgIGFuaW1hdGlvbjogZmFkZUluIGVhc2UgM3M7XG59XG5cbi8qIE5hbWUgTWVudSAqL1xuZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXdoaXRlKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBwYWRkaW5nOiB2YXIoLS1sYXJnZS1wYWRkaW5nKTtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjMpO1xuICAgIG1hcmdpbi1ib3R0b206IDE1MHB4O1xufVxuXG4uc3RhcnQtYnRuIHtcbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1sYXJnZS1zcGFjaW5nKTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXdoaXRlKTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCwgMC4zKTtcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4uc3RhcnQtYnRuLWNvbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qIFNoaXAgcGxhY2VtZW50IG1lbnUgKi9cbi5zaGlwLXBsYWNlbWVudC1jb250IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IHZhcigtLXNtYWxsLXNwYWNpbmcpO1xufVxuXG4uaG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzQsIDE4OSwgNzgsIDAuNik7XG59XG5cbi5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcbn1cblxuLnNoaXAtcGxhY2UtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxuLnBsYWNlbWVudC1tZXNzYWdlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogdmFyKC0tc21hbGwtcGFkZGluZyk7XG59XG5cbi5yZXNldC1idG4sXG4ucm90YXRlLWJ0biB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYmx1ZSk7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCwgMC4zKTtcbn1cbi8qIEdhbWUgbWVudSAqL1xuI2dyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1ibGFjayk7XG5cbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICB3aWR0aDogNTAwcHg7XG59XG5cbi5uYW1lLWNvbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDE1cHg7IC8qQ2hhbmdlIHRoaXMgd2hlbiByZXNpemluZyBncmlkIHNpemVzKi9cbn1cblxuLm5hbWUge1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5wbGF5ZXItZ3JpZC1jb250IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogdmFyKC0tc21hbGwtc3BhY2luZyk7XG59XG5cbiNncmlkSXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uZ3JpZC1pdGVtOmhvdmVyIHtcbiAgICBjdXJzb3I6IGdyYWI7XG59XG5cbi5jaXJjbGUtbWlzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiAzMCU7XG59XG5cbi5jaXJjbGUtaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogMzAlO1xufVxuXG4vKiBHYW1lIG92ZXIgc2NyZWVuICovXG4uc2hhZGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmdhbWVPdmVyQ29udCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiB2YXIoLS1zbWFsbC1zcGFjaW5nKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFjayk7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1ibHVlKTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAzMCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgaGVpZ2h0OiAxNSU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMi41JTtcbiAgICB6LWluZGV4OiAyO1xuXG4gICAgYW5pbWF0aW9uOiBwb3BvdXQgMXMgZWFzZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcG9wb3V0IDFzIGVhc2U7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsNENBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDRDQUFxQztBQUN6Qzs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQSxzQkFBc0I7QUFDdEI7SUFDSSxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUEsZ0NBQWdDO0FBQ2hDO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsNEVBQTRFO0lBQzVFLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpRkFBbUc7SUFDbkcsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUZBQXNFO0lBQ3RFLHNCQUFzQjtBQUMxQjs7QUFFQTtBQUNBOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLG1DQUFtQztJQUNuQyxtQkFBbUI7SUFDbkIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3QixtQ0FBbUM7SUFDbkMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBLGNBQWM7QUFDZDtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsVUFBVTtJQUNWLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQSx3QkFBd0I7QUFDeEI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakM7O0FBRUE7O0lBRUksNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7QUFDQSxjQUFjO0FBQ2Q7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDOztJQUV0Qyw2QkFBNkI7SUFDN0IsOEJBQThCOztJQUU5QixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGFBQWEsRUFBRSx1Q0FBdUM7QUFDMUQ7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsWUFBWTtJQUNaLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQyw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsVUFBVTs7SUFFVix5QkFBeUI7SUFDekIsaUNBQWlDO0FBQ3JDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ3RpcG9ncmFmaWEnO1xcbiAgICBzcmM6IHVybCgnLi9hc3Nlc3RzL3RpcG9ncmFmaWEudHRmJyk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2FtJztcXG4gICAgc3JjOiB1cmwoJy4vYXNzZXN0cy9BbWFncm8tYm9sZC50dGYnKTtcXG59XFxuXFxuQGtleWZyYW1lcyBwb3BvdXQge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIH1cXG4gICAgODAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB9XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBwb3BvdXQge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIH1cXG4gICAgODAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBvcGFjaXR5OiAwJTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICBvcGFjaXR5OiAxMDAlO1xcbiAgICB9XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIG9wYWNpdHk6IDElO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIG9wYWNpdHk6IDEwMCU7XFxuICAgIH1cXG59XFxuXFxuLyogQ3VzdG9tIFByb3BlcnRpZXMgKi9cXG46cm9vdCB7XFxuICAgIC0tZGVmYXVsdC1mb250OiAxcmVtO1xcbiAgICAtLXNtYWxsLXNwYWNpbmc6IDE1cHg7XFxuICAgIC0tbGFyZ2Utc3BhY2luZzogMzBweDtcXG4gICAgLS1idXR0b24tcGFkZG5nOiAzcHggMjBweDtcXG4gICAgLS1zbWFsbC1wYWRkaW5nOiAxNXB4O1xcbiAgICAtLWxhcmdlLXBhZGRpbmc6IDUwcHg7XFxuICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgLS13aGl0ZTogcmdiKDI1NSwgMjUzLCAyNTApO1xcbiAgICAtLWJsYWNrOiByZ2IoNywgNiwgNik7XFxuICAgIC0tYmx1ZTogcmdiKDYxLCA2MSwgMjA2KTtcXG4gICAgLS1ncmV5OiAjYjNiMWFmO1xcbiAgICAtLXJlZDogIzlmMjcxZTtcXG59XFxuXFxuLyogQ1NTIHJlc2V0IGFuZCBnZW5lcmFsIHJ1bGVzICovXFxuKiB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnYW0nLCAndGlwb2dyYWZpYScsIHNhbnMtc2VyaWYsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZGVmYXVsdC1mb250KTtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNzZWxlY3Rpb25NZW51IHtcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL2Fzc2VzdHMvb2xkLWNvbmNyZXRlLXRleHR1cmUtd2l0aC1ibHVlLXBhaW50LmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4jZ2FtZU1lbnUge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vYXNzZXN0cy8zMjAwMTQ2LmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG5ib2R5IHtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTV2aDtcXG4gICAgbWFyZ2luOiB2YXIoLS1zbWFsbC1zcGFjaW5nKTtcXG59XFxuXFxuLmhlYWRlci10ZXh0LXNlbGVjdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgcGFkZGluZzogdmFyKC0tc21hbGwtcGFkZGluZyk7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4uaGVhZGVyLXRleHQtZ2FtZSB7XFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXG4gICAgcGFkZGluZzogdmFyKC0tc21hbGwtcGFkZGluZyk7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJsdWUpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiB2YXIoLS1zbWFsbC1zcGFjaW5nKTtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiB2YXIoLS1idXR0b24tcGFkZG5nKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjMpO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zbWFsbC1wYWRkaW5nKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJsdWUpO1xcbn1cXG5cXG4uZmFkZWQtaW4ge1xcbiAgICBhbmltYXRpb246IGZhZGVJbiBlYXNlIDNzO1xcbn1cXG5cXG4vKiBOYW1lIE1lbnUgKi9cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0td2hpdGUpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgcGFkZGluZzogdmFyKC0tbGFyZ2UtcGFkZGluZyk7XFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjMpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNTBweDtcXG59XFxuXFxuLnN0YXJ0LWJ0biB7XFxuICAgIG1hcmdpbi10b3A6IHZhcigtLWxhcmdlLXNwYWNpbmcpO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuICAgIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwLCAwLjMpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4uc3RhcnQtYnRuLWNvbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyogU2hpcCBwbGFjZW1lbnQgbWVudSAqL1xcbi5zaGlwLXBsYWNlbWVudC1jb250IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogdmFyKC0tc21hbGwtc3BhY2luZyk7XFxufVxcblxcbi5ob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzQsIDE4OSwgNzgsIDAuNik7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxufVxcblxcbi5zaGlwLXBsYWNlLXRleHQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLnBsYWNlbWVudC1tZXNzYWdlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zbWFsbC1wYWRkaW5nKTtcXG59XFxuXFxuLnJlc2V0LWJ0bixcXG4ucm90YXRlLWJ0biB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJsdWUpO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCwgMC4zKTtcXG59XFxuLyogR2FtZSBtZW51ICovXFxuI2dyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJsYWNrKTtcXG5cXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICB3aWR0aDogNTAwcHg7XFxufVxcblxcbi5uYW1lLWNvbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHdpZHRoOiAxMDE1cHg7IC8qQ2hhbmdlIHRoaXMgd2hlbiByZXNpemluZyBncmlkIHNpemVzKi9cXG59XFxuXFxuLm5hbWUge1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnBsYXllci1ncmlkLWNvbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IHZhcigtLXNtYWxsLXNwYWNpbmcpO1xcbn1cXG5cXG4jZ3JpZEl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5ncmlkLWl0ZW06aG92ZXIge1xcbiAgICBjdXJzb3I6IGdyYWI7XFxufVxcblxcbi5jaXJjbGUtbWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXkpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIGhlaWdodDogMzAlO1xcbn1cXG5cXG4uY2lyY2xlLWhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiAzMCU7XFxufVxcblxcbi8qIEdhbWUgb3ZlciBzY3JlZW4gKi9cXG4uc2hhZGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDBweDtcXG4gICAgbGVmdDogMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5nYW1lT3ZlckNvbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiB2YXIoLS1zbWFsbC1zcGFjaW5nKTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2spO1xcbiAgICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYmx1ZSk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAzMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTIuNSU7XFxuICAgIHotaW5kZXg6IDI7XFxuXFxuICAgIGFuaW1hdGlvbjogcG9wb3V0IDFzIGVhc2U7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwb3BvdXQgMXMgZWFzZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwbGF5ZXIgfSBmcm9tICcuL3BsYXllcic7XG5cbi8vR2xvYmFsIHZhcmlhYmxlc1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5jb25zdCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpO1xuY29uc3Qgc2hpcExpc3QgPSBbJ0NhcnJpZXInLCAnQmF0dGxlc2hpcCcsICdEZXN0cm95ZXInLCAnU3VibWFyaW5lJywgJ1BhdHJvbGJvYXQnXTtcbmNvbnN0IGJhdHRsZXNoaXBUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlci10ZXh0LXNlbGVjdGlvbicpO1xuXG4vLyBET00gY3JlYXRpb25cblxuLy8gQ3JlYXRlcyBtZW51IHRvIHNlbGVjdCB5b3VyIG5hbWVcbmZ1bmN0aW9uIG5hbWVTZWxlY3Rpb24oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBzdGFydEdhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBidG5Db250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBodG1sLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2VsZWN0aW9uTWVudScpO1xuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWUnKTtcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdDaG9vc2UgYSBuYW1lJyk7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZScpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ05hbWU6JztcbiAgICBzdGFydEdhbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIHN0YXJ0R2FtZS5jbGFzc0xpc3QuYWRkKCdzdGFydC1idG4nKTtcbiAgICBzdGFydEdhbWUudGV4dENvbnRlbnQgPSAnU3RhcnQgR2FtZSc7XG4gICAgc3RhcnRHYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbmFtZScsIGAke25hbWVJbnB1dC52YWx1ZX1gKTtcbiAgICAgICAgY2hvb3NlU2hpcFBsYWNlbWVudCgpO1xuICAgIH0pO1xuICAgIGJ0bkNvbnQuY2xhc3NMaXN0LmFkZCgnc3RhcnQtYnRuLWNvbnQnKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgYnRuQ29udC5hcHBlbmRDaGlsZChzdGFydEdhbWUpO1xuICAgIGZvcm0uYXBwZW5kKGxhYmVsLCBuYW1lSW5wdXQsIGJ0bkNvbnQpO1xufVxuXG4vLyBDcmVhdGVzIHRoZSBET00gZm9yIHRoZSB1c2VyIHRvIHNlbGVjdCB3aGVyZSB0aGV5IHdhbnQgdG8gcGxhY2UgdGhlcmUgc2hpcHMuXG5mdW5jdGlvbiBjaG9vc2VTaGlwUGxhY2VtZW50KCkge1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJzsgLy8gQ2xlYXJzIG1haW5cblxuICAgIC8vIFNoaXAgcGxhY2VtZW50IERPTVxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCByb3RhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGdyaWRDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgaHRtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dhbWVNZW51Jyk7XG4gICAgYmF0dGxlc2hpcFRleHQuY2xhc3NOYW1lID0gJyc7XG4gICAgYmF0dGxlc2hpcFRleHQuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLXRleHQtZ2FtZScpO1xuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3BsYWNlbWVudC1tZXNzYWdlJyk7XG4gICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlLXRleHQnKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWluZXInKTtcbiAgICByb3RhdGVCdG4uY2xhc3NMaXN0LmFkZCgncm90YXRlLWJ0bicpO1xuICAgIGdyaWRDb250LmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VtZW50LWNvbnQnKTtcbiAgICBncmlkLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ3JpZCcpO1xuXG4gICAgLy8gUm90YXRlIGJ1dHRvbiB0byBzZXQgb3JpZW50YXRpb24gb2Ygc2hpcCBwbGFjZW1lbnRcbiAgICByb3RhdGVCdG4udGV4dENvbnRlbnQgPSAnUm90YXRlJztcbiAgICByb3RhdGVCdG4udmFsdWUgPSAneCc7XG4gICAgcm90YXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAocm90YXRlQnRuLnZhbHVlID09PSAneCcpIHtcbiAgICAgICAgICAgIHJvdGF0ZUJ0bi52YWx1ZSA9ICd5JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJvdGF0ZUJ0bi52YWx1ZSA9ICd4JztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gR3JpZCBVSSBjcmVhdGlvbiBmb3IgcGxheWVyIHNoaXAgcGxhY2VtZW50IGNob2ljZVxuICAgIGxldCB4ID0gMDtcbiAgICBsZXQgeSA9IC0xO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgeCsrO1xuICAgICAgICBpZiAoaSAlIDEwID09PSAwKSB7XG4gICAgICAgICAgICB4ID0gMDtcbiAgICAgICAgICAgIHkrKztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBncmlkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIC8vIEFzc2lnbnMgY29vcmRpbmF0ZXMgdG8gZWFjaCBncmlkIGl0ZW1cbiAgICAgICAgZ3JpZEl0ZW0uc2V0QXR0cmlidXRlKCdpZCcsICdncmlkSXRlbScpO1xuICAgICAgICBncmlkSXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEteCcsIHgpO1xuICAgICAgICBncmlkSXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEteScsIHkpO1xuXG4gICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoZ3JpZEl0ZW0pO1xuICAgIH1cblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgICBncmlkQ29udC5hcHBlbmQocm90YXRlQnRuLCBncmlkKTtcbiAgICBjb250YWluZXIuYXBwZW5kKGhlYWRlciwgZ3JpZENvbnQpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIGNvbnN0IGdyaWRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNncmlkSXRlbScpO1xuICAgIGxldCBzaGlwTGlzdEluZGV4ID0gMDtcblxuICAgIC8vIFRha2VzIGluIGEgZ3JpZCBJdGVtIGFzIGEgcGFyYW10ZXIuIEFkZHMgbWFya2VyIHRoYXQgZGlzcGxheXMgd2hlcmUgZWFjaCBzaGlwIGhhcyBiZWVuIGFkZGVkIHRvIHRoZSBncmlkLiBBbHNvIHNhdmVzIHRoZSBzaGlwJ3MgbG9jYXRpb24gYW5kIGxlbmd0aCB0byBsb2NhbCBzdG9yYWdlLiBUaGlzIHJ1bnMgb24gZ3JpZEl0ZW0gY2xpY2tcbiAgICBmdW5jdGlvbiBzYXZlU2hpcExvY2F0aW9uKCkge1xuICAgICAgICAvLyBTZWxlY3RzIHRoZSBob3ZlcmVkIGl0ZW1zIGFuZCBhZGRzIHRoZSBzZWxlY3RlZCBjbGFzcyB0byBtYXJrIHRoZSBzZWxlY3Rpb24gbG9jYXRpb25cbiAgICAgICAgY29uc3QgaG92ZXJlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3ZlcicpO1xuICAgICAgICBsZXQgY29uZGl0aW9uTWV0ID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaG92ZXJlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGhvdmVyZWRbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XG4gICAgICAgICAgICAgICAgY29uZGl0aW9uTWV0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZGl0aW9uTWV0KSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGhvdmVyZWQuZm9yRWFjaCgoZ3JpZEl0ZW0pID0+IGdyaWRJdGVtLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJykpO1xuXG4gICAgICAgIC8vRGV0ZXJtaW5lIHNoaXAgbGVuZ3RoXG4gICAgICAgIGxldCBsZW5ndGggPSAwO1xuICAgICAgICBpZiAoTnVtYmVyKGhvdmVyZWRbMF0uZGF0YXNldC54KSA9PT0gTnVtYmVyKGhvdmVyZWRbaG92ZXJlZC5sZW5ndGggLSAxXS5kYXRhc2V0LngpKSB7XG4gICAgICAgICAgICBsZW5ndGggPSAxICsgTnVtYmVyKGhvdmVyZWRbaG92ZXJlZC5sZW5ndGggLSAxXS5kYXRhc2V0LnkpIC0gTnVtYmVyKGhvdmVyZWRbMF0uZGF0YXNldC55KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IDEgKyBOdW1iZXIoaG92ZXJlZFtob3ZlcmVkLmxlbmd0aCAtIDFdLmRhdGFzZXQueCkgLSBOdW1iZXIoaG92ZXJlZFswXS5kYXRhc2V0LngpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2F2ZXMgZGF0YSB0byBsb2NhbCBzdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgc2hpcExpc3Rbc2hpcExpc3RJbmRleF0sXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IFtOdW1iZXIoaG92ZXJlZFswXS5kYXRhc2V0LngpLCBOdW1iZXIoaG92ZXJlZFswXS5kYXRhc2V0LnkpXSxcbiAgICAgICAgICAgICAgICBlbmQ6IFtOdW1iZXIoaG92ZXJlZFtob3ZlcmVkLmxlbmd0aCAtIDFdLmRhdGFzZXQueCksIE51bWJlcihob3ZlcmVkW2hvdmVyZWQubGVuZ3RoIC0gMV0uZGF0YXNldC55KV0sXG4gICAgICAgICAgICAgICAgbGVuZ3RoOiBsZW5ndGgsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgICAgc2hpcExpc3RJbmRleCsrO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBUYWtlcyBpbiB0aGUgc2hpcExpc3QgaW5kZXggYXMgYSBwYXJhbXRlci4gUmV0dXJucyBhIHByb21pc2UgdGhhdCBkeW5hbWljYWxseSBjaGFuZ2VzIHRleHQgdG8gdGVsbCB0aGUgdXNlciB3aGljaCBzaGlwIGlzIGJlaW5nIHBsYWNlZC5cbiAgICAvLyBBbHNvIGltcGxlbWVudHMgdGhlIGhvdmVyIGVmZmVjdCBhbmQgc2hpcCBzYXZpbmcgbG9naWNcbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAoaW5kZXgpIHtcbiAgICAgICAgbGV0IHJlc29sdmVQbGFjZVNoaXA7XG4gICAgICAgIGNvbnN0IHNoaXBQbGFjZW1lbnRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmVQbGFjZVNoaXAgPSByZXNvbHZlOyAvLyBDYXB0dXJlIHRoZSByZXNvbHZlIGZ1bmN0aW9uXG4gICAgICAgICAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gYFBsYWNlIHlvdXIgJHtzaGlwTGlzdFtpbmRleF19YDtcbiAgICAgICAgICAgIGdyaWRJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS52YWx1ZSA9IGBgO1xuICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUgPSBgJHtzaGlwTGlzdFtpbmRleF19YDtcbiAgICAgICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlR3JpZENsaWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaW1wbGVtZW50SG92ZXIocm90YXRlQnRuKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRXhlY3V0ZXMgd2hlbiBhIGdyaWRJdGVtIGlzIGNsaWNrZWQuIFNhdmVzIHRoZSBwbGFjZWQgc2hpcCdzIGxvY2F0aW9uIG9yIHJlcXVyaWVzIHRoZSB1c2VyIHRvIHNlbGVjdCBhIG5ldyBsb2NhdGlvbiBpZiBhbiBlcnJvciBvY2N1cnNcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlR3JpZENsaWNrKCkge1xuICAgICAgICAgICAgaWYgKHNhdmVTaGlwTG9jYXRpb24oKSkge1xuICAgICAgICAgICAgICAgIGdyaWRJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlR3JpZENsaWNrKSk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZVBsYWNlU2hpcCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnQ2hvb3NlIGFub3RoZXIgbG9jYXRpb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzaGlwUGxhY2VtZW50UHJvbWlzZTtcbiAgICB9XG4gICAgLy8gQ3ljbGVzIHRocm91Z2ggZWFjaCBzaGlwIHR5cGVcbiAgICBwbGFjZVNoaXAoMClcbiAgICAgICAgLnRoZW4oKCkgPT4gcGxhY2VTaGlwKDEpKVxuICAgICAgICAudGhlbigoKSA9PiBwbGFjZVNoaXAoMikpXG4gICAgICAgIC50aGVuKCgpID0+IHBsYWNlU2hpcCgzKSlcbiAgICAgICAgLnRoZW4oKCkgPT4gcGxhY2VTaGlwKDQpKVxuICAgICAgICAudGhlbigoKSA9PiBkaXNwbGF5R2FtZSgpKTtcbn1cblxuLy8gRGlzcGxheXMgdGhlIG1haW4gZ2FtZSBVSSwgd2hpY2ggaW5jbHVkZXMgdGhlIHVzZXIncyBhbmQgY29tcHV0ZXIncyBib2FyZFxuZnVuY3Rpb24gZGlzcGxheUdhbWUoKSB7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIGNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBuYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcGxheWVyMU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcGxheWVyMk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgcGxheWVyMUdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwbGF5ZXIyR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgLy8gQ3JlYXRlcyBhbmQgYXNzaWducyBnYW1lYm9hcmRzIHRvIGVhY2ggZ3JpZFxuICAgIHBsYXllcjFHcmlkLmdhbWVEYXRhID0gcGxheWVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCduYW1lJykpO1xuICAgIHBsYXllcjJHcmlkLmdhbWVEYXRhID0gcGxheWVyKCdDb21wdXRlcicpO1xuXG4gICAgcGxheWVyMUdyaWQuc2V0QXR0cmlidXRlKCdpZCcsICdncmlkJyk7XG4gICAgcGxheWVyMUdyaWQuY2xhc3NMaXN0LmFkZCgnZmFkZWQtaW4nKTtcbiAgICBwbGF5ZXIyR3JpZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dyaWQnKTtcbiAgICBwbGF5ZXIyR3JpZC5jbGFzc0xpc3QuYWRkKCdmYWRlZC1pbicpO1xuICAgIHBsYXllcjFOYW1lLmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcbiAgICBwbGF5ZXIyTmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gICAgZ3JpZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItZ3JpZC1jb250JywgJ2ZhZGVkLWluJyk7XG4gICAgbmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduYW1lLWNvbnQnLCAnZmFkZWQtaW4nKTtcblxuICAgIHBsYXllcjFOYW1lLnRleHRDb250ZW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25hbWUnKTtcbiAgICBwbGF5ZXIyTmFtZS50ZXh0Q29udGVudCA9ICdBZG1pcmFsIExvbmdTbm91dCc7XG5cbiAgICBjcmVhdGVHcmlkKHBsYXllcjFHcmlkLCBwbGF5ZXIyR3JpZCk7XG5cbiAgICBtYWluLmFwcGVuZChuYW1lQ29udGFpbmVyLCBncmlkQ29udGFpbmVyKTtcbiAgICBuYW1lQ29udGFpbmVyLmFwcGVuZChwbGF5ZXIxTmFtZSwgcGxheWVyMk5hbWUpO1xuICAgIGdyaWRDb250YWluZXIuYXBwZW5kKHBsYXllcjFHcmlkLCBwbGF5ZXIyR3JpZCk7XG5cbiAgICAvLyBBZGQgc2hpcHMgdG8gdXNlcidzIGJvYXJkXG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGtleSA9PT0gJ25hbWUnKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHZhbHVlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcbiAgICAgICAgcGxheWVyMUdyaWQuZ2FtZURhdGEucGxheWVyQm9hcmQucGxhY2VTaGlwKHZhbHVlLnN0YXJ0LCB2YWx1ZS5lbmQsIHZhbHVlLmxlbmd0aCwgYCR7a2V5fWApO1xuICAgIH0pO1xuXG4gICAgLy8gQWRkcyBzaGlwcyB0byBjb21wdXRlcidzIGJvYXJkXG4gICAgbGV0IGxlbmd0aCA9IDU7XG4gICAgc2hpcExpc3QuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBjb25zdCBjb29ycyA9IGdldFJhbmRvbUFyYml0cmFyeSgwLCA5LCBsZW5ndGgpO1xuICAgICAgICBwbGF5ZXIyR3JpZC5nYW1lRGF0YS5wbGF5ZXJCb2FyZC5wbGFjZVNoaXAoY29vcnMuc3RhcnRDb29yLCBjb29ycy5lbmRDb29yLCBsZW5ndGgsIGAke3NoaXB9YCk7XG4gICAgICAgIGlmIChzaGlwID09PSAnRGVzdHJveWVyJykgcmV0dXJuO1xuICAgICAgICBsZW5ndGgtLTtcbiAgICB9KTtcbn1cblxuLy8gQSBmdW5jdGlvbiB0aGF0IHRha2VzIGVhY2ggcGxheWVyJ3MgZ3JpZCBlbGVtZW50IGFzIHBhcmFtZXRlcnMuIEFzc2lnbnMgY29vcmRpbmF0ZXMgdG8gZWFjaCBncmlkIGl0ZW0gYXMgd2VsbCBhcyBjbGljay10by1hdHRhY2sgY2FwYWJpbGl0aWVzIGZvciB0aGUgZW5lbXkgYm9hcmQuXG5mdW5jdGlvbiBjcmVhdGVHcmlkKHBsYXllcjFHcmlkLCBwbGF5ZXIyR3JpZCkge1xuICAgIGxldCB4ID0gMDtcbiAgICBsZXQgeSA9IC0xO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICAgICAgeCsrO1xuICAgICAgICBpZiAoaSAlIDEwID09PSAwKSB7XG4gICAgICAgICAgICB4ID0gMDtcbiAgICAgICAgICAgIHkrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdyaWRJdGVtcyA9IFtkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyldO1xuXG4gICAgICAgIC8vIEFzc2lnbnMgY29vcmRpbmF0ZXMgdG8gZWFjaCBncmlkIGl0ZW1cbiAgICAgICAgZ3JpZEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdpZCcsICdncmlkSXRlbScpO1xuICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEteCcsIHgpO1xuICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2RhdGEteScsIHkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBncmlkSXRlbXNbMV0uc3R5bGVbJ2N1cnNvciddID0gJ2dyYWInO1xuXG4gICAgICAgIC8vIEV2ZW50IGxpc3RlbmVyIGZvciBjb21wdXRlciBncmlkXG4gICAgICAgIGdyaWRJdGVtc1sxXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vIFNlbmRzIGFuIGF0dGFjayB0byB0aGUgcGxheWVycyBib2FyZCBiYXNlZCBvbiB0aGUgZ3JpZCBsb2NhdGlvbiBjbGlja2VkXG4gICAgICAgICAgICBwbGF5ZXIyR3JpZC5nYW1lRGF0YS5wbGF5ZXJCb2FyZC5yZWNpZXZlQXR0YWNrKGdyaWRJdGVtc1sxXS5kYXRhc2V0LngsIGdyaWRJdGVtc1sxXS5kYXRhc2V0LnkpO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGVzIG1vdmVzIG1hZGUgYnkgcGxheWVyMVxuICAgICAgICAgICAgcGxheWVyMUdyaWQuZ2FtZURhdGEubW92ZXNNYWRlLnB1c2goYCR7Z3JpZEl0ZW1zWzFdLmRhdGFzZXQueH0sICR7Z3JpZEl0ZW1zWzFdLmRhdGFzZXQueX1gKTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlcyBncmlkIGl0ZW0gd2l0aCByZWQgY2lyY2xlIGlmIGhpdCwgZ3JleSBjaXJjbGUgaWYgbWlzc1xuICAgICAgICAgICAgY29uc3QgaGl0TWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBgJHtncmlkSXRlbXNbMV0uZGF0YXNldC54fSwgJHtncmlkSXRlbXNbMV0uZGF0YXNldC55fWAgPT09XG4gICAgICAgICAgICAgICAgcGxheWVyMkdyaWQuZ2FtZURhdGEucGxheWVyQm9hcmQubWlzc2VkU2hvdHNbcGxheWVyMkdyaWQuZ2FtZURhdGEucGxheWVyQm9hcmQubWlzc2VkU2hvdHMubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGhpdE1hcmsuY2xhc3NMaXN0LmFkZCgnY2lyY2xlLW1pc3MnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGl0TWFyay5jbGFzc0xpc3QuYWRkKCdjaXJjbGUtaGl0Jyk7XG4gICAgICAgICAgICAgICAgY2hlY2tJZkdhbWVPdmVyKHBsYXllcjJHcmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdyaWRJdGVtc1sxXS5hcHBlbmQoaGl0TWFyayk7XG5cbiAgICAgICAgICAgIC8vIEFmdGVyIHRoZSBwbGF5ZXIncyBtb3ZlLCB0aGUgY29tcHV0ZXIgYXR0YWNrcy4gQ29tcHV0ZXIgZ3JpZCBjbGljayBldmVudHMgYXJlIHN1c3BlbmRlZCB1bnRpbCBpdCBpcyBwbGF5ZXIncyBtb3ZlIGFnYWluLiBCcmllZiBwYXVzZSBpcyBnaXZlbiBiZXR3ZWVuIHR1cm5zXG4gICAgICAgICAgICBwbGF5ZXIyR3JpZC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKS5mb3JFYWNoKChncmlkSXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGdyaWRJdGVtLnN0eWxlWydwb2ludGVyRXZlbnRzJ10gPSAnbm9uZSc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVyQXR0YWNrKHBsYXllcjFHcmlkLCBwbGF5ZXIyR3JpZCk7XG4gICAgICAgICAgICAgICAgcGxheWVyMkdyaWQucXVlcnlTZWxlY3RvckFsbCgnZGl2JykuZm9yRWFjaCgoZ3JpZEl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdyaWRJdGVtLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRJdGVtLnN0eWxlWydwb2ludGVyRXZlbnRzJ10gPSAnYWxsJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMjAwMCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBsYXllcjFHcmlkLmFwcGVuZENoaWxkKGdyaWRJdGVtc1swXSk7XG4gICAgICAgIHBsYXllcjJHcmlkLmFwcGVuZENoaWxkKGdyaWRJdGVtc1sxXSk7XG4gICAgfVxufVxuXG4vLyBEaXNwbGF5cyB3aW5uZXIgb2YgZ2FtZSB3aXRoIG9wdGlvbiB0byBwbGF5IGFnYWluXG5mdW5jdGlvbiBkaXNwbGF5R2FtZU92ZXJTY3JlZW4od2lubmVyKSB7XG4gICAgY29uc3Qgc2hhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCByZXNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgc2hhZGVyLmNsYXNzTGlzdC5hZGQoJ3NoYWRlcicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnYW1lT3ZlckNvbnQnKTtcbiAgICByZXNldC5jbGFzc0xpc3QuYWRkKCdyZXNldC1idG4nKTtcblxuICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBgJHt3aW5uZXJ9IHdpbnMhYDtcbiAgICByZXNldC50ZXh0Q29udGVudCA9ICdQbGF5IGFnYWluJztcblxuICAgIHJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2hvb3NlU2hpcFBsYWNlbWVudCgpKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmQobWVzc2FnZSwgcmVzZXQpO1xuICAgIG1haW4uYXBwZW5kKHNoYWRlciwgY29udGFpbmVyKTtcbn1cblxuLy8gSGVscGVyIGZ1bmN0aW9uc1xuXG4vLyBBIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgY29tcHV0ZXIncyBhdHRhY2sgYW5kIG1hcmsgdGhlIHJlc3VsdCBvbiB0aGUgcGxheWVyJ3MgZ3JpZFxuZnVuY3Rpb24gY29tcHV0ZXJBdHRhY2socGxheWVyMUdyaWQsIHBsYXllcjJHcmlkKSB7XG4gICAgY29uc3QgY29tcHV0ZXJBdHRhY2sgPSBwbGF5ZXIyR3JpZC5nYW1lRGF0YS5yYW5kb21BdHRhY2tDb29yKCk7IC8vIFJhbmRvbSBjb29yZGluYXRlIGdlbmVyYXRlZCBhcyB0aGUgY29tcHV0ZXIncyBtb3ZlXG4gICAgcGxheWVyMUdyaWQuZ2FtZURhdGEucGxheWVyQm9hcmQucmVjaWV2ZUF0dGFjayhjb21wdXRlckF0dGFja1swXSwgY29tcHV0ZXJBdHRhY2tbMV0pO1xuXG4gICAgY29uc3QgaGl0TWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBpZiAoXG4gICAgICAgIGAke2NvbXB1dGVyQXR0YWNrWzBdfSwgJHtjb21wdXRlckF0dGFja1sxXX1gID09PSBwbGF5ZXIxR3JpZC5nYW1lRGF0YS5wbGF5ZXJCb2FyZC5taXNzZWRTaG90c1twbGF5ZXIxR3JpZC5nYW1lRGF0YS5wbGF5ZXJCb2FyZC5taXNzZWRTaG90cy5sZW5ndGggLSAxXVxuICAgICkge1xuICAgICAgICBoaXRNYXJrLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZS1taXNzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaGl0TWFyay5jbGFzc0xpc3QuYWRkKCdjaXJjbGUtaGl0Jyk7XG4gICAgICAgIGNoZWNrSWZHYW1lT3ZlcihwbGF5ZXIxR3JpZCk7XG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLXg9XCIke2NvbXB1dGVyQXR0YWNrWzBdfVwiXVtkYXRhLXk9XCIke2NvbXB1dGVyQXR0YWNrWzFdfVwiXWApWzBdLmFwcGVuZChoaXRNYXJrKTtcbn1cblxuLy8gQ2hlY2tzIGlmIGFsbCBzaGlwcyBvbiB0aGUgcGxheWVyJ3MgYm9hcmQgYXJlIHN1bmtcbmZ1bmN0aW9uIGNoZWNrSWZHYW1lT3Zlcihib2FyZCkge1xuICAgIGlmIChib2FyZC5nYW1lRGF0YS5wbGF5ZXJCb2FyZC5zdGF0dXNPZlNoaXBzKCkpIHtcbiAgICAgICAgbGV0IHdpbm5lciA9ICcnO1xuICAgICAgICBpZiAoYm9hcmQgPT09ICdwbGF5ZXIxR3JpZCcpIHtcbiAgICAgICAgICAgIHdpbm5lciA9ICdBZG1pcmFsIExvbmdTbm91dCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3aW5uZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmFtZScpO1xuICAgICAgICB9XG4gICAgICAgIGRpc3BsYXlHYW1lT3ZlclNjcmVlbih3aW5uZXIpO1xuICAgIH1cbiAgICByZXR1cm47XG59XG5cbi8vIEltcGxlbWVudHMgdGhlIGhvdmVyIGVmZmVjdCBvbiB0aGUgcGxhY2VtZW50IGdyaWQuIEFjY2VwdHMgeC15IHJvdGF0aW9uIGJ1dHRvbiBhcyBhcmd1bWVudHMuXG5mdW5jdGlvbiBpbXBsZW1lbnRIb3Zlcihyb3RhdGVCdG4pIHtcbiAgICBjb25zdCBncmlkSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZ3JpZEl0ZW0nKTtcblxuICAgIC8vIENoYW5nZXMgZ3JpZCBoaWdobGlnaHQgaG92ZXIgZWZmZWN0IGRlcGVuZGluZyBvbiBzZWxlY3RlZCBzaGlwIHR5cGVcbiAgICBncmlkSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChyb3RhdGVCdG4udmFsdWUgPT09ICd4Jykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoaXRlbS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdDYXJyaWVyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZEhvcml6b250YWxIb3ZlckVmZmVjdChpdGVtLCA2LCA0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdCYXR0bGVzaGlwJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZEhvcml6b250YWxIb3ZlckVmZmVjdChpdGVtLCA3LCAzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdEZXN0cm95ZXInOlxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkSG9yaXpvbnRhbEhvdmVyRWZmZWN0KGl0ZW0sIDgsIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1N1Ym1hcmluZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRIb3Jpem9udGFsSG92ZXJFZmZlY3QoaXRlbSwgOCwgMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUGF0cm9sYm9hdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRIb3Jpem9udGFsSG92ZXJFZmZlY3QoaXRlbSwgOSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoaXRlbS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdDYXJyaWVyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFZlcnRpY2FsSG92ZXJFZmZlY3QoZ3JpZEl0ZW1zLCBpdGVtLCA2LCA0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdCYXR0bGVzaGlwJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFZlcnRpY2FsSG92ZXJFZmZlY3QoZ3JpZEl0ZW1zLCBpdGVtLCA3LCAzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdEZXN0cm95ZXInOlxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkVmVydGljYWxIb3ZlckVmZmVjdChncmlkSXRlbXMsIGl0ZW0sIDgsIDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1N1Ym1hcmluZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRWZXJ0aWNhbEhvdmVyRWZmZWN0KGdyaWRJdGVtcywgaXRlbSwgOCwgMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUGF0cm9sYm9hdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRWZXJ0aWNhbEhvdmVyRWZmZWN0KGdyaWRJdGVtcywgaXRlbSwgOSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICAgICAgZ3JpZEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXInKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG4vLyBBZGRzIGhvdmVyaW5nIGVmZmVjdHMgdG8gZ3JpZCBpdGVtcyB0byBzaG93IHNoaXAgcGxhY2VtZW50IGhvcml6b250YWxseS5cbi8vIEFjY2VwdHMgdGhlIGdyaWQgaXRlbSwgdGhlIG1heGltdW0geCBjb29yZGluYXRlIHZhbHVlIGZvciB0aGUgaG92ZXIgZWZmZWN0IHRvIG9jY3VyIHBhc3QsXG4vLyBhbmQgdGhlIG51bWJlciBvZiBncmlkIGl0ZW1zIGFmdGVyIHRoZSBob3ZlcmVkIGl0ZW0gdG8gZGlzcGxheSB0aGUgZWZmZWN0XG5mdW5jdGlvbiBhZGRIb3Jpem9udGFsSG92ZXJFZmZlY3QoZ3JpZEl0ZW0sIG51bUxpbWl0LCBudW1sZW5ndGgpIHtcbiAgICBpZiAoTnVtYmVyKGdyaWRJdGVtLmRhdGFzZXQueCkgPCBudW1MaW1pdCkge1xuICAgICAgICBncmlkSXRlbS5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgICBsZXQgbmV4dFNpYiA9IGdyaWRJdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmV4dFNpYi5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgICAgICAgbmV4dFNpYiA9IG5leHRTaWIubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBBZGRzIGhvdmVyaW5nIGVmZmVjdHMgdG8gZ3JpZCBpdGVtcyB0byBzaG93IHNoaXAgcGxhY2VtZW50IHZlcnRpY2FseS5cbi8vIEFjY2VwdHMgbm9kZWxpc3Qgb2YgYWxsIGdyaWQgaXRlbXMsIHRoZSBncmlkIGl0ZW0sIHRoZSBtYXhpbXVtIHkgY29vcmRpbmF0ZSB2YWx1ZSBmb3IgdGhlIGhvdmVyIGVmZmVjdCB0byBvY2N1ciBwYXN0LFxuLy8gYW5kIHRoZSBudW1iZXIgb2YgZ3JpZCBpdGVtcyBhZnRlciB0aGUgaG92ZXJlZCBpdGVtIHRvIGRpc3BsYXkgdGhlIGVmZmVjdFxuZnVuY3Rpb24gYWRkVmVydGljYWxIb3ZlckVmZmVjdChncmlkSXRlbXMsIGdyaWRJdGVtLCBudW1MaW1pdCwgbnVtbGVuZ3RoKSB7XG4gICAgaWYgKE51bWJlcihncmlkSXRlbS5kYXRhc2V0LnkpIDwgbnVtTGltaXQpIHtcbiAgICAgICAgZ3JpZEl0ZW0uY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgICAgICAgbGV0IGluZGV4T2ZDdXJyZW50ID0gQXJyYXkuZnJvbShncmlkSXRlbXMpLmluZGV4T2YoZ3JpZEl0ZW0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpbmRleE9mQ3VycmVudCArPSAxMDtcbiAgICAgICAgICAgIGdyaWRJdGVtc1tpbmRleE9mQ3VycmVudF0uY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gUmV0dXJucyByYW5kb20gY29vcmRpbmF0ZXMgdGhhdCBhcmUgbGVuZ3RoIFwibGVuZ3RoXCJcbmZ1bmN0aW9uIGdldFJhbmRvbUFyYml0cmFyeShtaW4sIG1heCwgbGVuZ3RoKSB7XG4gICAgY29uc3QgeHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMiAtIDApICsgMCk7XG4gICAgbGV0IHN0YXJ0Q29vciA9IFtdO1xuICAgIGxldCBlbmRDb29yID0gW107XG5cbiAgICBzdGFydENvb3IucHVzaChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbikpO1xuICAgIHN0YXJ0Q29vci5wdXNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKSk7XG4gICAgaWYgKHh5ID09PSAwKSB7XG4gICAgICAgIGlmIChzdGFydENvb3JbMF0gKyBsZW5ndGggPiA5KSB7XG4gICAgICAgICAgICBlbmRDb29yLnB1c2goc3RhcnRDb29yWzBdIC0gbGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVuZENvb3IucHVzaChzdGFydENvb3JbMF0gKyBsZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGVuZENvb3IucHVzaChzdGFydENvb3JbMV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVuZENvb3IucHVzaChzdGFydENvb3JbMF0pO1xuICAgICAgICBpZiAoc3RhcnRDb29yWzFdICsgbGVuZ3RoID4gOSkge1xuICAgICAgICAgICAgZW5kQ29vci5wdXNoKHN0YXJ0Q29vclsxXSAtIGxlbmd0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbmRDb29yLnB1c2goc3RhcnRDb29yWzFdICsgbGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IHN0YXJ0Q29vciwgZW5kQ29vciB9O1xufVxuXG5leHBvcnQgeyBuYW1lU2VsZWN0aW9uIH07XG4iLCJjb25zdCBjcmVhdGVTaGlwID0gcmVxdWlyZSgnLi9zaGlwcycpO1xuXG5jb25zdCBnYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgbGV0IGJvYXJkSW5mb3JtYXRpb24gPSB7fTsgLy8gVHJhY2tzIGxvY2F0aW9ucyBvZiBhbGwgc2hpcHNcbiAgICBsZXQgbWlzc2VkU2hvdHMgPSBbXTsgLy8gVHJhY2tzIHRoZSBjb29yZGluYXRlcyBvZiBlYWNoIG1pc3NlZCBzaG90IGFzIGFuIGFycmF5IG9mIHN0cmluZyBjb29yZGluYXRlc1xuXG4gICAgLy8gUGxhY2VzIGEgc2hpcCBkb3duIG9uIHRoZSBnYW1lIGJvYXJkLiBBY2NlcHRzIDIgYXJyYXlzIChzdGFydC9lbmQgY29vcmRpbmF0ZXMpLCB0aGUgbGVuZ3RoLCBhbmQgbmFtZSBvZiB0aGUgc2hpcC5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoW3N0YXJ0WCwgc3RhcnRZXSwgW2VuZFgsIGVuZFldLCBsZW5ndGgsIG5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IGNyZWF0ZVNoaXAobGVuZ3RoKTsgLy8gQ3JlYXRlcyBzaGlwXG4gICAgICAgIGNvbnN0IHN0YXJ0Q29yZCA9IFtzdGFydFgsIHN0YXJ0WV07XG4gICAgICAgIGNvbnN0IGVuZENvcmQgPSBbZW5kWCwgZW5kWV07XG4gICAgICAgIGJvYXJkSW5mb3JtYXRpb25bYCR7bmFtZX1gXSA9IHsgc2hpcDogc2hpcCwgbG9jYXRpb246IHt9IH07IC8vIENyZWF0ZWQgc2hpcCBpcyBzdG9yZWQgaW4gYm9hcmRJbmZvcm1hdGlvbiB3aXRoIHByb3BlcnR5IGJlaW5nIHRoZSBzaGlwIG5hbWUuIFZhbHVlIG9mIHRoaXMgcHJvcGVydHkgaXMgYW5vdGhlciBvYmplY3Qgd2l0aCBzaGlwIGluZm9ybWF0aW9uIHN0b3JlZCBpbiAnc2hpcCcgYW5kIHNoaXAgbG9jYXRpb24gc3RvcmVkIGluICdsb2NhdGlvbidcblxuICAgICAgICAvLyBSZWNvcmRzIGFsbCBjb29yZGluYXRlcyB0aGUgc2hpcCBzcGFucyBvbiB0aGUgZ2FtZWJvYXJkIGFzIHByb3BlcnR5IG5hbWVzIGZvciBzaGlwbmFtZSBvYmplY3RcbiAgICAgICAgaWYgKHN0YXJ0Q29yZFswXSA9PT0gZW5kQ29yZFswXSkge1xuICAgICAgICAgICAgaWYgKHN0YXJ0Q29yZFsxXSA8IGVuZENvcmRbMV0pIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBsZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRJbmZvcm1hdGlvbltgJHtuYW1lfWBdWydsb2NhdGlvbiddW2Ake3N0YXJ0WH0sICR7c3RhcnRZICsgaX1gXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBsZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRJbmZvcm1hdGlvbltgJHtuYW1lfWBdWydsb2NhdGlvbiddW2Ake3N0YXJ0WH0sICR7c3RhcnRZIC0gaX1gXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHN0YXJ0Q29yZFswXSA8IGVuZENvcmRbMF0pIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBsZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRJbmZvcm1hdGlvbltgJHtuYW1lfWBdWydsb2NhdGlvbiddW2Ake3N0YXJ0WCArIGl9LCAke3N0YXJ0WX1gXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBsZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRJbmZvcm1hdGlvbltgJHtuYW1lfWBdWydsb2NhdGlvbiddW2Ake3N0YXJ0WCAtIGl9LCAke3N0YXJ0WX1gXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIENoZWNrcyBpZiBhdHRhY2sgYXQgZ2l2ZW4gY29vcmRpbmF0ZSBoaXRzIGEgc2hpcC4gSWYgaGl0LCByZWNvcmRzIGEgaGl0IG9uIHRoZSBzaGlwLklmIG1pc3NlcywgcmVjb3JkcyB0aGUgY29vcmRpbmF0ZSBvZiB0aGUgbWlzc2VkIHNob3QuIEFjY2VwdHMgYW4gWCBhbmQgWSBjb29yZGluYXRlIGFzIGFyZ3VtZW50c1xuICAgIGNvbnN0IHJlY2lldmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBzaGlwIGluIGJvYXJkSW5mb3JtYXRpb24pIHtcbiAgICAgICAgICAgIGlmIChgJHt4fSwgJHt5fWAgaW4gYm9hcmRJbmZvcm1hdGlvbltzaGlwXVsnbG9jYXRpb24nXSkge1xuICAgICAgICAgICAgICAgIGJvYXJkSW5mb3JtYXRpb25bc2hpcF1bJ3NoaXAnXS5oaXQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtaXNzZWRTaG90cy5wdXNoKGAke3h9LCAke3l9YCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgLy8gVHJhdmVyc2VzIG9iamVjdCBhbmQgY2hlY2tzIHRoZSBzdW5rIHN0YXR1cyBvZiBlYWNoIHNoaXAuIElmIGFsbCBhcmUgc3Vua2VuLCByZXR1cm5zIHRydWUuXG4gICAgY29uc3Qgc3RhdHVzT2ZTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBpbiBib2FyZEluZm9ybWF0aW9uKSB7XG4gICAgICAgICAgICBpZiAoYm9hcmRJbmZvcm1hdGlvbltzaGlwXVsnc2hpcCddLmlzU3VuaygpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9hcmRJbmZvcm1hdGlvbixcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICByZWNpZXZlQXR0YWNrLFxuICAgICAgICBtaXNzZWRTaG90cyxcbiAgICAgICAgc3RhdHVzT2ZTaGlwcyxcbiAgICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnYW1lYm9hcmQ7XG4iLCJpbXBvcnQgZ2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcblxuY29uc3QgcGxheWVyID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGdhbWVib2FyZCgpO1xuICAgIGxldCBtb3Zlc01hZGUgPSBbXTsgLy8gQW4gYXJyYXkgdGhhdCBjb250YWlucyBhbGwgY29vcmRpbmF0ZXMgdGFyZ2V0ZWQgYnkgdGhlIHBsYXllci5cblxuICAgIC8vIEEgZnVuY3Rpb24gdGhhdCByYW5kb21seSBjaG9vc2VzIGEgY29vcmRpbmF0ZSB3aXRoIHRoZSB2YWx1ZSBpbmNsdWRpbmcvYmV0d2VlbiB0aGUgZ2l2ZW4gbWluIGFuZCBtYXguXG4gICAgY29uc3QgcmFuZG9tQXR0YWNrQ29vciA9IChtaW4sIG1heCkgPT4ge1xuICAgICAgICAvLyBpZiAocGxheWVyQm9hcmQubWlzc2VkU2hvdHNbbWlzc2VkU2hvdHMubGVuZ3RoIC0gMV0gIT09IG1vdmVzTWFkZVttb3Zlc01hZGUubGVuZ3RoIC0gMV0pIElmIHRoZSBsYXN0IGNvb3JkaW5hdGUgaGl0IGEgdGFyZ2V0XG5cbiAgICAgICAgY29uc3QgcmFuZG9tQ29vciA9IHJhbmRvbUNvb3JkaW5hdGUobWluLCBtYXgpO1xuXG4gICAgICAgIGlmIChtb3Zlc01hZGUuaW5jbHVkZXMoYCR7cmFuZG9tQ29vclswXX0sICR7cmFuZG9tQ29vclsxXX1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJhbmRvbUF0dGFja0Nvb3IobWluLCBtYXgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW92ZXNNYWRlLnB1c2goYCR7cmFuZG9tQ29vclswXX0sICR7cmFuZG9tQ29vclsxXX1gKTtcbiAgICAgICAgICAgIHJldHVybiByYW5kb21Db29yO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7IG5hbWUsIHBsYXllckJvYXJkLCByYW5kb21BdHRhY2tDb29yLCBtb3Zlc01hZGUgfTtcbn07XG5cbi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHJhbmRvbSBjb29yZGluYXRlIHBvaW50LiBFYWNoIGF4aXMgdmFsdWUgb2YgdGhlIGNvb3JkaW5hdGUgcG9pbnRzIHdpbGwgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggdmFsdWUsIGRlZmF1bHRlZCB0byAxIGFuZCAxMCByZXNwZWN0aXZlbHkuXG5mdW5jdGlvbiByYW5kb21Db29yZGluYXRlKG1pbiA9IDAsIG1heCA9IDkpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluLFxuICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluLFxuICAgIF07XG59XG5cbmV4cG9ydCB7IHBsYXllciB9O1xuIiwiY29uc3QgY3JlYXRlU2hpcCA9IChzaGlwTGVuZ3RoKSA9PiB7XG4gICAgbGV0IG51bU9mSGl0cyA9IDA7IC8vIFRoZSBudW1iZXIgb2YgdGltZXMgdGhlIHNoaXAgaGFzIGJlZW4gaGl0XG5cbiAgICBjb25zdCBnZXROdW1IaXRzID0gKCkgPT4ge1xuICAgICAgICAvLyByZXR1cm5zIG51bWJlciBvZiBoaXRzIHRoZSBzaGlwIGhhcyB0YWtlblxuICAgICAgICByZXR1cm4gbnVtT2ZIaXRzO1xuICAgIH07XG5cbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIC8vIEluY3JlYXNlcyB0aGUgbnVtYmVyIG9mIGhpdHMgYnkgMVxuICAgICAgICBudW1PZkhpdHMrKztcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgLy8gQ2hlY2tzIGlmIHRoZSBudW1iZXIgb2YgaGl0cyBpcyBlcXVhbCB0byB0aGUgbGVuZ3RoIG9mIHRoZSBzaGlwLiBJZiBzbywgdGhlIHNoaXAgaXMgc3Vua2VuXG4gICAgICAgIGlmIChudW1PZkhpdHMgPT09IHNoaXBMZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4geyBzaGlwTGVuZ3RoLCBnZXROdW1IaXRzLCBoaXQsIGlzU3VuayB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IG5hbWVTZWxlY3Rpb24gfSBmcm9tICcuL0RPTS5qcyc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4gbmFtZVNlbGVjdGlvbigpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==