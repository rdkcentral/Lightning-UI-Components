"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[6592],{

/***/ "../../@lightningjs/ui-components/src/components/Column/Column.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddingItems: () => (/* binding */ AddingItems),
/* harmony export */   CenteredInParent: () => (/* binding */ CenteredInParent),
/* harmony export */   Column: () => (/* binding */ Column),
/* harmony export */   ExpandableHeightItems: () => (/* binding */ ExpandableHeightItems),
/* harmony export */   ExpandableHeightRows: () => (/* binding */ ExpandableHeightRows),
/* harmony export */   LazyUpCount: () => (/* binding */ LazyUpCount),
/* harmony export */   MultiColumn: () => (/* binding */ MultiColumn),
/* harmony export */   OnScreenEffect: () => (/* binding */ OnScreenEffect),
/* harmony export */   Plinko: () => (/* binding */ Plinko),
/* harmony export */   RemovingItems: () => (/* binding */ RemovingItems),
/* harmony export */   SkipFocus: () => (/* binding */ SkipFocus),
/* harmony export */   SkipPlinko: () => (/* binding */ SkipPlinko),
/* harmony export */   StickyTitle: () => (/* binding */ StickyTitle),
/* harmony export */   VaryingItemHeight: () => (/* binding */ VaryingItemHeight),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Row/Row.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Tile/Tile.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/Button.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Column/Column.js");
/* harmony import */ var _docs_story_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/story-components/SignalButton.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _Column$parameters, _Column$parameters2, _MultiColumn$paramete, _MultiColumn$paramete2, _Plinko$parameters, _Plinko$parameters2, _VaryingItemHeight$pa, _VaryingItemHeight$pa2, _ExpandableHeightItem, _ExpandableHeightItem2, _ExpandableHeightRows, _ExpandableHeightRows2, _SkipFocus$parameters, _SkipFocus$parameters2, _OnScreenEffect$param, _OnScreenEffect$param2, _StickyTitle$paramete, _StickyTitle$paramete2, _CenteredInParent$par, _CenteredInParent$par2, _SkipPlinko$parameter, _SkipPlinko$parameter2, _LazyUpCount$paramete, _LazyUpCount$paramete2, _AddingItems$paramete, _AddingItems$paramete2, _RemovingItems$parame, _RemovingItems$parame2;
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { context } from '../../globals';\nimport { flatten, getWidthByUpCount } from '../../utils';\nimport Row from '../Row';\nimport Tile from '../Tile';\nimport Button from '../Button';\nimport { default as ColumnComponent } from '.';\nimport { SignalButton } from '../../docs/story-components';\n\nexport default {\n  title: 'Components/Column',\n  parameters: {\n    remountAll: true\n  }\n};\n\nconst columnHeight =\n  context.theme.layout.screenH -\n  2 * (context.theme.layout.marginY + context.theme.layout.gutterY);\n\n// creates an array of buttons to be used in Stories\nconst createItems = (buttonType, length, isVariedHeight, isDynamicWidth) => {\n  return Array.from({ length }).map((_, i) => {\n    const button = {\n      type: buttonType,\n      title: `Button ${i + 1}`\n    };\n    if (!isDynamicWidth) {\n      button.fixed = true;\n      button.w = 250;\n    }\n    if (isVariedHeight) {\n      button.h = 40 + Math.floor(Math.random() * 100);\n    }\n    return button;\n  });\n};\n\nexport const Column = args =>\n  class Column extends lng.Component {\n    static _template() {\n      return {\n        Column: {\n          type: ColumnComponent,\n          h:\n            context.theme.layout.screenH -\n            2 * (context.theme.layout.marginY + context.theme.layout.gutterY),\n          scrollIndex: args.scrollIndex,\n          items: createItems(Button, 20),\n          waitForDimensions: args.waitForDimensions\n        }\n      };\n    }\n  };\n\nColumn.args = {\n  scroll: 1,\n  scrollIndex: 0,\n  alwaysScroll: false,\n  waitForDimensions: false\n};\n\nColumn.argTypes = {\n  scroll: {\n    control: 'select',\n    options: [1, 5, 15, 20],\n    description: 'Scroll to selected index',\n    table: { defaultValue: { summary: 'undefined' } }\n  },\n  scrollIndex: {\n    control: { type: 'number', min: 0 },\n    description:\n      'Item index at which scrolling begins, provided the sum of item heights is greater than the height of the Column',\n    table: { defaultValue: { summary: 0 } }\n  },\n  alwaysScroll: {\n    control: 'boolean',\n    description:\n      'Determines whether the column will stop scrolling as it nears the bottom to prevent white space',\n    table: { defaultValue: { summary: false } }\n  },\n  waitForDimensions: {\n    control: 'boolean',\n    description:\n      \"If true, the Column will wait for all child elements' w and h to be set before displaying the Column\",\n    table: { defaultValue: { summary: false } }\n  }\n};\n\nColumn.parameters = {\n  argActions: {\n    scroll: function (index, component) {\n      component.tag('Column').scrollTo(index - 1);\n    }\n  }\n};\n\nexport const MultiColumn = () =>\n  class MultiColumn extends lng.Component {\n    static _template() {\n      return {\n        Row: {\n          type: Row,\n          items: [\n            {\n              type: ColumnComponent,\n              h: columnHeight,\n              autoResizeWidth: true,\n              items: createItems(Button, 20)\n            },\n            {\n              type: ColumnComponent,\n              h: columnHeight,\n              autoResizeWidth: true,\n              items: createItems(Button, 20)\n            }\n          ]\n        }\n      };\n    }\n  };\n\nexport const Plinko = () =>\n  class Plinko extends lng.Component {\n    static _template() {\n      return {\n        Column: {\n          type: ColumnComponent,\n          plinko: true,\n          items: [\n            {\n              type: Row,\n              autoResizeHeight: true,\n              autoResizeWidth: true,\n              items: createItems(Button, 3)\n            },\n            {\n              type: Row,\n              autoResizeHeight: true,\n              autoResizeWidth: true,\n              items: createItems(Button, 3)\n            }\n          ]\n        }\n      };\n    }\n  };\n\nexport const VaryingItemHeight = () =>\n  class VaryingItemHeight extends lng.Component {\n    static _template() {\n      return {\n        Column: {\n          type: ColumnComponent,\n          h: columnHeight,\n          items: createItems(Button, 10, true)\n        }\n      };\n    }\n  };\n\nexport const ExpandableHeightItems = () =>\n  class ExpandableHeightItems extends lng.Component {\n    static _template() {\n      return {\n        Column: {\n          type: ColumnComponent,\n          h: columnHeight,\n          items: createItems(ExpandingButton, 15)\n        }\n      };\n    }\n  };\n\nexport const ExpandableHeightRows = () =>\n  class ExpandableHeightItems extends lng.Component {\n    static _template() {\n      return {\n        Column: {\n          type: ColumnComponent,\n          h: columnHeight,\n          plinko: true,\n          items: Array.apply(null, { length: 15 }).map(() => ({\n            type: Row,\n            autoResizeHeight: true,\n            w: getWidthByUpCount(context.theme, 1),\n            items: createItems(ExpandingButton, 3)\n          }))\n        }\n      };\n    }\n  };\n\nexport const SkipFocus = args =>\n  class SkipFocus extends lng.Component {\n    static _template() {\n      return {\n        Column: {\n          type: ColumnComponent,\n          h: columnHeight,\n          wrapSelected: args.wrapSelected,\n          items: [\n            ...Array.apply(null, { length: 49 }).map((_, i) => {\n              if (i % 4 === 0)\n                return {\n                  type: Title,\n                  titleText: 'Skip Focus Text',\n                  h: 30,\n                  skipFocus: true\n                };\n              return { type: Button, title: 'Button' };\n            }),\n            {\n              type: Title,\n              titleText: 'Skip Focus Text',\n              h: 30,\n              skipFocus: true\n            }\n          ]\n        }\n      };\n    }\n  };\n\nSkipFocus.args = {\n  wrapSelected: false\n};\n\nSkipFocus.argTypes = {\n  wrapSelected: {\n    control: { type: 'boolean' },\n    description:\n      'Enables wrapping behavior, so selectNext() selects the first item if the current item is the last on the list and vice versa',\n    table: { defaultValue: { summary: false } }\n  }\n};\n\nexport const OnScreenEffect = () =>\n  class OnScreenEffect extends lng.Component {\n    static _template() {\n      return {\n        Column: {\n          type: ColumnComponent,\n          scrollIndex: 2,\n          h: columnHeight,\n          items: createItems(Button, 10)\n        }\n      };\n    }\n\n    _init() {\n      this.tag('Column').onScreenEffect = items => {\n        const { selected } = this.tag('Column');\n        const selectedIndex = items.indexOf(selected);\n\n        items\n          .slice(0, selectedIndex)\n          .reverse()\n          .forEach((item, idx) => {\n            item.alpha = 1 / (1 + idx);\n          });\n        items.slice(selectedIndex + 1).forEach((item, idx) => {\n          item.alpha = 1 / (1 + idx);\n        });\n      };\n    }\n  };\n\nexport const StickyTitle = () => {\n  const items = flatten(\n    Array.apply(null, { length: 5 }).map((_, i) => {\n      const headerText = `Sticky Header ${i}`;\n      const items = Array.apply(null, { length: 8 }).map((_, i) => {\n        return {\n          type: Button,\n          title: `Button ${i + 1}`,\n          fixed: true,\n          w: 250,\n          headerText\n        };\n      });\n\n      return [\n        {\n          type: ColumnHeader,\n          headerText,\n          h: 40,\n          skipFocus: true\n        },\n        ...items\n      ];\n    })\n  );\n  items.shift();\n\n  return class ColumnExample extends lng.Component {\n    static _template() {\n      return {\n        Column: {\n          y: 50,\n          h: 400,\n          autoResizeWidth: true,\n          clipping: true,\n          type: ColumnComponent,\n          items,\n          signals: {\n            selectedChange: '_updateHeader'\n          }\n        },\n        ColumnHeader: {\n          type: ColumnHeader,\n          headerText: 'Sticky Header 0',\n          h: 40\n        }\n      };\n    }\n\n    _updateHeader(selected) {\n      this.tag('ColumnHeader').headerText = selected.headerText || '';\n    }\n  };\n};\n\nexport const CenteredInParent = () =>\n  class CenteredInParent extends lng.Component {\n    static _template() {\n      return {\n        Column: {\n          type: ColumnComponent,\n          autoResizeWidth: true,\n          items: [\n            {\n              type: Row,\n              autoResizeWidth: true,\n              autoResizeHeight: true,\n              items: createItems(Button, 3)\n            },\n            {\n              type: Row,\n              autoResizeWidth: true,\n              autoResizeHeight: true,\n              centerInParent: true,\n              items: createItems(Button, 2)\n            },\n            {\n              ...createItems(Button, 1)[0],\n              centerInParent: true\n            }\n          ]\n        }\n      };\n    }\n  };\n\nCenteredInParent.parameters = {\n  storyDetails:\n    'Each Row in the Column has centerInParent set to true on it so is horizontally centered in the Column it is an item of.'\n};\n\nclass ColumnHeader extends lng.Component {\n  static _template() {\n    return {\n      Label: {\n        x: 5,\n        y: 10,\n        text: {\n          fontSize: 24,\n          textColor: 0xffffffff\n        },\n        zIndex: 2\n      },\n      Line: {\n        color: 0xffffff1f,\n        rect: true,\n        w: 300,\n        y: 35,\n        h: 3\n      }\n    };\n  }\n\n  set headerText(text) {\n    this.tag('Label').text.text = text;\n  }\n}\n\nclass Title extends lng.Component {\n  static _template() {\n    return {\n      Label: {\n        x: 75,\n        y: 22,\n        mount: 0.5,\n        color: 0xffffffff,\n        text: { fontSize: 20 }\n      }\n    };\n  }\n\n  _init() {\n    this.tag('Label').text = this.titleText;\n  }\n}\n\nclass ExpandingButton extends Button {\n  _init() {\n    this.h = 80;\n    super._init();\n    this.fireAncestors('$itemChanged');\n  }\n\n  _focus() {\n    super._focus();\n    this.smooth = { h: 120 };\n    this.fireAncestors('$itemChanged');\n  }\n\n  _unfocus() {\n    super._unfocus();\n    this.smooth = { h: 80 };\n    this.fireAncestors('$itemChanged');\n  }\n}\n\nexport const SkipPlinko = () =>\n  class SkipPlinko extends lng.Component {\n    static _template() {\n      return {\n        Column: {\n          type: ColumnComponent,\n          w: getWidthByUpCount(context.theme, 1),\n          plinko: true,\n          items: [\n            {\n              type: Row,\n              autoResizeHeight: true,\n              items: [\n                {\n                  type: Tile,\n                  itemLayout: { ratioX: 16, ratioY: 9, upCount: 5 },\n                  artwork: {\n                    src: 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg'\n                  }\n                },\n                {\n                  type: Tile,\n                  itemLayout: { ratioX: 16, ratioY: 9, upCount: 5 },\n                  artwork: {\n                    src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg'\n                  }\n                },\n                {\n                  type: Tile,\n                  itemLayout: { ratioX: 16, ratioY: 9, upCount: 5 },\n                  artwork: {\n                    src: 'https://image.tmdb.org/t/p/w500/sQBS8MYXN9CZWV3gEDcL95G1KpA.jpg'\n                  }\n                },\n                {\n                  type: Tile,\n                  itemLayout: { ratioX: 16, ratioY: 9, upCount: 5 },\n                  artwork: {\n                    src: 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg'\n                  }\n                },\n                {\n                  type: Tile,\n                  itemLayout: { ratioX: 16, ratioY: 9, upCount: 5 },\n                  artwork: {\n                    src: 'https://image.tmdb.org/t/p/w500/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg'\n                  }\n                }\n              ]\n            },\n            {\n              type: Row,\n              autoResizeHeight: true,\n              skipPlinko: true,\n              items: [\n                {\n                  type: Tile,\n                  itemLayout: { ratioX: 4, ratioY: 1, upCount: 1 },\n                  artwork: {\n                    src: 'https://image.tmdb.org/t/p/w500/m0iEEib19yHzyD8hLh09qkIWbwz.jpg'\n                  },\n                  metadata: {\n                    title: 'Row with skipPlinko set to true'\n                  },\n                  persistentMetadata: true\n                }\n              ]\n            },\n            {\n              type: Row,\n              autoResizeHeight: true,\n              items: [\n                {\n                  type: Tile,\n                  itemLayout: { ratioX: 16, ratioY: 9, upCount: 5 },\n                  artwork: {\n                    src: 'https://image.tmdb.org/t/p/w500/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg'\n                  }\n                },\n                {\n                  type: Tile,\n                  itemLayout: { ratioX: 16, ratioY: 9, upCount: 5 },\n                  artwork: {\n                    src: 'https://image.tmdb.org/t/p/w500/jauI01vUIkPA0xVsamGj0Gs1nNL.jpg'\n                  }\n                },\n                {\n                  type: Tile,\n                  itemLayout: { ratioX: 16, ratioY: 9, upCount: 5 },\n                  artwork: {\n                    src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg'\n                  }\n                },\n                {\n                  type: Tile,\n                  itemLayout: { ratioX: 16, ratioY: 9, upCount: 5 },\n                  artwork: {\n                    src: 'https://image.tmdb.org/t/p/w500/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg'\n                  }\n                },\n                {\n                  type: Tile,\n                  itemLayout: { ratioX: 16, ratioY: 9, upCount: 5 },\n                  artwork: {\n                    src: 'https://image.tmdb.org/t/p/w500/jauI01vUIkPA0xVsamGj0Gs1nNL.jpg'\n                  }\n                }\n              ]\n            }\n          ]\n        }\n      };\n    }\n  };\n\nexport const LazyUpCount = args =>\n  class LazyUpCount extends lng.Component {\n    static _template() {\n      return {\n        Column: {\n          type: ColumnComponent,\n          h: 500,\n          scrollIndex: args.scrollIndex,\n          lazyUpCount: args.lazyUpCount,\n          lazyUpCountBuffer: args.lazyUpCountBuffer,\n          items: createItems(Button, 20),\n          alwaysScroll: args.alwaysScroll\n        }\n      };\n    }\n  };\nLazyUpCount.args = {\n  scrollIndex: 0,\n  lazyUpCount: 5,\n  lazyUpCountBuffer: 2,\n  itemTransition: 0.4,\n  alwaysScroll: false,\n  scroll: 1\n};\n\nLazyUpCount.argTypes = {\n  itemTransition: {\n    table: {\n      disable: true // removes control from story\n    }\n  },\n  scroll: {\n    table: {\n      disable: true // removes control from story\n    }\n  },\n  scrollIndex: {\n    control: { type: 'number', min: 0 },\n    description:\n      'Item index at which scrolling begins, provided the sum of item heights is greater than the height of the Column',\n    table: { defaultValue: { summary: 0 } }\n  },\n  lazyUpCount: {\n    control: 'number',\n    description:\n      'Used to calculate the number of items to display on the first render, see [Docs](?path=/docs/navigation-navigationmanager--row#properties) for more details. <br/> **NOTE: changing this value requires refreshing the story to see its effect.**',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  lazyUpCountBuffer: {\n    control: 'number',\n    description:\n      'Used to calculate the number of items to display on the first render, see [Docs](?path=/docs/navigation-navigationmanager--row#properties) for more details. <br/> **NOTE: changing this value requires refreshing the story to see its effect.**',\n    table: {\n      defaultValue: { summary: 2 }\n    }\n  },\n  alwaysScroll: {\n    control: { type: 'boolean' },\n    description:\n      'Determines whether the column will stop scrolling as it nears the bottom to prevent white space',\n    table: { defaultValue: { summary: false } }\n  }\n};\nLazyUpCount.parameters = {\n  storyDetails:\n    'There are 20 items passed to this Column. The number of items that are initially rendered equals the sum of the lazyUpCount property and 2. Each time the next item is selected, an additional item is added to the end of the Column until all 20 items have been rendered.'\n};\n\nexport const AddingItems = args =>\n  class AddingItems extends lng.Component {\n    static _template() {\n      return {\n        Column: {\n          type: ColumnComponent,\n          h: 500,\n          scrollIndex: args.scrollIndex,\n          lazyUpCount: args.lazyUpCount,\n          lazyUpCountBuffer: args.lazyUpCountBuffer,\n          signals: {\n            append: 'appendButton',\n            appendAt: 'appendButtonAt',\n            prepend: 'prependButton'\n          },\n          items: [\n            {\n              type: SignalButton,\n              title: 'Prepend 1 Button (prependItems)',\n              signalName: 'prepend',\n              passSignals: { prepend: true }\n            },\n            {\n              type: SignalButton,\n              title: 'Append 1 Button at index 1 (appendItemsAt)',\n              signalName: 'appendAt',\n              passSignals: { appendAt: true }\n            },\n            {\n              type: SignalButton,\n              title: 'Append 1 Button to the Row (appendItems)',\n              signalName: 'append',\n              passSignals: { append: true }\n            }\n          ]\n        }\n      };\n    }\n\n    prependButton() {\n      this.tag('Column').prependItems([\n        {\n          type: Button,\n          title: 'Prepended Button'\n        }\n      ]);\n    }\n\n    appendButtonAt() {\n      this.tag('Column').appendItemsAt(\n        [\n          {\n            type: Button,\n            title: 'Appended Button at index 1'\n          }\n        ],\n        1\n      );\n    }\n\n    appendButton() {\n      this.tag('Column').appendItems([\n        {\n          type: Button,\n          title: 'Appended Button'\n        }\n      ]);\n    }\n  };\nAddingItems.args = {\n  scrollIndex: 0,\n  lazyUpCountBuffer: 2\n};\nAddingItems.argTypes = {\n  scrollIndex: {\n    control: { type: 'number', min: 0 },\n    description:\n      'Item index at which scrolling begins, provided the sum of item heights is greater than the height of the Column',\n    table: { defaultValue: { summary: 0 } }\n  },\n  lazyUpCount: {\n    control: 'number',\n    description:\n      'Used to calculate the number of items to display on the first render, see [Docs](?path=/docs/navigation-navigationmanager--row#properties) for more details. <br/> **NOTE: changing this value requires refreshing the story to see its effect.**',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  lazyUpCountBuffer: {\n    control: 'number',\n    description:\n      'Used to calculate the number of items to display on the first render, see [Docs](?path=/docs/navigation-navigationmanager--row#properties) for more details. <br/> **NOTE: changing this value requires refreshing the story to see its effect.**',\n    table: {\n      defaultValue: { summary: 2 }\n    }\n  }\n};\nAddingItems.parameters = {\n  storyDetails:\n    'The 3 buttons initially rendered in this story are configured to invoke 1 of the 3 methods available to add items to a Column (the name of the method used is in parenthesis on the button). Press enter on any of those 3 buttons to invoke that method and add a button to the Column.'\n};\n\nexport const RemovingItems = args =>\n  class RemovingItems extends lng.Component {\n    static _template() {\n      return {\n        Column: {\n          type: ColumnComponent,\n          h: 500,\n          scrollIndex: args.scrollIndex,\n          signals: {\n            removeAt: 'removeButton'\n          },\n          items: [\n            ...createItems(Button, 2),\n            {\n              type: SignalButton,\n              title: 'Press Enter on this button to remove it (removeItemAt)',\n              signalName: 'removeAt',\n              passSignals: { removeAt: true }\n            }\n          ]\n        }\n      };\n    }\n\n    removeButton() {\n      this.tag('Column').removeItemAt(2);\n    }\n  };\nRemovingItems.args = {\n  scrollIndex: 0\n};\nRemovingItems.argTypes = {\n  scrollIndex: {\n    control: { type: 'number', min: 0 },\n    description:\n      'Item index at which scrolling begins, provided the sum of item heights is greater than the height of the Column',\n    table: { defaultValue: { summary: 0 } }\n  }\n};\nRemovingItems.parameters = {\n  storyDetails:\n    'The third button in this column is configured to invoke removeItemAt to remove that button. Focus on that button and press Enter to invoke that method and remove the button from the column.'\n};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "Column": {
    "startLoc": {
      "col": 22,
      "line": 54
    },
    "endLoc": {
      "col": 1,
      "line": 66
    },
    "startBody": {
      "col": 22,
      "line": 54
    },
    "endBody": {
      "col": 1,
      "line": 66
    }
  },
  "MultiColumn": {
    "startLoc": {
      "col": 27,
      "line": 122
    },
    "endLoc": {
      "col": 1,
      "line": 141
    },
    "startBody": {
      "col": 27,
      "line": 122
    },
    "endBody": {
      "col": 1,
      "line": 141
    }
  },
  "Plinko": {
    "startLoc": {
      "col": 22,
      "line": 142
    },
    "endLoc": {
      "col": 1,
      "line": 162
    },
    "startBody": {
      "col": 22,
      "line": 142
    },
    "endBody": {
      "col": 1,
      "line": 162
    }
  },
  "VaryingItemHeight": {
    "startLoc": {
      "col": 33,
      "line": 163
    },
    "endLoc": {
      "col": 1,
      "line": 173
    },
    "startBody": {
      "col": 33,
      "line": 163
    },
    "endBody": {
      "col": 1,
      "line": 173
    }
  },
  "ExpandableHeightItems": {
    "startLoc": {
      "col": 37,
      "line": 174
    },
    "endLoc": {
      "col": 1,
      "line": 184
    },
    "startBody": {
      "col": 37,
      "line": 174
    },
    "endBody": {
      "col": 1,
      "line": 184
    }
  },
  "ExpandableHeightRows": {
    "startLoc": {
      "col": 36,
      "line": 185
    },
    "endLoc": {
      "col": 1,
      "line": 203
    },
    "startBody": {
      "col": 36,
      "line": 185
    },
    "endBody": {
      "col": 1,
      "line": 203
    }
  },
  "SkipFocus": {
    "startLoc": {
      "col": 25,
      "line": 204
    },
    "endLoc": {
      "col": 1,
      "line": 233
    },
    "startBody": {
      "col": 25,
      "line": 204
    },
    "endBody": {
      "col": 1,
      "line": 233
    }
  },
  "OnScreenEffect": {
    "startLoc": {
      "col": 30,
      "line": 250
    },
    "endLoc": {
      "col": 1,
      "line": 275
    },
    "startBody": {
      "col": 30,
      "line": 250
    },
    "endBody": {
      "col": 1,
      "line": 275
    }
  },
  "StickyTitle": {
    "startLoc": {
      "col": 27,
      "line": 276
    },
    "endLoc": {
      "col": 1,
      "line": 325
    },
    "startBody": {
      "col": 27,
      "line": 276
    },
    "endBody": {
      "col": 1,
      "line": 325
    }
  },
  "CenteredInParent": {
    "startLoc": {
      "col": 32,
      "line": 326
    },
    "endLoc": {
      "col": 1,
      "line": 350
    },
    "startBody": {
      "col": 32,
      "line": 326
    },
    "endBody": {
      "col": 1,
      "line": 350
    }
  },
  "SkipPlinko": {
    "startLoc": {
      "col": 26,
      "line": 418
    },
    "endLoc": {
      "col": 1,
      "line": 556
    },
    "startBody": {
      "col": 26,
      "line": 418
    },
    "endBody": {
      "col": 1,
      "line": 556
    }
  },
  "LazyUpCount": {
    "startLoc": {
      "col": 27,
      "line": 557
    },
    "endLoc": {
      "col": 1,
      "line": 571
    },
    "startBody": {
      "col": 27,
      "line": 557
    },
    "endBody": {
      "col": 1,
      "line": 571
    }
  },
  "AddingItems": {
    "startLoc": {
      "col": 27,
      "line": 638
    },
    "endLoc": {
      "col": 1,
      "line": 695
    },
    "startBody": {
      "col": 27,
      "line": 638
    },
    "endBody": {
      "col": 1,
      "line": 695
    }
  },
  "RemovingItems": {
    "startLoc": {
      "col": 29,
      "line": 735
    },
    "endLoc": {
      "col": 1,
      "line": 759
    },
    "startBody": {
      "col": 29,
      "line": 735
    },
    "endBody": {
      "col": 1,
      "line": 759
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
  title: 'Components/Column',
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { context } from '../../globals';\nimport { flatten, getWidthByUpCount } from '../../utils';\nimport Row from '../Row';\nimport Tile from '../Tile';\nimport Button from '../Button';\nimport { default as ColumnComponent } from '.';\nimport { SignalButton } from '../../docs/story-components';\nexport default {\n  title: 'Components/Column',\n  parameters: {\n    remountAll: true\n  }\n};\nconst columnHeight = context.theme.layout.screenH - 2 * (context.theme.layout.marginY + context.theme.layout.gutterY);\n\n// creates an array of buttons to be used in Stories\nconst createItems = (buttonType, length, isVariedHeight, isDynamicWidth) => {\n  return Array.from({\n    length\n  }).map((_, i) => {\n    const button = {\n      type: buttonType,\n      title: `Button ${i + 1}`\n    };\n    if (!isDynamicWidth) {\n      button.fixed = true;\n      button.w = 250;\n    }\n    if (isVariedHeight) {\n      button.h = 40 + Math.floor(Math.random() * 100);\n    }\n    return button;\n  });\n};\nexport const Column = args => class Column extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        h: context.theme.layout.screenH - 2 * (context.theme.layout.marginY + context.theme.layout.gutterY),\n        scrollIndex: args.scrollIndex,\n        items: createItems(Button, 20),\n        waitForDimensions: args.waitForDimensions\n      }\n    };\n  }\n};\nColumn.args = {\n  scroll: 1,\n  scrollIndex: 0,\n  alwaysScroll: false,\n  waitForDimensions: false\n};\nColumn.argTypes = {\n  scroll: {\n    control: 'select',\n    options: [1, 5, 15, 20],\n    description: 'Scroll to selected index',\n    table: {\n      defaultValue: {\n        summary: 'undefined'\n      }\n    }\n  },\n  scrollIndex: {\n    control: {\n      type: 'number',\n      min: 0\n    },\n    description: 'Item index at which scrolling begins, provided the sum of item heights is greater than the height of the Column',\n    table: {\n      defaultValue: {\n        summary: 0\n      }\n    }\n  },\n  alwaysScroll: {\n    control: 'boolean',\n    description: 'Determines whether the column will stop scrolling as it nears the bottom to prevent white space',\n    table: {\n      defaultValue: {\n        summary: false\n      }\n    }\n  },\n  waitForDimensions: {\n    control: 'boolean',\n    description: \"If true, the Column will wait for all child elements' w and h to be set before displaying the Column\",\n    table: {\n      defaultValue: {\n        summary: false\n      }\n    }\n  }\n};\nColumn.parameters = {\n  argActions: {\n    scroll: function (index, component) {\n      component.tag('Column').scrollTo(index - 1);\n    }\n  }\n};\nexport const MultiColumn = () => class MultiColumn extends lng.Component {\n  static _template() {\n    return {\n      Row: {\n        type: Row,\n        items: [{\n          type: ColumnComponent,\n          h: columnHeight,\n          autoResizeWidth: true,\n          items: createItems(Button, 20)\n        }, {\n          type: ColumnComponent,\n          h: columnHeight,\n          autoResizeWidth: true,\n          items: createItems(Button, 20)\n        }]\n      }\n    };\n  }\n};\nexport const Plinko = () => class Plinko extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        plinko: true,\n        items: [{\n          type: Row,\n          autoResizeHeight: true,\n          autoResizeWidth: true,\n          items: createItems(Button, 3)\n        }, {\n          type: Row,\n          autoResizeHeight: true,\n          autoResizeWidth: true,\n          items: createItems(Button, 3)\n        }]\n      }\n    };\n  }\n};\nexport const VaryingItemHeight = () => class VaryingItemHeight extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        h: columnHeight,\n        items: createItems(Button, 10, true)\n      }\n    };\n  }\n};\nexport const ExpandableHeightItems = () => class ExpandableHeightItems extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        h: columnHeight,\n        items: createItems(ExpandingButton, 15)\n      }\n    };\n  }\n};\nexport const ExpandableHeightRows = () => class ExpandableHeightItems extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        h: columnHeight,\n        plinko: true,\n        items: Array.apply(null, {\n          length: 15\n        }).map(() => ({\n          type: Row,\n          autoResizeHeight: true,\n          w: getWidthByUpCount(context.theme, 1),\n          items: createItems(ExpandingButton, 3)\n        }))\n      }\n    };\n  }\n};\nexport const SkipFocus = args => class SkipFocus extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        h: columnHeight,\n        wrapSelected: args.wrapSelected,\n        items: [...Array.apply(null, {\n          length: 49\n        }).map((_, i) => {\n          if (i % 4 === 0) return {\n            type: Title,\n            titleText: 'Skip Focus Text',\n            h: 30,\n            skipFocus: true\n          };\n          return {\n            type: Button,\n            title: 'Button'\n          };\n        }), {\n          type: Title,\n          titleText: 'Skip Focus Text',\n          h: 30,\n          skipFocus: true\n        }]\n      }\n    };\n  }\n};\nSkipFocus.args = {\n  wrapSelected: false\n};\nSkipFocus.argTypes = {\n  wrapSelected: {\n    control: {\n      type: 'boolean'\n    },\n    description: 'Enables wrapping behavior, so selectNext() selects the first item if the current item is the last on the list and vice versa',\n    table: {\n      defaultValue: {\n        summary: false\n      }\n    }\n  }\n};\nexport const OnScreenEffect = () => class OnScreenEffect extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        scrollIndex: 2,\n        h: columnHeight,\n        items: createItems(Button, 10)\n      }\n    };\n  }\n  _init() {\n    this.tag('Column').onScreenEffect = items => {\n      const {\n        selected\n      } = this.tag('Column');\n      const selectedIndex = items.indexOf(selected);\n      items.slice(0, selectedIndex).reverse().forEach((item, idx) => {\n        item.alpha = 1 / (1 + idx);\n      });\n      items.slice(selectedIndex + 1).forEach((item, idx) => {\n        item.alpha = 1 / (1 + idx);\n      });\n    };\n  }\n};\nexport const StickyTitle = () => {\n  const items = flatten(Array.apply(null, {\n    length: 5\n  }).map((_, i) => {\n    const headerText = `Sticky Header ${i}`;\n    const items = Array.apply(null, {\n      length: 8\n    }).map((_, i) => {\n      return {\n        type: Button,\n        title: `Button ${i + 1}`,\n        fixed: true,\n        w: 250,\n        headerText\n      };\n    });\n    return [{\n      type: ColumnHeader,\n      headerText,\n      h: 40,\n      skipFocus: true\n    }, ...items];\n  }));\n  items.shift();\n  return class ColumnExample extends lng.Component {\n    static _template() {\n      return {\n        Column: {\n          y: 50,\n          h: 400,\n          autoResizeWidth: true,\n          clipping: true,\n          type: ColumnComponent,\n          items,\n          signals: {\n            selectedChange: '_updateHeader'\n          }\n        },\n        ColumnHeader: {\n          type: ColumnHeader,\n          headerText: 'Sticky Header 0',\n          h: 40\n        }\n      };\n    }\n    _updateHeader(selected) {\n      this.tag('ColumnHeader').headerText = selected.headerText || '';\n    }\n  };\n};\nexport const CenteredInParent = () => class CenteredInParent extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        autoResizeWidth: true,\n        items: [{\n          type: Row,\n          autoResizeWidth: true,\n          autoResizeHeight: true,\n          items: createItems(Button, 3)\n        }, {\n          type: Row,\n          autoResizeWidth: true,\n          autoResizeHeight: true,\n          centerInParent: true,\n          items: createItems(Button, 2)\n        }, {\n          ...createItems(Button, 1)[0],\n          centerInParent: true\n        }]\n      }\n    };\n  }\n};\nCenteredInParent.parameters = {\n  storyDetails: 'Each Row in the Column has centerInParent set to true on it so is horizontally centered in the Column it is an item of.'\n};\nclass ColumnHeader extends lng.Component {\n  static _template() {\n    return {\n      Label: {\n        x: 5,\n        y: 10,\n        text: {\n          fontSize: 24,\n          textColor: 0xffffffff\n        },\n        zIndex: 2\n      },\n      Line: {\n        color: 0xffffff1f,\n        rect: true,\n        w: 300,\n        y: 35,\n        h: 3\n      }\n    };\n  }\n  set headerText(text) {\n    this.tag('Label').text.text = text;\n  }\n}\nclass Title extends lng.Component {\n  static _template() {\n    return {\n      Label: {\n        x: 75,\n        y: 22,\n        mount: 0.5,\n        color: 0xffffffff,\n        text: {\n          fontSize: 20\n        }\n      }\n    };\n  }\n  _init() {\n    this.tag('Label').text = this.titleText;\n  }\n}\nclass ExpandingButton extends Button {\n  _init() {\n    this.h = 80;\n    super._init();\n    this.fireAncestors('$itemChanged');\n  }\n  _focus() {\n    super._focus();\n    this.smooth = {\n      h: 120\n    };\n    this.fireAncestors('$itemChanged');\n  }\n  _unfocus() {\n    super._unfocus();\n    this.smooth = {\n      h: 80\n    };\n    this.fireAncestors('$itemChanged');\n  }\n}\nexport const SkipPlinko = () => class SkipPlinko extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        w: getWidthByUpCount(context.theme, 1),\n        plinko: true,\n        items: [{\n          type: Row,\n          autoResizeHeight: true,\n          items: [{\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg'\n            }\n          }, {\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg'\n            }\n          }, {\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/sQBS8MYXN9CZWV3gEDcL95G1KpA.jpg'\n            }\n          }, {\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg'\n            }\n          }, {\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg'\n            }\n          }]\n        }, {\n          type: Row,\n          autoResizeHeight: true,\n          skipPlinko: true,\n          items: [{\n            type: Tile,\n            itemLayout: {\n              ratioX: 4,\n              ratioY: 1,\n              upCount: 1\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/m0iEEib19yHzyD8hLh09qkIWbwz.jpg'\n            },\n            metadata: {\n              title: 'Row with skipPlinko set to true'\n            },\n            persistentMetadata: true\n          }]\n        }, {\n          type: Row,\n          autoResizeHeight: true,\n          items: [{\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg'\n            }\n          }, {\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/jauI01vUIkPA0xVsamGj0Gs1nNL.jpg'\n            }\n          }, {\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg'\n            }\n          }, {\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg'\n            }\n          }, {\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/jauI01vUIkPA0xVsamGj0Gs1nNL.jpg'\n            }\n          }]\n        }]\n      }\n    };\n  }\n};\nexport const LazyUpCount = args => class LazyUpCount extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        h: 500,\n        scrollIndex: args.scrollIndex,\n        lazyUpCount: args.lazyUpCount,\n        lazyUpCountBuffer: args.lazyUpCountBuffer,\n        items: createItems(Button, 20),\n        alwaysScroll: args.alwaysScroll\n      }\n    };\n  }\n};\nLazyUpCount.args = {\n  scrollIndex: 0,\n  lazyUpCount: 5,\n  lazyUpCountBuffer: 2,\n  itemTransition: 0.4,\n  alwaysScroll: false,\n  scroll: 1\n};\nLazyUpCount.argTypes = {\n  itemTransition: {\n    table: {\n      disable: true // removes control from story\n    }\n  },\n\n  scroll: {\n    table: {\n      disable: true // removes control from story\n    }\n  },\n\n  scrollIndex: {\n    control: {\n      type: 'number',\n      min: 0\n    },\n    description: 'Item index at which scrolling begins, provided the sum of item heights is greater than the height of the Column',\n    table: {\n      defaultValue: {\n        summary: 0\n      }\n    }\n  },\n  lazyUpCount: {\n    control: 'number',\n    description: 'Used to calculate the number of items to display on the first render, see [Docs](?path=/docs/navigation-navigationmanager--row#properties) for more details. <br/> **NOTE: changing this value requires refreshing the story to see its effect.**',\n    table: {\n      defaultValue: {\n        summary: 'undefined'\n      }\n    }\n  },\n  lazyUpCountBuffer: {\n    control: 'number',\n    description: 'Used to calculate the number of items to display on the first render, see [Docs](?path=/docs/navigation-navigationmanager--row#properties) for more details. <br/> **NOTE: changing this value requires refreshing the story to see its effect.**',\n    table: {\n      defaultValue: {\n        summary: 2\n      }\n    }\n  },\n  alwaysScroll: {\n    control: {\n      type: 'boolean'\n    },\n    description: 'Determines whether the column will stop scrolling as it nears the bottom to prevent white space',\n    table: {\n      defaultValue: {\n        summary: false\n      }\n    }\n  }\n};\nLazyUpCount.parameters = {\n  storyDetails: 'There are 20 items passed to this Column. The number of items that are initially rendered equals the sum of the lazyUpCount property and 2. Each time the next item is selected, an additional item is added to the end of the Column until all 20 items have been rendered.'\n};\nexport const AddingItems = args => class AddingItems extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        h: 500,\n        scrollIndex: args.scrollIndex,\n        lazyUpCount: args.lazyUpCount,\n        lazyUpCountBuffer: args.lazyUpCountBuffer,\n        signals: {\n          append: 'appendButton',\n          appendAt: 'appendButtonAt',\n          prepend: 'prependButton'\n        },\n        items: [{\n          type: SignalButton,\n          title: 'Prepend 1 Button (prependItems)',\n          signalName: 'prepend',\n          passSignals: {\n            prepend: true\n          }\n        }, {\n          type: SignalButton,\n          title: 'Append 1 Button at index 1 (appendItemsAt)',\n          signalName: 'appendAt',\n          passSignals: {\n            appendAt: true\n          }\n        }, {\n          type: SignalButton,\n          title: 'Append 1 Button to the Row (appendItems)',\n          signalName: 'append',\n          passSignals: {\n            append: true\n          }\n        }]\n      }\n    };\n  }\n  prependButton() {\n    this.tag('Column').prependItems([{\n      type: Button,\n      title: 'Prepended Button'\n    }]);\n  }\n  appendButtonAt() {\n    this.tag('Column').appendItemsAt([{\n      type: Button,\n      title: 'Appended Button at index 1'\n    }], 1);\n  }\n  appendButton() {\n    this.tag('Column').appendItems([{\n      type: Button,\n      title: 'Appended Button'\n    }]);\n  }\n};\nAddingItems.args = {\n  scrollIndex: 0,\n  lazyUpCountBuffer: 2\n};\nAddingItems.argTypes = {\n  scrollIndex: {\n    control: {\n      type: 'number',\n      min: 0\n    },\n    description: 'Item index at which scrolling begins, provided the sum of item heights is greater than the height of the Column',\n    table: {\n      defaultValue: {\n        summary: 0\n      }\n    }\n  },\n  lazyUpCount: {\n    control: 'number',\n    description: 'Used to calculate the number of items to display on the first render, see [Docs](?path=/docs/navigation-navigationmanager--row#properties) for more details. <br/> **NOTE: changing this value requires refreshing the story to see its effect.**',\n    table: {\n      defaultValue: {\n        summary: 'undefined'\n      }\n    }\n  },\n  lazyUpCountBuffer: {\n    control: 'number',\n    description: 'Used to calculate the number of items to display on the first render, see [Docs](?path=/docs/navigation-navigationmanager--row#properties) for more details. <br/> **NOTE: changing this value requires refreshing the story to see its effect.**',\n    table: {\n      defaultValue: {\n        summary: 2\n      }\n    }\n  }\n};\nAddingItems.parameters = {\n  storyDetails: 'The 3 buttons initially rendered in this story are configured to invoke 1 of the 3 methods available to add items to a Column (the name of the method used is in parenthesis on the button). Press enter on any of those 3 buttons to invoke that method and add a button to the Column.'\n};\nexport const RemovingItems = args => class RemovingItems extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        h: 500,\n        scrollIndex: args.scrollIndex,\n        signals: {\n          removeAt: 'removeButton'\n        },\n        items: [...createItems(Button, 2), {\n          type: SignalButton,\n          title: 'Press Enter on this button to remove it (removeItemAt)',\n          signalName: 'removeAt',\n          passSignals: {\n            removeAt: true\n          }\n        }]\n      }\n    };\n  }\n  removeButton() {\n    this.tag('Column').removeItemAt(2);\n  }\n};\nRemovingItems.args = {\n  scrollIndex: 0\n};\nRemovingItems.argTypes = {\n  scrollIndex: {\n    control: {\n      type: 'number',\n      min: 0\n    },\n    description: 'Item index at which scrolling begins, provided the sum of item heights is greater than the height of the Column',\n    table: {\n      defaultValue: {\n        summary: 0\n      }\n    }\n  }\n};\nRemovingItems.parameters = {\n  storyDetails: 'The third button in this column is configured to invoke removeItemAt to remove that button. Focus on that button and press Enter to invoke that method and remove the button from the column.'\n};\nColumn.parameters = {\n  ...Column.parameters,\n  docs: {\n    ...Column.parameters?.docs,\n    source: {\n      originalSource: \"args => class Column extends lng.Component {\\n  static _template() {\\n    return {\\n      Column: {\\n        type: ColumnComponent,\\n        h: context.theme.layout.screenH - 2 * (context.theme.layout.marginY + context.theme.layout.gutterY),\\n        scrollIndex: args.scrollIndex,\\n        items: createItems(Button, 20),\\n        waitForDimensions: args.waitForDimensions\\n      }\\n    };\\n  }\\n}\",\n      ...Column.parameters?.docs?.source\n    }\n  }\n};\nMultiColumn.parameters = {\n  ...MultiColumn.parameters,\n  docs: {\n    ...MultiColumn.parameters?.docs,\n    source: {\n      originalSource: \"() => class MultiColumn extends lng.Component {\\n  static _template() {\\n    return {\\n      Row: {\\n        type: Row,\\n        items: [{\\n          type: ColumnComponent,\\n          h: columnHeight,\\n          autoResizeWidth: true,\\n          items: createItems(Button, 20)\\n        }, {\\n          type: ColumnComponent,\\n          h: columnHeight,\\n          autoResizeWidth: true,\\n          items: createItems(Button, 20)\\n        }]\\n      }\\n    };\\n  }\\n}\",\n      ...MultiColumn.parameters?.docs?.source\n    }\n  }\n};\nPlinko.parameters = {\n  ...Plinko.parameters,\n  docs: {\n    ...Plinko.parameters?.docs,\n    source: {\n      originalSource: \"() => class Plinko extends lng.Component {\\n  static _template() {\\n    return {\\n      Column: {\\n        type: ColumnComponent,\\n        plinko: true,\\n        items: [{\\n          type: Row,\\n          autoResizeHeight: true,\\n          autoResizeWidth: true,\\n          items: createItems(Button, 3)\\n        }, {\\n          type: Row,\\n          autoResizeHeight: true,\\n          autoResizeWidth: true,\\n          items: createItems(Button, 3)\\n        }]\\n      }\\n    };\\n  }\\n}\",\n      ...Plinko.parameters?.docs?.source\n    }\n  }\n};\nVaryingItemHeight.parameters = {\n  ...VaryingItemHeight.parameters,\n  docs: {\n    ...VaryingItemHeight.parameters?.docs,\n    source: {\n      originalSource: \"() => class VaryingItemHeight extends lng.Component {\\n  static _template() {\\n    return {\\n      Column: {\\n        type: ColumnComponent,\\n        h: columnHeight,\\n        items: createItems(Button, 10, true)\\n      }\\n    };\\n  }\\n}\",\n      ...VaryingItemHeight.parameters?.docs?.source\n    }\n  }\n};\nExpandableHeightItems.parameters = {\n  ...ExpandableHeightItems.parameters,\n  docs: {\n    ...ExpandableHeightItems.parameters?.docs,\n    source: {\n      originalSource: \"() => class ExpandableHeightItems extends lng.Component {\\n  static _template() {\\n    return {\\n      Column: {\\n        type: ColumnComponent,\\n        h: columnHeight,\\n        items: createItems(ExpandingButton, 15)\\n      }\\n    };\\n  }\\n}\",\n      ...ExpandableHeightItems.parameters?.docs?.source\n    }\n  }\n};\nExpandableHeightRows.parameters = {\n  ...ExpandableHeightRows.parameters,\n  docs: {\n    ...ExpandableHeightRows.parameters?.docs,\n    source: {\n      originalSource: \"() => class ExpandableHeightItems extends lng.Component {\\n  static _template() {\\n    return {\\n      Column: {\\n        type: ColumnComponent,\\n        h: columnHeight,\\n        plinko: true,\\n        items: Array.apply(null, {\\n          length: 15\\n        }).map(() => ({\\n          type: Row,\\n          autoResizeHeight: true,\\n          w: getWidthByUpCount(context.theme, 1),\\n          items: createItems(ExpandingButton, 3)\\n        }))\\n      }\\n    };\\n  }\\n}\",\n      ...ExpandableHeightRows.parameters?.docs?.source\n    }\n  }\n};\nSkipFocus.parameters = {\n  ...SkipFocus.parameters,\n  docs: {\n    ...SkipFocus.parameters?.docs,\n    source: {\n      originalSource: \"args => class SkipFocus extends lng.Component {\\n  static _template() {\\n    return {\\n      Column: {\\n        type: ColumnComponent,\\n        h: columnHeight,\\n        wrapSelected: args.wrapSelected,\\n        items: [...Array.apply(null, {\\n          length: 49\\n        }).map((_, i) => {\\n          if (i % 4 === 0) return {\\n            type: Title,\\n            titleText: 'Skip Focus Text',\\n            h: 30,\\n            skipFocus: true\\n          };\\n          return {\\n            type: Button,\\n            title: 'Button'\\n          };\\n        }), {\\n          type: Title,\\n          titleText: 'Skip Focus Text',\\n          h: 30,\\n          skipFocus: true\\n        }]\\n      }\\n    };\\n  }\\n}\",\n      ...SkipFocus.parameters?.docs?.source\n    }\n  }\n};\nOnScreenEffect.parameters = {\n  ...OnScreenEffect.parameters,\n  docs: {\n    ...OnScreenEffect.parameters?.docs,\n    source: {\n      originalSource: \"() => class OnScreenEffect extends lng.Component {\\n  static _template() {\\n    return {\\n      Column: {\\n        type: ColumnComponent,\\n        scrollIndex: 2,\\n        h: columnHeight,\\n        items: createItems(Button, 10)\\n      }\\n    };\\n  }\\n  _init() {\\n    this.tag('Column').onScreenEffect = items => {\\n      const {\\n        selected\\n      } = this.tag('Column');\\n      const selectedIndex = items.indexOf(selected);\\n      items.slice(0, selectedIndex).reverse().forEach((item, idx) => {\\n        item.alpha = 1 / (1 + idx);\\n      });\\n      items.slice(selectedIndex + 1).forEach((item, idx) => {\\n        item.alpha = 1 / (1 + idx);\\n      });\\n    };\\n  }\\n}\",\n      ...OnScreenEffect.parameters?.docs?.source\n    }\n  }\n};\nStickyTitle.parameters = {\n  ...StickyTitle.parameters,\n  docs: {\n    ...StickyTitle.parameters?.docs,\n    source: {\n      originalSource: \"() => {\\n  const items = flatten(Array.apply(null, {\\n    length: 5\\n  }).map((_, i) => {\\n    const headerText = `Sticky Header ${i}`;\\n    const items = Array.apply(null, {\\n      length: 8\\n    }).map((_, i) => {\\n      return {\\n        type: Button,\\n        title: `Button ${i + 1}`,\\n        fixed: true,\\n        w: 250,\\n        headerText\\n      };\\n    });\\n    return [{\\n      type: ColumnHeader,\\n      headerText,\\n      h: 40,\\n      skipFocus: true\\n    }, ...items];\\n  }));\\n  items.shift();\\n  return class ColumnExample extends lng.Component {\\n    static _template() {\\n      return {\\n        Column: {\\n          y: 50,\\n          h: 400,\\n          autoResizeWidth: true,\\n          clipping: true,\\n          type: ColumnComponent,\\n          items,\\n          signals: {\\n            selectedChange: '_updateHeader'\\n          }\\n        },\\n        ColumnHeader: {\\n          type: ColumnHeader,\\n          headerText: 'Sticky Header 0',\\n          h: 40\\n        }\\n      };\\n    }\\n    _updateHeader(selected) {\\n      this.tag('ColumnHeader').headerText = selected.headerText || '';\\n    }\\n  };\\n}\",\n      ...StickyTitle.parameters?.docs?.source\n    }\n  }\n};\nCenteredInParent.parameters = {\n  ...CenteredInParent.parameters,\n  docs: {\n    ...CenteredInParent.parameters?.docs,\n    source: {\n      originalSource: \"() => class CenteredInParent extends lng.Component {\\n  static _template() {\\n    return {\\n      Column: {\\n        type: ColumnComponent,\\n        autoResizeWidth: true,\\n        items: [{\\n          type: Row,\\n          autoResizeWidth: true,\\n          autoResizeHeight: true,\\n          items: createItems(Button, 3)\\n        }, {\\n          type: Row,\\n          autoResizeWidth: true,\\n          autoResizeHeight: true,\\n          centerInParent: true,\\n          items: createItems(Button, 2)\\n        }, {\\n          ...createItems(Button, 1)[0],\\n          centerInParent: true\\n        }]\\n      }\\n    };\\n  }\\n}\",\n      ...CenteredInParent.parameters?.docs?.source\n    }\n  }\n};\nSkipPlinko.parameters = {\n  ...SkipPlinko.parameters,\n  docs: {\n    ...SkipPlinko.parameters?.docs,\n    source: {\n      originalSource: \"() => class SkipPlinko extends lng.Component {\\n  static _template() {\\n    return {\\n      Column: {\\n        type: ColumnComponent,\\n        w: getWidthByUpCount(context.theme, 1),\\n        plinko: true,\\n        items: [{\\n          type: Row,\\n          autoResizeHeight: true,\\n          items: [{\\n            type: Tile,\\n            itemLayout: {\\n              ratioX: 16,\\n              ratioY: 9,\\n              upCount: 5\\n            },\\n            artwork: {\\n              src: 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg'\\n            }\\n          }, {\\n            type: Tile,\\n            itemLayout: {\\n              ratioX: 16,\\n              ratioY: 9,\\n              upCount: 5\\n            },\\n            artwork: {\\n              src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg'\\n            }\\n          }, {\\n            type: Tile,\\n            itemLayout: {\\n              ratioX: 16,\\n              ratioY: 9,\\n              upCount: 5\\n            },\\n            artwork: {\\n              src: 'https://image.tmdb.org/t/p/w500/sQBS8MYXN9CZWV3gEDcL95G1KpA.jpg'\\n            }\\n          }, {\\n            type: Tile,\\n            itemLayout: {\\n              ratioX: 16,\\n              ratioY: 9,\\n              upCount: 5\\n            },\\n            artwork: {\\n              src: 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg'\\n            }\\n          }, {\\n            type: Tile,\\n            itemLayout: {\\n              ratioX: 16,\\n              ratioY: 9,\\n              upCount: 5\\n            },\\n            artwork: {\\n              src: 'https://image.tmdb.org/t/p/w500/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg'\\n            }\\n          }]\\n        }, {\\n          type: Row,\\n          autoResizeHeight: true,\\n          skipPlinko: true,\\n          items: [{\\n            type: Tile,\\n            itemLayout: {\\n              ratioX: 4,\\n              ratioY: 1,\\n              upCount: 1\\n            },\\n            artwork: {\\n              src: 'https://image.tmdb.org/t/p/w500/m0iEEib19yHzyD8hLh09qkIWbwz.jpg'\\n            },\\n            metadata: {\\n              title: 'Row with skipPlinko set to true'\\n            },\\n            persistentMetadata: true\\n          }]\\n        }, {\\n          type: Row,\\n          autoResizeHeight: true,\\n          items: [{\\n            type: Tile,\\n            itemLayout: {\\n              ratioX: 16,\\n              ratioY: 9,\\n              upCount: 5\\n            },\\n            artwork: {\\n              src: 'https://image.tmdb.org/t/p/w500/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg'\\n            }\\n          }, {\\n            type: Tile,\\n            itemLayout: {\\n              ratioX: 16,\\n              ratioY: 9,\\n              upCount: 5\\n            },\\n            artwork: {\\n              src: 'https://image.tmdb.org/t/p/w500/jauI01vUIkPA0xVsamGj0Gs1nNL.jpg'\\n            }\\n          }, {\\n            type: Tile,\\n            itemLayout: {\\n              ratioX: 16,\\n              ratioY: 9,\\n              upCount: 5\\n            },\\n            artwork: {\\n              src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg'\\n            }\\n          }, {\\n            type: Tile,\\n            itemLayout: {\\n              ratioX: 16,\\n              ratioY: 9,\\n              upCount: 5\\n            },\\n            artwork: {\\n              src: 'https://image.tmdb.org/t/p/w500/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg'\\n            }\\n          }, {\\n            type: Tile,\\n            itemLayout: {\\n              ratioX: 16,\\n              ratioY: 9,\\n              upCount: 5\\n            },\\n            artwork: {\\n              src: 'https://image.tmdb.org/t/p/w500/jauI01vUIkPA0xVsamGj0Gs1nNL.jpg'\\n            }\\n          }]\\n        }]\\n      }\\n    };\\n  }\\n}\",\n      ...SkipPlinko.parameters?.docs?.source\n    }\n  }\n};\nLazyUpCount.parameters = {\n  ...LazyUpCount.parameters,\n  docs: {\n    ...LazyUpCount.parameters?.docs,\n    source: {\n      originalSource: \"args => class LazyUpCount extends lng.Component {\\n  static _template() {\\n    return {\\n      Column: {\\n        type: ColumnComponent,\\n        h: 500,\\n        scrollIndex: args.scrollIndex,\\n        lazyUpCount: args.lazyUpCount,\\n        lazyUpCountBuffer: args.lazyUpCountBuffer,\\n        items: createItems(Button, 20),\\n        alwaysScroll: args.alwaysScroll\\n      }\\n    };\\n  }\\n}\",\n      ...LazyUpCount.parameters?.docs?.source\n    }\n  }\n};\nAddingItems.parameters = {\n  ...AddingItems.parameters,\n  docs: {\n    ...AddingItems.parameters?.docs,\n    source: {\n      originalSource: \"args => class AddingItems extends lng.Component {\\n  static _template() {\\n    return {\\n      Column: {\\n        type: ColumnComponent,\\n        h: 500,\\n        scrollIndex: args.scrollIndex,\\n        lazyUpCount: args.lazyUpCount,\\n        lazyUpCountBuffer: args.lazyUpCountBuffer,\\n        signals: {\\n          append: 'appendButton',\\n          appendAt: 'appendButtonAt',\\n          prepend: 'prependButton'\\n        },\\n        items: [{\\n          type: SignalButton,\\n          title: 'Prepend 1 Button (prependItems)',\\n          signalName: 'prepend',\\n          passSignals: {\\n            prepend: true\\n          }\\n        }, {\\n          type: SignalButton,\\n          title: 'Append 1 Button at index 1 (appendItemsAt)',\\n          signalName: 'appendAt',\\n          passSignals: {\\n            appendAt: true\\n          }\\n        }, {\\n          type: SignalButton,\\n          title: 'Append 1 Button to the Row (appendItems)',\\n          signalName: 'append',\\n          passSignals: {\\n            append: true\\n          }\\n        }]\\n      }\\n    };\\n  }\\n  prependButton() {\\n    this.tag('Column').prependItems([{\\n      type: Button,\\n      title: 'Prepended Button'\\n    }]);\\n  }\\n  appendButtonAt() {\\n    this.tag('Column').appendItemsAt([{\\n      type: Button,\\n      title: 'Appended Button at index 1'\\n    }], 1);\\n  }\\n  appendButton() {\\n    this.tag('Column').appendItems([{\\n      type: Button,\\n      title: 'Appended Button'\\n    }]);\\n  }\\n}\",\n      ...AddingItems.parameters?.docs?.source\n    }\n  }\n};\nRemovingItems.parameters = {\n  ...RemovingItems.parameters,\n  docs: {\n    ...RemovingItems.parameters?.docs,\n    source: {\n      originalSource: \"args => class RemovingItems extends lng.Component {\\n  static _template() {\\n    return {\\n      Column: {\\n        type: ColumnComponent,\\n        h: 500,\\n        scrollIndex: args.scrollIndex,\\n        signals: {\\n          removeAt: 'removeButton'\\n        },\\n        items: [...createItems(Button, 2), {\\n          type: SignalButton,\\n          title: 'Press Enter on this button to remove it (removeItemAt)',\\n          signalName: 'removeAt',\\n          passSignals: {\\n            removeAt: true\\n          }\\n        }]\\n      }\\n    };\\n  }\\n  removeButton() {\\n    this.tag('Column').removeItemAt(2);\\n  }\\n}\",\n      ...RemovingItems.parameters?.docs?.source\n    }\n  }\n};",
      "locationsMap": {
        "column": {
          "startLoc": {
            "col": 22,
            "line": 54
          },
          "endLoc": {
            "col": 1,
            "line": 66
          },
          "startBody": {
            "col": 22,
            "line": 54
          },
          "endBody": {
            "col": 1,
            "line": 66
          }
        },
        "multi-column": {
          "startLoc": {
            "col": 27,
            "line": 122
          },
          "endLoc": {
            "col": 1,
            "line": 141
          },
          "startBody": {
            "col": 27,
            "line": 122
          },
          "endBody": {
            "col": 1,
            "line": 141
          }
        },
        "plinko": {
          "startLoc": {
            "col": 22,
            "line": 142
          },
          "endLoc": {
            "col": 1,
            "line": 162
          },
          "startBody": {
            "col": 22,
            "line": 142
          },
          "endBody": {
            "col": 1,
            "line": 162
          }
        },
        "varying-item-height": {
          "startLoc": {
            "col": 33,
            "line": 163
          },
          "endLoc": {
            "col": 1,
            "line": 173
          },
          "startBody": {
            "col": 33,
            "line": 163
          },
          "endBody": {
            "col": 1,
            "line": 173
          }
        },
        "expandable-height-items": {
          "startLoc": {
            "col": 37,
            "line": 174
          },
          "endLoc": {
            "col": 1,
            "line": 184
          },
          "startBody": {
            "col": 37,
            "line": 174
          },
          "endBody": {
            "col": 1,
            "line": 184
          }
        },
        "expandable-height-rows": {
          "startLoc": {
            "col": 36,
            "line": 185
          },
          "endLoc": {
            "col": 1,
            "line": 203
          },
          "startBody": {
            "col": 36,
            "line": 185
          },
          "endBody": {
            "col": 1,
            "line": 203
          }
        },
        "skip-focus": {
          "startLoc": {
            "col": 25,
            "line": 204
          },
          "endLoc": {
            "col": 1,
            "line": 233
          },
          "startBody": {
            "col": 25,
            "line": 204
          },
          "endBody": {
            "col": 1,
            "line": 233
          }
        },
        "on-screen-effect": {
          "startLoc": {
            "col": 30,
            "line": 250
          },
          "endLoc": {
            "col": 1,
            "line": 275
          },
          "startBody": {
            "col": 30,
            "line": 250
          },
          "endBody": {
            "col": 1,
            "line": 275
          }
        },
        "sticky-title": {
          "startLoc": {
            "col": 27,
            "line": 276
          },
          "endLoc": {
            "col": 1,
            "line": 325
          },
          "startBody": {
            "col": 27,
            "line": 276
          },
          "endBody": {
            "col": 1,
            "line": 325
          }
        },
        "centered-in-parent": {
          "startLoc": {
            "col": 32,
            "line": 326
          },
          "endLoc": {
            "col": 1,
            "line": 350
          },
          "startBody": {
            "col": 32,
            "line": 326
          },
          "endBody": {
            "col": 1,
            "line": 350
          }
        },
        "skip-plinko": {
          "startLoc": {
            "col": 26,
            "line": 418
          },
          "endLoc": {
            "col": 1,
            "line": 556
          },
          "startBody": {
            "col": 26,
            "line": 418
          },
          "endBody": {
            "col": 1,
            "line": 556
          }
        },
        "lazy-up-count": {
          "startLoc": {
            "col": 27,
            "line": 557
          },
          "endLoc": {
            "col": 1,
            "line": 571
          },
          "startBody": {
            "col": 27,
            "line": 557
          },
          "endBody": {
            "col": 1,
            "line": 571
          }
        },
        "adding-items": {
          "startLoc": {
            "col": 27,
            "line": 638
          },
          "endLoc": {
            "col": 1,
            "line": 695
          },
          "startBody": {
            "col": 27,
            "line": 638
          },
          "endBody": {
            "col": 1,
            "line": 695
          }
        },
        "removing-items": {
          "startLoc": {
            "col": 29,
            "line": 735
          },
          "endLoc": {
            "col": 1,
            "line": 759
          },
          "startBody": {
            "col": 29,
            "line": 735
          },
          "endBody": {
            "col": 1,
            "line": 759
          }
        }
      }
    },
    remountAll: true
  }
});
var columnHeight = _globals__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.theme.layout.screenH - 2 * (_globals__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.theme.layout.marginY + _globals__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.theme.layout.gutterY);

