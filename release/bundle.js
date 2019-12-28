(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["opentopo"] = factory();
	else
		root["opentopo"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Base.js":
/*!*********************!*\
  !*** ./src/Base.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Base; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Base = function Base() {\n  _classCallCheck(this, Base);\n};\n\n\n\n//# sourceURL=webpack://opentopo/./src/Base.js?");

/***/ }),

/***/ "./src/Circle.js":
/*!***********************!*\
  !*** ./src/Circle.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Circle; });\n/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Element */ \"./src/Element.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n/**\r\n * x,y  圆心\r\n * radius   半径\r\n */\n\nvar Circle =\n/*#__PURE__*/\nfunction (_Element) {\n  _inherits(Circle, _Element);\n\n  function Circle(text, x, y) {\n    var _this;\n\n    _classCallCheck(this, Circle);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Circle).call(this));\n    _this.text = text;\n    _this.x = x;\n    _this.y = y;\n    _this.fillStyle = 'blue';\n    _this.radius = 30;\n    _this.fillStyle = 'blue'; //背景顔色\n\n    _this.fillStyle_text = 'black';\n    _this.fillStyle_text_focus = 'gold';\n    _this.font_text = '15px Arial';\n    _this.z_index = 1;\n    return _this;\n  }\n\n  _createClass(Circle, [{\n    key: \"centerPoint\",\n    value: function centerPoint() {\n      return {\n        x: this.x,\n        y: this.y\n      };\n    }\n  }, {\n    key: \"paint\",\n    value: function paint(ctx, ps) {\n      ctx.save();\n\n      if (ps && ps.focus) {\n        this.paintFocus(ctx);\n      }\n\n      if (this.selected) {\n        this.paintSelected(ctx);\n      }\n\n      ctx.fillStyle = this.fillStyle;\n      ctx.beginPath();\n      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);\n      ctx.fill();\n      ctx.fillStyle = this.fillStyle_text;\n      ctx.textAlign = 'center';\n      ctx.font = this.font_text;\n      ctx.textBaseline = 'top';\n      ctx.fillText(this.text, this.x, this.y + this.radius);\n\n      if (ps && ps.focus) {\n        ctx.fillStyle = this.fillStyle_text_focus;\n        ctx.fillText(this.text, this.x, this.y + this.radius);\n      }\n\n      ctx.restore();\n    }\n  }, {\n    key: \"paintFocus\",\n    value: function paintFocus(ctx) {\n      ctx.save();\n      ctx.fillStyle = '#eeee66';\n      ctx.globalAlpha = 0.2;\n      var bw = 5;\n      ctx.beginPath();\n      ctx.arc(this.x, this.y, this.radius + bw, 0, Math.PI * 2, true);\n      ctx.fill();\n      ctx.restore();\n    }\n  }, {\n    key: \"paintSelected\",\n    value: function paintSelected(ctx) {\n      ctx.save();\n      ctx.fillStyle = '#eeeeaa';\n      ctx.globalAlpha = 0.3;\n      var bw = 5;\n      ctx.beginPath();\n      ctx.arc(this.x, this.y, this.radius + bw, 0, Math.PI * 2, true);\n      ctx.fill();\n      ctx.restore();\n    }\n  }, {\n    key: \"inBound\",\n    value: function inBound(px, py) {\n      var dx = this.x - px;\n      var dy = this.y - py;\n      return dx * dx + dy * dy <= this.radius * this.radius;\n    }\n  }]);\n\n  return Circle;\n}(_Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack://opentopo/./src/Circle.js?");

/***/ }),

