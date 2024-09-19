"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[2877,5139,291,6115,4827,287,4563],{

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

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Artwork/Artwork.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Artwork: () => (/* binding */ Artwork),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Artwork/Artwork.js");
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
  title: 'Components/Artwork'
});
const Artwork = () => class Artwork extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Artwork: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        itemLayout: {
          ratioX: 16,
          ratioY: 9,
          upCount: 3
        }
      }
    };
  }
};
Artwork.args = {
  blur: false,
  foregroundSrc: false,
  gradient: false,
  format: 'default',
  srcCallback: false,
  fill: false,
  shouldScale: false
};
Artwork.argTypes = {
  format: {
    control: 'radio',
    options: ['default', 'circle', 'square', 'contain'],
    description: 'Updates the treatment of src image',
    table: {
      defaultValue: {
        summary: 'default'
      }
    }
  },
  blur: {
    control: 'boolean',
    description: 'Adds blur effect to image',
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  gradient: {
    control: 'boolean',
    description: 'Adds gradient to artwork area',
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  foregroundSrc: {
    control: 'select',
    options: ['none', 'https://image.tmdb.org/t/p/w500/uBZlZ8yN3zScGIsbIRnyWg14JeM.png'],
    description: 'Image to be displayed on top of artwork',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  srcCallback: {
    control: 'boolean',
    description: 'This property can be supplied with your own custom callback function to generate the src value. The values passed back into the srcCallback can help you make the proper request from a service for the image that will best fit your artwork space.',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  fill: {
    control: 'boolean',
    description: 'When true it will apply opacity on the image',
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  shouldScale: {
    control: 'boolean',
    description: 'When true it will scale the image to the value specified by the imageScale property',
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
};
Artwork.parameters = {
  argActions: {
    foregroundSrc: (foregroundSrc, component) => {
      component.tag('Artwork').foregroundSrc = 'none' !== foregroundSrc ? foregroundSrc : undefined;
    },
    srcCallback: (active, component) => {
      if (active) {
        // Accepts a regular function or function that returns a promise
        component.tag('Artwork').patch({
          src: 'https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
          srcCallback: () => {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve('https://image.tmdb.org/t/p/w500/o7qi2v4uWQ8bZ1tW3KI0Ztn2epk.jpg');
              }, 500);
            });
          }
        });
      } else {
        component.tag('Artwork').patch({
          src: 'https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
          srcCallback: undefined
        });
      }
    }
  }
};
;
const __namedExportsOrder = ["Artwork"];
Artwork.parameters = {
  ...Artwork.parameters,
  docs: {
    ...Artwork.parameters?.docs,
    source: {
      originalSource: "() => class Artwork extends lng.Component {\n  static _template() {\n    return {\n      Artwork: {\n        type: ArtworkComponent,\n        itemLayout: {\n          ratioX: 16,\n          ratioY: 9,\n          upCount: 3\n        }\n      }\n    };\n  }\n}",
      ...Artwork.parameters?.docs?.source
    }
  }
};

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Badge/Badge.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconPNG: () => (/* binding */ IconPNG),
/* harmony export */   IconSVG: () => (/* binding */ IconSVG),
/* harmony export */   Text: () => (/* binding */ Text),
/* harmony export */   TextWithIcon: () => (/* binding */ TextWithIcon),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Badge/Badge.js");
/* harmony import */ var _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png");
/* harmony import */ var _assets_images_circle_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/circle.svg");
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
  title: 'Components/Badge'
});
const Text = args => class Basic extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Badge: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        title: args.title
      }
    };
  }
};
Text.args = {
  title: 'HD'
};
Text.argTypes = {
  title: {
    description: 'Badge text',
    control: 'text',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  }
};
const IconSVG = () => class Basic extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Badge: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        icon: _assets_images_circle_svg__WEBPACK_IMPORTED_MODULE_2__,
        iconWidth: 24,
        title: 'HD'
      }
    };
  }
};
IconSVG.args = {
  iconAlign: 'left'
};
IconSVG.argTypes = {
  iconAlign: {
    control: 'select',
    options: ['left', 'right'],
    description: 'Side of the text the icon will appear on',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  }
};
const IconPNG = () => class Basic extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Badge: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        icon: _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_3__
      }
    };
  }
};
const TextWithIcon = () => class Basic extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Badge: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        icon: _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_3__
      }
    };
  }
};
TextWithIcon.args = {
  title: 'HD',
  iconAlign: 'left'
};
TextWithIcon.argTypes = {
  iconAlign: {
    control: 'select',
    options: ['left', 'right'],
    description: 'Side of the text the icon will appear on',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  title: {
    control: 'text',
    description: 'Badge text',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  }
};
;
const __namedExportsOrder = ["Text", "IconSVG", "IconPNG", "TextWithIcon"];
Text.parameters = {
  ...Text.parameters,
  docs: {
    ...Text.parameters?.docs,
    source: {
      originalSource: "args => class Basic extends lng.Component {\n  static _template() {\n    return {\n      Badge: {\n        type: Badge,\n        title: args.title\n      }\n    };\n  }\n}",
      ...Text.parameters?.docs?.source
    }
  }
};
IconSVG.parameters = {
  ...IconSVG.parameters,
  docs: {
    ...IconSVG.parameters?.docs,
    source: {
      originalSource: "() => class Basic extends lng.Component {\n  static _template() {\n    return {\n      Badge: {\n        type: Badge,\n        icon: circle,\n        iconWidth: 24,\n        title: 'HD'\n      }\n    };\n  }\n}",
      ...IconSVG.parameters?.docs?.source
    }
  }
};
IconPNG.parameters = {
  ...IconPNG.parameters,
  docs: {
    ...IconPNG.parameters?.docs,
    source: {
      originalSource: "() => class Basic extends lng.Component {\n  static _template() {\n    return {\n      Badge: {\n        type: Badge,\n        icon: lightning\n      }\n    };\n  }\n}",
      ...IconPNG.parameters?.docs?.source
    }
  }
};
TextWithIcon.parameters = {
  ...TextWithIcon.parameters,
  docs: {
    ...TextWithIcon.parameters?.docs,
    source: {
      originalSource: "() => class Basic extends lng.Component {\n  static _template() {\n    return {\n      Badge: {\n        type: Badge,\n        icon: lightning\n      }\n    };\n  }\n}",
      ...TextWithIcon.parameters?.docs?.source
    }
  }
};

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Checkbox/Checkbox.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Checkbox: () => (/* binding */ Checkbox),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Checkbox/Checkbox.js");
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
  title: 'Components/Checkboxes/Checkbox'
});
const Checkbox = () => class Checkbox extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Checkbox: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A
      }
    };
  }
};
Checkbox.args = {
  checked: false,
  mode: 'focused'
};
Checkbox.argTypes = {
  ...(0,_docs_utils__WEBPACK_IMPORTED_MODULE_2__/* .createModeControl */ .Pg)({
    summaryValue: 'focused'
  }),
  checked: {
    control: 'boolean',
    description: 'Toggles checked between on and off',
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
};
;
const __namedExportsOrder = ["Checkbox"];
Checkbox.parameters = {
  ...Checkbox.parameters,
  docs: {
    ...Checkbox.parameters?.docs,
    source: {
      originalSource: "() => class Checkbox extends lng.Component {\n  static _template() {\n    return {\n      Checkbox: {\n        type: CheckboxComponent\n      }\n    };\n  }\n}",
      ...Checkbox.parameters?.docs?.source
    }
  }
};

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Label/Label.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Label: () => (/* binding */ Label),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Label/Label.js");
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
  title: 'Components/Label'
});
const Label = () => class Label extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Label: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A
      }
    };
  }
};
Label.args = {
  title: 'Label'
};
Label.argTypes = {
  title: {
    control: 'text',
    description: 'Text to display in the foreground of the label',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  }
};
;
const __namedExportsOrder = ["Label"];
Label.parameters = {
  ...Label.parameters,
  docs: {
    ...Label.parameters?.docs,
    source: {
      originalSource: "() => class Label extends lng.Component {\n  static _template() {\n    return {\n      Label: {\n        type: LabelComponent\n      }\n    };\n  }\n}",
      ...Label.parameters?.docs?.source
    }
  }
};

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/MetadataTile/MetadataTile.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataTile: () => (/* binding */ MetadataTile),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png");
/* harmony import */ var _assets_images_circle_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/circle.svg");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
/* harmony import */ var _docs_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/MetadataTile/MetadataTile.js");
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
  title: 'Components/MetadataTile'
});
const MetadataTile = args => class MetadataTile extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      MetadataTile: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        w: args.w,
        title: args.title,
        details: args.details,
        description: args.description,
        logo: args.logo !== 'none' ? _assets_images_circle_svg__WEBPACK_IMPORTED_MODULE_2__ : null,
        logoTitle: args.logo !== 'none' ? args.logoTitle : null,
        logoPosition: args.logoPosition
      }
    };
  }
  _getFocused() {
    return this.tag('MetadataTile');
  }
};
MetadataTile.storyName = 'MetadataTile';
MetadataTile.args = {
  w: 400,
  title: 'Title',
  details: ['94%', {
    icon: _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_3__,
    style: {
      color: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getHexColor */ .H2)('00ff00')
    },
    title: 'Green Lightning Bolt'
  }, '86%', {
    icon: 'http://myriad.merlin.comcast.com/select/logo?entityId=8527084350383982239&width=32&height=&ratio=1x1&trim=false',
    title: 'Rotten Tomatoes rating'
  }],
  description: 'Description',
  logo: _assets_images_circle_svg__WEBPACK_IMPORTED_MODULE_2__,
  logoTitle: 'Logo title',
  logoPosition: 'right',
  mode: 'unfocused'
};
MetadataTile.argTypes = {
  ...(0,_docs_utils__WEBPACK_IMPORTED_MODULE_5__/* .createModeControl */ .Pg)({
    summaryValue: MetadataTile.args.mode
  }),
  w: {
    control: 'number',
    description: 'Width of component',
    table: {
      defaultValue: {
        summary: 0
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
  },
  details: {
    control: 'object',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  description: {
    control: 'text',
    description: 'description text',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  logo: {
    control: 'select',
    options: ['none', _assets_images_circle_svg__WEBPACK_IMPORTED_MODULE_2__],
    description: 'Image to use for logo',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  logoTitle: {
    control: 'text',
    description: 'Title to use for logo in announcer',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  logoPosition: {
    control: 'select',
    options: ['right', 'left'],
    description: 'Position logo on the left/right side',
    table: {
      defaultValue: {
        summary: 'right'
      }
    }
  }
};
;
const __namedExportsOrder = ["MetadataTile"];
MetadataTile.parameters = {
  ...MetadataTile.parameters,
  docs: {
    ...MetadataTile.parameters?.docs,
    source: {
      originalSource: "args => class MetadataTile extends lng.Component {\n  static _template() {\n    return {\n      MetadataTile: {\n        type: MetadataTileComponent,\n        w: args.w,\n        title: args.title,\n        details: args.details,\n        description: args.description,\n        logo: args.logo !== 'none' ? circle : null,\n        logoTitle: args.logo !== 'none' ? args.logoTitle : null,\n        logoPosition: args.logoPosition\n      }\n    };\n  }\n  _getFocused() {\n    return this.tag('MetadataTile');\n  }\n}",
      ...MetadataTile.parameters?.docs?.source
    }
  }
};

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/ProgressBar/ProgressBar.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgressBar: () => (/* binding */ ProgressBar),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/ProgressBar/ProgressBar.js");
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
  title: 'Components/ProgressBar',
  parameters: {
    tag: 'ProgressBar',
    actions: {
      handles: ['mouseover', 'click .btn']
    }
  }
});
const ProgressBar = () => class ProgressBar extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      ProgressBar: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A
      }
    };
  }
};
ProgressBar.storyName = 'ProgressBar';
ProgressBar.args = {
  progress: 0.5,
  w: 410
};
ProgressBar.argTypes = {
  progress: {
    control: {
      type: 'range',
      min: 0,
      max: 1,
      step: 0.01
    },
    description: 'Percentage of the current progress from 0 to 1',
    table: {
      defaultValue: {
        summary: 0
      }
    }
  },
  w: {
    control: {
      type: 'range',
      min: 0,
      max: 600,
      step: 0.01
    },
    description: 'width of the entire bar',
    table: {
      defaultValue: {
        summary: 0
      }
    }
  }
};
;
const __namedExportsOrder = ["ProgressBar"];
ProgressBar.parameters = {
  ...ProgressBar.parameters,
  docs: {
    ...ProgressBar.parameters?.docs,
    source: {
      originalSource: "() => class ProgressBar extends lng.Component {\n  static _template() {\n    return {\n      ProgressBar: {\n        type: ProgressBarComponent\n      }\n    };\n  }\n}",
      ...ProgressBar.parameters?.docs?.source
    }
  }
};

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Tile/Tile.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tile: () => (/* binding */ Tile),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Tile/Tile.js");
/* harmony import */ var _docs_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
/* harmony import */ var _Artwork_Artwork_stories__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Artwork/Artwork.stories.js");
/* harmony import */ var _Checkbox_Checkbox_stories__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Checkbox/Checkbox.stories.js");
/* harmony import */ var _MetadataTile_MetadataTile_stories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/components/MetadataTile/MetadataTile.stories.js");
/* harmony import */ var _mixins_withLayout_withLayout_stories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../@lightningjs/ui-components/src/mixins/withLayout/withLayout.stories.js");
/* harmony import */ var _Label_Label_stories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Label/Label.stories.js");
/* harmony import */ var _ProgressBar_ProgressBar_stories__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../@lightningjs/ui-components/src/components/ProgressBar/ProgressBar.stories.js");
/* harmony import */ var _Badge_Badge_stories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Badge/Badge.stories.js");
/* harmony import */ var _assets_images_Xfinity_Provider_Logo_2x1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/Xfinity-Provider-Logo-2x1.png");
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
  title: 'Components/Tile'
});
const Tile = () => class Tile extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Tile: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        itemLayout: {
          ratioX: 16,
          ratioY: 9,
          upCount: 3
        },
        artwork: {
          src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg'
        }
      }
    };
  }
};
Tile.args = {
  metadataLocation: 'standard',
  logo: _assets_images_Xfinity_Provider_Logo_2x1_png__WEBPACK_IMPORTED_MODULE_2__,
  persistentMetadata: false,
  mode: 'focused'
};
Tile.argTypes = {
  ...(0,_docs_utils__WEBPACK_IMPORTED_MODULE_3__/* .createModeControl */ .Pg)({
    summaryValue: Tile.args.mode
  }),
  persistentMetadata: {
    control: 'boolean',
    description: 'Show metadata if exists regardless of focusState',
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  metadataLocation: {
    control: 'radio',
    options: ['standard', 'inset'],
    description: 'Controls where metadata is positioned in relationship to the Tile',
    table: {
      defaultValue: {
        summary: 'standard'
      }
    }
  },
  logo: {
    control: 'select',
    options: [_assets_images_Xfinity_Provider_Logo_2x1_png__WEBPACK_IMPORTED_MODULE_2__, null],
    description: 'Icon source',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  }
};
(0,_docs_utils__WEBPACK_IMPORTED_MODULE_3__/* .generateSubStory */ .jb)({
  componentName: 'Tile',
  baseStory: Tile,
  subStory: _MetadataTile_MetadataTile_stories__WEBPACK_IMPORTED_MODULE_4__.MetadataTile,
  targetProperty: 'metadata',
  include: ['title', 'description']
});
(0,_docs_utils__WEBPACK_IMPORTED_MODULE_3__/* .generateSubStory */ .jb)({
  componentName: 'Tile',
  baseStory: Tile,
  subStory: _mixins_withLayout_withLayout_stories__WEBPACK_IMPORTED_MODULE_5__.withLayout,
  targetProperty: 'itemLayout',
  include: ['ratioX', 'ratioY', 'upCount', 'circle']
});
(0,_docs_utils__WEBPACK_IMPORTED_MODULE_3__/* .generateSubStory */ .jb)({
  componentName: 'Tile',
  baseStory: Tile,
  subStory: _Badge_Badge_stories__WEBPACK_IMPORTED_MODULE_6__.Text,
  targetProperty: 'badge',
  include: ['title']
});
(0,_docs_utils__WEBPACK_IMPORTED_MODULE_3__/* .generateSubStory */ .jb)({
  componentName: 'Tile',
  baseStory: Tile,
  subStory: _Label_Label_stories__WEBPACK_IMPORTED_MODULE_7__.Label,
  targetProperty: 'label',
  include: ['title']
});
(0,_docs_utils__WEBPACK_IMPORTED_MODULE_3__/* .generateSubStory */ .jb)({
  componentName: 'Tile',
  baseStory: Tile,
  subStory: _Artwork_Artwork_stories__WEBPACK_IMPORTED_MODULE_8__.Artwork,
  targetProperty: 'artwork',
  include: ['blur', 'foregroundSrc', 'format', 'fill']
});
(0,_docs_utils__WEBPACK_IMPORTED_MODULE_3__/* .generateSubStory */ .jb)({
  componentName: 'Tile',
  baseStory: Tile,
  subStory: _ProgressBar_ProgressBar_stories__WEBPACK_IMPORTED_MODULE_9__.ProgressBar,
  targetProperty: 'progressBar',
  include: ['progress']
});
(0,_docs_utils__WEBPACK_IMPORTED_MODULE_3__/* .generateSubStory */ .jb)({
  componentName: 'Tile',
  baseStory: Tile,
  subStory: _Checkbox_Checkbox_stories__WEBPACK_IMPORTED_MODULE_10__.Checkbox,
  targetProperty: 'checkbox',
  include: ['checked']
});
;
const __namedExportsOrder = ["Tile"];
Tile.parameters = {
  ...Tile.parameters,
  docs: {
    ...Tile.parameters?.docs,
    source: {
      originalSource: "() => class Tile extends lng.Component {\n  static _template() {\n    return {\n      Tile: {\n        type: TileComponent,\n        itemLayout: {\n          ratioX: 16,\n          ratioY: 9,\n          upCount: 3\n        },\n        artwork: {\n          src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg'\n        }\n      }\n    };\n  }\n}",
      ...Tile.parameters?.docs?.source
    }
  }
};

/***/ }),

