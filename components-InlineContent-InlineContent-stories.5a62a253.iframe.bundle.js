"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[2249],{

/***/ "../../@lightningjs/ui-components/src/components/InlineContent/InlineContent.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Basic: () => (/* binding */ Basic),
/* harmony export */   WithNewLines: () => (/* binding */ WithNewLines),
/* harmony export */   WithParsing: () => (/* binding */ WithParsing),
/* harmony export */   WithTruncation: () => (/* binding */ WithTruncation),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/InlineContent/InlineContent.js");
/* harmony import */ var _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _Basic$parameters, _Basic$parameters2, _WithNewLines$paramet, _WithNewLines$paramet2, _WithParsing$paramete, _WithParsing$paramete2, _WithTruncation$param, _WithTruncation$param2;
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
var __STORY__ = "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { default as InlineContentComponent } from '.';\nimport lightningbolt from '../../assets/images/ic_lightning_white_32.png';\nimport { getHexColor } from '../../utils';\n\nexport default {\n  title: 'Components/InlineContent',\n  args: {\n    contentWrap: false,\n    justify: 'center',\n    contentProperties: { marginBottom: -4 },\n    maxLines: 0,\n    maxLinesSuffix: '..'\n  },\n  argTypes: {\n    contentProperties: {\n      control: 'object',\n      description: 'Object setting flexItem props on all content items',\n      type: 'object',\n      table: {\n        defaultValue: { summary: '{}' }\n      }\n    },\n    contentWrap: {\n      control: 'boolean',\n      description:\n        'Determines whether the containing flexbox should wrap the content onto the next line',\n      type: 'boolean',\n      table: {\n        defaultValue: { summary: false }\n      }\n    },\n    justify: {\n      control: 'radio',\n      options: [\n        'flex-start',\n        'flex-end',\n        'center',\n        'space-between',\n        'space-around',\n        'space-evenly'\n      ],\n      description: 'Alignment of first line flexbox content',\n      type: 'string',\n      table: {\n        defaultValue: { summary: 'center' }\n      }\n    },\n    maxLines: {\n      control: 'number',\n      description: 'maximum number of lines to render before truncation',\n      type: 'number',\n      table: {\n        defaultValue: { summary: 'undefined' }\n      }\n    },\n    maxLinesSuffix: {\n      control: 'text',\n      description:\n        'suffix appended to last line of content if it will exceed the maxLines',\n      type: 'string',\n      table: {\n        defaultValue: { summary: '..' }\n      }\n    }\n  }\n};\n\nexport const Basic = args =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        InlineContent: {\n          type: InlineContentComponent,\n          x: 500,\n          w: 200,\n          contentWrap: args.contentWrap,\n          contentProperties: args.contentProperties,\n          justify: args.justify,\n          customStyleMappings: {\n            italic: {\n              fontStyle: 'italic',\n              textColor: getHexColor('00ff00')\n            }\n          },\n          content: [\n            'Text',\n            ' and some icons',\n            {\n              icon: lightningbolt,\n              title: 'Green Lightning Bolt',\n              style: { color: getHexColor('00ff00') }\n            },\n            'Wrapping Text',\n            {\n              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n              title: 'Rotten Tomatoes rating'\n            },\n            'and more text ',\n            {\n              text: 'with some red ',\n              style: { textColor: getHexColor('FF6194') }\n            },\n            'for fun',\n            { badge: 'HD', title: 'HD' },\n            { badge: 'SD', title: 'SD' },\n            {\n              text: 'make some text italic',\n              style: 'italic'\n            }\n          ]\n        }\n      };\n    }\n  };\n\nexport const WithNewLines = args =>\n  class WithNewLines extends lng.Component {\n    static _template() {\n      return {\n        InlineContent: {\n          type: InlineContentComponent,\n          x: 500,\n          w: 400,\n          contentWrap: args.contentWrap,\n          contentProperties: args.contentProperties,\n          justify: args.justify,\n          content: [\n            'Example with multiple lines',\n            {\n              icon: lightningbolt,\n              style: { color: getHexColor('00ff00') },\n              title: 'Green Lightning Bolt'\n            },\n            { newline: true },\n            'this line should break here',\n            { newline: true },\n            {\n              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n              title: 'Rotten Tomatoes rating'\n            },\n            'another line break here',\n            { newline: true },\n            { badge: 'HD', title: 'HD' },\n            { newline: true },\n            { badge: 'SD', title: 'SD' }\n          ]\n        }\n      };\n    }\n  };\n\nexport const WithParsing = args =>\n  class WithParsing extends lng.Component {\n    static _template() {\n      return {\n        InlineContent: {\n          type: InlineContentComponent,\n          x: 550,\n          w: 400,\n          contentWrap: args.contentWrap,\n          contentProperties: args.contentProperties,\n          justify: args.justify,\n          customStyleMappings: {\n            italic: {\n              fontStyle: 'italic',\n              textColor: getHexColor('FF6194')\n            }\n          },\n          content:\n            'This is an example of using custom markup {ICON:settings|https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png} with a linebreak{NEWLINE}{BADGE:HD} that includes all available types like {TEXT:styled text|italic}.'\n        }\n      };\n    }\n  };\n\nexport const WithTruncation = args =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        InlineContent: {\n          type: InlineContentComponent,\n          ...args,\n          w: 500,\n          content: [\n            'Text',\n            {\n              icon: lightningbolt,\n              title: 'Green Lightning Bolt',\n              style: { color: getHexColor('00ff00') }\n            },\n            'Wrapping Text',\n            {\n              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n              title: 'Rotten Tomatoes rating'\n            },\n            'and more text',\n            {\n              text: 'with some red ',\n              style: { textColor: getHexColor('FF6194') }\n            },\n            'for fun',\n            { badge: 'HD', title: 'HD' },\n            { badge: 'SD', title: 'SD' },\n            ', and this should truncate before going on to a third line.'\n          ]\n        }\n      };\n    }\n  };\nWithTruncation.args = {\n  contentWrap: true,\n  maxLines: 2,\n  maxLinesSuffix: '...'\n};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "Basic": {
    "startLoc": {
      "col": 21,
      "line": 88
    },
    "endLoc": {
      "col": 1,
      "line": 131
    },
    "startBody": {
      "col": 21,
      "line": 88
    },
    "endBody": {
      "col": 1,
      "line": 131
    }
  },
  "WithNewLines": {
    "startLoc": {
      "col": 28,
      "line": 132
    },
    "endLoc": {
      "col": 1,
      "line": 169
    },
    "startBody": {
      "col": 28,
      "line": 132
    },
    "endBody": {
      "col": 1,
      "line": 169
    }
  },
  "WithParsing": {
    "startLoc": {
      "col": 27,
      "line": 170
    },
    "endLoc": {
      "col": 1,
      "line": 190
    },
    "startBody": {
      "col": 27,
      "line": 170
    },
    "endBody": {
      "col": 1,
      "line": 190
    }
  },
  "WithTruncation": {
    "startLoc": {
      "col": 30,
      "line": 191
    },
    "endLoc": {
      "col": 1,
      "line": 222
    },
    "startBody": {
      "col": 30,
      "line": 191
    },
    "endBody": {
      "col": 1,
      "line": 222
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
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { default as InlineContentComponent } from '.';\nimport lightningbolt from '../../assets/images/ic_lightning_white_32.png';\nimport { getHexColor } from '../../utils';\nexport default {\n  title: 'Components/InlineContent',\n  args: {\n    contentWrap: false,\n    justify: 'center',\n    contentProperties: {\n      marginBottom: -4\n    },\n    maxLines: 0,\n    maxLinesSuffix: '..'\n  },\n  argTypes: {\n    contentProperties: {\n      control: 'object',\n      description: 'Object setting flexItem props on all content items',\n      type: 'object',\n      table: {\n        defaultValue: {\n          summary: '{}'\n        }\n      }\n    },\n    contentWrap: {\n      control: 'boolean',\n      description: 'Determines whether the containing flexbox should wrap the content onto the next line',\n      type: 'boolean',\n      table: {\n        defaultValue: {\n          summary: false\n        }\n      }\n    },\n    justify: {\n      control: 'radio',\n      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],\n      description: 'Alignment of first line flexbox content',\n      type: 'string',\n      table: {\n        defaultValue: {\n          summary: 'center'\n        }\n      }\n    },\n    maxLines: {\n      control: 'number',\n      description: 'maximum number of lines to render before truncation',\n      type: 'number',\n      table: {\n        defaultValue: {\n          summary: 'undefined'\n        }\n      }\n    },\n    maxLinesSuffix: {\n      control: 'text',\n      description: 'suffix appended to last line of content if it will exceed the maxLines',\n      type: 'string',\n      table: {\n        defaultValue: {\n          summary: '..'\n        }\n      }\n    }\n  }\n};\nexport const Basic = args => class Basic extends lng.Component {\n  static _template() {\n    return {\n      InlineContent: {\n        type: InlineContentComponent,\n        x: 500,\n        w: 200,\n        contentWrap: args.contentWrap,\n        contentProperties: args.contentProperties,\n        justify: args.justify,\n        customStyleMappings: {\n          italic: {\n            fontStyle: 'italic',\n            textColor: getHexColor('00ff00')\n          }\n        },\n        content: ['Text', ' and some icons', {\n          icon: lightningbolt,\n          title: 'Green Lightning Bolt',\n          style: {\n            color: getHexColor('00ff00')\n          }\n        }, 'Wrapping Text', {\n          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n          title: 'Rotten Tomatoes rating'\n        }, 'and more text ', {\n          text: 'with some red ',\n          style: {\n            textColor: getHexColor('FF6194')\n          }\n        }, 'for fun', {\n          badge: 'HD',\n          title: 'HD'\n        }, {\n          badge: 'SD',\n          title: 'SD'\n        }, {\n          text: 'make some text italic',\n          style: 'italic'\n        }]\n      }\n    };\n  }\n};\nexport const WithNewLines = args => class WithNewLines extends lng.Component {\n  static _template() {\n    return {\n      InlineContent: {\n        type: InlineContentComponent,\n        x: 500,\n        w: 400,\n        contentWrap: args.contentWrap,\n        contentProperties: args.contentProperties,\n        justify: args.justify,\n        content: ['Example with multiple lines', {\n          icon: lightningbolt,\n          style: {\n            color: getHexColor('00ff00')\n          },\n          title: 'Green Lightning Bolt'\n        }, {\n          newline: true\n        }, 'this line should break here', {\n          newline: true\n        }, {\n          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n          title: 'Rotten Tomatoes rating'\n        }, 'another line break here', {\n          newline: true\n        }, {\n          badge: 'HD',\n          title: 'HD'\n        }, {\n          newline: true\n        }, {\n          badge: 'SD',\n          title: 'SD'\n        }]\n      }\n    };\n  }\n};\nexport const WithParsing = args => class WithParsing extends lng.Component {\n  static _template() {\n    return {\n      InlineContent: {\n        type: InlineContentComponent,\n        x: 550,\n        w: 400,\n        contentWrap: args.contentWrap,\n        contentProperties: args.contentProperties,\n        justify: args.justify,\n        customStyleMappings: {\n          italic: {\n            fontStyle: 'italic',\n            textColor: getHexColor('FF6194')\n          }\n        },\n        content: 'This is an example of using custom markup {ICON:settings|https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png} with a linebreak{NEWLINE}{BADGE:HD} that includes all available types like {TEXT:styled text|italic}.'\n      }\n    };\n  }\n};\nexport const WithTruncation = args => class Basic extends lng.Component {\n  static _template() {\n    return {\n      InlineContent: {\n        type: InlineContentComponent,\n        ...args,\n        w: 500,\n        content: ['Text', {\n          icon: lightningbolt,\n          title: 'Green Lightning Bolt',\n          style: {\n            color: getHexColor('00ff00')\n          }\n        }, 'Wrapping Text', {\n          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n          title: 'Rotten Tomatoes rating'\n        }, 'and more text', {\n          text: 'with some red ',\n          style: {\n            textColor: getHexColor('FF6194')\n          }\n        }, 'for fun', {\n          badge: 'HD',\n          title: 'HD'\n        }, {\n          badge: 'SD',\n          title: 'SD'\n        }, ', and this should truncate before going on to a third line.']\n      }\n    };\n  }\n};\nWithTruncation.args = {\n  contentWrap: true,\n  maxLines: 2,\n  maxLinesSuffix: '...'\n};\nBasic.parameters = {\n  ...Basic.parameters,\n  docs: {\n    ...Basic.parameters?.docs,\n    source: {\n      originalSource: \"args => class Basic extends lng.Component {\\n  static _template() {\\n    return {\\n      InlineContent: {\\n        type: InlineContentComponent,\\n        x: 500,\\n        w: 200,\\n        contentWrap: args.contentWrap,\\n        contentProperties: args.contentProperties,\\n        justify: args.justify,\\n        customStyleMappings: {\\n          italic: {\\n            fontStyle: 'italic',\\n            textColor: getHexColor('00ff00')\\n          }\\n        },\\n        content: ['Text', ' and some icons', {\\n          icon: lightningbolt,\\n          title: 'Green Lightning Bolt',\\n          style: {\\n            color: getHexColor('00ff00')\\n          }\\n        }, 'Wrapping Text', {\\n          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\\n          title: 'Rotten Tomatoes rating'\\n        }, 'and more text ', {\\n          text: 'with some red ',\\n          style: {\\n            textColor: getHexColor('FF6194')\\n          }\\n        }, 'for fun', {\\n          badge: 'HD',\\n          title: 'HD'\\n        }, {\\n          badge: 'SD',\\n          title: 'SD'\\n        }, {\\n          text: 'make some text italic',\\n          style: 'italic'\\n        }]\\n      }\\n    };\\n  }\\n}\",\n      ...Basic.parameters?.docs?.source\n    }\n  }\n};\nWithNewLines.parameters = {\n  ...WithNewLines.parameters,\n  docs: {\n    ...WithNewLines.parameters?.docs,\n    source: {\n      originalSource: \"args => class WithNewLines extends lng.Component {\\n  static _template() {\\n    return {\\n      InlineContent: {\\n        type: InlineContentComponent,\\n        x: 500,\\n        w: 400,\\n        contentWrap: args.contentWrap,\\n        contentProperties: args.contentProperties,\\n        justify: args.justify,\\n        content: ['Example with multiple lines', {\\n          icon: lightningbolt,\\n          style: {\\n            color: getHexColor('00ff00')\\n          },\\n          title: 'Green Lightning Bolt'\\n        }, {\\n          newline: true\\n        }, 'this line should break here', {\\n          newline: true\\n        }, {\\n          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\\n          title: 'Rotten Tomatoes rating'\\n        }, 'another line break here', {\\n          newline: true\\n        }, {\\n          badge: 'HD',\\n          title: 'HD'\\n        }, {\\n          newline: true\\n        }, {\\n          badge: 'SD',\\n          title: 'SD'\\n        }]\\n      }\\n    };\\n  }\\n}\",\n      ...WithNewLines.parameters?.docs?.source\n    }\n  }\n};\nWithParsing.parameters = {\n  ...WithParsing.parameters,\n  docs: {\n    ...WithParsing.parameters?.docs,\n    source: {\n      originalSource: \"args => class WithParsing extends lng.Component {\\n  static _template() {\\n    return {\\n      InlineContent: {\\n        type: InlineContentComponent,\\n        x: 550,\\n        w: 400,\\n        contentWrap: args.contentWrap,\\n        contentProperties: args.contentProperties,\\n        justify: args.justify,\\n        customStyleMappings: {\\n          italic: {\\n            fontStyle: 'italic',\\n            textColor: getHexColor('FF6194')\\n          }\\n        },\\n        content: 'This is an example of using custom markup {ICON:settings|https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png} with a linebreak{NEWLINE}{BADGE:HD} that includes all available types like {TEXT:styled text|italic}.'\\n      }\\n    };\\n  }\\n}\",\n      ...WithParsing.parameters?.docs?.source\n    }\n  }\n};\nWithTruncation.parameters = {\n  ...WithTruncation.parameters,\n  docs: {\n    ...WithTruncation.parameters?.docs,\n    source: {\n      originalSource: \"args => class Basic extends lng.Component {\\n  static _template() {\\n    return {\\n      InlineContent: {\\n        type: InlineContentComponent,\\n        ...args,\\n        w: 500,\\n        content: ['Text', {\\n          icon: lightningbolt,\\n          title: 'Green Lightning Bolt',\\n          style: {\\n            color: getHexColor('00ff00')\\n          }\\n        }, 'Wrapping Text', {\\n          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\\n          title: 'Rotten Tomatoes rating'\\n        }, 'and more text', {\\n          text: 'with some red ',\\n          style: {\\n            textColor: getHexColor('FF6194')\\n          }\\n        }, 'for fun', {\\n          badge: 'HD',\\n          title: 'HD'\\n        }, {\\n          badge: 'SD',\\n          title: 'SD'\\n        }, ', and this should truncate before going on to a third line.']\\n      }\\n    };\\n  }\\n}\",\n      ...WithTruncation.parameters?.docs?.source\n    }\n  }\n};",
      "locationsMap": {
        "basic": {
          "startLoc": {
            "col": 21,
            "line": 88
          },
          "endLoc": {
            "col": 1,
            "line": 131
          },
          "startBody": {
            "col": 21,
            "line": 88
          },
          "endBody": {
            "col": 1,
            "line": 131
          }
        },
        "with-new-lines": {
          "startLoc": {
            "col": 28,
            "line": 132
          },
          "endLoc": {
            "col": 1,
            "line": 169
          },
          "startBody": {
            "col": 28,
            "line": 132
          },
          "endBody": {
            "col": 1,
            "line": 169
          }
        },
        "with-parsing": {
          "startLoc": {
            "col": 27,
            "line": 170
          },
          "endLoc": {
            "col": 1,
            "line": 190
          },
          "startBody": {
            "col": 27,
            "line": 170
          },
          "endBody": {
            "col": 1,
            "line": 190
          }
        },
        "with-truncation": {
          "startLoc": {
            "col": 30,
            "line": 191
          },
          "endLoc": {
            "col": 1,
            "line": 222
          },
          "startBody": {
            "col": 30,
            "line": 191
          },
          "endBody": {
            "col": 1,
            "line": 222
          }
        }
      }
    }
  },
  title: 'Components/InlineContent',
  args: {
    contentWrap: false,
    justify: 'center',
    contentProperties: {
      marginBottom: -4
    },
    maxLines: 0,
    maxLinesSuffix: '..'
  },
  argTypes: {
    contentProperties: {
      control: 'object',
      description: 'Object setting flexItem props on all content items',
      type: 'object',
      table: {
        defaultValue: {
          summary: '{}'
        }
      }
    },
    contentWrap: {
      control: 'boolean',
      description: 'Determines whether the containing flexbox should wrap the content onto the next line',
      type: 'boolean',
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    justify: {
      control: 'radio',
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
      description: 'Alignment of first line flexbox content',
      type: 'string',
      table: {
        defaultValue: {
          summary: 'center'
        }
      }
    },
    maxLines: {
      control: 'number',
      description: 'maximum number of lines to render before truncation',
      type: 'number',
      table: {
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    maxLinesSuffix: {
      control: 'text',
      description: 'suffix appended to last line of content if it will exceed the maxLines',
      type: 'string',
      table: {
        defaultValue: {
          summary: '..'
        }
      }
    }
  }
});
var Basic = function Basic(args) {
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
          InlineContent: {
            type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
            x: 500,
            w: 200,
            contentWrap: args.contentWrap,
            contentProperties: args.contentProperties,
            justify: args.justify,
            customStyleMappings: {
              italic: {
                fontStyle: 'italic',
                textColor: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getHexColor */ .Xv)('00ff00')
              }
            },
            content: ['Text', ' and some icons', {
              icon: _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_3__,
              title: 'Green Lightning Bolt',
              style: {
                color: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getHexColor */ .Xv)('00ff00')
              }
            }, 'Wrapping Text', {
              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
              title: 'Rotten Tomatoes rating'
            }, 'and more text ', {
              text: 'with some red ',
              style: {
                textColor: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getHexColor */ .Xv)('FF6194')
              }
            }, 'for fun', {
              badge: 'HD',
              title: 'HD'
            }, {
              badge: 'SD',
              title: 'SD'
            }, {
              text: 'make some text italic',
              style: 'italic'
            }]
          }
        };
      }
    }]);
    return Basic;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