/***/ "./src/Element.js":
/*!************************!*\
  !*** ./src/Element.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Element; });\n/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ \"./src/Base.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Element =\n/*#__PURE__*/\nfunction (_Base) {\n  _inherits(Element, _Base);\n\n  function Element() {\n    var _this;\n\n    _classCallCheck(this, Element);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Element).call(this));\n    _this.visible = true;\n    _this.dragEnable = true;\n    _this._evtMaps = {};\n    return _this;\n  }\n\n  _createClass(Element, [{\n    key: \"inBound\",\n    value: function inBound() {\n      return false;\n    }\n  }, {\n    key: \"addEventListener\",\n    value: function addEventListener(type, listener) {\n      if (!this._evtMaps[type]) {\n        this._evtMaps[type] = [listener];\n        return;\n      }\n\n      var evts = this._evtMaps[type];\n\n      for (var i = 0; i < evts.length; i++) {\n        var m = evts[i];\n\n        if (listener == m) {\n          return;\n        }\n      }\n\n      this._evtMaps[type].push(listener);\n    }\n  }, {\n    key: \"removeEventListener\",\n    value: function removeEventListener(type, listener) {\n      var evts = this._evtMaps[type];\n\n      if (!evts) {\n        return;\n      }\n\n      for (var i = 0; i < evts.length; i++) {\n        var m = evts[i];\n\n        if (listener == m) {\n          evts.splice(i, 1);\n          return;\n        }\n      }\n    }\n  }, {\n    key: \"triggerEvent\",\n    value: function triggerEvent(type) {\n      var evts = this._evtMaps[type];\n\n      if (!evts) {\n        return;\n      }\n\n      for (var i = 0; i < evts.length; i++) {\n        var m = evts[i];\n        m();\n      }\n    }\n  }]);\n\n  return Element;\n}(_Base__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack://opentopo/./src/Element.js?");

/***/ }),

/***/ "./src/Link.js":
/*!*********************!*\
  !*** ./src/Link.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Link; });\n/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Element */ \"./src/Element.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Link =\n/*#__PURE__*/\nfunction (_Element) {\n  _inherits(Link, _Element);\n\n  function Link(nodeA, nodeZ) {\n    var _this;\n\n    _classCallCheck(this, Link);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Link).call(this));\n    _this.nodeA = nodeA;\n    _this.nodeZ = nodeZ;\n    _this.lineWidth = 2; //线宽\n\n    _this.strokeStyle = 'yellow'; //线条样式\n\n    _this.z_index = 0;\n    return _this;\n  }\n\n  _createClass(Link, [{\n    key: \"paint\",\n    value: function paint(ctx) {\n      ctx.save();\n      ctx.lineWidth = this.lineWidth;\n      ctx.strokeStyle = this.strokeStyle;\n      var spoint = this.nodeA.centerPoint();\n      var dpoint = this.nodeZ.centerPoint();\n      ctx.beginPath();\n      ctx.moveTo(spoint.x, spoint.y);\n      ctx.lineTo(dpoint.x, dpoint.y);\n      ctx.closePath();\n      ctx.stroke();\n      ctx.restore();\n    }\n  }]);\n\n  return Link;\n}(_Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack://opentopo/./src/Link.js?");

/***/ }),

