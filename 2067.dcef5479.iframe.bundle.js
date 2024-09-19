"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[2067,5137,4188],{

/***/ "../../@lightningjs/ui-components/src/components/Checkbox/Checkbox.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Checkbox)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Checkbox/Checkbox.styles.js
var Checkbox_styles_namespaceObject = {};
__webpack_require__.r(Checkbox_styles_namespaceObject);
__webpack_require__.d(Checkbox_styles_namespaceObject, {
  base: () => (base),
  mode: () => (mode),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Checkbox/Checkbox.styles.js
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
  var strokeWidth = theme.stroke.sm;
  var size = theme.spacer.xxl;
  return {
    alpha: theme.alpha.primary,
    width: size,
    height: size,
    iconWidth: theme.spacer.lg,
    iconHeight: theme.spacer.lg,
    icon: theme.asset.check,
    radius: theme.radius.xs,
    strokeWidth: strokeWidth
  };
};
var tone = function tone(theme) {
  return {
    neutral: {
      strokeColor: theme.color.strokeNeutralSecondary,
      checkColor: theme.color.fillInverse,
      backgroundColor: theme.color.fillInverseSecondary,
      backgroundColorChecked: theme.color.fillNeutral
    },
    inverse: {
      strokeColor: theme.color.strokeInverseSecondary,
      checkColor: theme.color.fillNeutral,
      backgroundColor: theme.color.fillNeutralSecondary,
      backgroundColorChecked: theme.color.fillInverse
    },
    brand: {
      strokeColor: theme.color.strokeNeutralSecondary,
      checkColor: theme.color.fillInverse,
      backgroundColor: theme.color.fillNeutralSecondary,
      backgroundColorChecked: theme.color.fillBrand
    }
  };
};
var mode = function mode(theme) {
  return {
    disabled: {
      alpha: theme.alpha.inactive
    }
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Checkbox/Checkbox.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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






var Checkbox = /*#__PURE__*/function (_Base) {
  function Checkbox() {
    _classCallCheck(this, Checkbox);
    return _callSuper(this, Checkbox, arguments);
  }
  _inherits(Checkbox, _Base);
  return _createClass(Checkbox, [{
    key: "_update",
    value: function _update() {
      this._updateBody();
      this._updateStroke();
      this._updateCheck();
      if (this._checkedChanged) {
        this.fireAncestors('$announce', this.announce);
        this._checkedChanged = false;
      }
      this._updateOpacity();
    }
  }, {
    key: "_updateCheck",
    value: function _updateCheck() {
      this._Check.patch({
        w: this.style.iconWidth,
        h: this.style.iconHeight,
        icon: this.style.icon,
        style: {
          color: this.style.checkColor
        }
      });
      var alphaPatch = {
        alpha: this.checked ? 1 : 0
      };
      this.applySmooth(this._Check, alphaPatch);
    }
  }, {
    key: "_updateBody",
    value: function _updateBody() {
      var bodyColor = this.checked ? this.style.backgroundColorChecked : this.style.backgroundColor;
      var width = this.w - this.style.strokeWidth * 2 - 2;
      var height = this.h - this.style.strokeWidth * 2 - 2;
      this._Body.patch({
        texture: lightning_esm/* default */.A.Tools.getRoundRect(
        // Compensating for the extra 2 pixels getRoundRect adds
        width, height, (0,utils/* getMaxRoundRadius */.XG)(this.style.radius, width, height, this.style.strokeWidth * 2 - 2), 0, null, true, bodyColor)
      });
    }
  }, {
    key: "_updateStroke",
    value: function _updateStroke() {
      this._Stroke.patch({
        texture: lightning_esm/* default */.A.Tools.getRoundRect(
        // Compensating for the extra 2 pixels getRoundRect adds
        this.w - 2, this.h - 2, (0,utils/* getMaxRoundRadius */.XG)(this.style.radius, this.w - 2, this.h - 2), this.style.strokeWidth, this.style.strokeColor, false)
      });
    }
  }, {
    key: "_updateOpacity",
    value: function _updateOpacity() {
      this.applySmooth(this, {
        alpha: this.style.alpha
      });
    }
  }, {
    key: "_setChecked",
    value: function _setChecked(checked) {
      this._checkedChanged = checked !== this._checked;
      return checked;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (!this._isDisabledMode) {
        this.checked = !this.checked;
      }
      return this;
    }
  }, {
    key: "_handleEnter",
    value: function _handleEnter() {
      if (typeof this.onEnter === 'function') {
        return this.onEnter(this);
      } else {
        this.toggle();
      }
      return false;
    }
  }, {
    key: "announce",
    get: function get() {
      return this._announce || (this.checked ? 'Checked' : 'Unchecked');
    },
    set: function set(announce) {
      _superPropSet(Checkbox, "announce", announce, this, 1, 1);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'Checkbox';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Checkbox_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      var center = {
        mount: 0.5,
        x: function x(w) {
          return w / 2;
        },
        y: function y(h) {
          return h / 2;
        }
      };
      return {
        Body: _objectSpread(_objectSpread({
          rtt: true
        }, center), {}, {
          Check: _objectSpread(_objectSpread({
            type: Icon/* default */.A
          }, center), {}, {
            alpha: 0
          })
        }),
        Stroke: center
      };
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Check', 'Body', 'Stroke'];
    }
  }, {
    key: "properties",
    get: function get() {
      return ['checked'];
    }
  }, {
    key: "aliasStyles",
    get: function get() {
      return [{
        prev: 'checkSrc',
        curr: 'icon'
      }, {
        prev: 'checkH',
        curr: 'iconHeight'
      }, {
        prev: 'checkW',
        curr: 'iconWidth'
      }, {
        prev: 'checkHeight',
        curr: 'iconHeight'
      }, {
        prev: 'checkWidth',
        curr: 'iconWidth'
      }];
    }
  }]);
}(Base/* default */.A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/ListItem/ListItem.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ListItem)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/ListItem/ListItem.styles.js
var ListItem_styles_namespaceObject = {};
__webpack_require__.r(ListItem_styles_namespaceObject);
__webpack_require__.d(ListItem_styles_namespaceObject, {
  base: () => (base),
  mode: () => (mode),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ListItem/ListItem.styles.js
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
    alpha: theme.alpha.primary,
    descriptionTextStyle: _objectSpread(_objectSpread({}, theme.typography.body3), {}, {
      maxLines: 1,
      textColor: theme.color.textNeutralSecondary
    }),
    height: theme.spacer.xxl * 3,
    logoStyle: {
      width: theme.spacer.xxl * 2,
      height: theme.spacer.xxl * 2,
      radius: theme.radius.sm
    },
    paddingX: theme.spacer.xl,
    contentSpacing: theme.spacer.lg,
    titleTextStyle: _objectSpread(_objectSpread({}, theme.typography.headline3), {}, {
      maxLines: 1,
      textColor: theme.color.textNeutral
    }),
    width: utils/* default.getWidthByColumnSpan */.Ay.getWidthByColumnSpan(theme, 3)
  };
};
var mode = function mode(theme) {
  return {
    disabled: {
      alpha: theme.alpha.inactive,
      descriptionTextStyle: {
        textColor: theme.color.textNeutralDisabled
      },
      titleTextStyle: {
        textColor: theme.color.textNeutralDisabled
      }
    },
    focused: {
      descriptionTextStyle: {
        textColor: theme.color.textInverseSecondary
      },
      titleTextStyle: {
        textColor: theme.color.textInverse
      }
    }
  };
};
var tone = function tone(theme) {
  return {
    inverse: {
      mode: {
        focused: {
          descriptionTextStyle: {
            textColor: theme.color.textNeutral
          },
          titleTextStyle: {
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
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ListItem/ListItem.js
function ListItem_typeof(o) { "@babel/helpers - typeof"; return ListItem_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, ListItem_typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ListItem_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function ListItem_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ListItem_ownKeys(Object(t), !0).forEach(function (r) { ListItem_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ListItem_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, ListItem_toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == ListItem_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropSet(t, e, o, r, p, f) { return _set(_getPrototypeOf(f ? t.prototype : t), e, o, r, p); }
function set(e, r, t, o) { return set = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function (e, r, t, o) { var f, i = _superPropBase(e, r); if (i) { if ((f = Object.getOwnPropertyDescriptor(i, r)).set) return f.set.call(o, t), !0; if (!f.writable) return !1; } if (f = Object.getOwnPropertyDescriptor(o, r)) { if (!f.writable) return !1; f.value = t, Object.defineProperty(o, r, f); } else ListItem_defineProperty(o, r, t); return !0; }, set(e, r, t, o); }
function _set(e, r, t, o, f) { if (!set(e, r, t, o || e) && f) throw new TypeError("failed to set property"); return t; }
function ListItem_defineProperty(e, r, t) { return (r = ListItem_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function ListItem_toPropertyKey(t) { var i = ListItem_toPrimitive(t, "string"); return "symbol" == ListItem_typeof(i) ? i : i + ""; }
function ListItem_toPrimitive(t, r) { if ("object" != ListItem_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != ListItem_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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





var ListItem = /*#__PURE__*/function (_Button) {
  function ListItem() {
    _classCallCheck(this, ListItem);
    return _callSuper(this, ListItem, arguments);
  }
  _inherits(ListItem, _Button);
  return _createClass(ListItem, [{
    key: "_onTextBoxChanged",
    value: function _onTextBoxChanged() {
      this._updateTitle();
      this._updateDescription();
      this._updateTruncation();
    }
  }, {
    key: "_update",
    value: function _update() {
      this._updatePrefixLogo();
      this._updateSuffixLogo();
      _superPropGet(ListItem, "_update", this, 3)([]);
      this._updateDescription();
    }
  }, {
    key: "_updateTitle",
    value: function _updateTitle() {
      this._TextWrapper.patch({
        Title: {
          content: this.title,
          style: {
            textStyle: this.style.titleTextStyle
          }
        }
      });
    }
  }, {
    key: "_updateDescription",
    value: function _updateDescription() {
      if (this._hasDescription) {
        var descriptionPatch = {
          content: this.description,
          style: {
            textStyle: ListItem_objectSpread(ListItem_objectSpread({}, this.style.descriptionTextStyle), {}, {
              wordWrap: true,
              wordWrapWidth: this._fixedWordWrapWidth
            })
          },
          visible: !this._collapse
        };
        if (!this._Description) {
          descriptionPatch = ListItem_objectSpread({
            type: TextBox/* default */.A,
            signals: {
              textBoxChanged: '_onTextBoxChanged'
            }
          }, descriptionPatch);
        }
        this._TextWrapper.patch({
          Description: descriptionPatch
        });
      } else {
        this._TextWrapper.patch({
          Description: undefined
        });
      }
    }
  }, {
    key: "_updateTruncation",
    value: function _updateTruncation() {
      if (this._Title) {
        this._Title.patch({
          style: {
            textStyle: ListItem_objectSpread(ListItem_objectSpread({}, this.style.titleTextStyle), {}, {
              wordWrap: this.fixed,
              wordWrapWidth: this.fixed ? this._fixedWordWrapWidth : 0
            })
          }
        });
      }
    }
  }, {
    key: "_updatePrefixLogo",
    value: function _updatePrefixLogo() {
      if (this._hasPrefixLogo) {
        this._prefix = this._addLogoProps(this._prefixLogo);
      }
    }
  }, {
    key: "_updateSuffixLogo",
    value: function _updateSuffixLogo() {
      if (this._hasSuffixLogo) {
        this._suffix = this._addLogoProps(this._suffixLogo);
      }
    }
  }, {
    key: "_addLogoProps",
    value: function _addLogoProps(icon) {
      return {
        type: Icon/* default */.A,
        icon: icon,
        style: ListItem_objectSpread({
          color: undefined
        }, this.style.logoStyle)
      };
    }
  }, {
    key: "_hasPrefixLogo",
    get: function get() {
      return this.prefixLogo;
    }
  }, {
    key: "_hasSuffixLogo",
    get: function get() {
      return this.suffixLogo;
    }
  }, {
    key: "_rowProps",
    get: function get() {
      return ListItem_objectSpread(ListItem_objectSpread({}, _superPropGet(ListItem, "_rowProps", this, 1)), {}, {
        autoResizeHeight: true
      });
    }
  }, {
    key: "_buttonProps",
    get: function get() {
      return ListItem_objectSpread(ListItem_objectSpread({}, _superPropGet(ListItem, "_buttonProps", this, 1)), {}, {
        alpha: this.style.alpha
      });
    }
  }, {
    key: "_hasDescription",
    get: function get() {
      return !!this.description;
    }
  }, {
    key: "_suffixX",
    get: function get() {
      return this.w - this._paddingRight - this._suffixW - this.style.paddingX;
    }
  }, {
    key: "_collapse",
    get: function get() {
      return this.shouldCollapse && !this._isFocusedMode;
    }
  }, {
    key: "announce",
    get: function get() {
      if (this._announce) {
        return this._announce;
      }
      return this.title + this.description + ', List Item';
    },
    set: function set(announce) {
      _superPropSet(ListItem, "announce", announce, this, 1, 1);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'ListItem';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return ListItem_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      return ListItem_objectSpread(ListItem_objectSpread({}, _superPropGet(ListItem, "_template", this, 2)([])), {}, {
        justify: 'left',
        fixed: true,
        Content: ListItem_objectSpread(ListItem_objectSpread({}, _superPropGet(ListItem, "_template", this, 2)([]).Content), {}, {
          TextWrapper: {
            mountY: 0.5,
            flex: {
              direction: 'column'
            },
            Title: {
              type: TextBox/* default */.A,
              signals: {
                textBoxChanged: '_onTextBoxChanged'
              }
            }
          }
        })
      });
    }
  }, {
    key: "properties",
    get: function get() {
      return [].concat(_toConsumableArray(_superPropGet(ListItem, "properties", this)), ['description', 'prefixLogo', 'suffixLogo', 'shouldCollapse']);
    }
  }, {
    key: "aliasStyles",
    get: function get() {
      return [{
        prev: 'titlePadding',
        curr: 'contentSpacing'
      }];
    }
  }, {
    key: "tags",
    get: function get() {
      return [].concat(_toConsumableArray(_superPropGet(ListItem, "tags", this)), [{
        name: 'Description',
        path: 'Content.TextWrapper.Description'
      }]);
    }
  }]);
}(Button/* default */.A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Radio/Radio.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Radio)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Radio/Radio.styles.js
var Radio_styles_namespaceObject = {};
__webpack_require__.r(Radio_styles_namespaceObject);
__webpack_require__.d(Radio_styles_namespaceObject, {
  base: () => (base),
  mode: () => (mode),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Radio/Radio.styles.js
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
  var size = theme.spacer.xxl;
  return {
    alpha: theme.alpha.primary,
    width: size,
    height: size,
    knobHeight: size / 2,
    knobWidth: size / 2,
    radius: size / 2,
    strokeWidth: theme.stroke.sm
  };
};
var tone = function tone(theme) {
  return {
    neutral: {
      backgroundColor: theme.color.fillInverseSecondary,
      backgroundColorChecked: theme.color.fillNeutral,
      knobColor: theme.color.fillInverse,
      strokeColor: theme.color.strokeNeutralSecondary
    },
    inverse: {
      backgroundColor: theme.color.fillNeutralSecondary,
      backgroundColorChecked: theme.color.fillInverse,
      knobColor: theme.color.fillNeutral,
      strokeColor: theme.color.strokeInverseSecondary
    },
    brand: {
      backgroundColor: theme.color.fillNeutralSecondary,
      backgroundColorChecked: theme.color.fillBrand,
      knobColor: theme.color.fillInverse,
      strokeColor: theme.color.strokeNeutralSecondary
    }
  };
};
var mode = function mode(theme) {
  return {
    disabled: {
      alpha: theme.alpha.inactive
    }
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Radio/Radio.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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





var Radio = /*#__PURE__*/function (_Base) {
  function Radio() {
    _classCallCheck(this, Radio);
    return _callSuper(this, Radio, arguments);
  }
  _inherits(Radio, _Base);
  return _createClass(Radio, [{
    key: "_update",
    value: function _update() {
      this._updateBody();
      this._updateStroke();
      this._updateKnob();
      if (this._checkedChanged) {
        this.fireAncestors('$announce', this.announce);
        this._checkedChanged = false;
      }
      this._updateOpacity();
    }
  }, {
    key: "_updateBody",
    value: function _updateBody() {
      var bodyColor = this.checked ? this.style.backgroundColorChecked : this.style.backgroundColor;
      var width = this.w - this.style.strokeWidth * 2 - 2;
      var height = this.h - this.style.strokeWidth * 2 - 2;
      this._Body.patch({
        texture: lightning_esm/* default */.A.Tools.getRoundRect(
        // Compensating for the extra 2 pixels getRoundRect adds
        width, height, (0,utils/* getMaxRoundRadius */.XG)(this.style.radius, width, height, this.style.strokeWidth * 2 - 2), null, null, true, bodyColor)
      });
    }
  }, {
    key: "_updateStroke",
    value: function _updateStroke() {
      this._Stroke.patch({
        // Compensating for the extra 2 pixels getRoundRect adds
        texture: lightning_esm/* default */.A.Tools.getRoundRect(this.w - 2, this.h - 2, (0,utils/* getMaxRoundRadius */.XG)(this.style.radius, this.w, this.h), this.style.strokeWidth, this.style.strokeColor, false)
      });
    }
  }, {
    key: "_updateKnob",
    value: function _updateKnob() {
      this._Knob.patch({
        texture: lightning_esm/* default */.A.Tools.getRoundRect(this.style.knobWidth, this.style.knobHeight, this.style.knobWidth / 2, null, null, true, this.style.knobColor)
      });
      this.applySmooth(this._Knob, {
        alpha: this.checked ? 1 : 0
      });
    }
  }, {
    key: "_updateOpacity",
    value: function _updateOpacity() {
      this.applySmooth(this, {
        alpha: this.style.alpha
      });
    }
  }, {
    key: "_setChecked",
    value: function _setChecked(checked) {
      this._checkedChanged = checked !== this._checked;
      return checked;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (!this._isDisabledMode) {
        this.checked = !this.checked;
      }
      return this;
    }
  }, {
    key: "_handleEnter",
    value: function _handleEnter() {
      if (typeof this.onEnter === 'function') {
        return this.onEnter(this);
      } else {
        this.toggle();
      }
      return false;
    }
  }, {
    key: "announce",
    get: function get() {
      return this._announce || (this.checked ? 'Checked' : 'Unchecked');
    },
    set: function set(announce) {
      _superPropSet(Radio, "announce", announce, this, 1, 1);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'Radio';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Radio_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      var center = {
        mount: 0.5,
        x: function x(w) {
          return w / 2;
        },
        y: function y(h) {
          return h / 2;
        }
      };
      return {
        Body: _objectSpread(_objectSpread({
          rtt: true
        }, center), {}, {
          Knob: _objectSpread(_objectSpread({}, center), {}, {
            alpha: 0
          })
        }),
        Stroke: center
      };
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Knob', 'Body', 'Stroke'];
    }
  }, {
    key: "properties",
    get: function get() {
      return ['checked'];
    }
  }]);
}(Base/* default */.A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Toggle/Toggle.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Toggle)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Toggle/Toggle.styles.js
var Toggle_styles_namespaceObject = {};
__webpack_require__.r(Toggle_styles_namespaceObject);
__webpack_require__.d(Toggle_styles_namespaceObject, {
  base: () => (base),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Toggle/Toggle.styles.js
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
  var knobSize = theme.spacer.xl;
  var knobPadding = theme.spacer.xs;
  var strokeWidth = theme.stroke.sm;
  return {
    height: knobSize + (knobPadding + strokeWidth) * 2,
    knobWidth: knobSize,
    knobHeight: knobSize,
    knobRadius: knobSize / 2,
    knobPadding: knobPadding,
    strokeWidth: strokeWidth,
    width: (strokeWidth + knobPadding * 2 + knobSize) * 2
  };
};
var tone = function tone(theme) {
  return {
    neutral: {
      strokeColor: theme.color.fillNeutral,
      backgroundColor: theme.color.fillInverseTertiary,
      backgroundColorChecked: theme.color.fillNeutral,
      knobColor: theme.color.fillNeutral,
      knobColorChecked: theme.color.fillInverse,
      mode: {
        disabled: {
          strokeColor: theme.color.fillNeutralDisabled,
          backgroundColor: theme.color.fillInverseDisabled,
          backgroundColorChecked: theme.color.fillNeutralDisabled,
          knobColor: theme.color.fillNeutralDisabled,
          knobColorChecked: theme.color.fillInverseDisabled
        }
      }
    },
    inverse: {
      strokeColor: theme.color.fillInverse,
      backgroundColor: theme.color.fillNeutralTertiary,
      backgroundColorChecked: theme.color.fillInverse,
      knobColor: theme.color.fillInverse,
      knobColorChecked: theme.color.fillNeutral,
      mode: {
        disabled: {
          strokeColor: theme.color.fillInverseDisabled,
          backgroundColor: theme.color.fillNeutralDisabled,
          backgroundColorChecked: theme.color.fillInverseDisabled,
          knobColor: theme.color.fillInverseDisabled,
          knobColorChecked: theme.color.fillNeutralDisabled
        }
      }
    },
    brand: {
      strokeColor: theme.color.fillBrand,
      backgroundColor: theme.color.fillBrandTertiary,
      backgroundColorChecked: theme.color.fillBrand,
      knobColor: theme.color.fillBrand,
      knobColorChecked: theme.color.fillInverse,
      mode: {
        disabled: {
          strokeColor: theme.color.fillNeutralDisabled,
          backgroundColor: theme.color.fillInverseDisabled,
          backgroundColorChecked: theme.color.fillNeutralDisabled,
          knobColor: theme.color.fillNeutralDisabled,
          knobColorChecked: theme.color.fillInverseDisabled
        }
      }
    }
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Toggle/Toggle.js
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





var Toggle = /*#__PURE__*/function (_Base) {
  function Toggle() {
    _classCallCheck(this, Toggle);
    return _callSuper(this, Toggle, arguments);
  }
  _inherits(Toggle, _Base);
  return _createClass(Toggle, [{
    key: "_construct",
    value: function _construct() {
      _superPropGet(Toggle, "_construct", this, 1) && _superPropGet(Toggle, "_construct", this, 3)([]);
      this._checked = false;
    }
  }, {
    key: "_update",
    value: function _update() {
      this._updateKnobPosition();
      this._updateColors();
      this._updateContainer();
      this._updateStroke();
      this._updateKnob();
      if (this._checkedChanged) {
        this.fireAncestors('$announce', this.announce);
        this._checkedChanged = false;
      }
    }
  }, {
    key: "_updateKnobPosition",
    value: function _updateKnobPosition() {
      var _this$style = this.style,
        knobPadding = _this$style.knobPadding,
        knobWidth = _this$style.knobWidth,
        strokeWidth = _this$style.strokeWidth;
      this.applySmooth(this._Knob, {
        x: this.checked ? this.w - strokeWidth - knobPadding - knobWidth : strokeWidth + knobPadding
      });
    }
  }, {
    key: "_updateColors",
    value: function _updateColors() {
      var _this$style2 = this.style,
        backgroundColor = _this$style2.backgroundColor,
        backgroundColorChecked = _this$style2.backgroundColorChecked,
        knobColor = _this$style2.knobColor,
        knobColorChecked = _this$style2.knobColorChecked;
      var currentKnobColor = this.checked ? knobColorChecked : knobColor;
      var containerColor = this.checked ? backgroundColorChecked : backgroundColor;
      this.applySmooth(this._Knob, {
        color: currentKnobColor
      });
      this.applySmooth(this._Container, {
        color: containerColor
      });
    }
  }, {
    key: "_updateContainer",
    value: function _updateContainer() {
      var _this$style3 = this.style,
        knobRadius = _this$style3.knobRadius,
        knobPadding = _this$style3.knobPadding,
        strokeRadius = _this$style3.strokeRadius,
        strokeWidth = _this$style3.strokeWidth;
      var radius = strokeRadius !== undefined ? strokeRadius === 0 ? strokeRadius : Math.max(0, strokeRadius - strokeWidth) : Math.max(0, knobRadius + knobPadding + strokeWidth);
      this._Container.patch({
        w: this.w,
        h: this.h,
        texture: lightning_esm/* default */.A.Tools.getRoundRect(
        // Compensating for the extra 2 pixels getRoundRect adds
        this.w - strokeWidth * 2 - 2, this.h - strokeWidth * 2 - 2, (0,utils/* getMaxRoundRadius */.XG)(radius, this.w, this.h), strokeWidth, 0, true, false)
      });
    }
  }, {
    key: "_updateStroke",
    value: function _updateStroke() {
      var _this$style4 = this.style,
        knobRadius = _this$style4.knobRadius,
        knobPadding = _this$style4.knobPadding,
        strokeColor = _this$style4.strokeColor,
        strokeRadius = _this$style4.strokeRadius,
        strokeWidth = _this$style4.strokeWidth;
      this._Stroke.patch({
        w: this.w,
        h: this.h,
        texture: lightning_esm/* default */.A.Tools.getRoundRect(
        // Compensating for the extra 2 pixels getRoundRect adds
        this.w - 2, this.h - 2, strokeRadius !== undefined ? (0,utils/* getMaxRoundRadius */.XG)(strokeRadius, this.w, this.h) : (0,utils/* getMaxRoundRadius */.XG)(knobRadius, this.w - knobPadding * 2 - 2, this.h - knobPadding * 2 - 2) + knobPadding + strokeWidth, strokeWidth, strokeColor, false, false)
      });
    }
  }, {
    key: "_updateKnob",
    value: function _updateKnob() {
      var _this$style5 = this.style,
        knobHeight = _this$style5.knobHeight,
        knobWidth = _this$style5.knobWidth,
        knobRadius = _this$style5.knobRadius;
      this._Knob.patch({
        zIndex: 2,
        y: (this.h - knobHeight) / 2,
        texture: lightning_esm/* default */.A.Tools.getRoundRect(
        // Compensating for the extra 2 pixels getRoundRect adds
        knobWidth - 2, knobHeight - 2, (0,utils/* getMaxRoundRadius */.XG)(knobRadius, knobWidth - 2, knobHeight - 2), 0, 0, true, false)
      });
    }
  }, {
    key: "_setChecked",
    value: function _setChecked(checked) {
      this._checkedChanged = checked !== this._checked;
      return checked;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (!this._isDisabledMode) {
        this.checked = !this.checked;
      }
      return this;
    }
  }, {
    key: "_handleEnter",
    value: function _handleEnter() {
      if (typeof this.onEnter === 'function') {
        return this.onEnter(this);
      } else {
        this.toggle();
      }
      return false;
    }
  }, {
    key: "announce",
    get: function get() {
      return this._announce || (this.checked ? 'Checked' : 'Unchecked');
    },
    set: function set(announce) {
      _superPropSet(Toggle, "announce", announce, this, 1, 1);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'Toggle';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Toggle_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      return {
        Container: {
          Stroke: {},
          Knob: {}
        }
      };
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Container', {
        name: 'Knob',
        path: 'Container.Knob'
      }, {
        name: 'Stroke',
        path: 'Container.Stroke'
      }];
    }
  }, {
    key: "properties",
    get: function get() {
      return ['checked'];
    }
  }, {
    key: "aliasStyles",
    get: function get() {
      return [{
        prev: 'strokeWeight',
        curr: 'strokeWidth'
      }];
    }
  }]);
}(Base/* default */.A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/ListItem/ListItem.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListItem: () => (/* binding */ ListItem),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/ListItem/ListItem.js");
/* harmony import */ var _docs_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
/* harmony import */ var _assets_images_Xfinity_Provider_Logo_Square_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/Xfinity-Provider-Logo-Square.png");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Checkbox/Checkbox.js");
/* harmony import */ var _Radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Radio/Radio.js");
/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Toggle/Toggle.js");
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









/**
 * ListItem component with the ability to let a user pick from a list of options.
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Components/ListItem/ListItem',
  args: {
    title: 'List Item',
    shouldCollapse: false,
    description: 'Description',
    prefix: null,
    prefixLogo: 'none',
    suffix: null,
    suffixLogo: 'none',
    mode: 'focused'
  },
  parameters: {
    docs: {
      description: {
        component: "ListItem component with the ability to let a user pick from a list of options."
      }
    }
  }
});
const ListItem = () => class ListItem extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      ListItem: {
        type: _ListItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A
      }
    };
  }
};
ListItem.storyName = 'ListItem';
ListItem.argTypes = {
  ...(0,_docs_utils__WEBPACK_IMPORTED_MODULE_2__/* .createModeControl */ .Pg)({
    summaryValue: 'focused'
  }),
  title: {
    control: 'text',
    description: 'Title text',
    table: {
      defaultValue: {
        summary: 'undefined'
      },
      type: {
        summary: 'string'
      }
    }
  },
  description: {
    control: 'text',
    description: 'Description text',
    table: {
      defaultValue: {
        summary: 'undefined'
      },
      type: {
        summary: 'string'
      }
    }
  },
  shouldCollapse: {
    control: 'boolean',
    description: 'When in unfocused or disabled mode, if this flag is true the description will collapse (when focused, it will always be expanded)',
    table: {
      defaultValue: {
        summary: false
      },
      type: {
        summary: 'boolean'
      }
    }
  },
  prefix: {
    control: 'radio',
    options: [null, 'toggle', 'radio', 'checkbox'],
    description: 'Lightning components to be placed to the left of the title',
    table: {
      defaultValue: {
        summary: 'undefined'
      },
      type: {
        summary: 'object or array'
      }
    }
  },
  prefixLogo: {
    control: 'radio',
    options: ['none', 'xfinity'],
    description: 'Logo to be placed to the left of the title. If prefix and prefixLogo are both set, prefixLogo will take precedence for what is rendered and prefix will be ignored',
    table: {
      defaultValue: {
        summary: 'undefined'
      },
      type: {
        summary: 'string'
      }
    }
  },
  suffix: {
    control: 'radio',
    options: [null, 'toggle', 'radio', 'checkbox'],
    description: 'Lightning components to be placed to the right of the title',
    table: {
      defaultValue: {
        summary: 'undefined'
      },
      type: {
        summary: 'object or array'
      }
    }
  },
  suffixLogo: {
    control: 'radio',
    options: ['none', 'xfinity'],
    description: 'Logo to be placed to the right of the title. If suffix and suffixLogo are both set, suffixLogo will take precedence for what is rendered and suffix will be ignored',
    table: {
      defaultValue: {
        summary: 'undefined'
      },
      type: {
        summary: 'string'
      }
    }
  }
};
const logoSet = {
  none: null,
  xfinity: _assets_images_Xfinity_Provider_Logo_Square_png__WEBPACK_IMPORTED_MODULE_3__
};
const elementSet = {
  toggle: {
    type: _Toggle__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
    checked: true
  },
  radio: {
    type: _Radio__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,
    checked: true
  },
  checkbox: {
    type: _Checkbox__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
    checked: true
  }
};
const sharedArgActions = {
  prefix: (prefix, component) => {
    if (prefix == null) {
      component.tag('ListItem').prefix = [];
    } else {
      component.tag('ListItem').prefix = elementSet[prefix];
    }
  },
  prefixLogo: (prefixLogo, component) => {
    component.tag('ListItem').prefixLogo = logoSet[prefixLogo];
  },
  suffixLogo: (suffixLogo, component) => {
    component.tag('ListItem').suffixLogo = logoSet[suffixLogo];
  },
  suffix: (suffix, component) => {
    if (suffix == null) {
      component.tag('ListItem').suffix = [];
    } else {
      component.tag('ListItem').suffix = elementSet[suffix];
    }
  }
};
ListItem.parameters = {
  argActions: sharedArgActions
};
;
const __namedExportsOrder = ["ListItem"];
ListItem.parameters = {
  ...ListItem.parameters,
  docs: {
    ...ListItem.parameters?.docs,
    source: {
      originalSource: "() => class ListItem extends lng.Component {\n  static _template() {\n    return {\n      ListItem: {\n        type: ListItemComponent\n      }\n    };\n  }\n}",
      ...ListItem.parameters?.docs?.source
    }
  }
};

/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/Xfinity-Provider-Logo-Square.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/Xfinity-Provider-Logo-Square.d3aaa87c.png";

/***/ })

}]);
//# sourceMappingURL=2067.dcef5479.iframe.bundle.js.map