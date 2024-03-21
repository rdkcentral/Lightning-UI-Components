"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[6468],{

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
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
/* eslint-disable */
// @ts-nocheck
// @ts-expect-error (Converted from ts-ignore)
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport Tile from '../../components/Tile/Tile';\nimport Row from '../../components/Row/Row';\nimport context from '../../globals/context/index';\nimport withHandleKeyMixin from '.';\n\ncontext.config({\n  // Inspect console to see - should only be called when pressing enter on first tile.\n  keyMetricsCallback: (key, p) => {\n    // eslint-disable-next-line\n    console.log('Metrics payload received', key, p);\n  }\n});\n\nexport default {\n  title: 'Utilities/withHandleKey'\n};\n\nexport const withHandleKey = args => {\n  class withHandleKey extends lng.Component {\n    static _template() {\n      return {\n        x: 60,\n        y: 60,\n        Row: {\n          type: Row,\n          itemSpacing: 60,\n          items: [\n            {\n              type: Tile,\n              src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',\n              w: 320,\n              h: 180,\n              onEnter: args.onEnter,\n              metricsPayload: {\n                buttonName: 'enter button',\n                uniqueId: 1\n              }\n            },\n            {\n              type: Tile,\n              src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',\n              w: 320,\n              h: 180,\n              onArrowDown: args.onArrowDown,\n              metricsPayload: {\n                buttonName: 'arrow down button',\n                uniqueId: 2\n              }\n            },\n            {\n              type: Tile,\n              src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',\n              w: 320,\n              h: 180,\n              onArrowUp: args.onArrowUp,\n              metricsPayload: {\n                buttonName: 'arrow up button',\n                uniqueId: 3\n              }\n            },\n            {\n              type: Tile,\n              src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',\n              w: 320,\n              h: 180,\n              onArrowRight: args.onArrowRight,\n              metricsPayload: {\n                buttonName: 'arrow right button',\n                uniqueId: 4\n              }\n            }\n          ]\n        }\n      };\n    }\n    // eslint-disable-next-line no-unused-vars\n    $onEnter(keyEvent, tile) {\n      args.onEnter();\n    }\n  }\n  return withHandleKeyMixin(withHandleKey);\n};\n\nwithHandleKey.storyName = 'withHandleKey';\n\nwithHandleKey.args = {};\n\nwithHandleKey.argTypes = {};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "withHandleKey": {
    "startLoc": {
      "col": 29,
      "line": 37
    },
    "endLoc": {
      "col": 1,
      "line": 101
    },
    "startBody": {
      "col": 29,
      "line": 37
    },
    "endBody": {
      "col": 1,
      "line": 101
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






_globals_context_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.config({
  // Inspect console to see - should only be called when pressing enter on first tile.
  keyMetricsCallback: function keyMetricsCallback(key, p) {
    // eslint-disable-next-line
    console.log('Metrics payload received', key, p);
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport Tile from '../../components/Tile/Tile';\nimport Row from '../../components/Row/Row';\nimport context from '../../globals/context/index';\nimport withHandleKeyMixin from '.';\n\ncontext.config({\n  // Inspect console to see - should only be called when pressing enter on first tile.\n  keyMetricsCallback: (key, p) => {\n    \n    console.log('Metrics payload received', key, p);\n  }\n});\n\nexport default {\n  title: 'Utilities/withHandleKey'\n};\n\nexport const withHandleKey = args => {\n  class withHandleKey extends lng.Component {\n    static _template() {\n      return {\n        x: 60,\n        y: 60,\n        Row: {\n          type: Row,\n          itemSpacing: 60,\n          items: [\n            {\n              type: Tile,\n              src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',\n              w: 320,\n              h: 180,\n              onEnter: args.onEnter,\n              metricsPayload: {\n                buttonName: 'enter button',\n                uniqueId: 1\n              }\n            },\n            {\n              type: Tile,\n              src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',\n              w: 320,\n              h: 180,\n              onArrowDown: args.onArrowDown,\n              metricsPayload: {\n                buttonName: 'arrow down button',\n                uniqueId: 2\n              }\n            },\n            {\n              type: Tile,\n              src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',\n              w: 320,\n              h: 180,\n              onArrowUp: args.onArrowUp,\n              metricsPayload: {\n                buttonName: 'arrow up button',\n                uniqueId: 3\n              }\n            },\n            {\n              type: Tile,\n              src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',\n              w: 320,\n              h: 180,\n              onArrowRight: args.onArrowRight,\n              metricsPayload: {\n                buttonName: 'arrow right button',\n                uniqueId: 4\n              }\n            }\n          ]\n        }\n      };\n    }\n    \n    $onEnter(keyEvent, tile) {\n      args.onEnter();\n    }\n  }\n  return withHandleKeyMixin(withHandleKey);\n};\n\nwithHandleKey.storyName = 'withHandleKey';\n\nwithHandleKey.args = {};\n\nwithHandleKey.argTypes = {};\n",
      "locationsMap": {
        "with-handle-key": {
          "startLoc": {
            "col": 29,
            "line": 37
          },
          "endLoc": {
            "col": 1,
            "line": 101
          },
          "startBody": {
            "col": 29,
            "line": 37
          },
          "endBody": {
            "col": 1,
            "line": 101
          }
        }
      }
    }
  },
  title: 'Utilities/withHandleKey'
});
var withHandleKey = function withHandleKey(args) {
  var withHandleKey = /*#__PURE__*/function (_lng$Component) {
    _inherits(withHandleKey, _lng$Component);
    var _super = _createSuper(withHandleKey);
    function withHandleKey() {
      _classCallCheck(this, withHandleKey);
      return _super.apply(this, arguments);
    }
    _createClass(withHandleKey, [{
      key: "$onEnter",
      value:
      // eslint-disable-next-line no-unused-vars
      function $onEnter(keyEvent, tile) {
        args.onEnter();
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          x: 60,
          y: 60,
          Row: {
            type: _components_Row_Row__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            itemSpacing: 60,
            items: [{
              type: _components_Tile_Tile__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
              src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',
              w: 320,
              h: 180,
              onEnter: args.onEnter,
              metricsPayload: {
                buttonName: 'enter button',
                uniqueId: 1
              }
            }, {
              type: _components_Tile_Tile__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
              src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',
              w: 320,
              h: 180,
              onArrowDown: args.onArrowDown,
              metricsPayload: {
                buttonName: 'arrow down button',
                uniqueId: 2
              }
            }, {
              type: _components_Tile_Tile__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
              src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',
              w: 320,
              h: 180,
              onArrowUp: args.onArrowUp,
              metricsPayload: {
                buttonName: 'arrow up button',
                uniqueId: 3
              }
            }, {
              type: _components_Tile_Tile__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
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
    }]);
    return withHandleKey;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
  return (0,___WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(withHandleKey);
};
withHandleKey.storyName = 'withHandleKey';
withHandleKey.args = {};
withHandleKey.argTypes = {};
withHandleKey.parameters = {
  ...withHandleKey.parameters,
  docs: {
    ...withHandleKey.parameters?.docs,
    source: {
      originalSource: "args => {\n  class withHandleKey extends lng.Component {\n    static _template() {\n      return {\n        x: 60,\n        y: 60,\n        Row: {\n          type: Row,\n          itemSpacing: 60,\n          items: [{\n            type: Tile,\n            src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',\n            w: 320,\n            h: 180,\n            onEnter: args.onEnter,\n            metricsPayload: {\n              buttonName: 'enter button',\n              uniqueId: 1\n            }\n          }, {\n            type: Tile,\n            src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',\n            w: 320,\n            h: 180,\n            onArrowDown: args.onArrowDown,\n            metricsPayload: {\n              buttonName: 'arrow down button',\n              uniqueId: 2\n            }\n          }, {\n            type: Tile,\n            src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',\n            w: 320,\n            h: 180,\n            onArrowUp: args.onArrowUp,\n            metricsPayload: {\n              buttonName: 'arrow up button',\n              uniqueId: 3\n            }\n          }, {\n            type: Tile,\n            src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',\n            w: 320,\n            h: 180,\n            onArrowRight: args.onArrowRight,\n            metricsPayload: {\n              buttonName: 'arrow right button',\n              uniqueId: 4\n            }\n          }]\n        }\n      };\n    }\n    // eslint-disable-next-line no-unused-vars\n    $onEnter(keyEvent, tile) {\n      args.onEnter();\n    }\n  }\n  return withHandleKeyMixin(withHandleKey);\n}",
      ...withHandleKey.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["withHandleKey"];

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
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
//# sourceMappingURL=mixins-withHandleKey-withHandleKey-stories.d227214c.iframe.bundle.js.map