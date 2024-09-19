"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[1677],{

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

/***/ "../../@lightningjs/ui-components/src/components/Keyboard/KeyboardEmail.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeyboardEmail: () => (/* binding */ KeyboardEmail),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _globals_context_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
/* harmony import */ var _KeyboardEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/KeyboardEmail.js");
/* harmony import */ var _Keyboard_stories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.stories.js");
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






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Components/Keyboard/KeyboardEmail'
});
const KeyboardEmail = () => class KeyboardEmail extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Keyboard: {
        type: _KeyboardEmail__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        defaultFormat: 'lowercase'
      },
      w: _utils__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getWidthByUpCount */ .Ay.getWidthByUpCount(_globals_context_index__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.theme, 1)
    };
  }
};
KeyboardEmail.args = {
  centerKeyboard: false,
  mode: 'focused'
};
KeyboardEmail.storyName = 'KeyboardEmail';
KeyboardEmail.argTypes = _Keyboard_stories__WEBPACK_IMPORTED_MODULE_4__.Keyboard.sharedArgTypes;
KeyboardEmail.parameters = {};
;
const __namedExportsOrder = ["KeyboardEmail"];
KeyboardEmail.parameters = {
  ...KeyboardEmail.parameters,
  docs: {
    ...KeyboardEmail.parameters?.docs,
    source: {
      originalSource: "() => class KeyboardEmail extends lng.Component {\n  static _template() {\n    return {\n      Keyboard: {\n        type: KeyboardEmailComponent,\n        defaultFormat: 'lowercase'\n      },\n      w: utils.getWidthByUpCount(context.theme, 1)\n    };\n  }\n}",
      ...KeyboardEmail.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=components-Keyboard-KeyboardEmail-stories.ef9f18fa.iframe.bundle.js.map