/***/ "../../@lightningjs/ui-components/src/mixins/withLayout/withLayout.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   withLayout: () => (/* binding */ withLayout)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _components_Tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Tile/Tile.js");
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
  title: 'Utilities/withLayout'
});
const withLayout = () => {
  return class withLayout extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
    static _template() {
      return {
        Item: {
          type: _components_Tile__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
          artwork: {
            src: 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg',
            mode: 'contain'
          }
        }
      };
    }
  };
};
withLayout.storyName = 'withLayout';
withLayout.args = {
  ratioX: 16,
  ratioY: 9,
  upCount: 3,
  circle: false
};
withLayout.argTypes = {
  ratioX: {
    control: {
      type: 'number',
      min: 0
    },
    description: 'The units of x resolution relative to the screen height',
    table: {
      defaultValue: {
        summary: 0
      }
    }
  },
  ratioY: {
    control: {
      type: 'number',
      min: 0
    },
    description: 'The units of y resolution relative to the screen width',
    table: {
      defaultValue: {
        summary: 0
      }
    }
  },
  upCount: {
    control: {
      type: 'number',
      min: 0
    },
    description: 'The number of items that should be displayed within screen bounds',
    table: {
      defaultValue: {
        summary: 0
      }
    }
  },
  circle: {
    control: 'boolean',
    description: 'Boolean changing format to circle if true',
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
};
withLayout.parameters = {
  argActions: Object.keys(withLayout.args).reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: (val, component) => {
        component.tag('Item').itemLayout = {
          ...component.tag('Item').itemLayout,
          [curr]: val
        };
      }
    };
  }, {})
};
;
const __namedExportsOrder = ["withLayout"];
withLayout.parameters = {
  ...withLayout.parameters,
  docs: {
    ...withLayout.parameters?.docs,
    source: {
      originalSource: "() => {\n  return class withLayout extends lng.Component {\n    static _template() {\n      return {\n        Item: {\n          type: Tile,\n          artwork: {\n            src: 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg',\n            mode: 'contain'\n          }\n        }\n      };\n    }\n  };\n}",
      ...withLayout.parameters?.docs?.source
    }
  }
};

/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/Xfinity-Provider-Logo-2x1.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/Xfinity-Provider-Logo-2x1.257f7e9d.png";

/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/circle.svg":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/circle.6029db37.svg";

/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/ic_lightning_white_32.06aecfeb.png";

/***/ })

}]);
//# sourceMappingURL=components-Tile-Tile-stories.54e9a9bd.iframe.bundle.js.map