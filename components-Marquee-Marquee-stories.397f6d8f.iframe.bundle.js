"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[4468],{

/***/ "../../@lightningjs/ui-components/src/components/Marquee/Marquee.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CenteredText: () => (/* binding */ CenteredText),
/* harmony export */   Marquee: () => (/* binding */ Marquee),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Marquee/Marquee.js");
/* harmony import */ var _InlineContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/components/InlineContent/InlineContent.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _Marquee$parameters, _Marquee$parameters2, _CenteredText$paramet, _CenteredText$paramet2;
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
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport MarqueeComponent from '.';\nimport InlineContent from '../InlineContent';\nimport { context } from '../../globals';\n\nexport default {\n  title: 'Components/Marquee'\n};\n\nexport const Marquee = args =>\n  class Marquee extends lng.Component {\n    static _template() {\n      return {\n        Marquee: {\n          type: MarqueeComponent,\n          w: 350,\n          h: 180,\n          title: {\n            text: args.title,\n            ...context.theme.typography.body1,\n            maxLines: 1\n          }\n        }\n      };\n    }\n  };\n\nMarquee.args = {\n  title: 'This is a scrolling Marquee component for long text',\n  autoStart: true,\n  centerAlign: false,\n  repeat: -1,\n  delay: 1.5\n};\n\nMarquee.argTypes = {\n  title: {\n    control: 'text',\n    description: 'Text content of the marquee title',\n    table: { defaultValue: { summary: 'undefined' } }\n  },\n  autoStart: {\n    control: 'boolean',\n    description: 'Start scrolling on initiation',\n    remount: true,\n    table: { defaultValue: { summary: false } }\n  },\n  color: {\n    name: 'color',\n    control: 'color',\n    description: 'Set color of text',\n    table: { defaultValue: { summary: 'theme.color.fillNeutral' } }\n  },\n  repeat: {\n    control: { type: 'number', min: -1 },\n    description: 'Number of times to repeat scrolling',\n    remount: true,\n    table: { defaultValue: { summary: -1 } }\n  },\n  delay: {\n    control: { type: 'number', min: 1.5 },\n    description: 'Delay in milliseconds before scrolling starts',\n    remount: true,\n    table: { defaultValue: { summary: 1.5 } }\n  },\n  centerAlign: {\n    control: 'boolean',\n    description:\n      'Will center the entire texture if the width of the content is less than the container',\n    table: { defaultValue: { summary: false } }\n  }\n};\n\nMarquee.parameters = {\n  argActions: {}\n};\n\nexport const CenteredText = () =>\n  class CenteredText extends lng.Component {\n    static _template() {\n      return {\n        Marquee: {\n          type: MarqueeComponent,\n          w: 400,\n          h: 50,\n          title: {\n            text: 'No scroll center',\n            textAlign: 'center'\n          },\n          autoStart: true,\n          delay: 1\n        },\n        InlineContent: {\n          type: InlineContent,\n          x: 200,\n          alpha: 0.001,\n          content: [\n            'Centered',\n            {\n              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n              title: 'Rotten Tomatoes rating'\n            },\n            ' InlineContent'\n          ],\n          rtt: true\n        },\n        MarqueeInlineContent: {\n          type: MarqueeComponent,\n          y: 100,\n          w: 400,\n          h: 180,\n          centerAlign: true,\n          alpha: 0,\n          autoStart: true,\n          delay: 1\n        }\n      };\n    }\n\n    _init() {\n      this.tag('MarqueeInlineContent').contentTexture =\n        this.tag('InlineContent').getTexture();\n      this.tag('MarqueeInlineContent').alpha = 1;\n    }\n  };\n\nCenteredText.args = {};\nCenteredText.argTypes = {};\nCenteredText.parameters = {\n  argActions: {}\n};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "Marquee": {
    "startLoc": {
      "col": 23,
      "line": 26
    },
    "endLoc": {
      "col": 1,
      "line": 41
    },
    "startBody": {
      "col": 23,
      "line": 26
    },
    "endBody": {
      "col": 1,
      "line": 41
    }
  },
  "CenteredText": {
    "startLoc": {
      "col": 28,
      "line": 118
    },
    "endLoc": {
      "col": 1,
      "line": 158
    },
    "startBody": {
      "col": 28,
      "line": 118
    },
    "endBody": {
      "col": 1,
      "line": 158
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
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport MarqueeComponent from '.';\nimport InlineContent from '../InlineContent';\nimport { context } from '../../globals';\nexport default {\n  title: 'Components/Marquee'\n};\nexport const Marquee = args => class Marquee extends lng.Component {\n  static _template() {\n    return {\n      Marquee: {\n        type: MarqueeComponent,\n        w: 350,\n        h: 180,\n        title: {\n          text: args.title,\n          ...context.theme.typography.body1,\n          maxLines: 1\n        }\n      }\n    };\n  }\n};\nMarquee.args = {\n  title: 'This is a scrolling Marquee component for long text',\n  autoStart: true,\n  centerAlign: false,\n  repeat: -1,\n  delay: 1.5\n};\nMarquee.argTypes = {\n  title: {\n    control: 'text',\n    description: 'Text content of the marquee title',\n    table: {\n      defaultValue: {\n        summary: 'undefined'\n      }\n    }\n  },\n  autoStart: {\n    control: 'boolean',\n    description: 'Start scrolling on initiation',\n    remount: true,\n    table: {\n      defaultValue: {\n        summary: false\n      }\n    }\n  },\n  color: {\n    name: 'color',\n    control: 'color',\n    description: 'Set color of text',\n    table: {\n      defaultValue: {\n        summary: 'theme.color.fillNeutral'\n      }\n    }\n  },\n  repeat: {\n    control: {\n      type: 'number',\n      min: -1\n    },\n    description: 'Number of times to repeat scrolling',\n    remount: true,\n    table: {\n      defaultValue: {\n        summary: -1\n      }\n    }\n  },\n  delay: {\n    control: {\n      type: 'number',\n      min: 1.5\n    },\n    description: 'Delay in milliseconds before scrolling starts',\n    remount: true,\n    table: {\n      defaultValue: {\n        summary: 1.5\n      }\n    }\n  },\n  centerAlign: {\n    control: 'boolean',\n    description: 'Will center the entire texture if the width of the content is less than the container',\n    table: {\n      defaultValue: {\n        summary: false\n      }\n    }\n  }\n};\nMarquee.parameters = {\n  argActions: {}\n};\nexport const CenteredText = () => class CenteredText extends lng.Component {\n  static _template() {\n    return {\n      Marquee: {\n        type: MarqueeComponent,\n        w: 400,\n        h: 50,\n        title: {\n          text: 'No scroll center',\n          textAlign: 'center'\n        },\n        autoStart: true,\n        delay: 1\n      },\n      InlineContent: {\n        type: InlineContent,\n        x: 200,\n        alpha: 0.001,\n        content: ['Centered', {\n          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n          title: 'Rotten Tomatoes rating'\n        }, ' InlineContent'],\n        rtt: true\n      },\n      MarqueeInlineContent: {\n        type: MarqueeComponent,\n        y: 100,\n        w: 400,\n        h: 180,\n        centerAlign: true,\n        alpha: 0,\n        autoStart: true,\n        delay: 1\n      }\n    };\n  }\n  _init() {\n    this.tag('MarqueeInlineContent').contentTexture = this.tag('InlineContent').getTexture();\n    this.tag('MarqueeInlineContent').alpha = 1;\n  }\n};\nCenteredText.args = {};\nCenteredText.argTypes = {};\nCenteredText.parameters = {\n  argActions: {}\n};\nMarquee.parameters = {\n  ...Marquee.parameters,\n  docs: {\n    ...Marquee.parameters?.docs,\n    source: {\n      originalSource: \"args => class Marquee extends lng.Component {\\n  static _template() {\\n    return {\\n      Marquee: {\\n        type: MarqueeComponent,\\n        w: 350,\\n        h: 180,\\n        title: {\\n          text: args.title,\\n          ...context.theme.typography.body1,\\n          maxLines: 1\\n        }\\n      }\\n    };\\n  }\\n}\",\n      ...Marquee.parameters?.docs?.source\n    }\n  }\n};\nCenteredText.parameters = {\n  ...CenteredText.parameters,\n  docs: {\n    ...CenteredText.parameters?.docs,\n    source: {\n      originalSource: \"() => class CenteredText extends lng.Component {\\n  static _template() {\\n    return {\\n      Marquee: {\\n        type: MarqueeComponent,\\n        w: 400,\\n        h: 50,\\n        title: {\\n          text: 'No scroll center',\\n          textAlign: 'center'\\n        },\\n        autoStart: true,\\n        delay: 1\\n      },\\n      InlineContent: {\\n        type: InlineContent,\\n        x: 200,\\n        alpha: 0.001,\\n        content: ['Centered', {\\n          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\\n          title: 'Rotten Tomatoes rating'\\n        }, ' InlineContent'],\\n        rtt: true\\n      },\\n      MarqueeInlineContent: {\\n        type: MarqueeComponent,\\n        y: 100,\\n        w: 400,\\n        h: 180,\\n        centerAlign: true,\\n        alpha: 0,\\n        autoStart: true,\\n        delay: 1\\n      }\\n    };\\n  }\\n  _init() {\\n    this.tag('MarqueeInlineContent').contentTexture = this.tag('InlineContent').getTexture();\\n    this.tag('MarqueeInlineContent').alpha = 1;\\n  }\\n}\",\n      ...CenteredText.parameters?.docs?.source\n    }\n  }\n};",
      "locationsMap": {
        "marquee": {
          "startLoc": {
            "col": 23,
            "line": 26
          },
          "endLoc": {
            "col": 1,
            "line": 41
          },
          "startBody": {
            "col": 23,
            "line": 26
          },
          "endBody": {
            "col": 1,
            "line": 41
          }
        },
        "centered-text": {
          "startLoc": {
            "col": 28,
            "line": 118
          },
          "endLoc": {
            "col": 1,
            "line": 158
          },
          "startBody": {
            "col": 28,
            "line": 118
          },
          "endBody": {
            "col": 1,
            "line": 158
          }
        }
      }
    }
  },
  title: 'Components/Marquee'
});
var Marquee = function Marquee(args) {
  return /*#__PURE__*/function (_lng$Component) {
    _inherits(Marquee, _lng$Component);
    var _super = _createSuper(Marquee);
    function Marquee() {
      _classCallCheck(this, Marquee);
      return _super.apply(this, arguments);
    }
    _createClass(Marquee, null, [{
      key: "_template",
      value: function _template() {
        return {
          Marquee: {
            type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
            w: 350,
            h: 180,
            title: _objectSpread(_objectSpread({
              text: args.title
            }, _globals__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.theme.typography.body1), {}, {
              maxLines: 1
            })
          }
        };
      }
    }]);
    return Marquee;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
Marquee.args = {
  title: 'This is a scrolling Marquee component for long text',
  autoStart: true,
  centerAlign: false,
  repeat: -1,
  delay: 1.5
};
Marquee.argTypes = {
  title: {
    control: 'text',
    description: 'Text content of the marquee title',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  autoStart: {
    control: 'boolean',
    description: 'Start scrolling on initiation',
    remount: true,
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  color: {
    name: 'color',
    control: 'color',
    description: 'Set color of text',
    table: {
      defaultValue: {
        summary: 'theme.color.fillNeutral'
      }
    }
  },
  repeat: {
    control: {
      type: 'number',
      min: -1
    },
    description: 'Number of times to repeat scrolling',
    remount: true,
    table: {
      defaultValue: {
        summary: -1
      }
    }
  },
  delay: {
    control: {
      type: 'number',
      min: 1.5
    },
    description: 'Delay in milliseconds before scrolling starts',
    remount: true,
    table: {
      defaultValue: {
        summary: 1.5
      }
    }
  },
  centerAlign: {
    control: 'boolean',
    description: 'Will center the entire texture if the width of the content is less than the container',
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
};
Marquee.parameters = {
  argActions: {}
};
var CenteredText = function CenteredText() {
  return /*#__PURE__*/function (_lng$Component2) {
    _inherits(CenteredText, _lng$Component2);
    var _super2 = _createSuper(CenteredText);
    function CenteredText() {
      _classCallCheck(this, CenteredText);
      return _super2.apply(this, arguments);
    }
    _createClass(CenteredText, [{
      key: "_init",
      value: function _init() {
        this.tag('MarqueeInlineContent').contentTexture = this.tag('InlineContent').getTexture();
        this.tag('MarqueeInlineContent').alpha = 1;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Marquee: {
            type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
            w: 400,
            h: 50,
            title: {
              text: 'No scroll center',
              textAlign: 'center'
            },
            autoStart: true,
            delay: 1
          },
          InlineContent: {
            type: _InlineContent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            x: 200,
            alpha: 0.001,
            content: ['Centered', {
              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
              title: 'Rotten Tomatoes rating'
            }, ' InlineContent'],
            rtt: true
          },
          MarqueeInlineContent: {
            type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
            y: 100,
            w: 400,
            h: 180,
            centerAlign: true,
            alpha: 0,
            autoStart: true,
            delay: 1
          }
        };
      }
    }]);
    return CenteredText;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
CenteredText.args = {};
CenteredText.argTypes = {};
CenteredText.parameters = {
  argActions: {}
};
Marquee.parameters = _objectSpread(_objectSpread({}, Marquee.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_Marquee$parameters = Marquee.parameters) === null || _Marquee$parameters === void 0 ? void 0 : _Marquee$parameters.docs), {}, {
    source: _objectSpread({
      originalSource: "args => class Marquee extends lng.Component {\n  static _template() {\n    return {\n      Marquee: {\n        type: MarqueeComponent,\n        w: 350,\n        h: 180,\n        title: {\n          text: args.title,\n          ...context.theme.typography.body1,\n          maxLines: 1\n        }\n      }\n    };\n  }\n}"
    }, (_Marquee$parameters2 = Marquee.parameters) === null || _Marquee$parameters2 === void 0 || (_Marquee$parameters2 = _Marquee$parameters2.docs) === null || _Marquee$parameters2 === void 0 ? void 0 : _Marquee$parameters2.source)
  })
});
CenteredText.parameters = _objectSpread(_objectSpread({}, CenteredText.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_CenteredText$paramet = CenteredText.parameters) === null || _CenteredText$paramet === void 0 ? void 0 : _CenteredText$paramet.docs), {}, {
    source: _objectSpread({
      originalSource: "() => class CenteredText extends lng.Component {\n  static _template() {\n    return {\n      Marquee: {\n        type: MarqueeComponent,\n        w: 400,\n        h: 50,\n        title: {\n          text: 'No scroll center',\n          textAlign: 'center'\n        },\n        autoStart: true,\n        delay: 1\n      },\n      InlineContent: {\n        type: InlineContent,\n        x: 200,\n        alpha: 0.001,\n        content: ['Centered', {\n          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n          title: 'Rotten Tomatoes rating'\n        }, ' InlineContent'],\n        rtt: true\n      },\n      MarqueeInlineContent: {\n        type: MarqueeComponent,\n        y: 100,\n        w: 400,\n        h: 180,\n        centerAlign: true,\n        alpha: 0,\n        autoStart: true,\n        delay: 1\n      }\n    };\n  }\n  _init() {\n    this.tag('MarqueeInlineContent').contentTexture = this.tag('InlineContent').getTexture();\n    this.tag('MarqueeInlineContent').alpha = 1;\n  }\n}"
    }, (_CenteredText$paramet2 = CenteredText.parameters) === null || _CenteredText$paramet2 === void 0 || (_CenteredText$paramet2 = _CenteredText$paramet2.docs) === null || _CenteredText$paramet2 === void 0 ? void 0 : _CenteredText$paramet2.source)
  })
});
var __namedExportsOrder = ["Marquee", "CenteredText"];

/***/ })

}]);
//# sourceMappingURL=components-Marquee-Marquee-stories.397f6d8f.iframe.bundle.js.map