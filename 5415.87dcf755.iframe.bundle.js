"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[5415],{

/***/ "../../@lightningjs/ui-components/src/components/CardContent/CardContent.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardContent: () => (/* binding */ CardContent),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _assets_images_tile_image_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/tile-image.png");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/CardContent/CardContent.js");
/* harmony import */ var _MetadataCardContent_MetadataCardContent_stories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../@lightningjs/ui-components/src/components/MetadataCardContent/MetadataCardContent.stories.js");
/* harmony import */ var _docs_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
/* harmony import */ var _docs_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/constants.js");
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
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport tileImage from '../../assets/images/tile-image.png';\nimport CardContentComponent from '.';\nimport { MetadataCardContent as MetadataStory } from '../MetadataCardContent/MetadataCardContent.stories';\nimport { createModeControl, generateSubStory } from '../../docs/utils';\nimport { controlDescriptions } from '../../docs/constants';\n\n/**\n * Formats a Card with one part Tile and one part Metadata.\n */\nexport default {\n  title: 'Components/CardContent/CardContent'\n};\n\nexport const CardContent = args =>\n  class CardContent extends lng.Component {\n    static _template() {\n      return {\n        CardContent: {\n          type: CardContentComponent,\n          src: tileImage,\n          shouldCollapse: args.shouldCollapse,\n          orientation: 'horizontal'\n        }\n      };\n    }\n  };\n\nconst tileCategory = 'Tile';\nCardContent.tileProps = {\n  argActions: tagName => ({\n    badge: (badgeTitle, component) => {\n      component.tag(tagName).tile = {\n        ...component.tag(tagName).tile,\n        badge: { title: badgeTitle }\n      };\n    },\n    label: (labelTitle, component) => {\n      component.tag(tagName).tile = {\n        ...component.tag(tagName).tile,\n        label: {\n          title: labelTitle,\n          table: { defaultValue: { summary: 'undefined' } }\n        }\n      };\n    },\n    progress: (progress, component) => {\n      component.tag(tagName).tile = {\n        ...component.tag(tagName).tile,\n        progressBar: { progress }\n      };\n    }\n  })\n};\nCardContent.storyName = 'CardContent';\n\nCardContent.args = {\n  shouldCollapse: false,\n  badge: 'HD',\n  label: 'Live',\n  progress: 0.5,\n  mode: 'focused'\n};\n\nCardContent.argTypes = {\n  ...createModeControl({ summaryValue: CardContent.args.mode }),\n  shouldCollapse: {\n    control: 'boolean',\n    description: controlDescriptions.shouldCollapse,\n    table: {\n      defaultValue: { summary: false },\n      type: { summary: 'boolean' }\n    }\n  },\n  badge: {\n    name: 'title',\n    control: 'text',\n    description: 'Badge text',\n    table: {\n      category: tileCategory,\n      subcategory: 'Badge',\n      defaultValue: { summary: 'undefined' },\n      type: { summary: 'string' }\n    }\n  },\n  label: {\n    name: 'title',\n    control: 'text',\n    description: 'Text to display in the foreground of the label',\n    table: {\n      category: tileCategory,\n      subcategory: 'Label',\n      defaultValue: { summary: 'undefined' },\n      type: { summary: 'string' }\n    }\n  },\n  progress: {\n    control: {\n      type: 'range',\n      min: 0,\n      max: 1,\n      step: 0.01\n    },\n    description: 'percentage of the current progress from 0 to 1',\n    table: {\n      category: tileCategory,\n      subcategory: 'ProgressBar',\n      defaultValue: { summary: 0 },\n      type: { summary: 'number' }\n    }\n  }\n};\n\nCardContent.parameters = {\n  argActions: CardContent.tileProps.argActions('CardContent')\n};\ngenerateSubStory({\n  componentName: 'CardContent',\n  baseStory: CardContent,\n  subStory: MetadataStory,\n  targetProperty: 'metadata',\n  include: ['title', 'description', 'details', 'visible']\n});\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "CardContent": {
    "startLoc": {
      "col": 27,
      "line": 33
    },
    "endLoc": {
      "col": 3,
      "line": 45
    },
    "startBody": {
      "col": 27,
      "line": 33
    },
    "endBody": {
      "col": 3,
      "line": 45
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








/**
 * Formats a Card with one part Tile and one part Metadata.
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport tileImage from '../../assets/images/tile-image.png';\nimport CardContentComponent from '.';\nimport { MetadataCardContent as MetadataStory } from '../MetadataCardContent/MetadataCardContent.stories';\nimport { createModeControl, generateSubStory } from '../../docs/utils';\nimport { controlDescriptions } from '../../docs/constants';\n\n/**\n * Formats a Card with one part Tile and one part Metadata.\n */\nexport default {\n  title: 'Components/CardContent/CardContent'\n};\n\nexport const CardContent = args =>\n  class CardContent extends lng.Component {\n    static _template() {\n      return {\n        CardContent: {\n          type: CardContentComponent,\n          src: tileImage,\n          shouldCollapse: args.shouldCollapse,\n          orientation: 'horizontal'\n        }\n      };\n    }\n  };\n\nconst tileCategory = 'Tile';\nCardContent.tileProps = {\n  argActions: tagName => ({\n    badge: (badgeTitle, component) => {\n      component.tag(tagName).tile = {\n        ...component.tag(tagName).tile,\n        badge: { title: badgeTitle }\n      };\n    },\n    label: (labelTitle, component) => {\n      component.tag(tagName).tile = {\n        ...component.tag(tagName).tile,\n        label: {\n          title: labelTitle,\n          table: { defaultValue: { summary: 'undefined' } }\n        }\n      };\n    },\n    progress: (progress, component) => {\n      component.tag(tagName).tile = {\n        ...component.tag(tagName).tile,\n        progressBar: { progress }\n      };\n    }\n  })\n};\nCardContent.storyName = 'CardContent';\n\nCardContent.args = {\n  shouldCollapse: false,\n  badge: 'HD',\n  label: 'Live',\n  progress: 0.5,\n  mode: 'focused'\n};\n\nCardContent.argTypes = {\n  ...createModeControl({ summaryValue: CardContent.args.mode }),\n  shouldCollapse: {\n    control: 'boolean',\n    description: controlDescriptions.shouldCollapse,\n    table: {\n      defaultValue: { summary: false },\n      type: { summary: 'boolean' }\n    }\n  },\n  badge: {\n    name: 'title',\n    control: 'text',\n    description: 'Badge text',\n    table: {\n      category: tileCategory,\n      subcategory: 'Badge',\n      defaultValue: { summary: 'undefined' },\n      type: { summary: 'string' }\n    }\n  },\n  label: {\n    name: 'title',\n    control: 'text',\n    description: 'Text to display in the foreground of the label',\n    table: {\n      category: tileCategory,\n      subcategory: 'Label',\n      defaultValue: { summary: 'undefined' },\n      type: { summary: 'string' }\n    }\n  },\n  progress: {\n    control: {\n      type: 'range',\n      min: 0,\n      max: 1,\n      step: 0.01\n    },\n    description: 'percentage of the current progress from 0 to 1',\n    table: {\n      category: tileCategory,\n      subcategory: 'ProgressBar',\n      defaultValue: { summary: 0 },\n      type: { summary: 'number' }\n    }\n  }\n};\n\nCardContent.parameters = {\n  argActions: CardContent.tileProps.argActions('CardContent')\n};\ngenerateSubStory({\n  componentName: 'CardContent',\n  baseStory: CardContent,\n  subStory: MetadataStory,\n  targetProperty: 'metadata',\n  include: ['title', 'description', 'details', 'visible']\n});\n",
      "locationsMap": {
        "card-content": {
          "startLoc": {
            "col": 27,
            "line": 33
          },
          "endLoc": {
            "col": 3,
            "line": 45
          },
          "startBody": {
            "col": 27,
            "line": 33
          },
          "endBody": {
            "col": 3,
            "line": 45
          }
        }
      }
    },
    docs: {
      description: {
        component: "Formats a Card with one part Tile and one part Metadata."
      }
    }
  },
  title: 'Components/CardContent/CardContent'
});
var CardContent = function CardContent(args) {
  return /*#__PURE__*/function (_lng$Component) {
    _inherits(CardContent, _lng$Component);
    var _super = _createSuper(CardContent);
    function CardContent() {
      _classCallCheck(this, CardContent);
      return _super.apply(this, arguments);
    }
    _createClass(CardContent, null, [{
      key: "_template",
      value: function _template() {
        return {
          CardContent: {
            type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
            src: _assets_images_tile_image_png__WEBPACK_IMPORTED_MODULE_2__,
            shouldCollapse: args.shouldCollapse,
            orientation: 'horizontal'
          }
        };
      }
    }]);
    return CardContent;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
};
var tileCategory = 'Tile';
CardContent.tileProps = {
  argActions: function argActions(tagName) {
    return {
      badge: function badge(badgeTitle, component) {
        component.tag(tagName).tile = _objectSpread(_objectSpread({}, component.tag(tagName).tile), {}, {
          badge: {
            title: badgeTitle
          }
        });
      },
      label: function label(labelTitle, component) {
        component.tag(tagName).tile = _objectSpread(_objectSpread({}, component.tag(tagName).tile), {}, {
          label: {
            title: labelTitle,
            table: {
              defaultValue: {
                summary: 'undefined'
              }
            }
          }
        });
      },
      progress: function progress(_progress, component) {
        component.tag(tagName).tile = _objectSpread(_objectSpread({}, component.tag(tagName).tile), {}, {
          progressBar: {
            progress: _progress
          }
        });
      }
    };
  }
};
CardContent.storyName = 'CardContent';
CardContent.args = {
  shouldCollapse: false,
  badge: 'HD',
  label: 'Live',
  progress: 0.5,
  mode: 'focused'
};
CardContent.argTypes = _objectSpread(_objectSpread({}, (0,_docs_utils__WEBPACK_IMPORTED_MODULE_3__/* .createModeControl */ .Pg)({
  summaryValue: CardContent.args.mode
})), {}, {
  shouldCollapse: {
    control: 'boolean',
    description: _docs_constants__WEBPACK_IMPORTED_MODULE_4__/* .controlDescriptions */ .Hx.shouldCollapse,
    table: {
      defaultValue: {
        summary: false
      },
      type: {
        summary: 'boolean'
      }
    }
  },
  badge: {
    name: 'title',
    control: 'text',
    description: 'Badge text',
    table: {
      category: tileCategory,
      subcategory: 'Badge',
      defaultValue: {
        summary: 'undefined'
      },
      type: {
        summary: 'string'
      }
    }
  },
  label: {
    name: 'title',
    control: 'text',
    description: 'Text to display in the foreground of the label',
    table: {
      category: tileCategory,
      subcategory: 'Label',
      defaultValue: {
        summary: 'undefined'
      },
      type: {
        summary: 'string'
      }
    }
  },
  progress: {
    control: {
      type: 'range',
      min: 0,
      max: 1,
      step: 0.01
    },
    description: 'percentage of the current progress from 0 to 1',
    table: {
      category: tileCategory,
      subcategory: 'ProgressBar',
      defaultValue: {
        summary: 0
      },
      type: {
        summary: 'number'
      }
    }
  }
});
CardContent.parameters = {
  argActions: CardContent.tileProps.argActions('CardContent')
};
(0,_docs_utils__WEBPACK_IMPORTED_MODULE_3__/* .generateSubStory */ .jb)({
  componentName: 'CardContent',
  baseStory: CardContent,
  subStory: _MetadataCardContent_MetadataCardContent_stories__WEBPACK_IMPORTED_MODULE_5__.MetadataCardContent,
  targetProperty: 'metadata',
  include: ['title', 'description', 'details', 'visible']
});
CardContent.parameters = {
  ...CardContent.parameters,
  docs: {
    ...CardContent.parameters?.docs,
    source: {
      originalSource: "args => class CardContent extends lng.Component {\n  static _template() {\n    return {\n      CardContent: {\n        type: CardContentComponent,\n        src: tileImage,\n        shouldCollapse: args.shouldCollapse,\n        orientation: 'horizontal'\n      }\n    };\n  }\n}",
      ...CardContent.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["CardContent"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/CardContent/CardContent.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CardContent)
/* harmony export */ });
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Card/Card.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Tile/Tile.js");
/* harmony import */ var _MetadataCardContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/MetadataCardContent/MetadataCardContent.js");
/* harmony import */ var _CardContent_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/components/CardContent/CardContent.styles.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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






var CardContent = /*#__PURE__*/function (_Card) {
  _inherits(CardContent, _Card);
  var _super = _createSuper(CardContent);
  function CardContent() {
    _classCallCheck(this, CardContent);
    return _super.apply(this, arguments);
  }
  _createClass(CardContent, [{
    key: "_update",
    value: function _update() {
      this._updateSize();
      this._updateTile();
      this._updateMetadata();
      _get(_getPrototypeOf(CardContent.prototype), "_update", this).call(this);
    }
  }, {
    key: "_updateTitle",
    value: function _updateTitle() {}
  }, {
    key: "_updateTitlePosition",
    value: function _updateTitlePosition() {}
  }, {
    key: "_updateTile",
    value: function _updateTile() {
      var _tile;
      var w = this.style.imageSize.w;
      var h = this.style.expandedHeight;
      var radius = Array.isArray(this.style.radius) && this.style.radius.length === 4 ? this.style.radius : Array(4).fill(this.style.radius);
      var tileRadius = radius;
      if (!this._collapse) {
        tileRadius = this._orientation === 'horizontal' ? [radius[0], 0, 0, radius[3]] : [radius[0], radius[1], 0, 0];
      }
      if (this._orientation !== 'horizontal') {
        w = this.style.expandedWidth;
        h = this.style.imageSize.h;
      }

      // ensure a nested tile artwork src takes precedence over the class's src setter,
      // but that if src is undefined in both the setter and tile artwork object,
      // we don't incorrectly pass "src: undefined" to the Tile component (and in turn, Artwork)
      var tile = this.tile;
      if (this.src) {
        tile = _utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"].clone */ .Ay.clone({
          src: this.src
        }, this.tile);
      }
      this._Tile.patch(_objectSpread(_objectSpread({
        w: w,
        h: h
      }, tile), {}, {
        style: _objectSpread(_objectSpread({}, ((_tile = tile) === null || _tile === void 0 ? void 0 : _tile.style) || {}), {}, {
          radius: tileRadius
        }),
        persistentMetadata: true,
        alpha: this._shouldShowTile ? 1 : 0
      }));
    }
  }, {
    key: "_updateMetadata",
    value: function _updateMetadata() {
      var metadataPatch = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.metadata), this._metadataPosition), this._metadataDimensions), {}, {
        mode: this.mode,
        alpha: this._shouldShowMetadata ? 1 : 0,
        style: this.style.metadata
      });
      if (this.style.marqueeOnFocus) {
        metadataPatch.marquee = this._isFocusedMode;
      }
      if (!this._Metadata) {
        metadataPatch.type = _MetadataCardContent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A;
      }
      this.patch({
        Metadata: metadataPatch
      });
    }
  }, {
    key: "_updateSize",
    value: function _updateSize() {
      var w = this.style.expandedWidth;
      var h = this.style.expandedHeight;
      if (this._collapse) {
        if (this._orientation === 'horizontal') {
          w = this._collapseW;
        } else {
          h = this._collapseH;
        }
      }
      this.w = w;
      this.h = h;
    }
  }, {
    key: "_getSrc",
    value: function _getSrc() {
      return this.tile && (this.tile.artwork && this.tile.artwork.src || this.tile.src) || this._src;
    }
  }, {
    key: "_metadataDimensions",
    get: function get() {
      var paddingHorizontal = this.style.paddingHorizontal * 2;
      var paddingVertical = this.style.paddingVertical * 2;
      var w = this.style.expandedWidth - this.style.imageSize.w - paddingHorizontal;
      var h = this.style.expandedHeight - paddingVertical;
      if (this.orientation !== 'horizontal') {
        w = this.style.expandedWidth - paddingHorizontal;
        h = this.style.expandedHeight - this.style.imageSize.h - paddingVertical;
      }
      return {
        w: w,
        h: h
      };
    }
  }, {
    key: "_metadataPosition",
    get: function get() {
      var paddingHorizontal = this.style.paddingHorizontal;
      var paddingVertical = this.style.paddingVertical;
      var x = paddingHorizontal + (this._collapse ? 0 : this.style.imageSize.w);
      var y = paddingVertical;
      if (this.orientation !== 'horizontal') {
        x = paddingHorizontal;
        y = paddingVertical + (this._collapse ? 0 : this.style.imageSize.h);
      }
      return {
        x: x,
        y: y
      };
    }
  }, {
    key: "_shouldShowMetadata",
    get: function get() {
      return !this._collapse || this.collapseToMetadata;
    }
  }, {
    key: "_shouldShowTile",
    get: function get() {
      return !this._collapse || this._collapse && !this.collapseToMetadata;
    }
  }, {
    key: "_collapse",
    get: function get() {
      return this.shouldCollapse && !this._isFocusedMode;
    }
  }, {
    key: "_collapseW",
    get: function get() {
      return this.collapseToMetadata ? this.style.expandedWidth - this.style.imageSize.w : this.style.imageSize.w;
    }
  }, {
    key: "_collapseH",
    get: function get() {
      return this.collapseToMetadata ? this.style.expandedHeight - this.style.imageSize.h : this.style.imageSize.h;
    }
  }, {
    key: "announce",
    get: function get() {
      return this._announce || [this._Metadata && this._Metadata.announce, this._Tile && this._Tile.announce];
    },
    set: function set(announce) {
      _set(_getPrototypeOf(CardContent.prototype), "announce", announce, this, true);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'CardContent';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return _CardContent_styles__WEBPACK_IMPORTED_MODULE_2__;
    }
  }, {
    key: "_template",
    value: function _template() {
      return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(CardContent), "_template", this).call(this)), {}, {
        Tile: {
          type: _Tile__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A
        }
      });
    }
  }, {
    key: "properties",
    get: function get() {
      return [].concat(_toConsumableArray(_get(_getPrototypeOf(CardContent), "properties", this)), ['tile', 'metadata', 'orientation', 'collapseToMetadata', 'shouldCollapse', 'src']);
    }
  }, {
    key: "tags",
    get: function get() {
      return [].concat(_toConsumableArray(_get(_getPrototypeOf(CardContent), "tags", this)), ['Metadata', 'Tile']);
    }
  }, {
    key: "aliasStyles",
    get: function get() {
      return [{
        prev: 'expandedW',
        curr: 'expandedWidth'
      }, {
        prev: 'expandedH',
        curr: 'expandedHeight'
      }];
    }
  }]);
  return CardContent;
}(_Card__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/CardContent/CardContent.styles.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   base: () => (/* binding */ base)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
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


var base = function base(theme) {
  return {
    expandedWidth: _utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getWidthByUpCount */ .Ay.getWidthByUpCount(theme, 2),
    expandedHeight: _utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getDimensions */ .Ay.getDimensions(theme, {
      ratioX: 16,
      ratioY: 9,
      upCount: 4
    }).h,
    imageSize: {
      width: _utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getDimensions */ .Ay.getDimensions(theme, {
        ratioX: 16,
        ratioY: 9,
        upCount: 4
      }).w,
      height: _utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getDimensions */ .Ay.getDimensions(theme, {
        ratioX: 16,
        ratioY: 9,
        upCount: 4
      }).h
    },
    metadata: {
      descriptionTextStyle: {
        maxLines: 2
      }
    },
    paddingVertical: theme.spacer.md * 1.5
  };
};

/***/ }),

