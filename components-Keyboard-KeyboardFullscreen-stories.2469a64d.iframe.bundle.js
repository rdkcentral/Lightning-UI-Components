"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[8892],{

/***/ "../../@lightningjs/ui-components/src/components/Keyboard/KeyboardFullscreen.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  KeyboardFullscreen: () => (/* binding */ KeyboardFullscreen),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ KeyboardFullscreen_stories)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/globals/context/index.js + 6 modules
var context = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.js
var Keyboard = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.styles.js
var Keyboard_styles = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.styles.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/KeyboardFullscreen.js
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



var KeyboardFullScreen = /*#__PURE__*/function (_Keyboard) {
  function KeyboardFullScreen() {
    _classCallCheck(this, KeyboardFullScreen);
    return _callSuper(this, KeyboardFullScreen, arguments);
  }
  _inherits(KeyboardFullScreen, _Keyboard);
  return _createClass(KeyboardFullScreen, [{
    key: "_construct",
    value: function _construct() {
      _superPropGet(KeyboardFullScreen, "_construct", this, 3)([]);
      this.formats = this.fullscreenFormat;
    }
  }, {
    key: "fullscreenFormat",
    get: function get() {
      return {
        letters: [['', '', '', '', '', '', '', '', '', {
          title: '#@!',
          size: 'lg',
          toggle: 'symbols',
          announce: 'symbol mode, button',
          keyId: 'symbols'
        }, {
          title: 'Space',
          size: 'lg',
          keyId: 'space',
          announce: 'space, button'
        }, {
          title: 'Delete',
          size: 'md',
          keyId: 'delete',
          announce: 'delete, button'
        }, '', '', '', '', '', '', '', '', ''], ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']],
        symbols: [['', '', '', '', '', '', '', '', '', {
          title: 'ABC',
          size: 'lg',
          toggle: 'letters',
          announce: 'caps on, button'
        }, {
          title: 'Space',
          size: 'lg',
          keyId: 'space',
          announce: 'space, button'
        }, {
          title: 'Delete',
          size: 'md',
          keyId: 'delete',
          announce: 'delete, button'
        }, '', '', '', '', '', '', '', '', ''], ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', {
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
          title: '`',
          announce: 'grave accent, button'
        }, '~', '_', '.', '-', '+']]
      };
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'KeyboardFullScreen';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Keyboard_styles;
    }
  }]);
}(Keyboard/* default */.A);

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.stories.js
var Keyboard_stories = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.stories.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/KeyboardFullscreen.stories.js
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






/* harmony default export */ const KeyboardFullscreen_stories = ({
  title: 'Components/Keyboard/KeyboardFullscreen'
});
const KeyboardFullscreen = () => class KeyboardFullscreen extends lightning_esm/* default */.A.Component {
  static _template() {
    return {
      Keyboard: {
        type: KeyboardFullScreen,
        defaultFormat: 'letters'
      },
      w: utils/* default.getWidthByUpCount */.Ay.getWidthByUpCount(context/* default */.A.theme, 1)
    };
  }
  _init() {
    this.tag('Keyboard')._whenEnabled.then(() => {
      this.tag('Keyboard').selectKeyOn(this.tag('Keyboard').tag('Letters'), {
        row: 1,
        column: 0
      });
    });
  }
};
KeyboardFullscreen.storyName = 'KeyboardFullscreen';
KeyboardFullscreen.args = {
  centerKeyboard: false,
  mode: 'focused'
};
KeyboardFullscreen.argTypes = Keyboard_stories.Keyboard.sharedArgTypes;
KeyboardFullscreen.parameters = {};
;
const __namedExportsOrder = ["KeyboardFullscreen"];
KeyboardFullscreen.parameters = {
  ...KeyboardFullscreen.parameters,
  docs: {
    ...KeyboardFullscreen.parameters?.docs,
    source: {
      originalSource: "() => class KeyboardFullscreen extends lng.Component {\n  static _template() {\n    return {\n      Keyboard: {\n        type: KeyboardFullscreenComponent,\n        defaultFormat: 'letters'\n      },\n      w: utils.getWidthByUpCount(context.theme, 1)\n    };\n  }\n  _init() {\n    this.tag('Keyboard')._whenEnabled.then(() => {\n      this.tag('Keyboard').selectKeyOn(this.tag('Keyboard').tag('Letters'), {\n        row: 1,\n        column: 0\n      });\n    });\n  }\n}",
      ...KeyboardFullscreen.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=components-Keyboard-KeyboardFullscreen-stories.2469a64d.iframe.bundle.js.map