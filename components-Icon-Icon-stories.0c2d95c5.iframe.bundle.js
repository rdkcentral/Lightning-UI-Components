"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[8311],{

/***/ "../../@lightningjs/ui-components/src/components/Icon/Icon.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PNG: () => (/* binding */ PNG),
/* harmony export */   SVG: () => (/* binding */ SVG),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
/* harmony import */ var _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png");
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
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport Icon from '.';\nimport lightning from '../../assets/images/ic_lightning_white_32.png';\n\nexport default {\n  title: 'Components/Icon',\n  parameters: {\n    argActions: {\n      w: (w, component) => {\n        component.tag('Icon').w = w;\n        component._refocus();\n      },\n      h: (h, component) => {\n        component.tag('Icon').h = h;\n        component._refocus();\n      }\n    }\n  }\n};\n\nconst sharedArgs = {\n  w: 50,\n  h: 50\n};\n\nconst sharedArgTypes = {\n  w: {\n    control: {\n      type: 'range',\n      min: 1,\n      max: 96\n    },\n    description: 'Width of the icon',\n    table: {\n      defaultValue: { summary: 0 }\n    }\n  },\n  h: {\n    control: { type: 'range', min: 1, max: 96 },\n    description: 'Height of the icon',\n    table: {\n      defaultValue: { summary: 0 }\n    }\n  }\n};\n\nexport const PNG = () =>\n  class PNG extends lng.Component {\n    static _template() {\n      return {\n        Icon: {\n          type: Icon,\n          icon: lightning,\n          announce: 'Lightning bolt'\n        }\n      };\n    }\n  };\n\nPNG.args = sharedArgs;\n\nPNG.argTypes = sharedArgTypes;\n\nexport const SVG = () =>\n  class SVG extends lng.Component {\n    static _template() {\n      return {\n        Icon: {\n          type: Icon,\n          icon: '<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"100\" width=\"100\"><circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"black\" stroke-width=\"3\" fill=\"white\" /></svg>',\n          announce: 'Red circle',\n          color: 0xffff0000\n        }\n      };\n    }\n  };\n\nSVG.args = sharedArgs;\n\nSVG.argTypes = sharedArgTypes;\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "PNG": {
    "startLoc": {
      "col": 19,
      "line": 65
    },
    "endLoc": {
      "col": 3,
      "line": 76
    },
    "startBody": {
      "col": 19,
      "line": 65
    },
    "endBody": {
      "col": 3,
      "line": 76
    }
  },
  "SVG": {
    "startLoc": {
      "col": 19,
      "line": 82
    },
    "endLoc": {
      "col": 3,
      "line": 94
    },
    "startBody": {
      "col": 19,
      "line": 82
    },
    "endBody": {
      "col": 3,
      "line": 94
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
  title: 'Components/Icon',
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport Icon from '.';\nimport lightning from '../../assets/images/ic_lightning_white_32.png';\n\nexport default {\n  title: 'Components/Icon',\n  parameters: {\n    argActions: {\n      w: (w, component) => {\n        component.tag('Icon').w = w;\n        component._refocus();\n      },\n      h: (h, component) => {\n        component.tag('Icon').h = h;\n        component._refocus();\n      }\n    }\n  }\n};\n\nconst sharedArgs = {\n  w: 50,\n  h: 50\n};\n\nconst sharedArgTypes = {\n  w: {\n    control: {\n      type: 'range',\n      min: 1,\n      max: 96\n    },\n    description: 'Width of the icon',\n    table: {\n      defaultValue: { summary: 0 }\n    }\n  },\n  h: {\n    control: { type: 'range', min: 1, max: 96 },\n    description: 'Height of the icon',\n    table: {\n      defaultValue: { summary: 0 }\n    }\n  }\n};\n\nexport const PNG = () =>\n  class PNG extends lng.Component {\n    static _template() {\n      return {\n        Icon: {\n          type: Icon,\n          icon: lightning,\n          announce: 'Lightning bolt'\n        }\n      };\n    }\n  };\n\nPNG.args = sharedArgs;\n\nPNG.argTypes = sharedArgTypes;\n\nexport const SVG = () =>\n  class SVG extends lng.Component {\n    static _template() {\n      return {\n        Icon: {\n          type: Icon,\n          icon: '<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"100\" width=\"100\"><circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"black\" stroke-width=\"3\" fill=\"white\" /></svg>',\n          announce: 'Red circle',\n          color: 0xffff0000\n        }\n      };\n    }\n  };\n\nSVG.args = sharedArgs;\n\nSVG.argTypes = sharedArgTypes;\n",
      "locationsMap": {
        "png": {
          "startLoc": {
            "col": 19,
            "line": 65
          },
          "endLoc": {
            "col": 3,
            "line": 76
          },
          "startBody": {
            "col": 19,
            "line": 65
          },
          "endBody": {
            "col": 3,
            "line": 76
          }
        },
        "svg": {
          "startLoc": {
            "col": 19,
            "line": 82
          },
          "endLoc": {
            "col": 3,
            "line": 94
          },
          "startBody": {
            "col": 19,
            "line": 82
          },
          "endBody": {
            "col": 3,
            "line": 94
          }
        }
      }
    },
    argActions: {
      w: function w(_w, component) {
        component.tag('Icon').w = _w;
        component._refocus();
      },
      h: function h(_h, component) {
        component.tag('Icon').h = _h;
        component._refocus();
      }
    }
  }
});
var sharedArgs = {
  w: 50,
  h: 50
};
var sharedArgTypes = {
  w: {
    control: {
      type: 'range',
      min: 1,
      max: 96
    },
    description: 'Width of the icon',
    table: {
      defaultValue: {
        summary: 0
      }
    }
  },
  h: {
    control: {
      type: 'range',
      min: 1,
      max: 96
    },
    description: 'Height of the icon',
    table: {
      defaultValue: {
        summary: 0
      }
    }
  }
};
var PNG = function PNG() {
  return /*#__PURE__*/function (_lng$Component) {
    _inherits(PNG, _lng$Component);
    var _super = _createSuper(PNG);
    function PNG() {
      _classCallCheck(this, PNG);
      return _super.apply(this, arguments);
    }
    _createClass(PNG, null, [{
      key: "_template",
      value: function _template() {
        return {
          Icon: {
            type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
            icon: _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_2__,
            announce: 'Lightning bolt'
          }
        };
      }
    }]);
    return PNG;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
};
;
PNG.args = sharedArgs;
PNG.argTypes = sharedArgTypes;
var SVG = function SVG() {
  return /*#__PURE__*/function (_lng$Component2) {
    _inherits(SVG, _lng$Component2);
    var _super2 = _createSuper(SVG);
    function SVG() {
      _classCallCheck(this, SVG);
      return _super2.apply(this, arguments);
    }
    _createClass(SVG, null, [{
      key: "_template",
      value: function _template() {
        return {
          Icon: {
            type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
            icon: '<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="white" /></svg>',
            announce: 'Red circle',
            color: 0xffff0000
          }
        };
      }
    }]);
    return SVG;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
};
SVG.args = sharedArgs;
SVG.argTypes = sharedArgTypes;
PNG.parameters = {
  ...PNG.parameters,
  docs: {
    ...PNG.parameters?.docs,
    source: {
      originalSource: "() => class PNG extends lng.Component {\n  static _template() {\n    return {\n      Icon: {\n        type: Icon,\n        icon: lightning,\n        announce: 'Lightning bolt'\n      }\n    };\n  }\n}",
      ...PNG.parameters?.docs?.source
    }
  }
};
SVG.parameters = {
  ...SVG.parameters,
  docs: {
    ...SVG.parameters?.docs,
    source: {
      originalSource: "() => class SVG extends lng.Component {\n  static _template() {\n    return {\n      Icon: {\n        type: Icon,\n        icon: '<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"100\" width=\"100\"><circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"black\" stroke-width=\"3\" fill=\"white\" /></svg>',\n        announce: 'Red circle',\n        color: 0xffff0000\n      }\n    };\n  }\n}",
      ...SVG.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["PNG","SVG"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/ic_lightning_white_32.06aecfeb.png";

/***/ })

}]);
//# sourceMappingURL=components-Icon-Icon-stories.0c2d95c5.iframe.bundle.js.map