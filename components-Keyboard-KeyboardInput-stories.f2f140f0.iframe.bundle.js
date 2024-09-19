"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[2649],{

/***/ "../../@lightningjs/ui-components/src/components/Keyboard/KeyboardEmail.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ KeyboardEmail)
/* harmony export */ });
/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.js");
/* harmony import */ var _Keyboard_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.styles.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, e, o, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), e, o); return 2 & r && "function" == typeof p ? function (t) { return p.apply(o, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */



var KeyboardEmail = /*#__PURE__*/function (_Keyboard) {
  function KeyboardEmail() {
    _classCallCheck(this, KeyboardEmail);
    return _callSuper(this, KeyboardEmail, arguments);
  }
  _inherits(KeyboardEmail, _Keyboard);
  return _createClass(KeyboardEmail, [{
    key: "_construct",
    value: function _construct() {
      _superPropGet(KeyboardEmail, "_construct", this, 3)([]);
      this.formats = this.emailFormat;
    }
  }, {
    key: "emailFormat",
    get: function get() {
      return {
        uppercase: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', {
          title: 'Delete',
          size: 'md',
          keyId: 'delete',
          announce: 'delete, button'
        }], ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', {
          title: '#@!',
          size: 'md',
          toggle: 'symbols',
          announce: 'symbol mode, button',
          keyId: 'symbols'
        }], ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '@', {
          title: 'áöû',
          size: 'md',
          toggle: 'accents',
          announce: 'accents, button',
          keyId: 'accents'
        }], ['Z', 'X', 'C', 'V', 'B', 'N', 'M', {
          title: '.',
          announce: 'period, button'
        }, {
          title: '-',
          announce: 'dash, button'
        }, {
          title: '_',
          announce: 'underscore, button'
        }, {
          title: 'shift',
          size: 'md',
          toggle: 'lowercase',
          announce: 'shift off, button',
          keyId: 'shift'
        }], [{
          title: '.com',
          announce: 'dot, com',
          size: 'md'
        }, {
          title: '.net',
          announce: 'dot, net',
          size: 'md'
        }, {
          title: '.edu',
          announce: 'dot, edu',
          size: 'md'
        }, {
          title: '.org',
          announce: 'dot, org',
          size: 'md'
        }, {
          title: '.co',
          announce: 'dot, co',
          size: 'md'
        }, {
          title: '.uk',
          announce: 'dot, uk',
          size: 'md'
        }], [{
          title: 'Clear',
          size: 'lg',
          keyId: 'clear',
          announce: 'clear, button'
        }, {
          title: 'Space',
          size: 'xl',
          keyId: 'space',
          announce: 'space, button'
        }, {
          title: 'Done',
          size: 'lg',
          keyId: 'done',
          announce: 'done, button'
        }]],
        lowercase: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', {
          title: 'Delete',
          size: 'md',
          keyId: 'delete',
          announce: 'delete, button'
        }], ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', {
          title: '#@!',
          size: 'md',
          toggle: 'symbols',
          announce: 'symbol mode, button',
          keyId: 'symbols'
        }], ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '@', {
          title: 'áöû',
          size: 'md',
          toggle: 'accents',
          announce: 'accents, button',
          keyId: 'accents'
        }], ['z', 'x', 'c', 'v', 'b', 'n', 'm', {
          title: '_',
          announce: 'underscore, button'
        }, {
          title: '.',
          announce: 'period, button'
        }, {
          title: '-',
          announce: 'dash, button'
        }, {
          title: 'shift',
          size: 'md',
          toggle: 'uppercase',
          announce: 'shift on, button',
          keyId: 'shift'
        }], [{
          title: '.com',
          announce: 'dot, com',
          size: 'md'
        }, {
          title: '.net',
          announce: 'dot, net',
          size: 'md'
        }, {
          title: '.edu',
          announce: 'dot, edu',
          size: 'md'
        }, {
          title: '.org',
          announce: 'dot, org',
          size: 'md'
        }, {
          title: '.co',
          announce: 'dot, co',
          size: 'md'
        }, {
          title: '.uk',
          announce: 'dot, uk',
          size: 'md'
        }], [{
          title: 'Clear',
          size: 'lg',
          keyId: 'clear',
          announce: 'clear, button'
        }, {
          title: 'Space',
          size: 'xl',
          keyId: 'space',
          announce: 'space, button'
        }, {
          title: 'Done',
          size: 'lg',
          keyId: 'done',
          announce: 'done, button'
        }]],
        accents: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', {
          title: 'Delete',
          size: 'md',
          keyId: 'delete',
          announce: 'delete, button'
        }], ['ä', 'ë', 'ï', 'ö', 'ü', 'ÿ', 'à', 'è', 'ì', 'ò', {
          title: '#@!',
          size: 'md',
          toggle: 'symbols',
          announce: 'symbol mode, button',
          keyId: 'symbols'
        }], ['ù', 'á', 'é', 'í', 'ó', 'ú', 'ý', 'â', 'ê', '@', {
          title: 'abc',
          size: 'md',
          toggle: 'lowercase',
          announce: 'alpha mode, button'
        }], ['î', 'ô', 'û', 'ã', 'ñ', {
          title: '_',
          announce: 'underscore, button'
        }, {
          title: '.',
          announce: 'period, button'
        }, {
          title: '-',
          announce: 'dash, button'
        }, {
          title: 'shift',
          size: 'xl',
          toggle: 'accentsUpper',
          announce: 'shift off, button',
          keyId: 'shift'
        }], [{
          title: '.com',
          announce: 'dot, com',
          size: 'md'
        }, {
          title: '.net',
          announce: 'dot, net',
          size: 'md'
        }, {
          title: '.edu',
          announce: 'dot, edu',
          size: 'md'
        }, {
          title: '.org',
          announce: 'dot, org',
          size: 'md'
        }, {
          title: '.co',
          announce: 'dot, co',
          size: 'md'
        }, {
          title: '.uk',
          announce: 'dot, uk',
          size: 'md'
        }], [{
          title: 'Clear',
          size: 'lg',
          keyId: 'clear',
          announce: 'clear, button'
        }, {
          title: 'Space',
          size: 'xl',
          keyId: 'space',
          announce: 'space, button'
        }, {
          title: 'Done',
          size: 'lg',
          keyId: 'done',
          announce: 'done, button'
        }]],
        accentsUpper: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', {
          title: 'Delete',
          size: 'md',
          keyId: 'delete',
          announce: 'delete, button'
        }], ['Ä', 'Ë', 'Ï', 'Ö', 'Ü', 'Ÿ', 'À', 'È', 'Ì', 'Ò', {
          title: '#@!',
          size: 'md',
          toggle: 'symbols',
          announce: 'symbol mode, button',
          keyId: 'symbols'
        }], ['Ù', 'Á', 'É', 'Í', 'Ó', 'Ú', 'Ý', 'Â', 'Ê', '@', {
          title: 'abc',
          size: 'md',
          toggle: 'lowercase',
          announce: 'alpha mode, button'
        }], ['Î', 'Ô', 'Û', 'Ã', 'Ñ', {
          title: '.',
          announce: 'period, button'
        }, {
          title: '-',
          announce: 'dash, button'
        }, {
          title: '_',
          announce: 'underscore, button'
        }, {
          title: 'shift',
          size: 'xl',
          toggle: 'accents',
          announce: 'shift off, button',
          keyId: 'shift'
        }], [{
          title: '.com',
          announce: 'dot, com',
          size: 'md'
        }, {
          title: '.net',
          announce: 'dot, net',
          size: 'md'
        }, {
          title: '.edu',
          announce: 'dot, edu',
          size: 'md'
        }, {
          title: '.org',
          announce: 'dot, org',
          size: 'md'
        }, {
          title: '.co',
          announce: 'dot, co',
          size: 'md'
        }, {
          title: '.uk',
          announce: 'dot, uk',
          size: 'md'
        }], [{
          title: 'Clear',
          size: 'lg',
          keyId: 'clear',
          announce: 'clear, button'
        }, {
          title: 'Space',
          size: 'xl',
          keyId: 'space',
          announce: 'space, button'
        }, {
          title: 'Done',
          size: 'lg',
          keyId: 'done',
          announce: 'done, button'
        }]],
        symbols: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', {
          title: 'Delete',
          size: 'md',
          keyId: 'delete',
          announce: 'delete, button'
        }], [{
          title: '!',
          announce: 'exclamation, button'
        }, '@', '#', '$', '%', {
          title: '^',
          announce: 'caret circumflex, button'
        }, '&', '*', {
          title: '(',
          announce: 'open parenthesis, button'
        }, {
          title: ')',
          announce: 'close parenthesis, button'
        }, {
          title: 'abc',
          size: 'md',
          toggle: 'lowercase',
          announce: 'alpha mode, button'
        }], [{
          title: '{',
          announce: 'open brace, button'
        }, {
          title: '}',
          announce: 'close brace, button'
        }, {
          title: '[',
          announce: 'open bracket, button'
        }, {
          title: ']',
          announce: 'close bracket, button'
        }, {
          title: ';',
          announce: 'semicolon, button'
        }, {
          title: '"',
          announce: 'doublequote, button'
        }, {
          title: ',',
          announce: 'comma, button'
        }, {
          title: '|',
          announce: 'vertical bar, button'
        }, {
          title: '\\',
          announce: 'backslash, button'
        }, {
          title: '/',
          announce: 'forwardslash, button'
        }, {
          title: 'áöû',
          size: 'md',
          toggle: 'accents',
          announce: 'accents, button',
          keyId: 'accents'
        }], [{
          title: '<',
          announce: 'less than, button'
        }, {
          title: '>',
          announce: 'greater than, button'
        }, {
          title: '?',
          announce: 'question mark, button'
        }, {
          title: '=',
          announce: 'equal sign, button'
        }, {
          title: '`',
          announce: 'grave accent, button'
        }, {
          title: '~',
          announce: 'tilde, button'
        }, {
          title: '_',
          announce: 'underscore, button'
        }, {
          title: ':',
          announce: 'colon, button'
        }, {
          title: '-',
          announce: 'dash, button'
        }, {
          title: '+',
          announce: 'plus sign, button'
        }], [{
          title: '.com',
          announce: 'dot, com',
          size: 'md'
        }, {
          title: '.net',
          announce: 'dot, net',
          size: 'md'
        }, {
          title: '.edu',
          announce: 'dot, edu',
          size: 'md'
        }, {
          title: '.org',
          announce: 'dot, org',
          size: 'md'
        }, {
          title: '.co',
          announce: 'dot, co',
          size: 'md'
        }, {
          title: '.uk',
          announce: 'dot, uk',
          size: 'md'
        }], [{
          title: 'Clear',
          size: 'lg',
          keyId: 'clear',
          announce: 'clear, button'
        }, {
          title: 'Space',
          size: 'xl',
          keyId: 'space',
          announce: 'space, button'
        }, {
          title: 'Done',
          size: 'lg',
          keyId: 'done',
          announce: 'done, button'
        }]]
      };
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'KeyboardEmail';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return _Keyboard_styles__WEBPACK_IMPORTED_MODULE_0__;
    }
  }]);
}(_Keyboard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Keyboard/KeyboardQwerty.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ KeyboardQwerty)
/* harmony export */ });
/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.js");
/* harmony import */ var _Keyboard_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.styles.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, e, o, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), e, o); return 2 & r && "function" == typeof p ? function (t) { return p.apply(o, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */



var KeyboardQwerty = /*#__PURE__*/function (_Keyboard) {
  function KeyboardQwerty() {
    _classCallCheck(this, KeyboardQwerty);
    return _callSuper(this, KeyboardQwerty, arguments);
  }
  _inherits(KeyboardQwerty, _Keyboard);
  return _createClass(KeyboardQwerty, [{
    key: "_construct",
    value: function _construct() {
      _superPropGet(KeyboardQwerty, "_construct", this, 3)([]);
      this.formats = this.qwertyFormat;
    }
  }, {
    key: "qwertyFormat",
    get: function get() {
      return {
        uppercase: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', {
          title: 'Delete',
          size: 'md',
          keyId: 'delete',
          announce: 'delete, button'
        }], ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', {
          title: '#@!',
          size: 'md',
          toggle: 'symbols',
          announce: 'symbol mode, button',
          keyId: 'symbols'
        }], ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '@', {
          title: 'áöû',
          size: 'md',
          toggle: 'accents',
          announce: 'accents, button',
          keyId: 'accents'
        }], ['Z', 'X', 'C', 'V', 'B', 'N', 'M', {
          title: '_',
          announce: 'underscore, button'
        }, {
          title: '.',
          announce: 'period, button'
        }, {
          title: '-',
          announce: 'dash, button'
        }, {
          title: 'shift',
          size: 'md',
          toggle: 'lowercase',
          announce: 'shift off, button',
          keyId: 'shift'
        }], [{
          title: 'Clear',
          size: 'lg',
          keyId: 'clear',
          announce: 'clear, button'
        }, {
          title: 'Space',
          size: 'xl',
          keyId: 'space',
          announce: 'space, button'
        }, {
          title: 'Done',
          size: 'lg',
          keyId: 'done',
          announce: 'done, button'
        }]],
        lowercase: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', {
          title: 'Delete',
          size: 'md',
          keyId: 'delete',
          announce: 'delete, button'
        }], ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', {
          title: '#@!',
          size: 'md',
          toggle: 'symbols',
          announce: 'symbol mode, button',
          keyId: 'symbols'
        }], ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '@', {
          title: 'áöû',
          size: 'md',
          toggle: 'accents',
          announce: 'accents, button',
          keyId: 'accents'
        }], ['z', 'x', 'c', 'v', 'b', 'n', 'm', {
          title: '_',
          announce: 'underscore, button'
        }, {
          title: '.',
          announce: 'period, button'
        }, {
          title: '-',
          announce: 'dash, button'
        }, {
          title: 'shift',
          size: 'md',
          toggle: 'uppercase',
          announce: 'shift on, button',
          keyId: 'shift'
        }], [{
          title: 'Clear',
          size: 'lg',
          keyId: 'clear',
          announce: 'clear, button'
        }, {
          title: 'Space',
          size: 'xl',
          keyId: 'space',
          announce: 'space, button'
        }, {
          title: 'Done',
          size: 'lg',
          keyId: 'done',
          announce: 'done, button'
        }]],
        accents: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', {
          title: 'Delete',
          size: 'md',
          keyId: 'delete',
          announce: 'delete, button'
        }], ['ä', 'ë', 'ï', 'ö', 'ü', 'ÿ', 'à', 'è', 'ì', 'ò', {
          title: '#@!',
          size: 'md',
          toggle: 'symbols',
          announce: 'symbol mode, button',
          keyId: 'symbols'
        }], ['ù', 'á', 'é', 'í', 'ó', 'ú', 'ý', 'â', 'ê', '@', {
          title: 'abc',
          size: 'md',
          toggle: 'lowercase',
          announce: 'alpha mode, button'
        }], ['î', 'ô', 'û', 'ã', 'ñ', {
          title: '_',
          announce: 'underscore, button'
        }, {
          title: '.',
          announce: 'period, button'
        }, {
          title: '-',
          announce: 'dash, button'
        }, {
          title: 'shift',
          size: 'xl',
          toggle: 'accentsUpper',
          announce: 'shift off, button',
          keyId: 'shift'
        }], [{
          title: 'Clear',
          size: 'lg',
          keyId: 'clear',
          announce: 'clear, button'
        }, {
          title: 'Space',
          size: 'xl',
          keyId: 'space',
          announce: 'space, button'
        }, {
          title: 'Done',
          size: 'lg',
          keyId: 'done',
          announce: 'done, button'
        }]],
        accentsUpper: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', {
          title: 'Delete',
          size: 'md',
          keyId: 'delete',
          announce: 'delete, button'
        }], ['Ä', 'Ë', 'Ï', 'Ö', 'Ü', 'Ÿ', 'À', 'È', 'Ì', 'Ò', {
          title: '#@!',
          size: 'md',
          toggle: 'symbols',
          announce: 'symbol mode, button',
          keyId: 'symbols'
        }], ['Ù', 'Á', 'É', 'Í', 'Ó', 'Ú', 'Ý', 'Â', 'Ê', '@', {
          title: 'abc',
          size: 'md',
          toggle: 'lowercase',
          announce: 'alpha mode, button'
        }], ['Î', 'Ô', 'Û', 'Ã', 'Ñ', {
          title: '.',
          announce: 'period, button'
        }, {
          title: '-',
          announce: 'dash, button'
        }, {
          title: '_',
          announce: 'underscore, button'
        }, {
          title: 'shift',
          size: 'xl',
          toggle: 'accents',
          announce: 'shift off, button',
          keyId: 'shift'
        }], [{
          title: 'Clear',
          size: 'lg',
          keyId: 'clear',
          announce: 'clear, button'
        }, {
          title: 'Space',
          size: 'xl',
          keyId: 'space',
          announce: 'space, button'
        }, {
          title: 'Done',
          size: 'lg',
          keyId: 'done',
          announce: 'done, button'
        }]],
        symbols: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', {
          title: 'Delete',
          size: 'md',
          keyId: 'delete',
          announce: 'delete, button'
        }], [{
          title: '!',
          announce: 'exclamation, button'
        }, '@', '#', '$', '%', {
          title: '^',
          announce: 'caret circumflex, button'
        }, '&', '*', {
          title: '(',
          announce: 'open parenthesis, button'
        }, {
          title: ')',
          announce: 'close parenthesis, button'
        }, {
          title: 'abc',
          size: 'md',
          toggle: 'lowercase',
          announce: 'alpha mode, button'
        }], [{
          title: '{',
          announce: 'open brace, button'
        }, {
          title: '}',
          announce: 'close brace, button'
        }, {
          title: '[',
          announce: 'open bracket, button'
        }, {
          title: ']',
          announce: 'close bracket, button'
        }, {
          title: ';',
          announce: 'semicolon, button'
        }, {
          title: '"',
          announce: 'doublequote, button'
        }, {
          title: ',',
          announce: 'comma, button'
        }, {
          title: '|',
          announce: 'vertical bar, button'
        }, {
          title: '\\',
          announce: 'backslash, button'
        }, {
          title: '/',
          announce: 'forwardslash, button'
        }, {
          title: 'áöû',
          size: 'md',
          toggle: 'accents',
          announce: 'accents, button',
          keyId: 'accents'
        }], [{
          title: '<',
          announce: 'less than, button'
        }, {
          title: '>',
          announce: 'greater than, button'
        }, {
          title: '?',
          announce: 'question mark, button'
        }, {
          title: '=',
          announce: 'equal sign, button'
        }, {
          title: '`',
          announce: 'grave accent, button'
        }, {
          title: '~',
          announce: 'tilde, button'
        }, {
          title: '_',
          announce: 'underscore, button'
        }, {
          title: ':',
          announce: 'colon, button'
        }, {
          title: '-',
          announce: 'dash, button'
        }, {
          title: '+',
          announce: 'plus sign, button'
        }], [{
          title: 'Clear',
          size: 'lg',
          keyId: 'clear',
          announce: 'clear, button'
        }, {
          title: 'Space',
          size: 'xl',
          keyId: 'space',
          announce: 'space, button'
        }, {
          title: 'Done',
          size: 'lg',
          keyId: 'done',
          announce: 'done, button'
        }]]
      };
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'KeyboardQwerty';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return _Keyboard_styles__WEBPACK_IMPORTED_MODULE_0__;
    }
  }]);
}(_Keyboard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Keyboard/KeyboardInput.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  InputWithEmail: () => (/* binding */ InputWithEmail),
  InputWithQwerty: () => (/* binding */ InputWithQwerty),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ KeyboardInput_stories)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/docs/utils.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/globals/context/index.js + 6 modules
