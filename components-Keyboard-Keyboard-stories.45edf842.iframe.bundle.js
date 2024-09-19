"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[8575],{

/***/ "../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Keyboard)
/* harmony export */ });
/* harmony import */ var _globals_context_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
/* harmony import */ var _Key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Key/Key.js");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Row/Row.js");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Column/Column.js");
/* harmony import */ var _Keyboard_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.styles.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropSet(t, e, o, r, p, f) { return _set(_getPrototypeOf(f ? t.prototype : t), e, o, r, p); }
function set(e, r, t, o) { return set = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function (e, r, t, o) { var f, i = _superPropBase(e, r); if (i) { if ((f = Object.getOwnPropertyDescriptor(i, r)).set) return f.set.call(o, t), !0; if (!f.writable) return !1; } if (f = Object.getOwnPropertyDescriptor(o, r)) { if (!f.writable) return !1; f.value = t, Object.defineProperty(o, r, f); } else _defineProperty(o, r, t); return !0; }, set(e, r, t, o); }
function _set(e, r, t, o, f) { if (!set(e, r, t, o || e) && f) throw new TypeError("failed to set property"); return t; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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







var capitalize = function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
var Keyboard = /*#__PURE__*/function (_Base) {
  function Keyboard() {
    _classCallCheck(this, Keyboard);
    return _callSuper(this, Keyboard, arguments);
  }
  _inherits(Keyboard, _Base);
  return _createClass(Keyboard, [{
    key: "_init",
    value: function _init() {
      this._setShouldUpdateThemeBound = this._setShouldUpdateTheme.bind(this);
      _globals_context_index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.on('themeUpdate', this._setShouldUpdateThemeBound);
      _superPropGet(Keyboard, "_init", this, 3)([]);
    }
  }, {
    key: "_setShouldUpdateTheme",
    value: function _setShouldUpdateTheme() {
      this.shouldUpdateTheme = true;
    }
  }, {
    key: "_detach",
    value: function _detach() {
      _superPropGet(Keyboard, "_detach", this, 3)([]);
      _globals_context_index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.off('themeUpdate', this._setShouldUpdateThemeBound);
    }
  }, {
    key: "_focus",
    value: function _focus() {
      _superPropGet(Keyboard, "_focus", this, 3)([]);
      this.fireAncestors('$keyboardFocused', true);
    }
  }, {
    key: "_getFocused",
    value: function _getFocused() {
      return this._currentKeyboard || this;
    }
  }, {
    key: "_update",
    value: function _update() {
      if (!this._currentFormat || this._shouldUpdateKeyboards) {
        this._currentFormat = this.defaultFormat;
      }
      if (this.centerKeyboard) {
        this.x = this.centeredXPos;
      } else if (this.x === this.centeredXPos && !this.centerKeyboard) {
        // if the keyboard was centered before but now should not be
        this.x = 0;
      } else {
        this.x == null && (this.x = 0); // if x is undefined or null set it to 0, otherwise do not overwrite x pos
      }
      this._shouldUpdateKeyboards && this._createKeyboardsFromFormats();
      this._formatKeys();
    }
  }, {
    key: "_createKeyboardsFromFormats",
    value: function _createKeyboardsFromFormats() {
      var _this = this;
      this.childList.clear(); // if new formats patched in, remove keyboards created from the previous formats
      Object.keys(this.formats).forEach(function (key) {
        var format = _this.formats[key];
        if (format) {
          var keyboardData = _this._formatKeyboardData(format);
          _this._createKeyboard(key, _this._createRows(keyboardData, key));
        }
      });
      this._formatsChanged = false;
    }
  }, {
    key: "_createKeyboard",
    value: function _createKeyboard(key) {
      var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      key = capitalize(key);
      if (rows.length === 1) {
        this.patch(_defineProperty({}, key, rows[0]));
      } else {
        this.patch(_defineProperty({}, key, {
          type: _Column__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
          plinko: true,
          items: rows,
          style: {
            itemSpacing: this.style.keySpacing
          },
          autoResizeWidth: true,
          autoResizeHeight: true,
          neverScroll: true,
          alpha: key === capitalize(this._currentFormat) ? 1 : 0.001
        }));
      }
    }
  }, {
    key: "_createRows",
    value: function _createRows() {
      var _this2 = this;
      var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var keyboard = arguments.length > 1 ? arguments[1] : undefined;
      return rows.map(function (keys) {
        var _this2$_currentKeyboa;
        return {
          type: _Row__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
          autoResizeHeight: true,
          autoResizeWidth: true,
          centerInParent: _this2.centerKeys,
          neverScroll: true,
          wrapSelected: _this2.rowWrap !== undefined ? _this2.rowWrap : true,
          style: {
            itemSpacing: _this2.style.keySpacing
          },
          items: _this2._createKeys(keys, keyboard),
          selectedIndex: ((_this2$_currentKeyboa = _this2._currentKeyboard) === null || _this2$_currentKeyboa === void 0 || (_this2$_currentKeyboa = _this2$_currentKeyboa.selected) === null || _this2$_currentKeyboa === void 0 ? void 0 : _this2$_currentKeyboa.selectedIndex) || 0
        };
      });
    }
  }, {
    key: "_createKeys",
    value: function _createKeys() {
      var _this3 = this;
      var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var keyboard = arguments.length > 1 ? arguments[1] : undefined;
      return keys.map(function (keyProps) {
        if (!keyProps) {
          return {
            type: _this3.keyComponent || _Key__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
            // allows use of a custom Key component if specified
            keySpacing: _this3.style.keySpacing,
            skipFocus: true,
            alpha: 0.01
          };
        }
        var key = {
          type: _this3.keyComponent || _Key__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
          // allows use of a custom Key component if specified
          keySpacing: _this3.style.keySpacing
        };
        if (_typeof(keyProps) === 'object') {
          var _this3$style$keyProps, _this3$style$keyProps2;
          // keyId is used to account for style overrides on individual keys,
          // icon updates, and localization
          var keyName = keyProps.keyId || keyProps.title;
          var keyOverrides = ((_this3$style$keyProps = _this3.style.keyProps) === null || _this3$style$keyProps === void 0 || (_this3$style$keyProps = _this3$style$keyProps[keyboard]) === null || _this3$style$keyProps === void 0 ? void 0 : _this3$style$keyProps[keyName]) || ((_this3$style$keyProps2 = _this3.style.keyProps) === null || _this3$style$keyProps2 === void 0 ? void 0 : _this3$style$keyProps2[keyName]) || {};
          var keyPatch = _objectSpread(_objectSpread(_objectSpread({}, key), keyProps), keyOverrides);
          if (keyOverrides !== null && keyOverrides !== void 0 && keyOverrides.icon) {
            keyPatch.style = _objectSpread(_objectSpread({}, keyOverrides.style), {}, {
              iconStyle: _objectSpread({}, keyOverrides.iconStyle)
            });
          }
          return keyPatch;
        }
        return _objectSpread(_objectSpread({}, key), {}, {
          title: keyProps
        });
      });
    }
  }, {
    key: "_formatKeyboardData",
    value: function _formatKeyboardData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      if (Array.isArray(data) && data.length) {
        if (!Array.isArray(data[0]) && !this.inline) {
          var keyRows = [];
          var idx, counter;
          for (idx = 0, counter = -1; idx < data.length; idx++) {
            if (idx % this.columnCount === 0) {
              counter++;
              keyRows[counter] = [];
            }
            keyRows[counter].push(data[idx]);
          }
          return keyRows; // TODO: Swap to a reduce
        } else if (this.inline) {
          return [data];
        }
        return data;
      }
    }
  }, {
    key: "_formatKeys",
    value: function _formatKeys() {
      var _this4 = this;
      Object.keys(this.formats).forEach(function (format) {
        var element = _this4.tag(capitalize(format));
        if (element) {
          element.patch({
            alpha: format === _this4._currentFormat ? 1 : 0.001,
            style: {
              itemSpacing: _this4.style.keySpacing
            }
          });
          element.items.forEach(function (row) {
            row.patch({
              style: {
                itemSpacing: _this4.style.keySpacing
              },
              centerInParent: _this4.centerKeys,
              wrapSelected: _this4.rowWrap !== undefined ? _this4.rowWrap : true
            });
          });
          // force Column to recalculate rows from the centerKeyboard toggle
          element.queueRequestUpdate();
        }
      });
    }
  }, {
    key: "$toggleKeyboard",
    value: function $toggleKeyboard(next) {
      var nextKeyboard = capitalize(next);
      if (next !== this._currentFormat) {
        var nextKeyboardTag = this.tag(nextKeyboard);
        this.selectKeyOn(nextKeyboardTag);
        this._currentKeyboard.alpha = 0.001;
        nextKeyboardTag.alpha = 1;
        this._currentFormat = next;
      }
    }
  }, {
    key: "selectKeyOn",
    value: function selectKeyOn(keyboard) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getSelectedKey(),
        row = _ref.row,
        column = _ref.column;
      if (keyboard && keyboard.constructor) {
        var type = keyboard.constructor.name;
        if (type === 'Row') {
          keyboard.selectedIndex = column;
        } else {
          keyboard.selectedIndex = row;
          keyboard.selected.selectedIndex = column;
        }
      }
    }
  }, {
    key: "getSelectedKey",
    value: function getSelectedKey() {
      var row, column;
      var keyboard = this._currentKeyboard;
      var type = keyboard.constructor.name;
      if (type === 'Row') {
        row = 0;
        column = keyboard.selectedIndex;
      } else {
        row = keyboard.selectedIndex;
        column = keyboard.selected.selectedIndex;
      }
      return {
        row: row,
        column: column
      };
    }
  }, {
    key: "$itemChanged",
    value: function $itemChanged() {
      this.w = this._currentKeyboard.w;
      this.fireAncestors('$itemChanged');
      this.signal('keyboardWidthChanged');
    }
  }, {
    key: "_setFormats",
    value: function _setFormats() {
      var formats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this._formatsChanged = true;
      return formats;
    }
  }, {
    key: "centeredXPos",
    get: function get() {
      return (this.style.screenW - this.w) / 2 - this.style.marginX;
    }
  }, {
    key: "_shouldUpdateKeyboards",
    get: function get() {
      return this.shouldUpdateTheme || this._formatsChanged;
    }
  }, {
    key: "defaultFormat",
    get: function get() {
      return this._defaultFormat || Object.keys(this.formats)[0];
    },
    set: function set(format) {
      this._defaultFormat = format;
    }
  }, {
    key: "_currentKeyboard",
    get: function get() {
      return this._currentFormat ? this.tag(capitalize(this._currentFormat)) : null;
    }
  }, {
    key: "columnCount",
    get: function get() {
      if (this._columnCount) return this._columnCount;
      if (this.rowCount) return this.formats[this.defaultFormat.toLowerCase()].length / this.rowCount;
      if (this.inline) return this.formats[this.defaultFormat.toLowerCase()].length;else return 11; // TODO: Remove this hard-coded number?
    },
    set: function set(columnCount) {
      this._columnCount = columnCount;
    }
  }, {
    key: "announce",
    get: function get() {
      if (this._announce) {
        return this._announce;
      }
      return 'Keyboard' + (this.title ? ", ".concat(this.title) : '');
    },
    set: function set(announce) {
      _superPropSet(Keyboard, "announce", announce, this, 1, 1);
    }
  }, {
    key: "announceContext",
    get: function get() {
      return this._announceContext || ['PAUSE-2', 'Use arrow keys to choose characters, press center to select'];
    },
    set: function set(announceContext) {
      _superPropSet(Keyboard, "announceContext", announceContext, this, 1, 1);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'Keyboard';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return _Keyboard_styles__WEBPACK_IMPORTED_MODULE_4__;
    }
  }, {
    key: "properties",
    get: function get() {
      return ['formats', 'centerKeyboard', 'rowWrap', 'centerKeys', 'keyComponent'];
    }
  }]);
}(_Base__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.styles.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   base: () => (/* binding */ base)
/* harmony export */ });
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

