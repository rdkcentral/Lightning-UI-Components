"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[6949,5139],{

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
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { default as ArtworkComponent } from '.';\n\nexport default {\n  title: 'Components/Artwork'\n};\n\nexport const Artwork = () =>\n  class Artwork extends lng.Component {\n    static _template() {\n      return {\n        Artwork: {\n          type: ArtworkComponent,\n          itemLayout: {\n            ratioX: 16,\n            ratioY: 9,\n            upCount: 3\n          }\n        }\n      };\n    }\n  };\n\nArtwork.args = {\n  blur: false,\n  foregroundSrc: false,\n  gradient: false,\n  format: 'default',\n  srcCallback: false,\n  fill: false,\n  shouldScale: false\n};\n\nArtwork.argTypes = {\n  format: {\n    control: 'radio',\n    options: ['default', 'circle', 'square', 'contain'],\n    description: 'Updates the treatment of src image',\n    table: {\n      defaultValue: { summary: 'default' }\n    }\n  },\n  blur: {\n    control: 'boolean',\n    description: 'Adds blur effect to image',\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  gradient: {\n    control: 'boolean',\n    description: 'Adds gradient to artwork area',\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  foregroundSrc: {\n    control: 'select',\n    options: [\n      'none',\n      'https://image.tmdb.org/t/p/w500/uBZlZ8yN3zScGIsbIRnyWg14JeM.png'\n    ],\n    description: 'Image to be displayed on top of artwork',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  srcCallback: {\n    control: 'boolean',\n    description:\n      'This property can be supplied with your own custom callback function to generate the src value. The values passed back into the srcCallback can help you make the proper request from a service for the image that will best fit your artwork space.',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  fill: {\n    control: 'boolean',\n    description: 'When true it will apply opacity on the image',\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  shouldScale: {\n    control: 'boolean',\n    description:\n      'When true it will scale the image to the value specified by the imageScale property',\n    table: {\n      defaultValue: { summary: false }\n    }\n  }\n};\n\nArtwork.parameters = {\n  argActions: {\n    foregroundSrc: (foregroundSrc, component) => {\n      component.tag('Artwork').foregroundSrc =\n        'none' !== foregroundSrc ? foregroundSrc : undefined;\n    },\n    srcCallback: (active, component) => {\n      if (active) {\n        // Accepts a regular function or function that returns a promise\n        component.tag('Artwork').patch({\n          src: 'https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',\n          srcCallback: () => {\n            return new Promise(resolve => {\n              setTimeout(() => {\n                resolve(\n                  'https://image.tmdb.org/t/p/w500/o7qi2v4uWQ8bZ1tW3KI0Ztn2epk.jpg'\n                );\n              }, 500);\n            });\n          }\n        });\n      } else {\n        component.tag('Artwork').patch({\n          src: 'https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',\n          srcCallback: undefined\n        });\n      }\n    }\n  }\n};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "Artwork": {
    "startLoc": {
      "col": 23,
      "line": 26
    },
    "endLoc": {
      "col": 3,
      "line": 40
    },
    "startBody": {
      "col": 23,
      "line": 26
    },
    "endBody": {
      "col": 3,
      "line": 40
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
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { default as ArtworkComponent } from '.';\n\nexport default {\n  title: 'Components/Artwork'\n};\n\nexport const Artwork = () =>\n  class Artwork extends lng.Component {\n    static _template() {\n      return {\n        Artwork: {\n          type: ArtworkComponent,\n          itemLayout: {\n            ratioX: 16,\n            ratioY: 9,\n            upCount: 3\n          }\n        }\n      };\n    }\n  };\n\nArtwork.args = {\n  blur: false,\n  foregroundSrc: false,\n  gradient: false,\n  format: 'default',\n  srcCallback: false,\n  fill: false,\n  shouldScale: false\n};\n\nArtwork.argTypes = {\n  format: {\n    control: 'radio',\n    options: ['default', 'circle', 'square', 'contain'],\n    description: 'Updates the treatment of src image',\n    table: {\n      defaultValue: { summary: 'default' }\n    }\n  },\n  blur: {\n    control: 'boolean',\n    description: 'Adds blur effect to image',\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  gradient: {\n    control: 'boolean',\n    description: 'Adds gradient to artwork area',\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  foregroundSrc: {\n    control: 'select',\n    options: [\n      'none',\n      'https://image.tmdb.org/t/p/w500/uBZlZ8yN3zScGIsbIRnyWg14JeM.png'\n    ],\n    description: 'Image to be displayed on top of artwork',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  srcCallback: {\n    control: 'boolean',\n    description:\n      'This property can be supplied with your own custom callback function to generate the src value. The values passed back into the srcCallback can help you make the proper request from a service for the image that will best fit your artwork space.',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  fill: {\n    control: 'boolean',\n    description: 'When true it will apply opacity on the image',\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  shouldScale: {\n    control: 'boolean',\n    description:\n      'When true it will scale the image to the value specified by the imageScale property',\n    table: {\n      defaultValue: { summary: false }\n    }\n  }\n};\n\nArtwork.parameters = {\n  argActions: {\n    foregroundSrc: (foregroundSrc, component) => {\n      component.tag('Artwork').foregroundSrc =\n        'none' !== foregroundSrc ? foregroundSrc : undefined;\n    },\n    srcCallback: (active, component) => {\n      if (active) {\n        // Accepts a regular function or function that returns a promise\n        component.tag('Artwork').patch({\n          src: 'https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',\n          srcCallback: () => {\n            return new Promise(resolve => {\n              setTimeout(() => {\n                resolve(\n                  'https://image.tmdb.org/t/p/w500/o7qi2v4uWQ8bZ1tW3KI0Ztn2epk.jpg'\n                );\n              }, 500);\n            });\n          }\n        });\n      } else {\n        component.tag('Artwork').patch({\n          src: 'https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',\n          srcCallback: undefined\n        });\n      }\n    }\n  }\n};\n",
      "locationsMap": {
        "artwork": {
          "startLoc": {
            "col": 23,
            "line": 26
          },
          "endLoc": {
            "col": 3,
            "line": 40
          },
          "startBody": {
            "col": 23,
            "line": 26
          },
          "endBody": {
            "col": 3,
            "line": 40
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
            type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
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
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
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
Artwork.parameters = {
  ...Artwork.parameters,
  docs: {
    ...Artwork.parameters?.docs,
    source: {
      originalSource: "() => class Artwork extends lng.Component {\n  static _template() {\n    return {\n      Artwork: {\n        type: ArtworkComponent,\n        itemLayout: {\n          ratioX: 16,\n          ratioY: 9,\n          upCount: 3\n        }\n      }\n    };\n  }\n}",
      ...Artwork.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Artwork"];

/***/ }),

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
            type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
            title: args.title
          }
        };
      }
    }]);
    return Basic;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
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
            type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
            icon: _assets_images_circle_svg__WEBPACK_IMPORTED_MODULE_2__,
            iconWidth: 24,
            title: 'HD'
          }
        };
      }
    }]);
    return Basic;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
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
            type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
            icon: _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_3__
          }
        };
      }
    }]);
    return Basic;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
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
            type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
            icon: _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_3__
          }
        };
      }
    }]);
    return Basic;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
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

