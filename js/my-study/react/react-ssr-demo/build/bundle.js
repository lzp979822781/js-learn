/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sever/createStore.js":
/*!**********************************!*\
  !*** ./src/sever/createStore.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _share_store_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/store/reducers */ \"./src/share/store/reducers/index.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_share_store_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_1___default())));\n});\n\n//# sourceURL=webpack://react-ssr-demo/./src/sever/createStore.js?");

/***/ }),

/***/ "./src/sever/http.js":
/*!***************************!*\
  !*** ./src/sever/http.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar app = express();\napp.listen(3000, function (req, res) {\n  console.log('serve is running');\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack://react-ssr-demo/./src/sever/http.js?");

/***/ }),

/***/ "./src/sever/index.js":
/*!****************************!*\
  !*** ./src/sever/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ \"core-js/modules/es6.array.map.js\");\n/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.iterator.js */ \"core-js/modules/es6.string.iterator.js\");\n/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ \"core-js/modules/es6.object.to-string.js\");\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.iterator.js */ \"core-js/modules/es6.array.iterator.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom.iterable.js */ \"core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.promise.js */ \"core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http */ \"./src/sever/http.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./render */ \"./src/sever/render.js\");\n/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./createStore */ \"./src/sever/createStore.js\");\n/* harmony import */ var _share_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../share/routes */ \"./src/share/routes.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n_http__WEBPACK_IMPORTED_MODULE_6__[\"default\"].use(express__WEBPACK_IMPORTED_MODULE_7___default()[\"static\"]('public'));\n_http__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get('*', function (req, res) {\n  var store = (0,_createStore__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n  var promises = (0,react_router_config__WEBPACK_IMPORTED_MODULE_8__.matchRoutes)(_share_routes__WEBPACK_IMPORTED_MODULE_11__[\"default\"], req.path).map(function (_ref) {\n    var route = _ref.route;\n\n    if (route.loadData) {\n      return route.loadData(store);\n    }\n  });\n  Promise.all(promises).then(function (data) {\n    res.send((0,_render__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(req, store));\n  });\n});\n\n//# sourceURL=webpack://react-ssr-demo/./src/sever/index.js?");

/***/ }),

/***/ "./src/sever/render.js":
/*!*****************************!*\
  !*** ./src/sever/render.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _share_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share/routes */ \"./src/share/routes.js\");\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (req, store) {\n  var content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.StaticRouter, {\n    location: req.path\n  }, (0,react_router_config__WEBPACK_IMPORTED_MODULE_3__.renderRoutes)(_share_routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"]))));\n  var initalState = store.getState();\n  return \"\\n        <html>\\n            <head>\\n                <title>react ssr</title>\\n            </head>\\n            <body>\\n                <div id='root'>\".concat(content, \"</div>\\n                <script src='bundle.js'></script>\\n                <script>window.INITIAL_STATE=\").concat(initalState, \"</script>\\n            </body>\\n        </html>\\n    \");\n});\n\n//# sourceURL=webpack://react-ssr-demo/./src/sever/render.js?");

/***/ }),

/***/ "./src/share/pages/Home.js":
/*!*********************************!*\
  !*** ./src/share/pages/Home.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Home() {\n  var onClick = function onClick() {\n    console.log(\"点击事件\");\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    onClick: onClick\n  }, \"Home working\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/list\"\n  }, \"jump to list\"));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://react-ssr-demo/./src/share/pages/Home.js?");

/***/ }),

/***/ "./src/share/pages/List.js":
/*!*********************************!*\
  !*** ./src/share/pages/List.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es6_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.is-array.js */ \"core-js/modules/es6.array.is-array.js\");\n/* harmony import */ var core_js_modules_es6_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ \"core-js/modules/es6.array.map.js\");\n/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ \"core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_actions_user_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/actions/user.action */ \"./src/share/store/actions/user.action.js\");\n\n\n\n\n\n // console.log('window', window);\n\nfunction List(props) {\n  var dispatch = props.dispatch,\n      data = props.data;\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    dispatch((0,_store_actions_user_action__WEBPACK_IMPORTED_MODULE_5__.fetchUser)());\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(\"div\", null, \"List working\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(\"ul\", null, Array.isArray(data) && data.map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(\"li\", {\n      key: item.id\n    }, item.name);\n  })));\n}\n\nfunction loadData(store) {\n  return store.dispatch((0,_store_actions_user_action__WEBPACK_IMPORTED_MODULE_5__.fetchUser)());\n}\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return state.user;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  component: (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps)(List),\n  loadData: loadData\n});\n\n//# sourceURL=webpack://react-ssr-demo/./src/share/pages/List.js?");

/***/ }),

