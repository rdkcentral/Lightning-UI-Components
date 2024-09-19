"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[5278],{

/***/ "../../@lightningjs/ui-components/src/components/Card/CardSection.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CardSection: () => (/* binding */ CardSection),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ CardSection_stories)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Card/CardSection.styles.js
var CardSection_styles_namespaceObject = {};
__webpack_require__.r(CardSection_styles_namespaceObject);
__webpack_require__.d(CardSection_styles_namespaceObject, {
  base: () => (base)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Card/Card.js + 1 modules
var Card = __webpack_require__("../../@lightningjs/ui-components/src/components/Card/Card.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Card/CardSection.styles.js
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
    height: theme.spacer.xxl * 5,
    iconWidth: theme.spacer.xxl,
    iconHeight: theme.spacer.xxl,
    width: utils/* default.getWidthByColumnSpan */.Ay.getWidthByColumnSpan(theme, 3)
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Card/CardSection.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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




var CardSection_CardSection = /*#__PURE__*/function (_Card) {
  function CardSection() {
    _classCallCheck(this, CardSection);
    return _callSuper(this, CardSection, arguments);
  }
  _inherits(CardSection, _Card);
  return _createClass(CardSection, [{
    key: "_update",
    value: function _update() {
      _superPropGet(CardSection, "_update", this, 3)([]);
      this._updateIcon();
    }
  }, {
    key: "_updateIcon",
    value: function _updateIcon() {
      var _this$style = this.style,
        iconWidth = _this$style.iconWidth,
        iconHeight = _this$style.iconHeight;
      var iconObject = {
        w: iconWidth,
        h: iconHeight,
        icon: this.iconSrc,
        x: this.w - iconWidth - this.style.paddingHorizontal,
        y: (this._Title.style.textStyle.lineHeight - iconHeight) / 2 + this.style.paddingVertical
      };
      if (!this._Icon) {
        iconObject.type = Icon/* default */.A;
      }
      this.patch({
        Icon: iconObject
      });
    }
  }, {
    key: "_calculateTextWidth",
    value: function _calculateTextWidth() {
      var textWidth = this.w - this.style.paddingHorizontal * 2;
      return this.iconSrc ? textWidth - this.iconWidth : textWidth;
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'CardSection';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return CardSection_styles_namespaceObject;
    }
  }, {
    key: "tags",
    get: function get() {
      return [].concat(_toConsumableArray(_superPropGet(CardSection, "tags", this)), ['Icon']);
    }
  }, {
    key: "properties",
    get: function get() {
      return [].concat(_toConsumableArray(_superPropGet(CardSection, "properties", this)), ['iconWidth', 'iconHeight', 'iconSrc']);
    }
  }]);
}(Card/* default */.A);

;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/assets/images/ic_check_circle_outline_inverse_24.png
const ic_check_circle_outline_inverse_24_namespaceObject = __webpack_require__.p + "static/media/ic_check_circle_outline_inverse_24.fa707615.png";
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/docs/utils.js
var docs_utils = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Card/CardSection.stories.js
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





/* harmony default export */ const CardSection_stories = ({
  title: 'Components/Card/CardSection'
});
const CardSection = () => class CardSection extends lightning_esm/* default */.A.Component {
  static _template() {
    return {
      Card: {
        type: CardSection_CardSection
      }
    };
  }
};
CardSection.args = {
  iconSrc: ic_check_circle_outline_inverse_24_namespaceObject,
  title: 'Section',
  mode: 'focused'
};
CardSection.argTypes = {
  ...(0,docs_utils/* createModeControl */.Pg)({
    summaryValue: CardSection.args.mode
  }),
  iconSrc: {
    control: 'select',
    options: [ic_check_circle_outline_inverse_24_namespaceObject, 'null'],
    description: 'Icon source',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  title: {
    control: 'text',
    description: 'Title text',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  }
};
CardSection.storyName = 'CardSection';
;
const __namedExportsOrder = ["CardSection"];
CardSection.parameters = {
  ...CardSection.parameters,
  docs: {
    ...CardSection.parameters?.docs,
    source: {
      originalSource: "() => class CardSection extends lng.Component {\n  static _template() {\n    return {\n      Card: {\n        type: CardSectionComponent\n      }\n    };\n  }\n}",
      ...CardSection.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=components-Card-CardSection-stories.dde5f7a7.iframe.bundle.js.map