"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[231],{

/***/ "../../@lightningjs/ui-components/src/components/Row/Row.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddingItems: () => (/* binding */ AddingItems),
/* harmony export */   CenteredInParent: () => (/* binding */ CenteredInParent),
/* harmony export */   ExpandableWidth: () => (/* binding */ ExpandableWidth),
/* harmony export */   FocusHeightChange: () => (/* binding */ FocusHeightChange),
/* harmony export */   LazyScrollIndexes: () => (/* binding */ LazyScrollIndexes),
/* harmony export */   LazyUpCount: () => (/* binding */ LazyUpCount),
/* harmony export */   Plinko: () => (/* binding */ Plinko),
/* harmony export */   RemovingItems: () => (/* binding */ RemovingItems),
/* harmony export */   Row: () => (/* binding */ Row),
/* harmony export */   SkipFocus: () => (/* binding */ SkipFocus),
/* harmony export */   VaryingItemWidth: () => (/* binding */ VaryingItemWidth),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Row/Row.js");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Column/Column.js");
/* harmony import */ var _globals_context_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
/* harmony import */ var _docs_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
/* harmony import */ var _docs_story_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/story-components/SignalButton.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/Button.js");
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
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
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
}
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
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
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { getWidthByUpCount } from '../../utils';\nimport { default as RowComponent } from '.';\nimport Column from '../Column';\nimport context from '../../globals/context/index';\nimport { createModeControl } from '../../docs/utils';\nimport { SignalButton } from '../../docs/story-components';\nimport Button from '../Button';\n\nexport default {\n  title: 'Components/Row',\n  parameters: {\n    remountAll: true\n  }\n};\n\n/**\n * Shared Args and Arg Types for Stories\n */\nconst sharedArgs = {\n  alwaysScroll: false,\n  lazyScroll: false,\n  neverScroll: false,\n  scrollIndex: 0,\n  waitForDimensions: false,\n  mode: 'focused'\n};\n\nconst sharedArgTypes = {\n  ...createModeControl({ summaryValue: 'focused' }),\n  scrollIndex: {\n    control: { type: 'number', min: 0 },\n    description:\n      'Item index at which scrolling begins, provided the sum of item widths is greater than the width of the Row',\n    table: { defaultValue: { summary: 0 } }\n  },\n  alwaysScroll: {\n    control: 'boolean',\n    description:\n      'Determines whether the row will stop scrolling as it nears the right to prevent white space',\n    table: { defaultValue: { summary: false } }\n  },\n  neverScroll: {\n    control: 'boolean',\n    description:\n      'If true, the row will never scroll, unless alwaysScroll is set to true, and if false, the row will apply normal scrolling logic',\n    table: { defaultValue: { summary: false } }\n  },\n  lazyScroll: {\n    control: 'boolean',\n    description:\n      'Will only scroll the row if the item is off screen and alwaysScroll and neverScroll are both false',\n    table: { defaultValue: { summary: false } }\n  },\n  waitForDimensions: {\n    control: 'boolean',\n    description:\n      \"If true, the Row will wait for all child elements' w and h to be set before displaying the Row\",\n    table: { defaultValue: { summary: false } }\n  }\n};\n\n// creates an array of buttons to be used in Stories\nconst createItems = (buttonType, length, isVariedWidth = false) => {\n  return Array.from({ length }).map((_, i) => ({\n    type: buttonType,\n    title: `Button ${i + 1}`,\n    ...(isVariedWidth\n      ? {\n          fixed: true,\n          w: 200 + Math.floor(Math.random() * 100)\n        }\n      : {})\n  }));\n};\n\nclass ExpandingButton extends Button {\n  _construct() {\n    super._construct();\n    this.fixed = true;\n    this.w = 250;\n  }\n  _focus() {\n    super._focus();\n    this.smooth = { w: 350 };\n  }\n\n  _unfocus() {\n    super._unfocus();\n    this.smooth = { w: 250 };\n  }\n}\n\nclass ExpandingHeightButton extends Button {\n  _focus() {\n    super._focus();\n    this.smooth = { h: 150 };\n    this.fireAncestors('$itemChanged');\n  }\n\n  _unfocus() {\n    super._unfocus();\n    this.smooth = { h: 75 };\n  }\n}\n\nclass Title extends lng.Component {\n  static _template() {\n    return {\n      Label: {\n        x: 75,\n        y: 22,\n        mount: 0.5,\n        color: 0xffffffff,\n        text: { fontSize: 20 }\n      }\n    };\n  }\n\n  _init() {\n    this.tag('Label').on('txLoaded', () => {\n      this.w = this.tag('Label').renderWidth;\n      this.h = this.tag('Label').renderHeight;\n      this.fireAncestors('$itemChanged');\n    });\n  }\n\n  set titleText(titleText) {\n    this.tag('Label').text = titleText;\n  }\n}\n\n/**\n * Stories for various versions of the component\n */\n\nexport const Row = args =>\n  class Row extends lng.Component {\n    static _template() {\n      return {\n        Row: {\n          type: RowComponent,\n          w: getWidthByUpCount(context.theme, 1),\n          items: createItems(Button, 12),\n          waitForDimensions: args.waitForDimensions\n        }\n      };\n    }\n  };\n\nRow.args = sharedArgs;\nRow.argTypes = sharedArgTypes;\n\nexport const FocusHeightChange = () =>\n  class FocusHeightChange extends lng.Component {\n    static _template() {\n      return {\n        Row: {\n          type: RowComponent,\n          w: getWidthByUpCount(context.theme, 1),\n          items: Array.apply(null, { length: 5 }).map(() => ({\n            type: ExpandingHeightButton,\n            title: 'Button',\n            w: 150,\n            h: 75\n          }))\n        }\n      };\n    }\n  };\n\nexport const VaryingItemWidth = () =>\n  class VaryingItemWidth extends lng.Component {\n    static _template() {\n      return {\n        Row: {\n          type: RowComponent,\n          w: getWidthByUpCount(context.theme, 1),\n          items: createItems(Button, 10, {\n            fixed: true,\n            w: 200 + Math.floor(Math.random() * 100)\n          })\n        }\n      };\n    }\n  };\n\nexport const ExpandableWidth = () =>\n  class ExpandableWidth extends lng.Component {\n    static _template() {\n      return {\n        Row: {\n          type: RowComponent,\n          w: getWidthByUpCount(context.theme, 1),\n          items: createItems(ExpandingButton, 6)\n        }\n      };\n    }\n  };\n\nexport const CenteredInParent = () =>\n  class CenteredInParent extends lng.Component {\n    static _template() {\n      return {\n        Row: {\n          type: RowComponent,\n          autoResizeHeight: true,\n          w: getWidthByUpCount(context.theme, 1),\n          items: [\n            {\n              type: Column,\n              autoResizeWidth: true,\n              autoResizeHeight: true,\n              items: createItems(Button, 3)\n            },\n            {\n              type: Column,\n              autoResizeWidth: true,\n              autoResizeHeight: true,\n              centerInParent: true,\n              items: createItems(Button, 1)\n            }\n          ]\n        }\n      };\n    }\n  };\nCenteredInParent.parameters = {\n  storyDetails:\n    'This Row has 2 Columns as items. The second Column with 1 Button as an item has the centerInParent property enabled so it is vertically centered in the Row.'\n};\n\nexport const Plinko = () => {\n  return class Plinko extends lng.Component {\n    static _template() {\n      const skipFocusButtons = createItems(Button, 3);\n      skipFocusButtons[1].skipFocus = true;\n      skipFocusButtons[1].title = 'Skip Focus';\n      return {\n        Row: {\n          type: RowComponent,\n          w: getWidthByUpCount(context.theme, 1),\n          autoResizeHeight: true,\n          plinko: true,\n          items: [\n            {\n              type: Column,\n              autoResizeWidth: true,\n              items: createItems(Button, 3)\n            },\n            {\n              type: Column,\n              autoResizeWidth: true,\n              items: skipFocusButtons\n            },\n            {\n              type: Column,\n              autoResizeWidth: true,\n              items: createItems(Button, 3)\n            },\n            {\n              type: Column,\n              autoResizeWidth: true,\n              items: createItems(Button, 3)\n            }\n          ]\n        }\n      };\n    }\n  };\n};\n\nexport const SkipFocus = args =>\n  class SkipFocus extends lng.Component {\n    static _template() {\n      return {\n        Row: {\n          type: RowComponent,\n          w: getWidthByUpCount(context.theme, 1),\n          wrapSelected: args.wrapSelected,\n          items: [\n            ...Array.apply(null, { length: 13 }).map((_, i) => {\n              if (i % 4 === 0)\n                return {\n                  type: Title,\n                  titleText: 'Skip Focus Text',\n                  skipFocus: true\n                };\n              return { type: Button, title: 'Button' };\n            }),\n            {\n              type: Title,\n              titleText: 'Skip Focus Text',\n              skipFocus: true\n            }\n          ]\n        }\n      };\n    }\n  };\n\nSkipFocus.args = {\n  wrapSelected: false\n};\n\nSkipFocus.argTypes = {\n  wrapSelected: {\n    control: 'boolean',\n    description:\n      'Enables wrapping behavior, so selectNext() selects the first item if the current item is the last on the list and vice versa',\n    table: { defaultValue: { summary: false } }\n  }\n};\n\nexport const LazyScrollIndexes = ({\n  startLazyScrollIndex,\n  stopLazyScrollIndex,\n  waitForDimensions\n}) =>\n  class LazyScrollIndexes extends lng.Component {\n    static _template() {\n      return {\n        Row: {\n          type: RowComponent,\n          w: getWidthByUpCount(context.theme, 1),\n          items: Array.apply(null, { length: 12 }).map((_, i) => ({\n            type: Button,\n            title: `Button ${i + 1} ${\n              i === startLazyScrollIndex ? '(start lazy scroll)' : ''\n            } ${i === stopLazyScrollIndex ? '(stop lazy scroll)' : ''}`\n          })),\n          startLazyScrollIndex,\n          stopLazyScrollIndex,\n          waitForDimensions: waitForDimensions\n        }\n      };\n    }\n  };\nLazyScrollIndexes.args = {\n  ...sharedArgs,\n  lazyScroll: true,\n  startLazyScrollIndex: 1,\n  stopLazyScrollIndex: 10\n};\nLazyScrollIndexes.argTypes = {\n  ...sharedArgTypes,\n  startLazyScrollIndex: {\n    control: 'number',\n    description:\n      'Index of item in items, and items thereafter, at which lazy scrolling should occur at',\n    table: { defaultValue: { summary: 0 } }\n  },\n  stopLazyScrollIndex: {\n    control: 'number',\n    description:\n      'Index of item in items, and items preceding, at which lazy scrolling should occur',\n    table: { defaultValue: { summary: 0 } }\n  }\n};\nLazyScrollIndexes.parameters = {\n  storyDetails:\n    'Items before the item at startLazyScrollIndex and after the item at stopLazyScrollIndex will use alwaysScroll. Items at and between startLazyScrollIndex and stopLazyScrollIndex will use lazyScroll.'\n};\n\nexport const AddingItems = args =>\n  class AddingItems extends lng.Component {\n    static _template() {\n      return {\n        Row: {\n          type: RowComponent,\n          w: getWidthByUpCount(context.theme, 1), // x offset from preview.js * 2\n          lazyUpCount: args.lazyUpCount,\n          lazyUpCountBuffer: args.lazyUpCountBuffer,\n          waitForDimensions: args.waitForDimensions,\n          signals: {\n            append: 'appendButton',\n            appendAt: 'appendButtonAt',\n            prepend: 'prependButton'\n          },\n          items: [\n            {\n              type: SignalButton,\n              title: 'Prepend 1 Button (prependItems)',\n              signalName: 'prepend',\n              passSignals: { prepend: true }\n            },\n            {\n              type: SignalButton,\n              title: 'Append 1 Button at index 1 (appendItemsAt)',\n              signalName: 'appendAt',\n              passSignals: { appendAt: true }\n            },\n            {\n              type: SignalButton,\n              title: 'Append 1 Button to the Row (appendItems)',\n              signalName: 'append',\n              passSignals: { append: true }\n            }\n          ]\n        }\n      };\n    }\n\n    prependButton() {\n      this.tag('Row').prependItems([\n        {\n          type: Button,\n          title: 'Prepended Button'\n        }\n      ]);\n    }\n\n    appendButtonAt() {\n      this.tag('Row').appendItemsAt(\n        [\n          {\n            type: Button,\n            title: 'Appended Button at index 1'\n          }\n        ],\n        1\n      );\n    }\n\n    appendButton() {\n      this.tag('Row').appendItems([\n        {\n          type: Button,\n          title: 'Appended Button'\n        }\n      ]);\n    }\n  };\nAddingItems.args = {\n  ...sharedArgs,\n  lazyUpCountBuffer: 2\n};\nAddingItems.argTypes = {\n  ...sharedArgTypes,\n  lazyUpCount: {\n    control: 'number',\n    description:\n      'Used to calculate the number of items to display on the first render, see [Docs](?path=/docs/components-navigationmanager--docs#properties) for more details. <br/> **NOTE: changing this value requires refreshing the story to see its effect.**',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  lazyUpCountBuffer: {\n    control: 'number',\n    description:\n      'Used to calculate the number of items to display on the first render, see [Docs](?path=/docs/components-navigationmanager--docs#properties) for more details. <br/> **NOTE: changing this value requires refreshing the story to see its effect.**',\n    table: {\n      defaultValue: { summary: 2 }\n    }\n  }\n};\nAddingItems.parameters = {\n  storyDetails:\n    'The 3 buttons initially rendered in this story are configured to invoke 1 of the 3 methods available to add items to a Row (the name of the method used is in parenthesis on the button). Press enter on any of those 3 buttons to invoke that method and add a button to the Row.'\n};\n\nexport const LazyUpCount = args =>\n  class LazyUpCount extends lng.Component {\n    static _template() {\n      return {\n        Row: {\n          type: RowComponent,\n          w: getWidthByUpCount(context.theme, 1), // x offset from preview.js * 2\n          lazyUpCount: args.lazyUpCount,\n          lazyUpCountBuffer: args.lazyUpCountBuffer,\n          items: createItems(Button, 12),\n          waitForDimensions: args.waitForDimensions\n        }\n      };\n    }\n  };\nLazyUpCount.args = {\n  ...sharedArgs,\n  lazyUpCount: 5,\n  lazyUpCountBuffer: 2\n};\nLazyUpCount.argTypes = {\n  ...sharedArgTypes,\n  lazyUpCount: {\n    control: 'number',\n    description:\n      'Used to calculate the number of items to display on the first render, see [Docs](?path=/docs/components-navigationmanager--docs#properties) for more details. <br/> **NOTE: changing this value requires refreshing the story to see its effect.**',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  lazyUpCountBuffer: {\n    control: 'number',\n    description:\n      'Used to calculate the number of items to display on the first render, see [Docs](?path=/docs/components-navigationmanager--docs#properties) for more details. <br/> **NOTE: changing this value requires refreshing the story to see its effect.**',\n    table: {\n      defaultValue: { summary: 2 }\n    }\n  }\n};\nLazyUpCount.parameters = {\n  storyDetails:\n    'There are 12 items passed to this Row. The number of items that are initially rendered equals the sum of the lazyUpCount and the lazyUpCountBuffer properties. Each time the next item is selected, an additional item is added to the end of the Row until all 12 items have been rendered.'\n};\n\nexport const RemovingItems = args =>\n  class RemovingItems extends lng.Component {\n    static _template() {\n      return {\n        Row: {\n          type: RowComponent,\n          w: getWidthByUpCount(context.theme, 1), // x offset from preview.js * 2\n          waitForDimensions: args.waitForDimensions,\n          signals: {\n            removeAt: 'removeButton'\n          },\n          items: [\n            ...createItems(Button, 2),\n            {\n              type: SignalButton,\n              title: 'Press Enter on this button to remove it (removeItemAt)',\n              signalName: 'removeAt',\n              passSignals: { removeAt: true }\n            }\n          ]\n        }\n      };\n    }\n\n    removeButton() {\n      this.tag('Row').removeItemAt(2);\n    }\n  };\nRemovingItems.args = {\n  ...sharedArgs\n};\nRemovingItems.argTypes = {\n  ...sharedArgTypes\n};\nRemovingItems.parameters = {\n  storyDetails:\n    'The third button in this row is configured to invoke removeItemAt to remove that button. Focus on that button and press Enter to invoke that method and remove the button from the row.'\n};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "Row": {
    "startLoc": {
      "col": 19,
      "line": 155
    },
    "endLoc": {
      "col": 3,
      "line": 167
    },
    "startBody": {
      "col": 19,
      "line": 155
    },
    "endBody": {
      "col": 3,
      "line": 167
    }
  },
  "FocusHeightChange": {
    "startLoc": {
      "col": 33,
      "line": 172
    },
    "endLoc": {
      "col": 3,
      "line": 188
    },
    "startBody": {
      "col": 33,
      "line": 172
    },
    "endBody": {
      "col": 3,
      "line": 188
    }
  },
  "VaryingItemWidth": {
    "startLoc": {
      "col": 32,
      "line": 190
    },
    "endLoc": {
      "col": 3,
      "line": 204
    },
    "startBody": {
      "col": 32,
      "line": 190
    },
    "endBody": {
      "col": 3,
      "line": 204
    }
  },
  "ExpandableWidth": {
    "startLoc": {
      "col": 31,
      "line": 206
    },
    "endLoc": {
      "col": 3,
      "line": 217
    },
    "startBody": {
      "col": 31,
      "line": 206
    },
    "endBody": {
      "col": 3,
      "line": 217
    }
  },
  "CenteredInParent": {
    "startLoc": {
      "col": 32,
      "line": 219
    },
    "endLoc": {
      "col": 3,
      "line": 245
    },
    "startBody": {
      "col": 32,
      "line": 219
    },
    "endBody": {
      "col": 3,
      "line": 245
    }
  },
  "Plinko": {
    "startLoc": {
      "col": 22,
      "line": 251
    },
    "endLoc": {
      "col": 1,
      "line": 289
    },
    "startBody": {
      "col": 22,
      "line": 251
    },
    "endBody": {
      "col": 1,
      "line": 289
    }
  },
  "SkipFocus": {
    "startLoc": {
      "col": 25,
      "line": 291
    },
    "endLoc": {
      "col": 3,
      "line": 318
    },
    "startBody": {
      "col": 25,
      "line": 291
    },
    "endBody": {
      "col": 3,
      "line": 318
    }
  },
  "LazyScrollIndexes": {
    "startLoc": {
      "col": 33,
      "line": 333
    },
    "endLoc": {
      "col": 3,
      "line": 356
    },
    "startBody": {
      "col": 33,
      "line": 333
    },
    "endBody": {
      "col": 3,
      "line": 356
    }
  },
  "AddingItems": {
    "startLoc": {
      "col": 27,
      "line": 383
    },
    "endLoc": {
      "col": 3,
      "line": 451
    },
    "startBody": {
      "col": 27,
      "line": 383
    },
    "endBody": {
      "col": 3,
      "line": 451
    }
  },
  "LazyUpCount": {
    "startLoc": {
      "col": 27,
      "line": 480
    },
    "endLoc": {
      "col": 3,
      "line": 494
    },
    "startBody": {
      "col": 27,
      "line": 480
    },
    "endBody": {
      "col": 3,
      "line": 494
    }
  },
  "RemovingItems": {
    "startLoc": {
      "col": 29,
      "line": 524
    },
    "endLoc": {
      "col": 3,
      "line": 551
    },
    "startBody": {
      "col": 29,
      "line": 524
    },
    "endBody": {
      "col": 3,
      "line": 551
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
  title: 'Components/Row',
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { getWidthByUpCount } from '../../utils';\nimport { default as RowComponent } from '.';\nimport Column from '../Column';\nimport context from '../../globals/context/index';\nimport { createModeControl } from '../../docs/utils';\nimport { SignalButton } from '../../docs/story-components';\nimport Button from '../Button';\n\nexport default {\n  title: 'Components/Row',\n  parameters: {\n    remountAll: true\n  }\n};\n\n/**\n * Shared Args and Arg Types for Stories\n */\nconst sharedArgs = {\n  alwaysScroll: false,\n  lazyScroll: false,\n  neverScroll: false,\n  scrollIndex: 0,\n  waitForDimensions: false,\n  mode: 'focused'\n};\n\nconst sharedArgTypes = {\n  ...createModeControl({ summaryValue: 'focused' }),\n  scrollIndex: {\n    control: { type: 'number', min: 0 },\n    description:\n      'Item index at which scrolling begins, provided the sum of item widths is greater than the width of the Row',\n    table: { defaultValue: { summary: 0 } }\n  },\n  alwaysScroll: {\n    control: 'boolean',\n    description:\n      'Determines whether the row will stop scrolling as it nears the right to prevent white space',\n    table: { defaultValue: { summary: false } }\n  },\n  neverScroll: {\n    control: 'boolean',\n    description:\n      'If true, the row will never scroll, unless alwaysScroll is set to true, and if false, the row will apply normal scrolling logic',\n    table: { defaultValue: { summary: false } }\n  },\n  lazyScroll: {\n    control: 'boolean',\n    description:\n      'Will only scroll the row if the item is off screen and alwaysScroll and neverScroll are both false',\n    table: { defaultValue: { summary: false } }\n  },\n  waitForDimensions: {\n    control: 'boolean',\n    description:\n      \"If true, the Row will wait for all child elements' w and h to be set before displaying the Row\",\n    table: { defaultValue: { summary: false } }\n  }\n};\n\n// creates an array of buttons to be used in Stories\nconst createItems = (buttonType, length, isVariedWidth = false) => {\n  return Array.from({ length }).map((_, i) => ({\n    type: buttonType,\n    title: `Button ${i + 1}`,\n    ...(isVariedWidth\n      ? {\n          fixed: true,\n          w: 200 + Math.floor(Math.random() * 100)\n        }\n      : {})\n  }));\n};\n\nclass ExpandingButton extends Button {\n  _construct() {\n    super._construct();\n    this.fixed = true;\n    this.w = 250;\n  }\n  _focus() {\n    super._focus();\n    this.smooth = { w: 350 };\n  }\n\n  _unfocus() {\n    super._unfocus();\n    this.smooth = { w: 250 };\n  }\n}\n\nclass ExpandingHeightButton extends Button {\n  _focus() {\n    super._focus();\n    this.smooth = { h: 150 };\n    this.fireAncestors('$itemChanged');\n  }\n\n  _unfocus() {\n    super._unfocus();\n    this.smooth = { h: 75 };\n  }\n}\n\nclass Title extends lng.Component {\n  static _template() {\n    return {\n      Label: {\n        x: 75,\n        y: 22,\n        mount: 0.5,\n        color: 0xffffffff,\n        text: { fontSize: 20 }\n      }\n    };\n  }\n\n  _init() {\n    this.tag('Label').on('txLoaded', () => {\n      this.w = this.tag('Label').renderWidth;\n      this.h = this.tag('Label').renderHeight;\n      this.fireAncestors('$itemChanged');\n    });\n  }\n\n  set titleText(titleText) {\n    this.tag('Label').text = titleText;\n  }\n}\n\n/**\n * Stories for various versions of the component\n */\n\nexport const Row = args =>\n  class Row extends lng.Component {\n    static _template() {\n      return {\n        Row: {\n          type: RowComponent,\n          w: getWidthByUpCount(context.theme, 1),\n          items: createItems(Button, 12),\n          waitForDimensions: args.waitForDimensions\n        }\n      };\n    }\n  };\n\nRow.args = sharedArgs;\nRow.argTypes = sharedArgTypes;\n\nexport const FocusHeightChange = () =>\n  class FocusHeightChange extends lng.Component {\n    static _template() {\n      return {\n        Row: {\n          type: RowComponent,\n          w: getWidthByUpCount(context.theme, 1),\n          items: Array.apply(null, { length: 5 }).map(() => ({\n            type: ExpandingHeightButton,\n            title: 'Button',\n            w: 150,\n            h: 75\n          }))\n        }\n      };\n    }\n  };\n\nexport const VaryingItemWidth = () =>\n  class VaryingItemWidth extends lng.Component {\n    static _template() {\n      return {\n        Row: {\n          type: RowComponent,\n          w: getWidthByUpCount(context.theme, 1),\n          items: createItems(Button, 10, {\n            fixed: true,\n            w: 200 + Math.floor(Math.random() * 100)\n          })\n        }\n      };\n    }\n  };\n\nexport const ExpandableWidth = () =>\n  class ExpandableWidth extends lng.Component {\n    static _template() {\n      return {\n        Row: {\n          type: RowComponent,\n          w: getWidthByUpCount(context.theme, 1),\n          items: createItems(ExpandingButton, 6)\n        }\n      };\n    }\n  };\n\nexport const CenteredInParent = () =>\n  class CenteredInParent extends lng.Component {\n    static _template() {\n      return {\n        Row: {\n          type: RowComponent,\n          autoResizeHeight: true,\n          w: getWidthByUpCount(context.theme, 1),\n          items: [\n            {\n              type: Column,\n              autoResizeWidth: true,\n              autoResizeHeight: true,\n              items: createItems(Button, 3)\n            },\n            {\n              type: Column,\n              autoResizeWidth: true,\n              autoResizeHeight: true,\n              centerInParent: true,\n              items: createItems(Button, 1)\n            }\n          ]\n        }\n      };\n    }\n  };\nCenteredInParent.parameters = {\n  storyDetails:\n    'This Row has 2 Columns as items. The second Column with 1 Button as an item has the centerInParent property enabled so it is vertically centered in the Row.'\n};\n\nexport const Plinko = () => {\n  return class Plinko extends lng.Component {\n    static _template() {\n      const skipFocusButtons = createItems(Button, 3);\n      skipFocusButtons[1].skipFocus = true;\n      skipFocusButtons[1].title = 'Skip Focus';\n      return {\n        Row: {\n          type: RowComponent,\n          w: getWidthByUpCount(context.theme, 1),\n          autoResizeHeight: true,\n          plinko: true,\n          items: [\n            {\n              type: Column,\n              autoResizeWidth: true,\n              items: createItems(Button, 3)\n            },\n            {\n              type: Column,\n              autoResizeWidth: true,\n              items: skipFocusButtons\n            },\n            {\n              type: Column,\n              autoResizeWidth: true,\n              items: createItems(Button, 3)\n            },\n            {\n              type: Column,\n              autoResizeWidth: true,\n              items: createItems(Button, 3)\n            }\n          ]\n        }\n      };\n    }\n  };\n};\n\nexport const SkipFocus = args =>\n  class SkipFocus extends lng.Component {\n    static _template() {\n      return {\n        Row: {\n          type: RowComponent,\n          w: getWidthByUpCount(context.theme, 1),\n          wrapSelected: args.wrapSelected,\n          items: [\n            ...Array.apply(null, { length: 13 }).map((_, i) => {\n              if (i % 4 === 0)\n                return {\n                  type: Title,\n                  titleText: 'Skip Focus Text',\n                  skipFocus: true\n                };\n              return { type: Button, title: 'Button' };\n            }),\n            {\n              type: Title,\n              titleText: 'Skip Focus Text',\n              skipFocus: true\n            }\n          ]\n        }\n      };\n    }\n  };\n\nSkipFocus.args = {\n  wrapSelected: false\n};\n\nSkipFocus.argTypes = {\n  wrapSelected: {\n    control: 'boolean',\n    description:\n      'Enables wrapping behavior, so selectNext() selects the first item if the current item is the last on the list and vice versa',\n    table: { defaultValue: { summary: false } }\n  }\n};\n\nexport const LazyScrollIndexes = ({\n  startLazyScrollIndex,\n  stopLazyScrollIndex,\n  waitForDimensions\n}) =>\n  class LazyScrollIndexes extends lng.Component {\n    static _template() {\n      return {\n        Row: {\n          type: RowComponent,\n          w: getWidthByUpCount(context.theme, 1),\n          items: Array.apply(null, { length: 12 }).map((_, i) => ({\n            type: Button,\n            title: `Button ${i + 1} ${\n              i === startLazyScrollIndex ? '(start lazy scroll)' : ''\n            } ${i === stopLazyScrollIndex ? '(stop lazy scroll)' : ''}`\n          })),\n          startLazyScrollIndex,\n          stopLazyScrollIndex,\n          waitForDimensions: waitForDimensions\n        }\n      };\n    }\n  };\nLazyScrollIndexes.args = {\n  ...sharedArgs,\n  lazyScroll: true,\n  startLazyScrollIndex: 1,\n  stopLazyScrollIndex: 10\n};\nLazyScrollIndexes.argTypes = {\n  ...sharedArgTypes,\n  startLazyScrollIndex: {\n    control: 'number',\n    description:\n      'Index of item in items, and items thereafter, at which lazy scrolling should occur at',\n    table: { defaultValue: { summary: 0 } }\n  },\n  stopLazyScrollIndex: {\n    control: 'number',\n    description:\n      'Index of item in items, and items preceding, at which lazy scrolling should occur',\n    table: { defaultValue: { summary: 0 } }\n  }\n};\nLazyScrollIndexes.parameters = {\n  storyDetails:\n    'Items before the item at startLazyScrollIndex and after the item at stopLazyScrollIndex will use alwaysScroll. Items at and between startLazyScrollIndex and stopLazyScrollIndex will use lazyScroll.'\n};\n\nexport const AddingItems = args =>\n  class AddingItems extends lng.Component {\n    static _template() {\n      return {\n        Row: {\n          type: RowComponent,\n          w: getWidthByUpCount(context.theme, 1), // x offset from preview.js * 2\n          lazyUpCount: args.lazyUpCount,\n          lazyUpCountBuffer: args.lazyUpCountBuffer,\n          waitForDimensions: args.waitForDimensions,\n          signals: {\n            append: 'appendButton',\n            appendAt: 'appendButtonAt',\n            prepend: 'prependButton'\n          },\n          items: [\n            {\n              type: SignalButton,\n              title: 'Prepend 1 Button (prependItems)',\n              signalName: 'prepend',\n              passSignals: { prepend: true }\n            },\n            {\n              type: SignalButton,\n              title: 'Append 1 Button at index 1 (appendItemsAt)',\n              signalName: 'appendAt',\n              passSignals: { appendAt: true }\n            },\n            {\n              type: SignalButton,\n              title: 'Append 1 Button to the Row (appendItems)',\n              signalName: 'append',\n              passSignals: { append: true }\n            }\n          ]\n        }\n      };\n    }\n\n    prependButton() {\n      this.tag('Row').prependItems([\n        {\n          type: Button,\n          title: 'Prepended Button'\n        }\n      ]);\n    }\n\n    appendButtonAt() {\n      this.tag('Row').appendItemsAt(\n        [\n          {\n            type: Button,\n            title: 'Appended Button at index 1'\n          }\n        ],\n        1\n      );\n    }\n\n    appendButton() {\n      this.tag('Row').appendItems([\n        {\n          type: Button,\n          title: 'Appended Button'\n        }\n      ]);\n    }\n  };\nAddingItems.args = {\n  ...sharedArgs,\n  lazyUpCountBuffer: 2\n};\nAddingItems.argTypes = {\n  ...sharedArgTypes,\n  lazyUpCount: {\n    control: 'number',\n    description:\n      'Used to calculate the number of items to display on the first render, see [Docs](?path=/docs/components-navigationmanager--docs#properties) for more details. <br/> **NOTE: changing this value requires refreshing the story to see its effect.**',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  lazyUpCountBuffer: {\n    control: 'number',\n    description:\n      'Used to calculate the number of items to display on the first render, see [Docs](?path=/docs/components-navigationmanager--docs#properties) for more details. <br/> **NOTE: changing this value requires refreshing the story to see its effect.**',\n    table: {\n      defaultValue: { summary: 2 }\n    }\n  }\n};\nAddingItems.parameters = {\n  storyDetails:\n    'The 3 buttons initially rendered in this story are configured to invoke 1 of the 3 methods available to add items to a Row (the name of the method used is in parenthesis on the button). Press enter on any of those 3 buttons to invoke that method and add a button to the Row.'\n};\n\nexport const LazyUpCount = args =>\n  class LazyUpCount extends lng.Component {\n    static _template() {\n      return {\n        Row: {\n          type: RowComponent,\n          w: getWidthByUpCount(context.theme, 1), // x offset from preview.js * 2\n          lazyUpCount: args.lazyUpCount,\n          lazyUpCountBuffer: args.lazyUpCountBuffer,\n          items: createItems(Button, 12),\n          waitForDimensions: args.waitForDimensions\n        }\n      };\n    }\n  };\nLazyUpCount.args = {\n  ...sharedArgs,\n  lazyUpCount: 5,\n  lazyUpCountBuffer: 2\n};\nLazyUpCount.argTypes = {\n  ...sharedArgTypes,\n  lazyUpCount: {\n    control: 'number',\n    description:\n      'Used to calculate the number of items to display on the first render, see [Docs](?path=/docs/components-navigationmanager--docs#properties) for more details. <br/> **NOTE: changing this value requires refreshing the story to see its effect.**',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  lazyUpCountBuffer: {\n    control: 'number',\n    description:\n      'Used to calculate the number of items to display on the first render, see [Docs](?path=/docs/components-navigationmanager--docs#properties) for more details. <br/> **NOTE: changing this value requires refreshing the story to see its effect.**',\n    table: {\n      defaultValue: { summary: 2 }\n    }\n  }\n};\nLazyUpCount.parameters = {\n  storyDetails:\n    'There are 12 items passed to this Row. The number of items that are initially rendered equals the sum of the lazyUpCount and the lazyUpCountBuffer properties. Each time the next item is selected, an additional item is added to the end of the Row until all 12 items have been rendered.'\n};\n\nexport const RemovingItems = args =>\n  class RemovingItems extends lng.Component {\n    static _template() {\n      return {\n        Row: {\n          type: RowComponent,\n          w: getWidthByUpCount(context.theme, 1), // x offset from preview.js * 2\n          waitForDimensions: args.waitForDimensions,\n          signals: {\n            removeAt: 'removeButton'\n          },\n          items: [\n            ...createItems(Button, 2),\n            {\n              type: SignalButton,\n              title: 'Press Enter on this button to remove it (removeItemAt)',\n              signalName: 'removeAt',\n              passSignals: { removeAt: true }\n            }\n          ]\n        }\n      };\n    }\n\n    removeButton() {\n      this.tag('Row').removeItemAt(2);\n    }\n  };\nRemovingItems.args = {\n  ...sharedArgs\n};\nRemovingItems.argTypes = {\n  ...sharedArgTypes\n};\nRemovingItems.parameters = {\n  storyDetails:\n    'The third button in this row is configured to invoke removeItemAt to remove that button. Focus on that button and press Enter to invoke that method and remove the button from the row.'\n};\n",
      "locationsMap": {
        "row": {
          "startLoc": {
            "col": 19,
            "line": 155
          },
          "endLoc": {
            "col": 3,
            "line": 167
          },
          "startBody": {
            "col": 19,
            "line": 155
          },
          "endBody": {
            "col": 3,
            "line": 167
          }
        },
        "focus-height-change": {
          "startLoc": {
            "col": 33,
            "line": 172
          },
          "endLoc": {
            "col": 3,
            "line": 188
          },
          "startBody": {
            "col": 33,
            "line": 172
          },
          "endBody": {
            "col": 3,
            "line": 188
          }
        },
        "varying-item-width": {
          "startLoc": {
            "col": 32,
            "line": 190
          },
          "endLoc": {
            "col": 3,
            "line": 204
          },
          "startBody": {
            "col": 32,
            "line": 190
          },
          "endBody": {
            "col": 3,
            "line": 204
          }
        },
        "expandable-width": {
          "startLoc": {
            "col": 31,
            "line": 206
          },
          "endLoc": {
            "col": 3,
            "line": 217
          },
          "startBody": {
            "col": 31,
            "line": 206
          },
          "endBody": {
            "col": 3,
            "line": 217
          }
        },
        "centered-in-parent": {
          "startLoc": {
            "col": 32,
            "line": 219
          },
          "endLoc": {
            "col": 3,
            "line": 245
          },
          "startBody": {
            "col": 32,
            "line": 219
          },
          "endBody": {
            "col": 3,
            "line": 245
          }
        },
        "plinko": {
          "startLoc": {
            "col": 22,
            "line": 251
          },
          "endLoc": {
            "col": 1,
            "line": 289
          },
          "startBody": {
            "col": 22,
            "line": 251
          },
          "endBody": {
            "col": 1,
            "line": 289
          }
        },
        "skip-focus": {
          "startLoc": {
            "col": 25,
            "line": 291
          },
          "endLoc": {
            "col": 3,
            "line": 318
          },
          "startBody": {
            "col": 25,
            "line": 291
          },
          "endBody": {
            "col": 3,
            "line": 318
          }
        },
        "lazy-scroll-indexes": {
          "startLoc": {
            "col": 33,
            "line": 333
          },
          "endLoc": {
            "col": 3,
            "line": 356
          },
          "startBody": {
            "col": 33,
            "line": 333
          },
          "endBody": {
            "col": 3,
            "line": 356
          }
        },
        "adding-items": {
          "startLoc": {
            "col": 27,
            "line": 383
          },
          "endLoc": {
            "col": 3,
            "line": 451
          },
          "startBody": {
            "col": 27,
            "line": 383
          },
          "endBody": {
            "col": 3,
            "line": 451
          }
        },
        "lazy-up-count": {
          "startLoc": {
            "col": 27,
            "line": 480
          },
          "endLoc": {
            "col": 3,
            "line": 494
          },
          "startBody": {
            "col": 27,
            "line": 480
          },
          "endBody": {
            "col": 3,
            "line": 494
          }
        },
        "removing-items": {
          "startLoc": {
            "col": 29,
            "line": 524
          },
          "endLoc": {
            "col": 3,
            "line": 551
          },
          "startBody": {
            "col": 29,
            "line": 524
          },
          "endBody": {
            "col": 3,
            "line": 551
          }
        }
      }
    },
    remountAll: true
  }
});

/**
 * Shared Args and Arg Types for Stories
 */
var sharedArgs = {
  alwaysScroll: false,
  lazyScroll: false,
  neverScroll: false,
  scrollIndex: 0,
  waitForDimensions: false,
  mode: 'focused'
};
var sharedArgTypes = _objectSpread(_objectSpread({}, (0,_docs_utils__WEBPACK_IMPORTED_MODULE_1__/* .createModeControl */ .Pg)({
  summaryValue: 'focused'
})), {}, {
  scrollIndex: {
    control: {
      type: 'number',
      min: 0
    },
    description: 'Item index at which scrolling begins, provided the sum of item widths is greater than the width of the Row',
    table: {
      defaultValue: {
        summary: 0
      }
    }
  },
  alwaysScroll: {
    control: 'boolean',
    description: 'Determines whether the row will stop scrolling as it nears the right to prevent white space',
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  neverScroll: {
    control: 'boolean',
    description: 'If true, the row will never scroll, unless alwaysScroll is set to true, and if false, the row will apply normal scrolling logic',
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  lazyScroll: {
    control: 'boolean',
    description: 'Will only scroll the row if the item is off screen and alwaysScroll and neverScroll are both false',
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  waitForDimensions: {
    control: 'boolean',
    description: "If true, the Row will wait for all child elements' w and h to be set before displaying the Row",
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
});

// creates an array of buttons to be used in Stories
var createItems = function createItems(buttonType, length) {
  var isVariedWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return Array.from({
    length: length
  }).map(function (_, i) {
    return _objectSpread({
      type: buttonType,
      title: "Button ".concat(i + 1)
    }, isVariedWidth ? {
      fixed: true,
      w: 200 + Math.floor(Math.random() * 100)
    } : {});
  });
};
var ExpandingButton = /*#__PURE__*/function (_Button) {
  _inherits(ExpandingButton, _Button);
  var _super = _createSuper(ExpandingButton);
  function ExpandingButton() {
    _classCallCheck(this, ExpandingButton);
    return _super.apply(this, arguments);
  }
  _createClass(ExpandingButton, [{
    key: "_construct",
    value: function _construct() {
      _get(_getPrototypeOf(ExpandingButton.prototype), "_construct", this).call(this);
      this.fixed = true;
      this.w = 250;
    }
  }, {
    key: "_focus",
    value: function _focus() {
      _get(_getPrototypeOf(ExpandingButton.prototype), "_focus", this).call(this);
      this.smooth = {
        w: 350
      };
    }
  }, {
    key: "_unfocus",
    value: function _unfocus() {
      _get(_getPrototypeOf(ExpandingButton.prototype), "_unfocus", this).call(this);
      this.smooth = {
        w: 250
      };
    }
  }]);
  return ExpandingButton;
}(_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
var ExpandingHeightButton = /*#__PURE__*/function (_Button2) {
  _inherits(ExpandingHeightButton, _Button2);
  var _super2 = _createSuper(ExpandingHeightButton);
  function ExpandingHeightButton() {
    _classCallCheck(this, ExpandingHeightButton);
    return _super2.apply(this, arguments);
  }
  _createClass(ExpandingHeightButton, [{
    key: "_focus",
    value: function _focus() {
      _get(_getPrototypeOf(ExpandingHeightButton.prototype), "_focus", this).call(this);
      this.smooth = {
        h: 150
      };
      this.fireAncestors('$itemChanged');
    }
  }, {
    key: "_unfocus",
    value: function _unfocus() {
      _get(_getPrototypeOf(ExpandingHeightButton.prototype), "_unfocus", this).call(this);
      this.smooth = {
        h: 75
      };
    }
  }]);
  return ExpandingHeightButton;
}(_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
var Title = /*#__PURE__*/function (_lng$Component) {
  _inherits(Title, _lng$Component);
  var _super3 = _createSuper(Title);
  function Title() {
    _classCallCheck(this, Title);
    return _super3.apply(this, arguments);
  }
  _createClass(Title, [{
    key: "_init",
    value: function _init() {
      var _this = this;
      this.tag('Label').on('txLoaded', function () {
        _this.w = _this.tag('Label').renderWidth;
        _this.h = _this.tag('Label').renderHeight;
        _this.fireAncestors('$itemChanged');
      });
    }
  }, {
    key: "titleText",
    set: function set(titleText) {
      this.tag('Label').text = titleText;
    }
  }], [{
    key: "_template",
    value: function _template() {
      return {
        Label: {
          x: 75,
          y: 22,
          mount: 0.5,
          color: 0xffffffff,
          text: {
            fontSize: 20
          }
        }
      };
    }
  }]);
  return Title;
}(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
/**
 * Stories for various versions of the component
 */
var Row = function Row(args) {
  return /*#__PURE__*/function (_lng$Component2) {
    _inherits(Row, _lng$Component2);
    var _super4 = _createSuper(Row);
    function Row() {
      _classCallCheck(this, Row);
      return _super4.apply(this, arguments);
    }
    _createClass(Row, null, [{
      key: "_template",
      value: function _template() {
        return {
          Row: {
            type: ___WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
            w: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getWidthByUpCount */ .cN)(_globals_context_index__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.theme, 1),
            items: createItems(_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, 12),
            waitForDimensions: args.waitForDimensions
          }
        };
      }
    }]);
    return Row;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
};
;
Row.args = sharedArgs;
Row.argTypes = sharedArgTypes;
var FocusHeightChange = function FocusHeightChange() {
  return /*#__PURE__*/function (_lng$Component3) {
    _inherits(FocusHeightChange, _lng$Component3);
    var _super5 = _createSuper(FocusHeightChange);
    function FocusHeightChange() {
      _classCallCheck(this, FocusHeightChange);
      return _super5.apply(this, arguments);
    }
    _createClass(FocusHeightChange, null, [{
      key: "_template",
      value: function _template() {
        return {
          Row: {
            type: ___WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
            w: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getWidthByUpCount */ .cN)(_globals_context_index__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.theme, 1),
            items: Array.apply(null, {
              length: 5
            }).map(function () {
              return {
                type: ExpandingHeightButton,
                title: 'Button',
                w: 150,
                h: 75
              };
            })
          }
        };
      }
    }]);
    return FocusHeightChange;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
};
;
var VaryingItemWidth = function VaryingItemWidth() {
  return /*#__PURE__*/function (_lng$Component4) {
    _inherits(VaryingItemWidth, _lng$Component4);
    var _super6 = _createSuper(VaryingItemWidth);
    function VaryingItemWidth() {
      _classCallCheck(this, VaryingItemWidth);
      return _super6.apply(this, arguments);
    }
    _createClass(VaryingItemWidth, null, [{
      key: "_template",
      value: function _template() {
        return {
          Row: {
            type: ___WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
            w: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getWidthByUpCount */ .cN)(_globals_context_index__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.theme, 1),
            items: createItems(_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, 10, {
              fixed: true,
              w: 200 + Math.floor(Math.random() * 100)
            })
          }
        };
      }
    }]);
    return VaryingItemWidth;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
};
;
var ExpandableWidth = function ExpandableWidth() {
  return /*#__PURE__*/function (_lng$Component5) {
    _inherits(ExpandableWidth, _lng$Component5);
    var _super7 = _createSuper(ExpandableWidth);
    function ExpandableWidth() {
      _classCallCheck(this, ExpandableWidth);
      return _super7.apply(this, arguments);
    }
    _createClass(ExpandableWidth, null, [{
      key: "_template",
      value: function _template() {
        return {
          Row: {
            type: ___WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
            w: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getWidthByUpCount */ .cN)(_globals_context_index__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.theme, 1),
            items: createItems(ExpandingButton, 6)
          }
        };
      }
    }]);
    return ExpandableWidth;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
};
;
var CenteredInParent = function CenteredInParent() {
  return /*#__PURE__*/function (_lng$Component6) {
    _inherits(CenteredInParent, _lng$Component6);
    var _super8 = _createSuper(CenteredInParent);
    function CenteredInParent() {
      _classCallCheck(this, CenteredInParent);
      return _super8.apply(this, arguments);
    }
    _createClass(CenteredInParent, null, [{
      key: "_template",
      value: function _template() {
        return {
          Row: {
            type: ___WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
            autoResizeHeight: true,
            w: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getWidthByUpCount */ .cN)(_globals_context_index__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.theme, 1),
            items: [{
              type: _Column__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
              autoResizeWidth: true,
              autoResizeHeight: true,
              items: createItems(_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, 3)
            }, {
              type: _Column__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
              autoResizeWidth: true,
              autoResizeHeight: true,
              centerInParent: true,
              items: createItems(_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, 1)
            }]
          }
        };
      }
    }]);
    return CenteredInParent;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
};
;
CenteredInParent.parameters = {
  storyDetails: 'This Row has 2 Columns as items. The second Column with 1 Button as an item has the centerInParent property enabled so it is vertically centered in the Row.'
};
var Plinko = function Plinko() {
  return /*#__PURE__*/function (_lng$Component7) {
    _inherits(Plinko, _lng$Component7);
    var _super9 = _createSuper(Plinko);
    function Plinko() {
      _classCallCheck(this, Plinko);
      return _super9.apply(this, arguments);
    }
    _createClass(Plinko, null, [{
      key: "_template",
      value: function _template() {
        var skipFocusButtons = createItems(_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, 3);
        skipFocusButtons[1].skipFocus = true;
        skipFocusButtons[1].title = 'Skip Focus';
        return {
          Row: {
            type: ___WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
            w: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getWidthByUpCount */ .cN)(_globals_context_index__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.theme, 1),
            autoResizeHeight: true,
            plinko: true,
            items: [{
              type: _Column__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
              autoResizeWidth: true,
              items: createItems(_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, 3)
            }, {
              type: _Column__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
              autoResizeWidth: true,
              items: skipFocusButtons
            }, {
              type: _Column__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
              autoResizeWidth: true,
              items: createItems(_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, 3)
            }, {
              type: _Column__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
              autoResizeWidth: true,
              items: createItems(_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, 3)
            }]
          }
        };
      }
    }]);
    return Plinko;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
};
;
var SkipFocus = function SkipFocus(args) {
  return /*#__PURE__*/function (_lng$Component8) {
    _inherits(SkipFocus, _lng$Component8);
    var _super10 = _createSuper(SkipFocus);
    function SkipFocus() {
      _classCallCheck(this, SkipFocus);
      return _super10.apply(this, arguments);
    }
    _createClass(SkipFocus, null, [{
      key: "_template",
      value: function _template() {
        return {
          Row: {
            type: ___WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
            w: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getWidthByUpCount */ .cN)(_globals_context_index__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.theme, 1),
            wrapSelected: args.wrapSelected,
            items: [].concat(_toConsumableArray(Array.apply(null, {
              length: 13
            }).map(function (_, i) {
              if (i % 4 === 0) return {
                type: Title,
                titleText: 'Skip Focus Text',
                skipFocus: true
              };
              return {
                type: _Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
                title: 'Button'
              };
            })), [{
              type: Title,
              titleText: 'Skip Focus Text',
              skipFocus: true
            }])
          }
        };
      }
    }]);
    return SkipFocus;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
};
;
SkipFocus.args = {
  wrapSelected: false
};
SkipFocus.argTypes = {
  wrapSelected: {
    control: 'boolean',
    description: 'Enables wrapping behavior, so selectNext() selects the first item if the current item is the last on the list and vice versa',
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
};
var LazyScrollIndexes = function LazyScrollIndexes(_ref) {
  var startLazyScrollIndex = _ref.startLazyScrollIndex,
    stopLazyScrollIndex = _ref.stopLazyScrollIndex,
    waitForDimensions = _ref.waitForDimensions;
  return /*#__PURE__*/function (_lng$Component9) {
    _inherits(LazyScrollIndexes, _lng$Component9);
    var _super11 = _createSuper(LazyScrollIndexes);
    function LazyScrollIndexes() {
      _classCallCheck(this, LazyScrollIndexes);
      return _super11.apply(this, arguments);
    }
    _createClass(LazyScrollIndexes, null, [{
      key: "_template",
      value: function _template() {
        return {
          Row: {
            type: ___WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
            w: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getWidthByUpCount */ .cN)(_globals_context_index__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.theme, 1),
            items: Array.apply(null, {
              length: 12
            }).map(function (_, i) {
              return {
                type: _Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
                title: "Button ".concat(i + 1, " ").concat(i === startLazyScrollIndex ? '(start lazy scroll)' : '', " ").concat(i === stopLazyScrollIndex ? '(stop lazy scroll)' : '')
              };
            }),
            startLazyScrollIndex: startLazyScrollIndex,
            stopLazyScrollIndex: stopLazyScrollIndex,
            waitForDimensions: waitForDimensions
          }
        };
      }
    }]);
    return LazyScrollIndexes;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
};
;
LazyScrollIndexes.args = _objectSpread(_objectSpread({}, sharedArgs), {}, {
  lazyScroll: true,
  startLazyScrollIndex: 1,
  stopLazyScrollIndex: 10
});
LazyScrollIndexes.argTypes = _objectSpread(_objectSpread({}, sharedArgTypes), {}, {
  startLazyScrollIndex: {
    control: 'number',
    description: 'Index of item in items, and items thereafter, at which lazy scrolling should occur at',
    table: {
      defaultValue: {
        summary: 0
      }
    }
  },
  stopLazyScrollIndex: {
    control: 'number',
    description: 'Index of item in items, and items preceding, at which lazy scrolling should occur',
    table: {
      defaultValue: {
        summary: 0
      }
    }
  }
});
LazyScrollIndexes.parameters = {
  storyDetails: 'Items before the item at startLazyScrollIndex and after the item at stopLazyScrollIndex will use alwaysScroll. Items at and between startLazyScrollIndex and stopLazyScrollIndex will use lazyScroll.'
};
var AddingItems = function AddingItems(args) {
  return /*#__PURE__*/function (_lng$Component10) {
    _inherits(AddingItems, _lng$Component10);
    var _super12 = _createSuper(AddingItems);
    function AddingItems() {
      _classCallCheck(this, AddingItems);
      return _super12.apply(this, arguments);
    }
    _createClass(AddingItems, [{
      key: "prependButton",
      value: function prependButton() {
        this.tag('Row').prependItems([{
          type: _Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
          title: 'Prepended Button'
        }]);
      }
    }, {
      key: "appendButtonAt",
      value: function appendButtonAt() {
        this.tag('Row').appendItemsAt([{
          type: _Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
          title: 'Appended Button at index 1'
        }], 1);
      }
    }, {
      key: "appendButton",
      value: function appendButton() {
        this.tag('Row').appendItems([{
          type: _Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
          title: 'Appended Button'
        }]);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Row: {
            type: ___WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
            w: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getWidthByUpCount */ .cN)(_globals_context_index__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.theme, 1),
            // x offset from preview.js * 2
            lazyUpCount: args.lazyUpCount,
            lazyUpCountBuffer: args.lazyUpCountBuffer,
            waitForDimensions: args.waitForDimensions,
            signals: {
              append: 'appendButton',
              appendAt: 'appendButtonAt',
              prepend: 'prependButton'
            },
            items: [{
              type: _docs_story_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,
              title: 'Prepend 1 Button (prependItems)',
              signalName: 'prepend',
              passSignals: {
                prepend: true
              }
            }, {
              type: _docs_story_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,
              title: 'Append 1 Button at index 1 (appendItemsAt)',
              signalName: 'appendAt',
              passSignals: {
                appendAt: true
              }
            }, {
              type: _docs_story_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,
              title: 'Append 1 Button to the Row (appendItems)',
              signalName: 'append',
              passSignals: {
                append: true
              }
            }]
          }
        };
      }
    }]);
    return AddingItems;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
};
;
AddingItems.args = _objectSpread(_objectSpread({}, sharedArgs), {}, {
  lazyUpCountBuffer: 2
});
AddingItems.argTypes = _objectSpread(_objectSpread({}, sharedArgTypes), {}, {
  lazyUpCount: {
    control: 'number',
    description: 'Used to calculate the number of items to display on the first render, see [Docs](?path=/docs/components-navigationmanager--docs#properties) for more details. <br/> **NOTE: changing this value requires refreshing the story to see its effect.**',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  lazyUpCountBuffer: {
    control: 'number',
    description: 'Used to calculate the number of items to display on the first render, see [Docs](?path=/docs/components-navigationmanager--docs#properties) for more details. <br/> **NOTE: changing this value requires refreshing the story to see its effect.**',
    table: {
      defaultValue: {
        summary: 2
      }
    }
  }
});
AddingItems.parameters = {
  storyDetails: 'The 3 buttons initially rendered in this story are configured to invoke 1 of the 3 methods available to add items to a Row (the name of the method used is in parenthesis on the button). Press enter on any of those 3 buttons to invoke that method and add a button to the Row.'
};
var LazyUpCount = function LazyUpCount(args) {
  return /*#__PURE__*/function (_lng$Component11) {
    _inherits(LazyUpCount, _lng$Component11);
    var _super13 = _createSuper(LazyUpCount);
    function LazyUpCount() {
      _classCallCheck(this, LazyUpCount);
      return _super13.apply(this, arguments);
    }
    _createClass(LazyUpCount, null, [{
      key: "_template",
      value: function _template() {
        return {
          Row: {
            type: ___WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
            w: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getWidthByUpCount */ .cN)(_globals_context_index__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.theme, 1),
            // x offset from preview.js * 2
            lazyUpCount: args.lazyUpCount,
            lazyUpCountBuffer: args.lazyUpCountBuffer,
            items: createItems(_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, 12),
            waitForDimensions: args.waitForDimensions
          }
        };
      }
    }]);
    return LazyUpCount;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
};
;
LazyUpCount.args = _objectSpread(_objectSpread({}, sharedArgs), {}, {
  lazyUpCount: 5,
  lazyUpCountBuffer: 2
});
LazyUpCount.argTypes = _objectSpread(_objectSpread({}, sharedArgTypes), {}, {
  lazyUpCount: {
    control: 'number',
    description: 'Used to calculate the number of items to display on the first render, see [Docs](?path=/docs/components-navigationmanager--docs#properties) for more details. <br/> **NOTE: changing this value requires refreshing the story to see its effect.**',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  lazyUpCountBuffer: {
    control: 'number',
    description: 'Used to calculate the number of items to display on the first render, see [Docs](?path=/docs/components-navigationmanager--docs#properties) for more details. <br/> **NOTE: changing this value requires refreshing the story to see its effect.**',
    table: {
      defaultValue: {
        summary: 2
      }
    }
  }
});
LazyUpCount.parameters = {
  storyDetails: 'There are 12 items passed to this Row. The number of items that are initially rendered equals the sum of the lazyUpCount and the lazyUpCountBuffer properties. Each time the next item is selected, an additional item is added to the end of the Row until all 12 items have been rendered.'
};
var RemovingItems = function RemovingItems(args) {
  return /*#__PURE__*/function (_lng$Component12) {
    _inherits(RemovingItems, _lng$Component12);
    var _super14 = _createSuper(RemovingItems);
    function RemovingItems() {
      _classCallCheck(this, RemovingItems);
      return _super14.apply(this, arguments);
    }
    _createClass(RemovingItems, [{
      key: "removeButton",
      value: function removeButton() {
        this.tag('Row').removeItemAt(2);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Row: {
            type: ___WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
            w: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getWidthByUpCount */ .cN)(_globals_context_index__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.theme, 1),
            // x offset from preview.js * 2
            waitForDimensions: args.waitForDimensions,
            signals: {
              removeAt: 'removeButton'
            },
            items: [].concat(_toConsumableArray(createItems(_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, 2)), [{
              type: _docs_story_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,
              title: 'Press Enter on this button to remove it (removeItemAt)',
              signalName: 'removeAt',
              passSignals: {
                removeAt: true
              }
            }])
          }
        };
      }
    }]);
    return RemovingItems;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
};
RemovingItems.args = _objectSpread({}, sharedArgs);
RemovingItems.argTypes = _objectSpread({}, sharedArgTypes);
RemovingItems.parameters = {
  storyDetails: 'The third button in this row is configured to invoke removeItemAt to remove that button. Focus on that button and press Enter to invoke that method and remove the button from the row.'
};
Row.parameters = {
  ...Row.parameters,
  docs: {
    ...Row.parameters?.docs,
    source: {
      originalSource: "args => class Row extends lng.Component {\n  static _template() {\n    return {\n      Row: {\n        type: RowComponent,\n        w: getWidthByUpCount(context.theme, 1),\n        items: createItems(Button, 12),\n        waitForDimensions: args.waitForDimensions\n      }\n    };\n  }\n}",
      ...Row.parameters?.docs?.source
    },
    description: {
      story: "Stories for various versions of the component",
      ...Row.parameters?.docs?.description
    }
  }
};
FocusHeightChange.parameters = {
  ...FocusHeightChange.parameters,
  docs: {
    ...FocusHeightChange.parameters?.docs,
    source: {
      originalSource: "() => class FocusHeightChange extends lng.Component {\n  static _template() {\n    return {\n      Row: {\n        type: RowComponent,\n        w: getWidthByUpCount(context.theme, 1),\n        items: Array.apply(null, {\n          length: 5\n        }).map(() => ({\n          type: ExpandingHeightButton,\n          title: 'Button',\n          w: 150,\n          h: 75\n        }))\n      }\n    };\n  }\n}",
      ...FocusHeightChange.parameters?.docs?.source
    }
  }
};
VaryingItemWidth.parameters = {
  ...VaryingItemWidth.parameters,
  docs: {
    ...VaryingItemWidth.parameters?.docs,
    source: {
      originalSource: "() => class VaryingItemWidth extends lng.Component {\n  static _template() {\n    return {\n      Row: {\n        type: RowComponent,\n        w: getWidthByUpCount(context.theme, 1),\n        items: createItems(Button, 10, {\n          fixed: true,\n          w: 200 + Math.floor(Math.random() * 100)\n        })\n      }\n    };\n  }\n}",
      ...VaryingItemWidth.parameters?.docs?.source
    }
  }
};
ExpandableWidth.parameters = {
  ...ExpandableWidth.parameters,
  docs: {
    ...ExpandableWidth.parameters?.docs,
    source: {
      originalSource: "() => class ExpandableWidth extends lng.Component {\n  static _template() {\n    return {\n      Row: {\n        type: RowComponent,\n        w: getWidthByUpCount(context.theme, 1),\n        items: createItems(ExpandingButton, 6)\n      }\n    };\n  }\n}",
      ...ExpandableWidth.parameters?.docs?.source
    }
  }
};
CenteredInParent.parameters = {
  ...CenteredInParent.parameters,
  docs: {
    ...CenteredInParent.parameters?.docs,
    source: {
      originalSource: "() => class CenteredInParent extends lng.Component {\n  static _template() {\n    return {\n      Row: {\n        type: RowComponent,\n        autoResizeHeight: true,\n        w: getWidthByUpCount(context.theme, 1),\n        items: [{\n          type: Column,\n          autoResizeWidth: true,\n          autoResizeHeight: true,\n          items: createItems(Button, 3)\n        }, {\n          type: Column,\n          autoResizeWidth: true,\n          autoResizeHeight: true,\n          centerInParent: true,\n          items: createItems(Button, 1)\n        }]\n      }\n    };\n  }\n}",
      ...CenteredInParent.parameters?.docs?.source
    }
  }
};
Plinko.parameters = {
  ...Plinko.parameters,
  docs: {
    ...Plinko.parameters?.docs,
    source: {
      originalSource: "() => {\n  return class Plinko extends lng.Component {\n    static _template() {\n      const skipFocusButtons = createItems(Button, 3);\n      skipFocusButtons[1].skipFocus = true;\n      skipFocusButtons[1].title = 'Skip Focus';\n      return {\n        Row: {\n          type: RowComponent,\n          w: getWidthByUpCount(context.theme, 1),\n          autoResizeHeight: true,\n          plinko: true,\n          items: [{\n            type: Column,\n            autoResizeWidth: true,\n            items: createItems(Button, 3)\n          }, {\n            type: Column,\n            autoResizeWidth: true,\n            items: skipFocusButtons\n          }, {\n            type: Column,\n            autoResizeWidth: true,\n            items: createItems(Button, 3)\n          }, {\n            type: Column,\n            autoResizeWidth: true,\n            items: createItems(Button, 3)\n          }]\n        }\n      };\n    }\n  };\n}",
      ...Plinko.parameters?.docs?.source
    }
  }
};
SkipFocus.parameters = {
  ...SkipFocus.parameters,
  docs: {
    ...SkipFocus.parameters?.docs,
    source: {
      originalSource: "args => class SkipFocus extends lng.Component {\n  static _template() {\n    return {\n      Row: {\n        type: RowComponent,\n        w: getWidthByUpCount(context.theme, 1),\n        wrapSelected: args.wrapSelected,\n        items: [...Array.apply(null, {\n          length: 13\n        }).map((_, i) => {\n          if (i % 4 === 0) return {\n            type: Title,\n            titleText: 'Skip Focus Text',\n            skipFocus: true\n          };\n          return {\n            type: Button,\n            title: 'Button'\n          };\n        }), {\n          type: Title,\n          titleText: 'Skip Focus Text',\n          skipFocus: true\n        }]\n      }\n    };\n  }\n}",
      ...SkipFocus.parameters?.docs?.source
    }
  }
};
LazyScrollIndexes.parameters = {
  ...LazyScrollIndexes.parameters,
  docs: {
    ...LazyScrollIndexes.parameters?.docs,
    source: {
      originalSource: "({\n  startLazyScrollIndex,\n  stopLazyScrollIndex,\n  waitForDimensions\n}) => class LazyScrollIndexes extends lng.Component {\n  static _template() {\n    return {\n      Row: {\n        type: RowComponent,\n        w: getWidthByUpCount(context.theme, 1),\n        items: Array.apply(null, {\n          length: 12\n        }).map((_, i) => ({\n          type: Button,\n          title: `Button ${i + 1} ${i === startLazyScrollIndex ? '(start lazy scroll)' : ''} ${i === stopLazyScrollIndex ? '(stop lazy scroll)' : ''}`\n        })),\n        startLazyScrollIndex,\n        stopLazyScrollIndex,\n        waitForDimensions: waitForDimensions\n      }\n    };\n  }\n}",
      ...LazyScrollIndexes.parameters?.docs?.source
    }
  }
};
AddingItems.parameters = {
  ...AddingItems.parameters,
  docs: {
    ...AddingItems.parameters?.docs,
    source: {
      originalSource: "args => class AddingItems extends lng.Component {\n  static _template() {\n    return {\n      Row: {\n        type: RowComponent,\n        w: getWidthByUpCount(context.theme, 1),\n        // x offset from preview.js * 2\n        lazyUpCount: args.lazyUpCount,\n        lazyUpCountBuffer: args.lazyUpCountBuffer,\n        waitForDimensions: args.waitForDimensions,\n        signals: {\n          append: 'appendButton',\n          appendAt: 'appendButtonAt',\n          prepend: 'prependButton'\n        },\n        items: [{\n          type: SignalButton,\n          title: 'Prepend 1 Button (prependItems)',\n          signalName: 'prepend',\n          passSignals: {\n            prepend: true\n          }\n        }, {\n          type: SignalButton,\n          title: 'Append 1 Button at index 1 (appendItemsAt)',\n          signalName: 'appendAt',\n          passSignals: {\n            appendAt: true\n          }\n        }, {\n          type: SignalButton,\n          title: 'Append 1 Button to the Row (appendItems)',\n          signalName: 'append',\n          passSignals: {\n            append: true\n          }\n        }]\n      }\n    };\n  }\n  prependButton() {\n    this.tag('Row').prependItems([{\n      type: Button,\n      title: 'Prepended Button'\n    }]);\n  }\n  appendButtonAt() {\n    this.tag('Row').appendItemsAt([{\n      type: Button,\n      title: 'Appended Button at index 1'\n    }], 1);\n  }\n  appendButton() {\n    this.tag('Row').appendItems([{\n      type: Button,\n      title: 'Appended Button'\n    }]);\n  }\n}",
      ...AddingItems.parameters?.docs?.source
    }
  }
};
LazyUpCount.parameters = {
  ...LazyUpCount.parameters,
  docs: {
    ...LazyUpCount.parameters?.docs,
    source: {
      originalSource: "args => class LazyUpCount extends lng.Component {\n  static _template() {\n    return {\n      Row: {\n        type: RowComponent,\n        w: getWidthByUpCount(context.theme, 1),\n        // x offset from preview.js * 2\n        lazyUpCount: args.lazyUpCount,\n        lazyUpCountBuffer: args.lazyUpCountBuffer,\n        items: createItems(Button, 12),\n        waitForDimensions: args.waitForDimensions\n      }\n    };\n  }\n}",
      ...LazyUpCount.parameters?.docs?.source
    }
  }
};
RemovingItems.parameters = {
  ...RemovingItems.parameters,
  docs: {
    ...RemovingItems.parameters?.docs,
    source: {
      originalSource: "args => class RemovingItems extends lng.Component {\n  static _template() {\n    return {\n      Row: {\n        type: RowComponent,\n        w: getWidthByUpCount(context.theme, 1),\n        // x offset from preview.js * 2\n        waitForDimensions: args.waitForDimensions,\n        signals: {\n          removeAt: 'removeButton'\n        },\n        items: [...createItems(Button, 2), {\n          type: SignalButton,\n          title: 'Press Enter on this button to remove it (removeItemAt)',\n          signalName: 'removeAt',\n          passSignals: {\n            removeAt: true\n          }\n        }]\n      }\n    };\n  }\n  removeButton() {\n    this.tag('Row').removeItemAt(2);\n  }\n}",
      ...RemovingItems.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Row","FocusHeightChange","VaryingItemWidth","ExpandableWidth","CenteredInParent","Plinko","SkipFocus","LazyScrollIndexes","AddingItems","LazyUpCount","RemovingItems"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/docs/story-components/SignalButton.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ SignalButton)
/* harmony export */ });
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/Button.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SignalButton = /*#__PURE__*/function (_Button) {
  _inherits(SignalButton, _Button);
  var _super = _createSuper(SignalButton);
  function SignalButton() {
    _classCallCheck(this, SignalButton);
    return _super.apply(this, arguments);
  }
  _createClass(SignalButton, [{
    key: "onEnter",
    value: function onEnter() {
      this.signal(this.signalName);
    }
  }, {
    key: "signalName",
    get: function get() {
      return this._signalName;
    },
    set: function set(signalName) {
      this._signalName = signalName;
    }
  }]);
  return SignalButton;
}(_components_Button_Button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/docs/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pg: () => (/* binding */ createModeControl),
/* harmony export */   cY: () => (/* binding */ DocsLink),
/* harmony export */   jb: () => (/* binding */ generateSubStory)
/* harmony export */ });
/* unused harmony exports nestedArgs, nestedArgTypes, prevValues, nestedArgActions, Item, ObjectFormat, GenericType */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/react/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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

// eslint-disable-next-line no-unused-vars



// creates Mode control on stories
var createModeControl = function createModeControl() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    options = _ref.options,
    summaryValue = _ref.summaryValue;
  return {
    mode: {
      control: 'radio',
      options: options && Array.isArray(options) ? ['unfocused'].concat(_toConsumableArray(options)) : ['unfocused', 'focused', 'disabled'],
      description: 'Sets the visual mode for the component',
      table: {
        defaultValue: {
          summary: summaryValue
        }
      },
      type: {
        name: 'string',
        required: true
      }
    }
  };
};

/**
 * @param {object} config Parameters for generating nested args: { argsObj, targetProp, include, overrides }
 */
function nestedArgs(config) {
  var argsObj = config.argsObj,
    targetProp = config.targetProp,
    include = config.include,
    overrides = config.overrides;
  return Object.keys(argsObj).reduce(function (acc, curr) {
    if (!include.includes(curr)) return acc;
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, targetProp + '_' + curr, overrides.args && overrides.args[curr] || argsObj[curr]));
  }, {});
}

/**
 * @param {object} config Parameters for generating nested arg types: { argsObj, targetProp, include, overrides }
 */
function nestedArgTypes(config) {
  var argTypesObj = config.argTypesObj,
    targetProp = config.targetProp,
    include = config.include,
    overrides = config.overrides;
  return Object.keys(argTypesObj).reduce(function (acc, curr) {
    if (!include.includes(curr)) return acc;
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, targetProp + '_' + curr, _objectSpread(_objectSpread(_objectSpread({
      // Namespaced to avoid conflicts
      name: curr
    }, argTypesObj[curr]), overrides[curr]), {}, {
      table: _objectSpread(_objectSpread(_objectSpread({}, argTypesObj[curr].table || {}), overrides[curr] && overrides[curr].table), {}, {
        category: targetProp
      })
    })));
  }, {});
}
var prevValues = {};

/**
 * @param {object} config Parameters for generating nested arg actions: { componentName, argsTypeObj, targetProp, include, overrides }
 */
function nestedArgActions(config) {
  var componentName = config.componentName,
    argTypesObj = config.argTypesObj,
    targetProp = config.targetProp,
    include = config.include,
    overrides = config.overrides;
  return Object.keys(argTypesObj).reduce(function (acc, curr) {
    if (!include.includes(curr)) return acc;
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, targetProp + '_' + curr, function (value, component) {
      component.tag(componentName).patch(_defineProperty({}, targetProp, _objectSpread(_objectSpread({}, prevValues[targetProp]), {}, _defineProperty({}, curr.replace(targetProp + '_', ''), value === 'none' ? undefined : overrides && overrides[curr] || value))));
      // Allow patching to work with nested objects
      if (!prevValues[targetProp]) {
        prevValues[targetProp] = {};
      }
      prevValues[targetProp][curr.replace(targetProp + '_', '')] = value === 'none' ? undefined : overrides && overrides[curr] || value;
    }));
  }, {});
}

/**
 * @param {object} config Parameters for generating story: { componentName, baseStory, subStory, targetProperty, include, options }
 */
function generateSubStory(config) {
  config.baseStory.args = _objectSpread(_objectSpread({}, config.baseStory.args), nestedArgs({
    argsObj: config.subStory.args || {},
    targetProp: config.targetProperty,
    include: config.include,
    overrides: config.overrides && config.overrides.args || {}
  }));
  config.baseStory.argTypes = _objectSpread(_objectSpread({}, config.baseStory.argTypes), nestedArgTypes({
    argTypesObj: config.subStory.argTypes || {},
    targetProp: config.targetProperty,
    include: config.include,
    overrides: config.overrides && config.overrides.argTypes || {}
  }));
  if (!(config.baseStory && config.baseStory.parameters && config.baseStory.parameters.argActions)) {
    config.baseStory.parameters = {
      argActions: {}
    };
  }
  config.baseStory.parameters.argActions = _objectSpread(_objectSpread({}, config.baseStory.parameters.argActions), nestedArgActions({
    componentName: config.componentName,
    argTypesObj: config.subStory.argTypes || {},
    targetProp: config.targetProperty,
    include: config.include,
    overrides: config.overrides && config.overrides.argActions || {}
  }));
}

// used to create links to Lightning docs given an id
var DocsLink = function DocsLink(_ref2) {
  var children = _ref2.children,
    id = _ref2.id;
  var docsmap = {
    lng: {
      _base: 'https://rdkcentral.github.io/Lightning/docs',
      Component: '/components/overview',
      Text: '/textures/text',
      Transition: '/transitions/attributes'
    }
  };
  var _id$split = id.split('.'),
    _id$split2 = _slicedToArray(_id$split, 2),
    source = _id$split2[0],
    path = _id$split2[1];
  var href = docsmap[source]._base + docsmap[source][path];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: href,
    target: "_blank"
  }, children || id);
};
var Item = function Item(_ref3) {
  var children = _ref3.children;
  return children;
};

