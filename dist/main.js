/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --color1: #262626;\n    --color2: #404040;\n    --color3: #525252;\n    --color4: #737373;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    text-decoration: none;\n    outline: none;\n}\n\nh1 {\n    font-size: 48px;\n}\n\nbutton {\n    border: 2px solid black;\n    border-radius: 50px;\n    background-color: var(--color4);\n    height: 50px;\n    width: 150px;\n    font-size: 22px;\n}\n\ninput {\n    width: 250px;\n    height: 40px;\n    padding: 10px;\n    font-size: 18px;\n    border-radius: 50px;\n}\n\n.title {\n    background-color: #262626;\n    height: 10vh;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 2fr 7fr;\n    min-height: 90vh;\n}\n\n.project, .projects {\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n}\n\nh3 {\n    font-size: 32px;\n}\n\n.projects {\n    background-color: #404040;\n}\n\n.projects-list {\n    padding: 16px 0;\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 16px;\n}\n\n.single-project {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    font-size: 28px;\n    border: 2px solid black;\n    border-radius: 30px;\n    padding: 12px;\n}\n\n.single-project > button {\n    font-size: 16px;\n    width: 100px;\n    height: 40px;\n}\n\n.project-name {\n    width: 150px;\n    overflow: hidden;\n}\n\nh2 {\n    font-size: 36px;\n}\n\n.project {\n    background-color: #525252;\n}\n\n.proj-name {\n    padding: 16px;\n    display: flex;\n    justify-content: center;\n    font-size: 48px;\n}\n\n.todos-list {\n    padding: 16px 0;\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 16px;\n}\n\n.title, .projects-title, .project-title {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.add-project, .add-todo {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.project-box, .todo-box {\n    color: white;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    background-color: rgba(0, 0, 0, 0.3);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.project-box-background, .todo-box-background {\n    font-size: 20px;\n    background-color: var(--color1);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 25px;\n    height: 200px;\n    width: 350px;\n    border-radius: 25px;\n}\n\n.todo-box-background {\n    width: 400px;\n    height: 500px;\n    padding: 0 24px;\n}\n\n.todo-box-background > div {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\ntextarea {\n    border-radius: 16px;\n    padding: 16px;\n}\n\nselect {\n    width: 150px;\n    height: 30px;\n}\n\n.hidden {\n    visibility: hidden;\n    display: none;\n}\n\n.todo {\n    padding: 12px;\n    font-size: 24px;\n    border: 2px solid black;\n    border-radius: 20px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 6px;\n}\n\n.todo > div {\n    justify-self: center;\n    align-self: center;\n    overflow: hidden;\n    width: 250px;\n}\n\n.left-name {\n    grid-row: 1 / 2;\n    grid-column: 1 / 2;\n}\n\n.mid-desc {\n    grid-row: 1 / 2;\n    grid-column: 2 / 3;\n}\n\n.left-prio {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n}\n\n.mid-date {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n}\n\n.todo > button {\n    justify-self: center;\n    align-self: center;\n    grid-row: 1 / 3;\n}\n\n.high {\n    border-color: red;\n}\n\n.medium {\n    border-color: yellow;\n}\n\n.low {\n    border-color: green;\n}\n\nh1, h2, h3 {\n    background-image: linear-gradient(90deg, red, yellow);\n    background-clip: text;\n    -webkit-background-clip: text;\n    color: transparent;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,qBAAqB;IACrB,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,+BAA+B;IAC/B,YAAY;IACZ,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,aAAa;IACb,0BAA0B;IAC1B,SAAS;AACb;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,0BAA0B;IAC1B,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,MAAM;IACN,oCAAoC;IACpC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,+BAA+B;IAC/B,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,aAAa;IACb,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,kCAAkC;IAClC,QAAQ;AACZ;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,qDAAqD;IACrD,qBAAqB;IACrB,6BAA6B;IAC7B,kBAAkB;AACtB","sourcesContent":[":root {\n    --color1: #262626;\n    --color2: #404040;\n    --color3: #525252;\n    --color4: #737373;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    text-decoration: none;\n    outline: none;\n}\n\nh1 {\n    font-size: 48px;\n}\n\nbutton {\n    border: 2px solid black;\n    border-radius: 50px;\n    background-color: var(--color4);\n    height: 50px;\n    width: 150px;\n    font-size: 22px;\n}\n\ninput {\n    width: 250px;\n    height: 40px;\n    padding: 10px;\n    font-size: 18px;\n    border-radius: 50px;\n}\n\n.title {\n    background-color: #262626;\n    height: 10vh;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 2fr 7fr;\n    min-height: 90vh;\n}\n\n.project, .projects {\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n}\n\nh3 {\n    font-size: 32px;\n}\n\n.projects {\n    background-color: #404040;\n}\n\n.projects-list {\n    padding: 16px 0;\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 16px;\n}\n\n.single-project {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    font-size: 28px;\n    border: 2px solid black;\n    border-radius: 30px;\n    padding: 12px;\n}\n\n.single-project > button {\n    font-size: 16px;\n    width: 100px;\n    height: 40px;\n}\n\n.project-name {\n    width: 150px;\n    overflow: hidden;\n}\n\nh2 {\n    font-size: 36px;\n}\n\n.project {\n    background-color: #525252;\n}\n\n.proj-name {\n    padding: 16px;\n    display: flex;\n    justify-content: center;\n    font-size: 48px;\n}\n\n.todos-list {\n    padding: 16px 0;\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 16px;\n}\n\n.title, .projects-title, .project-title {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.add-project, .add-todo {\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.project-box, .todo-box {\n    color: white;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    background-color: rgba(0, 0, 0, 0.3);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.project-box-background, .todo-box-background {\n    font-size: 20px;\n    background-color: var(--color1);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 25px;\n    height: 200px;\n    width: 350px;\n    border-radius: 25px;\n}\n\n.todo-box-background {\n    width: 400px;\n    height: 500px;\n    padding: 0 24px;\n}\n\n.todo-box-background > div {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\ntextarea {\n    border-radius: 16px;\n    padding: 16px;\n}\n\nselect {\n    width: 150px;\n    height: 30px;\n}\n\n.hidden {\n    visibility: hidden;\n    display: none;\n}\n\n.todo {\n    padding: 12px;\n    font-size: 24px;\n    border: 2px solid black;\n    border-radius: 20px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 6px;\n}\n\n.todo > div {\n    justify-self: center;\n    align-self: center;\n    overflow: hidden;\n    width: 250px;\n}\n\n.left-name {\n    grid-row: 1 / 2;\n    grid-column: 1 / 2;\n}\n\n.mid-desc {\n    grid-row: 1 / 2;\n    grid-column: 2 / 3;\n}\n\n.left-prio {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n}\n\n.mid-date {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n}\n\n.todo > button {\n    justify-self: center;\n    align-self: center;\n    grid-row: 1 / 3;\n}\n\n.high {\n    border-color: red;\n}\n\n.medium {\n    border-color: yellow;\n}\n\n.low {\n    border-color: green;\n}\n\nh1, h2, h3 {\n    background-image: linear-gradient(90deg, red, yellow);\n    background-clip: text;\n    -webkit-background-clip: text;\n    color: transparent;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor(title) {
        this.title = title;
        this.todos = [];
    }
}

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDo)
/* harmony export */ });
class ToDo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/project.js");




