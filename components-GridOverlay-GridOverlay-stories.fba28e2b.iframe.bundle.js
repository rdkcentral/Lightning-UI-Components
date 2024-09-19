"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[4179],{

/***/ "../../@lightningjs/ui-components/src/components/GridOverlay/GridOverlay.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GridOverlay: () => (/* binding */ GridOverlay),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _globals_context_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/GridOverlay/GridOverlay.js");
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
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport context from '../../globals/context/index';\nimport { default as GridOverlayComponent } from '.';\n\nexport default {\n  title: 'Components/GridOverlay'\n};\n\nexport const GridOverlay = args =>\n  class GridOverlay extends lng.Component {\n    static _template() {\n      return {\n        GridOverlay: {\n          type: GridOverlayComponent,\n          x: context.theme.layout.marginX * -1,\n          y: context.theme.layout.marginY * -1,\n          showColumns: args.showColumns,\n          showMargins: args.showMargins,\n          showSafe: args.showSafe,\n          showGutters: args.showGutters,\n          showText: args.showText,\n          alpha: args.alpha\n        }\n      };\n    }\n  };\nGridOverlay.storyName = 'GridOverlay';\nGridOverlay.args = {\n  alpha: 1,\n  showColumns: true,\n  showMargins: true,\n  showSafe: true,\n  showGutters: true,\n  showText: true\n};\nGridOverlay.argTypes = {\n  alpha: {\n    control: {\n      type: 'range',\n      min: 0,\n      max: 1,\n      step: 0.01\n    },\n    description:\n      'Adjusts the opacity, parameter should be a value between 0 and 1',\n    table: { defaultValue: { summary: 'undefined' } }\n  },\n  showColumns: {\n    control: 'boolean',\n    description: 'When true, displays the column span rectangles',\n    table: {\n      defaultValue: { summary: true }\n    }\n  },\n  showMargins: {\n    control: 'boolean',\n    description: 'When true, displays the X and Y margin rulers',\n    table: {\n      defaultValue: { summary: true }\n    }\n  },\n  showSafe: {\n    control: 'boolean',\n    description:\n      'When true, displays the X and Y \"safe\" zone rulers (this is the area that content should not be rendered in to avoid screen clipping on a device)',\n    table: {\n      defaultValue: { summary: true }\n    }\n  },\n  showGutters: {\n    control: 'boolean',\n    description: 'When true, displays the rulers for spacing between columns',\n    table: {\n      defaultValue: { summary: true }\n    }\n  },\n  showText: {\n    control: 'boolean',\n    description:\n      'When true, displays the textbox containing the exact numbers associated with the screen, margin, safe, and gutter sizes',\n    table: {\n      defaultValue: { summary: true }\n    }\n  }\n};\nGridOverlay.parameters = {\n  argActions: {}\n};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "GridOverlay": {
    "startLoc": {
      "col": 27,
      "line": 27
    },
    "endLoc": {
      "col": 3,
      "line": 44
    },
    "startBody": {
      "col": 27,
      "line": 27
    },
    "endBody": {
      "col": 3,
      "line": 44
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
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport context from '../../globals/context/index';\nimport { default as GridOverlayComponent } from '.';\n\nexport default {\n  title: 'Components/GridOverlay'\n};\n\nexport const GridOverlay = args =>\n  class GridOverlay extends lng.Component {\n    static _template() {\n      return {\n        GridOverlay: {\n          type: GridOverlayComponent,\n          x: context.theme.layout.marginX * -1,\n          y: context.theme.layout.marginY * -1,\n          showColumns: args.showColumns,\n          showMargins: args.showMargins,\n          showSafe: args.showSafe,\n          showGutters: args.showGutters,\n          showText: args.showText,\n          alpha: args.alpha\n        }\n      };\n    }\n  };\nGridOverlay.storyName = 'GridOverlay';\nGridOverlay.args = {\n  alpha: 1,\n  showColumns: true,\n  showMargins: true,\n  showSafe: true,\n  showGutters: true,\n  showText: true\n};\nGridOverlay.argTypes = {\n  alpha: {\n    control: {\n      type: 'range',\n      min: 0,\n      max: 1,\n      step: 0.01\n    },\n    description:\n      'Adjusts the opacity, parameter should be a value between 0 and 1',\n    table: { defaultValue: { summary: 'undefined' } }\n  },\n  showColumns: {\n    control: 'boolean',\n    description: 'When true, displays the column span rectangles',\n    table: {\n      defaultValue: { summary: true }\n    }\n  },\n  showMargins: {\n    control: 'boolean',\n    description: 'When true, displays the X and Y margin rulers',\n    table: {\n      defaultValue: { summary: true }\n    }\n  },\n  showSafe: {\n    control: 'boolean',\n    description:\n      'When true, displays the X and Y \"safe\" zone rulers (this is the area that content should not be rendered in to avoid screen clipping on a device)',\n    table: {\n      defaultValue: { summary: true }\n    }\n  },\n  showGutters: {\n    control: 'boolean',\n    description: 'When true, displays the rulers for spacing between columns',\n    table: {\n      defaultValue: { summary: true }\n    }\n  },\n  showText: {\n    control: 'boolean',\n    description:\n      'When true, displays the textbox containing the exact numbers associated with the screen, margin, safe, and gutter sizes',\n    table: {\n      defaultValue: { summary: true }\n    }\n  }\n};\nGridOverlay.parameters = {\n  argActions: {}\n};\n",
      "locationsMap": {
        "grid-overlay": {
          "startLoc": {
            "col": 27,
            "line": 27
          },
          "endLoc": {
            "col": 3,
            "line": 44
          },
          "startBody": {
            "col": 27,
            "line": 27
          },
          "endBody": {
            "col": 3,
            "line": 44
          }
        }
      }
    }
  },
  title: 'Components/GridOverlay'
});
var GridOverlay = function GridOverlay(args) {
  return /*#__PURE__*/function (_lng$Component) {
    _inherits(GridOverlay, _lng$Component);
    var _super = _createSuper(GridOverlay);
    function GridOverlay() {
      _classCallCheck(this, GridOverlay);
      return _super.apply(this, arguments);
    }
    _createClass(GridOverlay, null, [{
      key: "_template",
      value: function _template() {
        return {
          GridOverlay: {
            type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
            x: _globals_context_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.theme.layout.marginX * -1,
            y: _globals_context_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.theme.layout.marginY * -1,
            showColumns: args.showColumns,
            showMargins: args.showMargins,
            showSafe: args.showSafe,
            showGutters: args.showGutters,
            showText: args.showText,
            alpha: args.alpha
          }
        };
      }
    }]);
    return GridOverlay;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
};
GridOverlay.storyName = 'GridOverlay';
GridOverlay.args = {
  alpha: 1,
  showColumns: true,
  showMargins: true,
  showSafe: true,
  showGutters: true,
  showText: true
};
GridOverlay.argTypes = {
  alpha: {
    control: {
      type: 'range',
      min: 0,
      max: 1,
      step: 0.01
    },
    description: 'Adjusts the opacity, parameter should be a value between 0 and 1',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  showColumns: {
    control: 'boolean',
    description: 'When true, displays the column span rectangles',
    table: {
      defaultValue: {
        summary: true
      }
    }
  },
  showMargins: {
    control: 'boolean',
    description: 'When true, displays the X and Y margin rulers',
    table: {
      defaultValue: {
        summary: true
      }
    }
  },
  showSafe: {
    control: 'boolean',
    description: 'When true, displays the X and Y "safe" zone rulers (this is the area that content should not be rendered in to avoid screen clipping on a device)',
    table: {
      defaultValue: {
        summary: true
      }
    }
  },
  showGutters: {
    control: 'boolean',
    description: 'When true, displays the rulers for spacing between columns',
    table: {
      defaultValue: {
        summary: true
      }
    }
  },
  showText: {
    control: 'boolean',
    description: 'When true, displays the textbox containing the exact numbers associated with the screen, margin, safe, and gutter sizes',
    table: {
      defaultValue: {
        summary: true
      }
    }
  }
};
GridOverlay.parameters = {
  argActions: {}
};
GridOverlay.parameters = {
  ...GridOverlay.parameters,
  docs: {
    ...GridOverlay.parameters?.docs,
    source: {
      originalSource: "args => class GridOverlay extends lng.Component {\n  static _template() {\n    return {\n      GridOverlay: {\n        type: GridOverlayComponent,\n        x: context.theme.layout.marginX * -1,\n        y: context.theme.layout.marginY * -1,\n        showColumns: args.showColumns,\n        showMargins: args.showMargins,\n        showSafe: args.showSafe,\n        showGutters: args.showGutters,\n        showText: args.showText,\n        alpha: args.alpha\n      }\n    };\n  }\n}",
      ...GridOverlay.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["GridOverlay"];

/***/ })

}]);
//# sourceMappingURL=components-GridOverlay-GridOverlay-stories.fba28e2b.iframe.bundle.js.map