// creates an array of buttons to be used in Stories
var createItems = function createItems(buttonType, length, isVariedHeight, isDynamicWidth) {
  return Array.from({
    length: length
  }).map(function (_, i) {
    var button = {
      type: buttonType,
      title: "Button ".concat(i + 1)
    };
    if (!isDynamicWidth) {
      button.fixed = true;
      button.w = 250;
    }
    if (isVariedHeight) {
      button.h = 40 + Math.floor(Math.random() * 100);
    }
    return button;
  });
};
var Column = function Column(args) {
  return /*#__PURE__*/function (_lng$Component) {
    _inherits(Column, _lng$Component);
    var _super = _createSuper(Column);
    function Column() {
      _classCallCheck(this, Column);
      return _super.apply(this, arguments);
    }
    _createClass(Column, null, [{
      key: "_template",
      value: function _template() {
        return {
          Column: {
            type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            h: _globals__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.theme.layout.screenH - 2 * (_globals__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.theme.layout.marginY + _globals__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.theme.layout.gutterY),
            scrollIndex: args.scrollIndex,
            items: createItems(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, 20),
            waitForDimensions: args.waitForDimensions
          }
        };
      }
    }]);
    return Column;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
Column.args = {
  scroll: 1,
  scrollIndex: 0,
  alwaysScroll: false,
  waitForDimensions: false
};
Column.argTypes = {
  scroll: {
    control: 'select',
    options: [1, 5, 15, 20],
    description: 'Scroll to selected index',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  scrollIndex: {
    control: {
      type: 'number',
      min: 0
    },
    description: 'Item index at which scrolling begins, provided the sum of item heights is greater than the height of the Column',
    table: {
      defaultValue: {
        summary: 0
      }
    }
  },
  alwaysScroll: {
    control: 'boolean',
    description: 'Determines whether the column will stop scrolling as it nears the bottom to prevent white space',
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  waitForDimensions: {
    control: 'boolean',
    description: "If true, the Column will wait for all child elements' w and h to be set before displaying the Column",
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
};
Column.parameters = {
  argActions: {
    scroll: function scroll(index, component) {
      component.tag('Column').scrollTo(index - 1);
    }
  }
};
var MultiColumn = function MultiColumn() {
  return /*#__PURE__*/function (_lng$Component2) {
    _inherits(MultiColumn, _lng$Component2);
    var _super2 = _createSuper(MultiColumn);
    function MultiColumn() {
      _classCallCheck(this, MultiColumn);
      return _super2.apply(this, arguments);
    }
    _createClass(MultiColumn, null, [{
      key: "_template",
      value: function _template() {
        return {
          Row: {
            type: _Row__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
            items: [{
              type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
              h: columnHeight,
              autoResizeWidth: true,
              items: createItems(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, 20)
            }, {
              type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
              h: columnHeight,
              autoResizeWidth: true,
              items: createItems(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, 20)
            }]
          }
        };
      }
    }]);
    return MultiColumn;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
var Plinko = function Plinko() {
  return /*#__PURE__*/function (_lng$Component3) {
    _inherits(Plinko, _lng$Component3);
    var _super3 = _createSuper(Plinko);
    function Plinko() {
      _classCallCheck(this, Plinko);
      return _super3.apply(this, arguments);
    }
    _createClass(Plinko, null, [{
      key: "_template",
      value: function _template() {
        return {
          Column: {
            type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            plinko: true,
            items: [{
              type: _Row__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
              autoResizeHeight: true,
              autoResizeWidth: true,
              items: createItems(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, 3)
            }, {
              type: _Row__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
              autoResizeHeight: true,
              autoResizeWidth: true,
              items: createItems(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, 3)
            }]
          }
        };
      }
    }]);
    return Plinko;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
var VaryingItemHeight = function VaryingItemHeight() {
  return /*#__PURE__*/function (_lng$Component4) {
    _inherits(VaryingItemHeight, _lng$Component4);
    var _super4 = _createSuper(VaryingItemHeight);
    function VaryingItemHeight() {
      _classCallCheck(this, VaryingItemHeight);
      return _super4.apply(this, arguments);
    }
    _createClass(VaryingItemHeight, null, [{
      key: "_template",
      value: function _template() {
        return {
          Column: {
            type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            h: columnHeight,
            items: createItems(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, 10, true)
          }
        };
      }
    }]);
    return VaryingItemHeight;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
var ExpandableHeightItems = function ExpandableHeightItems() {
  return /*#__PURE__*/function (_lng$Component5) {
    _inherits(ExpandableHeightItems, _lng$Component5);
    var _super5 = _createSuper(ExpandableHeightItems);
    function ExpandableHeightItems() {
      _classCallCheck(this, ExpandableHeightItems);
      return _super5.apply(this, arguments);
    }
    _createClass(ExpandableHeightItems, null, [{
      key: "_template",
      value: function _template() {
        return {
          Column: {
            type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            h: columnHeight,
            items: createItems(ExpandingButton, 15)
          }
        };
      }
    }]);
    return ExpandableHeightItems;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
var ExpandableHeightRows = function ExpandableHeightRows() {
  return /*#__PURE__*/function (_lng$Component6) {
    _inherits(ExpandableHeightItems, _lng$Component6);
    var _super6 = _createSuper(ExpandableHeightItems);
    function ExpandableHeightItems() {
      _classCallCheck(this, ExpandableHeightItems);
      return _super6.apply(this, arguments);
    }
    _createClass(ExpandableHeightItems, null, [{
      key: "_template",
      value: function _template() {
        return {
          Column: {
            type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            h: columnHeight,
            plinko: true,
            items: Array.apply(null, {
              length: 15
            }).map(function () {
              return {
                type: _Row__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                autoResizeHeight: true,
                w: (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .getWidthByUpCount */ .OO)(_globals__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.theme, 1),
                items: createItems(ExpandingButton, 3)
              };
            })
          }
        };
      }
    }]);
    return ExpandableHeightItems;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
var SkipFocus = function SkipFocus(args) {
  return /*#__PURE__*/function (_lng$Component7) {
    _inherits(SkipFocus, _lng$Component7);
    var _super7 = _createSuper(SkipFocus);
    function SkipFocus() {
      _classCallCheck(this, SkipFocus);
      return _super7.apply(this, arguments);
    }
    _createClass(SkipFocus, null, [{
      key: "_template",
      value: function _template() {
        return {
          Column: {
            type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            h: columnHeight,
            wrapSelected: args.wrapSelected,
            items: [].concat(_toConsumableArray(Array.apply(null, {
              length: 49
            }).map(function (_, i) {
              if (i % 4 === 0) return {
                type: Title,
                titleText: 'Skip Focus Text',
                h: 30,
                skipFocus: true
              };
              return {
                type: _Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                title: 'Button'
              };
            })), [{
              type: Title,
              titleText: 'Skip Focus Text',
              h: 30,
              skipFocus: true
            }])
          }
        };
      }
    }]);
    return SkipFocus;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
SkipFocus.args = {
  wrapSelected: false
};
SkipFocus.argTypes = {
  wrapSelected: {
    control: {
      type: 'boolean'
    },
    description: 'Enables wrapping behavior, so selectNext() selects the first item if the current item is the last on the list and vice versa',
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
};
var OnScreenEffect = function OnScreenEffect() {
  return /*#__PURE__*/function (_lng$Component8) {
    _inherits(OnScreenEffect, _lng$Component8);
    var _super8 = _createSuper(OnScreenEffect);
    function OnScreenEffect() {
      _classCallCheck(this, OnScreenEffect);
      return _super8.apply(this, arguments);
    }
    _createClass(OnScreenEffect, [{
      key: "_init",
      value: function _init() {
        var _this = this;
        this.tag('Column').onScreenEffect = function (items) {
          var _this$tag = _this.tag('Column'),
            selected = _this$tag.selected;
          var selectedIndex = items.indexOf(selected);
          items.slice(0, selectedIndex).reverse().forEach(function (item, idx) {
            item.alpha = 1 / (1 + idx);
          });
          items.slice(selectedIndex + 1).forEach(function (item, idx) {
            item.alpha = 1 / (1 + idx);
          });
        };
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Column: {
            type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            scrollIndex: 2,
            h: columnHeight,
            items: createItems(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, 10)
          }
        };
      }
    }]);
    return OnScreenEffect;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
var StickyTitle = function StickyTitle() {
  var items = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .flatten */ .xH)(Array.apply(null, {
    length: 5
  }).map(function (_, i) {
    var headerText = "Sticky Header ".concat(i);
    var items = Array.apply(null, {
      length: 8
    }).map(function (_, i) {
      return {
        type: _Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
        title: "Button ".concat(i + 1),
        fixed: true,
        w: 250,
        headerText: headerText
      };
    });
    return [{
      type: ColumnHeader,
      headerText: headerText,
      h: 40,
      skipFocus: true
    }].concat(_toConsumableArray(items));
  }));
  items.shift();
  return /*#__PURE__*/function (_lng$Component9) {
    _inherits(ColumnExample, _lng$Component9);
    var _super9 = _createSuper(ColumnExample);
    function ColumnExample() {
      _classCallCheck(this, ColumnExample);
      return _super9.apply(this, arguments);
    }
    _createClass(ColumnExample, [{
      key: "_updateHeader",
      value: function _updateHeader(selected) {
        this.tag('ColumnHeader').headerText = selected.headerText || '';
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Column: {
            y: 50,
            h: 400,
            autoResizeWidth: true,
            clipping: true,
            type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            items: items,
            signals: {
              selectedChange: '_updateHeader'
            }
          },
          ColumnHeader: {
            type: ColumnHeader,
            headerText: 'Sticky Header 0',
            h: 40
          }
        };
      }
    }]);
    return ColumnExample;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
var CenteredInParent = function CenteredInParent() {
  return /*#__PURE__*/function (_lng$Component10) {
    _inherits(CenteredInParent, _lng$Component10);
    var _super10 = _createSuper(CenteredInParent);
    function CenteredInParent() {
      _classCallCheck(this, CenteredInParent);
      return _super10.apply(this, arguments);
    }
    _createClass(CenteredInParent, null, [{
      key: "_template",
      value: function _template() {
        return {
          Column: {
            type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            autoResizeWidth: true,
            items: [{
              type: _Row__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
              autoResizeWidth: true,
              autoResizeHeight: true,
              items: createItems(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, 3)
            }, {
              type: _Row__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
              autoResizeWidth: true,
              autoResizeHeight: true,
              centerInParent: true,
              items: createItems(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, 2)
            }, _objectSpread(_objectSpread({}, createItems(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, 1)[0]), {}, {
              centerInParent: true
            })]
          }
        };
      }
    }]);
    return CenteredInParent;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
CenteredInParent.parameters = {
  storyDetails: 'Each Row in the Column has centerInParent set to true on it so is horizontally centered in the Column it is an item of.'
};
var ColumnHeader = /*#__PURE__*/function (_lng$Component11) {
  _inherits(ColumnHeader, _lng$Component11);
  var _super11 = _createSuper(ColumnHeader);
  function ColumnHeader() {
    _classCallCheck(this, ColumnHeader);
    return _super11.apply(this, arguments);
  }
  _createClass(ColumnHeader, [{
    key: "headerText",
    set: function set(text) {
      this.tag('Label').text.text = text;
    }
  }], [{
    key: "_template",
    value: function _template() {
      return {
        Label: {
          x: 5,
          y: 10,
          text: {
            fontSize: 24,
            textColor: 0xffffffff
          },
          zIndex: 2
        },
        Line: {
          color: 0xffffff1f,
          rect: true,
          w: 300,
          y: 35,
          h: 3
        }
      };
    }
  }]);
  return ColumnHeader;
}(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
var Title = /*#__PURE__*/function (_lng$Component12) {
  _inherits(Title, _lng$Component12);
  var _super12 = _createSuper(Title);
  function Title() {
    _classCallCheck(this, Title);
    return _super12.apply(this, arguments);
  }
  _createClass(Title, [{
    key: "_init",
    value: function _init() {
      this.tag('Label').text = this.titleText;
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
}(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
var ExpandingButton = /*#__PURE__*/function (_Button) {
  _inherits(ExpandingButton, _Button);
  var _super13 = _createSuper(ExpandingButton);
  function ExpandingButton() {
    _classCallCheck(this, ExpandingButton);
    return _super13.apply(this, arguments);
  }
  _createClass(ExpandingButton, [{
    key: "_init",
    value: function _init() {
      this.h = 80;
      _get(_getPrototypeOf(ExpandingButton.prototype), "_init", this).call(this);
      this.fireAncestors('$itemChanged');
    }
  }, {
    key: "_focus",
    value: function _focus() {
      _get(_getPrototypeOf(ExpandingButton.prototype), "_focus", this).call(this);
      this.smooth = {
        h: 120
      };
      this.fireAncestors('$itemChanged');
    }
  }, {
    key: "_unfocus",
    value: function _unfocus() {
      _get(_getPrototypeOf(ExpandingButton.prototype), "_unfocus", this).call(this);
      this.smooth = {
        h: 80
      };
      this.fireAncestors('$itemChanged');
    }
  }]);
  return ExpandingButton;
}(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
var SkipPlinko = function SkipPlinko() {
  return /*#__PURE__*/function (_lng$Component13) {
    _inherits(SkipPlinko, _lng$Component13);
    var _super14 = _createSuper(SkipPlinko);
    function SkipPlinko() {
      _classCallCheck(this, SkipPlinko);
      return _super14.apply(this, arguments);
    }
    _createClass(SkipPlinko, null, [{
      key: "_template",
      value: function _template() {
        return {
          Column: {
            type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            w: (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .getWidthByUpCount */ .OO)(_globals__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.theme, 1),
            plinko: true,
            items: [{
              type: _Row__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
              autoResizeHeight: true,
              items: [{
                type: _Tile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                itemLayout: {
                  ratioX: 16,
                  ratioY: 9,
                  upCount: 5
                },
                artwork: {
                  src: 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg'
                }
              }, {
                type: _Tile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                itemLayout: {
                  ratioX: 16,
                  ratioY: 9,
                  upCount: 5
                },
                artwork: {
                  src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg'
                }
              }, {
                type: _Tile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                itemLayout: {
                  ratioX: 16,
                  ratioY: 9,
                  upCount: 5
                },
                artwork: {
                  src: 'https://image.tmdb.org/t/p/w500/sQBS8MYXN9CZWV3gEDcL95G1KpA.jpg'
                }
              }, {
                type: _Tile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                itemLayout: {
                  ratioX: 16,
                  ratioY: 9,
                  upCount: 5
                },
                artwork: {
                  src: 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg'
                }
              }, {
                type: _Tile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                itemLayout: {
                  ratioX: 16,
                  ratioY: 9,
                  upCount: 5
                },
                artwork: {
                  src: 'https://image.tmdb.org/t/p/w500/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg'
                }
              }]
            }, {
              type: _Row__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
              autoResizeHeight: true,
              skipPlinko: true,
              items: [{
                type: _Tile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                itemLayout: {
                  ratioX: 4,
                  ratioY: 1,
                  upCount: 1
                },
                artwork: {
                  src: 'https://image.tmdb.org/t/p/w500/m0iEEib19yHzyD8hLh09qkIWbwz.jpg'
                },
                metadata: {
                  title: 'Row with skipPlinko set to true'
                },
                persistentMetadata: true
              }]
            }, {
              type: _Row__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
              autoResizeHeight: true,
              items: [{
                type: _Tile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                itemLayout: {
                  ratioX: 16,
                  ratioY: 9,
                  upCount: 5
                },
                artwork: {
                  src: 'https://image.tmdb.org/t/p/w500/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg'
                }
              }, {
                type: _Tile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                itemLayout: {
                  ratioX: 16,
                  ratioY: 9,
                  upCount: 5
                },
                artwork: {
                  src: 'https://image.tmdb.org/t/p/w500/jauI01vUIkPA0xVsamGj0Gs1nNL.jpg'
                }
              }, {
                type: _Tile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                itemLayout: {
                  ratioX: 16,
                  ratioY: 9,
                  upCount: 5
                },
                artwork: {
                  src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg'
                }
              }, {
                type: _Tile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                itemLayout: {
                  ratioX: 16,
                  ratioY: 9,
                  upCount: 5
                },
                artwork: {
                  src: 'https://image.tmdb.org/t/p/w500/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg'
                }
              }, {
                type: _Tile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                itemLayout: {
                  ratioX: 16,
                  ratioY: 9,
                  upCount: 5
                },
                artwork: {
                  src: 'https://image.tmdb.org/t/p/w500/jauI01vUIkPA0xVsamGj0Gs1nNL.jpg'
                }
              }]
            }]
          }
        };
      }
    }]);
    return SkipPlinko;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
var LazyUpCount = function LazyUpCount(args) {
  return /*#__PURE__*/function (_lng$Component14) {
    _inherits(LazyUpCount, _lng$Component14);
    var _super15 = _createSuper(LazyUpCount);
    function LazyUpCount() {
      _classCallCheck(this, LazyUpCount);
      return _super15.apply(this, arguments);
    }
    _createClass(LazyUpCount, null, [{
      key: "_template",
      value: function _template() {
        return {
          Column: {
            type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            h: 500,
            scrollIndex: args.scrollIndex,
            lazyUpCount: args.lazyUpCount,
            lazyUpCountBuffer: args.lazyUpCountBuffer,
            items: createItems(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, 20),
            alwaysScroll: args.alwaysScroll
          }
        };
      }
    }]);
    return LazyUpCount;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
LazyUpCount.args = {
  scrollIndex: 0,
  lazyUpCount: 5,
  lazyUpCountBuffer: 2,
  itemTransition: 0.4,
  alwaysScroll: false,
  scroll: 1
};
LazyUpCount.argTypes = {
  itemTransition: {
    table: {
      disable: true // removes control from story
    }
  },

  scroll: {
    table: {
      disable: true // removes control from story
    }
  },

  scrollIndex: {
    control: {
      type: 'number',
      min: 0
    },
    description: 'Item index at which scrolling begins, provided the sum of item heights is greater than the height of the Column',
    table: {
      defaultValue: {
        summary: 0
      }
    }
  },
  lazyUpCount: {
    control: 'number',
    description: 'Used to calculate the number of items to display on the first render, see [Docs](?path=/docs/navigation-navigationmanager--row#properties) for more details. <br/> **NOTE: changing this value requires refreshing the story to see its effect.**',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  lazyUpCountBuffer: {
    control: 'number',
    description: 'Used to calculate the number of items to display on the first render, see [Docs](?path=/docs/navigation-navigationmanager--row#properties) for more details. <br/> **NOTE: changing this value requires refreshing the story to see its effect.**',
    table: {
      defaultValue: {
        summary: 2
      }
    }
  },
  alwaysScroll: {
    control: {
      type: 'boolean'
    },
    description: 'Determines whether the column will stop scrolling as it nears the bottom to prevent white space',
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
};
LazyUpCount.parameters = {
  storyDetails: 'There are 20 items passed to this Column. The number of items that are initially rendered equals the sum of the lazyUpCount property and 2. Each time the next item is selected, an additional item is added to the end of the Column until all 20 items have been rendered.'
};
var AddingItems = function AddingItems(args) {
  return /*#__PURE__*/function (_lng$Component15) {
    _inherits(AddingItems, _lng$Component15);
    var _super16 = _createSuper(AddingItems);
    function AddingItems() {
      _classCallCheck(this, AddingItems);
      return _super16.apply(this, arguments);
    }
    _createClass(AddingItems, [{
      key: "prependButton",
      value: function prependButton() {
        this.tag('Column').prependItems([{
          type: _Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
          title: 'Prepended Button'
        }]);
      }
    }, {
      key: "appendButtonAt",
      value: function appendButtonAt() {
        this.tag('Column').appendItemsAt([{
          type: _Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
          title: 'Appended Button at index 1'
        }], 1);
      }
    }, {
      key: "appendButton",
      value: function appendButton() {
        this.tag('Column').appendItems([{
          type: _Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
          title: 'Appended Button'
        }]);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Column: {
            type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            h: 500,
            scrollIndex: args.scrollIndex,
            lazyUpCount: args.lazyUpCount,
            lazyUpCountBuffer: args.lazyUpCountBuffer,
            signals: {
              append: 'appendButton',
              appendAt: 'appendButtonAt',
              prepend: 'prependButton'
            },
            items: [{
              type: _docs_story_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
              title: 'Prepend 1 Button (prependItems)',
              signalName: 'prepend',
              passSignals: {
                prepend: true
              }
            }, {
              type: _docs_story_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
              title: 'Append 1 Button at index 1 (appendItemsAt)',
              signalName: 'appendAt',
              passSignals: {
                appendAt: true
              }
            }, {
              type: _docs_story_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
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
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
AddingItems.args = {
  scrollIndex: 0,
  lazyUpCountBuffer: 2
};
AddingItems.argTypes = {
  scrollIndex: {
    control: {
      type: 'number',
      min: 0
    },
    description: 'Item index at which scrolling begins, provided the sum of item heights is greater than the height of the Column',
    table: {
      defaultValue: {
        summary: 0
      }
    }
  },
  lazyUpCount: {
    control: 'number',
    description: 'Used to calculate the number of items to display on the first render, see [Docs](?path=/docs/navigation-navigationmanager--row#properties) for more details. <br/> **NOTE: changing this value requires refreshing the story to see its effect.**',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  lazyUpCountBuffer: {
    control: 'number',
    description: 'Used to calculate the number of items to display on the first render, see [Docs](?path=/docs/navigation-navigationmanager--row#properties) for more details. <br/> **NOTE: changing this value requires refreshing the story to see its effect.**',
    table: {
      defaultValue: {
        summary: 2
      }
    }
  }
};
AddingItems.parameters = {
  storyDetails: 'The 3 buttons initially rendered in this story are configured to invoke 1 of the 3 methods available to add items to a Column (the name of the method used is in parenthesis on the button). Press enter on any of those 3 buttons to invoke that method and add a button to the Column.'
};
var RemovingItems = function RemovingItems(args) {
  return /*#__PURE__*/function (_lng$Component16) {
    _inherits(RemovingItems, _lng$Component16);
    var _super17 = _createSuper(RemovingItems);
    function RemovingItems() {
      _classCallCheck(this, RemovingItems);
      return _super17.apply(this, arguments);
    }
    _createClass(RemovingItems, [{
      key: "removeButton",
      value: function removeButton() {
        this.tag('Column').removeItemAt(2);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Column: {
            type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            h: 500,
            scrollIndex: args.scrollIndex,
            signals: {
              removeAt: 'removeButton'
            },
            items: [].concat(_toConsumableArray(createItems(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, 2)), [{
              type: _docs_story_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
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
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
RemovingItems.args = {
  scrollIndex: 0
};
RemovingItems.argTypes = {
  scrollIndex: {
    control: {
      type: 'number',
      min: 0
    },
    description: 'Item index at which scrolling begins, provided the sum of item heights is greater than the height of the Column',
    table: {
      defaultValue: {
        summary: 0
      }
    }
  }
};
RemovingItems.parameters = {
  storyDetails: 'The third button in this column is configured to invoke removeItemAt to remove that button. Focus on that button and press Enter to invoke that method and remove the button from the column.'
};
Column.parameters = _objectSpread(_objectSpread({}, Column.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_Column$parameters = Column.parameters) === null || _Column$parameters === void 0 ? void 0 : _Column$parameters.docs), {}, {
    source: _objectSpread({
      originalSource: "args => class Column extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        h: context.theme.layout.screenH - 2 * (context.theme.layout.marginY + context.theme.layout.gutterY),\n        scrollIndex: args.scrollIndex,\n        items: createItems(Button, 20),\n        waitForDimensions: args.waitForDimensions\n      }\n    };\n  }\n}"
    }, (_Column$parameters2 = Column.parameters) === null || _Column$parameters2 === void 0 || (_Column$parameters2 = _Column$parameters2.docs) === null || _Column$parameters2 === void 0 ? void 0 : _Column$parameters2.source)
  })
});
MultiColumn.parameters = _objectSpread(_objectSpread({}, MultiColumn.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_MultiColumn$paramete = MultiColumn.parameters) === null || _MultiColumn$paramete === void 0 ? void 0 : _MultiColumn$paramete.docs), {}, {
    source: _objectSpread({
      originalSource: "() => class MultiColumn extends lng.Component {\n  static _template() {\n    return {\n      Row: {\n        type: Row,\n        items: [{\n          type: ColumnComponent,\n          h: columnHeight,\n          autoResizeWidth: true,\n          items: createItems(Button, 20)\n        }, {\n          type: ColumnComponent,\n          h: columnHeight,\n          autoResizeWidth: true,\n          items: createItems(Button, 20)\n        }]\n      }\n    };\n  }\n}"
    }, (_MultiColumn$paramete2 = MultiColumn.parameters) === null || _MultiColumn$paramete2 === void 0 || (_MultiColumn$paramete2 = _MultiColumn$paramete2.docs) === null || _MultiColumn$paramete2 === void 0 ? void 0 : _MultiColumn$paramete2.source)
  })
});
Plinko.parameters = _objectSpread(_objectSpread({}, Plinko.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_Plinko$parameters = Plinko.parameters) === null || _Plinko$parameters === void 0 ? void 0 : _Plinko$parameters.docs), {}, {
    source: _objectSpread({
      originalSource: "() => class Plinko extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        plinko: true,\n        items: [{\n          type: Row,\n          autoResizeHeight: true,\n          autoResizeWidth: true,\n          items: createItems(Button, 3)\n        }, {\n          type: Row,\n          autoResizeHeight: true,\n          autoResizeWidth: true,\n          items: createItems(Button, 3)\n        }]\n      }\n    };\n  }\n}"
    }, (_Plinko$parameters2 = Plinko.parameters) === null || _Plinko$parameters2 === void 0 || (_Plinko$parameters2 = _Plinko$parameters2.docs) === null || _Plinko$parameters2 === void 0 ? void 0 : _Plinko$parameters2.source)
  })
});
VaryingItemHeight.parameters = _objectSpread(_objectSpread({}, VaryingItemHeight.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_VaryingItemHeight$pa = VaryingItemHeight.parameters) === null || _VaryingItemHeight$pa === void 0 ? void 0 : _VaryingItemHeight$pa.docs), {}, {
    source: _objectSpread({
      originalSource: "() => class VaryingItemHeight extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        h: columnHeight,\n        items: createItems(Button, 10, true)\n      }\n    };\n  }\n}"
    }, (_VaryingItemHeight$pa2 = VaryingItemHeight.parameters) === null || _VaryingItemHeight$pa2 === void 0 || (_VaryingItemHeight$pa2 = _VaryingItemHeight$pa2.docs) === null || _VaryingItemHeight$pa2 === void 0 ? void 0 : _VaryingItemHeight$pa2.source)
  })
});
ExpandableHeightItems.parameters = _objectSpread(_objectSpread({}, ExpandableHeightItems.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_ExpandableHeightItem = ExpandableHeightItems.parameters) === null || _ExpandableHeightItem === void 0 ? void 0 : _ExpandableHeightItem.docs), {}, {
    source: _objectSpread({
      originalSource: "() => class ExpandableHeightItems extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        h: columnHeight,\n        items: createItems(ExpandingButton, 15)\n      }\n    };\n  }\n}"
    }, (_ExpandableHeightItem2 = ExpandableHeightItems.parameters) === null || _ExpandableHeightItem2 === void 0 || (_ExpandableHeightItem2 = _ExpandableHeightItem2.docs) === null || _ExpandableHeightItem2 === void 0 ? void 0 : _ExpandableHeightItem2.source)
  })
});
ExpandableHeightRows.parameters = _objectSpread(_objectSpread({}, ExpandableHeightRows.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_ExpandableHeightRows = ExpandableHeightRows.parameters) === null || _ExpandableHeightRows === void 0 ? void 0 : _ExpandableHeightRows.docs), {}, {
    source: _objectSpread({
      originalSource: "() => class ExpandableHeightItems extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        h: columnHeight,\n        plinko: true,\n        items: Array.apply(null, {\n          length: 15\n        }).map(() => ({\n          type: Row,\n          autoResizeHeight: true,\n          w: getWidthByUpCount(context.theme, 1),\n          items: createItems(ExpandingButton, 3)\n        }))\n      }\n    };\n  }\n}"
    }, (_ExpandableHeightRows2 = ExpandableHeightRows.parameters) === null || _ExpandableHeightRows2 === void 0 || (_ExpandableHeightRows2 = _ExpandableHeightRows2.docs) === null || _ExpandableHeightRows2 === void 0 ? void 0 : _ExpandableHeightRows2.source)
  })
});
SkipFocus.parameters = _objectSpread(_objectSpread({}, SkipFocus.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_SkipFocus$parameters = SkipFocus.parameters) === null || _SkipFocus$parameters === void 0 ? void 0 : _SkipFocus$parameters.docs), {}, {
    source: _objectSpread({
      originalSource: "args => class SkipFocus extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        h: columnHeight,\n        wrapSelected: args.wrapSelected,\n        items: [...Array.apply(null, {\n          length: 49\n        }).map((_, i) => {\n          if (i % 4 === 0) return {\n            type: Title,\n            titleText: 'Skip Focus Text',\n            h: 30,\n            skipFocus: true\n          };\n          return {\n            type: Button,\n            title: 'Button'\n          };\n        }), {\n          type: Title,\n          titleText: 'Skip Focus Text',\n          h: 30,\n          skipFocus: true\n        }]\n      }\n    };\n  }\n}"
    }, (_SkipFocus$parameters2 = SkipFocus.parameters) === null || _SkipFocus$parameters2 === void 0 || (_SkipFocus$parameters2 = _SkipFocus$parameters2.docs) === null || _SkipFocus$parameters2 === void 0 ? void 0 : _SkipFocus$parameters2.source)
  })
});
OnScreenEffect.parameters = _objectSpread(_objectSpread({}, OnScreenEffect.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_OnScreenEffect$param = OnScreenEffect.parameters) === null || _OnScreenEffect$param === void 0 ? void 0 : _OnScreenEffect$param.docs), {}, {
    source: _objectSpread({
      originalSource: "() => class OnScreenEffect extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        scrollIndex: 2,\n        h: columnHeight,\n        items: createItems(Button, 10)\n      }\n    };\n  }\n  _init() {\n    this.tag('Column').onScreenEffect = items => {\n      const {\n        selected\n      } = this.tag('Column');\n      const selectedIndex = items.indexOf(selected);\n      items.slice(0, selectedIndex).reverse().forEach((item, idx) => {\n        item.alpha = 1 / (1 + idx);\n      });\n      items.slice(selectedIndex + 1).forEach((item, idx) => {\n        item.alpha = 1 / (1 + idx);\n      });\n    };\n  }\n}"
    }, (_OnScreenEffect$param2 = OnScreenEffect.parameters) === null || _OnScreenEffect$param2 === void 0 || (_OnScreenEffect$param2 = _OnScreenEffect$param2.docs) === null || _OnScreenEffect$param2 === void 0 ? void 0 : _OnScreenEffect$param2.source)
  })
});
StickyTitle.parameters = _objectSpread(_objectSpread({}, StickyTitle.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_StickyTitle$paramete = StickyTitle.parameters) === null || _StickyTitle$paramete === void 0 ? void 0 : _StickyTitle$paramete.docs), {}, {
    source: _objectSpread({
      originalSource: "() => {\n  const items = flatten(Array.apply(null, {\n    length: 5\n  }).map((_, i) => {\n    const headerText = `Sticky Header ${i}`;\n    const items = Array.apply(null, {\n      length: 8\n    }).map((_, i) => {\n      return {\n        type: Button,\n        title: `Button ${i + 1}`,\n        fixed: true,\n        w: 250,\n        headerText\n      };\n    });\n    return [{\n      type: ColumnHeader,\n      headerText,\n      h: 40,\n      skipFocus: true\n    }, ...items];\n  }));\n  items.shift();\n  return class ColumnExample extends lng.Component {\n    static _template() {\n      return {\n        Column: {\n          y: 50,\n          h: 400,\n          autoResizeWidth: true,\n          clipping: true,\n          type: ColumnComponent,\n          items,\n          signals: {\n            selectedChange: '_updateHeader'\n          }\n        },\n        ColumnHeader: {\n          type: ColumnHeader,\n          headerText: 'Sticky Header 0',\n          h: 40\n        }\n      };\n    }\n    _updateHeader(selected) {\n      this.tag('ColumnHeader').headerText = selected.headerText || '';\n    }\n  };\n}"
    }, (_StickyTitle$paramete2 = StickyTitle.parameters) === null || _StickyTitle$paramete2 === void 0 || (_StickyTitle$paramete2 = _StickyTitle$paramete2.docs) === null || _StickyTitle$paramete2 === void 0 ? void 0 : _StickyTitle$paramete2.source)
  })
});
CenteredInParent.parameters = _objectSpread(_objectSpread({}, CenteredInParent.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_CenteredInParent$par = CenteredInParent.parameters) === null || _CenteredInParent$par === void 0 ? void 0 : _CenteredInParent$par.docs), {}, {
    source: _objectSpread({
      originalSource: "() => class CenteredInParent extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        autoResizeWidth: true,\n        items: [{\n          type: Row,\n          autoResizeWidth: true,\n          autoResizeHeight: true,\n          items: createItems(Button, 3)\n        }, {\n          type: Row,\n          autoResizeWidth: true,\n          autoResizeHeight: true,\n          centerInParent: true,\n          items: createItems(Button, 2)\n        }, {\n          ...createItems(Button, 1)[0],\n          centerInParent: true\n        }]\n      }\n    };\n  }\n}"
    }, (_CenteredInParent$par2 = CenteredInParent.parameters) === null || _CenteredInParent$par2 === void 0 || (_CenteredInParent$par2 = _CenteredInParent$par2.docs) === null || _CenteredInParent$par2 === void 0 ? void 0 : _CenteredInParent$par2.source)
  })
});
SkipPlinko.parameters = _objectSpread(_objectSpread({}, SkipPlinko.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_SkipPlinko$parameter = SkipPlinko.parameters) === null || _SkipPlinko$parameter === void 0 ? void 0 : _SkipPlinko$parameter.docs), {}, {
    source: _objectSpread({
      originalSource: "() => class SkipPlinko extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        w: getWidthByUpCount(context.theme, 1),\n        plinko: true,\n        items: [{\n          type: Row,\n          autoResizeHeight: true,\n          items: [{\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg'\n            }\n          }, {\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg'\n            }\n          }, {\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/sQBS8MYXN9CZWV3gEDcL95G1KpA.jpg'\n            }\n          }, {\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg'\n            }\n          }, {\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg'\n            }\n          }]\n        }, {\n          type: Row,\n          autoResizeHeight: true,\n          skipPlinko: true,\n          items: [{\n            type: Tile,\n            itemLayout: {\n              ratioX: 4,\n              ratioY: 1,\n              upCount: 1\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/m0iEEib19yHzyD8hLh09qkIWbwz.jpg'\n            },\n            metadata: {\n              title: 'Row with skipPlinko set to true'\n            },\n            persistentMetadata: true\n          }]\n        }, {\n          type: Row,\n          autoResizeHeight: true,\n          items: [{\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg'\n            }\n          }, {\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/jauI01vUIkPA0xVsamGj0Gs1nNL.jpg'\n            }\n          }, {\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg'\n            }\n          }, {\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg'\n            }\n          }, {\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/jauI01vUIkPA0xVsamGj0Gs1nNL.jpg'\n            }\n          }]\n        }]\n      }\n    };\n  }\n}"
    }, (_SkipPlinko$parameter2 = SkipPlinko.parameters) === null || _SkipPlinko$parameter2 === void 0 || (_SkipPlinko$parameter2 = _SkipPlinko$parameter2.docs) === null || _SkipPlinko$parameter2 === void 0 ? void 0 : _SkipPlinko$parameter2.source)
  })
});
LazyUpCount.parameters = _objectSpread(_objectSpread({}, LazyUpCount.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_LazyUpCount$paramete = LazyUpCount.parameters) === null || _LazyUpCount$paramete === void 0 ? void 0 : _LazyUpCount$paramete.docs), {}, {
    source: _objectSpread({
      originalSource: "args => class LazyUpCount extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        h: 500,\n        scrollIndex: args.scrollIndex,\n        lazyUpCount: args.lazyUpCount,\n        lazyUpCountBuffer: args.lazyUpCountBuffer,\n        items: createItems(Button, 20),\n        alwaysScroll: args.alwaysScroll\n      }\n    };\n  }\n}"
    }, (_LazyUpCount$paramete2 = LazyUpCount.parameters) === null || _LazyUpCount$paramete2 === void 0 || (_LazyUpCount$paramete2 = _LazyUpCount$paramete2.docs) === null || _LazyUpCount$paramete2 === void 0 ? void 0 : _LazyUpCount$paramete2.source)
  })
});
AddingItems.parameters = _objectSpread(_objectSpread({}, AddingItems.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_AddingItems$paramete = AddingItems.parameters) === null || _AddingItems$paramete === void 0 ? void 0 : _AddingItems$paramete.docs), {}, {
    source: _objectSpread({
      originalSource: "args => class AddingItems extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        h: 500,\n        scrollIndex: args.scrollIndex,\n        lazyUpCount: args.lazyUpCount,\n        lazyUpCountBuffer: args.lazyUpCountBuffer,\n        signals: {\n          append: 'appendButton',\n          appendAt: 'appendButtonAt',\n          prepend: 'prependButton'\n        },\n        items: [{\n          type: SignalButton,\n          title: 'Prepend 1 Button (prependItems)',\n          signalName: 'prepend',\n          passSignals: {\n            prepend: true\n          }\n        }, {\n          type: SignalButton,\n          title: 'Append 1 Button at index 1 (appendItemsAt)',\n          signalName: 'appendAt',\n          passSignals: {\n            appendAt: true\n          }\n        }, {\n          type: SignalButton,\n          title: 'Append 1 Button to the Row (appendItems)',\n          signalName: 'append',\n          passSignals: {\n            append: true\n          }\n        }]\n      }\n    };\n  }\n  prependButton() {\n    this.tag('Column').prependItems([{\n      type: Button,\n      title: 'Prepended Button'\n    }]);\n  }\n  appendButtonAt() {\n    this.tag('Column').appendItemsAt([{\n      type: Button,\n      title: 'Appended Button at index 1'\n    }], 1);\n  }\n  appendButton() {\n    this.tag('Column').appendItems([{\n      type: Button,\n      title: 'Appended Button'\n    }]);\n  }\n}"
    }, (_AddingItems$paramete2 = AddingItems.parameters) === null || _AddingItems$paramete2 === void 0 || (_AddingItems$paramete2 = _AddingItems$paramete2.docs) === null || _AddingItems$paramete2 === void 0 ? void 0 : _AddingItems$paramete2.source)
  })
});
RemovingItems.parameters = _objectSpread(_objectSpread({}, RemovingItems.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_RemovingItems$parame = RemovingItems.parameters) === null || _RemovingItems$parame === void 0 ? void 0 : _RemovingItems$parame.docs), {}, {
    source: _objectSpread({
      originalSource: "args => class RemovingItems extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        h: 500,\n        scrollIndex: args.scrollIndex,\n        signals: {\n          removeAt: 'removeButton'\n        },\n        items: [...createItems(Button, 2), {\n          type: SignalButton,\n          title: 'Press Enter on this button to remove it (removeItemAt)',\n          signalName: 'removeAt',\n          passSignals: {\n            removeAt: true\n          }\n        }]\n      }\n    };\n  }\n  removeButton() {\n    this.tag('Column').removeItemAt(2);\n  }\n}"
    }, (_RemovingItems$parame2 = RemovingItems.parameters) === null || _RemovingItems$parame2 === void 0 || (_RemovingItems$parame2 = _RemovingItems$parame2.docs) === null || _RemovingItems$parame2 === void 0 ? void 0 : _RemovingItems$parame2.source)
  })
});
var __namedExportsOrder = ["Column", "MultiColumn", "Plinko", "VaryingItemHeight", "ExpandableHeightItems", "ExpandableHeightRows", "SkipFocus", "OnScreenEffect", "StickyTitle", "CenteredInParent", "SkipPlinko", "LazyUpCount", "AddingItems", "RemovingItems"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/docs/story-components/SignalButton.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SignalButton)
/* harmony export */ });
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/Button.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
}(_components_Button_Button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);


/***/ })

}]);
//# sourceMappingURL=components-Column-Column-stories.db144896.iframe.bundle.js.map