let projects = [];
let selected;

projects = JSON.parse(localStorage.getItem("projects") || "[]");

let projectsList = document.querySelector('.projects-list');
let addProject = document.querySelector('.add-project');
let projectBox = document.querySelector('.project-box');
let applyProject = document.querySelector('.apply-project');
let projTitle = document.querySelector('#proj-title');
let projName = document.querySelector('.proj-name');
let todosList = document.querySelector('.todos-list');
let addTodo = document.querySelector('.add-todo');
let todoBox = document.querySelector('.todo-box');
let applyTodo = document.querySelector('.apply-todo');
let todoTitle = document.querySelector('#todo-title');
let todoDescription = document.querySelector('#todo-description');
let todoDate = document.querySelector('#todo-date');
let todoPriority = document.querySelector('#todo-priority');

let sortTodos = function() {
    for(let i = 0; i < projects.length; i++) {
        for(let j = 0; j < projects[i].todos.length; j++) {
            for(let k = 0; k < projects[i].todos.length - j - 1; k++) {
                if((projects[i].todos[k].priority == 'low' && (projects[i].todos[k + 1].priority == 'medium' || projects[i].todos[k + 1].priority == 'high')) || (projects[i].todos[k].priority == 'medium' && projects[i].todos[k + 1].priority == 'high')) {
                    console.log(projects[i].todos[k]);
                    let tmp = projects[i].todos[k];
                    console.log(projects[i].todos[k + 1]);
                    projects[i].todos[k] = projects[i].todos[k + 1];
                    projects[i].todos[k + 1] = tmp;
                }
            }
        }
    }
}

