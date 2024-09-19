"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[2363],{

/***/ "../../@lightningjs/ui-components/src/components/Input/Input.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Input)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Input/Input.styles.js
var Input_styles_namespaceObject = {};
__webpack_require__.r(Input_styles_namespaceObject);
__webpack_require__.d(Input_styles_namespaceObject, {
  base: () => (base),
  mode: () => (mode),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Input/Input.styles.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
    cursorStyle: {
      textColor: theme.color.textNeutral,
      blink: true,
      width: theme.spacer.xs,
      height: theme.spacer.xxl
    },
    eyebrowTextStyle: _objectSpread(_objectSpread({}, theme.typography.caption1), {}, {
      maxLines: 1,
      textColor: theme.color.textNeutral
    }),
    textStyle: _objectSpread(_objectSpread({}, theme.typography.body1), {}, {
      maxLines: 1,
      textColor: theme.color.textNeutral
    }),
    helpTextStyle: _objectSpread(_objectSpread({}, theme.typography.caption1), {}, {
      maxLines: 1,
      textColor: theme.color.textNeutralSecondary
    }),
    minWidth: (0,utils/* getWidthByUpCount */.cN)(theme, 4),
    paddingX: theme.spacer.xl,
    paddingY: theme.spacer.xl,
    backgroundColor: theme.color.interactiveNeutral
  };
};
var mode = function mode(theme) {
  return {
    disabled: {
      eyebrowTextStyle: {
        textColor: theme.color.textNeutralDisabled
      },
      helpTextStyle: {
        textColor: theme.color.textNeutralDisabled
      }
    },
    focused: {
      cursorStyle: {
        textColor: theme.color.textInverse
      },
      eyebrowTextStyle: {
        textColor: theme.color.textNeutral
      },
      helpTextStyle: {
        textColor: theme.color.textNeutralSecondary
      }
    }
  };
};
var tone = function tone(theme) {
  return {
    inverse: {
      mode: {
        focused: {
          eyebrowTextStyle: {
            textColor: theme.color.textNeutral
          },
          helpTextStyle: {
            textColor: theme.color.textNeutral
          }
        }
      }
    }
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Button/Button.js + 1 modules
var Button = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/Button.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.js + 1 modules
var TextBox = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Input/Input.js
function Input_typeof(o) { "@babel/helpers - typeof"; return Input_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Input_typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function Input_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Input_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Input_ownKeys(Object(t), !0).forEach(function (r) { Input_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Input_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Input_toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == Input_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropSet(t, e, o, r, p, f) { return _set(_getPrototypeOf(f ? t.prototype : t), e, o, r, p); }
function set(e, r, t, o) { return set = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function (e, r, t, o) { var f, i = _superPropBase(e, r); if (i) { if ((f = Object.getOwnPropertyDescriptor(i, r)).set) return f.set.call(o, t), !0; if (!f.writable) return !1; } if (f = Object.getOwnPropertyDescriptor(o, r)) { if (!f.writable) return !1; f.value = t, Object.defineProperty(o, r, f); } else Input_defineProperty(o, r, t); return !0; }, set(e, r, t, o); }
function _set(e, r, t, o, f) { if (!set(e, r, t, o || e) && f) throw new TypeError("failed to set property"); return t; }
function Input_defineProperty(e, r, t) { return (r = Input_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function Input_toPropertyKey(t) { var i = Input_toPrimitive(t, "string"); return "symbol" == Input_typeof(i) ? i : i + ""; }
function Input_toPrimitive(t, r) { if ("object" != Input_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Input_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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




var Input = /*#__PURE__*/function (_Button) {
  function Input() {
    _classCallCheck(this, Input);
    return _callSuper(this, Input, arguments);
  }
  _inherits(Input, _Button);
  return _createClass(Input, [{
    key: "_construct",
    value: function _construct() {
      _superPropGet(Input, "_construct", this, 3)([]);
      this._title = '';
      this.actualTitle = '';
      this.position = this.title ? this.title.length : 0;
      this._justify = 'left';
      this._fixed = true;
      this.w = this.style.minWidth;
    }
  }, {
    key: "$itemChanged",
    value: function $itemChanged() {
      _superPropGet(Input, "$itemChanged", this, 3)([]);
      this._updateTextWrapper();
      this._updateHiddenContent();
      this._updateCursorPosition();
      this._updateTitleScrollPosition();
    }
  }, {
    key: "_onTitleTextBoxChanged",
    value: function _onTitleTextBoxChanged() {
      this._updateHiddenContent();
    }
  }, {
    key: "_onHiddenTextBoxChanged",
    value: function _onHiddenTextBoxChanged() {
      this._updateCursorPosition();
    }
  }, {
    key: "_update",
    value: function _update() {
      this._updatePassword(); // need to update title masking before rendering the new title
      _superPropGet(Input, "_update", this, 3)([]);
      this._updateEyebrow();
      this._updateHelpText();
      this._updateTextWrapper();
      this._updateHiddenContent();
      this._updateCursor();
      this._updateCursorListening();
      this._updateCursorBlink();
      this._updateCursorPosition();
      this._updateTitleScrollPosition();
    }
  }, {
    key: "_updatePassword",
    value: function _updatePassword() {
      this.title = this.password ? this.mask.repeat(this.actualTitle.length) : this.actualTitle;
    }
  }, {
    key: "_updateTruncation",
    value: function _updateTruncation() {
      // do not add word wrap
      if (this._Title) {
        this._Title.patch({
          style: {
            textStyle: Input_objectSpread(Input_objectSpread({}, this.style.textStyle), {}, {
              wordWrap: false
            })
          }
        });
      }
    }
  }, {
    key: "_updateEyebrow",
    value: function _updateEyebrow() {
      this._Eyebrow.patch({
        content: this.eyebrow,
        style: {
          textStyle: this.style.eyebrowTextStyle
        },
        mountY: 1,
        x: this.style.paddingX,
        y: this.y - this.style.paddingY
      });
    }
  }, {
    key: "_updateHelpText",
    value: function _updateHelpText() {
      this._HelpText.patch({
        content: this.helpText,
        style: {
          textStyle: this.style.helpTextStyle
        },
        x: this.style.paddingX,
        y: this.y + this.innerH + this.style.paddingY
      });
    }
  }, {
    key: "_updateTextWrapper",
    value: function _updateTextWrapper() {
      this._TextWrapper.clipping = true;
      this._TextWrapper.w = this._visibleContentWidth;
      if (this._Title) {
        this._TextWrapper.h = this._Title.h;
      }
    }
  }, {
    key: "_updateHiddenContent",
    value: function _updateHiddenContent() {
      /**
       * Hidden value is used for measuring where the cursor should
       * be positioned when a user changes the cursor position. Since
       * the text is one texture we don't know the exact position of each
       * individual character, so we render a substring version of the text
       * to determine the render width and position the cursor based on that number
       */
      if (!this._HiddenContent) {
        this._Content.patch({
          HiddenContent: {
            type: TextBox/* default */.A,
            mountY: 0.5,
            y: function y(h) {
              return h / 2;
            },
            signals: {
              textBoxChanged: '_onHiddenTextBoxChanged'
            }
          }
        });
      }
      var _this$title = this.title,
        value = _this$title === void 0 ? '' : _this$title,
        position = this.position,
        password = this.password,
        mask = this.mask;
      var textBeforeCursor = password ? mask.repeat(value.length).substring(0, position) : value.substring(0, position);
      this._HiddenContent.patch({
        style: {
          textStyle: this.style.textStyle
        },
        content: textBeforeCursor
      });
      this._HiddenContent._Text && this._HiddenContent._Text.patch({
        alpha: 0.001
      });
    }
  }, {
    key: "_updateCursor",
    value: function _updateCursor() {
      if (this.style.cursorStyle && this.style.cursorStyle.blink) {
        if (!this._Cursor) {
          this._Content.patch({
            Cursor: {
              rect: true,
              mountY: 0.5
            }
          });
          this.cursorBlink = this._Cursor.animation({
            duration: 1.5,
            repeat: -1,
            actions: [{
              p: 'alpha',
              v: {
                0: 0,
                0.5: 1,
                1: 0
              }
            }]
          });
        }
        this._Cursor.patch(this.style.cursorStyle);
      }
    }
  }, {
    key: "_updateCursorListening",
    value: function _updateCursorListening() {
      if (!this._isDisabledMode) {
        if (this.cursorBlink && !this.cursorBlink.isPlaying()) {
          this.cursorBlink.start();
        }
      } else {
        if (this.cursorBlink) this.isCursorActive ? this.cursorBlink.start() : this.cursorBlink.stop();
      }
      this._Cursor.smooth = {
        color: this.style.cursorStyle.textColor
      };
    }
  }, {
    key: "_updateCursorBlink",
    value: function _updateCursorBlink() {
      if (this.cursorBlink) {
        if (this.isCursorActive) {
          this.cursorBlink.start();
        } else {
          this.cursorBlink.stop();
          this._Cursor.patch({
            alpha: 0.001
          });
        }
      }
    }
  }, {
    key: "_updateCursorPosition",
    value: function _updateCursorPosition() {
      this._Cursor.x = this._titleX + (this._isOverflow ? this._TextWrapper.w : this._HiddenContent.w);
    }
  }, {
    key: "_updateTitleScrollPosition",
    value: function _updateTitleScrollPosition() {
      if (this._Title) {
        this._Title.x = this._isOverflow ? this._visibleContentWidth - this._HiddenContent.w : 0;
        if (this._HiddenContent && this._TextWrapper) {
          this._HiddenContent.x = this._TextWrapper.x + this._Title.x;
        }
      }
    }
  }, {
    key: "_suffixX",
    get: function get() {
      var suffixX = this._hasPrefix ? this.w - this._paddingLeft - this._paddingRight - this._prefixW : this.w - this._paddingLeft - this._paddingRight - this.style.paddingX;
      return suffixX > 0 ? suffixX : 0;
    }
  }, {
    key: "isCursorActive",
    get: function get() {
      return this.listening && (this._isFocusedMode || this._isUnfocusedMode);
    }
  }, {
    key: "_isOverflow",
    get: function get() {
      return this._HiddenContent.w > this._visibleContentWidth;
    }
  }, {
    key: "_visibleContentWidth",
    get: function get() {
      return this._fixedWordWrapWidth;
    }
  }, {
    key: "value",
    get: function get() {
      return this.actualTitle;
    },
    set: function set(value) {
      this.title = this.actualTitle = value;
      this.position = 0;
      this._updatePassword();
    }
  }, {
    key: "clear",
    value: function clear() {
      if (this.isCursorActive) {
        this.title = this.actualTitle = '';
        this.position = 0;
      }
    }
  }, {
    key: "insert",
    value: function insert(content) {
      if (this.isCursorActive) {
        this.actualTitle = this.actualTitle.slice(0, this.position) + content + this.actualTitle.slice(this.position);
        this._updatePassword();
        this.position += content.length;
      }
    }
  }, {
    key: "backspace",
    value: function backspace() {
      if (this.isCursorActive && this.position > 0) {
        this.actualTitle = this.actualTitle.slice(0, this.position - 1) + this.actualTitle.slice(this.position);
        this._updatePassword();
        this.position--;
      }
    }
  }, {
    key: "_handleLeft",
    value: function _handleLeft() {
      if (this._isDisabledMode) {
        return false;
      }
      this.moveLeft();
      if (typeof this.onLeft === 'function') {
        return this.onLeft(this);
      }
      return true;
    }
  }, {
    key: "_handleRight",
    value: function _handleRight() {
      if (this._isDisabledMode) {
        return false;
      }
      this.moveRight();
      if (typeof this.onRight === 'function') {
        return this.onRight(this);
      }
      return true;
    }
  }, {
    key: "moveLeft",
    value: function moveLeft() {
      var position = this.position;
      if (position >= 0) {
        this.position--;
        return true;
      }
      return false;
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      var position = this.position,
        title = this.title;
      if (position < title.length) {
        this.position++;
        return true;
      }
      return false;
    }
  }, {
    key: "announce",
    get: function get() {
      if (this._announce) {
        return this._announce;
      }

      // TODO - Localization?
      // Do we need a locale file with
      // component translations?
      // need to check with Accessibility on what order this should read out in
      if (this.password) {
        return [this.eyebrow, this.helpText];
      } else {
        return [this.eyebrow, 'Input: ' + this.title, this.helpText];
      }
    },
    set: function set(announce) {
      _superPropSet(Input, "announce", announce, this, 1, 1);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'Input';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Input_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      return Input_objectSpread(Input_objectSpread({}, _superPropGet(Input, "_template", this, 2)([])), {}, {
        Eyebrow: {
          type: TextBox/* default */.A
        },
        HelpText: {
          type: TextBox/* default */.A
        }
      });
    }
  }, {
    key: "properties",
    get: function get() {
      return [].concat(_toConsumableArray(_superPropGet(Input, "properties", this)), ['actualTitle', 'cursor', 'eyebrow', 'helpText', 'listening', 'mask', 'password', 'position'
      // TODO: should maybe remove "fixed" as an editable prop to make sure this is never dynamic
      ]);
    }
  }, {
    key: "tags",
    get: function get() {
      return [].concat(_toConsumableArray(_superPropGet(Input, "tags", this)), ['Eyebrow', 'HelpText', {
        name: 'Cursor',
        path: 'Content.Cursor'
      }, {
        name: 'HiddenContent',
        path: 'Content.HiddenContent'
      }]);
    }
  }]);
}(Button/* default */.A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Input/Input.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Input: () => (/* binding */ Input),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Input/Input.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
/* harmony import */ var _docs_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
/* harmony import */ var _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png");
/* harmony import */ var _assets_images_ic_eye_white_48_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/ic_eye_white_48.png");
/* harmony import */ var _assets_images_ic_eyeHide_white_48_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/ic_eyeHide_white_48.png");
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
  title: 'Components/Input'
});
function getComponentArray(comps) {
  let arr = [];
  switch (comps) {
    case 'icon':
      arr = [{
        type: _Icon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        icon: _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_2__
      }];
      break;
    case 'eye':
      arr = [{
        type: _Icon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        icon: _assets_images_ic_eye_white_48_png__WEBPACK_IMPORTED_MODULE_3__,
        w: 30,
        h: 30
      }];
      break;
    case 'eyeHide':
      arr = [{
        type: _Icon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        icon: _assets_images_ic_eyeHide_white_48_png__WEBPACK_IMPORTED_MODULE_4__,
        w: 30,
        h: 30
      }];
      break;
  }
  return arr;
}
const Input = () => class Input extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Input: {
        type: ___WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A
      }
    };
  }
  _handleKey(event) {
    const {
      key
    } = event;
    if (key.length === 1) {
      this.tag('Input').insert(key);
    }
    if (key === 'Backspace') {
      this.tag('Input').backspace();
    }
  }
};
const sharedArgs = {
  eyebrow: 'Eyebrow',
  helpText: 'Help Text',
  listening: false,
  password: false,
  mask: '•',
  prefix: null,
  suffix: null,
  mode: 'focused'
};
const sharedArgTypes = {
  ...(0,_docs_utils__WEBPACK_IMPORTED_MODULE_6__/* .createModeControl */ .Pg)({
    summaryValue: sharedArgs.mode
  }),
  eyebrow: {
    control: 'text',
    description: 'Text on the top of the button ',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  helpText: {
    control: 'text',
    description: 'Text on the bottom of the button ',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  password: {
    control: 'boolean',
    description: 'When true the content will be masked to the user',
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  mask: {
    control: 'text',
    description: 'Character to use as a mask when password is true',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  listening: {
    control: 'boolean',
    description: 'When true cursor will be visible only in focused and unfocused mode and can edit the canvas',
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
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
const sharedArgActions = {
  listening: (isListening, component) => {
    component.tag('Input').listening = isListening;
  },
  password: (isPassword, component) => {
    component.tag('Input').password = isPassword;
  },
  prefix: (prefix, component) => {
    if (prefix == null) {
      component.tag('Input').prefix = [];
    } else {
      component.tag('Input').prefix = getComponentArray(prefix);
    }
  },
  suffix: (suffix, component) => {
    if (suffix == null) {
      component.tag('Input').suffix = [];
    } else {
      component.tag('Input').suffix = getComponentArray(suffix);
    }
  }
};
Input.args = sharedArgs;
Input.argTypes = sharedArgTypes;
Input.parameters = {
  argActions: sharedArgActions
};
;
const __namedExportsOrder = ["Input"];
Input.parameters = {
  ...Input.parameters,
  docs: {
    ...Input.parameters?.docs,
    source: {
      originalSource: "() => class Input extends lng.Component {\n  static _template() {\n    return {\n      Input: {\n        type: InputComponent\n      }\n    };\n  }\n  _handleKey(event) {\n    const {\n      key\n    } = event;\n    if (key.length === 1) {\n      this.tag('Input').insert(key);\n    }\n    if (key === 'Backspace') {\n      this.tag('Input').backspace();\n    }\n  }\n}",
      ...Input.parameters?.docs?.source
    }
  }
};

/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/ic_eyeHide_white_48.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/ic_eyeHide_white_48.b1024d82.png";

/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/ic_eye_white_48.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/ic_eye_white_48.dddd1594.png";

/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/ic_lightning_white_32.06aecfeb.png";

/***/ })

}]);
//# sourceMappingURL=2363.03cd08dc.iframe.bundle.js.map