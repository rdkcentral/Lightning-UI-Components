"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[5367],{

/***/ "../../@lightningjs/ui-components/src/components/CardContent/CardContentHorizontal.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CardContentHorizontal)
/* harmony export */ });
/* harmony import */ var _CardContent_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/components/CardContent/CardContent.styles.js");
/* harmony import */ var _CardContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/CardContent/CardContent.js");
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



var CardContentHorizontal = /*#__PURE__*/function (_CardContent) {
  function CardContentHorizontal() {
    _classCallCheck(this, CardContentHorizontal);
    return _callSuper(this, CardContentHorizontal, arguments);
  }
  _inherits(CardContentHorizontal, _CardContent);
  return _createClass(CardContentHorizontal, [{
    key: "_init",
    value: function _init() {
      this._orientation = 'horizontal';
      _superPropGet(CardContentHorizontal, "_init", this, 3)([]);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'CardContentHorizontal';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return _CardContent_styles__WEBPACK_IMPORTED_MODULE_0__;
    }
  }]);
}(_CardContent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/CardContent/CardContentHorizontal.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardContentHorizontal: () => (/* binding */ CardContentHorizontal),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _assets_images_tile_image_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/tile-image.png");
/* harmony import */ var _MetadataCardContent_MetadataCardContent_stories__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../@lightningjs/ui-components/src/components/MetadataCardContent/MetadataCardContent.stories.js");
/* harmony import */ var _docs_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
/* harmony import */ var _CardContentHorizontal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/CardContent/CardContentHorizontal.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
/* harmony import */ var _assets_images_Xfinity_Provider_Logo_2x1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/Xfinity-Provider-Logo-2x1.png");
/* harmony import */ var _CardContent_stories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../@lightningjs/ui-components/src/components/CardContent/CardContent.stories.js");
/* harmony import */ var _docs_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/constants.js");
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
  title: 'Components/CardContent/CardContentHorizontal'
});
const CardContentHorizontal = () => class CardContentHorizontal extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      CardContentHorizontal: {
        type: _CardContentHorizontal__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        src: _assets_images_tile_image_png__WEBPACK_IMPORTED_MODULE_2__,
        metadata: {
          provider: {
            providers: [{
              type: _Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
              w: 96,
              h: 48,
              icon: _assets_images_Xfinity_Provider_Logo_2x1_png__WEBPACK_IMPORTED_MODULE_4__
            }]
          }
        }
      }
    };
  }
};
CardContentHorizontal.args = {
  collapseToMetadata: false,
  mode: 'focused',
  ..._CardContent_stories__WEBPACK_IMPORTED_MODULE_5__.CardContent.args
};
CardContentHorizontal.argTypes = {
  ...(0,_docs_utils__WEBPACK_IMPORTED_MODULE_6__/* .createModeControl */ .Pg)({
    summaryValue: 'focused'
  }),
  collapseToMetadata: {
    control: 'boolean',
    description: _docs_constants__WEBPACK_IMPORTED_MODULE_7__/* .controlDescriptions */ .Hx.collapseToMetadata,
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  ..._CardContent_stories__WEBPACK_IMPORTED_MODULE_5__.CardContent.argTypes
};
CardContentHorizontal.parameters = {
  argActions: _CardContent_stories__WEBPACK_IMPORTED_MODULE_5__.CardContent.tileProps.argActions('CardContentHorizontal')
};
(0,_docs_utils__WEBPACK_IMPORTED_MODULE_6__/* .generateSubStory */ .jb)({
  componentName: 'CardContentHorizontal',
  baseStory: CardContentHorizontal,
  subStory: _MetadataCardContent_MetadataCardContent_stories__WEBPACK_IMPORTED_MODULE_8__.MetadataCardContent,
  targetProperty: 'metadata',
  include: ['title', 'description', 'details']
});
CardContentHorizontal.storyName = 'CardContentHorizontal';
;
const __namedExportsOrder = ["CardContentHorizontal"];
CardContentHorizontal.parameters = {
  ...CardContentHorizontal.parameters,
  docs: {
    ...CardContentHorizontal.parameters?.docs,
    source: {
      originalSource: "() => class CardContentHorizontal extends lng.Component {\n  static _template() {\n    return {\n      CardContentHorizontal: {\n        type: CardContentHorizontalComponent,\n        src: tileImage,\n        metadata: {\n          provider: {\n            providers: [{\n              type: Icon,\n              w: 96,\n              h: 48,\n              icon: xfinityLogo\n            }]\n          }\n        }\n      }\n    };\n  }\n}",
      ...CardContentHorizontal.parameters?.docs?.source
    }
  }
};

/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/Xfinity-Provider-Logo-2x1.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/Xfinity-Provider-Logo-2x1.257f7e9d.png";

/***/ })

}]);
//# sourceMappingURL=components-CardContent-CardContentHorizontal-stories.e21fc63c.iframe.bundle.js.map