/**
 * Creates formatted object for markdown prop tables
 * see Column and Row stories
 * @param {object} props
 * @param {object} props.type - TS-style generic/utility type
 */
var ObjectFormat = function ObjectFormat(_ref4) {
  var object = _ref4.object;
  return ['{', /*#__PURE__*/React.createElement("br", null), '  '].concat(_toConsumableArray(utils.flatten(Object.entries(object).map(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
      k = _ref6[0],
      v = _ref6[1];
    return [/*#__PURE__*/React.createElement("span", null, "\xA0\xA0"), "".concat(k, ": "), v, ',', /*#__PURE__*/React.createElement("br", null)];
  }))), ['}']).map(function (x, i) {
    return /*#__PURE__*/React.createElement(Item, {
      key: i
    }, x);
  });
};

/**
 * Formats TS-style generic types
 * See Columns and Row stories
 * @param {object} props
 * @param {object} props.children - component children
 * @param {string} props.type - Name of generic type
 */
var GenericType = function GenericType(_ref7) {
  var children = _ref7.children,
    type = _ref7.type;
  return [type, '<', children, '>'].map(function (x, i) {
    return /*#__PURE__*/React.createElement(Item, {
      key: i
    }, x);
  });
};

/***/ })

}]);
//# sourceMappingURL=231.52f9935b.iframe.bundle.js.map