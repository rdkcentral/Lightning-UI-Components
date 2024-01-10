"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[2140],{

/***/ "../../@lightningjs/ui-components/src/components/TextBox/TextBox.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Basic: () => (/* binding */ Basic),
/* harmony export */   WithInlineContentArray: () => (/* binding */ WithInlineContentArray),
/* harmony export */   WithInlineContentString: () => (/* binding */ WithInlineContentString),
/* harmony export */   WithInlineContentTruncation: () => (/* binding */ WithInlineContentTruncation),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
/* harmony import */ var _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
/* harmony import */ var _InlineContent_InlineContent_stories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/InlineContent/InlineContent.stories.js");
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
var __STORY__ = "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport TextBox from '.';\nimport lightningbolt from '../../assets/images/ic_lightning_white_32.png';\nimport { getHexColor } from '../../utils';\nimport inlineContentStory from '../InlineContent/InlineContent.stories';\n\nexport default {\n  title: 'Components/TextBox'\n};\n\nconst { args: inlineContentArgs, argTypes: inlineContentArgTypes } =\n  inlineContentStory;\n\nconst lorum =\n  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales est eu eleifend interdum. Vivamus egestas maximus elementum. Sed condimentum ligula justo, non sollicitudin lectus rutrum vel. Integer iaculis vitae nisl quis tincidunt. Sed quis dui vehicula, vehicula felis a, tempor leo. Fusce tincidunt, ante eget pretium efficitur, libero elit volutpat quam, sit amet porta tortor odio non ligula. Ut sed dolor eleifend massa auctor porttitor eget ut lectus. Vivamus elementum lorem mauris, eu luctus tortor posuere sit amet. Nunc a interdum metus.';\n\nexport const Basic = () =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        TextBox: {\n          type: TextBox,\n          fixed: true,\n          w: 600,\n          style: { textStyle: { maxLines: 3 } }\n        }\n      };\n    }\n  };\n\nBasic.args = {\n  content: lorum,\n  marquee: false,\n  fixed: true,\n  hideOnLoad: false,\n  w: 600\n};\n\nBasic.argTypes = {\n  content: {\n    control: 'text',\n    description: 'Text to be displayed in element',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  marquee: {\n    control: 'boolean',\n    description:\n      \"Scrolls text when a single line of text is longer than the textbox's width\",\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  fixed: {\n    control: 'boolean',\n    description:\n      'Flag that when set to `true`, allows the width of the component to be set with `w`',\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  hideOnLoad: {\n    control: 'boolean',\n    remount: true,\n    description:\n      'If `true`, the component will not render as visible following the text texture loading. This allows manually controlling the alpha of the component. The component will not render as visible if this is set to true.',\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  w: {\n    control: 'number',\n    description:\n      'When the `fixed` property is `true`, this will set the width of the component (but only if `wordWrapWidth` is not defined otherwise the width will reflect the `wordWrapWidth` value)',\n    table: {\n      defaultValue: { summary: 0 }\n    }\n  }\n};\n\nexport const WithInlineContentArray = () =>\n  class WithInlineContentArray extends lng.Component {\n    static _template() {\n      return {\n        TextBox: {\n          type: TextBox,\n          x: 200,\n          w: 400,\n          content: [\n            'Text',\n            {\n              icon: lightningbolt,\n              style: { color: getHexColor('00ff00') },\n              title: 'Green Lightning Bolt'\n            },\n            'Wrapping Text',\n            {\n              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n              title: 'Rotten Tomatoes rating'\n            },\n            'and more text',\n            {\n              text: 'with some red ',\n              style: { textColor: getHexColor('FF6194') }\n            },\n            'for fun',\n            { badge: 'HD', title: 'HD' },\n            { badge: 'SD', title: 'SD' }\n          ]\n        }\n      };\n    }\n  };\n\nWithInlineContentArray.args = inlineContentArgs;\nWithInlineContentArray.argTypes = inlineContentArgTypes;\n\nexport const WithInlineContentString = () =>\n  class WithInlineContentArray extends lng.Component {\n    static _template() {\n      return {\n        TextBox: {\n          type: TextBox,\n          x: 400,\n          w: 400,\n          content:\n            'This is an example of using custom markup {ICON:settings|https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png} with a linebreak{NEWLINE}{BADGE:HD} that includes all available types like {TEXT:styled text|italic}.',\n          customStyleMappings: {\n            italic: {\n              fontStyle: 'italic',\n              textColor: getHexColor('FF6194')\n            }\n          }\n        }\n      };\n    }\n  };\n\nWithInlineContentString.args = inlineContentArgs;\nWithInlineContentString.argTypes = inlineContentArgTypes;\n\nexport const WithInlineContentTruncation = () =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        TextBox: {\n          type: TextBox,\n          w: 500,\n          style: {\n            textStyle: {\n              maxLines: 2,\n              maxLinesSuffix: '...'\n            }\n          },\n          content: [\n            'Text',\n            {\n              icon: lightningbolt,\n              title: 'Green Lightning Bolt',\n              style: { color: getHexColor('00ff00') }\n            },\n            'Wrapping Text',\n            {\n              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n              title: 'Rotten Tomatoes rating'\n            },\n            'and more text',\n            {\n              text: 'with some red ',\n              style: { textColor: getHexColor('FF6194') }\n            },\n            'for fun',\n            { badge: 'HD', title: 'HD' },\n            { badge: 'SD', title: 'SD' },\n            ', and this should truncate before going on to a third line.'\n          ],\n          contentWrap: true\n        }\n      };\n    }\n  };\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "Basic": {
    "startLoc": {
      "col": 21,
      "line": 35
    },
    "endLoc": {
      "col": 3,
      "line": 47
    },
    "startBody": {
      "col": 21,
      "line": 35
    },
    "endBody": {
      "col": 3,
      "line": 47
    }
  },
  "WithInlineContentArray": {
    "startLoc": {
      "col": 38,
      "line": 100
    },
    "endLoc": {
      "col": 3,
      "line": 132
    },
    "startBody": {
      "col": 38,
      "line": 100
    },
    "endBody": {
      "col": 3,
      "line": 132
    }
  },
  "WithInlineContentString": {
    "startLoc": {
      "col": 39,
      "line": 137
    },
    "endLoc": {
      "col": 3,
      "line": 156
    },
    "startBody": {
      "col": 39,
      "line": 137
    },
    "endBody": {
      "col": 3,
      "line": 156
    }
  },
  "WithInlineContentTruncation": {
    "startLoc": {
      "col": 43,
      "line": 161
    },
    "endLoc": {
      "col": 3,
      "line": 200
    },
    "startBody": {
      "col": 43,
      "line": 161
    },
    "endBody": {
      "col": 3,
      "line": 200
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
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport TextBox from '.';\nimport lightningbolt from '../../assets/images/ic_lightning_white_32.png';\nimport { getHexColor } from '../../utils';\nimport inlineContentStory from '../InlineContent/InlineContent.stories';\n\nexport default {\n  title: 'Components/TextBox'\n};\n\nconst { args: inlineContentArgs, argTypes: inlineContentArgTypes } =\n  inlineContentStory;\n\nconst lorum =\n  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales est eu eleifend interdum. Vivamus egestas maximus elementum. Sed condimentum ligula justo, non sollicitudin lectus rutrum vel. Integer iaculis vitae nisl quis tincidunt. Sed quis dui vehicula, vehicula felis a, tempor leo. Fusce tincidunt, ante eget pretium efficitur, libero elit volutpat quam, sit amet porta tortor odio non ligula. Ut sed dolor eleifend massa auctor porttitor eget ut lectus. Vivamus elementum lorem mauris, eu luctus tortor posuere sit amet. Nunc a interdum metus.';\n\nexport const Basic = () =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        TextBox: {\n          type: TextBox,\n          fixed: true,\n          w: 600,\n          style: { textStyle: { maxLines: 3 } }\n        }\n      };\n    }\n  };\n\nBasic.args = {\n  content: lorum,\n  marquee: false,\n  fixed: true,\n  hideOnLoad: false,\n  w: 600\n};\n\nBasic.argTypes = {\n  content: {\n    control: 'text',\n    description: 'Text to be displayed in element',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  marquee: {\n    control: 'boolean',\n    description:\n      \"Scrolls text when a single line of text is longer than the textbox's width\",\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  fixed: {\n    control: 'boolean',\n    description:\n      'Flag that when set to `true`, allows the width of the component to be set with `w`',\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  hideOnLoad: {\n    control: 'boolean',\n    remount: true,\n    description:\n      'If `true`, the component will not render as visible following the text texture loading. This allows manually controlling the alpha of the component. The component will not render as visible if this is set to true.',\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  w: {\n    control: 'number',\n    description:\n      'When the `fixed` property is `true`, this will set the width of the component (but only if `wordWrapWidth` is not defined otherwise the width will reflect the `wordWrapWidth` value)',\n    table: {\n      defaultValue: { summary: 0 }\n    }\n  }\n};\n\nexport const WithInlineContentArray = () =>\n  class WithInlineContentArray extends lng.Component {\n    static _template() {\n      return {\n        TextBox: {\n          type: TextBox,\n          x: 200,\n          w: 400,\n          content: [\n            'Text',\n            {\n              icon: lightningbolt,\n              style: { color: getHexColor('00ff00') },\n              title: 'Green Lightning Bolt'\n            },\n            'Wrapping Text',\n            {\n              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n              title: 'Rotten Tomatoes rating'\n            },\n            'and more text',\n            {\n              text: 'with some red ',\n              style: { textColor: getHexColor('FF6194') }\n            },\n            'for fun',\n            { badge: 'HD', title: 'HD' },\n            { badge: 'SD', title: 'SD' }\n          ]\n        }\n      };\n    }\n  };\n\nWithInlineContentArray.args = inlineContentArgs;\nWithInlineContentArray.argTypes = inlineContentArgTypes;\n\nexport const WithInlineContentString = () =>\n  class WithInlineContentArray extends lng.Component {\n    static _template() {\n      return {\n        TextBox: {\n          type: TextBox,\n          x: 400,\n          w: 400,\n          content:\n            'This is an example of using custom markup {ICON:settings|https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png} with a linebreak{NEWLINE}{BADGE:HD} that includes all available types like {TEXT:styled text|italic}.',\n          customStyleMappings: {\n            italic: {\n              fontStyle: 'italic',\n              textColor: getHexColor('FF6194')\n            }\n          }\n        }\n      };\n    }\n  };\n\nWithInlineContentString.args = inlineContentArgs;\nWithInlineContentString.argTypes = inlineContentArgTypes;\n\nexport const WithInlineContentTruncation = () =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        TextBox: {\n          type: TextBox,\n          w: 500,\n          style: {\n            textStyle: {\n              maxLines: 2,\n              maxLinesSuffix: '...'\n            }\n          },\n          content: [\n            'Text',\n            {\n              icon: lightningbolt,\n              title: 'Green Lightning Bolt',\n              style: { color: getHexColor('00ff00') }\n            },\n            'Wrapping Text',\n            {\n              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n              title: 'Rotten Tomatoes rating'\n            },\n            'and more text',\n            {\n              text: 'with some red ',\n              style: { textColor: getHexColor('FF6194') }\n            },\n            'for fun',\n            { badge: 'HD', title: 'HD' },\n            { badge: 'SD', title: 'SD' },\n            ', and this should truncate before going on to a third line.'\n          ],\n          contentWrap: true\n        }\n      };\n    }\n  };\n",
      "locationsMap": {
        "basic": {
          "startLoc": {
            "col": 21,
            "line": 35
          },
          "endLoc": {
            "col": 3,
            "line": 47
          },
          "startBody": {
            "col": 21,
            "line": 35
          },
          "endBody": {
            "col": 3,
            "line": 47
          }
        },
        "with-inline-content-array": {
          "startLoc": {
            "col": 38,
            "line": 100
          },
          "endLoc": {
            "col": 3,
            "line": 132
          },
          "startBody": {
            "col": 38,
            "line": 100
          },
          "endBody": {
            "col": 3,
            "line": 132
          }
        },
        "with-inline-content-string": {
          "startLoc": {
            "col": 39,
            "line": 137
          },
          "endLoc": {
            "col": 3,
            "line": 156
          },
          "startBody": {
            "col": 39,
            "line": 137
          },
          "endBody": {
            "col": 3,
            "line": 156
          }
        },
        "with-inline-content-truncation": {
          "startLoc": {
            "col": 43,
            "line": 161
          },
          "endLoc": {
            "col": 3,
            "line": 200
          },
          "startBody": {
            "col": 43,
            "line": 161
          },
          "endBody": {
            "col": 3,
            "line": 200
          }
        }
      }
    }
  },
  title: 'Components/TextBox'
});
var inlineContentArgs = _InlineContent_InlineContent_stories__WEBPACK_IMPORTED_MODULE_1__["default"].args,
  inlineContentArgTypes = _InlineContent_InlineContent_stories__WEBPACK_IMPORTED_MODULE_1__["default"].argTypes;