/***/ "./src/Rect.js":
/*!*********************!*\
  !*** ./src/Rect.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Rect; });\n/* harmony import */ var _Element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Element */ \"./src/Element.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Rect =\n/*#__PURE__*/\nfunction (_Element) {\n  _inherits(Rect, _Element);\n\n  function Rect(text, x, y) {\n    var _this;\n\n    _classCallCheck(this, Rect);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Rect).call(this));\n    _this.text = text; //标题文本\n\n    _this.x = x;\n    _this.y = y;\n    _this.width = 30;\n    _this.height = 30;\n    _this.fillStyle = 'blue'; //背景顔色\n\n    _this.fillStyle_text = 'black';\n    _this.fillStyle_text_focus = 'gold';\n    _this.font_text = '15px Arial';\n    _this.z_index = 1;\n    return _this;\n  }\n\n  _createClass(Rect, [{\n    key: \"centerPoint\",\n    value: function centerPoint() {\n      return {\n        x: this.x + this.width / 2,\n        y: this.y + this.height / 2\n      };\n    }\n  }, {\n    key: \"paintFocus\",\n    value: function paintFocus(ctx) {\n      ctx.save();\n      ctx.fillStyle = '#eeeeee';\n      ctx.globalAlpha = 0.2;\n      var bw = 5;\n      ctx.fillRect(this.x - bw, this.y - bw, this.width + bw * 2, this.height + bw * 2);\n      ctx.restore();\n    }\n  }, {\n    key: \"paintSelected\",\n    value: function paintSelected(ctx) {\n      ctx.save();\n      ctx.fillStyle = '#eeeeaa';\n      ctx.globalAlpha = 0.3;\n      var bw = 5;\n      ctx.fillRect(this.x - bw, this.y - bw, this.width + bw * 2, this.height + bw * 2);\n      ctx.restore();\n    }\n  }, {\n    key: \"paint\",\n    value: function paint(ctx, ps) {\n      ctx.save();\n\n      if (ps && ps.focus) {\n        this.paintFocus(ctx);\n      }\n\n      if (this.selected) {\n        this.paintSelected(ctx);\n      }\n\n      var image = null;\n\n      if (this.image && this.image.loadSuccess) {\n        image = this.image;\n        ctx.drawImage(image, this.x, this.y, this.width, this.height);\n      } else {\n        ctx.fillStyle = this.fillStyle;\n        ctx.fillRect(this.x, this.y, this.width, this.height);\n      }\n\n      if (this.text) {\n        ctx.save();\n        ctx.fillStyle = this.fillStyle_text;\n        ctx.textAlign = 'center';\n        ctx.font = this.font_text;\n        ctx.textBaseline = 'top';\n        ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height);\n\n        if (ps && ps.focus) {\n          ctx.fillStyle = this.fillStyle_text_focus;\n          ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height);\n        }\n\n        ctx.restore();\n      }\n\n      ctx.restore();\n    }\n  }, {\n    key: \"setImage\",\n    value: function setImage(imagesrc) {\n      var img = new Image();\n      img.src = imagesrc;\n\n      img.onload = function () {\n        img.loadSuccess = true;\n      };\n\n      this.image = img;\n    }\n  }, {\n    key: \"inBound\",\n    value: function inBound(pointX, pointY) {\n      return pointX >= this.x && pointX <= this.x + this.width && pointY >= this.y && pointY <= this.y + this.height;\n    }\n  }]);\n\n  return Rect;\n}(_Element__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack://opentopo/./src/Rect.js?");

/***/ }),

/***/ "./src/Scene.js":
/*!**********************!*\
  !*** ./src/Scene.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Scene; });\n/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ \"./src/Base.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n //画布\n\nvar Scene =\n/*#__PURE__*/\nfunction (_Base) {\n  _inherits(Scene, _Base);\n\n  function Scene(stage) {\n    var _this;\n\n    _classCallCheck(this, Scene);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Scene).call(this));\n    _this.fillStyle = 'green'; //背景\n\n    _this.text = null; //标题\n\n    _this.elements = [];\n    _this.dragEnable = true; //可拖拽\n\n    _this.scaleX = 1; //横向缩放角度\n\n    _this.scaleY = 1; //纵向缩放角度\n\n    _this.translateX = 0; //横向偏移\n\n    _this.translateY = 0; //纵向偏移\n\n    _this.wheelZoom = 0.95; //鼠标缩放速度\n\n    stage.scene = _assertThisInitialized(_this);\n    return _this;\n  }\n\n  _createClass(Scene, [{\n    key: \"paint\",\n    value: function paint(ctx) {\n      var canvas = ctx.canvas;\n      ctx.save(); //#region 设置背景\n\n      ctx.save();\n      ctx.fillStyle = this.fillStyle;\n      ctx.fillRect(0, 0, canvas.width, canvas.height);\n      ctx.restore(); //#endregion\n\n      if (this.text) {\n        ctx.save();\n        ctx.textBaseline = \"top\";\n        ctx.font = \"15px Arial\";\n        ctx.fillText(this.text, 10, 10);\n        ctx.restore();\n      } //位移\n\n\n      ctx.translate(this.translateX, this.translateY); //#region 中心缩放\n\n      ctx.translate(canvas.width / 2 - this.translateX, canvas.height / 2 - this.translateY);\n      ctx.scale(this.scaleX, this.scaleY);\n      ctx.translate(-canvas.width / 2 + this.translateX, -canvas.height / 2 + this.translateY); //#endregion\n\n      for (var i in this.elements) {\n        var ele = this.elements[i];\n\n        if (ele.visible) {\n          ele.paint(ctx, {\n            focus: ele == this.focusEle\n          });\n        }\n      }\n\n      ctx.restore();\n    }\n    /**\r\n     * 添加元素\r\n     */\n\n  }, {\n    key: \"add\",\n    value: function add() {\n      for (var i in arguments) {\n        this.elements.push(arguments[i]);\n      }\n\n      this.elements.sort(function (a, b) {\n        return a.z_index - b.z_index;\n      });\n    }\n  }]);\n\n  return Scene;\n}(_Base__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack://opentopo/./src/Scene.js?");

