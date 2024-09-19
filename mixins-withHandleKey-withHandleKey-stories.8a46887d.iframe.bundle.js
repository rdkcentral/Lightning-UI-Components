"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[4637],{

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

/***/ "../../@lightningjs/ui-components/src/mixins/withHandleKey/withHandleKey.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   withHandleKey: () => (/* binding */ withHandleKey)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _components_Tile_Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Tile/Tile.js");
/* harmony import */ var _components_Row_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Row/Row.js");
/* harmony import */ var _globals_context_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/mixins/withHandleKey/index.js");
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






_globals_context_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.config({
  // Inspect console to see - should only be called when pressing enter on first tile.
  keyMetricsCallback: (key, p) => {
    // eslint-disable-next-line
    console.log('Metrics payload received', key, p);
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Utilities/withHandleKey'
});
const withHandleKey = args => {
  class withHandleKey extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
    static _template() {
      return {
        x: 60,
        y: 60,
        Row: {
          type: _components_Row_Row__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
          itemSpacing: 60,
          items: [{
            type: _components_Tile_Tile__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
            src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',
            w: 320,
            h: 180,
            onEnter: args.onEnter,
            metricsPayload: {
              buttonName: 'enter button',
              uniqueId: 1
            }
          }, {
            type: _components_Tile_Tile__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
            src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',
            w: 320,
            h: 180,
            onArrowDown: args.onArrowDown,
            metricsPayload: {
              buttonName: 'arrow down button',
              uniqueId: 2
            }
          }, {
            type: _components_Tile_Tile__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
            src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',
            w: 320,
            h: 180,
            onArrowUp: args.onArrowUp,
            metricsPayload: {
              buttonName: 'arrow up button',
              uniqueId: 3
            }
          }, {
            type: _components_Tile_Tile__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
            src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',
            w: 320,
            h: 180,
            onArrowRight: args.onArrowRight,
            metricsPayload: {
              buttonName: 'arrow right button',
              uniqueId: 4
            }
          }]
        }
      };
    }
    // eslint-disable-next-line no-unused-vars
    $onEnter(keyEvent, tile) {
      args.onEnter();
    }
  }
  return (0,___WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(withHandleKey);
};
withHandleKey.storyName = 'withHandleKey';
withHandleKey.args = {};
withHandleKey.argTypes = {};
;
const __namedExportsOrder = ["withHandleKey"];
withHandleKey.parameters = {
  ...withHandleKey.parameters,
  docs: {
    ...withHandleKey.parameters?.docs,
    source: {
      originalSource: "args => {\n  class withHandleKey extends lng.Component {\n    static _template() {\n      return {\n        x: 60,\n        y: 60,\n        Row: {\n          type: Row,\n          itemSpacing: 60,\n          items: [{\n            type: Tile,\n            src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',\n            w: 320,\n            h: 180,\n            onEnter: args.onEnter,\n            metricsPayload: {\n              buttonName: 'enter button',\n              uniqueId: 1\n            }\n          }, {\n            type: Tile,\n            src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',\n            w: 320,\n            h: 180,\n            onArrowDown: args.onArrowDown,\n            metricsPayload: {\n              buttonName: 'arrow down button',\n              uniqueId: 2\n            }\n          }, {\n            type: Tile,\n            src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',\n            w: 320,\n            h: 180,\n            onArrowUp: args.onArrowUp,\n            metricsPayload: {\n              buttonName: 'arrow up button',\n              uniqueId: 3\n            }\n          }, {\n            type: Tile,\n            src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',\n            w: 320,\n            h: 180,\n            onArrowRight: args.onArrowRight,\n            metricsPayload: {\n              buttonName: 'arrow right button',\n              uniqueId: 4\n            }\n          }]\n        }\n      };\n    }\n    // eslint-disable-next-line no-unused-vars\n    $onEnter(keyEvent, tile) {\n      args.onEnter();\n    }\n  }\n  return withHandleKeyMixin(withHandleKey);\n}",
      ...withHandleKey.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=mixins-withHandleKey-withHandleKey-stories.8a46887d.iframe.bundle.js.map