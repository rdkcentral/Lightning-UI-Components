"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[8083],{

/***/ "../../@lightningjs/ui-components/src/mixins/withAnnouncer/withAnnouncer.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Basic: () => (/* binding */ Basic),
/* harmony export */   WithDefaultAbbreviations: () => (/* binding */ WithDefaultAbbreviations),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/mixins/withAnnouncer/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../@lightningjs/ui-components/src/mixins/withAnnouncer/abbreviations.js");
/* harmony import */ var _components_Column_Column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Column/Column.js");
/* harmony import */ var _components_Row_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Row/Row.js");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/Button.js");
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
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport withAnnouncer, { defaultAbbrevConfig } from '.';\nimport Column from '../../components/Column/Column';\nimport Row from '../../components/Row/Row';\nimport Button from '../../components/Button/Button';\n\nexport default {\n  title: 'Utilities/withAnnouncer',\n  component: withAnnouncer\n};\n\nconst rows = [\n  {\n    type: Row,\n    w: 1920 - 160, // x offset from preview.js * 2,\n    h: 100,\n    itemSpacing: 30,\n    items: [\n      {\n        type: Button,\n        title: 'Button 1',\n        announceContext: '1 of 3'\n      },\n      {\n        type: Button,\n        title: 'Button 2',\n        announceContext: '2 of 3'\n      },\n      { type: Button, title: 'Button 3', announceContext: '3 of 3' }\n    ]\n  },\n  {\n    type: Row,\n    w: 1920 - 160, // x offset from preview.js * 2,\n    h: 100,\n    itemSpacing: 30,\n    items: [\n      {\n        type: Button,\n        title: 'Button 1',\n        announceContext: '1 of 3'\n      },\n      {\n        type: Button,\n        title: 'Button 2',\n        announceContext: '2 of 3'\n      },\n      { type: Button, title: 'Button 3', announceContext: '3 of 3' }\n    ]\n  },\n  {\n    type: Row,\n    w: 1920 - 160, // x offset from preview.js * 2,\n    h: 100,\n    itemSpacing: 30,\n    items: [\n      {\n        type: Button,\n        title: 'Button 1',\n        announceContext: '1 of 3'\n      },\n      {\n        type: Button,\n        title: 'Button 2',\n        announceContext: '2 of 3'\n      },\n      { type: Button, title: 'Button 3', announceContext: '3 of 3' }\n    ]\n  }\n];\n\nexport const Basic = () =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        debug: true,\n        announcerEnabled: true,\n        announcerTimeout: 15 * 1000,\n        Column: {\n          type: Column,\n          w: 1920 - 160, // x offset from preview.js * 2,\n          h: 400,\n          style: {\n            itemSpacing: 20\n          },\n          items: rows\n        }\n      };\n    }\n\n    get announceContext() {\n      return [\n        'PAUSE-2.2',\n        `Press LEFT or RIGHT to review items,\n              press UP or DOWN to review categories,\n              press CENTER to select`\n      ];\n    }\n  };\n\nconst createRow = items => ({\n  type: Row,\n  w: 900,\n  h: 100,\n  itemSpacing: 30,\n  items\n});\nconst createButton = (title, announceContext) => ({\n  type: Button,\n  title,\n  announceContext\n});\n\nconst abbrevRows = [\n  createRow([\n    createButton('TV-14', '1 of 9'),\n    createButton('(CC)', '2 of 9'),\n    createButton('HD', '3 of 9')\n  ]),\n  createRow([\n    createButton('ENG', '4 of 9'),\n    createButton('ENG+ES', '5 of 9'),\n    createButton('AD', '6 of 9')\n  ]),\n  createRow([\n    createButton('RT 95%', '7 of 9'),\n    createButton('S3E12', '8 of 9'),\n    createButton('S12E1, TV-14, CC, HD, ENG+ES, AD, RT 95%', '9 of 9')\n  ])\n];\n\nexport const WithDefaultAbbreviations = () => {\n  class WithAbbreviations extends lng.Component {\n    static _template() {\n      return {\n        debug: true,\n        announcerEnabled: true,\n        announcerTimeout: 15 * 1000,\n        Column: {\n          type: Column,\n          w: 900,\n          h: 400,\n          style: {\n            itemSpacing: 20\n          },\n          items: abbrevRows\n        }\n      };\n    }\n\n    get announceContext() {\n      return [\n        'PAUSE-2.2',\n        `Press LEFT or RIGHT to review items,\n              press UP or DOWN to review categories,\n              press CENTER to select`\n      ];\n    }\n  }\n  return WithAbbreviations;\n};\nWithDefaultAbbreviations.parameters = {\n  announcerOptions: {\n    abbreviations: defaultAbbrevConfig\n  }\n};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "Basic": {
    "startLoc": {
      "col": 21,
      "line": 90
    },
    "endLoc": {
      "col": 3,
      "line": 117
    },
    "startBody": {
      "col": 21,
      "line": 90
    },
    "endBody": {
      "col": 3,
      "line": 117
    }
  },
  "WithDefaultAbbreviations": {
    "startLoc": {
      "col": 40,
      "line": 150
    },
    "endLoc": {
      "col": 1,
      "line": 179
    },
    "startBody": {
      "col": 40,
      "line": 150
    },
    "endBody": {
      "col": 1,
      "line": 179
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
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport withAnnouncer, { defaultAbbrevConfig } from '.';\nimport Column from '../../components/Column/Column';\nimport Row from '../../components/Row/Row';\nimport Button from '../../components/Button/Button';\n\nexport default {\n  title: 'Utilities/withAnnouncer',\n  component: withAnnouncer\n};\n\nconst rows = [\n  {\n    type: Row,\n    w: 1920 - 160, // x offset from preview.js * 2,\n    h: 100,\n    itemSpacing: 30,\n    items: [\n      {\n        type: Button,\n        title: 'Button 1',\n        announceContext: '1 of 3'\n      },\n      {\n        type: Button,\n        title: 'Button 2',\n        announceContext: '2 of 3'\n      },\n      { type: Button, title: 'Button 3', announceContext: '3 of 3' }\n    ]\n  },\n  {\n    type: Row,\n    w: 1920 - 160, // x offset from preview.js * 2,\n    h: 100,\n    itemSpacing: 30,\n    items: [\n      {\n        type: Button,\n        title: 'Button 1',\n        announceContext: '1 of 3'\n      },\n      {\n        type: Button,\n        title: 'Button 2',\n        announceContext: '2 of 3'\n      },\n      { type: Button, title: 'Button 3', announceContext: '3 of 3' }\n    ]\n  },\n  {\n    type: Row,\n    w: 1920 - 160, // x offset from preview.js * 2,\n    h: 100,\n    itemSpacing: 30,\n    items: [\n      {\n        type: Button,\n        title: 'Button 1',\n        announceContext: '1 of 3'\n      },\n      {\n        type: Button,\n        title: 'Button 2',\n        announceContext: '2 of 3'\n      },\n      { type: Button, title: 'Button 3', announceContext: '3 of 3' }\n    ]\n  }\n];\n\nexport const Basic = () =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        debug: true,\n        announcerEnabled: true,\n        announcerTimeout: 15 * 1000,\n        Column: {\n          type: Column,\n          w: 1920 - 160, // x offset from preview.js * 2,\n          h: 400,\n          style: {\n            itemSpacing: 20\n          },\n          items: rows\n        }\n      };\n    }\n\n    get announceContext() {\n      return [\n        'PAUSE-2.2',\n        `Press LEFT or RIGHT to review items,\n              press UP or DOWN to review categories,\n              press CENTER to select`\n      ];\n    }\n  };\n\nconst createRow = items => ({\n  type: Row,\n  w: 900,\n  h: 100,\n  itemSpacing: 30,\n  items\n});\nconst createButton = (title, announceContext) => ({\n  type: Button,\n  title,\n  announceContext\n});\n\nconst abbrevRows = [\n  createRow([\n    createButton('TV-14', '1 of 9'),\n    createButton('(CC)', '2 of 9'),\n    createButton('HD', '3 of 9')\n  ]),\n  createRow([\n    createButton('ENG', '4 of 9'),\n    createButton('ENG+ES', '5 of 9'),\n    createButton('AD', '6 of 9')\n  ]),\n  createRow([\n    createButton('RT 95%', '7 of 9'),\n    createButton('S3E12', '8 of 9'),\n    createButton('S12E1, TV-14, CC, HD, ENG+ES, AD, RT 95%', '9 of 9')\n  ])\n];\n\nexport const WithDefaultAbbreviations = () => {\n  class WithAbbreviations extends lng.Component {\n    static _template() {\n      return {\n        debug: true,\n        announcerEnabled: true,\n        announcerTimeout: 15 * 1000,\n        Column: {\n          type: Column,\n          w: 900,\n          h: 400,\n          style: {\n            itemSpacing: 20\n          },\n          items: abbrevRows\n        }\n      };\n    }\n\n    get announceContext() {\n      return [\n        'PAUSE-2.2',\n        `Press LEFT or RIGHT to review items,\n              press UP or DOWN to review categories,\n              press CENTER to select`\n      ];\n    }\n  }\n  return WithAbbreviations;\n};\nWithDefaultAbbreviations.parameters = {\n  announcerOptions: {\n    abbreviations: defaultAbbrevConfig\n  }\n};\n",
      "locationsMap": {
        "basic": {
          "startLoc": {
            "col": 21,
            "line": 90
          },
          "endLoc": {
            "col": 3,
            "line": 117
          },
          "startBody": {
            "col": 21,
            "line": 90
          },
          "endBody": {
            "col": 3,
            "line": 117
          }
        },
        "with-default-abbreviations": {
          "startLoc": {
            "col": 40,
            "line": 150
          },
          "endLoc": {
            "col": 1,
            "line": 179
          },
          "startBody": {
            "col": 40,
            "line": 150
          },
          "endBody": {
            "col": 1,
            "line": 179
          }
        }
      }
    }
  },
  title: 'Utilities/withAnnouncer',
  component: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP
});
var rows = [{
  type: _components_Row_Row__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
  w: 1920 - 160,
  // x offset from preview.js * 2,
  h: 100,
  itemSpacing: 30,
  items: [{
    type: _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
    title: 'Button 1',
    announceContext: '1 of 3'
  }, {
    type: _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
    title: 'Button 2',
    announceContext: '2 of 3'
  }, {
    type: _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
    title: 'Button 3',
    announceContext: '3 of 3'
  }]
}, {
  type: _components_Row_Row__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
  w: 1920 - 160,
  // x offset from preview.js * 2,
  h: 100,
  itemSpacing: 30,
  items: [{
    type: _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
    title: 'Button 1',
    announceContext: '1 of 3'
  }, {
    type: _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
    title: 'Button 2',
    announceContext: '2 of 3'
  }, {
    type: _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
    title: 'Button 3',
    announceContext: '3 of 3'
  }]
}, {
  type: _components_Row_Row__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
  w: 1920 - 160,
  // x offset from preview.js * 2,
  h: 100,
  itemSpacing: 30,
  items: [{
    type: _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
    title: 'Button 1',
    announceContext: '1 of 3'
  }, {
    type: _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
    title: 'Button 2',
    announceContext: '2 of 3'
  }, {
    type: _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
    title: 'Button 3',
    announceContext: '3 of 3'
  }]
}];
var Basic = function Basic() {
  return /*#__PURE__*/function (_lng$Component) {
    _inherits(Basic, _lng$Component);
    var _super = _createSuper(Basic);
    function Basic() {
      _classCallCheck(this, Basic);
      return _super.apply(this, arguments);
    }
    _createClass(Basic, [{
      key: "announceContext",
      get: function get() {
        return ['PAUSE-2.2', "Press LEFT or RIGHT to review items,\n              press UP or DOWN to review categories,\n              press CENTER to select"];
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          debug: true,
          announcerEnabled: true,
          announcerTimeout: 15 * 1000,
          Column: {
            type: _components_Column_Column__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
            w: 1920 - 160,
            // x offset from preview.js * 2,
            h: 400,
            style: {
              itemSpacing: 20
            },
            items: rows
          }
        };
      }
    }]);
    return Basic;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
var createRow = function createRow(items) {
  return {
    type: _components_Row_Row__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    w: 900,
    h: 100,
    itemSpacing: 30,
    items: items
  };
};
var createButton = function createButton(title, announceContext) {
  return {
    type: _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
    title: title,
    announceContext: announceContext
  };
};
var abbrevRows = [createRow([createButton('TV-14', '1 of 9'), createButton('(CC)', '2 of 9'), createButton('HD', '3 of 9')]), createRow([createButton('ENG', '4 of 9'), createButton('ENG+ES', '5 of 9'), createButton('AD', '6 of 9')]), createRow([createButton('RT 95%', '7 of 9'), createButton('S3E12', '8 of 9'), createButton('S12E1, TV-14, CC, HD, ENG+ES, AD, RT 95%', '9 of 9')])];
var WithDefaultAbbreviations = function WithDefaultAbbreviations() {
  var WithAbbreviations = /*#__PURE__*/function (_lng$Component2) {
    _inherits(WithAbbreviations, _lng$Component2);
    var _super2 = _createSuper(WithAbbreviations);
    function WithAbbreviations() {
      _classCallCheck(this, WithAbbreviations);
      return _super2.apply(this, arguments);
    }
    _createClass(WithAbbreviations, [{
      key: "announceContext",
      get: function get() {
        return ['PAUSE-2.2', "Press LEFT or RIGHT to review items,\n              press UP or DOWN to review categories,\n              press CENTER to select"];
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          debug: true,
          announcerEnabled: true,
          announcerTimeout: 15 * 1000,
          Column: {
            type: _components_Column_Column__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
            w: 900,
            h: 400,
            style: {
              itemSpacing: 20
            },
            items: abbrevRows
          }
        };
      }
    }]);
    return WithAbbreviations;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
  return WithAbbreviations;
};
WithDefaultAbbreviations.parameters = {
  announcerOptions: {
    abbreviations: ___WEBPACK_IMPORTED_MODULE_5__/* .defaultAbbrevConfig */ .mw
  }
};
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => class Basic extends lng.Component {\n  static _template() {\n    return {\n      debug: true,\n      announcerEnabled: true,\n      announcerTimeout: 15 * 1000,\n      Column: {\n        type: Column,\n        w: 1920 - 160,\n        // x offset from preview.js * 2,\n        h: 400,\n        style: {\n          itemSpacing: 20\n        },\n        items: rows\n      }\n    };\n  }\n  get announceContext() {\n    return ['PAUSE-2.2', `Press LEFT or RIGHT to review items,\n              press UP or DOWN to review categories,\n              press CENTER to select`];\n  }\n}",
      ...Basic.parameters?.docs?.source
    }
  }
};
WithDefaultAbbreviations.parameters = {
  ...WithDefaultAbbreviations.parameters,
  docs: {
    ...WithDefaultAbbreviations.parameters?.docs,
    source: {
      originalSource: "() => {\n  class WithAbbreviations extends lng.Component {\n    static _template() {\n      return {\n        debug: true,\n        announcerEnabled: true,\n        announcerTimeout: 15 * 1000,\n        Column: {\n          type: Column,\n          w: 900,\n          h: 400,\n          style: {\n            itemSpacing: 20\n          },\n          items: abbrevRows\n        }\n      };\n    }\n    get announceContext() {\n      return ['PAUSE-2.2', `Press LEFT or RIGHT to review items,\n              press UP or DOWN to review categories,\n              press CENTER to select`];\n    }\n  }\n  return WithAbbreviations;\n}",
      ...WithDefaultAbbreviations.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Basic","WithDefaultAbbreviations"];

/***/ })

}]);
//# sourceMappingURL=mixins-withAnnouncer-withAnnouncer-stories.cacb66a4.iframe.bundle.js.map