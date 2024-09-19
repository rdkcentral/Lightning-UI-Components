"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[9285],{

/***/ "../../@lightningjs/ui-components/src/mixins/withThemeStyles/withThemeStyles.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   withThemeStyles: () => (/* binding */ withThemeStyles)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/mixins/withThemeStyles/index.js");
/* harmony import */ var _globals_context_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
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
var __STORY__ = "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport withThemeStylesMixin from './index';\nimport context from '../../globals/context/index';\n\nexport default {\n  title: 'Utilities/withThemeStyles'\n};\n\nexport const withThemeStyles = () => {\n  const style = {\n    color: context.theme.color.fillNeutral\n  };\n\n  class Box extends lng.Component {\n    static get __componentName() {\n      return 'Box';\n    }\n\n    static get __themeStyle() {\n      return style;\n    }\n\n    static _template() {\n      return {\n        Box: {\n          w: 150,\n          h: 150,\n          rect: true\n        }\n      };\n    }\n\n    toggleColor(theme) {\n      this.tag('Box').color = theme ? this.style.color : 0xff0000ff;\n    }\n  }\n\n  return class withThemeStyles extends lng.Component {\n    static _template() {\n      return {\n        Box: {\n          type: withThemeStylesMixin(Box)\n        }\n      };\n    }\n  };\n};\n\nwithThemeStyles.storyName = 'withThemeStyles';\nwithThemeStyles.args = {\n  themeColor: true\n};\nwithThemeStyles.argTypes = {\n  themeColor: {\n    control: 'boolean',\n    description: 'Should the box use the color from the theme?',\n    table: {\n      defaultValue: { summary: withThemeStyles.args.themeColor }\n    }\n  }\n};\nwithThemeStyles.parameters = {\n  argActions: {\n    themeColor: (themeColor, component) => {\n      component.tag('Box').toggleColor(themeColor);\n    }\n  }\n};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "withThemeStyles": {
    "startLoc": {
      "col": 31,
      "line": 27
    },
    "endLoc": {
      "col": 1,
      "line": 65
    },
    "startBody": {
      "col": 31,
      "line": 27
    },
    "endBody": {
      "col": 1,
      "line": 65
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
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport withThemeStylesMixin from './index';\nimport context from '../../globals/context/index';\n\nexport default {\n  title: 'Utilities/withThemeStyles'\n};\n\nexport const withThemeStyles = () => {\n  const style = {\n    color: context.theme.color.fillNeutral\n  };\n\n  class Box extends lng.Component {\n    static get __componentName() {\n      return 'Box';\n    }\n\n    static get __themeStyle() {\n      return style;\n    }\n\n    static _template() {\n      return {\n        Box: {\n          w: 150,\n          h: 150,\n          rect: true\n        }\n      };\n    }\n\n    toggleColor(theme) {\n      this.tag('Box').color = theme ? this.style.color : 0xff0000ff;\n    }\n  }\n\n  return class withThemeStyles extends lng.Component {\n    static _template() {\n      return {\n        Box: {\n          type: withThemeStylesMixin(Box)\n        }\n      };\n    }\n  };\n};\n\nwithThemeStyles.storyName = 'withThemeStyles';\nwithThemeStyles.args = {\n  themeColor: true\n};\nwithThemeStyles.argTypes = {\n  themeColor: {\n    control: 'boolean',\n    description: 'Should the box use the color from the theme?',\n    table: {\n      defaultValue: { summary: withThemeStyles.args.themeColor }\n    }\n  }\n};\nwithThemeStyles.parameters = {\n  argActions: {\n    themeColor: (themeColor, component) => {\n      component.tag('Box').toggleColor(themeColor);\n    }\n  }\n};\n",
      "locationsMap": {
        "with-theme-styles": {
          "startLoc": {
            "col": 31,
            "line": 27
          },
          "endLoc": {
            "col": 1,
            "line": 65
          },
          "startBody": {
            "col": 31,
            "line": 27
          },
          "endBody": {
            "col": 1,
            "line": 65
          }
        }
      }
    }
  },
  title: 'Utilities/withThemeStyles'
});
var withThemeStyles = function withThemeStyles() {
  var style = {
    color: _globals_context_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.theme.color.fillNeutral
  };
  var Box = /*#__PURE__*/function (_lng$Component) {
    _inherits(Box, _lng$Component);
    var _super = _createSuper(Box);
    function Box() {
      _classCallCheck(this, Box);
      return _super.apply(this, arguments);
    }
    _createClass(Box, [{
      key: "toggleColor",
      value: function toggleColor(theme) {
        this.tag('Box').color = theme ? this.style.color : 0xff0000ff;
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return 'Box';
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return style;
      }
    }, {
      key: "_template",
      value: function _template() {
        return {
          Box: {
            w: 150,
            h: 150,
            rect: true
          }
        };
      }
    }]);
    return Box;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
  return /*#__PURE__*/function (_lng$Component2) {
    _inherits(withThemeStyles, _lng$Component2);
    var _super2 = _createSuper(withThemeStyles);
    function withThemeStyles() {
      _classCallCheck(this, withThemeStyles);
      return _super2.apply(this, arguments);
    }
    _createClass(withThemeStyles, null, [{
      key: "_template",
      value: function _template() {
        return {
          Box: {
            type: (0,_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(Box)
          }
        };
      }
    }]);
    return withThemeStyles;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
};
withThemeStyles.storyName = 'withThemeStyles';
withThemeStyles.args = {
  themeColor: true
};
withThemeStyles.argTypes = {
  themeColor: {
    control: 'boolean',
    description: 'Should the box use the color from the theme?',
    table: {
      defaultValue: {
        summary: withThemeStyles.args.themeColor
      }
    }
  }
};
withThemeStyles.parameters = {
  argActions: {
    themeColor: function themeColor(_themeColor, component) {
      component.tag('Box').toggleColor(_themeColor);
    }
  }
};
withThemeStyles.parameters = {
  ...withThemeStyles.parameters,
  docs: {
    ...withThemeStyles.parameters?.docs,
    source: {
      originalSource: "() => {\n  const style = {\n    color: context.theme.color.fillNeutral\n  };\n  class Box extends lng.Component {\n    static get __componentName() {\n      return 'Box';\n    }\n    static get __themeStyle() {\n      return style;\n    }\n    static _template() {\n      return {\n        Box: {\n          w: 150,\n          h: 150,\n          rect: true\n        }\n      };\n    }\n    toggleColor(theme) {\n      this.tag('Box').color = theme ? this.style.color : 0xff0000ff;\n    }\n  }\n  return class withThemeStyles extends lng.Component {\n    static _template() {\n      return {\n        Box: {\n          type: withThemeStylesMixin(Box)\n        }\n      };\n    }\n  };\n}",
      ...withThemeStyles.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["withThemeStyles"];

/***/ })

}]);
//# sourceMappingURL=mixins-withThemeStyles-withThemeStyles-stories.ade9431c.iframe.bundle.js.map