var lorum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales est eu eleifend interdum. Vivamus egestas maximus elementum. Sed condimentum ligula justo, non sollicitudin lectus rutrum vel. Integer iaculis vitae nisl quis tincidunt. Sed quis dui vehicula, vehicula felis a, tempor leo. Fusce tincidunt, ante eget pretium efficitur, libero elit volutpat quam, sit amet porta tortor odio non ligula. Ut sed dolor eleifend massa auctor porttitor eget ut lectus. Vivamus elementum lorem mauris, eu luctus tortor posuere sit amet. Nunc a interdum metus.';
var Basic = function Basic() {
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
          TextBox: {
            type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            fixed: true,
            w: 600,
            style: {
              textStyle: {
                maxLines: 3
              }
            }
          }
        };
      }
    }]);
    return Basic;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
Basic.args = {
  content: lorum,
  marquee: false,
  fixed: true,
  hideOnLoad: false,
  w: 600
};
Basic.argTypes = {
  content: {
    control: 'text',
    description: 'Text to be displayed in element',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  marquee: {
    control: 'boolean',
    description: "Scrolls text when a single line of text is longer than the textbox's width",
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  fixed: {
    control: 'boolean',
    description: 'Flag that when set to `true`, allows the width of the component to be set with `w`',
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  hideOnLoad: {
    control: 'boolean',
    remount: true,
    description: 'If `true`, the component will not render as visible following the text texture loading. This allows manually controlling the alpha of the component. The component will not render as visible if this is set to true.',
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  w: {
    control: 'number',
    description: 'When the `fixed` property is `true`, this will set the width of the component (but only if `wordWrapWidth` is not defined otherwise the width will reflect the `wordWrapWidth` value)',
    table: {
      defaultValue: {
        summary: 0
      }
    }
  }
};
var WithInlineContentArray = function WithInlineContentArray() {
  return /*#__PURE__*/function (_lng$Component2) {
    _inherits(WithInlineContentArray, _lng$Component2);
    var _super2 = _createSuper(WithInlineContentArray);
    function WithInlineContentArray() {
      _classCallCheck(this, WithInlineContentArray);
      return _super2.apply(this, arguments);
    }
    _createClass(WithInlineContentArray, null, [{
      key: "_template",
      value: function _template() {
        return {
          TextBox: {
            type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            x: 200,
            w: 400,
            content: ['Text', {
              icon: _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_3__,
              style: {
                color: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getHexColor */ .Xv)('00ff00')
              },
              title: 'Green Lightning Bolt'
            }, 'Wrapping Text', {
              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
              title: 'Rotten Tomatoes rating'
            }, 'and more text', {
              text: 'with some red ',
              style: {
                textColor: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getHexColor */ .Xv)('FF6194')
              }
            }, 'for fun', {
              badge: 'HD',
              title: 'HD'
            }, {
              badge: 'SD',
              title: 'SD'
            }]
          }
        };
      }
    }]);
    return WithInlineContentArray;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
WithInlineContentArray.args = inlineContentArgs;
WithInlineContentArray.argTypes = inlineContentArgTypes;
var WithInlineContentString = function WithInlineContentString() {
  return /*#__PURE__*/function (_lng$Component3) {
    _inherits(WithInlineContentArray, _lng$Component3);
    var _super3 = _createSuper(WithInlineContentArray);
    function WithInlineContentArray() {
      _classCallCheck(this, WithInlineContentArray);
      return _super3.apply(this, arguments);
    }
    _createClass(WithInlineContentArray, null, [{
      key: "_template",
      value: function _template() {
        return {
          TextBox: {
            type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            x: 400,
            w: 400,
            content: 'This is an example of using custom markup {ICON:settings|https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png} with a linebreak{NEWLINE}{BADGE:HD} that includes all available types like {TEXT:styled text|italic}.',
            customStyleMappings: {
              italic: {
                fontStyle: 'italic',
                textColor: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getHexColor */ .Xv)('FF6194')
              }
            }
          }
        };
      }
    }]);
    return WithInlineContentArray;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
WithInlineContentString.args = inlineContentArgs;
WithInlineContentString.argTypes = inlineContentArgTypes;
var WithInlineContentTruncation = function WithInlineContentTruncation() {
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
          TextBox: {
            type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            w: 500,
            style: {
              textStyle: {
                maxLines: 2,
                maxLinesSuffix: '...'
              }
            },
            content: ['Text', {
              icon: _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_3__,
              title: 'Green Lightning Bolt',
              style: {
                color: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getHexColor */ .Xv)('00ff00')
              }
            }, 'Wrapping Text', {
              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
              title: 'Rotten Tomatoes rating'
            }, 'and more text', {
              text: 'with some red ',
              style: {
                textColor: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getHexColor */ .Xv)('FF6194')
              }
            }, 'for fun', {
              badge: 'HD',
              title: 'HD'
            }, {
              badge: 'SD',
              title: 'SD'
            }, ', and this should truncate before going on to a third line.'],
            contentWrap: true
          }
        };
      }
    }]);
    return Basic;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => class Basic extends lng.Component {\n  static _template() {\n    return {\n      TextBox: {\n        type: TextBox,\n        fixed: true,\n        w: 600,\n        style: {\n          textStyle: {\n            maxLines: 3\n          }\n        }\n      }\n    };\n  }\n}",
      ...Basic.parameters?.docs?.source
    }
  }
};
WithInlineContentArray.parameters = {
  ...WithInlineContentArray.parameters,
  docs: {
    ...WithInlineContentArray.parameters?.docs,
    source: {
      originalSource: "() => class WithInlineContentArray extends lng.Component {\n  static _template() {\n    return {\n      TextBox: {\n        type: TextBox,\n        x: 200,\n        w: 400,\n        content: ['Text', {\n          icon: lightningbolt,\n          style: {\n            color: getHexColor('00ff00')\n          },\n          title: 'Green Lightning Bolt'\n        }, 'Wrapping Text', {\n          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n          title: 'Rotten Tomatoes rating'\n        }, 'and more text', {\n          text: 'with some red ',\n          style: {\n            textColor: getHexColor('FF6194')\n          }\n        }, 'for fun', {\n          badge: 'HD',\n          title: 'HD'\n        }, {\n          badge: 'SD',\n          title: 'SD'\n        }]\n      }\n    };\n  }\n}",
      ...WithInlineContentArray.parameters?.docs?.source
    }
  }
};
WithInlineContentString.parameters = {
  ...WithInlineContentString.parameters,
  docs: {
    ...WithInlineContentString.parameters?.docs,
    source: {
      originalSource: "() => class WithInlineContentArray extends lng.Component {\n  static _template() {\n    return {\n      TextBox: {\n        type: TextBox,\n        x: 400,\n        w: 400,\n        content: 'This is an example of using custom markup {ICON:settings|https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png} with a linebreak{NEWLINE}{BADGE:HD} that includes all available types like {TEXT:styled text|italic}.',\n        customStyleMappings: {\n          italic: {\n            fontStyle: 'italic',\n            textColor: getHexColor('FF6194')\n          }\n        }\n      }\n    };\n  }\n}",
      ...WithInlineContentString.parameters?.docs?.source
    }
  }
};
WithInlineContentTruncation.parameters = {
  ...WithInlineContentTruncation.parameters,
  docs: {
    ...WithInlineContentTruncation.parameters?.docs,
    source: {
      originalSource: "() => class Basic extends lng.Component {\n  static _template() {\n    return {\n      TextBox: {\n        type: TextBox,\n        w: 500,\n        style: {\n          textStyle: {\n            maxLines: 2,\n            maxLinesSuffix: '...'\n          }\n        },\n        content: ['Text', {\n          icon: lightningbolt,\n          title: 'Green Lightning Bolt',\n          style: {\n            color: getHexColor('00ff00')\n          }\n        }, 'Wrapping Text', {\n          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n          title: 'Rotten Tomatoes rating'\n        }, 'and more text', {\n          text: 'with some red ',\n          style: {\n            textColor: getHexColor('FF6194')\n          }\n        }, 'for fun', {\n          badge: 'HD',\n          title: 'HD'\n        }, {\n          badge: 'SD',\n          title: 'SD'\n        }, ', and this should truncate before going on to a third line.'],\n        contentWrap: true\n      }\n    };\n  }\n}",
      ...WithInlineContentTruncation.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Basic","WithInlineContentArray","WithInlineContentString","WithInlineContentTruncation"];

/***/ })

}]);
//# sourceMappingURL=components-TextBox-TextBox-stories.2f36c095.iframe.bundle.js.map