let createTodos = function() {
    sortTodos();
    localStorage.removeItem('projects');
    for(let i = 0; i < projects.length; i++) {
        if(projects[i].title == selected) {
            todosList.textContent = '';
            for(let j = 0; j < projects[i].todos.length; j++) {
                let todo = document.createElement('div');
                todo.classList.add('todo');
                let nameTodo = document.createElement('div');
                nameTodo.classList.add('left-name');
                nameTodo.textContent = 'Title: ' + projects[i].todos[j].title;
                todo.appendChild(nameTodo);
                let descriptionTodo = document.createElement('div');
                descriptionTodo.classList.add('mid-desc');
                descriptionTodo.textContent = 'Description: ' + projects[i].todos[j].description;
                todo.appendChild(descriptionTodo);
                let dateTodo = document.createElement('div');
                dateTodo.classList.add('mid-date');
                dateTodo.textContent = 'Date: ' + projects[i].todos[j].dueDate;
                todo.appendChild(dateTodo);
                let priorityTodo = document.createElement('div');
                priorityTodo.classList.add('left-prio');
                priorityTodo.textContent = 'Priority: ' + projects[i].todos[j].priority;
                if(projects[i].todos[j].priority == 'high') {
                    todo.classList.add('high');
                } else if(projects[i].todos[j].priority == 'medium') {
                    todo.classList.add('medium');
                } else {
                    todo.classList.add('low');
                }
                todo.appendChild(priorityTodo);
                let removeTodo = document.createElement('button');
                removeTodo.textContent = 'Remove';
                removeTodo.addEventListener('click', () => {
                    localStorage.removeItem('projects');
                    projects[i].todos = projects[i].todos.filter(todo => {
                        for(let k = 0; k < projects[i].todos.length; k++) {
                            return todo.title != projects[i].todos[k].title
                        }
                    });
                    todosList.removeChild(todo);
                    localStorage.setItem('projects', JSON.stringify(projects));
                });
                todo.appendChild(removeTodo);
                todosList.appendChild(todo);
            }
        }
    }
    localStorage.setItem('projects', JSON.stringify(projects));
}

addTodo.addEventListener('click', () => {
    todoBox.classList.remove('hidden');
});

applyTodo.addEventListener('click', () => {
    todoBox.classList.add('hidden');
    let title = todoTitle.value;
    let description = todoDescription.value;
    let date = todoDate.value;
    let priority = todoPriority.value;
    if(title == '' || description == '' || date == '') {
        return;
    }
    let todo = new _todo_js__WEBPACK_IMPORTED_MODULE_1__["default"](title, description, date, priority);
    for(let i = 0; i < projects.length; i++) {
        if(projects[i].title == selected) {
            projects[i].todos.push(todo);
        }
    }
    todoTitle.value = '';
    todoDescription.value = '';
    todoDate.value = '';
    todoPriority.value = 'high';
    createTodos();
});

let showProject = function(name) {
    let project = document.createElement('div');
    let title = document.createElement('div');
    title.textContent = name;
    project.appendChild(title);
    projName.textContent = '';
    projName.appendChild(project);
    addTodo.removeAttribute('disabled');
    createTodos();
}

