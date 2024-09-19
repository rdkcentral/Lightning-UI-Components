"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[8527],{

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

/***/ "../../@lightningjs/ui-components/src/components/Label/Label.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Label)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Label/Label.styles.js
var Label_styles_namespaceObject = {};
__webpack_require__.r(Label_styles_namespaceObject);
__webpack_require__.d(Label_styles_namespaceObject, {
  base: () => (base),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Label/Label.styles.js
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
    radius: [theme.radius.md, theme.radius.md, theme.radius.md, theme.radius.none],
    paddingX: theme.spacer.lg,
    paddingY: theme.spacer.md,
    offsetY: theme.spacer.xxs,
    textStyle: theme.typography.caption1
  };
};
var tone = function tone(theme) {
  return {
    neutral: {
      textStyle: {
        textColor: theme.color.textInverse
      },
      backgroundColor: theme.color.fillNeutral
    },
    inverse: {
      textStyle: {
        textColor: theme.color.textNeutral
      },
      backgroundColor: theme.color.fillInverse
    },
    brand: {
      textStyle: {
        textColor: theme.color.textNeutral
      },
      backgroundColor: theme.color.fillBrand
    }
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Label/Label.js
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




var Label = /*#__PURE__*/function (_Base) {
  function Label() {
    _classCallCheck(this, Label);
    return _callSuper(this, Label, arguments);
  }
  _inherits(Label, _Base);
  return _createClass(Label, [{
    key: "_init",
    value: function _init() {
      this._Text.on('txLoaded', this._updateBackground.bind(this));
      _superPropGet(Label, "_init", this, 3)([]);
    }
  }, {
    key: "_update",
    value: function _update() {
      this._updateBackground();
      this._updateText();
    }
  }, {
    key: "_updateText",
    value: function _updateText() {
      if (this._Text) {
        this._Text.patch({
          text: _objectSpread(_objectSpread({}, this.style.textStyle), {}, {
            text: this.title
          })
        });
      }
    }
  }, {
    key: "_updateBackground",
    value: function _updateBackground() {
      this._Text.x = this.w / 2;
      this._Text.y = this.h / 2 + this.style.offsetY;
      this.h = !this.title ? 0 : this._Text.renderHeight + 2 * this.style.paddingY;
      this.w = !this.title ? 0 : this._Text.renderWidth + 2 * this.style.paddingX;
      this._Background.patch({
        texture: lightning_esm/* default */.A.Tools.getRoundRect(
        // Compensating for the extra two pixels getRoundRect adds.
        this.w - 2, this.h - 2, this.style.radius, 0, null, true, this.style.backgroundColor)
      });
      this.signal('loadedLabel', this);
    }
  }, {
    key: "announce",
    get: function get() {
      return this._announce || this._Text && this._Text.text.text;
    },
    set: function set(announce) {
      _superPropSet(Label, "announce", announce, this, 1, 1);
    }
  }], [{
    key: "_template",
    value: function _template() {
      return {
        Background: {},
        Text: {
          mountY: 0.5,
          mountX: 0.5,
          text: {}
        }
      };
    }
  }, {
    key: "__componentName",
    get: function get() {
      return 'Label';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Label_styles_namespaceObject;
    }
  }, {
    key: "properties",
    get: function get() {
      return ['title'];
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Background', 'Text'];
    }
  }]);
}(Base/* default */.A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/MetadataTile/MetadataTile.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ MetadataTile)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/MetadataTile/MetadataTile.styles.js
var MetadataTile_styles_namespaceObject = {};
__webpack_require__.r(MetadataTile_styles_namespaceObject);
__webpack_require__.d(MetadataTile_styles_namespaceObject, {
  base: () => (base),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/MetadataBase/MetadataBase.js + 2 modules
var MetadataBase = __webpack_require__("../../@lightningjs/ui-components/src/components/MetadataBase/MetadataBase.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/MetadataTile/MetadataTile.styles.js
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
    titleTextStyle: theme.typography.headline3,
    descriptionTextStyle: theme.typography.body3
  };
};
var tone = function tone(theme) {
  return {
    neutral: {
      detailsTextStyle: {
        textColor: theme.color.textNeutralSecondary
      },
      descriptionTextStyle: {
        textColor: theme.color.textNeutral
      },
      mode: {
        disabled: {
          detailsTextStyle: {
            textColor: theme.color.textNeutralDisabled
          },
          descriptionTextStyle: {
            textColor: theme.color.textNeutralDisabled
          }
        }
      }
    },
    inverse: {
      detailsTextStyle: {
        textColor: theme.color.textInverseSecondary
      },
      descriptionTextStyle: {
        textColor: theme.color.textInverse
      },
      mode: {
        disabled: {
          detailsTextStyle: {
            textColor: theme.color.textNeutralDisabled
          },
          descriptionTextStyle: {
            textColor: theme.color.textNeutralDisabled
          }
        }
      }
    },
    brand: {
      detailsTextStyle: {
        textColor: theme.color.textNeutralSecondary
      },
      descriptionTextStyle: {
        textColor: theme.color.textNeutral
      },
      mode: {
        disabled: {
          detailsTextStyle: {
            textColor: theme.color.textNeutralDisabled
          },
          descriptionTextStyle: {
            textColor: theme.color.textNeutralDisabled
          }
        }
      }
    }
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/MetadataTile/MetadataTile.js
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



var MetadataTile = /*#__PURE__*/function (_MetadataBase) {
  function MetadataTile() {
    _classCallCheck(this, MetadataTile);
    return _callSuper(this, MetadataTile, arguments);
  }
  _inherits(MetadataTile, _MetadataBase);
  return _createClass(MetadataTile, [{
    key: "_updateDetails",
    value: function _updateDetails() {
      if (!this.details && !this._Details) {
        return;
      }
      if (this.description && this._Details) {
        this._Details.patch({
          content: ''
        });
        this._Details.alpha = 0;
        this._Details.visible = false;
      } else {
        _superPropGet(MetadataTile, "_updateDetails", this, 3)([]);
      }
    }
  }, {
    key: "_updateDetailsLayout",
    value: function _updateDetailsLayout(_ref) {
      var h = _ref.h;
      if (!this.details && !this._Details) {
        return;
      }
      if (this._Details && !this.description) {
        this._DetailsWrapper.h = h;
        this._DetailsWrapper.alpha = this.style.alpha;
      } else {
        this._DetailsWrapper.h = 0;
      }
    }
  }, {
    key: "announce",
    get: function get() {
      return this._announce || [this._Title && this._Title.announce, this._Details && this._Details.announce || this._Description && this._Description.announce, this.logoTitle];
    },
    set: function set(announce) {
      _superPropSet(MetadataTile, "announce", announce, this, 1, 1);
    }
  }, {
    key: "_textH",
    value: function _textH() {
      var titleH = this.title && this._Title && this._Title.h || 0;
      var detailsH = this.details && this._Details && this._Details.visible && this._DetailsWrapper.h || 0;
      var descriptionH = this.description && this._Description && this._Description.h || 0;
      return titleH + detailsH + descriptionH;
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'MetadataTile';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return MetadataTile_styles_namespaceObject;
    }
  }]);
}(MetadataBase/* default */.A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/ProgressBar/ProgressBar.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ProgressBar)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/ProgressBar/ProgressBar.styles.js
var ProgressBar_styles_namespaceObject = {};
__webpack_require__.r(ProgressBar_styles_namespaceObject);
__webpack_require__.d(ProgressBar_styles_namespaceObject, {
  base: () => (base),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ProgressBar/ProgressBar.styles.js
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
    height: theme.spacer.md,
    animation: theme.animation.utility,
    radius: theme.radius.xs
  };
};
var tone = function tone(theme) {
  return {
    neutral: {
      barColor: theme.color.fillNeutralTertiary,
      progressColor: theme.color.fillNeutral
    },
    inverse: {
      barColor: theme.color.fillInverseTertiary,
      progressColor: theme.color.fillInverse
    },
    brand: {
      barColor: theme.color.fillNeutralTertiary,
      progressColor: theme.color.fillBrand
    }
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ProgressBar/ProgressBar.js
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





var ProgressBar = /*#__PURE__*/function (_Base) {
  function ProgressBar() {
    _classCallCheck(this, ProgressBar);
    return _callSuper(this, ProgressBar, arguments);
  }
  _inherits(ProgressBar, _Base);
  return _createClass(ProgressBar, [{
    key: "_construct",
    value: function _construct() {
      _superPropGet(ProgressBar, "_construct", this, 1) && _superPropGet(ProgressBar, "_construct", this, 3)([]);
      this._progress = 0;
    }
  }, {
    key: "_update",
    value: function _update() {
      this._updateTextures();
      this._updateProgress();
      if (this._progressChanged) {
        this.fireAncestors('$announce', this.announce);
        this._progressChanged = false;
      }
    }
  }, {
    key: "_updateTextures",
    value: function _updateTextures() {
      var w = this._getProgressWidth();
      var radius = (0,utils/* getMaxRoundRadius */.XG)(this.style.radius, this.w - 2, this.h);
      this._Bar.texture = lightning_esm/* default */.A.Tools.getRoundRect(
      // getRoundRect adds 2 to the width
      this.w - 2, this.h, radius, 0, 0, true, this.style.barColor);
      this._Progress.texture = lightning_esm/* default */.A.Tools.getRoundRect(w + 1, this.h, radius, 0, 0, true, this.style.progressColor);
    }
  }, {
    key: "_updateProgress",
    value: function _updateProgress() {
      var w = this._getProgressWidth();
      this._Progress.smooth = {
        w: [w, this.style.animation],
        alpha: Number(w > 0)
      };
    }
  }, {
    key: "_setProgress",
    value: function _setProgress(progress) {
      this._progressChanged = progress !== this._progress;
      return progress;
    }
  }, {
    key: "announce",
    get: function get() {
      if (this._announce !== undefined && this._announce !== null) {
        return this._announce;
      }
      var progress = this.progress;
      if (progress > 1) {
        progress = 1;
      } else if (progress < 0) {
        progress = 0;
      }
      return "".concat(Math.round(progress * 100), "%");
    },
    set: function set(announce) {
      _superPropSet(ProgressBar, "announce", announce, this, 1, 1);
    }
  }, {
    key: "_getProgressWidth",
    value: function _getProgressWidth() {
      var p = this.w * this._progress;
      var w = p <= 0 ? 0 : Math.min(p, this.w);
      return w;
    }
  }], [{
    key: "_template",
    value: function _template() {
      return {
        Bar: {
          zIndex: 1
        },
        Progress: {
          alpha: 0,
          zIndex: 2
        }
      };
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return ProgressBar_styles_namespaceObject;
    }
  }, {
    key: "__componentName",
    get: function get() {
      return 'ProgressBar';
    }
  }, {
    key: "properties",
    get: function get() {
      return ['progress'];
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Bar', 'Progress'];
    }
  }]);
}(Base/* default */.A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Tile/Tile.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tile)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Tile/Tile.styles.js
var Tile_styles_namespaceObject = {};
__webpack_require__.r(Tile_styles_namespaceObject);
__webpack_require__.d(Tile_styles_namespaceObject, {
  base: () => (base),
  mode: () => (mode),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Artwork/Artwork.js + 1 modules
var Artwork = __webpack_require__("../../@lightningjs/ui-components/src/components/Artwork/Artwork.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Badge/Badge.js + 1 modules
var Badge = __webpack_require__("../../@lightningjs/ui-components/src/components/Badge/Badge.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Checkbox/Checkbox.js + 1 modules
var Checkbox = __webpack_require__("../../@lightningjs/ui-components/src/components/Checkbox/Checkbox.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Label/Label.js + 1 modules
var Label = __webpack_require__("../../@lightningjs/ui-components/src/components/Label/Label.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/MetadataTile/MetadataTile.js + 1 modules
var MetadataTile = __webpack_require__("../../@lightningjs/ui-components/src/components/MetadataTile/MetadataTile.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/ProgressBar/ProgressBar.js + 1 modules
var ProgressBar = __webpack_require__("../../@lightningjs/ui-components/src/components/ProgressBar/ProgressBar.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Tile/Tile.styles.js
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
    animationEntrance: theme.animation.standardEntrance,
    animationExit: theme.animation.standardExit,
    logoWidth: theme.spacer.lg * 5,
    logoHeight: theme.spacer.xxl + theme.spacer.md,
    metadataLocation: 'standard',
    paddingX: theme.spacer.xl,
    paddingY: theme.spacer.lg,
    paddingYProgress: theme.spacer.xl,
    paddingYBetweenContent: theme.spacer.md,
    radius: theme.radius.md,
    alpha: theme.alpha.primary
  };
};
var tone = function tone(theme) {
  return {
    neutral: {
      mode: {
        focused: {
          backgroundColor: theme.color.interactiveNeutralFocusSoft
        }
      }
    },
    inverse: {
      mode: {
        focused: {
          backgroundColor: theme.color.interactiveInverseFocusSoft
        }
      }
    },
    brand: {
      mode: {
        focused: {
          backgroundColor: theme.color.interactiveBrandFocusSoft
        }
      }
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
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Surface/Surface.js + 1 modules
var Surface = __webpack_require__("../../@lightningjs/ui-components/src/components/Surface/Surface.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Tile/Tile.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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










var Tile = /*#__PURE__*/function (_Surface) {
  function Tile() {
    _classCallCheck(this, Tile);
    return _callSuper(this, Tile, arguments);
  }
  _inherits(Tile, _Surface);
  return _createClass(Tile, [{
    key: "announce",
    get: function get() {
      return this._announce || [this._Metadata && this._Metadata.announce, this._Badge && this._Badge.announce, this._Label && this._Label.announce, this._ProgressBar && this._ProgressBar.announce];
    },
    set:
    /**
     * When metadata is displayed below the Tile we need a way to tell the containing columns that it exists
     * in order for it to layout properly. This approach will not however show up in the DOM inspector
     */

    function set(announce) {
      _superPropSet(Tile, "announce", announce, this, 1, 1);
    }
  }, {
    key: "_update",
    value: function _update() {
      _superPropGet(Tile, "_update", this, 3)([]);
      this._updateTileColor();
      this._updateContent();
      this._updateArtwork();
      this._updateBadge();
      this._updateLabel();
      this._updateCheckbox();
      this._updateProgressBar();
      this._updateMetadata();
      this._updateLogo();
    }

    /* ------------------------------ Tile ------------------------------ */
  }, {
    key: "_getRenderHeight",
    value: function _getRenderHeight() {
      var _this$_Metadata;
      // if there is Metadata below the Tile, override _getRenderHeight
      // in order to return the fully calculated height,
      // not the height stored in "_h" for just the tile image
      return !this._isInsetMetadata ? this._h + (((_this$_Metadata = this._Metadata) === null || _this$_Metadata === void 0 ? void 0 : _this$_Metadata.h) + this.style.paddingY || 0) : _superPropGet(Tile, "_getRenderHeight", this, 3)([]);
    }
  }, {
    key: "innerH",
    get: function get() {
      return this._h; // Ensure that surface respects the correct height when metadata is displayed below
    }
  }, {
    key: "_shouldShowGradient",
    get: function get() {
      var _this$progressBar;
      return Boolean((this._isInsetMetadata && this._hasMetadata && this._shouldShowMetadata || ((_this$progressBar = this.progressBar) === null || _this$progressBar === void 0 ? void 0 : _this$progressBar.progress) > 0 || this._shouldShowLogo) && !this._isCircleLayout);
    }
  }, {
    key: "_isCircleLayout",
    get: function get() {
      return Boolean(this._itemLayout && this._itemLayout.circle);
    }
  }, {
    key: "_foregroundDefaultWidth",
    get: function get() {
      return parseFloat(this._w / this._h).toFixed(2) === parseFloat(16 / 9).toFixed(2) ? this.innerW * 0.5 : this.innerW * 0.75;
    }
  }, {
    key: "_updateTileColor",
    value: function _updateTileColor() {
      this._Tile.alpha = this.style.alpha;
    }
  }, {
    key: "_updateContent",
    value: function _updateContent() {
      var _this = this;
      var itemContainerPatch = {
        h: this._h,
        w: this._w,
        x: this._w / 2,
        y: this._h / 2
      };

      // Make sure container animates with same values as badge, label, and metadata
      this.applySmooth(this._Content, itemContainerPatch, Object.keys(itemContainerPatch).reduce(function (acc, prop) {
        acc[prop] = [itemContainerPatch[prop], _this._isFocusedMode ? _this.style.animationEntrance : _this.style.animationExit];
        return acc;
      }, {}));
    }

    /* ------------------------------ Logo ------------------------------ */
  }, {
    key: "_updateLogo",
    value: function _updateLogo() {
      if (!this.logo) {
        this.patch({
          Logo: undefined
        });
        return;
      }
      var logoObject = {
        w: this.style.logoWidth,
        h: this.style.logoHeight,
        icon: this.logo,
        alpha: this._shouldShowLogo ? this.style.alpha : 0.001,
        x: this.style.paddingX,
        y: this._calculateLogoYPosition()
      };
      if (!this._Logo) {
        this.patch({
          Logo: _objectSpread({
            type: Icon/* default */.A,
            mountY: 1
          }, logoObject)
        });
      } else {
        this.applySmooth(this._Logo, logoObject);
      }
    }
  }, {
    key: "_calculateLogoYPosition",
    value: function _calculateLogoYPosition() {
      if (this._isInsetMetadata && this._Metadata) {
        return this._metadataY - this._Metadata.h;
      }
      return this._progressBarY ? this._progressBarY - this.style.paddingYBetweenContent : this._h - this.style.paddingY;
    }
  }, {
    key: "_shouldShowLogo",
    get: function get() {
      return this.logo && (this.persistentMetadata || this._isFocusedMode);
    }

    /* ------------------------------ Artwork ------------------------------ */
  }, {
    key: "_updateArtwork",
    value: function _updateArtwork() {
      var _this$style, _this$artwork;
      // ensure a nested artwork src takes precedence over the class's src setter,
      // but that if src is undefined in both the setter and artwork object,
      // we don't incorrectly pass "src: undefined" to the Artwork component)
      this._Artwork.patch(_objectSpread(_objectSpread({
        mode: this.mode,
        h: this._h,
        w: this._w,
        x: this._w / 2,
        y: this._h / 2,
        src: this.src
      }, this.artwork || {}), {}, {
        style: _objectSpread({
          radius: (_this$style = this.style) === null || _this$style === void 0 ? void 0 : _this$style.radius
        }, (_this$artwork = this.artwork) === null || _this$artwork === void 0 ? void 0 : _this$artwork.style),
        gradient: this._shouldShowGradient,
        shouldScale: this._isFocusedMode
      }));
    }
  }, {
    key: "_getSrc",
    value: function _getSrc() {
      return this.artwork && this.artwork.src || this._src;
    }
  }, {
    key: "_imageLoaded",
    value: function _imageLoaded() {
      this._Background.alpha = 0; // Since the image is loaded the surface does not need to be shown
    }

    /* ------------------------------ Badge ------------------------------ */
  }, {
    key: "_updateBadge",
    value: function _updateBadge() {
      var _this$badge;
      // Remove Badge if no longer required
      if (!((_this$badge = this.badge) !== null && _this$badge !== void 0 && _this$badge.title) || this._isCircleLayout) {
        if (this._Badge) {
          this._Content.patch({
            Badge: undefined
          });
        }
        return;
      }
      var badgePatch = _objectSpread(_objectSpread({}, this.badge), {}, {
        mode: this.mode,
        x: this.style.paddingX,
        y: this.style.paddingY,
        alpha: this._shouldShowBadgeLabel ? 1 : 0.001
      });
      if (!this._Badge) {
        this._Content.patch({
          Badge: _objectSpread(_objectSpread({
            type: Badge/* default */.A
          }, badgePatch), {}, {
            signals: {
              loadedBadge: '_updateBadge'
            }
          })
        });
        return;
      } else {
        this._Badge.patch(badgePatch);
      }
      this.applySmooth(this._Badge, badgePatch, _objectSpread(_objectSpread({}, badgePatch), this._badgeLabelTransitions));
    }

    /* ------------------------------ Label  ------------------------------ */
  }, {
    key: "_updateLabel",
    value: function _updateLabel() {
      var _this$label;
      if (!((_this$label = this.label) !== null && _this$label !== void 0 && _this$label.title) || this._isCircleLayout) {
        if (this._Label) {
          this._Content.patch({
            Label: undefined
          });
        }
        return;
      }
      var labelPatch = _objectSpread(_objectSpread({}, this.label), {}, {
        mode: this.mode,
        x: this._w - this.style.paddingX,
        y: this.style.paddingY,
        alpha: this._shouldShowBadgeLabel ? 1 : 0.001
      });
      if (!this._Label) {
        this._Content.patch({
          Label: _objectSpread(_objectSpread({
            type: Label/* default */.A,
            mountX: 1
          }, labelPatch), {}, {
            signals: {
              loadedLabel: '_updateLabel'
            }
          })
        });
        return;
      } else {
        this._Label.patch(labelPatch);
      }
      this.applySmooth(this._Label, labelPatch, _objectSpread(_objectSpread({}, labelPatch), {}, {
        x: [labelPatch.x, this._shouldShowBadgeLabel ? this.style.animationEntrance : this.style.animationExit]
      }, this._badgeLabelTransitions));
    }

    /* ------------------------------ Badge & Label ------------------------------ */

    // Badge and Label should animate in with the same values
  }, {
    key: "_shouldShowBadgeLabel",
    get: function get() {
      return this.persistentMetadata || this._isFocusedMode && !this._isCircleLayout;
    }
  }, {
    key: "_badgeLabelTransitions",
    get: function get() {
      return {
        y: [this._shouldShowBadgeLabel ? this.style.paddingY : 0, this._shouldShowBadgeLabel ? this.style.animationEntrance : this.style.animationExit],
        alpha: [this._shouldShowBadgeLabel ? 1 : 0.001, this._shouldShowBadgeLabel ? this.style.animationEntrance : this.style.animationExit]
      };
    }

    /* ------------------------------ Checkbox ------------------------------ */
  }, {
    key: "_updateCheckbox",
    value: function _updateCheckbox() {
      var _this$checkbox;
      // Remove Checkbox if no longer required
      if (!(typeof ((_this$checkbox = this.checkbox) === null || _this$checkbox === void 0 ? void 0 : _this$checkbox.checked) === 'boolean' && this.checkbox.checked) || this._isCircleLayout) {
        if (this._Checkbox) {
          this._Content.patch({
            Checkbox: undefined
          });
        }
        return;
      }
      var checkboxPatch = _objectSpread(_objectSpread({}, this.checkbox), {}, {
        mode: this.mode,
        x: this._w - this.style.paddingX,
        y: this._h - this.style.paddingY
      });
      if (!this._Checkbox) {
        this._Content.patch({
          Checkbox: _objectSpread(_objectSpread({}, checkboxPatch), {}, {
            type: Checkbox/* default */.A,
            mount: 1
          })
        });
        return;
      }
      this.applySmooth(this._Checkbox, checkboxPatch);
    }
    /* ------------------------------ Progress Bar ------------------------------ */
  }, {
    key: "_progressBarY",
    get: function get() {
      // this accessor gets used to determine where to position the metadata, so
      // if there is a ProgressBar that is not being alpha-ed out
      // (because of the progress being set to 0),
      // use the y position of the ProgressBar
      // if the ProgressBar is currently animating into place, use the future value
      // otherwise, return 0
      return (this._ProgressBar && this._ProgressBar._getTransition('alpha')._targetValue !== 0 ? this._ProgressBar._getTransition('y')._targetValue || this._ProgressBar.y : 0) || 0;
    }
  }, {
    key: "_updateProgressBar",
    value: function _updateProgressBar() {
      var _this$progressBar2,
        _this2 = this;
      // Remove ProgressBar if no longer required
      if (!(typeof ((_this$progressBar2 = this.progressBar) === null || _this$progressBar2 === void 0 ? void 0 : _this$progressBar2.progress) === 'number' && this.progressBar.progress) || this._isCircleLayout) {
        if (this._ProgressBar) {
          if (this.shouldSmooth) {
            this._ProgressBar._getTransition('alpha').once('finish', function () {
              _this2._removeProgressBar();
            });
            this._ProgressBar.smooth = {
              alpha: 0
            };
          } else {
            this._removeProgressBar();
          }
        }
        return;
      }
      if (this.progressBar.progress > 0) {
        var progressPatch = _objectSpread(_objectSpread({}, this.progressBar), {}, {
          mode: this.mode,
          w: this._w - this.style.paddingX * 2,
          x: this._w / 2,
          y: this._h - this.style.paddingYProgress
        });
        if (!this._ProgressBar) {
          this._Content.patch({
            ProgressBar: _objectSpread(_objectSpread({}, progressPatch), {}, {
              type: ProgressBar/* default */.A,
              mountX: 0.5,
              mountY: 1,
              alpha: this._hasMetadata && this.shouldSmooth ? 0.001 : 1
            })
          });
          if (this.shouldSmooth) {
            this._ProgressBar.smooth = {
              alpha: [1, {
                delay: this.style.animationEntrance.duration
              } // Wait for metadata to animate in
              ]
            };
          }
          return;
        }

        // TODO: See if we need to add animation to every property individually or can set parent
        this.applySmooth(this._ProgressBar, progressPatch, Object.keys(progressPatch).reduce(function (acc, prop) {
          acc[prop] = [progressPatch[prop], _this2._isFocusedMode ? _this2.style.animationEntrance : _this2.style.animationExit];
          return acc;
        }, {}));
      }
    }
  }, {
    key: "_removeProgressBar",
    value: function _removeProgressBar() {
      this._Content.patch({
        ProgressBar: undefined
      });
      this._updateMetadata();
    }

    /* ------------------------------ Metadata  ------------------------------ */

    // all the logic on whether the metaData should show
  }, {
    key: "_shouldShowMetadata",
    get: function get() {
      return this._hasMetadata && (this.persistentMetadata && !this._isInsetMetadata || this._isFocusedMode && !this._isInsetMetadata || (this.persistentMetadata || this._isFocusedMode) && this._isInsetMetadata && !this._isCircleLayout);
    }
  }, {
    key: "_isInsetMetadata",
    get: function get() {
      return this.metadataLocation === 'inset';
    }
  }, {
    key: "_metadataTransitions",
    get: function get() {
      return {
        y: [this._metadataY, this._shouldShowMetadata ? this.style.animationEntrance : this.style.animationExit],
        alpha: [this._metadataAlpha, this._shouldShowMetadata ? this.style.animationEntrance : this.style.animationExit]
      };
    }
  }, {
    key: "_hasMetadata",
    get: function get() {
      var _this3 = this;
      return MetadataTile/* default */.A.properties.some(function (prop) {
        return _this3.metadata && _this3.metadata[prop];
      });
    }
  }, {
    key: "_metadataY",
    get: function get() {
      if (this._shouldShowMetadata) {
        if (this._isInsetMetadata) {
          return this._progressBarY ? this._progressBarY - this.style.paddingYBetweenContent : this._h - this.style.paddingY;
        }
      }
      return this._h + this.style.paddingY;
    }
  }, {
    key: "_metadataAlpha",
    get: function get() {
      return this._shouldShowMetadata ? 1 : 0.001;
    }
  }, {
    key: "_metadataPatch",
    get: function get() {
      return {
        alpha: this._metadataAlpha,
        w: this._w - this.style.paddingX * 2,
        x: this._w / 2,
        y: this._metadataY
      };
    }
  }, {
    key: "_nonSmoothingMetadataPatch",
    get: function get() {
      return _objectSpread({
        mode: this.mode,
        mountX: 0.5,
        mountY: this._isInsetMetadata ? 1 : 0,
        marquee: this._isFocusedMode
      }, this.metadata || {});
    }
  }, {
    key: "_getMetadataLocation",
    value: function _getMetadataLocation() {
      var _this$_metadataLocati;
      return (_this$_metadataLocati = this._metadataLocation) !== null && _this$_metadataLocati !== void 0 ? _this$_metadataLocati : this.style.metadataLocation;
    }
  }, {
    key: "_updateMetadata",
    value: function _updateMetadata() {
      if (!this._hasMetadata) {
        this._Content.patch({
          Metadata: undefined
        });
        return;
      }
      if (!this._Metadata && this._hasMetadata) {
        // Patch in Metadata for the first time
        this._Content.patch({
          Metadata: _objectSpread(_objectSpread({
            type: MetadataTile/* default */.A,
            signals: {
              updateComponentDimensions: '_metadataLoaded'
            }
          }, this._nonSmoothingMetadataPatch), this._metadataPatch)
        });
        return;
      }
      this._Metadata.patch(this._nonSmoothingMetadataPatch);
      this._animateMetadata();
    }
  }, {
    key: "_animateMetadata",
    value: function _animateMetadata() {
      if (!this._Metadata) {
        return;
      }
      this.applySmooth(this._Metadata, this._metadataPatch, this._metadataTransitions);
      if (!this._isFocusedMode) {
        this._resetMarqueeAnimation();
      }
    }
  }, {
    key: "_metadataLoaded",
    value: function _metadataLoaded() {
      this._animateMetadata();
      this._updateLogo();

      // if the metadata height has changed, the height of the entire Tile has changed
      // and the inspector must be updated via _getRenderHeight()
      this._updateDimensions();

      // Send event to columns/rows that the height has been updated since metadata will be displayed below the Tile
      if (!this._isInsetMetadata) {
        this.fireAncestors('$itemChanged');
      }
    }

    /* ------------------------------ Marquee  ------------------------------ */
  }, {
    key: "_resetMarqueeAnimation",
    value: function _resetMarqueeAnimation() {
      var _this4 = this;
      var alphaTransition = this._Metadata._getTransition('alpha');
      if (alphaTransition) {
        alphaTransition.on('finish', function () {
          if (_this4._Metadata) {
            _this4._Metadata.resetMarquee();
          }
        });
      } else {
        this._Metadata.resetMarquee();
      }
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'Tile';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Tile_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      return _objectSpread(_objectSpread({}, _superPropGet(Tile, "_template", this, 2)([])), {}, {
        // Make sure surface elements are patched
        Tile: {
          Artwork: {
            type: Artwork/* default */.A,
            signals: {
              imageLoaded: '_imageLoaded'
            },
            mount: 0.5
          },
          Content: {
            mount: 0.5
          }
        }
      });
    }
  }, {
    key: "properties",
    get: function get() {
      return ['artwork', 'badge', 'checkbox', 'circle', 'label', 'logo', 'metadata', 'metadataLocation', 'persistentMetadata', 'progressBar', 'src'];
    }
  }, {
    key: "aliasStyles",
    get: function get() {
      return [{
        prev: 'iconHeight',
        curr: 'logoHeight'
      }, {
        prev: 'iconWidth',
        curr: 'logoWidth'
      }];
    }
  }, {
    key: "aliasProperties",
    get: function get() {
      return [{
        prev: 'iconSrc',
        curr: 'logo'
      }];
    }
  }, {
    key: "tags",
    get: function get() {
      return [].concat(_toConsumableArray(_superPropGet(Tile, "tags", this)), ['Artwork', 'Content', 'Tile', {
        name: 'Badge',
        path: 'Content.Badge'
      }, {
        name: 'Checkbox',
        path: 'Content.Checkbox'
      }, {
        name: 'Logo',
        path: 'Content.Logo'
      }, {
        name: 'Metadata',
        path: 'Content.Metadata'
      }, {
        name: 'ProgressBar',
        path: 'Content.ProgressBar'
      }, {
        name: 'Label',
        path: 'Content.Label'
      }]);
    }
  }]);
}(Surface/* default */.A);


/***/ })

}]);
//# sourceMappingURL=8527.290bd0d6.iframe.bundle.js.map