/***/ "./src/share/routes.js":
/*!*****************************!*\
  !*** ./src/share/routes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.define-property.js */ \"core-js/modules/es6.object.define-property.js\");\n/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.keys.js */ \"core-js/modules/es6.object.keys.js\");\n/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.symbol.js */ \"core-js/modules/es6.symbol.js\");\n/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.filter.js */ \"core-js/modules/es6.array.filter.js\");\n/* harmony import */ var core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.get-own-property-descriptor.js */ \"core-js/modules/es6.object.get-own-property-descriptor.js\");\n/* harmony import */ var core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.for-each.js */ \"core-js/modules/es6.array.for-each.js\");\n/* harmony import */ var core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es7.object.get-own-property-descriptors.js */ \"core-js/modules/es7.object.get-own-property-descriptors.js\");\n/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es6_object_define_properties_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.object.define-properties.js */ \"core-js/modules/es6.object.define-properties.js\");\n/* harmony import */ var core_js_modules_es6_object_define_properties_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_properties_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/Home */ \"./src/share/pages/Home.js\");\n/* harmony import */ var _pages_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/List */ \"./src/share/pages/List.js\");\n\n\n\n\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  path: '/',\n  component: _pages_Home__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  exact: true\n}, _objectSpread({\n  path: '/list'\n}, _pages_List__WEBPACK_IMPORTED_MODULE_9__[\"default\"])]);\n\n//# sourceURL=webpack://react-ssr-demo/./src/share/routes.js?");

/***/ }),

/***/ "./src/share/store/actions/user.action.js":
/*!************************************************!*\
  !*** ./src/share/store/actions/user.action.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SAVE_USER\": () => (/* binding */ SAVE_USER),\n/* harmony export */   \"fetchUser\": () => (/* binding */ fetchUser)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ \"core-js/modules/es6.object.to-string.js\");\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.promise.js */ \"core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar SAVE_USER = 'save_user';\nvar fetchUser = function fetchUser() {\n  return /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {\n      var response;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return axios__WEBPACK_IMPORTED_MODULE_3___default().get('https://jsonplaceholder.typicode.com/users');\n\n            case 2:\n              response = _context.sent;\n              dispatch({\n                type: SAVE_USER,\n                payload: response\n              });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack://react-ssr-demo/./src/share/store/actions/user.action.js?");

/***/ }),

/***/ "./src/share/store/reducers/index.js":
/*!*******************************************!*\
  !*** ./src/share/store/reducers/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.reducer */ \"./src/share/store/reducers/user.reducer.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  user: _user_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}));\n\n//# sourceURL=webpack://react-ssr-demo/./src/share/store/reducers/index.js?");

/***/ }),

/***/ "./src/share/store/reducers/user.reducer.js":
/*!**************************************************!*\
  !*** ./src/share/store/reducers/user.reducer.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _actions_user_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/user.action */ \"./src/share/store/actions/user.action.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _actions_user_action__WEBPACK_IMPORTED_MODULE_0__.SAVE_USER:\n      return action.payload;\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack://react-ssr-demo/./src/share/store/reducers/user.reducer.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "core-js/modules/es6.array.filter.js":
/*!******************************************************!*\
  !*** external "core-js/modules/es6.array.filter.js" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es6.array.filter.js");

/***/ }),

/***/ "core-js/modules/es6.array.for-each.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es6.array.for-each.js" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es6.array.for-each.js");

/***/ }),

/***/ "core-js/modules/es6.array.is-array.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es6.array.is-array.js" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es6.array.is-array.js");

/***/ }),

/***/ "core-js/modules/es6.array.iterator.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es6.array.iterator.js" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es6.array.iterator.js");

/***/ }),

/***/ "core-js/modules/es6.array.map.js":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.array.map.js" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es6.array.map.js");

/***/ }),

/***/ "core-js/modules/es6.function.name.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.function.name.js" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es6.function.name.js");

/***/ }),

/***/ "core-js/modules/es6.object.define-properties.js":
/*!******************************************************************!*\
  !*** external "core-js/modules/es6.object.define-properties.js" ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es6.object.define-properties.js");

/***/ }),

/***/ "core-js/modules/es6.object.define-property.js":
/*!****************************************************************!*\
  !*** external "core-js/modules/es6.object.define-property.js" ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es6.object.define-property.js");

/***/ }),

/***/ "core-js/modules/es6.object.get-own-property-descriptor.js":
/*!****************************************************************************!*\
  !*** external "core-js/modules/es6.object.get-own-property-descriptor.js" ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es6.object.get-own-property-descriptor.js");

/***/ }),

/***/ "core-js/modules/es6.object.keys.js":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.object.keys.js" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es6.object.keys.js");

/***/ }),

/***/ "core-js/modules/es6.object.to-string.js":
/*!**********************************************************!*\
  !*** external "core-js/modules/es6.object.to-string.js" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es6.object.to-string.js");

/***/ }),

/***/ "core-js/modules/es6.promise.js":
/*!*************************************************!*\
  !*** external "core-js/modules/es6.promise.js" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es6.promise.js");

/***/ }),

/***/ "core-js/modules/es6.string.iterator.js":
/*!*********************************************************!*\
  !*** external "core-js/modules/es6.string.iterator.js" ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es6.string.iterator.js");

/***/ }),

/***/ "core-js/modules/es6.symbol.js":
/*!************************************************!*\
  !*** external "core-js/modules/es6.symbol.js" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es6.symbol.js");

/***/ }),

/***/ "core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*****************************************************************************!*\
  !*** external "core-js/modules/es7.object.get-own-property-descriptors.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es7.object.get-own-property-descriptors.js");

/***/ }),

/***/ "core-js/modules/web.dom.iterable.js":
/*!******************************************************!*\
  !*** external "core-js/modules/web.dom.iterable.js" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/web.dom.iterable.js");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ }),

/***/ "regenerator-runtime/runtime.js":
/*!*************************************************!*\
  !*** external "regenerator-runtime/runtime.js" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("regenerator-runtime/runtime.js");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/sever/index.js");
/******/ 	
/******/ })()
;