let createProject = function(name) {
    selected = name;
    let singleProject = document.createElement('div');
    singleProject.classList.add('single-project');
    let projectName = document.createElement('div');
    projectName.classList.add('project-name');
    projectName.textContent = name;
    let removeProject = document.createElement('button');
    removeProject.textContent = 'Remove';
    removeProject.addEventListener('click', () => {
        localStorage.removeItem('projects');
        projectsList.removeChild(singleProject);
        projects = projects.filter(project => project.title != name);
        projName.textContent = '';
        todosList.textContent = '';
        addTodo.setAttribute('disabled', '');
        localStorage.setItem('projects', JSON.stringify(projects));
    });
    singleProject.appendChild(projectName);
    singleProject.appendChild(removeProject);
    projectName.addEventListener('click', () => {
        projName.textContent = '';
        todosList.textContent = '';
        selected = name;
        showProject(selected);
    });
    projectsList.appendChild(singleProject);
    showProject(selected);
}

let displayProjects = function() {
    projectsList.textContent = '';
    for(let i = 0; i < projects.length; i++) {
        createProject(projects[i].title);
    }
}

addProject.addEventListener('click', () => {
    projectBox.classList.remove('hidden');
});

applyProject.addEventListener('click', () => {
    projectBox.classList.add('hidden');
    let title = projTitle.value;
    if(title == '') {
        return;
    }
    let project = new _project_js__WEBPACK_IMPORTED_MODULE_2__["default"](title);
    projTitle.value = '';
    projects.push(project);
    displayProjects();
});

