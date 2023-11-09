"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[2832],{

/***/ "../../@lightningjs/ui-components/src/components/Artwork/Artwork.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Artwork: () => (/* binding */ Artwork),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Artwork/Artwork.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _Artwork$parameters, _Artwork$parameters2;
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
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { default as ArtworkComponent } from '.';\n\nexport default {\n  title: 'Components/Artwork'\n};\n\nexport const Artwork = () =>\n  class Artwork extends lng.Component {\n    static _template() {\n      return {\n        Artwork: {\n          type: ArtworkComponent,\n          itemLayout: {\n            ratioX: 16,\n            ratioY: 9,\n            upCount: 3\n          }\n        }\n      };\n    }\n  };\n\nArtwork.args = {\n  blur: false,\n  foregroundSrc: false,\n  gradient: false,\n  format: 'default',\n  srcCallback: false,\n  fill: false,\n  shouldScale: false\n};\n\nArtwork.argTypes = {\n  format: {\n    control: 'radio',\n    options: ['default', 'circle', 'square', 'contain'],\n    description: 'Updates the treatment of src image',\n    table: {\n      defaultValue: { summary: 'default' }\n    }\n  },\n  blur: {\n    control: 'boolean',\n    description: 'Adds blur effect to image',\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  gradient: {\n    control: 'boolean',\n    description: 'Adds gradient to artwork area',\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  foregroundSrc: {\n    control: 'select',\n    options: [\n      'none',\n      'https://image.tmdb.org/t/p/w500/uBZlZ8yN3zScGIsbIRnyWg14JeM.png'\n    ],\n    description: 'Image to be displayed on top of artwork',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  srcCallback: {\n    control: 'boolean',\n    description:\n      'This property can be supplied with your own custom callback function to generate the src value. The values passed back into the srcCallback can help you make the proper request from a service for the image that will best fit your artwork space.',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  fill: {\n    control: 'boolean',\n    description: 'When true it will apply opacity on the image',\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  shouldScale: {\n    control: 'boolean',\n    description:\n      'When true it will scale the image to the value specified by the imageScale property',\n    table: {\n      defaultValue: { summary: false }\n    }\n  }\n};\n\nArtwork.parameters = {\n  argActions: {\n    foregroundSrc: (foregroundSrc, component) => {\n      component.tag('Artwork').foregroundSrc =\n        'none' !== foregroundSrc ? foregroundSrc : undefined;\n    },\n    srcCallback: (active, component) => {\n      if (active) {\n        // Accepts a regular function or function that returns a promise\n        component.tag('Artwork').patch({\n          src: '8501866671289235112',\n          srcCallback: ({ w, closestAspectRatio, src }) => {\n            return new Promise(resolve => {\n              setTimeout(() => {\n                resolve(\n                  `https://myriad.merlin.comcast.com/select/image?entityId=${src}&width=${w}&ratio=${closestAspectRatio}&rule=noTitle`\n                );\n              }, 500);\n            });\n          }\n        });\n      } else {\n        component.tag('Artwork').patch({\n          src: 'https://myriad.merlin.comcast.com/select/image?entityId=8501866671289235112&width=400&ratio=3x4&rule=noTitle',\n          srcCallback: undefined\n        });\n      }\n    }\n  }\n};\n\nArtwork.parameters = {\n  argActions: {\n    foregroundSrc: (foregroundSrc, component) => {\n      component.tag('Artwork').foregroundSrc =\n        'none' !== foregroundSrc ? foregroundSrc : undefined;\n    },\n    srcCallback: (active, component) => {\n      if (active) {\n        // Accepts a regular function or function that returns a promise\n        component.tag('Artwork').patch({\n          src: 'https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',\n          srcCallback: () => {\n            return new Promise(resolve => {\n              setTimeout(() => {\n                resolve(\n                  'https://image.tmdb.org/t/p/w500/o7qi2v4uWQ8bZ1tW3KI0Ztn2epk.jpg'\n                );\n              }, 500);\n            });\n          }\n        });\n      } else {\n        component.tag('Artwork').patch({\n          src: 'https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',\n          srcCallback: undefined\n        });\n      }\n    }\n  }\n};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "Artwork": {
    "startLoc": {
      "col": 23,
      "line": 24
    },
    "endLoc": {
      "col": 1,
      "line": 37
    },
    "startBody": {
      "col": 23,
      "line": 24
    },
    "endBody": {
      "col": 1,
      "line": 37
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
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { default as ArtworkComponent } from '.';\nexport default {\n  title: 'Components/Artwork'\n};\nexport const Artwork = () => class Artwork extends lng.Component {\n  static _template() {\n    return {\n      Artwork: {\n        type: ArtworkComponent,\n        itemLayout: {\n          ratioX: 16,\n          ratioY: 9,\n          upCount: 3\n        }\n      }\n    };\n  }\n};\nArtwork.args = {\n  blur: false,\n  foregroundSrc: false,\n  gradient: false,\n  format: 'default',\n  srcCallback: false,\n  fill: false,\n  shouldScale: false\n};\nArtwork.argTypes = {\n  format: {\n    control: 'radio',\n    options: ['default', 'circle', 'square', 'contain'],\n    description: 'Updates the treatment of src image',\n    table: {\n      defaultValue: {\n        summary: 'default'\n      }\n    }\n  },\n  blur: {\n    control: 'boolean',\n    description: 'Adds blur effect to image',\n    table: {\n      defaultValue: {\n        summary: false\n      }\n    }\n  },\n  gradient: {\n    control: 'boolean',\n    description: 'Adds gradient to artwork area',\n    table: {\n      defaultValue: {\n        summary: false\n      }\n    }\n  },\n  foregroundSrc: {\n    control: 'select',\n    options: ['none', 'https://image.tmdb.org/t/p/w500/uBZlZ8yN3zScGIsbIRnyWg14JeM.png'],\n    description: 'Image to be displayed on top of artwork',\n    table: {\n      defaultValue: {\n        summary: 'undefined'\n      }\n    }\n  },\n  srcCallback: {\n    control: 'boolean',\n    description: 'This property can be supplied with your own custom callback function to generate the src value. The values passed back into the srcCallback can help you make the proper request from a service for the image that will best fit your artwork space.',\n    table: {\n      defaultValue: {\n        summary: 'undefined'\n      }\n    }\n  },\n  fill: {\n    control: 'boolean',\n    description: 'When true it will apply opacity on the image',\n    table: {\n      defaultValue: {\n        summary: false\n      }\n    }\n  },\n  shouldScale: {\n    control: 'boolean',\n    description: 'When true it will scale the image to the value specified by the imageScale property',\n    table: {\n      defaultValue: {\n        summary: false\n      }\n    }\n  }\n};\nArtwork.parameters = {\n  argActions: {\n    foregroundSrc: (foregroundSrc, component) => {\n      component.tag('Artwork').foregroundSrc = 'none' !== foregroundSrc ? foregroundSrc : undefined;\n    },\n    srcCallback: (active, component) => {\n      if (active) {\n        // Accepts a regular function or function that returns a promise\n        component.tag('Artwork').patch({\n          src: '8501866671289235112',\n          srcCallback: ({\n            w,\n            closestAspectRatio,\n            src\n          }) => {\n            return new Promise(resolve => {\n              setTimeout(() => {\n                resolve(`https://myriad.merlin.comcast.com/select/image?entityId=${src}&width=${w}&ratio=${closestAspectRatio}&rule=noTitle`);\n              }, 500);\n            });\n          }\n        });\n      } else {\n        component.tag('Artwork').patch({\n          src: 'https://myriad.merlin.comcast.com/select/image?entityId=8501866671289235112&width=400&ratio=3x4&rule=noTitle',\n          srcCallback: undefined\n        });\n      }\n    }\n  }\n};\nArtwork.parameters = {\n  argActions: {\n    foregroundSrc: (foregroundSrc, component) => {\n      component.tag('Artwork').foregroundSrc = 'none' !== foregroundSrc ? foregroundSrc : undefined;\n    },\n    srcCallback: (active, component) => {\n      if (active) {\n        // Accepts a regular function or function that returns a promise\n        component.tag('Artwork').patch({\n          src: 'https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',\n          srcCallback: () => {\n            return new Promise(resolve => {\n              setTimeout(() => {\n                resolve('https://image.tmdb.org/t/p/w500/o7qi2v4uWQ8bZ1tW3KI0Ztn2epk.jpg');\n              }, 500);\n            });\n          }\n        });\n      } else {\n        component.tag('Artwork').patch({\n          src: 'https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',\n          srcCallback: undefined\n        });\n      }\n    }\n  }\n};\nArtwork.parameters = {\n  ...Artwork.parameters,\n  docs: {\n    ...Artwork.parameters?.docs,\n    source: {\n      originalSource: \"() => class Artwork extends lng.Component {\\n  static _template() {\\n    return {\\n      Artwork: {\\n        type: ArtworkComponent,\\n        itemLayout: {\\n          ratioX: 16,\\n          ratioY: 9,\\n          upCount: 3\\n        }\\n      }\\n    };\\n  }\\n}\",\n      ...Artwork.parameters?.docs?.source\n    }\n  }\n};",
      "locationsMap": {
        "artwork": {
          "startLoc": {
            "col": 23,
            "line": 24
          },
          "endLoc": {
            "col": 1,
            "line": 37
          },
          "startBody": {
            "col": 23,
            "line": 24
          },
          "endBody": {
            "col": 1,
            "line": 37
          }
        }
      }
    }
  },
  title: 'Components/Artwork'
});
var Artwork = function Artwork() {
  return /*#__PURE__*/function (_lng$Component) {
    _inherits(Artwork, _lng$Component);
    var _super = _createSuper(Artwork);
    function Artwork() {
      _classCallCheck(this, Artwork);
      return _super.apply(this, arguments);
    }
    _createClass(Artwork, null, [{
      key: "_template",
      value: function _template() {
        return {
          Artwork: {
            type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
            itemLayout: {
              ratioX: 16,
              ratioY: 9,
              upCount: 3
            }
          }
        };
      }
    }]);
    return Artwork;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
Artwork.args = {
  blur: false,
  foregroundSrc: false,
  gradient: false,
  format: 'default',
  srcCallback: false,
  fill: false,
  shouldScale: false
};
Artwork.argTypes = {
  format: {
    control: 'radio',
    options: ['default', 'circle', 'square', 'contain'],
    description: 'Updates the treatment of src image',
    table: {
      defaultValue: {
        summary: 'default'
      }
    }
  },
  blur: {
    control: 'boolean',
    description: 'Adds blur effect to image',
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  gradient: {
    control: 'boolean',
    description: 'Adds gradient to artwork area',
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  foregroundSrc: {
    control: 'select',
    options: ['none', 'https://image.tmdb.org/t/p/w500/uBZlZ8yN3zScGIsbIRnyWg14JeM.png'],
    description: 'Image to be displayed on top of artwork',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  srcCallback: {
    control: 'boolean',
    description: 'This property can be supplied with your own custom callback function to generate the src value. The values passed back into the srcCallback can help you make the proper request from a service for the image that will best fit your artwork space.',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  fill: {
    control: 'boolean',
    description: 'When true it will apply opacity on the image',
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  shouldScale: {
    control: 'boolean',
    description: 'When true it will scale the image to the value specified by the imageScale property',
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
};
Artwork.parameters = {
  argActions: {
    foregroundSrc: function foregroundSrc(_foregroundSrc, component) {
      component.tag('Artwork').foregroundSrc = 'none' !== _foregroundSrc ? _foregroundSrc : undefined;
    },
    srcCallback: function srcCallback(active, component) {
      if (active) {
        // Accepts a regular function or function that returns a promise
        component.tag('Artwork').patch({
          src: '8501866671289235112',
          srcCallback: function srcCallback(_ref) {
            var w = _ref.w,
              closestAspectRatio = _ref.closestAspectRatio,
              src = _ref.src;
            return new Promise(function (resolve) {
              setTimeout(function () {
                resolve("https://myriad.merlin.comcast.com/select/image?entityId=".concat(src, "&width=").concat(w, "&ratio=").concat(closestAspectRatio, "&rule=noTitle"));
              }, 500);
            });
          }
        });
      } else {
        component.tag('Artwork').patch({
          src: 'https://myriad.merlin.comcast.com/select/image?entityId=8501866671289235112&width=400&ratio=3x4&rule=noTitle',
          srcCallback: undefined
        });
      }
    }
  }
};
Artwork.parameters = {
  argActions: {
    foregroundSrc: function foregroundSrc(_foregroundSrc2, component) {
      component.tag('Artwork').foregroundSrc = 'none' !== _foregroundSrc2 ? _foregroundSrc2 : undefined;
    },
    srcCallback: function srcCallback(active, component) {
      if (active) {
        // Accepts a regular function or function that returns a promise
        component.tag('Artwork').patch({
          src: 'https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
          srcCallback: function srcCallback() {
            return new Promise(function (resolve) {
              setTimeout(function () {
                resolve('https://image.tmdb.org/t/p/w500/o7qi2v4uWQ8bZ1tW3KI0Ztn2epk.jpg');
              }, 500);
            });
          }
        });
      } else {
        component.tag('Artwork').patch({
          src: 'https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
          srcCallback: undefined
        });
      }
    }
  }
};
Artwork.parameters = _objectSpread(_objectSpread({}, Artwork.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_Artwork$parameters = Artwork.parameters) === null || _Artwork$parameters === void 0 ? void 0 : _Artwork$parameters.docs), {}, {
    source: _objectSpread({
      originalSource: "() => class Artwork extends lng.Component {\n  static _template() {\n    return {\n      Artwork: {\n        type: ArtworkComponent,\n        itemLayout: {\n          ratioX: 16,\n          ratioY: 9,\n          upCount: 3\n        }\n      }\n    };\n  }\n}"
    }, (_Artwork$parameters2 = Artwork.parameters) === null || _Artwork$parameters2 === void 0 || (_Artwork$parameters2 = _Artwork$parameters2.docs) === null || _Artwork$parameters2 === void 0 ? void 0 : _Artwork$parameters2.source)
  })
});
var __namedExportsOrder = ["Artwork"];

/***/ })

}]);
//# sourceMappingURL=components-Artwork-Artwork-stories.2c48df2b.iframe.bundle.js.map