"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[11],{

/***/ "../../@lightningjs/ui-components/src/components/CardContent/CardContent.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CardContent)
/* harmony export */ });
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Card/Card.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Tile/Tile.js");
/* harmony import */ var _MetadataCardContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/MetadataCardContent/MetadataCardContent.js");
/* harmony import */ var _CardContent_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/components/CardContent/CardContent.styles.js");
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






var CardContent = /*#__PURE__*/function (_Card) {
  function CardContent() {
    _classCallCheck(this, CardContent);
    return _callSuper(this, CardContent, arguments);
  }
  _inherits(CardContent, _Card);
  return _createClass(CardContent, [{
    key: "_update",
    value: function _update() {
      this._updateSize();
      this._updateTile();
      this._updateMetadata();
      _superPropGet(CardContent, "_update", this, 3)([]);
    }
  }, {
    key: "_updateTitle",
    value: function _updateTitle() {}
  }, {
    key: "_updateTitlePosition",
    value: function _updateTitlePosition() {}
  }, {
    key: "_updateTile",
    value: function _updateTile() {
      var _tile;
      var w = this.style.imageSize.w;
      var h = this.style.expandedHeight;
      var radius = Array.isArray(this.style.radius) && this.style.radius.length === 4 ? this.style.radius : Array(4).fill(this.style.radius);
      var tileRadius = radius;
      if (!this._collapse) {
        tileRadius = this._orientation === 'horizontal' ? [radius[0], 0, 0, radius[3]] : [radius[0], radius[1], 0, 0];
      }
      if (this._orientation !== 'horizontal') {
        w = this.style.expandedWidth;
        h = this.style.imageSize.h;
      }

      // ensure a nested tile artwork src takes precedence over the class's src setter,
      // but that if src is undefined in both the setter and tile artwork object,
      // we don't incorrectly pass "src: undefined" to the Tile component (and in turn, Artwork)
      var tile = this.tile;
      if (this.src) {
        tile = _utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"].clone */ .Ay.clone({
          src: this.src
        }, this.tile);
      }
      this._Tile.patch(_objectSpread(_objectSpread({
        w: w,
        h: h
      }, tile), {}, {
        style: _objectSpread(_objectSpread({}, ((_tile = tile) === null || _tile === void 0 ? void 0 : _tile.style) || {}), {}, {
          radius: tileRadius
        }),
        persistentMetadata: true,
        alpha: this._shouldShowTile ? 1 : 0
      }));
    }
  }, {
    key: "_updateMetadata",
    value: function _updateMetadata() {
      var metadataPatch = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.metadata), this._metadataPosition), this._metadataDimensions), {}, {
        mode: this.mode,
        alpha: this._shouldShowMetadata ? 1 : 0,
        style: this.style.metadata
      });
      if (this.style.marqueeOnFocus) {
        metadataPatch.marquee = this._isFocusedMode;
      }
      if (!this._Metadata) {
        metadataPatch.type = _MetadataCardContent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A;
      }
      this.patch({
        Metadata: metadataPatch
      });
    }
  }, {
    key: "_updateSize",
    value: function _updateSize() {
      var w = this.style.expandedWidth;
      var h = this.style.expandedHeight;
      if (this._collapse) {
        if (this._orientation === 'horizontal') {
          w = this._collapseW;
        } else {
          h = this._collapseH;
        }
      }
      this.w = w;
      this.h = h;
    }
  }, {
    key: "_getSrc",
    value: function _getSrc() {
      return this.tile && (this.tile.artwork && this.tile.artwork.src || this.tile.src) || this._src;
    }
  }, {
    key: "_metadataDimensions",
    get: function get() {
      var paddingHorizontal = this.style.paddingHorizontal * 2;
      var paddingVertical = this.style.paddingVertical * 2;
      var w = this.style.expandedWidth - this.style.imageSize.w - paddingHorizontal;
      var h = this.style.expandedHeight - paddingVertical;
      if (this.orientation !== 'horizontal') {
        w = this.style.expandedWidth - paddingHorizontal;
        h = this.style.expandedHeight - this.style.imageSize.h - paddingVertical;
      }
      return {
        w: w,
        h: h
      };
    }
  }, {
    key: "_metadataPosition",
    get: function get() {
      var paddingHorizontal = this.style.paddingHorizontal;
      var paddingVertical = this.style.paddingVertical;
      var x = paddingHorizontal + (this._collapse ? 0 : this.style.imageSize.w);
      var y = paddingVertical;
      if (this.orientation !== 'horizontal') {
        x = paddingHorizontal;
        y = paddingVertical + (this._collapse ? 0 : this.style.imageSize.h);
      }
      return {
        x: x,
        y: y
      };
    }
  }, {
    key: "_shouldShowMetadata",
    get: function get() {
      return !this._collapse || this.collapseToMetadata;
    }
  }, {
    key: "_shouldShowTile",
    get: function get() {
      return !this._collapse || this._collapse && !this.collapseToMetadata;
    }
  }, {
    key: "_collapse",
    get: function get() {
      return this.shouldCollapse && !this._isFocusedMode;
    }
  }, {
    key: "_collapseW",
    get: function get() {
      return this.collapseToMetadata ? this.style.expandedWidth - this.style.imageSize.w : this.style.imageSize.w;
    }
  }, {
    key: "_collapseH",
    get: function get() {
      return this.collapseToMetadata ? this.style.expandedHeight - this.style.imageSize.h : this.style.imageSize.h;
    }
  }, {
    key: "announce",
    get: function get() {
      return this._announce || [this._Metadata && this._Metadata.announce, this._Tile && this._Tile.announce];
    },
    set: function set(announce) {
      _superPropSet(CardContent, "announce", announce, this, 1, 1);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'CardContent';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return _CardContent_styles__WEBPACK_IMPORTED_MODULE_2__;
    }
  }, {
    key: "_template",
    value: function _template() {
      return _objectSpread(_objectSpread({}, _superPropGet(CardContent, "_template", this, 2)([])), {}, {
        Tile: {
          type: _Tile__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A
        }
      });
    }
  }, {
    key: "properties",
    get: function get() {
      return [].concat(_toConsumableArray(_superPropGet(CardContent, "properties", this)), ['tile', 'metadata', 'orientation', 'collapseToMetadata', 'shouldCollapse', 'src']);
    }
  }, {
    key: "tags",
    get: function get() {
      return [].concat(_toConsumableArray(_superPropGet(CardContent, "tags", this)), ['Metadata', 'Tile']);
    }
  }, {
    key: "aliasStyles",
    get: function get() {
      return [{
        prev: 'expandedW',
        curr: 'expandedWidth'
      }, {
        prev: 'expandedH',
        curr: 'expandedHeight'
      }];
    }
  }]);
}(_Card__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/CardContent/CardContent.styles.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   base: () => (/* binding */ base)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
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
    expandedWidth: _utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getWidthByUpCount */ .Ay.getWidthByUpCount(theme, 2),
    expandedHeight: _utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getDimensions */ .Ay.getDimensions(theme, {
      ratioX: 16,
      ratioY: 9,
      upCount: 4
    }).h,
    imageSize: {
      width: _utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getDimensions */ .Ay.getDimensions(theme, {
        ratioX: 16,
        ratioY: 9,
        upCount: 4
      }).w,
      height: _utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getDimensions */ .Ay.getDimensions(theme, {
        ratioX: 16,
        ratioY: 9,
        upCount: 4
      }).h
    },
    metadata: {
      descriptionTextStyle: {
        maxLines: 2
      }
    },
    paddingVertical: theme.spacer.md * 1.5
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

/***/ "../../@lightningjs/ui-components/src/components/CardContent/CardContent.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardContent: () => (/* binding */ CardContent),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _assets_images_tile_image_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/tile-image.png");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/CardContent/CardContent.js");
/* harmony import */ var _MetadataCardContent_MetadataCardContent_stories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../@lightningjs/ui-components/src/components/MetadataCardContent/MetadataCardContent.stories.js");
/* harmony import */ var _docs_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
/* harmony import */ var _docs_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/constants.js");
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
 * Formats a Card with one part Tile and one part Metadata.
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Components/CardContent/CardContent',
  parameters: {
    docs: {
      description: {
        component: "Formats a Card with one part Tile and one part Metadata."
      }
    }
  }
});
const CardContent = args => class CardContent extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      CardContent: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        src: _assets_images_tile_image_png__WEBPACK_IMPORTED_MODULE_2__,
        shouldCollapse: args.shouldCollapse,
        orientation: 'horizontal'
      }
    };
  }
};
const tileCategory = 'Tile';
CardContent.tileProps = {
  argActions: tagName => ({
    badge: (badgeTitle, component) => {
      component.tag(tagName).tile = {
        ...component.tag(tagName).tile,
        badge: {
          title: badgeTitle
        }
      };
    },
    label: (labelTitle, component) => {
      component.tag(tagName).tile = {
        ...component.tag(tagName).tile,
        label: {
          title: labelTitle,
          table: {
            defaultValue: {
              summary: 'undefined'
            }
          }
        }
      };
    },
    progress: (progress, component) => {
      component.tag(tagName).tile = {
        ...component.tag(tagName).tile,
        progressBar: {
          progress
        }
      };
    }
  })
};
CardContent.storyName = 'CardContent';
CardContent.args = {
  shouldCollapse: false,
  badge: 'HD',
  label: 'Live',
  progress: 0.5,
  mode: 'focused'
};
CardContent.argTypes = {
  ...(0,_docs_utils__WEBPACK_IMPORTED_MODULE_3__/* .createModeControl */ .Pg)({
    summaryValue: CardContent.args.mode
  }),
  shouldCollapse: {
    control: 'boolean',
    description: _docs_constants__WEBPACK_IMPORTED_MODULE_4__/* .controlDescriptions */ .Hx.shouldCollapse,
    table: {
      defaultValue: {
        summary: false
      },
      type: {
        summary: 'boolean'
      }
    }
  },
  badge: {
    name: 'title',
    control: 'text',
    description: 'Badge text',
    table: {
      category: tileCategory,
      subcategory: 'Badge',
      defaultValue: {
        summary: 'undefined'
      },
      type: {
        summary: 'string'
      }
    }
  },
  label: {
    name: 'title',
    control: 'text',
    description: 'Text to display in the foreground of the label',
    table: {
      category: tileCategory,
      subcategory: 'Label',
      defaultValue: {
        summary: 'undefined'
      },
      type: {
        summary: 'string'
      }
    }
  },
  progress: {
    control: {
      type: 'range',
      min: 0,
      max: 1,
      step: 0.01
    },
    description: 'percentage of the current progress from 0 to 1',
    table: {
      category: tileCategory,
      subcategory: 'ProgressBar',
      defaultValue: {
        summary: 0
      },
      type: {
        summary: 'number'
      }
    }
  }
};
CardContent.parameters = {
  argActions: CardContent.tileProps.argActions('CardContent')
};
(0,_docs_utils__WEBPACK_IMPORTED_MODULE_3__/* .generateSubStory */ .jb)({
  componentName: 'CardContent',
  baseStory: CardContent,
  subStory: _MetadataCardContent_MetadataCardContent_stories__WEBPACK_IMPORTED_MODULE_5__.MetadataCardContent,
  targetProperty: 'metadata',
  include: ['title', 'description', 'details', 'visible']
});
;
const __namedExportsOrder = ["CardContent"];
CardContent.parameters = {
  ...CardContent.parameters,
  docs: {
    ...CardContent.parameters?.docs,
    source: {
      originalSource: "args => class CardContent extends lng.Component {\n  static _template() {\n    return {\n      CardContent: {\n        type: CardContentComponent,\n        src: tileImage,\n        shouldCollapse: args.shouldCollapse,\n        orientation: 'horizontal'\n      }\n    };\n  }\n}",
      ...CardContent.parameters?.docs?.source
    }
  }
};

/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/tile-image.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/tile-image.56dce1e0.png";

/***/ })

}]);
//# sourceMappingURL=components-CardContent-CardContent-stories.7340d708.iframe.bundle.js.map