/***/ }),

/***/ "./src/Stage.js":
/*!**********************!*\
  !*** ./src/Stage.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base */ \"./src/Base.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Stage =\n/*#__PURE__*/\nfunction (_Base) {\n  _inherits(Stage, _Base);\n\n  _createClass(Stage, [{\n    key: \"getCanvasPx\",\n    value: function getCanvasPx(evt) {\n      return (evt.clientX - this.canvas.offsetLeft + (document.documentElement || document.body).scrollLeft - this.canvas.width / 2) / this.scene.scaleX + this.canvas.width / 2 - this.scene.translateX;\n    }\n  }, {\n    key: \"getCanvasPy\",\n    value: function getCanvasPy(evt) {\n      return (evt.clientY - this.canvas.offsetTop + (document.documentElement || document.body).scrollTop - this.canvas.height / 2) / this.scene.scaleY + this.canvas.height / 2 - this.scene.translateY;\n    }\n  }]);\n\n  function Stage(canvas, width, height) {\n    var _this;\n\n    _classCallCheck(this, Stage);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Stage).call(this));\n    _this.canvas = typeof canvas == 'string' ? document.querySelector(canvas) : canvas;\n    _this.width = width || _this.canvas.width;\n    _this.height = height || _this.canvas.height;\n    _this.scene = null; //画布\n\n    _this.ctx = _this.canvas.getContext('2d');\n\n    var me = _assertThisInitialized(_this);\n\n    var f = function f() {\n      me.tick();\n      setTimeout(f);\n    };\n\n    _this.tickTimes = 1;\n    f();\n    me.canvas.addEventListener('mousemove', function (evt) {\n      if (!me.scene) {\n        return;\n      }\n\n      evt = evt || event;\n      var px = me.getCanvasPx(evt);\n      var py = me.getCanvasPy(evt);\n      me.scene.focusEle = null;\n\n      for (var i in me.scene.elements) {\n        var ele = me.scene.elements[i];\n\n        if (ele.inBound(px, py)) {\n          if (ele != me.scene.focusEle) {\n            me.scene.focusEle = ele;\n            ele.triggerEvent('mouseover', evt);\n          }\n\n          return;\n        } else {\n          if (ele == me.scene.focusEle) {\n            ele.triggerEvent('mouseout', evt);\n            ele.triggerEvent('mouseleave', evt);\n          }\n        }\n      }\n    });\n    me.canvas.addEventListener('mousedown', function (evt) {\n      if (!me.scene) {\n        return;\n      }\n\n      evt = evt || event;\n      var px = me.getCanvasPx(evt);\n      var py = me.getCanvasPy(evt);\n      var downType = 'scene';\n\n      if (!evt.ctrlKey) {\n        me.scene.elements.forEach(function (ele) {\n          ele.selected = false;\n        });\n      }\n\n      for (var i in me.scene.elements) {\n        var ele = me.scene.elements[i];\n\n        if (ele.inBound(px, py)) {\n          ele.selected = true;\n          downType = 'ele';\n          ele.triggerEvent('mousedown', evt);\n          break;\n        }\n      }\n\n      if (downType == 'scene') {\n        me.canvas.style.cursor = 'pointer';\n      } else {\n        me.canvas.style.cursor = 'move';\n      }\n\n      var downPx = px;\n      var downPy = py;\n\n      var evt_mousemove = function evt_mousemove(evt) {\n        evt = evt || event;\n        var px = me.getCanvasPx(evt);\n        var py = me.getCanvasPy(evt);\n        var dx = px - downPx;\n        var dy = py - downPy;\n\n        if (downType == 'ele') {\n          downPx = px;\n          downPy = py;\n          me.scene.elements.forEach(function (ele) {\n            if (ele.selected && ele.dragEnable) {\n              ele.x += dx;\n              ele.y += dy;\n            }\n          });\n        } else if (downType == 'scene') {\n          if (me.scene.dragEnable) {\n            me.scene.translateX += dx;\n            me.scene.translateY += dy;\n          }\n        }\n      };\n\n      me.canvas.addEventListener('mousemove', evt_mousemove);\n\n      var evt_mouseup = function evt_mouseup() {\n        me.canvas.removeEventListener('mousemove', evt_mousemove);\n        document.removeEventListener('mouseup', evt_mouseup);\n        me.canvas.style.cursor = 'default';\n      };\n\n      document.addEventListener('mouseup', evt_mouseup);\n    });\n\n    me.canvas.onmousewheel = function (evt) {\n      if (!me.scene) {\n        return;\n      }\n\n      evt = evt || event;\n\n      if (evt.deltaY > 0) {\n        me.scene.scaleY *= me.scene.wheelZoom;\n        me.scene.scaleX *= me.scene.wheelZoom;\n      } else {\n        me.scene.scaleY /= me.scene.wheelZoom;\n        me.scene.scaleX /= me.scene.wheelZoom;\n      }\n    };\n\n    return _this;\n  }\n\n  _createClass(Stage, [{\n    key: \"tick\",\n    value: function tick() {\n      if (!this.scene) {\n        return;\n      }\n\n      var now = new Date();\n      var fps = parseInt(1000 / (now - this.lastTime));\n      this.lastTime = now;\n\n      if (this.tickTimes++ % 20 == 0) {//this.scene.text = \"FPS:\" + fps;\n      }\n\n      this.scene.text = \"FPS:\" + fps + '  ' + this.canvas.style.cursor;\n      this.scene.paint(this.ctx);\n    }\n  }]);\n\n  return Stage;\n}(_Base__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\nObject.defineProperties(Stage.prototype, {\n  width: {\n    get: function get() {\n      return this._width;\n    },\n    set: function set(a) {\n      this._width = a;\n      this.canvas.width = this._width;\n    }\n  },\n  height: {\n    get: function get() {\n      return this._height;\n    },\n    set: function set(a) {\n      this._height = a;\n      this.canvas.height = this._height;\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stage);\n\n//# sourceURL=webpack://opentopo/./src/Stage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Stage, Scene, Rect, Link, Circle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Stage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stage */ \"./src/Stage.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Stage\", function() { return _Stage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scene */ \"./src/Scene.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Scene\", function() { return _Scene__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _Rect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Rect */ \"./src/Rect.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Rect\", function() { return _Rect__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Link */ \"./src/Link.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Link\", function() { return _Link__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Circle */ \"./src/Circle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Circle\", function() { return _Circle__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://opentopo/./src/index.js?");

/***/ })

/******/ });
});