displayProjects();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbURBQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tY29sb3IxOiAjMjYyNjI2O1xcbiAgICAtLWNvbG9yMjogIzQwNDA0MDtcXG4gICAgLS1jb2xvcjM6ICM1MjUyNTI7XFxuICAgIC0tY29sb3I0OiAjNzM3MzczO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3I0KTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuaW5wdXQge1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgN2ZyO1xcbiAgICBtaW4taGVpZ2h0OiA5MHZoO1xcbn1cXG5cXG4ucHJvamVjdCwgLnByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDA7XFxufVxcblxcbi5wcm9qZWN0cy1saXN0IHtcXG4gICAgcGFkZGluZzogMTZweCAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4uc2luZ2xlLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgcGFkZGluZzogMTJweDtcXG59XFxuXFxuLnNpbmdsZS1wcm9qZWN0ID4gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUyNTI1MjtcXG59XFxuXFxuLnByb2otbmFtZSB7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxufVxcblxcbi50b2Rvcy1saXN0IHtcXG4gICAgcGFkZGluZzogMTZweCAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4udGl0bGUsIC5wcm9qZWN0cy10aXRsZSwgLnByb2plY3QtdGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LCAuYWRkLXRvZG8ge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdC1ib3gsIC50b2RvLWJveCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWJveC1iYWNrZ3JvdW5kLCAudG9kby1ib3gtYmFja2dyb3VuZCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjVweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4udG9kby1ib3gtYmFja2dyb3VuZCB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgcGFkZGluZzogMCAyNHB4O1xcbn1cXG5cXG4udG9kby1ib3gtYmFja2dyb3VuZCA+IGRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuc2VsZWN0IHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvIHtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ2FwOiA2cHg7XFxufVxcblxcbi50b2RvID4gZGl2IHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4ubGVmdC1uYW1lIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi5taWQtZGVzYyB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG5cXG4ubGVmdC1wcmlvIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi5taWQtZGF0ZSB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG5cXG4udG9kbyA+IGJ1dHRvbiB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG59XFxuXFxuLmhpZ2gge1xcbiAgICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxuXFxuLm1lZGl1bSB7XFxuICAgIGJvcmRlci1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4ubG93IHtcXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuaDEsIGgyLCBoMyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmVkLCB5ZWxsb3cpO1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7SUFDVixxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLE1BQU07SUFDTixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFEQUFxRDtJQUNyRCxxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tY29sb3IxOiAjMjYyNjI2O1xcbiAgICAtLWNvbG9yMjogIzQwNDA0MDtcXG4gICAgLS1jb2xvcjM6ICM1MjUyNTI7XFxuICAgIC0tY29sb3I0OiAjNzM3MzczO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3I0KTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG59XFxuXFxuaW5wdXQge1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgN2ZyO1xcbiAgICBtaW4taGVpZ2h0OiA5MHZoO1xcbn1cXG5cXG4ucHJvamVjdCwgLnByb2plY3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LXNpemU6IDMycHg7XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDQwNDA7XFxufVxcblxcbi5wcm9qZWN0cy1saXN0IHtcXG4gICAgcGFkZGluZzogMTZweCAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4uc2luZ2xlLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgcGFkZGluZzogMTJweDtcXG59XFxuXFxuLnNpbmdsZS1wcm9qZWN0ID4gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuXFxuLnByb2plY3QtbmFtZSB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUyNTI1MjtcXG59XFxuXFxuLnByb2otbmFtZSB7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxufVxcblxcbi50b2Rvcy1saXN0IHtcXG4gICAgcGFkZGluZzogMTZweCAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4udGl0bGUsIC5wcm9qZWN0cy10aXRsZSwgLnByb2plY3QtdGl0bGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LCAuYWRkLXRvZG8ge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdC1ib3gsIC50b2RvLWJveCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWJveC1iYWNrZ3JvdW5kLCAudG9kby1ib3gtYmFja2dyb3VuZCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjVweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4udG9kby1ib3gtYmFja2dyb3VuZCB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgcGFkZGluZzogMCAyNHB4O1xcbn1cXG5cXG4udG9kby1ib3gtYmFja2dyb3VuZCA+IGRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXG4gICAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuc2VsZWN0IHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50b2RvIHtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ2FwOiA2cHg7XFxufVxcblxcbi50b2RvID4gZGl2IHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4ubGVmdC1uYW1lIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi5taWQtZGVzYyB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG5cXG4ubGVmdC1wcmlvIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbi5taWQtZGF0ZSB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG5cXG4udG9kbyA+IGJ1dHRvbiB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG59XFxuXFxuLmhpZ2gge1xcbiAgICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxuXFxuLm1lZGl1bSB7XFxuICAgIGJvcmRlci1jb2xvcjogeWVsbG93O1xcbn1cXG5cXG4ubG93IHtcXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuaDEsIGgyLCBoMyB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmVkLCB5ZWxsb3cpO1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnRvZG9zID0gW107XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvRG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBUb0RvIGZyb20gJy4vdG9kby5qcyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xuXG5sZXQgcHJvamVjdHMgPSBbXTtcbmxldCBzZWxlY3RlZDtcblxucHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikgfHwgXCJbXVwiKTtcblxubGV0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1saXN0Jyk7XG5sZXQgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xubGV0IHByb2plY3RCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1ib3gnKTtcbmxldCBhcHBseVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwbHktcHJvamVjdCcpO1xubGV0IHByb2pUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qLXRpdGxlJyk7XG5sZXQgcHJvak5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvai1uYW1lJyk7XG5sZXQgdG9kb3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zLWxpc3QnKTtcbmxldCBhZGRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10b2RvJyk7XG5sZXQgdG9kb0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWJveCcpO1xubGV0IGFwcGx5VG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHBseS10b2RvJyk7XG5sZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tdGl0bGUnKTtcbmxldCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1kZXNjcmlwdGlvbicpO1xubGV0IHRvZG9EYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tZGF0ZScpO1xubGV0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLXByaW9yaXR5Jyk7XG5cbmxldCBzb3J0VG9kb3MgPSBmdW5jdGlvbigpIHtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHByb2plY3RzW2ldLnRvZG9zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBmb3IobGV0IGsgPSAwOyBrIDwgcHJvamVjdHNbaV0udG9kb3MubGVuZ3RoIC0gaiAtIDE7IGsrKykge1xuICAgICAgICAgICAgICAgIGlmKChwcm9qZWN0c1tpXS50b2Rvc1trXS5wcmlvcml0eSA9PSAnbG93JyAmJiAocHJvamVjdHNbaV0udG9kb3NbayArIDFdLnByaW9yaXR5ID09ICdtZWRpdW0nIHx8IHByb2plY3RzW2ldLnRvZG9zW2sgKyAxXS5wcmlvcml0eSA9PSAnaGlnaCcpKSB8fCAocHJvamVjdHNbaV0udG9kb3Nba10ucHJpb3JpdHkgPT0gJ21lZGl1bScgJiYgcHJvamVjdHNbaV0udG9kb3NbayArIDFdLnByaW9yaXR5ID09ICdoaWdoJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNbaV0udG9kb3Nba10pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG1wID0gcHJvamVjdHNbaV0udG9kb3Nba107XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzW2ldLnRvZG9zW2sgKyAxXSk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzW2ldLnRvZG9zW2tdID0gcHJvamVjdHNbaV0udG9kb3NbayArIDFdO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c1tpXS50b2Rvc1trICsgMV0gPSB0bXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5sZXQgY3JlYXRlVG9kb3MgPSBmdW5jdGlvbigpIHtcbiAgICBzb3J0VG9kb3MoKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvamVjdHMnKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYocHJvamVjdHNbaV0udGl0bGUgPT0gc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRvZG9zTGlzdC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHByb2plY3RzW2ldLnRvZG9zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcbiAgICAgICAgICAgICAgICBsZXQgbmFtZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBuYW1lVG9kby5jbGFzc0xpc3QuYWRkKCdsZWZ0LW5hbWUnKTtcbiAgICAgICAgICAgICAgICBuYW1lVG9kby50ZXh0Q29udGVudCA9ICdUaXRsZTogJyArIHByb2plY3RzW2ldLnRvZG9zW2pdLnRpdGxlO1xuICAgICAgICAgICAgICAgIHRvZG8uYXBwZW5kQ2hpbGQobmFtZVRvZG8pO1xuICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvblRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblRvZG8uY2xhc3NMaXN0LmFkZCgnbWlkLWRlc2MnKTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblRvZG8udGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246ICcgKyBwcm9qZWN0c1tpXS50b2Rvc1tqXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVG9kbyk7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGF0ZVRvZG8uY2xhc3NMaXN0LmFkZCgnbWlkLWRhdGUnKTtcbiAgICAgICAgICAgICAgICBkYXRlVG9kby50ZXh0Q29udGVudCA9ICdEYXRlOiAnICsgcHJvamVjdHNbaV0udG9kb3Nbal0uZHVlRGF0ZTtcbiAgICAgICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKGRhdGVUb2RvKTtcbiAgICAgICAgICAgICAgICBsZXQgcHJpb3JpdHlUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlUb2RvLmNsYXNzTGlzdC5hZGQoJ2xlZnQtcHJpbycpO1xuICAgICAgICAgICAgICAgIHByaW9yaXR5VG9kby50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogJyArIHByb2plY3RzW2ldLnRvZG9zW2pdLnByaW9yaXR5O1xuICAgICAgICAgICAgICAgIGlmKHByb2plY3RzW2ldLnRvZG9zW2pdLnByaW9yaXR5ID09ICdoaWdoJykge1xuICAgICAgICAgICAgICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ2hpZ2gnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYocHJvamVjdHNbaV0udG9kb3Nbal0ucHJpb3JpdHkgPT0gJ21lZGl1bScpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCdtZWRpdW0nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ2xvdycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHByaW9yaXR5VG9kbyk7XG4gICAgICAgICAgICAgICAgbGV0IHJlbW92ZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICByZW1vdmVUb2RvLnRleHRDb250ZW50ID0gJ1JlbW92ZSc7XG4gICAgICAgICAgICAgICAgcmVtb3ZlVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2plY3RzJyk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzW2ldLnRvZG9zID0gcHJvamVjdHNbaV0udG9kb3MuZmlsdGVyKHRvZG8gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBrID0gMDsgayA8IHByb2plY3RzW2ldLnRvZG9zLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvZG8udGl0bGUgIT0gcHJvamVjdHNbaV0udG9kb3Nba10udGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9zTGlzdC5yZW1vdmVDaGlsZCh0b2RvKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0b2RvLmFwcGVuZENoaWxkKHJlbW92ZVRvZG8pO1xuICAgICAgICAgICAgICAgIHRvZG9zTGlzdC5hcHBlbmRDaGlsZCh0b2RvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5hZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvZG9Cb3guY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG59KTtcblxuYXBwbHlUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvZG9Cb3guY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgbGV0IHRpdGxlID0gdG9kb1RpdGxlLnZhbHVlO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IHRvZG9EZXNjcmlwdGlvbi52YWx1ZTtcbiAgICBsZXQgZGF0ZSA9IHRvZG9EYXRlLnZhbHVlO1xuICAgIGxldCBwcmlvcml0eSA9IHRvZG9Qcmlvcml0eS52YWx1ZTtcbiAgICBpZih0aXRsZSA9PSAnJyB8fCBkZXNjcmlwdGlvbiA9PSAnJyB8fCBkYXRlID09ICcnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHRvZG8gPSBuZXcgVG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYocHJvamVjdHNbaV0udGl0bGUgPT0gc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHByb2plY3RzW2ldLnRvZG9zLnB1c2godG9kbyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9kb1RpdGxlLnZhbHVlID0gJyc7XG4gICAgdG9kb0Rlc2NyaXB0aW9uLnZhbHVlID0gJyc7XG4gICAgdG9kb0RhdGUudmFsdWUgPSAnJztcbiAgICB0b2RvUHJpb3JpdHkudmFsdWUgPSAnaGlnaCc7XG4gICAgY3JlYXRlVG9kb3MoKTtcbn0pO1xuXG5sZXQgc2hvd1Byb2plY3QgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgcHJvak5hbWUudGV4dENvbnRlbnQgPSAnJztcbiAgICBwcm9qTmFtZS5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbiAgICBhZGRUb2RvLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICBjcmVhdGVUb2RvcygpO1xufVxuXG5sZXQgY3JlYXRlUHJvamVjdCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBzZWxlY3RlZCA9IG5hbWU7XG4gICAgbGV0IHNpbmdsZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaW5nbGVQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3NpbmdsZS1wcm9qZWN0Jyk7XG4gICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJyk7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIGxldCByZW1vdmVQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVtb3ZlUHJvamVjdC50ZXh0Q29udGVudCA9ICdSZW1vdmUnO1xuICAgIHJlbW92ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9qZWN0cycpO1xuICAgICAgICBwcm9qZWN0c0xpc3QucmVtb3ZlQ2hpbGQoc2luZ2xlUHJvamVjdCk7XG4gICAgICAgIHByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC50aXRsZSAhPSBuYW1lKTtcbiAgICAgICAgcHJvak5hbWUudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgdG9kb3NMaXN0LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGFkZFRvZG8uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICB9KTtcbiAgICBzaW5nbGVQcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICBzaW5nbGVQcm9qZWN0LmFwcGVuZENoaWxkKHJlbW92ZVByb2plY3QpO1xuICAgIHByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcm9qTmFtZS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICB0b2Rvc0xpc3QudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgc2VsZWN0ZWQgPSBuYW1lO1xuICAgICAgICBzaG93UHJvamVjdChzZWxlY3RlZCk7XG4gICAgfSk7XG4gICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKHNpbmdsZVByb2plY3QpO1xuICAgIHNob3dQcm9qZWN0KHNlbGVjdGVkKTtcbn1cblxubGV0IGRpc3BsYXlQcm9qZWN0cyA9IGZ1bmN0aW9uKCkge1xuICAgIHByb2plY3RzTGlzdC50ZXh0Q29udGVudCA9ICcnO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjcmVhdGVQcm9qZWN0KHByb2plY3RzW2ldLnRpdGxlKTtcbiAgICB9XG59XG5cbmFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcHJvamVjdEJveC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn0pO1xuXG5hcHBseVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcHJvamVjdEJveC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBsZXQgdGl0bGUgPSBwcm9qVGl0bGUudmFsdWU7XG4gICAgaWYodGl0bGUgPT0gJycpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcbiAgICBwcm9qVGl0bGUudmFsdWUgPSAnJztcbiAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIGRpc3BsYXlQcm9qZWN0cygpO1xufSk7XG5cbmRpc3BsYXlQcm9qZWN0cygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==