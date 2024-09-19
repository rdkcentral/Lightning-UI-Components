"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[4759,9861],{

/***/ "../../@lightningjs/ui-components/src/components/TitleRow/TitleRow.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TitleRow)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/TitleRow/TitleRow.styles.js
var TitleRow_styles_namespaceObject = {};
__webpack_require__.r(TitleRow_styles_namespaceObject);
__webpack_require__.d(TitleRow_styles_namespaceObject, {
  base: () => (base),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.js + 1 modules
var TextBox = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Row/Row.js + 1 modules
var Row = __webpack_require__("../../@lightningjs/ui-components/src/components/Row/Row.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/TitleRow/TitleRow.styles.js
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
    width: (0,utils/* getWidthByUpCount */.cN)(theme, 1),
    titleMarginBottom: theme.spacer.lg,
    titleMarginLeft: theme.layout.gutterX,
    titleTextStyle: _objectSpread(_objectSpread({}, theme.typography.headline1), {}, {
      textColor: theme.color.textNeutral
    })
  };
};
var tone = function tone(theme) {
  return {
    neutral: {
      titleTextStyle: {
        textColor: theme.color.textNeutral
      }
    },
    inverse: {
      titleTextStyle: {
        textColor: theme.color.textInverse
      }
    },
    brand: {
      titleTextStyle: {
        textColor: theme.color.textNeutral
      }
    }
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/TitleRow/TitleRow.js
function TitleRow_typeof(o) { "@babel/helpers - typeof"; return TitleRow_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, TitleRow_typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function TitleRow_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function TitleRow_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? TitleRow_ownKeys(Object(t), !0).forEach(function (r) { TitleRow_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : TitleRow_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, TitleRow_toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == TitleRow_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropSet(t, e, o, r, p, f) { return _set(_getPrototypeOf(f ? t.prototype : t), e, o, r, p); }
function set(e, r, t, o) { return set = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function (e, r, t, o) { var f, i = _superPropBase(e, r); if (i) { if ((f = Object.getOwnPropertyDescriptor(i, r)).set) return f.set.call(o, t), !0; if (!f.writable) return !1; } if (f = Object.getOwnPropertyDescriptor(o, r)) { if (!f.writable) return !1; f.value = t, Object.defineProperty(o, r, f); } else TitleRow_defineProperty(o, r, t); return !0; }, set(e, r, t, o); }
function _set(e, r, t, o, f) { if (!set(e, r, t, o || e) && f) throw new TypeError("failed to set property"); return t; }
function TitleRow_defineProperty(e, r, t) { return (r = TitleRow_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function TitleRow_toPropertyKey(t) { var i = TitleRow_toPrimitive(t, "string"); return "symbol" == TitleRow_typeof(i) ? i : i + ""; }
function TitleRow_toPrimitive(t, r) { if ("object" != TitleRow_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != TitleRow_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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




var TitleRow = /*#__PURE__*/function (_Row) {
  function TitleRow() {
    _classCallCheck(this, TitleRow);
    return _callSuper(this, TitleRow, arguments);
  }
  _inherits(TitleRow, _Row);
  return _createClass(TitleRow, [{
    key: "_titleLoaded",
    value: function _titleLoaded() {
      this._updateRow();
    }
  }, {
    key: "_construct",
    value: function _construct() {
      _superPropGet(TitleRow, "_construct", this, 3)([]);
      this._autoResizeHeight = true;
    }
  }, {
    key: "_update",
    value: function _update() {
      _superPropGet(TitleRow, "_update", this, 3)([]);
      this._updateTitle();
      this._updateRow();
    }
  }, {
    key: "_autoResize",
    value: function _autoResize() {
      this.w = this.w || this.style.w;
      this.h = this.autoResizeHeight ? this.Items.y + this.Items.h : this.h;
    }
  }, {
    key: "_updateTitle",
    value: function _updateTitle() {
      if (!this.title) {
        if (this._Title) {
          this.patch({
            Title: undefined
          });
        }
        return;
      }
      var titlePatch = {
        x: this.style.titleMarginLeft,
        content: this.title,
        style: {
          textStyle: this.style.titleTextStyle
        }
      };
      if (!this._Title) {
        titlePatch = TitleRow_objectSpread(TitleRow_objectSpread({}, this._titleFirstLoadProps), titlePatch);
      }
      this.patch({
        Title: titlePatch
      });
    }
  }, {
    key: "_titleFirstLoadProps",
    get: function get() {
      return {
        type: TextBox/* default */.A,
        signals: {
          textBoxChanged: '_titleLoaded'
        }
      };
    }
  }, {
    key: "_updateRow",
    value: function _updateRow() {
      this.applySmooth(this.Items, {
        y: this.title ? this._Title.finalH + this.style.titleMarginBottom : 0
      });
    }
  }, {
    key: "announce",
    get: function get() {
      return this._announce || this._Title && this._Title.announce;
    },
    set: function set(announce) {
      _superPropSet(TitleRow, "announce", announce, this, 1, 1);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'TitleRow';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return TitleRow_styles_namespaceObject;
    }
  }, {
    key: "properties",
    get: function get() {
      return [].concat(_toConsumableArray(_superPropGet(TitleRow, "properties", this)), ['title']);
    }
  }, {
    key: "tags",
    get: function get() {
      return [].concat(_toConsumableArray(_superPropGet(TitleRow, "tags", this)), ['Title']);
    }
  }, {
    key: "aliasStyles",
    get: function get() {
      return [{
        prev: 'rowMarginTop',
        curr: 'titleMarginBottom'
      }];
    }
  }]);
}(Row/* default */.A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/ControlRow/ControlRow.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AddingAndRemoving: () => (/* binding */ AddingAndRemoving),
  Basic: () => (/* binding */ Basic),
  LazyLoading: () => (/* binding */ LazyLoading),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ ControlRow_stories)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/ControlRow/ControlRow.styles.js
var ControlRow_styles_namespaceObject = {};
__webpack_require__.r(ControlRow_styles_namespaceObject);
__webpack_require__.d(ControlRow_styles_namespaceObject, {
  base: () => (base)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Tile/Tile.js + 1 modules
var Tile = __webpack_require__("../../@lightningjs/ui-components/src/components/Tile/Tile.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Control/ControlSmall.js + 1 modules
var ControlSmall = __webpack_require__("../../@lightningjs/ui-components/src/components/Control/ControlSmall.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png
var ic_lightning_white_32 = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/assets/images/ic_play_white_32.png
const ic_play_white_32_namespaceObject = __webpack_require__.p + "static/media/ic_play_white_32.af3043b3.png";
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TitleRow/TitleRow.stories.js
var TitleRow_stories = __webpack_require__("../../@lightningjs/ui-components/src/components/TitleRow/TitleRow.stories.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TitleRow/TitleRow.js + 1 modules
var TitleRow = __webpack_require__("../../@lightningjs/ui-components/src/components/TitleRow/TitleRow.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ControlRow/ControlRow.styles.js
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
    extraItemSpacing: theme.spacer.lg
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ControlRow/ControlRow.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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



var ControlRow = /*#__PURE__*/function (_TitleRow) {
  function ControlRow() {
    _classCallCheck(this, ControlRow);
    return _callSuper(this, ControlRow, arguments);
  }
  _inherits(ControlRow, _TitleRow);
  return _createClass(ControlRow, [{
    key: "_construct",
    value: function _construct() {
      _superPropGet(ControlRow, "_construct", this, 3)([]);
      this._leftControls = [];
      this._contentItems = [];
      this._rightControls = [];
      this._lastLeftControlIndex = -1;
      this._lastItemIndex = -1;
      this._lazyLoadBuffer = 0;
    }
  }, {
    key: "_updateContent",
    value: function _updateContent() {
      var itemsToAppend = [];
      if (this.leftControls.length) {
        itemsToAppend.push.apply(itemsToAppend, _toConsumableArray(this._withExtraSpacing(this.leftControls, true)));
      }
      if (this.contentItems.length) {
        itemsToAppend.push.apply(itemsToAppend, _toConsumableArray(this._withExtraSpacing(this.contentItems)));
      }
      if (this.rightControls.length) {
        itemsToAppend.push.apply(itemsToAppend, _toConsumableArray(this.rightControls));
      }
      if (itemsToAppend.length) {
        this.patch({
          alpha: 1,
          items: itemsToAppend,
          selectedIndex: this.leftControls.length,
          startLazyScrollIndex: this.leftControls.length,
          stopLazyScrollIndex: this.leftControls.length + this.items.length - 1
        });
      }
    }
  }, {
    key: "_withExtraSpacing",
    value: function _withExtraSpacing(items) {
      var isControl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var itemsCopy = _toConsumableArray(items);
      var prevItems = isControl ? this._prevLeftControls : this._prevItems;

      // after appending remove extra spacing from the previous last item
      if (prevItems && prevItems.length && itemsCopy[prevItems.length - 1]) {
        itemsCopy[prevItems.length - 1].extraItemSpacing = 0;
      }
      itemsCopy[itemsCopy.length - 1].extraItemSpacing = this.extraItemSpacing == undefined ? this.style.extraItemSpacing : this.extraItemSpacing;
      if (isControl) {
        this._prevLeftControls = itemsCopy;
      } else {
        this._prevItems = itemsCopy;
      }
      return itemsCopy;
    }
  }, {
    key: "_getMoreItems",
    value: function _getMoreItems() {
      if (this.lazyLoadBuffer) {
        var loadMoreIndex = this.contentItems.length - 1 - this.lazyLoadBuffer;
        if (this.selectedIndex - this.leftControls.length >= loadMoreIndex && this.selectedIndex < this.leftControls.length + this.contentItems.length) {
          this.loadMoreItems();
        }
      }
    }
  }, {
    key: "loadMoreItems",
    value: function loadMoreItems() {
      this.signal('loadMoreItems');
    }
  }, {
    key: "_selectedChange",
    value: function _selectedChange(selected, prevSelected) {
      _superPropGet(ControlRow, "_selectedChange", this, 3)([selected, prevSelected]);
      this._getMoreItems();
    }
  }, {
    key: "_appendItemsAt",
    value: function _appendItemsAt(items, appendIndex, removeSpacingIndex) {
      var itemsCopy = _toConsumableArray(items);
      if (removeSpacingIndex != undefined && removeSpacingIndex >= 0) {
        this.items[removeSpacingIndex].extraItemSpacing = undefined;
        itemsCopy[itemsCopy.length - 1].extraItemSpacing = this.extraItemSpacing == undefined ? this.style.extraItemSpacing : this.extraItemSpacing;
      }
      this.appendItemsAt(itemsCopy, appendIndex);
    }
  }, {
    key: "addContentItems",
    value: function addContentItems(items) {
      var lastSelected = this.selectedIndex;
      var itemsToAdd = this._createContentItems(items);
      var addIndex = this._lastItemIndex + 1;
      this._appendItemsAt(itemsToAdd, addIndex, this._lastItemIndex);
      this._lastItemIndex += itemsToAdd.length;
      if (this._contentItems) {
        this._contentItems = [].concat(_toConsumableArray(this.contentItems), _toConsumableArray(itemsToAdd));
      }
      this._updateContent();
      this.selectedIndex = lastSelected;
      this.patch({
        stopLazyScrollIndex: this.leftControls.length + this.items.length - 1
      });
    }
  }, {
    key: "addContentItemsAt",
    value: function addContentItemsAt(items, itemIndex) {
      var itemsToAdd = this._createContentItems(items);
      var addIndex = this._lastLeftControlIndex + 1 + itemIndex;
      if (addIndex === this._lastItemIndex + 1) {
        this.addContentItems(itemsToAdd);
      } else {
        this._appendItemsAt(itemsToAdd, addIndex);
        if (this._contentItems) {
          var _this$_contentItems;
          (_this$_contentItems = this._contentItems).splice.apply(_this$_contentItems, [addIndex, 0].concat(_toConsumableArray(itemsToAdd)));
          this._lastItemIndex = this.contentItems.length - 1;
        }
        this.patch({
          stopLazyScrollIndex: this.leftControls.length + this.items.length - 1
        });
      }
    }
  }, {
    key: "removeContentItemAt",
    value: function removeContentItemAt(index) {
      var removeIndex = this._lastLeftControlIndex + 1 + index;
      this.removeItemAt(removeIndex);
      this._lastItemIndex--;
      if (this._contentItems) {
        this._contentItems.splice(index, 1);
      }
      this.patch({
        startLazyScrollIndex: this.leftControls.length,
        stopLazyScrollIndex: this.leftControls.length + this.items.length - 1
      });
    }
  }, {
    key: "addLeftControls",
    value: function addLeftControls(controls) {
      var itemsToAdd = this._createControls(controls);
      var addIndex = this._lastLeftControlIndex + 1;
      this._appendItemsAt(itemsToAdd, addIndex, this._lastLeftControlIndex);
      if (this._leftControls) {
        this._leftControls = [].concat(_toConsumableArray(this._leftControls), _toConsumableArray(controls));
        this._lastLeftControlIndex = this._leftControls.length - 1;
        this._lastItemIndex += controls.length;
      }
      this.patch({
        startLazyScrollIndex: this.leftControls.length,
        stopLazyScrollIndex: this.leftControls.length + this.items.length - 1
      });
    }
  }, {
    key: "addLeftControlsAt",
    value: function addLeftControlsAt(controls, index) {
      var itemsToAdd = this._createControls(controls);
      if (index === this._lastLeftControlIndex + 1) {
        this.addLeftControls(controls);
      } else {
        this._appendItemsAt(itemsToAdd, index);
        if (this.leftControls) {
          var _this$_leftControls;
          (_this$_leftControls = this._leftControls).splice.apply(_this$_leftControls, [index, 0].concat(_toConsumableArray(controls)));
          this._lastLeftControlIndex = this._leftControls.length - 1;
          this._lastItemIndex += controls.length;
        }
        this.patch({
          startLazyScrollIndex: this.leftControls.length,
          stopLazyScrollIndex: this.leftControls.length + this.items.length - 1
        });
      }
    }
  }, {
    key: "removeLeftControlAt",
    value: function removeLeftControlAt(index) {
      this.removeItemAt(index);
      this._lastLeftControlIndex--;
      this._lastItemIndex--;
      if (this.leftControls) {
        this._leftControls.splice(index, 1);
      }
      this.patch({
        startLazyScrollIndex: this.leftControls.length,
        stopLazyScrollIndex: this.leftControls.length + this.items.length - 1
      });
    }
  }, {
    key: "addRightControls",
    value: function addRightControls(controls) {
      var _this$_rightControls;
      (_this$_rightControls = this._rightControls).push.apply(_this$_rightControls, _toConsumableArray(controls));
      this._appendItemsAt(this._createControls(controls), this.items.length);
    }
  }, {
    key: "addRightControlsAt",
    value: function addRightControlsAt(controls, index) {
      var _this$_rightControls2;
      var appendIndex = this._leftControls.length + this._contentItems.length + index;
      (_this$_rightControls2 = this._rightControls).splice.apply(_this$_rightControls2, [index, 0].concat(_toConsumableArray(controls)));
      this._appendItemsAt(this._createControls(controls), appendIndex);
    }
  }, {
    key: "removeRightControlAt",
    value: function removeRightControlAt(index) {
      var removeIndex = this.leftControls.length + this.contentItems.length + index;
      this.removeItemAt(removeIndex);
      if (this.rightControls) {
        this._rightControls.splice(index, 1);
      }
    }
  }, {
    key: "_createControls",
    value: function _createControls(controls) {
      return controls.map(function (controlProps) {
        return _objectSpread({
          backgroundType: 'fill',
          centerInParent: true
        }, controlProps);
      });
    }
  }, {
    key: "_createContentItems",
    value: function _createContentItems(contentItems) {
      var newContentItems = contentItems.map(function (itemProps) {
        return _objectSpread(_objectSpread({}, itemProps), {}, {
          centerInParent: true
        });
      });
      return newContentItems;
    }
  }, {
    key: "_setLeftControls",
    value: function _setLeftControls(leftControls) {
      this._leftControls = this._createControls(leftControls);
      this._lastLeftControlIndex = leftControls.length - 1;
      this._updateContent();
    }
  }, {
    key: "_getLeftControls",
    value: function _getLeftControls() {
      return this._leftControls;
    }
  }, {
    key: "_setRightControls",
    value: function _setRightControls(rightControls) {
      this._rightControls = this._createControls(rightControls);
      this._updateContent();
    }
  }, {
    key: "_getRightControls",
    value: function _getRightControls() {
      return this._rightControls;
    }
  }, {
    key: "_getContentItems",
    value: function _getContentItems() {
      return this._contentItems;
    }
  }, {
    key: "_setContentItems",
    value: function _setContentItems(items) {
      this._contentItems = this._createContentItems(items);
      this._lastItemIndex = this._lastLeftControlIndex + items.length;
      this._updateContent();
    }
  }, {
    key: "_getLeftControlItems",
    value: function _getLeftControlItems() {
      if (this.leftControls.length) {
        return this.items.slice(0, this._lastLeftControlIndex + 1);
      }
      return [];
    }
  }, {
    key: "_getContentItemItems",
    value: function _getContentItemItems() {
      if (this.contentItems.length) {
        return this.items.slice(this._lastLeftControlIndex + 1, this._lastItemIndex + 1);
      }
      return [];
    }
  }, {
    key: "_getRightControlItems",
    value: function _getRightControlItems() {
      if (this.rightControls.length) {
        var leftSiblingIndex = this._lastItemIndex || this._lastLeftControlIndex;
        return leftSiblingIndex ? this.items.slice(leftSiblingIndex + 1) : this.items;
      }
      return [];
    }
  }, {
    key: "leftControls",
    get: function get() {
      return this._getLeftControls();
    },
    set: function set(leftControls) {
      this._setLeftControls(leftControls);
    }
  }, {
    key: "rightControls",
    get: function get() {
      return this._getRightControls();
    },
    set: function set(rightControls) {
      this._setRightControls(rightControls);
    }
  }, {
    key: "contentItems",
    get: function get() {
      return this._getContentItems();
    },
    set: function set(items) {
      this._setContentItems(items);
    }
  }, {
    key: "lazyLoadBuffer",
    get: function get() {
      return this._lazyLoadBuffer;
    },
    set: function set(lazyLoadBuffer) {
      this._lazyLoadBuffer = lazyLoadBuffer;
      this._getMoreItems();
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'ControlRow';
    }
  }, {
    key: "__themeStyles",
    get: function get() {
      return ControlRow_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      return _objectSpread(_objectSpread({}, _superPropGet(ControlRow, "_template", this, 2)([])), {}, {
        alpha: 0,
        lazyScroll: true,
        signals: {
          selectedChange: '_getMoreItems'
        }
      });
    }
  }, {
    key: "properties",
    get: function get() {
      return [].concat(_toConsumableArray(_superPropGet(ControlRow, "properties", this)), ['extraItemSpacing']);
    }
  }]);
}(TitleRow/* default */.A);

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/docs/utils.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ControlRow/ControlRow.stories.js
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









/* harmony default export */ const ControlRow_stories = ({
  title: 'Components/ControlRow',
  args: {
    ...TitleRow_stories["default"].args,
    lazyScroll: true,
    mode: 'focused'
  },
  argTypes: {
    ...TitleRow_stories["default"].argTypes,
    ...(0,utils/* createModeControl */.Pg)({
      summaryValue: 'focused'
    })
  }
});
const createItems = (length, src, props = {}) => {
  return Array.from({
    length
  }).map((_, index) => ({
    type: Tile/* default */.A,
    artwork: {
      src
    },
    itemLayout: {
      ratioX: 16,
      ratioY: 9,
      upCount: 4
    },
    announce: 'Tile',
    announceContext: `${index + 1} of ${length}`,
    ...props
  }));
};
const createControls = (length, icon = ic_lightning_white_32, props = {}) => {
  return Array.from({
    length
  }).map(() => ({
    type: ControlSmall/* default */.A,
    icon,
    fixed: true,
    h: 64,
    w: 64,
    ...props
  }));
};
const Basic = () => class Basic extends lightning_esm/* default */.A.Component {
  static _template() {
    return {
      ControlRow: {
        type: ControlRow,
        leftControls: createControls(3),
        contentItems: createItems(5),
        rightControls: createControls(3)
      }
    };
  }
  _getFocused() {
    return this.tag('ControlRow');
  }
};
const LazyLoading = () => class LazyLoading extends lightning_esm/* default */.A.Component {
  static _template() {
    return {
      ControlRow: {
        type: ControlRow,
        leftControls: createControls(3),
        contentItems: createItems(5),
        rightControls: createControls(3),
        lazyLoadBuffer: 1,
        signals: {
          loadMoreItems: '_loadMore'
        }
      }
    };
  }
  _construct() {
    this._counter = 0;
  }
  _loadMore() {
    if (this._counter < 2) {
      this._ControlRow.addContentItems(createItems(3, 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg'));
      this._counter++;
    }
  }
  _getFocused() {
    return this.tag('ControlRow');
  }
  get _ControlRow() {
    return this.tag('ControlRow');
  }
};
LazyLoading.args = {
  lazyLoadBuffer: 1
};
LazyLoading.argTypes = {
  lazyLoadBuffer: {
    control: 'number',
    description: 'The number of items before the last content item at which a signal, "loadMoreItems", is emitted.',
    remount: true,
    table: {
      defaultValue: {
        summary: 0
      }
    }
  }
};
LazyLoading.parameters = {
  storyDetails: 'The loadMoreItems signal is emitted each time a contentItem is selected at and after the index defined by the lazyLoadBuffer property. This story adds a method that is invoked when that signal is emitted and adds 3 additional contentItems to the ControlRow via ControlRow.addContentItems. That method will append items in response to the signal two times, then will do nothing in response to further invocations from the signal.'
};
const createSignal = signalName => ({
  onEnter: function () {
    this.signal(signalName);
  },
  passSignals: {
    [signalName]: true
  }
});
const parksUrl = 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg';
const AddingAndRemoving = () => class AddingAndRemoving extends lightning_esm/* default */.A.Component {
  static _template() {
    return {
      ControlRow: {
        type: ControlRow,
        signals: {
          addLeftControl: true,
          removeLeftControl: true,
          addContentItem: true,
          removeContentItem: true,
          addRightControl: true,
          removeRightControl: true
        },
        leftControls: createControls(1, ic_lightning_white_32, createSignal('addLeftControl')),
        contentItems: createItems(5, undefined, createSignal('addContentItem')),
        rightControls: createControls(1, ic_lightning_white_32, createSignal('addRightControl'))
      }
    };
  }
  addLeftControl() {
    this._ControlRow.addLeftControlsAt(createControls(1, ic_play_white_32_namespaceObject, createSignal('removeLeftControl')), 0);
  }
  removeLeftControl() {
    this._ControlRow.removeLeftControlAt(this._ControlRow.selectedIndex);
  }
  addContentItem() {
    this._ControlRow.addContentItemsAt(createItems(1, parksUrl, createSignal('removeContentItem')), this.contentItemIndex + 1);
  }
  removeContentItem() {
    this._ControlRow.removeContentItemAt(this.contentItemIndex);
  }
  addRightControl() {
    this._ControlRow.addRightControls(createControls(1, ic_play_white_32_namespaceObject, createSignal('removeRightControl')));
  }
  removeRightControl() {
    this._ControlRow.removeRightControlAt(this.rightControlIndex);
  }
  get _ControlRow() {
    return this.tag('ControlRow');
  }
  get contentItemIndex() {
    return this._ControlRow.selectedIndex - this._ControlRow.leftControls.length;
  }
  get rightControlIndex() {
    return this._ControlRow.selectedIndex - this._ControlRow.leftControls.length - this._ControlRow.contentItems.length;
  }
  _getFocused() {
    return this._ControlRow;
  }
};
AddingAndRemoving.parameters = {
  storyDetails: `
  Press the Enter key while focused on any controls or items in the ControlRow for the following effects:
      - left controls: prepend a new control with a play icon to the left controls
      - content items: append a tile with a background after the selected index
      - right controls: append a new control with a play icon to the right controls
  Press the Enter key while focused on any of the added controls or content items to remove that control or content item.
  `
};
;
const __namedExportsOrder = ["Basic", "LazyLoading", "AddingAndRemoving"];
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => class Basic extends lng.Component {\n  static _template() {\n    return {\n      ControlRow: {\n        type: ControlRowComponent,\n        leftControls: createControls(3),\n        contentItems: createItems(5),\n        rightControls: createControls(3)\n      }\n    };\n  }\n  _getFocused() {\n    return this.tag('ControlRow');\n  }\n}",
      ...Basic.parameters?.docs?.source
    }
  }
};
LazyLoading.parameters = {
  ...LazyLoading.parameters,
  docs: {
    ...LazyLoading.parameters?.docs,
    source: {
      originalSource: "() => class LazyLoading extends lng.Component {\n  static _template() {\n    return {\n      ControlRow: {\n        type: ControlRowComponent,\n        leftControls: createControls(3),\n        contentItems: createItems(5),\n        rightControls: createControls(3),\n        lazyLoadBuffer: 1,\n        signals: {\n          loadMoreItems: '_loadMore'\n        }\n      }\n    };\n  }\n  _construct() {\n    this._counter = 0;\n  }\n  _loadMore() {\n    if (this._counter < 2) {\n      this._ControlRow.addContentItems(createItems(3, 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg'));\n      this._counter++;\n    }\n  }\n  _getFocused() {\n    return this.tag('ControlRow');\n  }\n  get _ControlRow() {\n    return this.tag('ControlRow');\n  }\n}",
      ...LazyLoading.parameters?.docs?.source
    }
  }
};
AddingAndRemoving.parameters = {
  ...AddingAndRemoving.parameters,
  docs: {
    ...AddingAndRemoving.parameters?.docs,
    source: {
      originalSource: "() => class AddingAndRemoving extends lng.Component {\n  static _template() {\n    return {\n      ControlRow: {\n        type: ControlRowComponent,\n        signals: {\n          addLeftControl: true,\n          removeLeftControl: true,\n          addContentItem: true,\n          removeContentItem: true,\n          addRightControl: true,\n          removeRightControl: true\n        },\n        leftControls: createControls(1, lightningIcon, createSignal('addLeftControl')),\n        contentItems: createItems(5, undefined, createSignal('addContentItem')),\n        rightControls: createControls(1, lightningIcon, createSignal('addRightControl'))\n      }\n    };\n  }\n  addLeftControl() {\n    this._ControlRow.addLeftControlsAt(createControls(1, playIcon, createSignal('removeLeftControl')), 0);\n  }\n  removeLeftControl() {\n    this._ControlRow.removeLeftControlAt(this._ControlRow.selectedIndex);\n  }\n  addContentItem() {\n    this._ControlRow.addContentItemsAt(createItems(1, parksUrl, createSignal('removeContentItem')), this.contentItemIndex + 1);\n  }\n  removeContentItem() {\n    this._ControlRow.removeContentItemAt(this.contentItemIndex);\n  }\n  addRightControl() {\n    this._ControlRow.addRightControls(createControls(1, playIcon, createSignal('removeRightControl')));\n  }\n  removeRightControl() {\n    this._ControlRow.removeRightControlAt(this.rightControlIndex);\n  }\n  get _ControlRow() {\n    return this.tag('ControlRow');\n  }\n  get contentItemIndex() {\n    return this._ControlRow.selectedIndex - this._ControlRow.leftControls.length;\n  }\n  get rightControlIndex() {\n    return this._ControlRow.selectedIndex - this._ControlRow.leftControls.length - this._ControlRow.contentItems.length;\n  }\n  _getFocused() {\n    return this._ControlRow;\n  }\n}",
      ...AddingAndRemoving.parameters?.docs?.source
    }
  }
};

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/TitleRow/TitleRow.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TitleRow: () => (/* binding */ TitleRow),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _Row_Row_stories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Row/Row.stories.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Tile/Tile.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/components/TitleRow/TitleRow.js");
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






// add remount to all Row argTypes individually since Row uses remountAll
// TitleRow title prop can be updated without requiring a remount
const rowArgTypes = Object.keys(_Row_Row_stories__WEBPACK_IMPORTED_MODULE_1__.Row.argTypes).reduce((acc, key) => {
  acc[key] = {
    ..._Row_Row_stories__WEBPACK_IMPORTED_MODULE_1__.Row.argTypes[key],
    remount: key !== 'mode'
  };
  return acc;
}, {});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Components/TitleRow',
  args: {
    title: 'Row Title',
    ..._Row_Row_stories__WEBPACK_IMPORTED_MODULE_1__.Row.args
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'title text to be displayed above the row',
      table: {
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    ...rowArgTypes
  }
});
const createItems = length => {
  return Array.from({
    length
  }).map((_, index) => ({
    type: _Tile__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
    itemLayout: {
      ratioX: 16,
      ratioY: 9,
      upCount: 4
    },
    announce: 'Tile',
    announceContext: `${index + 1} of ${length}`
  }));
};
const TitleRow = () => class TitleRow extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      TitleRow: {
        type: ___WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
        items: createItems(12)
      }
    };
  }
  _getFocused() {
    return this.tag('TitleRow');
  }
};
TitleRow.storyName = 'TitleRow';
;
const __namedExportsOrder = ["TitleRow"];
TitleRow.parameters = {
  ...TitleRow.parameters,
  docs: {
    ...TitleRow.parameters?.docs,
    source: {
      originalSource: "() => class TitleRow extends lng.Component {\n  static _template() {\n    return {\n      TitleRow: {\n        type: TitleRowComponent,\n        items: createItems(12)\n      }\n    };\n  }\n  _getFocused() {\n    return this.tag('TitleRow');\n  }\n}",
      ...TitleRow.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=components-ControlRow-ControlRow-stories.59557b5f.iframe.bundle.js.map