/***/ "../../@lightningjs/ui-components/src/components/Checkbox/Checkbox.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Checkbox: () => (/* binding */ Checkbox),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Checkbox/Checkbox.js");
/* harmony import */ var _docs_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
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
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { default as CheckboxComponent } from '.';\nimport { createModeControl } from '../../docs/utils';\n\nexport default {\n  title: 'Components/Checkboxes/Checkbox'\n};\n\nexport const Checkbox = () =>\n  class Checkbox extends lng.Component {\n    static _template() {\n      return {\n        Checkbox: {\n          type: CheckboxComponent\n        }\n      };\n    }\n  };\n\nCheckbox.args = {\n  checked: false,\n  mode: 'focused'\n};\n\nCheckbox.argTypes = {\n  ...createModeControl({ summaryValue: 'focused' }),\n  checked: {\n    control: 'boolean',\n    description: 'Toggles checked between on and off',\n    table: {\n      defaultValue: { summary: false }\n    }\n  }\n};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "Checkbox": {
    "startLoc": {
      "col": 24,
      "line": 27
    },
    "endLoc": {
      "col": 3,
      "line": 36
    },
    "startBody": {
      "col": 24,
      "line": 27
    },
    "endBody": {
      "col": 3,
      "line": 36
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
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { default as CheckboxComponent } from '.';\nimport { createModeControl } from '../../docs/utils';\n\nexport default {\n  title: 'Components/Checkboxes/Checkbox'\n};\n\nexport const Checkbox = () =>\n  class Checkbox extends lng.Component {\n    static _template() {\n      return {\n        Checkbox: {\n          type: CheckboxComponent\n        }\n      };\n    }\n  };\n\nCheckbox.args = {\n  checked: false,\n  mode: 'focused'\n};\n\nCheckbox.argTypes = {\n  ...createModeControl({ summaryValue: 'focused' }),\n  checked: {\n    control: 'boolean',\n    description: 'Toggles checked between on and off',\n    table: {\n      defaultValue: { summary: false }\n    }\n  }\n};\n",
      "locationsMap": {
        "checkbox": {
          "startLoc": {
            "col": 24,
            "line": 27
          },
          "endLoc": {
            "col": 3,
            "line": 36
          },
          "startBody": {
            "col": 24,
            "line": 27
          },
          "endBody": {
            "col": 3,
            "line": 36
          }
        }
      }
    }
  },
  title: 'Components/Checkboxes/Checkbox'
});
var Checkbox = function Checkbox() {
  return /*#__PURE__*/function (_lng$Component) {
    _inherits(Checkbox, _lng$Component);
    var _super = _createSuper(Checkbox);
    function Checkbox() {
      _classCallCheck(this, Checkbox);
      return _super.apply(this, arguments);
    }
    _createClass(Checkbox, null, [{
      key: "_template",
      value: function _template() {
        return {
          Checkbox: {
            type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A
          }
        };
      }
    }]);
    return Checkbox;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
};
Checkbox.args = {
  checked: false,
  mode: 'focused'
};
Checkbox.argTypes = _objectSpread(_objectSpread({}, (0,_docs_utils__WEBPACK_IMPORTED_MODULE_2__/* .createModeControl */ .Pg)({
  summaryValue: 'focused'
})), {}, {
  checked: {
    control: 'boolean',
    description: 'Toggles checked between on and off',
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
});
Checkbox.parameters = {
  ...Checkbox.parameters,
  docs: {
    ...Checkbox.parameters?.docs,
    source: {
      originalSource: "() => class Checkbox extends lng.Component {\n  static _template() {\n    return {\n      Checkbox: {\n        type: CheckboxComponent\n      }\n    };\n  }\n}",
      ...Checkbox.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Checkbox"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Label/Label.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Label: () => (/* binding */ Label),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Label/Label.js");
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
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { default as LabelComponent } from '.';\n\nexport default {\n  title: 'Components/Label'\n};\n\nexport const Label = () =>\n  class Label extends lng.Component {\n    static _template() {\n      return {\n        Label: {\n          type: LabelComponent\n        }\n      };\n    }\n  };\nLabel.args = {\n  title: 'Label'\n};\nLabel.argTypes = {\n  title: {\n    control: 'text',\n    description: 'Text to display in the foreground of the label',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  }\n};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "Label": {
    "startLoc": {
      "col": 21,
      "line": 26
    },
    "endLoc": {
      "col": 3,
      "line": 35
    },
    "startBody": {
      "col": 21,
      "line": 26
    },
    "endBody": {
      "col": 3,
      "line": 35
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
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { default as LabelComponent } from '.';\n\nexport default {\n  title: 'Components/Label'\n};\n\nexport const Label = () =>\n  class Label extends lng.Component {\n    static _template() {\n      return {\n        Label: {\n          type: LabelComponent\n        }\n      };\n    }\n  };\nLabel.args = {\n  title: 'Label'\n};\nLabel.argTypes = {\n  title: {\n    control: 'text',\n    description: 'Text to display in the foreground of the label',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  }\n};\n",
      "locationsMap": {
        "label": {
          "startLoc": {
            "col": 21,
            "line": 26
          },
          "endLoc": {
            "col": 3,
            "line": 35
          },
          "startBody": {
            "col": 21,
            "line": 26
          },
          "endBody": {
            "col": 3,
            "line": 35
          }
        }
      }
    }
  },
  title: 'Components/Label'
});
var Label = function Label() {
  return /*#__PURE__*/function (_lng$Component) {
    _inherits(Label, _lng$Component);
    var _super = _createSuper(Label);
    function Label() {
      _classCallCheck(this, Label);
      return _super.apply(this, arguments);
    }
    _createClass(Label, null, [{
      key: "_template",
      value: function _template() {
        return {
          Label: {
            type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A
          }
        };
      }
    }]);
    return Label;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
};
Label.args = {
  title: 'Label'
};
Label.argTypes = {
  title: {
    control: 'text',
    description: 'Text to display in the foreground of the label',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  }
};
Label.parameters = {
  ...Label.parameters,
  docs: {
    ...Label.parameters?.docs,
    source: {
      originalSource: "() => class Label extends lng.Component {\n  static _template() {\n    return {\n      Label: {\n        type: LabelComponent\n      }\n    };\n  }\n}",
      ...Label.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Label"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/ProgressBar/ProgressBar.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgressBar: () => (/* binding */ ProgressBar),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/ProgressBar/ProgressBar.js");
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
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { default as ProgressBarComponent } from '.';\n\nexport default {\n  title: 'Components/ProgressBar',\n  parameters: {\n    tag: 'ProgressBar',\n    actions: {\n      handles: ['mouseover', 'click .btn']\n    }\n  }\n};\n\nexport const ProgressBar = () =>\n  class ProgressBar extends lng.Component {\n    static _template() {\n      return {\n        ProgressBar: {\n          type: ProgressBarComponent\n        }\n      };\n    }\n  };\nProgressBar.storyName = 'ProgressBar';\nProgressBar.args = {\n  progress: 0.5,\n  w: 410\n};\nProgressBar.argTypes = {\n  progress: {\n    control: {\n      type: 'range',\n      min: 0,\n      max: 1,\n      step: 0.01\n    },\n    description: 'Percentage of the current progress from 0 to 1',\n    table: { defaultValue: { summary: 0 } }\n  },\n  w: {\n    control: {\n      type: 'range',\n      min: 0,\n      max: 600,\n      step: 0.01\n    },\n    description: 'width of the entire bar',\n    table: { defaultValue: { summary: 0 } }\n  }\n};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "ProgressBar": {
    "startLoc": {
      "col": 27,
      "line": 32
    },
    "endLoc": {
      "col": 3,
      "line": 41
    },
    "startBody": {
      "col": 27,
      "line": 32
    },
    "endBody": {
      "col": 3,
      "line": 41
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
  title: 'Components/ProgressBar',
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { default as ProgressBarComponent } from '.';\n\nexport default {\n  title: 'Components/ProgressBar',\n  parameters: {\n    tag: 'ProgressBar',\n    actions: {\n      handles: ['mouseover', 'click .btn']\n    }\n  }\n};\n\nexport const ProgressBar = () =>\n  class ProgressBar extends lng.Component {\n    static _template() {\n      return {\n        ProgressBar: {\n          type: ProgressBarComponent\n        }\n      };\n    }\n  };\nProgressBar.storyName = 'ProgressBar';\nProgressBar.args = {\n  progress: 0.5,\n  w: 410\n};\nProgressBar.argTypes = {\n  progress: {\n    control: {\n      type: 'range',\n      min: 0,\n      max: 1,\n      step: 0.01\n    },\n    description: 'Percentage of the current progress from 0 to 1',\n    table: { defaultValue: { summary: 0 } }\n  },\n  w: {\n    control: {\n      type: 'range',\n      min: 0,\n      max: 600,\n      step: 0.01\n    },\n    description: 'width of the entire bar',\n    table: { defaultValue: { summary: 0 } }\n  }\n};\n",
      "locationsMap": {
        "progress-bar": {
          "startLoc": {
            "col": 27,
            "line": 32
          },
          "endLoc": {
            "col": 3,
            "line": 41
          },
          "startBody": {
            "col": 27,
            "line": 32
          },
          "endBody": {
            "col": 3,
            "line": 41
          }
        }
      }
    },
    tag: 'ProgressBar',
    actions: {
      handles: ['mouseover', 'click .btn']
    }
  }
});
var ProgressBar = function ProgressBar() {
  return /*#__PURE__*/function (_lng$Component) {
    _inherits(ProgressBar, _lng$Component);
    var _super = _createSuper(ProgressBar);
    function ProgressBar() {
      _classCallCheck(this, ProgressBar);
      return _super.apply(this, arguments);
    }
    _createClass(ProgressBar, null, [{
      key: "_template",
      value: function _template() {
        return {
          ProgressBar: {
            type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A
          }
        };
      }
    }]);
    return ProgressBar;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
};
ProgressBar.storyName = 'ProgressBar';
ProgressBar.args = {
  progress: 0.5,
  w: 410
};
ProgressBar.argTypes = {
  progress: {
    control: {
      type: 'range',
      min: 0,
      max: 1,
      step: 0.01
    },
    description: 'Percentage of the current progress from 0 to 1',
    table: {
      defaultValue: {
        summary: 0
      }
    }
  },
  w: {
    control: {
      type: 'range',
      min: 0,
      max: 600,
      step: 0.01
    },
    description: 'width of the entire bar',
    table: {
      defaultValue: {
        summary: 0
      }
    }
  }
};
ProgressBar.parameters = {
  ...ProgressBar.parameters,
  docs: {
    ...ProgressBar.parameters?.docs,
    source: {
      originalSource: "() => class ProgressBar extends lng.Component {\n  static _template() {\n    return {\n      ProgressBar: {\n        type: ProgressBarComponent\n      }\n    };\n  }\n}",
      ...ProgressBar.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["ProgressBar"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Tile/Tile.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tile: () => (/* binding */ Tile),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Tile/Tile.js");
/* harmony import */ var _docs_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
/* harmony import */ var _Artwork_Artwork_stories__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Artwork/Artwork.stories.js");
/* harmony import */ var _Checkbox_Checkbox_stories__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Checkbox/Checkbox.stories.js");
/* harmony import */ var _MetadataTile_MetadataTile_stories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/components/MetadataTile/MetadataTile.stories.js");
/* harmony import */ var _mixins_withLayout_withLayout_stories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../@lightningjs/ui-components/src/mixins/withLayout/withLayout.stories.js");
/* harmony import */ var _Label_Label_stories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Label/Label.stories.js");
/* harmony import */ var _ProgressBar_ProgressBar_stories__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../@lightningjs/ui-components/src/components/ProgressBar/ProgressBar.stories.js");
/* harmony import */ var _Badge_Badge_stories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Badge/Badge.stories.js");
/* harmony import */ var _assets_images_Xfinity_Provider_Logo_2x1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/Xfinity-Provider-Logo-2x1.png");
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
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
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { default as TileComponent } from '.';\nimport { createModeControl, generateSubStory } from '../../docs/utils';\nimport { Artwork as ArtworkStory } from '../Artwork/Artwork.stories';\nimport { Checkbox as CheckboxStory } from '../Checkbox/Checkbox.stories';\nimport { MetadataTile as MetadataTileStory } from '../MetadataTile/MetadataTile.stories';\nimport { withLayout as ItemLayoutStory } from '../../mixins/withLayout/withLayout.stories';\nimport { Label as LabelStory } from '../Label/Label.stories';\nimport { ProgressBar as ProgressBarStory } from '../ProgressBar/ProgressBar.stories';\nimport { Text as BadgeStory } from '../Badge/Badge.stories';\nimport xfinityLogo from '../../assets/images/Xfinity-Provider-Logo-2x1.png';\n\nexport default {\n  title: 'Components/Tile'\n};\n\nexport const Tile = () =>\n  class Tile extends lng.Component {\n    static _template() {\n      return {\n        Tile: {\n          type: TileComponent,\n          itemLayout: {\n            ratioX: 16,\n            ratioY: 9,\n            upCount: 3\n          },\n          artwork: {\n            src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg'\n          }\n        }\n      };\n    }\n  };\n\nTile.args = {\n  metadataLocation: 'standard',\n  logo: xfinityLogo,\n  persistentMetadata: false,\n  mode: 'focused'\n};\n\nTile.argTypes = {\n  ...createModeControl({ summaryValue: Tile.args.mode }),\n  persistentMetadata: {\n    control: 'boolean',\n    description: 'Show metadata if exists regardless of focusState',\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  metadataLocation: {\n    control: 'radio',\n    options: ['standard', 'inset'],\n    description:\n      'Controls where metadata is positioned in relationship to the Tile',\n    table: {\n      defaultValue: { summary: 'standard' }\n    }\n  },\n  logo: {\n    control: 'select',\n    options: [xfinityLogo, null],\n    description: 'Icon source',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  }\n};\n\ngenerateSubStory({\n  componentName: 'Tile',\n  baseStory: Tile,\n  subStory: MetadataTileStory,\n  targetProperty: 'metadata',\n  include: ['title', 'description']\n});\ngenerateSubStory({\n  componentName: 'Tile',\n  baseStory: Tile,\n  subStory: ItemLayoutStory,\n  targetProperty: 'itemLayout',\n  include: ['ratioX', 'ratioY', 'upCount', 'circle']\n});\ngenerateSubStory({\n  componentName: 'Tile',\n  baseStory: Tile,\n  subStory: BadgeStory,\n  targetProperty: 'badge',\n  include: ['title']\n});\ngenerateSubStory({\n  componentName: 'Tile',\n  baseStory: Tile,\n  subStory: LabelStory,\n  targetProperty: 'label',\n  include: ['title']\n});\ngenerateSubStory({\n  componentName: 'Tile',\n  baseStory: Tile,\n  subStory: ArtworkStory,\n  targetProperty: 'artwork',\n  include: ['blur', 'foregroundSrc', 'format', 'fill']\n});\ngenerateSubStory({\n  componentName: 'Tile',\n  baseStory: Tile,\n  subStory: ProgressBarStory,\n  targetProperty: 'progressBar',\n  include: ['progress']\n});\ngenerateSubStory({\n  componentName: 'Tile',\n  baseStory: Tile,\n  subStory: CheckboxStory,\n  targetProperty: 'checkbox',\n  include: ['checked']\n});\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "Tile": {
    "startLoc": {
      "col": 20,
      "line": 35
    },
    "endLoc": {
      "col": 3,
      "line": 52
    },
    "startBody": {
      "col": 20,
      "line": 35
    },
    "endBody": {
      "col": 3,
      "line": 52
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
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { default as TileComponent } from '.';\nimport { createModeControl, generateSubStory } from '../../docs/utils';\nimport { Artwork as ArtworkStory } from '../Artwork/Artwork.stories';\nimport { Checkbox as CheckboxStory } from '../Checkbox/Checkbox.stories';\nimport { MetadataTile as MetadataTileStory } from '../MetadataTile/MetadataTile.stories';\nimport { withLayout as ItemLayoutStory } from '../../mixins/withLayout/withLayout.stories';\nimport { Label as LabelStory } from '../Label/Label.stories';\nimport { ProgressBar as ProgressBarStory } from '../ProgressBar/ProgressBar.stories';\nimport { Text as BadgeStory } from '../Badge/Badge.stories';\nimport xfinityLogo from '../../assets/images/Xfinity-Provider-Logo-2x1.png';\n\nexport default {\n  title: 'Components/Tile'\n};\n\nexport const Tile = () =>\n  class Tile extends lng.Component {\n    static _template() {\n      return {\n        Tile: {\n          type: TileComponent,\n          itemLayout: {\n            ratioX: 16,\n            ratioY: 9,\n            upCount: 3\n          },\n          artwork: {\n            src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg'\n          }\n        }\n      };\n    }\n  };\n\nTile.args = {\n  metadataLocation: 'standard',\n  logo: xfinityLogo,\n  persistentMetadata: false,\n  mode: 'focused'\n};\n\nTile.argTypes = {\n  ...createModeControl({ summaryValue: Tile.args.mode }),\n  persistentMetadata: {\n    control: 'boolean',\n    description: 'Show metadata if exists regardless of focusState',\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  metadataLocation: {\n    control: 'radio',\n    options: ['standard', 'inset'],\n    description:\n      'Controls where metadata is positioned in relationship to the Tile',\n    table: {\n      defaultValue: { summary: 'standard' }\n    }\n  },\n  logo: {\n    control: 'select',\n    options: [xfinityLogo, null],\n    description: 'Icon source',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  }\n};\n\ngenerateSubStory({\n  componentName: 'Tile',\n  baseStory: Tile,\n  subStory: MetadataTileStory,\n  targetProperty: 'metadata',\n  include: ['title', 'description']\n});\ngenerateSubStory({\n  componentName: 'Tile',\n  baseStory: Tile,\n  subStory: ItemLayoutStory,\n  targetProperty: 'itemLayout',\n  include: ['ratioX', 'ratioY', 'upCount', 'circle']\n});\ngenerateSubStory({\n  componentName: 'Tile',\n  baseStory: Tile,\n  subStory: BadgeStory,\n  targetProperty: 'badge',\n  include: ['title']\n});\ngenerateSubStory({\n  componentName: 'Tile',\n  baseStory: Tile,\n  subStory: LabelStory,\n  targetProperty: 'label',\n  include: ['title']\n});\ngenerateSubStory({\n  componentName: 'Tile',\n  baseStory: Tile,\n  subStory: ArtworkStory,\n  targetProperty: 'artwork',\n  include: ['blur', 'foregroundSrc', 'format', 'fill']\n});\ngenerateSubStory({\n  componentName: 'Tile',\n  baseStory: Tile,\n  subStory: ProgressBarStory,\n  targetProperty: 'progressBar',\n  include: ['progress']\n});\ngenerateSubStory({\n  componentName: 'Tile',\n  baseStory: Tile,\n  subStory: CheckboxStory,\n  targetProperty: 'checkbox',\n  include: ['checked']\n});\n",
      "locationsMap": {
        "tile": {
          "startLoc": {
            "col": 20,
            "line": 35
          },
          "endLoc": {
            "col": 3,
            "line": 52
          },
          "startBody": {
            "col": 20,
            "line": 35
          },
          "endBody": {
            "col": 3,
            "line": 52
          }
        }
      }
    }
  },
  title: 'Components/Tile'
});
var Tile = function Tile() {
  return /*#__PURE__*/function (_lng$Component) {
    _inherits(Tile, _lng$Component);
    var _super = _createSuper(Tile);
    function Tile() {
      _classCallCheck(this, Tile);
      return _super.apply(this, arguments);
    }
    _createClass(Tile, null, [{
      key: "_template",
      value: function _template() {
        return {
          Tile: {
            type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
            itemLayout: {
              ratioX: 16,
              ratioY: 9,
              upCount: 3
            },
            artwork: {
              src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg'
            }
          }
        };
      }
    }]);
    return Tile;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
};
Tile.args = {
  metadataLocation: 'standard',
  logo: _assets_images_Xfinity_Provider_Logo_2x1_png__WEBPACK_IMPORTED_MODULE_2__,
  persistentMetadata: false,
  mode: 'focused'
};
Tile.argTypes = _objectSpread(_objectSpread({}, (0,_docs_utils__WEBPACK_IMPORTED_MODULE_3__/* .createModeControl */ .Pg)({
  summaryValue: Tile.args.mode
})), {}, {
  persistentMetadata: {
    control: 'boolean',
    description: 'Show metadata if exists regardless of focusState',
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  metadataLocation: {
    control: 'radio',
    options: ['standard', 'inset'],
    description: 'Controls where metadata is positioned in relationship to the Tile',
    table: {
      defaultValue: {
        summary: 'standard'
      }
    }
  },
  logo: {
    control: 'select',
    options: [_assets_images_Xfinity_Provider_Logo_2x1_png__WEBPACK_IMPORTED_MODULE_2__, null],
    description: 'Icon source',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  }
});
(0,_docs_utils__WEBPACK_IMPORTED_MODULE_3__/* .generateSubStory */ .jb)({
  componentName: 'Tile',
  baseStory: Tile,
  subStory: _MetadataTile_MetadataTile_stories__WEBPACK_IMPORTED_MODULE_4__.MetadataTile,
  targetProperty: 'metadata',
  include: ['title', 'description']
});
(0,_docs_utils__WEBPACK_IMPORTED_MODULE_3__/* .generateSubStory */ .jb)({
  componentName: 'Tile',
  baseStory: Tile,
  subStory: _mixins_withLayout_withLayout_stories__WEBPACK_IMPORTED_MODULE_5__.withLayout,
  targetProperty: 'itemLayout',
  include: ['ratioX', 'ratioY', 'upCount', 'circle']
});
(0,_docs_utils__WEBPACK_IMPORTED_MODULE_3__/* .generateSubStory */ .jb)({
  componentName: 'Tile',
  baseStory: Tile,
  subStory: _Badge_Badge_stories__WEBPACK_IMPORTED_MODULE_6__.Text,
  targetProperty: 'badge',
  include: ['title']
});
(0,_docs_utils__WEBPACK_IMPORTED_MODULE_3__/* .generateSubStory */ .jb)({
  componentName: 'Tile',
  baseStory: Tile,
  subStory: _Label_Label_stories__WEBPACK_IMPORTED_MODULE_7__.Label,
  targetProperty: 'label',
  include: ['title']
});
(0,_docs_utils__WEBPACK_IMPORTED_MODULE_3__/* .generateSubStory */ .jb)({
  componentName: 'Tile',
  baseStory: Tile,
  subStory: _Artwork_Artwork_stories__WEBPACK_IMPORTED_MODULE_8__.Artwork,
  targetProperty: 'artwork',
  include: ['blur', 'foregroundSrc', 'format', 'fill']
});
(0,_docs_utils__WEBPACK_IMPORTED_MODULE_3__/* .generateSubStory */ .jb)({
  componentName: 'Tile',
  baseStory: Tile,
  subStory: _ProgressBar_ProgressBar_stories__WEBPACK_IMPORTED_MODULE_9__.ProgressBar,
  targetProperty: 'progressBar',
  include: ['progress']
});
(0,_docs_utils__WEBPACK_IMPORTED_MODULE_3__/* .generateSubStory */ .jb)({
  componentName: 'Tile',
  baseStory: Tile,
  subStory: _Checkbox_Checkbox_stories__WEBPACK_IMPORTED_MODULE_10__.Checkbox,
  targetProperty: 'checkbox',
  include: ['checked']
});
Tile.parameters = {
  ...Tile.parameters,
  docs: {
    ...Tile.parameters?.docs,
    source: {
      originalSource: "() => class Tile extends lng.Component {\n  static _template() {\n    return {\n      Tile: {\n        type: TileComponent,\n        itemLayout: {\n          ratioX: 16,\n          ratioY: 9,\n          upCount: 3\n        },\n        artwork: {\n          src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg'\n        }\n      }\n    };\n  }\n}",
      ...Tile.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Tile"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/Xfinity-Provider-Logo-2x1.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/Xfinity-Provider-Logo-2x1.257f7e9d.png";

/***/ })

}]);
//# sourceMappingURL=6949.bbe71ab8.iframe.bundle.js.map