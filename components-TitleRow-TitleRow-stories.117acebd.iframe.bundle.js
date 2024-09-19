"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[9861],{

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
//# sourceMappingURL=components-TitleRow-TitleRow-stories.117acebd.iframe.bundle.js.map