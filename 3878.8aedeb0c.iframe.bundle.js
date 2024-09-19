"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[3878,6115,4827,287],{

/***/ "../../@lightningjs/ui-components/src/components/Card/Card.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Card)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Card/Card.styles.js
var Card_styles_namespaceObject = {};
__webpack_require__.r(Card_styles_namespaceObject);
__webpack_require__.d(Card_styles_namespaceObject, {
  base: () => (base),
  mode: () => (mode)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Card/Card.styles.js
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
    height: theme.spacer.xxl * 12,
    paddingHorizontal: theme.spacer.xl,
    paddingVertical: theme.spacer.xl,
    radius: theme.radius.md,
    titleTextStyle: _objectSpread(_objectSpread({}, theme.typography.headline1), {}, {
      wordWrap: true,
      maxLines: 2,
      textColor: theme.color.textNeutral
    }),
    width: utils/* default.getWidthByUpCount */.Ay.getWidthByUpCount(theme, 6)
  };
};
var mode = function mode(theme) {
  return {
    focused: {
      tone: {
        neutral: {
          backgroundColor: theme.color.interactiveNeutralFocusSoft
        },
        inverse: {
          backgroundColor: theme.color.interactiveInverseFocusSoft
        },
        brand: {
          backgroundColor: theme.color.interactiveBrandFocusSoft
        }
      }
    },
    disabled: {
      titleTextStyle: {
        textColor: theme.color.textNeutralDisabled
      }
    }
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.js + 1 modules
var TextBox = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Surface/Surface.js + 1 modules
var Surface = __webpack_require__("../../@lightningjs/ui-components/src/components/Surface/Surface.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Card/Card.js
function Card_typeof(o) { "@babel/helpers - typeof"; return Card_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Card_typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function Card_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Card_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Card_ownKeys(Object(t), !0).forEach(function (r) { Card_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Card_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Card_toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == Card_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropSet(t, e, o, r, p, f) { return _set(_getPrototypeOf(f ? t.prototype : t), e, o, r, p); }
function set(e, r, t, o) { return set = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function (e, r, t, o) { var f, i = _superPropBase(e, r); if (i) { if ((f = Object.getOwnPropertyDescriptor(i, r)).set) return f.set.call(o, t), !0; if (!f.writable) return !1; } if (f = Object.getOwnPropertyDescriptor(o, r)) { if (!f.writable) return !1; f.value = t, Object.defineProperty(o, r, f); } else Card_defineProperty(o, r, t); return !0; }, set(e, r, t, o); }
function _set(e, r, t, o, f) { if (!set(e, r, t, o || e) && f) throw new TypeError("failed to set property"); return t; }
function Card_defineProperty(e, r, t) { return (r = Card_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function Card_toPropertyKey(t) { var i = Card_toPrimitive(t, "string"); return "symbol" == Card_typeof(i) ? i : i + ""; }
function Card_toPrimitive(t, r) { if ("object" != Card_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Card_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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




var Card = /*#__PURE__*/function (_Surface) {
  function Card() {
    _classCallCheck(this, Card);
    return _callSuper(this, Card, arguments);
  }
  _inherits(Card, _Surface);
  return _createClass(Card, [{
    key: "_update",
    value: function _update() {
      _superPropGet(Card, "_update", this, 3)([]);
      this._updateTitle();
      this._updatePositions();
    }
  }, {
    key: "_updatePositions",
    value: function _updatePositions() {
      this._updateTitlePosition();
    }
  }, {
    key: "_updateTitle",
    value: function _updateTitle() {
      this._Title.patch({
        content: this.title,
        style: {
          textStyle: Card_objectSpread(Card_objectSpread({}, this.style.titleTextStyle), {}, {
            wordWrapWidth: this._calculateTextWidth()
          })
        }
      });
    }
  }, {
    key: "_calculateTextWidth",
    value: function _calculateTextWidth() {
      return this.w - this.style.paddingHorizontal * 2;
    }
  }, {
    key: "_updateTitlePosition",
    value: function _updateTitlePosition() {
      this._Title.x = this.style.paddingHorizontal;
      this._Title.y = this.style.paddingVertical;
    }
  }, {
    key: "announce",
    get: function get() {
      return this._announce || this._Title && this._Title.announce;
    },
    set: function set(announce) {
      _superPropSet(Card, "announce", announce, this, 1, 1);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'Card';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Card_styles_namespaceObject;
    }
  }, {
    key: "properties",
    get: function get() {
      return [].concat(_toConsumableArray(_superPropGet(Card, "properties", this)), ['title']);
    }
  }, {
    key: "tags",
    get: function get() {
      return [].concat(_toConsumableArray(_superPropGet(Card, "tags", this)), ['Title']);
    }
  }, {
    key: "_template",
    value: function _template() {
      return Card_objectSpread(Card_objectSpread({}, _superPropGet(Card, "_template", this, 2)([])), {}, {
        Title: {
          type: TextBox/* default */.A,
          signals: {
            textBoxChanged: '_updatePositions'
          }
        }
      });
    }
  }]);
}(Surface/* default */.A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Surface/Surface.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Surface)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Surface/Surface.styles.js
var Surface_styles_namespaceObject = {};
__webpack_require__.r(Surface_styles_namespaceObject);
__webpack_require__.d(Surface_styles_namespaceObject, {
  base: () => (base),
  mode: () => (mode),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Surface/Surface.styles.js
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
    backgroundColor: theme.color.interactiveNeutral,
    radius: theme.radius.md,
    animation: {}
  };
};
var tone = function tone(theme) {
  return {
    inverse: {
      backgroundColor: theme.color.interactiveInverse
    }
  };
};
var mode = function mode(theme) {
  return {
    focused: {
      backgroundColor: theme.color.interactiveNeutralFocus,
      tone: {
        inverse: {
          backgroundColor: theme.color.interactiveInverseFocus
        }
      }
    },
    disabled: {
      backgroundColor: theme.color.fillNeutralDisabled
    }
  };
};
// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Surface/Surface.js
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





var Surface = /*#__PURE__*/function (_Base) {
  function Surface() {
    _classCallCheck(this, Surface);
    return _callSuper(this, Surface, arguments);
  }
  _inherits(Surface, _Base);
  return _createClass(Surface, [{
    key: "innerH",
    get: function get() {
      return this.h;
    }
  }, {
    key: "innerW",
    get: function get() {
      return this.w;
    }
  }, {
    key: "_update",
    value: function _update() {
      this._updateLayout();
      this._updateScale();
    }
  }, {
    key: "_updateLayout",
    value: function _updateLayout() {
      this._Background.patch({
        texture: lightning_esm/* default */.A.Tools.getRoundRect(this.innerW - 2,
        // Reference the underscored values here in cause the h or w getters need to be overwritten for alignment - see Tile
        this.innerH - 2, (0,utils/* getMaxRoundRadius */.XG)(this.style.radius, this.w, this.h), 0, null, true, this.style.backgroundColor)
      });
    }
  }, {
    key: "_updateScale",
    value: function _updateScale() {
      var scale = this._isFocusedMode ? this.getFocusScale(this.w, this.h) : this.getUnfocusScale(this.w, this.h);
      this.applySmooth(this, {
        scale: scale
      }, {
        scale: [scale, this.style.animation]
      });
    }
  }], [{
    key: "_template",
    value: function _template() {
      return {
        Background: {}
      };
    }
  }, {
    key: "__componentName",
    get: function get() {
      return 'Surface';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Surface_styles_namespaceObject;
    }
  }, {
    key: "properties",
    get: function get() {
      return [];
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Background'];
    }
  }]);
}(Base/* default */.A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/docs/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pg: () => (/* binding */ createModeControl),
/* harmony export */   cY: () => (/* binding */ DocsLink),
/* harmony export */   jb: () => (/* binding */ generateSubStory)
/* harmony export */ });
/* unused harmony exports nestedArgs, nestedArgTypes, prevValues, nestedArgActions, Item, ObjectFormat, GenericType */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/react/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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

// eslint-disable-next-line no-unused-vars



// creates Mode control on stories
var createModeControl = function createModeControl() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    options = _ref.options,
    summaryValue = _ref.summaryValue;
  return {
    mode: {
      control: 'radio',
      options: options && Array.isArray(options) ? ['unfocused'].concat(_toConsumableArray(options)) : ['unfocused', 'focused', 'disabled'],
      description: 'Sets the visual mode for the component',
      table: {
        defaultValue: {
          summary: summaryValue
        }
      },
      type: {
        name: 'string',
        required: true
      }
    }
  };
};

/**
 * @param {object} config Parameters for generating nested args: { argsObj, targetProp, include, overrides }
 */
function nestedArgs(config) {
  var argsObj = config.argsObj,
    targetProp = config.targetProp,
    include = config.include,
    overrides = config.overrides;
  return Object.keys(argsObj).reduce(function (acc, curr) {
    if (!include.includes(curr)) return acc;
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, targetProp + '_' + curr, overrides.args && overrides.args[curr] || argsObj[curr]));
  }, {});
}

/**
 * @param {object} config Parameters for generating nested arg types: { argsObj, targetProp, include, overrides }
 */
function nestedArgTypes(config) {
  var argTypesObj = config.argTypesObj,
    targetProp = config.targetProp,
    include = config.include,
    overrides = config.overrides;
  return Object.keys(argTypesObj).reduce(function (acc, curr) {
    if (!include.includes(curr)) return acc;
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, targetProp + '_' + curr, _objectSpread(_objectSpread(_objectSpread({
      // Namespaced to avoid conflicts
      name: curr
    }, argTypesObj[curr]), overrides[curr]), {}, {
      table: _objectSpread(_objectSpread(_objectSpread({}, argTypesObj[curr].table || {}), overrides[curr] && overrides[curr].table), {}, {
        category: targetProp
      })
    })));
  }, {});
}
var prevValues = {};

/**
 * @param {object} config Parameters for generating nested arg actions: { componentName, argsTypeObj, targetProp, include, overrides }
 */
function nestedArgActions(config) {
  var componentName = config.componentName,
    argTypesObj = config.argTypesObj,
    targetProp = config.targetProp,
    include = config.include,
    overrides = config.overrides;
  return Object.keys(argTypesObj).reduce(function (acc, curr) {
    if (!include.includes(curr)) return acc;
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, targetProp + '_' + curr, function (value, component) {
      component.tag(componentName).patch(_defineProperty({}, targetProp, _objectSpread(_objectSpread({}, prevValues[targetProp]), {}, _defineProperty({}, curr.replace(targetProp + '_', ''), value === 'none' ? undefined : overrides && overrides[curr] || value))));
      // Allow patching to work with nested objects
      if (!prevValues[targetProp]) {
        prevValues[targetProp] = {};
      }
      prevValues[targetProp][curr.replace(targetProp + '_', '')] = value === 'none' ? undefined : overrides && overrides[curr] || value;
    }));
  }, {});
}

/**
 * @param {object} config Parameters for generating story: { componentName, baseStory, subStory, targetProperty, include, options }
 */
function generateSubStory(config) {
  config.baseStory.args = _objectSpread(_objectSpread({}, config.baseStory.args), nestedArgs({
    argsObj: config.subStory.args || {},
    targetProp: config.targetProperty,
    include: config.include,
    overrides: config.overrides && config.overrides.args || {}
  }));
  config.baseStory.argTypes = _objectSpread(_objectSpread({}, config.baseStory.argTypes), nestedArgTypes({
    argTypesObj: config.subStory.argTypes || {},
    targetProp: config.targetProperty,
    include: config.include,
    overrides: config.overrides && config.overrides.argTypes || {}
  }));
  if (!(config.baseStory && config.baseStory.parameters && config.baseStory.parameters.argActions)) {
    config.baseStory.parameters = {
      argActions: {}
    };
  }
  config.baseStory.parameters.argActions = _objectSpread(_objectSpread({}, config.baseStory.parameters.argActions), nestedArgActions({
    componentName: config.componentName,
    argTypesObj: config.subStory.argTypes || {},
    targetProp: config.targetProperty,
    include: config.include,
    overrides: config.overrides && config.overrides.argActions || {}
  }));
}

// used to create links to Lightning docs given an id
var DocsLink = function DocsLink(_ref2) {
  var children = _ref2.children,
    id = _ref2.id;
  var docsmap = {
    lng: {
      _base: 'https://rdkcentral.github.io/Lightning/docs',
      Component: '/components/overview',
      Text: '/textures/text',
      Transition: '/transitions/attributes'
    }
  };
  var _id$split = id.split('.'),
    _id$split2 = _slicedToArray(_id$split, 2),
    source = _id$split2[0],
    path = _id$split2[1];
  var href = docsmap[source]._base + docsmap[source][path];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: href,
    target: "_blank"
  }, children || id);
};
var Item = function Item(_ref3) {
  var children = _ref3.children;
  return children;
};

