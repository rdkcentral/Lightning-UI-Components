"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[6095,6115,4827,287],{

/***/ "../../@lightningjs/ui-components/src/components/Button/ButtonSmall.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ButtonSmall)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Button/ButtonSmall.styles.js
var ButtonSmall_styles_namespaceObject = {};
__webpack_require__.r(ButtonSmall_styles_namespaceObject);
__webpack_require__.d(ButtonSmall_styles_namespaceObject, {
  base: () => (base)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Button/Button.js + 1 modules
var Button = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/Button.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Button/ButtonSmall.styles.js
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
    minWidth: (0,utils/* getWidthByColumnSpan */._l)(theme, 1),
    paddingX: theme.spacer.xxl,
    paddingXNoTitle: theme.spacer.lg,
    paddingY: theme.spacer.lg,
    textStyle: theme.typography.button2
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Button/ButtonSmall.js
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



var ButtonSmall = /*#__PURE__*/function (_Button) {
  function ButtonSmall() {
    _classCallCheck(this, ButtonSmall);
    return _callSuper(this, ButtonSmall, arguments);
  }
  _inherits(ButtonSmall, _Button);
  return _createClass(ButtonSmall, null, [{
    key: "__componentName",
    get: function get() {
      return 'ButtonSmall';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return ButtonSmall_styles_namespaceObject;
    }
  }]);
}(Button/* default */.A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Control/Control.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Control)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/ButtonSmall.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
/* harmony import */ var _Control_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Control/Control.styles.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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




var Control = /*#__PURE__*/function (_ButtonSmall) {
  function Control() {
    _classCallCheck(this, Control);
    return _callSuper(this, Control, arguments);
  }
  _inherits(Control, _ButtonSmall);
  return _createClass(Control, [{
    key: "_update",
    value: function _update() {
      // ordering this way to make sure that this._Title is defined so the title visibility can be set properly when _updateCollapseStatus is called
      this._updatePrefixStyle();
      _superPropGet(Control, "_updateTitle", this, 3)([]);
      this._updateCollapseStatus();
      _superPropGet(Control, "_update", this, 3)([]);
    }
  }, {
    key: "_updateCollapseStatus",
    value: function _updateCollapseStatus() {
      if (this._Title) {
        this._Title.visible = !this._collapse;
      }
    }

    // if user provides styling of either logo or icon, apply the style to the respected element
  }, {
    key: "_updatePrefixStyle",
    value: function _updatePrefixStyle() {
      if (this._prefix) {
        // checking logo first since it takes precedence
        if (this.logo) {
          this._updatePrefixObj(this.logo, {
            style: _objectSpread({
              color: undefined
            }, this.style.logoStyle)
          });
        } else if (this.icon) {
          this._updatePrefixObj(this.icon, {
            style: this.style.iconStyle
          });
        }
      }
    }

    // optimization
    // sets Title's x and mountX values
  }, {
    key: "_patchTitle",
    value: function _patchTitle(x, mountX) {
      this._Title.patch({
        x: x,
        mountX: mountX
      });
    }
  }, {
    key: "_updateContentPosition",
    value: function _updateContentPosition() {
      if (this._prefix && this._Title) {
        // placing prefix always to the left if title is present
        // justification should only apply to title in this case
        this._Content.patch({
          mountX: 0,
          x: this._paddingLeft
        });
        switch (this._justify) {
          case 'left':
            this._patchTitle(0, 0);
            break;
          case 'right':
            if (this.w < this._Prefix.w + this._Title.w) {
              this._patchTitle(0, 0);
            } else {
              var leftOverSpace = this.w - (this._paddingLeft + this._paddingRight + this._Prefix.w + this.style.contentSpacing);
              this._patchTitle(leftOverSpace, 1);
            }
            break;
          case 'center':
          default:
            if (this.fixed) {
              // if the component width is less than the prefix and title then we go to the default padding on left and right of title
              if (this.w < this._Prefix.w + this._Title.w) {
                this._patchTitle(0, 0);
              } else {
                var middle = (this.w - (this._paddingLeft + this._Prefix.w + this._paddingRight)) / 2;
                this._patchTitle(middle, 0.5);
              }
            } else if (this._Prefix !== undefined) {
              var _middle = (this.w - (this._paddingLeft + this._Prefix.w + this.style.contentSpacing + this._paddingRight)) / 2;
              this._patchTitle(_middle, 0.5);
            }
            break;
        }
      } else {
        _superPropGet(Control, "_updateContentPosition", this, 3)([]);
        this._Title && this._patchTitle(0, 0); // RESET Title back to original position
      }
    }

    // does nothing if a prefix property is passed in for Control
  }, {
    key: "_setPrefix",
    value: function _setPrefix() {
      return;
    }

    // does nothing if a suffix property is passed in for Control
  }, {
    key: "_setSuffix",
    value: function _setSuffix() {
      return;
    }

    // optimization
    // turning prefix property setter into a function since functionality is repeated
  }, {
    key: "_updatePrefixObj",
    value: function _updatePrefixObj(icon) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this._prefix = _objectSpread({
        type: _Icon__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,
        icon: icon
      }, props);
    }
  }, {
    key: "_setIcon",
    value: function _setIcon(icon) {
      if (!this.logo) {
        // if icon is defined then set it otherwise set prefix to be undefined
        if (icon) {
          this._updatePrefixObj(icon, {
            style: this.style.iconStyle
          });
        } else {
          this._prefix = icon;
        }
      }
      return icon;
    }
  }, {
    key: "_setLogo",
    value: function _setLogo(logo) {
      if (logo) {
        this._updatePrefixObj(logo, {
          style: _objectSpread({
            color: undefined
          }, this.style.logoStyle)
        });
        // if logo is set to undefined but an icon is provided, display the icon
      } else if (this.icon) {
        this._updatePrefixObj(this.icon, {
          style: this.style.iconStyle
        });
      } else {
        this._prefix = logo;
      }
      return logo;
    }
  }, {
    key: "_paddingLeft",
    get: function get() {
      return this.logo ? this.style.paddingXNoTitle : this.style.paddingX;
    }
  }, {
    key: "_paddingRight",
    get: function get() {
      return this.logo && (!this._hasTitle || this._collapse) ? this.style.paddingXNoTitle : this.style.paddingX;
    }
  }, {
    key: "_collapse",
    get: function get() {
      return this.shouldCollapse && !this._isFocusedMode;
    }
  }, {
    key: "_announceComponentName",
    get: function get() {
      return Control.__componentName;
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'Control';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return _Control_styles__WEBPACK_IMPORTED_MODULE_1__;
    }
  }, {
    key: "properties",
    get: function get() {
      return [].concat(_toConsumableArray(_superPropGet(Control, "properties", this)), ['icon', 'logo', 'shouldCollapse']);
    }
  }, {
    key: "aliasStyles",
    get: function get() {
      return [{
        prev: 'titlePadding',
        curr: 'contentSpacing'
      }];
    }
  }]);
}(_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Control/Control.styles.js":
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
  var paddingX = theme.spacer.lg;
  var radius = theme.radius.xl;
  var logoRadius = Math.max(radius - paddingX / 2, 0);
  return {
    height: theme.spacer.md * 8,
    iconStyle: {
      radius: radius,
      width: theme.spacer.xxxl,
      height: theme.spacer.xxxl
    },
    logoStyle: {
      radius: logoRadius,
      width: theme.spacer.md * 7,
      height: theme.spacer.md * 6
    },
    minWidth: theme.spacer.md * 9,
    paddingX: paddingX,
    paddingXNoTitle: theme.spacer.md,
    prefixPadding: theme.spacer.md,
    radius: radius,
    contentSpacing: theme.spacer.md
  };
};

/***/ }),