var context = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var src_utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.js
var Keyboard = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Input/Input.js + 1 modules
var Input = __webpack_require__("../../@lightningjs/ui-components/src/components/Input/Input.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Column/Column.js + 1 modules
var Column = __webpack_require__("../../@lightningjs/ui-components/src/components/Column/Column.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.styles.js
var Keyboard_styles = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.styles.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/KeyboardInput.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */






var KeyboardInput = /*#__PURE__*/function (_Base) {
  function KeyboardInput() {
    _classCallCheck(this, KeyboardInput);
    return _callSuper(this, KeyboardInput, arguments);
  }
  _inherits(KeyboardInput, _Base);
  return _createClass(KeyboardInput, [{
    key: "_update",
    value: function _update() {
      this._Wrapper.style.itemSpacing = this.style.inputSpacing;
      this._updateKeyboardType();
      this._updateInput();
      this._updateKeyboard();
      this._updateCenterKeyboard();
    }
  }, {
    key: "_updateKeyboardType",
    value: function _updateKeyboardType() {
      if (this._Keyboard.constructor !== this.keyboardType) {
        this._Wrapper._resetItems();
        this._Wrapper.items = [{
          type: Input/* default */.A,
          ref: 'Input'
        }, {
          type: this.keyboardType,
          ref: 'Keyboard',
          passSignals: {
            keyboardWidthChanged: true
          }
        }];
      }
    }
  }, {
    key: "_updateInput",
    value: function _updateInput() {
      this._Input.patch(_objectSpread(_objectSpread({}, this.input), {}, {
        centerInParent: this.centerKeyboard,
        w: this._Keyboard.w,
        style: _objectSpread({}, this.style.inputStyle),
        // allows overriding of input styles
        listening: this._isFocusedMode
      }));
    }
  }, {
    key: "_updateKeyboard",
    value: function _updateKeyboard() {
      this._Keyboard.patch({
        defaultFormat: this.defaultFormat || 'lowercase',
        centerKeyboard: this.centerKeyboard
      });
    }

    // updates width of Wrapper and Input to match keyboard width
  }, {
    key: "_updateWidth",
    value: function _updateWidth() {
      this._Input.w = this.w = this._Keyboard.w;
      this.fireAncestors('$itemChanged');
    }
  }, {
    key: "_updateCenterKeyboard",
    value: function _updateCenterKeyboard() {
      if (this.centerKeyboard) {
        this.x = (this.style.screenW - this.w) / 2 - this.style.marginX;
      } else {
        this.x = 0;
      }
    }
  }, {
    key: "$onSoftKey",
    value: function $onSoftKey(_ref) {
      var _ref$key = _ref.key,
        key = _ref$key === void 0 ? '' : _ref$key,
        toggle = _ref.toggle;
      if (toggle) {
        return;
      }
      switch (key.toLowerCase()) {
        case 'delete':
          this._Input.backspace();
          break;
        case 'done':
          break;
        case 'space':
          this._Input.insert(' ');
          break;
        case 'clear':
          this._Input.clear();
          break;
        default:
          this._Input.insert(key);
      }
    }
  }, {
    key: "$keyboardFocused",
    value: function $keyboardFocused(focus) {
      if (focus) {
        this._Input.listening = true;
      } else {
        this._Input.listening = false;
      }
    }
  }, {
    key: "_getFocused",
    value: function _getFocused() {
      return this._Wrapper || this;
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'KeyboardInput';
    }
  }, {
    key: "properties",
    get: function get() {
      return ['centerKeyboard', 'defaultFormat', 'input',
      // this should hold all the props passed from Input
      'keyboardType'];
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Keyboard_styles;
    }
  }, {
    key: "_template",
    value: function _template() {
      return {
        Wrapper: {
          type: Column/* default */.A,
          neverScroll: true,
          w: this.w,
          items: [{
            type: Input/* default */.A,
            ref: 'Input'
          }, {
            type: Keyboard/* default */.A,
            ref: 'Keyboard',
            passSignals: {
              keyboardWidthChanged: true
            }
          }],
          selectedIndex: 1,
          signals: {
            keyboardWidthChanged: '_updateWidth'
          }
        }
      };
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Wrapper', {
        name: 'Input',
        path: 'Wrapper.Input'
      }, {
        name: 'Keyboard',
        path: 'Wrapper.Keyboard'
      }];
    }
  }]);
}(Base/* default */.A);

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/KeyboardQwerty.js
var KeyboardQwerty = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/KeyboardQwerty.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/KeyboardEmail.js
var KeyboardEmail = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/KeyboardEmail.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.stories.js
var Keyboard_stories = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.stories.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Input/Input.stories.js
var Input_stories = __webpack_require__("../../@lightningjs/ui-components/src/components/Input/Input.stories.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png
var ic_lightning_white_32 = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/assets/images/ic_eye_white_48.png
var ic_eye_white_48 = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/ic_eye_white_48.png");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/assets/images/ic_eyeHide_white_48.png
var ic_eyeHide_white_48 = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/ic_eyeHide_white_48.png");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/KeyboardInput.stories.js
/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */














/* harmony default export */ const KeyboardInput_stories = ({
  title: 'Components/Keyboard/KeyboardInput'
});
function getCommponentArray(comps) {
  let arr = [];
  switch (comps) {
    case 'icon':
      arr = [{
        type: Icon/* default */.A,
        icon: ic_lightning_white_32
      }];
      break;
    case 'eye':
      arr = [{
        type: Icon/* default */.A,
        icon: ic_eye_white_48,
        w: 30,
        h: 30
      }];
      break;
    case 'eyeHide':
      arr = [{
        type: Icon/* default */.A,
        icon: ic_eyeHide_white_48,
        w: 30,
        h: 30
      }];
      break;
  }
  return arr;
}

// creates shared arg types for Keyboard Input stories
const sharedKeyboardArgTypes = (0,utils/* createModeControl */.Pg)({
  options: ['focused'],
  summaryValue: 'focused'
});
const InputWithQwerty = () => class InputWithQwerty extends lightning_esm/* default */.A.Component {
  static _template() {
    return {
      InputWithQwerty: {
        type: KeyboardInput,
        keyboardType: KeyboardQwerty/* default */.A,
        input: {
          eyebrow: 'Search',
          helpText: 'Main'
        }
      },
      w: src_utils/* default.getWidthByUpCount */.Ay.getWidthByUpCount(context/* default */.A.theme, 1)
    };
  }
};
const sharedInputArgTypes = {
  prefix: {
    control: 'radio',
    options: [null, 'icon'],
    description: 'Lightning components to be placed to the left of the title',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  suffix: {
    control: 'radio',
    options: [null, 'icon', 'eye', 'eyeHide'],
    description: 'Lightning components to be placed to the right of the title',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  }
};
InputWithQwerty.args = {
  centerKeyboard: false,
  prefix: null,
  suffix: null,
  mode: 'focused'
};
InputWithQwerty.argTypes = {
  ...Keyboard_stories.Keyboard.sharedArgTypes,
  ...sharedKeyboardArgTypes,
  ...sharedInputArgTypes
};
InputWithQwerty.parameters = {
  tag: 'InputWithQwerty'
};
InputWithQwerty.parameters.argActions = {
  prefix: (prefix, component) => {
    if (prefix == null) {
      component.tag('InputWithQwerty')._Input.prefix = [];
    } else {
      component.tag('InputWithQwerty')._Input.prefix = getCommponentArray(prefix);
    }
  },
  suffix: (suffix, component) => {
    if (suffix == null) {
      component.tag('InputWithQwerty')._Input.suffix = [];
    } else {
      component.tag('InputWithQwerty')._Input.suffix = getCommponentArray(suffix);
    }
  }
};
(0,utils/* generateSubStory */.jb)({
  componentName: 'InputWithQwerty',
  baseStory: InputWithQwerty,
  subStory: Input_stories.Input,
  targetProperty: 'input',
  include: ['password', 'mask']
});
const InputWithEmail = () => class InputWithEmail extends lightning_esm/* default */.A.Component {
  static _template() {
    return {
      InputWithEmail: {
        type: KeyboardInput,
        keyboardType: KeyboardEmail/* default */.A,
        input: {
          eyebrow: 'Email Address',
          helpText: 'Help Text'
        }
      },
      w: src_utils/* default.getWidthByUpCount */.Ay.getWidthByUpCount(context/* default */.A.theme, 1)
    };
  }
};
InputWithEmail.args = {
  centerKeyboard: false,
  prefix: null,
  suffix: null,
  mode: 'focused'
};
InputWithEmail.argTypes = {
  ...Keyboard_stories.Keyboard.sharedArgTypes,
  ...sharedKeyboardArgTypes,
  ...sharedInputArgTypes
};
InputWithEmail.parameters = {
  tag: 'InputWithEmail'
};
InputWithEmail.parameters.argActions = {
  prefix: (prefix, component) => {
    if (prefix == null) {
      component.tag('InputWithEmail')._Input.prefix = [];
    } else {
      component.tag('InputWithEmail')._Input.prefix = getCommponentArray(prefix);
    }
  },
  suffix: (suffix, component) => {
    if (suffix == null) {
      component.tag('InputWithEmail')._Input.suffix = [];
    } else {
      component.tag('InputWithEmail')._Input.suffix = getCommponentArray(suffix);
    }
  }
};
(0,utils/* generateSubStory */.jb)({
  componentName: 'InputWithEmail',
  baseStory: InputWithEmail,
  subStory: Input_stories.Input,
  targetProperty: 'input',
  include: ['password', 'mask']
});
;
const __namedExportsOrder = ["InputWithQwerty", "InputWithEmail"];
InputWithQwerty.parameters = {
  ...InputWithQwerty.parameters,
  docs: {
    ...InputWithQwerty.parameters?.docs,
    source: {
      originalSource: "() => class InputWithQwerty extends lng.Component {\n  static _template() {\n    return {\n      InputWithQwerty: {\n        type: KeyboardInputComponent,\n        keyboardType: KeyboardQwertyComponent,\n        input: {\n          eyebrow: 'Search',\n          helpText: 'Main'\n        }\n      },\n      w: utils.getWidthByUpCount(context.theme, 1)\n    };\n  }\n}",
      ...InputWithQwerty.parameters?.docs?.source
    }
  }
};
InputWithEmail.parameters = {
  ...InputWithEmail.parameters,
  docs: {
    ...InputWithEmail.parameters?.docs,
    source: {
      originalSource: "() => class InputWithEmail extends lng.Component {\n  static _template() {\n    return {\n      InputWithEmail: {\n        type: KeyboardInputComponent,\n        keyboardType: KeyboardEmailComponent,\n        input: {\n          eyebrow: 'Email Address',\n          helpText: 'Help Text'\n        }\n      },\n      w: utils.getWidthByUpCount(context.theme, 1)\n    };\n  }\n}",
      ...InputWithEmail.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=components-Keyboard-KeyboardInput-stories.f2f140f0.iframe.bundle.js.map