/**
 * Creates formatted object for markdown prop tables
 * see Column and Row stories
 * @param {object} props
 * @param {object} props.type - TS-style generic/utility type
 */
var ObjectFormat = function ObjectFormat(_ref4) {
  var object = _ref4.object;
  return ['{', /*#__PURE__*/React.createElement("br", null), '  '].concat(_toConsumableArray(utils.flatten(Object.entries(object).map(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
      k = _ref6[0],
      v = _ref6[1];
    return [/*#__PURE__*/React.createElement("span", null, "\xA0\xA0"), "".concat(k, ": "), v, ',', /*#__PURE__*/React.createElement("br", null)];
  }))), ['}']).map(function (x, i) {
    return /*#__PURE__*/React.createElement(Item, {
      key: i
    }, x);
  });
};

/**
 * Formats TS-style generic types
 * See Columns and Row stories
 * @param {object} props
 * @param {object} props.children - component children
 * @param {string} props.type - Name of generic type
 */
var GenericType = function GenericType(_ref7) {
  var children = _ref7.children,
    type = _ref7.type;
  return [type, '<', children, '>'].map(function (x, i) {
    return /*#__PURE__*/React.createElement(Item, {
      key: i
    }, x);
  });
};

/***/ })

}]);
//# sourceMappingURL=3878.8aedeb0c.iframe.bundle.js.map