/***/ "../../@lightningjs/ui-components/src/docs/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hx: () => (/* binding */ controlDescriptions)
/* harmony export */ });
/* unused harmony exports CATEGORIES, storySortOrder */
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

var CATEGORIES = {
  0: 'Docs',
  2: 'Collections',
  4: 'Utilities',
  8: 'Components',
  16: 'Patterns',
  32: 'Templates'
};

/** Storybook config constants should go in this file */

var storySortOrder = [CATEGORIES[0], ['Introduction', 'Read Me', 'Base', 'Contributing', 'Lightning Resources', 'Lightning Community Guide', 'Theming', ['Overview', 'Component Config', 'Tones', 'Modes', 'Extensions', 'Subtheming', 'Use in Storybook', 'Theme Properties', 'Hierarchy', 'Tutorial'], 'Unit Testing', ['Overview', 'Test Renderer', 'Test Utils', ['makeCreateComponent', '*']]], CATEGORIES[2], CATEGORIES[4], CATEGORIES[8], CATEGORIES[16], CATEGORIES[32]];
var controlDescriptions = {
  collapseToMetadata: 'When in unfocused or disabled mode, if shouldCollapse property is true it will collapse the image to metadata (when focused, it will always be expanded)',
  shouldCollapse: 'When in unfocused or disabled mode, if this flag is true metadata will collapse (when focused, it will always be expanded)',
  fixed: 'Stops the width from being calculated dynamically based on content and will instead use the`w` property'
};

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

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Control/Control.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Control: () => (/* binding */ Control),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Control/Control.js");
/* harmony import */ var _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png");
/* harmony import */ var _assets_images_Xfinity_Provider_Logo_Square_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/Xfinity-Provider-Logo-Square.png");
/* harmony import */ var _docs_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
/* harmony import */ var _docs_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/constants.js");
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
  title: 'Components/Control/Control'
});
const Control = () => class Control extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Control: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A
      }
    };
  }
};
const sharedArgs = {
  title: 'Control',
  fixed: false,
  w: 200,
  icon: 'none',
  logo: 'none',
  shouldCollapse: false,
  mode: 'focused'
};
const sharedArgTypes = {
  ...(0,_docs_utils__WEBPACK_IMPORTED_MODULE_2__/* .createModeControl */ .Pg)({
    summaryValue: sharedArgs.mode
  }),
  title: {
    control: 'text',
    description: 'Title text',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  fixed: {
    control: 'boolean',
    description: _docs_constants__WEBPACK_IMPORTED_MODULE_3__/* .controlDescriptions */ .Hx.fixed,
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  w: {
    control: 'number',
    description: 'When the fixed property is true, this will set the width of the component',
    table: {
      defaultValue: {
        summary: 0
      }
    }
  },
  icon: {
    control: 'radio',
    options: ['none', 'lightning'],
    description: 'Icon to the left of title',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  logo: {
    control: 'radio',
    options: ['none', 'xfinity'],
    description: 'Logo to be placed to the left of title. If icon and logo are both set, logo will take precedence for what is rendered and icon will be ignored',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  shouldCollapse: {
    control: 'boolean',
    description: 'When in unfocused or disabled mode, if this flag is true the title will collapse (when focused, it will always be expanded)',
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
};
const iconSet = {
  lightning: _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_4__,
  none: null
};
const logoSet = {
  none: null,
  xfinity: _assets_images_Xfinity_Provider_Logo_Square_png__WEBPACK_IMPORTED_MODULE_5__
};
const sharedArgActions = {
  icon: (iconName, component) => {
    component.tag('Control').icon = iconSet[iconName];
  },
  logo: (logoName, component) => {
    component.tag('Control').logo = logoSet[logoName];
  },
  shouldCollapse: (shouldCollapse, component) => {
    component.tag('Control').shouldCollapse = shouldCollapse;
  }
};
Control.args = {
  ...sharedArgs
};
Control.argTypes = {
  ...sharedArgTypes
};
Control.parameters = {
  argActions: {
    ...sharedArgActions
  }
};

// // Control Small version on Storybook
// export const Small = () =>
//   class Small extends lng.Component {
//     static _template() {
//       return {
//         Control: {
//           type: ControlSmall
//         }
//       };
//     }
//   };

// Small.argTypes = sharedArgTypes;
// Small.parameters = { argActions: sharedArgActions };;export const __namedExportsOrder = ["Control"];
Control.parameters = {
  ...Control.parameters,
  docs: {
    ...Control.parameters?.docs,
    source: {
      originalSource: "() => class Control extends lng.Component {\n  static _template() {\n    return {\n      Control: {\n        type: ControlComponent\n      }\n    };\n  }\n}",
      ...Control.parameters?.docs?.source
    }
  }
};

/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/Xfinity-Provider-Logo-Square.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/Xfinity-Provider-Logo-Square.d3aaa87c.png";

/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/ic_lightning_white_32.06aecfeb.png";

/***/ })

}]);
//# sourceMappingURL=components-Control-Control-stories.2947683a.iframe.bundle.js.map