/***/ "../../@lightningjs/ui-components/src/docs/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hx: () => (/* binding */ controlDescriptions)
/* harmony export */ });
/* unused harmony exports CATEGORIES, storySortOrder */
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

var CATEGORIES = {
  0: 'Docs',
  2: 'Collections',
  4: 'Utilities',
  8: 'Components',
  16: 'Patterns',
  32: 'Templates'
};

/** Storybook config constants should go in this file */

var storySortOrder = [CATEGORIES[0], ['Introduction', 'Read Me', 'Base', 'Contributing', 'Lightning Resources', 'Lightning Community Guide', 'Theming', ['Overview', 'Component Config', 'Tones', 'Modes', 'Extensions', 'Subtheming', 'Use in Storybook', 'Theme Properties', 'Hierarchy', 'Tutorial'], 'Unit Testing', ['Overview', 'Test Renderer', 'Test Utils', ['makeCreateComponent', '*']]], CATEGORIES[2], CATEGORIES[4], CATEGORIES[8], CATEGORIES[16], CATEGORIES[32]];
var controlDescriptions = {
  collapseToMetadata: 'When in unfocused or disabled mode, if shouldCollapse property is true it will collapse the image to metadata (when focused, it will always be expanded)',
  shouldCollapse: 'When in unfocused or disabled mode, if this flag is true metadata will collapse (when focused, it will always be expanded)',
  fixed: 'Stops the width from being calculated dynamically based on content and will instead use the`w` property'
};

/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/tile-image.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/tile-image.56dce1e0.png";

/***/ })

}]);
//# sourceMappingURL=5415.87dcf755.iframe.bundle.js.map