var WithNewLines = function WithNewLines(args) {
  return /*#__PURE__*/function (_lng$Component2) {
    _inherits(WithNewLines, _lng$Component2);
    var _super2 = _createSuper(WithNewLines);
    function WithNewLines() {
      _classCallCheck(this, WithNewLines);
      return _super2.apply(this, arguments);
    }
    _createClass(WithNewLines, null, [{
      key: "_template",
      value: function _template() {
        return {
          InlineContent: {
            type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
            x: 500,
            w: 400,
            contentWrap: args.contentWrap,
            contentProperties: args.contentProperties,
            justify: args.justify,
            content: ['Example with multiple lines', {
              icon: _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_3__,
              style: {
                color: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getHexColor */ .Xv)('00ff00')
              },
              title: 'Green Lightning Bolt'
            }, {
              newline: true
            }, 'this line should break here', {
              newline: true
            }, {
              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
              title: 'Rotten Tomatoes rating'
            }, 'another line break here', {
              newline: true
            }, {
              badge: 'HD',
              title: 'HD'
            }, {
              newline: true
            }, {
              badge: 'SD',
              title: 'SD'
            }]
          }
        };
      }
    }]);
    return WithNewLines;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
var WithParsing = function WithParsing(args) {
  return /*#__PURE__*/function (_lng$Component3) {
    _inherits(WithParsing, _lng$Component3);
    var _super3 = _createSuper(WithParsing);
    function WithParsing() {
      _classCallCheck(this, WithParsing);
      return _super3.apply(this, arguments);
    }
    _createClass(WithParsing, null, [{
      key: "_template",
      value: function _template() {
        return {
          InlineContent: {
            type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
            x: 550,
            w: 400,
            contentWrap: args.contentWrap,
            contentProperties: args.contentProperties,
            justify: args.justify,
            customStyleMappings: {
              italic: {
                fontStyle: 'italic',
                textColor: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getHexColor */ .Xv)('FF6194')
              }
            },
            content: 'This is an example of using custom markup {ICON:settings|https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png} with a linebreak{NEWLINE}{BADGE:HD} that includes all available types like {TEXT:styled text|italic}.'
          }
        };
      }
    }]);
    return WithParsing;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
var WithTruncation = function WithTruncation(args) {
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
          InlineContent: _objectSpread(_objectSpread({
            type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
          }, args), {}, {
            w: 500,
            content: ['Text', {
              icon: _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_3__,
              title: 'Green Lightning Bolt',
              style: {
                color: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getHexColor */ .Xv)('00ff00')
              }
            }, 'Wrapping Text', {
              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
              title: 'Rotten Tomatoes rating'
            }, 'and more text', {
              text: 'with some red ',
              style: {
                textColor: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getHexColor */ .Xv)('FF6194')
              }
            }, 'for fun', {
              badge: 'HD',
              title: 'HD'
            }, {
              badge: 'SD',
              title: 'SD'
            }, ', and this should truncate before going on to a third line.']
          })
        };
      }
    }]);
    return Basic;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
