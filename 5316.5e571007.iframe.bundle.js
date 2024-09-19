"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[5316,6115,4827,287],{

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

/***/ "../../@lightningjs/ui-components/src/components/ListItem/ListItemPicker.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ListItemPicker: () => (/* binding */ ListItemPicker),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ ListItemPicker_stories)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/ListItem/ListItemPicker.styles.js
var ListItemPicker_styles_namespaceObject = {};
__webpack_require__.r(ListItemPicker_styles_namespaceObject);
__webpack_require__.d(ListItemPicker_styles_namespaceObject, {
  base: () => (base),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/ListItem/ListItem.js + 1 modules
var ListItem = __webpack_require__("../../@lightningjs/ui-components/src/components/ListItem/ListItem.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ListItem/ListItemPicker.styles.js
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
    arrowAlphaValue: theme.alpha.primary,
    arrowAlphaValueLimit: theme.alpha.secondary,
    arrowWidth: theme.spacer.xxl,
    arrowHeight: theme.spacer.xxl,
    iconLeftSrc: theme.asset.arrowLeft,
    iconRightSrc: theme.asset.arrowRight
  };
};
var tone = function tone(theme) {
  return {
    neutral: {
      mode: {
        focused: {
          arrowColor: theme.color.fillInverse
        }
      }
    },
    inverse: {
      mode: {
        focused: {
          arrowColor: theme.color.fillNeutral
        }
      }
    },
    brand: {
      mode: {
        focused: {
          arrowColor: theme.color.fillInverse
        }
      }
    }
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Marquee/Marquee.js + 1 modules
var Marquee = __webpack_require__("../../@lightningjs/ui-components/src/components/Marquee/Marquee.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Row/Row.js + 1 modules
var Row = __webpack_require__("../../@lightningjs/ui-components/src/components/Row/Row.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ListItem/ListItemPicker.js
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






var ListItemPicker_ListItemPicker = /*#__PURE__*/function (_ListItem) {
  function ListItemPicker() {
    _classCallCheck(this, ListItemPicker);
    return _callSuper(this, ListItemPicker, arguments);
  }
  _inherits(ListItemPicker, _ListItem);
  return _createClass(ListItemPicker, [{
    key: "_onTextBoxChanged",
    value: function _onTextBoxChanged() {
      _superPropGet(ListItemPicker, "_onTextBoxChanged", this, 3)([]);
      this._alignPicker();
    }
  }, {
    key: "_construct",
    value: function _construct() {
      _superPropGet(ListItemPicker, "_construct", this, 3)([]);
      this._options = [];
      this._selectedIndex = 0;
    }
  }, {
    key: "_update",
    value: function _update() {
      _superPropGet(ListItemPicker, "_update", this, 3)([]);
      this._updatePicker();
      this._updateArrows();
      this._updateArrowsAlpha();
      this._updateAlignment();
    }
  }, {
    key: "_updateAlignment",
    value: function _updateAlignment() {
      if (this._isFocusedMode) {
        this.patch({
          justify: 'center'
        });
      } else {
        this.patch({
          justify: 'left'
        });
      }
    }
  }, {
    key: "_updateArrows",
    value: function _updateArrows() {
      if (!this._isFocusedMode) {
        var offAlpha = 0.001;
        if (this._LeftArrow) {
          this._LeftArrow.alpha = offAlpha;
        }
        if (this._RightArrow) {
          this._RightArrow.alpha = offAlpha;
        }
        return;
      }
      var arrowProps = {
        w: this.style.arrowWidth,
        h: this.style.arrowHeight,
        style: {
          color: this.style.arrowColor
        },
        alpha: this.style.arrowAlphaValue
      };
      if (!this._LeftArrow) {
        this.patch({
          LeftArrow: {
            type: Icon/* default */.A,
            mountY: 0.5,
            y: function y(h) {
              return h / 2;
            }
          }
        });
      }
      this._LeftArrow.patch(_objectSpread(_objectSpread({}, arrowProps), {}, {
        icon: this.style.iconLeftSrc
      }));
      this._LeftArrow.smooth = {
        x: this.style.paddingX
      };
      if (!this._RightArrow) {
        this.patch({
          RightArrow: {
            type: Icon/* default */.A,
            mountY: 0.5,
            mountX: 1,
            y: function y(h) {
              return h / 2;
            }
          }
        });
      }
      this._RightArrow.patch(_objectSpread(_objectSpread({}, arrowProps), {}, {
        icon: this.style.iconRightSrc
      }));
      this._RightArrow.smooth = {
        x: this.w - this.style.paddingX
      };
    }
  }, {
    key: "_updatePicker",
    value: function _updatePicker() {
      var _this = this;
      var w = this.w - this._paddingX - this.style.arrowWidth * 2;
      if (!this._Picker) {
        this._TextWrapper.patch({
          Picker: {
            type: Row/* default */.A,
            clipping: true,
            alwaysScroll: true,
            signals: {
              selectedChange: '_updateArrowsAlpha'
            }
          }
        });
      }
      this._Picker.patch({
        visible: !this._collapse,
        h: this.style.descriptionTextStyle.lineHeight,
        w: w,
        items: this.options.map(function (option) {
          return {
            type: Marquee/* default */.A,
            h: _this.style.descriptionTextStyle.lineHeight,
            w: w,
            centerAlign: _this._isFocusedMode,
            title: _objectSpread(_objectSpread({}, _this.style.descriptionTextStyle), {}, {
              text: option
            })
          };
        }),
        // We need to reset the selected index to ensure it does not get reset to zero when patching items.
        selectedIndex: this.selectedIndex
      });
      this._alignPicker();
    }
  }, {
    key: "_alignPicker",
    value: function _alignPicker() {
      this._Picker.patch({
        mountX: this._isFocusedMode ? 0.5 : 0,
        x: this._isFocusedMode ? this._Title.w / 2 : 0
      });
    }
  }, {
    key: "_updateArrowsAlpha",
    value: function _updateArrowsAlpha() {
      if (this._Picker) {
        this._selectedIndex = this._Picker.selectedIndex;
      }
      var alpha = this._isFocusedMode ? this.style.arrowAlphaValue : 0;
      if (this._RightArrow) {
        this._RightArrow.alpha = this.selectedIndex === this.options.length - 1 && this._isFocusedMode ? this.style.arrowAlphaValueLimit : alpha;
      }
      if (this._LeftArrow) {
        this._LeftArrow.alpha = this.selectedIndex === 0 && this._isFocusedMode ? this.style.arrowAlphaValueLimit : alpha;
      }
      this.fireAncestors('$announce', this.announce);
    }
  }, {
    key: "_fixedWordWrapWidth",
    get: function get() {
      var wordWrapWidthFocused = this.w - this._paddingX - this.style.arrowWidth * 2 - 2 * this.style.contentSpacing;
      var wordWrapWidth = this.w - this._paddingLeft - this._paddingRight;
      return this._isFocusedMode ? wordWrapWidthFocused : wordWrapWidth;
    }
  }, {
    key: "_collapse",
    get: function get() {
      return this.shouldCollapse && !this._isFocusedMode;
    }
  }, {
    key: "selectedOption",
    get: function get() {
      return this._Picker.selected;
    }
  }, {
    key: "_handleLeft",
    value: function _handleLeft() {
      if (typeof this.onLeft === 'function') {
        return this.onLeft(this);
      }
      this._Picker.selectPrevious();
      return true;
    }
  }, {
    key: "_handleRight",
    value: function _handleRight() {
      if (typeof this.onRight === 'function') {
        return this.onRight(this);
      }
      this._Picker.selectNext();
      return true;
    }
  }, {
    key: "announce",
    get: function get() {
      if (this._announce) {
        return this._announce;
      }
      return this.title + this.options[this.selectedIndex] + ', List Item';
    },
    set: function set(announce) {
      _superPropSet(ListItemPicker, "announce", announce, this, 1, 1);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'ListItemPicker';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return ListItemPicker_styles_namespaceObject;
    }
  }, {
    key: "properties",
    get: function get() {
      return [].concat(_toConsumableArray(_superPropGet(ListItemPicker, "properties", this)), ['options', 'selectedIndex']);
    }
  }, {
    key: "tags",
    get: function get() {
      return [].concat(_toConsumableArray(_superPropGet(ListItemPicker, "tags", this)), ['LeftArrow', 'RightArrow', {
        name: 'Picker',
        path: 'Content.TextWrapper.Picker'
      }]);
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
}(ListItem/* default */.A);

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/docs/utils.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ListItem/ListItemPicker.stories.js
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




/* harmony default export */ const ListItemPicker_stories = ({
  title: 'Components/ListItem/ListItemPicker'
});
const ListItemPicker = args => class ListItemPicker extends lightning_esm/* default */.A.Component {
  static _template() {
    return {
      ListItemPicker: {
        type: ListItemPicker_ListItemPicker,
        options: args.options
      }
    };
  }
};
ListItemPicker.storyName = 'ListItemPicker';
ListItemPicker.args = {
  title: 'List Item',
  options: ['Description1', 'Description2', 'Description3'],
  shouldCollapse: false,
  mode: 'focused'
};
ListItemPicker.argTypes = {
  ...(0,utils/* createModeControl */.Pg)({
    summaryValue: ListItemPicker.args.mode
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
  shouldCollapse: {
    control: 'boolean',
    description: 'When in unfocused or disabled mode,if this flag is true the description will collapse (when focused, it will always be expanded)',
    table: {
      defaultValue: {
        summary: false
      },
      type: {
        summary: 'boolean'
      }
    }
  },
  options: {
    control: 'object',
    description: 'List of selectable options',
    table: {
      defaultValue: {
        summary: 'undefined'
      },
      type: {
        summary: 'object'
      }
    }
  }
};
;
const __namedExportsOrder = ["ListItemPicker"];
ListItemPicker.parameters = {
  ...ListItemPicker.parameters,
  docs: {
    ...ListItemPicker.parameters?.docs,
    source: {
      originalSource: "args => class ListItemPicker extends lng.Component {\n  static _template() {\n    return {\n      ListItemPicker: {\n        type: ListItemPickerComponent,\n        options: args.options\n      }\n    };\n  }\n}",
      ...ListItemPicker.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=5316.5e571007.iframe.bundle.js.map