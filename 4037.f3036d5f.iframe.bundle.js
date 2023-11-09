"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[4037],{

/***/ "../../@lightningjs/ui-components/src/components/Button/ButtonSmall.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ ButtonSmall)
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
    minWidth: (0,utils/* getWidthByColumnSpan */.wO)(theme, 1),
    paddingX: theme.spacer.xxl,
    paddingXNoTitle: theme.spacer.lg,
    paddingY: theme.spacer.lg,
    textStyle: theme.typography.button2
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Button/ButtonSmall.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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
  _inherits(ButtonSmall, _Button);
  var _super = _createSuper(ButtonSmall);
  function ButtonSmall() {
    _classCallCheck(this, ButtonSmall);
    return _super.apply(this, arguments);
  }
  _createClass(ButtonSmall, null, [{
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
  return ButtonSmall;
}(Button/* default */.Z);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Control/Control.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Control)
/* harmony export */ });
/* harmony import */ var _Button_ButtonSmall_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/ButtonSmall.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
/* harmony import */ var _Control_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Control/Control.styles.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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
  _inherits(Control, _ButtonSmall);
  var _super = _createSuper(Control);
  function Control() {
    _classCallCheck(this, Control);
    return _super.apply(this, arguments);
  }
  _createClass(Control, [{
    key: "_update",
    value: function _update() {
      // ordering this way to make sure that this._Title is defined so the title visibility can be set properly when _updateCollapseStatus is called
      this._updatePrefixStyle();
      _get(_getPrototypeOf(Control.prototype), "_update", this).call(this);
      this._updateCollapseStatus();
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
            } else {
              var _middle = (this.w - (this._paddingLeft + this._Prefix.w + this.style.contentSpacing + this._paddingRight)) / 2;
              this._patchTitle(_middle, 0.5);
            }
            break;
        }
      } else {
        _get(_getPrototypeOf(Control.prototype), "_updateContentPosition", this).call(this);
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
        type: _Icon__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
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
      return _Control_styles_js__WEBPACK_IMPORTED_MODULE_1__;
    }
  }, {
    key: "properties",
    get: function get() {
      return [].concat(_toConsumableArray(_get(_getPrototypeOf(Control), "properties", this)), ['icon', 'logo', 'shouldCollapse']);
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
  return Control;
}(_Button_ButtonSmall_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);


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

/***/ "../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/ic_lightning_white_32.06aecfeb.png";

/***/ })

}]);
//# sourceMappingURL=4037.f3036d5f.iframe.bundle.js.map