"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[238],{

/***/ "../../@lightningjs/ui-components/src/components/CardContent/CardContentVertical.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ CardContentVertical)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/CardContent/CardContentVertical.styles.js
var CardContentVertical_styles_namespaceObject = {};
__webpack_require__.r(CardContentVertical_styles_namespaceObject);
__webpack_require__.d(CardContentVertical_styles_namespaceObject, {
  base: () => (base)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/CardContent/CardContentVertical.styles.js
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
    expandedWidth: utils/* default.getWidthByUpCount */.Ay.getWidthByUpCount(theme, 4),
    expandedHeight: utils/* default.getDimensions */.Ay.getDimensions(theme, {
      ratioX: 16,
      ratioY: 9,
      upCount: 4
    }).h + theme.spacer.xxxl * 7 + theme.spacer.lg + theme.spacer.xxs,
    metadata: {
      descriptionTextStyle: {
        maxLines: 3
      }
    },
    marqueeOnFocus: true
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/CardContent/CardContent.js
var CardContent = __webpack_require__("../../@lightningjs/ui-components/src/components/CardContent/CardContent.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/CardContent/CardContentVertical.js
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



var CardContentVertical = /*#__PURE__*/function (_CardContent) {
  function CardContentVertical() {
    _classCallCheck(this, CardContentVertical);
    return _callSuper(this, CardContentVertical, arguments);
  }
  _inherits(CardContentVertical, _CardContent);
  return _createClass(CardContentVertical, [{
    key: "_init",
    value: function _init() {
      this._orientation = 'vertical';
      _superPropGet(CardContentVertical, "_init", this, 3)([]);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'CardContentVertical';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return CardContentVertical_styles_namespaceObject;
    }
  }]);
}(CardContent/* default */.A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/CardContent/CardContentVerticalSmall.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CardContentVerticalSmall: () => (/* binding */ CardContentVerticalSmall),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ CardContentVerticalSmall_stories)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/CardContent/CardContentVerticalSmall.styles.js
var CardContentVerticalSmall_styles_namespaceObject = {};
__webpack_require__.r(CardContentVerticalSmall_styles_namespaceObject);
__webpack_require__.d(CardContentVerticalSmall_styles_namespaceObject, {
  base: () => (base)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/assets/images/tile-image.png
var tile_image = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/tile-image.png");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/MetadataCardContent/MetadataCardContent.stories.js
var MetadataCardContent_stories = __webpack_require__("../../@lightningjs/ui-components/src/components/MetadataCardContent/MetadataCardContent.stories.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/docs/utils.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var src_utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/CardContent/CardContentVerticalSmall.styles.js
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
    expandedHeight: src_utils/* default.getDimensions */.Ay.getDimensions(theme, {
      ratioX: 16,
      ratioY: 9,
      upCount: 4
    }).h + theme.spacer.md * 14,
    metadata: {
      descriptionTextStyle: {
        maxLines: 1
      }
    }
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/CardContent/CardContentVertical.js + 1 modules
var CardContentVertical = __webpack_require__("../../@lightningjs/ui-components/src/components/CardContent/CardContentVertical.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/CardContent/CardContentVerticalSmall.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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



var CardContentVerticalSmall_CardContentVerticalSmall = /*#__PURE__*/function (_CardContentVertical) {
  function CardContentVerticalSmall() {
    _classCallCheck(this, CardContentVerticalSmall);
    return _callSuper(this, CardContentVerticalSmall, arguments);
  }
  _inherits(CardContentVerticalSmall, _CardContentVertical);
  return _createClass(CardContentVerticalSmall, [{
    key: "_setMetadata",
    value: function _setMetadata(metadata) {
      return _objectSpread(_objectSpread({}, metadata), {}, {
        details: undefined,
        provider: undefined
      });
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'CardContentVerticalSmall';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return CardContentVerticalSmall_styles_namespaceObject;
    }
  }]);
}(CardContentVertical/* default */.A);

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/CardContent/CardContent.stories.js
var CardContent_stories = __webpack_require__("../../@lightningjs/ui-components/src/components/CardContent/CardContent.stories.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/CardContent/CardContentVerticalSmall.stories.js
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







/* harmony default export */ const CardContentVerticalSmall_stories = ({
  title: 'Components/CardContent/CardContentVerticalSmall'
});
const CardContentVerticalSmall = args => class CardContentVerticalSmall extends lightning_esm/* default */.A.Component {
  static _template() {
    return {
      CardContentVerticalSmall: {
        type: CardContentVerticalSmall_CardContentVerticalSmall,
        src: tile_image,
        shouldCollapse: args.shouldCollapse
      }
    };
  }
};
CardContentVerticalSmall.storyName = 'CardContentVerticalSmall';

//Creating a shallow copy of CardContent.args object and removing metadata details property from cardContentArgs
const cardContentArgs = {
  ...CardContent_stories.CardContent.args
};
delete cardContentArgs.metadata_details;
CardContentVerticalSmall.args = {
  mode: 'focused',
  ...cardContentArgs
};

//Creating a shallow copy of CardContent.argTypes object and removing metadata details property from cardContentArgsTypes
const cardContentArgsTypes = {
  ...CardContent_stories.CardContent.argTypes
};
delete cardContentArgsTypes.metadata_details;
CardContentVerticalSmall.argTypes = {
  ...(0,utils/* createModeControl */.Pg)({
    summaryValue: CardContentVerticalSmall.args.mode
  }),
  ...cardContentArgsTypes
};
CardContentVerticalSmall.parameters = {
  argActions: CardContent_stories.CardContent.tileProps.argActions('CardContentVerticalSmall')
};
(0,utils/* generateSubStory */.jb)({
  componentName: 'CardContentVerticalSmall',
  baseStory: CardContentVerticalSmall,
  subStory: MetadataCardContent_stories.MetadataCardContent,
  targetProperty: 'metadata',
  include: ['title', 'description']
});
;
const __namedExportsOrder = ["CardContentVerticalSmall"];
CardContentVerticalSmall.parameters = {
  ...CardContentVerticalSmall.parameters,
  docs: {
    ...CardContentVerticalSmall.parameters?.docs,
    source: {
      originalSource: "args => class CardContentVerticalSmall extends lng.Component {\n  static _template() {\n    return {\n      CardContentVerticalSmall: {\n        type: CardContentVerticalSmallComponent,\n        src: tileImage,\n        shouldCollapse: args.shouldCollapse\n      }\n    };\n  }\n}",
      ...CardContentVerticalSmall.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=components-CardContent-CardContentVerticalSmall-stories.1cd0fc71.iframe.bundle.js.map