WithTruncation.args = {
  contentWrap: true,
  maxLines: 2,
  maxLinesSuffix: '...'
};
Basic.parameters = _objectSpread(_objectSpread({}, Basic.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_Basic$parameters = Basic.parameters) === null || _Basic$parameters === void 0 ? void 0 : _Basic$parameters.docs), {}, {
    source: _objectSpread({
      originalSource: "args => class Basic extends lng.Component {\n  static _template() {\n    return {\n      InlineContent: {\n        type: InlineContentComponent,\n        x: 500,\n        w: 200,\n        contentWrap: args.contentWrap,\n        contentProperties: args.contentProperties,\n        justify: args.justify,\n        customStyleMappings: {\n          italic: {\n            fontStyle: 'italic',\n            textColor: getHexColor('00ff00')\n          }\n        },\n        content: ['Text', ' and some icons', {\n          icon: lightningbolt,\n          title: 'Green Lightning Bolt',\n          style: {\n            color: getHexColor('00ff00')\n          }\n        }, 'Wrapping Text', {\n          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n          title: 'Rotten Tomatoes rating'\n        }, 'and more text ', {\n          text: 'with some red ',\n          style: {\n            textColor: getHexColor('FF6194')\n          }\n        }, 'for fun', {\n          badge: 'HD',\n          title: 'HD'\n        }, {\n          badge: 'SD',\n          title: 'SD'\n        }, {\n          text: 'make some text italic',\n          style: 'italic'\n        }]\n      }\n    };\n  }\n}"
    }, (_Basic$parameters2 = Basic.parameters) === null || _Basic$parameters2 === void 0 || (_Basic$parameters2 = _Basic$parameters2.docs) === null || _Basic$parameters2 === void 0 ? void 0 : _Basic$parameters2.source)
  })
});
WithNewLines.parameters = _objectSpread(_objectSpread({}, WithNewLines.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_WithNewLines$paramet = WithNewLines.parameters) === null || _WithNewLines$paramet === void 0 ? void 0 : _WithNewLines$paramet.docs), {}, {
    source: _objectSpread({
      originalSource: "args => class WithNewLines extends lng.Component {\n  static _template() {\n    return {\n      InlineContent: {\n        type: InlineContentComponent,\n        x: 500,\n        w: 400,\n        contentWrap: args.contentWrap,\n        contentProperties: args.contentProperties,\n        justify: args.justify,\n        content: ['Example with multiple lines', {\n          icon: lightningbolt,\n          style: {\n            color: getHexColor('00ff00')\n          },\n          title: 'Green Lightning Bolt'\n        }, {\n          newline: true\n        }, 'this line should break here', {\n          newline: true\n        }, {\n          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n          title: 'Rotten Tomatoes rating'\n        }, 'another line break here', {\n          newline: true\n        }, {\n          badge: 'HD',\n          title: 'HD'\n        }, {\n          newline: true\n        }, {\n          badge: 'SD',\n          title: 'SD'\n        }]\n      }\n    };\n  }\n}"
    }, (_WithNewLines$paramet2 = WithNewLines.parameters) === null || _WithNewLines$paramet2 === void 0 || (_WithNewLines$paramet2 = _WithNewLines$paramet2.docs) === null || _WithNewLines$paramet2 === void 0 ? void 0 : _WithNewLines$paramet2.source)
  })
});
WithParsing.parameters = _objectSpread(_objectSpread({}, WithParsing.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_WithParsing$paramete = WithParsing.parameters) === null || _WithParsing$paramete === void 0 ? void 0 : _WithParsing$paramete.docs), {}, {
    source: _objectSpread({
      originalSource: "args => class WithParsing extends lng.Component {\n  static _template() {\n    return {\n      InlineContent: {\n        type: InlineContentComponent,\n        x: 550,\n        w: 400,\n        contentWrap: args.contentWrap,\n        contentProperties: args.contentProperties,\n        justify: args.justify,\n        customStyleMappings: {\n          italic: {\n            fontStyle: 'italic',\n            textColor: getHexColor('FF6194')\n          }\n        },\n        content: 'This is an example of using custom markup {ICON:settings|https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png} with a linebreak{NEWLINE}{BADGE:HD} that includes all available types like {TEXT:styled text|italic}.'\n      }\n    };\n  }\n}"
    }, (_WithParsing$paramete2 = WithParsing.parameters) === null || _WithParsing$paramete2 === void 0 || (_WithParsing$paramete2 = _WithParsing$paramete2.docs) === null || _WithParsing$paramete2 === void 0 ? void 0 : _WithParsing$paramete2.source)
  })
});
WithTruncation.parameters = _objectSpread(_objectSpread({}, WithTruncation.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_WithTruncation$param = WithTruncation.parameters) === null || _WithTruncation$param === void 0 ? void 0 : _WithTruncation$param.docs), {}, {
    source: _objectSpread({
      originalSource: "args => class Basic extends lng.Component {\n  static _template() {\n    return {\n      InlineContent: {\n        type: InlineContentComponent,\n        ...args,\n        w: 500,\n        content: ['Text', {\n          icon: lightningbolt,\n          title: 'Green Lightning Bolt',\n          style: {\n            color: getHexColor('00ff00')\n          }\n        }, 'Wrapping Text', {\n          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n          title: 'Rotten Tomatoes rating'\n        }, 'and more text', {\n          text: 'with some red ',\n          style: {\n            textColor: getHexColor('FF6194')\n          }\n        }, 'for fun', {\n          badge: 'HD',\n          title: 'HD'\n        }, {\n          badge: 'SD',\n          title: 'SD'\n        }, ', and this should truncate before going on to a third line.']\n      }\n    };\n  }\n}"
    }, (_WithTruncation$param2 = WithTruncation.parameters) === null || _WithTruncation$param2 === void 0 || (_WithTruncation$param2 = _WithTruncation$param2.docs) === null || _WithTruncation$param2 === void 0 ? void 0 : _WithTruncation$param2.source)
  })
});
var __namedExportsOrder = ["Basic", "WithNewLines", "WithParsing", "WithTruncation"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/ic_lightning_white_32.06aecfeb.png";

/***/ })

}]);
//# sourceMappingURL=components-InlineContent-InlineContent-stories.5a62a253.iframe.bundle.js.map