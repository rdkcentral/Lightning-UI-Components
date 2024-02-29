"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[5289],{

/***/ "../../@lightningjs/ui-components/src/components/TitleRow/TitleRow.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TitleRow: () => (/* binding */ TitleRow),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _Row_Row_stories_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Row/Row.stories.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Tile/Tile.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/components/TitleRow/TitleRow.js");
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
/* eslint-disable */
// @ts-nocheck
// @ts-expect-error (Converted from ts-ignore)
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { Row as RowBasic } from '../Row/Row.stories.js';\nimport Tile from '../Tile';\nimport { default as TitleRowComponent } from '.';\n\n// add remount to all Row argTypes individually since Row uses remountAll\n// TitleRow title prop can be updated without requiring a remount\nconst rowArgTypes = Object.keys(RowBasic.argTypes).reduce((acc, key) => {\n  acc[key] = {\n    ...RowBasic.argTypes[key],\n    remount: key !== 'mode'\n  };\n  return acc;\n}, {});\n\nexport default {\n  title: 'Components/TitleRow',\n\n  args: {\n    title: 'Row Title',\n    ...RowBasic.args\n  },\n  argTypes: {\n    title: {\n      control: 'text',\n      description: 'title text to be displayed above the row',\n      table: {\n        defaultValue: { summary: 'undefined' }\n      }\n    },\n    ...rowArgTypes\n  }\n};\n\nconst createItems = length => {\n  return Array.from({ length }).map((_, index) => ({\n    type: Tile,\n    itemLayout: {\n      ratioX: 16,\n      ratioY: 9,\n      upCount: 4\n    },\n    announce: 'Tile',\n    announceContext: `${index + 1} of ${length}`\n  }));\n};\n\nexport const TitleRow = () =>\n  class TitleRow extends lng.Component {\n    static _template() {\n      return {\n        TitleRow: {\n          type: TitleRowComponent,\n          items: createItems(12)\n        }\n      };\n    }\n\n    _getFocused() {\n      return this.tag('TitleRow');\n    }\n  };\n\nTitleRow.storyName = 'TitleRow';\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "TitleRow": {
    "startLoc": {
      "col": 24,
      "line": 66
    },
    "endLoc": {
      "col": 3,
      "line": 80
    },
    "startBody": {
      "col": 24,
      "line": 66
    },
    "endBody": {
      "col": 3,
      "line": 80
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






// add remount to all Row argTypes individually since Row uses remountAll
// TitleRow title prop can be updated without requiring a remount
var rowArgTypes = Object.keys(_Row_Row_stories_js__WEBPACK_IMPORTED_MODULE_1__.Row.argTypes).reduce(function (acc, key) {
  acc[key] = _objectSpread(_objectSpread({}, _Row_Row_stories_js__WEBPACK_IMPORTED_MODULE_1__.Row.argTypes[key]), {}, {
    remount: key !== 'mode'
  });
  return acc;
}, {});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { Row as RowBasic } from '../Row/Row.stories.js';\nimport Tile from '../Tile';\nimport { default as TitleRowComponent } from '.';\n\n// add remount to all Row argTypes individually since Row uses remountAll\n// TitleRow title prop can be updated without requiring a remount\nconst rowArgTypes = Object.keys(RowBasic.argTypes).reduce((acc, key) => {\n  acc[key] = {\n    ...RowBasic.argTypes[key],\n    remount: key !== 'mode'\n  };\n  return acc;\n}, {});\n\nexport default {\n  title: 'Components/TitleRow',\n\n  args: {\n    title: 'Row Title',\n    ...RowBasic.args\n  },\n  argTypes: {\n    title: {\n      control: 'text',\n      description: 'title text to be displayed above the row',\n      table: {\n        defaultValue: { summary: 'undefined' }\n      }\n    },\n    ...rowArgTypes\n  }\n};\n\nconst createItems = length => {\n  return Array.from({ length }).map((_, index) => ({\n    type: Tile,\n    itemLayout: {\n      ratioX: 16,\n      ratioY: 9,\n      upCount: 4\n    },\n    announce: 'Tile',\n    announceContext: `${index + 1} of ${length}`\n  }));\n};\n\nexport const TitleRow = () =>\n  class TitleRow extends lng.Component {\n    static _template() {\n      return {\n        TitleRow: {\n          type: TitleRowComponent,\n          items: createItems(12)\n        }\n      };\n    }\n\n    _getFocused() {\n      return this.tag('TitleRow');\n    }\n  };\n\nTitleRow.storyName = 'TitleRow';\n",
      "locationsMap": {
        "title-row": {
          "startLoc": {
            "col": 24,
            "line": 66
          },
          "endLoc": {
            "col": 3,
            "line": 80
          },
          "startBody": {
            "col": 24,
            "line": 66
          },
          "endBody": {
            "col": 3,
            "line": 80
          }
        }
      }
    }
  },
  title: 'Components/TitleRow',
  args: _objectSpread({
    title: 'Row Title'
  }, _Row_Row_stories_js__WEBPACK_IMPORTED_MODULE_1__.Row.args),
  argTypes: _objectSpread({
    title: {
      control: 'text',
      description: 'title text to be displayed above the row',
      table: {
        defaultValue: {
          summary: 'undefined'
        }
      }
    }
  }, rowArgTypes)
});
var createItems = function createItems(length) {
  return Array.from({
    length: length
  }).map(function (_, index) {
    return {
      type: _Tile__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
      itemLayout: {
        ratioX: 16,
        ratioY: 9,
        upCount: 4
      },
      announce: 'Tile',
      announceContext: "".concat(index + 1, " of ").concat(length)
    };
  });
};
var TitleRow = function TitleRow() {
  return /*#__PURE__*/function (_lng$Component) {
    _inherits(TitleRow, _lng$Component);
    var _super = _createSuper(TitleRow);
    function TitleRow() {
      _classCallCheck(this, TitleRow);
      return _super.apply(this, arguments);
    }
    _createClass(TitleRow, [{
      key: "_getFocused",
      value: function _getFocused() {
        return this.tag('TitleRow');
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          TitleRow: {
            type: ___WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            items: createItems(12)
          }
        };
      }
    }]);
    return TitleRow;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
TitleRow.storyName = 'TitleRow';
TitleRow.parameters = {
  ...TitleRow.parameters,
  docs: {
    ...TitleRow.parameters?.docs,
    source: {
      originalSource: "() => class TitleRow extends lng.Component {\n  static _template() {\n    return {\n      TitleRow: {\n        type: TitleRowComponent,\n        items: createItems(12)\n      }\n    };\n  }\n  _getFocused() {\n    return this.tag('TitleRow');\n  }\n}",
      ...TitleRow.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["TitleRow"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/TitleRow/TitleRow.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ TitleRow)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/TitleRow/TitleRow.styles.js
var TitleRow_styles_namespaceObject = {};
__webpack_require__.r(TitleRow_styles_namespaceObject);
__webpack_require__.d(TitleRow_styles_namespaceObject, {
  base: () => (base),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.js + 1 modules
var TextBox = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Row/Row.js + 1 modules
var Row = __webpack_require__("../../@lightningjs/ui-components/src/components/Row/Row.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/TitleRow/TitleRow.styles.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
    width: (0,utils/* getWidthByUpCount */.OO)(theme, 1),
    titleMarginBottom: theme.spacer.lg,
    titleMarginLeft: theme.layout.gutterX,
    titleTextStyle: _objectSpread(_objectSpread({}, theme.typography.headline1), {}, {
      textColor: theme.color.textNeutral
    })
  };
};
var tone = function tone(theme) {
  return {
    neutral: {
      titleTextStyle: {
        textColor: theme.color.textNeutral
      }
    },
    inverse: {
      titleTextStyle: {
        textColor: theme.color.textInverse
      }
    },
    brand: {
      titleTextStyle: {
        textColor: theme.color.textNeutral
      }
    }
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/TitleRow/TitleRow.js
function TitleRow_typeof(o) { "@babel/helpers - typeof"; return TitleRow_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, TitleRow_typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function TitleRow_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function TitleRow_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? TitleRow_ownKeys(Object(t), !0).forEach(function (r) { TitleRow_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : TitleRow_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, TitleRow_toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { TitleRow_defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function TitleRow_defineProperty(obj, key, value) { key = TitleRow_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function TitleRow_toPropertyKey(t) { var i = TitleRow_toPrimitive(t, "string"); return "symbol" == TitleRow_typeof(i) ? i : String(i); }
function TitleRow_toPrimitive(t, r) { if ("object" != TitleRow_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != TitleRow_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (TitleRow_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
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




var TitleRow = /*#__PURE__*/function (_Row) {
  _inherits(TitleRow, _Row);
  var _super = _createSuper(TitleRow);
  function TitleRow() {
    _classCallCheck(this, TitleRow);
    return _super.apply(this, arguments);
  }
  _createClass(TitleRow, [{
    key: "_titleLoaded",
    value: function _titleLoaded() {
      this._updateRow();
    }
  }, {
    key: "_construct",
    value: function _construct() {
      _get(_getPrototypeOf(TitleRow.prototype), "_construct", this).call(this);
      this._autoResizeHeight = true;
    }
  }, {
    key: "_update",
    value: function _update() {
      _get(_getPrototypeOf(TitleRow.prototype), "_update", this).call(this);
      this._updateTitle();
      this._updateRow();
    }
  }, {
    key: "_autoResize",
    value: function _autoResize() {
      this.w = this.w || this.style.w;
      this.h = this.autoResizeHeight ? this.Items.y + this.Items.h : this.h;
    }
  }, {
    key: "_updateTitle",
    value: function _updateTitle() {
      if (!this.title) {
        if (this._Title) {
          this.patch({
            Title: undefined
          });
        }
        return;
      }
      var titlePatch = {
        x: this.style.titleMarginLeft,
        content: this.title,
        style: {
          textStyle: this.style.titleTextStyle
        }
      };
      if (!this._Title) {
        titlePatch = TitleRow_objectSpread(TitleRow_objectSpread({}, this._titleFirstLoadProps), titlePatch);
      }
      this.patch({
        Title: titlePatch
      });
    }
  }, {
    key: "_titleFirstLoadProps",
    get: function get() {
      return {
        type: TextBox/* default */.Z,
        signals: {
          textBoxChanged: '_titleLoaded'
        }
      };
    }
  }, {
    key: "_updateRow",
    value: function _updateRow() {
      this.applySmooth(this.Items, {
        y: this.title ? this._Title.finalH + this.style.titleMarginBottom : 0
      });
    }
  }, {
    key: "announce",
    get: function get() {
      return this._announce || this._Title && this._Title.announce;
    },
    set: function set(announce) {
      _set(_getPrototypeOf(TitleRow.prototype), "announce", announce, this, true);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'TitleRow';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return TitleRow_styles_namespaceObject;
    }
  }, {
    key: "properties",
    get: function get() {
      return [].concat(_toConsumableArray(_get(_getPrototypeOf(TitleRow), "properties", this)), ['title']);
    }
  }, {
    key: "tags",
    get: function get() {
      return [].concat(_toConsumableArray(_get(_getPrototypeOf(TitleRow), "tags", this)), ['Title']);
    }
  }, {
    key: "aliasStyles",
    get: function get() {
      return [{
        prev: 'rowMarginTop',
        curr: 'titleMarginBottom'
      }];
    }
  }]);
  return TitleRow;
}(Row/* default */.Z);


/***/ })

}]);
//# sourceMappingURL=5289.81792551.iframe.bundle.js.map