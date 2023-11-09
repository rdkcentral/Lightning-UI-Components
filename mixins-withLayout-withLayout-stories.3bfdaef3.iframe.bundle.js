"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[5964],{

/***/ "../../@lightningjs/ui-components/src/mixins/withLayout/withLayout.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   withLayout: () => (/* binding */ withLayout)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Tile/Tile.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _withLayout$parameter, _withLayout$parameter2;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
/* eslint-disable */
// @ts-nocheck
// @ts-expect-error (Converted from ts-ignore)
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { Tile } from '../../components';\n\nexport default {\n  title: 'Utilities/withLayout'\n};\n\nexport const withLayout = () => {\n  return class withLayout extends lng.Component {\n    static _template() {\n      return {\n        Item: {\n          type: Tile,\n          artwork: {\n            src: 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg',\n            mode: 'contain'\n          }\n        }\n      };\n    }\n  };\n};\n\nwithLayout.storyName = 'withLayout';\n\nwithLayout.args = {\n  ratioX: 16,\n  ratioY: 9,\n  upCount: 3,\n  circle: false\n};\n\nwithLayout.argTypes = {\n  ratioX: {\n    control: { type: 'number', min: 0 },\n    description: 'The units of x resolution relative to the screen height',\n    table: { defaultValue: { summary: 0 } }\n  },\n  ratioY: {\n    control: { type: 'number', min: 0 },\n    description: 'The units of y resolution relative to the screen width',\n    table: { defaultValue: { summary: 0 } }\n  },\n  upCount: {\n    control: { type: 'number', min: 0 },\n    description:\n      'The number of items that should be displayed within screen bounds',\n    table: { defaultValue: { summary: 0 } }\n  },\n  circle: {\n    control: 'boolean',\n    description: 'Boolean changing format to circle if true',\n    table: { defaultValue: { summary: false } }\n  }\n};\n\nwithLayout.parameters = {\n  argActions: Object.keys(withLayout.args).reduce((acc, curr) => {\n    return {\n      ...acc,\n      [curr]: (val, component) => {\n        component.tag('Item').itemLayout = {\n          ...component.tag('Item').itemLayout,\n          [curr]: val\n        };\n      }\n    };\n  }, {})\n};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "withLayout": {
    "startLoc": {
      "col": 26,
      "line": 24
    },
    "endLoc": {
      "col": 1,
      "line": 38
    },
    "startBody": {
      "col": 26,
      "line": 24
    },
    "endBody": {
      "col": 1,
      "line": 38
    }
  }
};

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
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { Tile } from '../../components';\nexport default {\n  title: 'Utilities/withLayout'\n};\nexport const withLayout = () => {\n  return class withLayout extends lng.Component {\n    static _template() {\n      return {\n        Item: {\n          type: Tile,\n          artwork: {\n            src: 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg',\n            mode: 'contain'\n          }\n        }\n      };\n    }\n  };\n};\nwithLayout.storyName = 'withLayout';\nwithLayout.args = {\n  ratioX: 16,\n  ratioY: 9,\n  upCount: 3,\n  circle: false\n};\nwithLayout.argTypes = {\n  ratioX: {\n    control: {\n      type: 'number',\n      min: 0\n    },\n    description: 'The units of x resolution relative to the screen height',\n    table: {\n      defaultValue: {\n        summary: 0\n      }\n    }\n  },\n  ratioY: {\n    control: {\n      type: 'number',\n      min: 0\n    },\n    description: 'The units of y resolution relative to the screen width',\n    table: {\n      defaultValue: {\n        summary: 0\n      }\n    }\n  },\n  upCount: {\n    control: {\n      type: 'number',\n      min: 0\n    },\n    description: 'The number of items that should be displayed within screen bounds',\n    table: {\n      defaultValue: {\n        summary: 0\n      }\n    }\n  },\n  circle: {\n    control: 'boolean',\n    description: 'Boolean changing format to circle if true',\n    table: {\n      defaultValue: {\n        summary: false\n      }\n    }\n  }\n};\nwithLayout.parameters = {\n  argActions: Object.keys(withLayout.args).reduce((acc, curr) => {\n    return {\n      ...acc,\n      [curr]: (val, component) => {\n        component.tag('Item').itemLayout = {\n          ...component.tag('Item').itemLayout,\n          [curr]: val\n        };\n      }\n    };\n  }, {})\n};\nwithLayout.parameters = {\n  ...withLayout.parameters,\n  docs: {\n    ...withLayout.parameters?.docs,\n    source: {\n      originalSource: \"() => {\\n  return class withLayout extends lng.Component {\\n    static _template() {\\n      return {\\n        Item: {\\n          type: Tile,\\n          artwork: {\\n            src: 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg',\\n            mode: 'contain'\\n          }\\n        }\\n      };\\n    }\\n  };\\n}\",\n      ...withLayout.parameters?.docs?.source\n    }\n  }\n};",
      "locationsMap": {
        "with-layout": {
          "startLoc": {
            "col": 26,
            "line": 24
          },
          "endLoc": {
            "col": 1,
            "line": 38
          },
          "startBody": {
            "col": 26,
            "line": 24
          },
          "endBody": {
            "col": 1,
            "line": 38
          }
        }
      }
    }
  },
  title: 'Utilities/withLayout'
});
var withLayout = function withLayout() {
  return /*#__PURE__*/function (_lng$Component) {
    _inherits(withLayout, _lng$Component);
    var _super = _createSuper(withLayout);
    function withLayout() {
      _classCallCheck(this, withLayout);
      return _super.apply(this, arguments);
    }
    _createClass(withLayout, null, [{
      key: "_template",
      value: function _template() {
        return {
          Item: {
            type: _components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
            artwork: {
              src: 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg',
              mode: 'contain'
            }
          }
        };
      }
    }]);
    return withLayout;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
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
  argActions: Object.keys(withLayout.args).reduce(function (acc, curr) {
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, curr, function (val, component) {
      component.tag('Item').itemLayout = _objectSpread(_objectSpread({}, component.tag('Item').itemLayout), {}, _defineProperty({}, curr, val));
    }));
  }, {})
};
withLayout.parameters = _objectSpread(_objectSpread({}, withLayout.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_withLayout$parameter = withLayout.parameters) === null || _withLayout$parameter === void 0 ? void 0 : _withLayout$parameter.docs), {}, {
    source: _objectSpread({
      originalSource: "() => {\n  return class withLayout extends lng.Component {\n    static _template() {\n      return {\n        Item: {\n          type: Tile,\n          artwork: {\n            src: 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg',\n            mode: 'contain'\n          }\n        }\n      };\n    }\n  };\n}"
    }, (_withLayout$parameter2 = withLayout.parameters) === null || _withLayout$parameter2 === void 0 || (_withLayout$parameter2 = _withLayout$parameter2.docs) === null || _withLayout$parameter2 === void 0 ? void 0 : _withLayout$parameter2.source)
  })
});
var __namedExportsOrder = ["withLayout"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Surface/Surface.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Surface)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Surface/Surface.styles.js
var Surface_styles_namespaceObject = {};
__webpack_require__.r(Surface_styles_namespaceObject);
__webpack_require__.d(Surface_styles_namespaceObject, {
  base: () => (base),
  mode: () => (mode),
  tone: () => (tone)
});

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




var Surface = /*#__PURE__*/function (_Base) {
  _inherits(Surface, _Base);
  var _super = _createSuper(Surface);
  function Surface() {
    _classCallCheck(this, Surface);
    return _super.apply(this, arguments);
  }
  _createClass(Surface, [{
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
        texture: lightning_esm/* default */.Z.Tools.getRoundRect(this.innerW - 2,
        // Reference the underscored values here in cause the h or w getters need to be overwritten for alignment - see Tile
        this.innerH - 2, this.style.radius, 0, null, true, this.style.backgroundColor)
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
  return Surface;
}(Base/* default */.Z);


/***/ })

}]);
//# sourceMappingURL=mixins-withLayout-withLayout-stories.3bfdaef3.iframe.bundle.js.map