var base = function base(theme) {
  return {
    keySpacing: theme.spacer.md,
    screenW: theme.layout.screenW,
    marginX: theme.layout.marginX,
    inputSpacing: theme.spacer.md * 10 + theme.spacer.md,
    inputStyle: {
      radius: theme.radius.md
    }
  };
};

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Keyboard: () => (/* binding */ Keyboard),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _docs_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
/* harmony import */ var _globals_context_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.js");
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
  title: 'Components/Keyboard/Keyboard'
});
const Keyboard = () => class Keyboard extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Keyboard: {
        type: _Keyboard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        formats: {
          lowercase: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', {
            title: 'Delete',
            size: 'md',
            keyId: 'delete',
            announce: 'delete, button'
          }], ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'], ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], ['z', 'x', 'c', 'v', 'b', 'n', 'm'], [{
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
        }
      },
      w: _utils__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getWidthByUpCount */ .Ay.getWidthByUpCount(_globals_context_index__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.theme, 1)
    };
  }
};
Keyboard.args = {
  centerKeys: true,
  centerKeyboard: false,
  mode: 'focused'
};
Keyboard.sharedArgTypes = {
  ...(0,_docs_utils__WEBPACK_IMPORTED_MODULE_4__/* .createModeControl */ .Pg)({
    summaryValue: 'focused'
  }),
  centerKeyboard: {
    description: "Center the keyboard within it's set width",
    control: 'boolean',
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
};
Keyboard.argTypes = {
  ...Keyboard.sharedArgTypes,
  centerKeys: {
    description: "Center the keys within it's set width of keyboard",
    control: 'boolean',
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
};
Keyboard.parameters = {};
;
const __namedExportsOrder = ["Keyboard"];
Keyboard.parameters = {
  ...Keyboard.parameters,
  docs: {
    ...Keyboard.parameters?.docs,
    source: {
      originalSource: "() => class Keyboard extends lng.Component {\n  static _template() {\n    return {\n      Keyboard: {\n        type: KeyboardComponent,\n        formats: {\n          lowercase: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', {\n            title: 'Delete',\n            size: 'md',\n            keyId: 'delete',\n            announce: 'delete, button'\n          }], ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'], ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], ['z', 'x', 'c', 'v', 'b', 'n', 'm'], [{\n            title: 'Clear',\n            size: 'lg',\n            keyId: 'clear',\n            announce: 'clear, button'\n          }, {\n            title: 'Space',\n            size: 'xl',\n            keyId: 'space',\n            announce: 'space, button'\n          }, {\n            title: 'Done',\n            size: 'lg',\n            keyId: 'done',\n            announce: 'done, button'\n          }]]\n        }\n      },\n      w: utils.getWidthByUpCount(context.theme, 1)\n    };\n  }\n}",
      ...Keyboard.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=components-Keyboard-Keyboard-stories.45edf842.iframe.bundle.js.map