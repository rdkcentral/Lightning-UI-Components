"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[1977],{

/***/ "../../@lightningjs/ui-components/src/components/Card/CardTitle.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ CardTitle)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Card/CardTitle.styles.js
var CardTitle_styles_namespaceObject = {};
__webpack_require__.r(CardTitle_styles_namespaceObject);
__webpack_require__.d(CardTitle_styles_namespaceObject, {
  base: () => (base),
  mode: () => (mode)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Card/Card.js + 1 modules
var Card = __webpack_require__("../../@lightningjs/ui-components/src/components/Card/Card.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.js + 1 modules
var TextBox = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Card/CardTitle.styles.js
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
    // TODO radius from design or token change
    titleTextStyle: _objectSpread(_objectSpread({}, theme.typography.headline3), {}, {
      wordWrap: true,
      maxLines: 2,
      textColor: theme.color.textNeutral
    }),
    descriptionTextStyle: _objectSpread(_objectSpread({}, theme.typography.body2), {}, {
      textColor: theme.color.textNeutral,
      wordWrap: true,
      maxLines: 3
    }),
    detailsTextStyle: _objectSpread(_objectSpread({}, theme.typography.body3), {}, {
      textColor: theme.color.textNeutral,
      wordWrap: true,
      maxLines: 1
    })
  };
};
var mode = function mode(theme) {
  return {
    disabled: {
      descriptionTextStyle: {
        textColor: theme.color.textNeutralDisabled
      },
      detailsTextStyle: {
        textColor: theme.color.textNeutralDisabled
      }
    }
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Card/CardTitle.js
function CardTitle_typeof(o) { "@babel/helpers - typeof"; return CardTitle_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, CardTitle_typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function CardTitle_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function CardTitle_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? CardTitle_ownKeys(Object(t), !0).forEach(function (r) { CardTitle_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : CardTitle_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, CardTitle_toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == CardTitle_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropSet(t, e, o, r, p, f) { return _set(_getPrototypeOf(f ? t.prototype : t), e, o, r, p); }
function set(e, r, t, o) { return set = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function (e, r, t, o) { var f, i = _superPropBase(e, r); if (i) { if ((f = Object.getOwnPropertyDescriptor(i, r)).set) return f.set.call(o, t), !0; if (!f.writable) return !1; } if (f = Object.getOwnPropertyDescriptor(o, r)) { if (!f.writable) return !1; f.value = t, Object.defineProperty(o, r, f); } else CardTitle_defineProperty(o, r, t); return !0; }, set(e, r, t, o); }
function _set(e, r, t, o, f) { if (!set(e, r, t, o || e) && f) throw new TypeError("failed to set property"); return t; }
function CardTitle_defineProperty(e, r, t) { return (r = CardTitle_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function CardTitle_toPropertyKey(t) { var i = CardTitle_toPrimitive(t, "string"); return "symbol" == CardTitle_typeof(i) ? i : i + ""; }
function CardTitle_toPrimitive(t, r) { if ("object" != CardTitle_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != CardTitle_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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




var CardTitle = /*#__PURE__*/function (_Card) {
  function CardTitle() {
    _classCallCheck(this, CardTitle);
    return _callSuper(this, CardTitle, arguments);
  }
  _inherits(CardTitle, _Card);
  return _createClass(CardTitle, [{
    key: "_update",
    value: function _update() {
      _superPropGet(CardTitle, "_update", this, 3)([]);
      this._updateDescription();
      this._updateDetails();
      this._updatePositions();
    }
  }, {
    key: "_updatePositions",
    value: function _updatePositions() {
      _superPropGet(CardTitle, "_updatePositions", this, 3)([]);
      this._updateDescriptionPosition();
      this._updateDetailsPosition();
    }
  }, {
    key: "_updateDescription",
    value: function _updateDescription() {
      this._Description.patch({
        content: this.description,
        style: {
          textStyle: CardTitle_objectSpread(CardTitle_objectSpread({}, this.style.descriptionTextStyle), {}, {
            wordWrapWidth: this._calculateTextWidth()
          })
        }
      });
    }
  }, {
    key: "_updateDescriptionPosition",
    value: function _updateDescriptionPosition() {
      this._Description.x = this.style.paddingHorizontal;
      this._Description.y = this.style.paddingVertical + this._Title.h;
    }
  }, {
    key: "_updateDetails",
    value: function _updateDetails() {
      this._Details.patch({
        content: this.details,
        style: {
          textStyle: CardTitle_objectSpread(CardTitle_objectSpread({}, this.style.detailsTextStyle), {}, {
            wordWrapWidth: this._calculateTextWidth()
          })
        }
      });
    }
  }, {
    key: "_updateDetailsPosition",
    value: function _updateDetailsPosition() {
      this._Details.x = this.style.paddingHorizontal;
      this._Details.y = this.h - this.style.paddingVertical;
    }
  }, {
    key: "announce",
    get: function get() {
      return this._announce || [this._Title && this._Title.announce, this._Description && this._Description.announce, this._Details && this._Details.announce];
    },
    set: function set(announce) {
      _superPropSet(CardTitle, "announce", announce, this, 1, 1);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'CardTitle';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return CardTitle_styles_namespaceObject;
    }
  }, {
    key: "tags",
    get: function get() {
      return [].concat(_toConsumableArray(_superPropGet(CardTitle, "tags", this)), ['Description', 'Details']);
    }
  }, {
    key: "properties",
    get: function get() {
      return [].concat(_toConsumableArray(_superPropGet(CardTitle, "properties", this)), ['description', 'details']);
    }
  }, {
    key: "_template",
    value: function _template() {
      return CardTitle_objectSpread(CardTitle_objectSpread({}, _superPropGet(CardTitle, "_template", this, 2)([])), {}, {
        Description: {
          type: TextBox/* default */.A,
          signals: {
            textBoxChanged: '_updatePositions'
          }
        },
        Details: {
          type: TextBox/* default */.A,
          mountY: 1
        }
      });
    }
  }]);
}(Card/* default */.A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Card/CardTitle.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardTitle: () => (/* binding */ CardTitle),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _CardTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Card/CardTitle.js");
/* harmony import */ var _docs_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
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
  title: 'Components/Card/CardTitle'
});
const CardTitle = () => class CardTitle extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Card: {
        type: _CardTitle__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A
      }
    };
  }
};
CardTitle.args = {
  title: 'Title',
  description: 'Description',
  details: 'Details',
  mode: 'focused'
};
CardTitle.argTypes = {
  ...(0,_docs_utils__WEBPACK_IMPORTED_MODULE_2__/* .createModeControl */ .Pg)({
    summaryValue: 'focused'
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
  description: {
    control: 'text',
    description: 'Description text',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  details: {
    control: 'text',
    description: 'Details text',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  }
};
CardTitle.storyName = 'CardTitle';
;
const __namedExportsOrder = ["CardTitle"];
CardTitle.parameters = {
  ...CardTitle.parameters,
  docs: {
    ...CardTitle.parameters?.docs,
    source: {
      originalSource: "() => class CardTitle extends lng.Component {\n  static _template() {\n    return {\n      Card: {\n        type: CardTitleComponent\n      }\n    };\n  }\n}",
      ...CardTitle.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=components-Card-CardTitle-stories.74c9ebb5.iframe.bundle.js.map