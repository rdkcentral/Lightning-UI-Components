"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[1065],{

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
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport Badge from '.';\nimport lightning from '../../assets/images/ic_lightning_white_32.png';\nimport circle from '../../assets/images/circle.svg';\n\nexport default {\n  title: 'Components/Badge'\n};\n\nexport const Text = args =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        Badge: {\n          type: Badge,\n          title: args.title\n        }\n      };\n    }\n  };\nText.args = {\n  title: 'HD'\n};\nText.argTypes = {\n  title: {\n    description: 'Badge text',\n    control: 'text',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  }\n};\n\nexport const IconSVG = () =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        Badge: {\n          type: Badge,\n          icon: circle,\n          iconWidth: 24,\n          title: 'HD'\n        }\n      };\n    }\n  };\nIconSVG.args = {\n  iconAlign: 'left'\n};\n\nIconSVG.argTypes = {\n  iconAlign: {\n    control: 'select',\n    options: ['left', 'right'],\n    description: 'Side of the text the icon will appear on',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  }\n};\nexport const IconPNG = () =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        Badge: {\n          type: Badge,\n          icon: lightning\n        }\n      };\n    }\n  };\n\nexport const TextWithIcon = () =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        Badge: {\n          type: Badge,\n          icon: lightning\n        }\n      };\n    }\n  };\n\nTextWithIcon.args = {\n  title: 'HD',\n  iconAlign: 'left'\n};\n\nTextWithIcon.argTypes = {\n  iconAlign: {\n    control: 'select',\n    options: ['left', 'right'],\n    description: 'Side of the text the icon will appear on',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  title: {\n    control: 'text',\n    description: 'Badge text',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  }\n};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "Text": {
    "startLoc": {
      "col": 20,
      "line": 28
    },
    "endLoc": {
      "col": 3,
      "line": 38
    },
    "startBody": {
      "col": 20,
      "line": 28
    },
    "endBody": {
      "col": 3,
      "line": 38
    }
  },
  "IconSVG": {
    "startLoc": {
      "col": 23,
      "line": 52
    },
    "endLoc": {
      "col": 3,
      "line": 64
    },
    "startBody": {
      "col": 23,
      "line": 52
    },
    "endBody": {
      "col": 3,
      "line": 64
    }
  },
  "IconPNG": {
    "startLoc": {
      "col": 23,
      "line": 79
    },
    "endLoc": {
      "col": 3,
      "line": 89
    },
    "startBody": {
      "col": 23,
      "line": 79
    },
    "endBody": {
      "col": 3,
      "line": 89
    }
  },
  "TextWithIcon": {
    "startLoc": {
      "col": 28,
      "line": 91
    },
    "endLoc": {
      "col": 3,
      "line": 101
    },
    "startBody": {
      "col": 28,
      "line": 91
    },
    "endBody": {
      "col": 3,
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





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport Badge from '.';\nimport lightning from '../../assets/images/ic_lightning_white_32.png';\nimport circle from '../../assets/images/circle.svg';\n\nexport default {\n  title: 'Components/Badge'\n};\n\nexport const Text = args =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        Badge: {\n          type: Badge,\n          title: args.title\n        }\n      };\n    }\n  };\nText.args = {\n  title: 'HD'\n};\nText.argTypes = {\n  title: {\n    description: 'Badge text',\n    control: 'text',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  }\n};\n\nexport const IconSVG = () =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        Badge: {\n          type: Badge,\n          icon: circle,\n          iconWidth: 24,\n          title: 'HD'\n        }\n      };\n    }\n  };\nIconSVG.args = {\n  iconAlign: 'left'\n};\n\nIconSVG.argTypes = {\n  iconAlign: {\n    control: 'select',\n    options: ['left', 'right'],\n    description: 'Side of the text the icon will appear on',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  }\n};\nexport const IconPNG = () =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        Badge: {\n          type: Badge,\n          icon: lightning\n        }\n      };\n    }\n  };\n\nexport const TextWithIcon = () =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        Badge: {\n          type: Badge,\n          icon: lightning\n        }\n      };\n    }\n  };\n\nTextWithIcon.args = {\n  title: 'HD',\n  iconAlign: 'left'\n};\n\nTextWithIcon.argTypes = {\n  iconAlign: {\n    control: 'select',\n    options: ['left', 'right'],\n    description: 'Side of the text the icon will appear on',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  title: {\n    control: 'text',\n    description: 'Badge text',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  }\n};\n",
      "locationsMap": {
        "text": {
          "startLoc": {
            "col": 20,
            "line": 28
          },
          "endLoc": {
            "col": 3,
            "line": 38
          },
          "startBody": {
            "col": 20,
            "line": 28
          },
          "endBody": {
            "col": 3,
            "line": 38
          }
        },
        "icon-svg": {
          "startLoc": {
            "col": 23,
            "line": 52
          },
          "endLoc": {
            "col": 3,
            "line": 64
          },
          "startBody": {
            "col": 23,
            "line": 52
          },
          "endBody": {
            "col": 3,
            "line": 64
          }
        },
        "icon-png": {
          "startLoc": {
            "col": 23,
            "line": 79
          },
          "endLoc": {
            "col": 3,
            "line": 89
          },
          "startBody": {
            "col": 23,
            "line": 79
          },
          "endBody": {
            "col": 3,
            "line": 89
          }
        },
        "text-with-icon": {
          "startLoc": {
            "col": 28,
            "line": 91
          },
          "endLoc": {
            "col": 3,
            "line": 101
          },
          "startBody": {
            "col": 28,
            "line": 91
          },
          "endBody": {
            "col": 3,
            "line": 101
          }
        }
      }
    }
  },
  title: 'Components/Badge'
});
var Text = function Text(args) {
  return /*#__PURE__*/function (_lng$Component) {
    _inherits(Basic, _lng$Component);
    var _super = _createSuper(Basic);
    function Basic() {
      _classCallCheck(this, Basic);
      return _super.apply(this, arguments);
    }
    _createClass(Basic, null, [{
      key: "_template",
      value: function _template() {
        return {
          Badge: {
            type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
            title: args.title
          }
        };
      }
    }]);
    return Basic;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
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
var IconSVG = function IconSVG() {
  return /*#__PURE__*/function (_lng$Component2) {
    _inherits(Basic, _lng$Component2);
    var _super2 = _createSuper(Basic);
    function Basic() {
      _classCallCheck(this, Basic);
      return _super2.apply(this, arguments);
    }
    _createClass(Basic, null, [{
      key: "_template",
      value: function _template() {
        return {
          Badge: {
            type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
            icon: _assets_images_circle_svg__WEBPACK_IMPORTED_MODULE_2__,
            iconWidth: 24,
            title: 'HD'
          }
        };
      }
    }]);
    return Basic;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
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
var IconPNG = function IconPNG() {
  return /*#__PURE__*/function (_lng$Component3) {
    _inherits(Basic, _lng$Component3);
    var _super3 = _createSuper(Basic);
    function Basic() {
      _classCallCheck(this, Basic);
      return _super3.apply(this, arguments);
    }
    _createClass(Basic, null, [{
      key: "_template",
      value: function _template() {
        return {
          Badge: {
            type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
            icon: _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_3__
          }
        };
      }
    }]);
    return Basic;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
var TextWithIcon = function TextWithIcon() {
  return /*#__PURE__*/function (_lng$Component4) {
    _inherits(Basic, _lng$Component4);
    var _super4 = _createSuper(Basic);
    function Basic() {
      _classCallCheck(this, Basic);
      return _super4.apply(this, arguments);
    }
    _createClass(Basic, null, [{
      key: "_template",
      value: function _template() {
        return {
          Badge: {
            type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
            icon: _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_3__
          }
        };
      }
    }]);
    return Basic;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
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
};;const __namedExportsOrder = ["Text","IconSVG","IconPNG","TextWithIcon"];

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
//# sourceMappingURL=components-Badge-Badge-stories.ef290feb.iframe.bundle.js.map