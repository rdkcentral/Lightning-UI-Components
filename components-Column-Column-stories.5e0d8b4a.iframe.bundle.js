"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[2341],{

/***/ "../../@lightningjs/ui-components/src/docs/story-components/SignalButton.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ SignalButton)
/* harmony export */ });
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/Button.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var SignalButton = /*#__PURE__*/function (_Button) {
  function SignalButton() {
    _classCallCheck(this, SignalButton);
    return _callSuper(this, SignalButton, arguments);
  }
  _inherits(SignalButton, _Button);
  return _createClass(SignalButton, [{
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
}(_components_Button_Button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A);


/***/ }),

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
/* harmony import */ var _globals_context_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Row/Row.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Tile/Tile.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/Button.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Column/Column.js");
/* harmony import */ var _docs_story_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/story-components/SignalButton.js");
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
    remountAll: true
  }
});
const columnHeight = _globals_context_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.theme.layout.screenH - 2 * (_globals_context_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.theme.layout.marginY + _globals_context_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.theme.layout.gutterY);

// creates an array of buttons to be used in Stories
const createItems = (buttonType, length, isVariedHeight, isDynamicWidth) => {
  return Array.from({
    length
  }).map((_, i) => {
    const button = {
      type: buttonType,
      title: `Button ${i + 1}`
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
const Column = args => class Column extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Column: {
        type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
        h: _globals_context_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.theme.layout.screenH - 2 * (_globals_context_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.theme.layout.marginY + _globals_context_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.theme.layout.gutterY),
        scrollIndex: args.scrollIndex,
        items: createItems(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, 20),
        waitForDimensions: args.waitForDimensions
      }
    };
  }
};
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
    scroll: function (index, component) {
      component.tag('Column').scrollTo(index - 1);
    }
  }
};
const MultiColumn = () => class MultiColumn extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Row: {
        type: _Row__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
        items: [{
          type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
          h: columnHeight,
          autoResizeWidth: true,
          items: createItems(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, 20)
        }, {
          type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
          h: columnHeight,
          autoResizeWidth: true,
          items: createItems(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, 20)
        }]
      }
    };
  }
};
const Plinko = () => class Plinko extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Column: {
        type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
        plinko: true,
        items: [{
          type: _Row__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
          autoResizeHeight: true,
          autoResizeWidth: true,
          items: createItems(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, 3)
        }, {
          type: _Row__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
          autoResizeHeight: true,
          autoResizeWidth: true,
          items: createItems(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, 3)
        }]
      }
    };
  }
};
const VaryingItemHeight = () => class VaryingItemHeight extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Column: {
        type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
        h: columnHeight,
        items: createItems(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, 10, true)
      }
    };
  }
};
const ExpandableHeightItems = () => class ExpandableHeightItems extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Column: {
        type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
        h: columnHeight,
        items: createItems(ExpandingButton, 15)
      }
    };
  }
};
const ExpandableHeightRows = () => class ExpandableHeightItems extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Column: {
        type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
        h: columnHeight,
        plinko: true,
        items: Array.apply(null, {
          length: 15
        }).map(() => ({
          type: _Row__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
          autoResizeHeight: true,
          w: (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .getWidthByUpCount */ .cN)(_globals_context_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.theme, 1),
          items: createItems(ExpandingButton, 3)
        }))
      }
    };
  }
};
const SkipFocus = args => class SkipFocus extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Column: {
        type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
        h: columnHeight,
        wrapSelected: args.wrapSelected,
        items: [...Array.apply(null, {
          length: 49
        }).map((_, i) => {
          if (i % 4 === 0) return {
            type: Title,
            titleText: 'Skip Focus Text',
            h: 30,
            skipFocus: true
          };
          return {
            type: _Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
            title: 'Button'
          };
        }), {
          type: Title,
          titleText: 'Skip Focus Text',
          h: 30,
          skipFocus: true
        }]
      }
    };
  }
};
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
const OnScreenEffect = () => class OnScreenEffect extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Column: {
        type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
        scrollIndex: 2,
        h: columnHeight,
        items: createItems(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, 10)
      }
    };
  }
  _init() {
    this.tag('Column').onScreenEffect = items => {
      const {
        selected
      } = this.tag('Column');
      const selectedIndex = items.indexOf(selected);
      items.slice(0, selectedIndex).reverse().forEach((item, idx) => {
        item.alpha = 1 / (1 + idx);
      });
      items.slice(selectedIndex + 1).forEach((item, idx) => {
        item.alpha = 1 / (1 + idx);
      });
    };
  }
};
const StickyTitle = () => {
  const items = (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .flatten */ .Bq)(Array.apply(null, {
    length: 5
  }).map((_, i) => {
    const headerText = `Sticky Header ${i}`;
    const items = Array.apply(null, {
      length: 8
    }).map((_, i) => {
      return {
        type: _Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
        title: `Button ${i + 1}`,
        fixed: true,
        w: 250,
        headerText
      };
    });
    return [{
      type: ColumnHeader,
      headerText,
      h: 40,
      skipFocus: true
    }, ...items];
  }));
  items.shift();
  return class ColumnExample extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
    static _template() {
      return {
        Column: {
          y: 50,
          h: 400,
          autoResizeWidth: true,
          clipping: true,
          type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
          items,
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
    _updateHeader(selected) {
      this.tag('ColumnHeader').headerText = selected.headerText || '';
    }
  };
};
const CenteredInParent = () => class CenteredInParent extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Column: {
        type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
        autoResizeWidth: true,
        items: [{
          type: _Row__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
          autoResizeWidth: true,
          autoResizeHeight: true,
          items: createItems(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, 3)
        }, {
          type: _Row__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
          autoResizeWidth: true,
          autoResizeHeight: true,
          centerInParent: true,
          items: createItems(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, 2)
        }, {
          ...createItems(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, 1)[0],
          centerInParent: true
        }]
      }
    };
  }
};
CenteredInParent.parameters = {
  storyDetails: 'Each Row in the Column has centerInParent set to true on it so is horizontally centered in the Column it is an item of.'
};
class ColumnHeader extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
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
  set headerText(text) {
    this.tag('Label').text.text = text;
  }
}
class Title extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
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
  _init() {
    this.tag('Label').text = this.titleText;
  }
}
class ExpandingButton extends _Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A {
  _init() {
    this.h = 80;
    super._init();
    this.fireAncestors('$itemChanged');
  }
  _focus() {
    super._focus();
    this.smooth = {
      h: 120
    };
    this.fireAncestors('$itemChanged');
  }
  _unfocus() {
    super._unfocus();
    this.smooth = {
      h: 80
    };
    this.fireAncestors('$itemChanged');
  }
}
const SkipPlinko = () => class SkipPlinko extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Column: {
        type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
        w: (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .getWidthByUpCount */ .cN)(_globals_context_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.theme, 1),
        plinko: true,
        items: [{
          type: _Row__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
          autoResizeHeight: true,
          items: [{
            type: _Tile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
            itemLayout: {
              ratioX: 16,
              ratioY: 9,
              upCount: 5
            },
            artwork: {
              src: 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg'
            }
          }, {
            type: _Tile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
            itemLayout: {
              ratioX: 16,
              ratioY: 9,
              upCount: 5
            },
            artwork: {
              src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg'
            }
          }, {
            type: _Tile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
            itemLayout: {
              ratioX: 16,
              ratioY: 9,
              upCount: 5
            },
            artwork: {
              src: 'https://image.tmdb.org/t/p/w500/sQBS8MYXN9CZWV3gEDcL95G1KpA.jpg'
            }
          }, {
            type: _Tile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
            itemLayout: {
              ratioX: 16,
              ratioY: 9,
              upCount: 5
            },
            artwork: {
              src: 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg'
            }
          }, {
            type: _Tile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
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
          type: _Row__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
          autoResizeHeight: true,
          skipPlinko: true,
          items: [{
            type: _Tile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
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
          type: _Row__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
          autoResizeHeight: true,
          items: [{
            type: _Tile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
            itemLayout: {
              ratioX: 16,
              ratioY: 9,
              upCount: 5
            },
            artwork: {
              src: 'https://image.tmdb.org/t/p/w500/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg'
            }
          }, {
            type: _Tile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
            itemLayout: {
              ratioX: 16,
              ratioY: 9,
              upCount: 5
            },
            artwork: {
              src: 'https://image.tmdb.org/t/p/w500/jauI01vUIkPA0xVsamGj0Gs1nNL.jpg'
            }
          }, {
            type: _Tile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
            itemLayout: {
              ratioX: 16,
              ratioY: 9,
              upCount: 5
            },
            artwork: {
              src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg'
            }
          }, {
            type: _Tile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
            itemLayout: {
              ratioX: 16,
              ratioY: 9,
              upCount: 5
            },
            artwork: {
              src: 'https://image.tmdb.org/t/p/w500/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg'
            }
          }, {
            type: _Tile__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,
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
};
const LazyUpCount = args => class LazyUpCount extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Column: {
        type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
        h: 500,
        scrollIndex: args.scrollIndex,
        lazyUpCount: args.lazyUpCount,
        lazyUpCountBuffer: args.lazyUpCountBuffer,
        items: createItems(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, 20),
        alwaysScroll: args.alwaysScroll
      }
    };
  }
};
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
const AddingItems = args => class AddingItems extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Column: {
        type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
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
  prependButton() {
    this.tag('Column').prependItems([{
      type: _Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
      title: 'Prepended Button'
    }]);
  }
  appendButtonAt() {
    this.tag('Column').appendItemsAt([{
      type: _Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
      title: 'Appended Button at index 1'
    }], 1);
  }
  appendButton() {
    this.tag('Column').appendItems([{
      type: _Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
      title: 'Appended Button'
    }]);
  }
};
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
};
AddingItems.parameters = {
  storyDetails: 'The 3 buttons initially rendered in this story are configured to invoke 1 of the 3 methods available to add items to a Column (the name of the method used is in parenthesis on the button). Press enter on any of those 3 buttons to invoke that method and add a button to the Column.'
};
const RemovingItems = args => class RemovingItems extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Column: {
        type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
        h: 500,
        scrollIndex: args.scrollIndex,
        signals: {
          removeAt: 'removeButton'
        },
        items: [...createItems(_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, 2), {
          type: _docs_story_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,
          title: 'Press Enter on this button to remove it (removeItemAt)',
          signalName: 'removeAt',
          passSignals: {
            removeAt: true
          }
        }]
      }
    };
  }
  removeButton() {
    this.tag('Column').removeItemAt(2);
  }
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
;
const __namedExportsOrder = ["Column", "MultiColumn", "Plinko", "VaryingItemHeight", "ExpandableHeightItems", "ExpandableHeightRows", "SkipFocus", "OnScreenEffect", "StickyTitle", "CenteredInParent", "SkipPlinko", "LazyUpCount", "AddingItems", "RemovingItems"];
Column.parameters = {
  ...Column.parameters,
  docs: {
    ...Column.parameters?.docs,
    source: {
      originalSource: "args => class Column extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        h: context.theme.layout.screenH - 2 * (context.theme.layout.marginY + context.theme.layout.gutterY),\n        scrollIndex: args.scrollIndex,\n        items: createItems(Button, 20),\n        waitForDimensions: args.waitForDimensions\n      }\n    };\n  }\n}",
      ...Column.parameters?.docs?.source
    }
  }
};
MultiColumn.parameters = {
  ...MultiColumn.parameters,
  docs: {
    ...MultiColumn.parameters?.docs,
    source: {
      originalSource: "() => class MultiColumn extends lng.Component {\n  static _template() {\n    return {\n      Row: {\n        type: Row,\n        items: [{\n          type: ColumnComponent,\n          h: columnHeight,\n          autoResizeWidth: true,\n          items: createItems(Button, 20)\n        }, {\n          type: ColumnComponent,\n          h: columnHeight,\n          autoResizeWidth: true,\n          items: createItems(Button, 20)\n        }]\n      }\n    };\n  }\n}",
      ...MultiColumn.parameters?.docs?.source
    }
  }
};
Plinko.parameters = {
  ...Plinko.parameters,
  docs: {
    ...Plinko.parameters?.docs,
    source: {
      originalSource: "() => class Plinko extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        plinko: true,\n        items: [{\n          type: Row,\n          autoResizeHeight: true,\n          autoResizeWidth: true,\n          items: createItems(Button, 3)\n        }, {\n          type: Row,\n          autoResizeHeight: true,\n          autoResizeWidth: true,\n          items: createItems(Button, 3)\n        }]\n      }\n    };\n  }\n}",
      ...Plinko.parameters?.docs?.source
    }
  }
};
VaryingItemHeight.parameters = {
  ...VaryingItemHeight.parameters,
  docs: {
    ...VaryingItemHeight.parameters?.docs,
    source: {
      originalSource: "() => class VaryingItemHeight extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        h: columnHeight,\n        items: createItems(Button, 10, true)\n      }\n    };\n  }\n}",
      ...VaryingItemHeight.parameters?.docs?.source
    }
  }
};
ExpandableHeightItems.parameters = {
  ...ExpandableHeightItems.parameters,
  docs: {
    ...ExpandableHeightItems.parameters?.docs,
    source: {
      originalSource: "() => class ExpandableHeightItems extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        h: columnHeight,\n        items: createItems(ExpandingButton, 15)\n      }\n    };\n  }\n}",
      ...ExpandableHeightItems.parameters?.docs?.source
    }
  }
};
ExpandableHeightRows.parameters = {
  ...ExpandableHeightRows.parameters,
  docs: {
    ...ExpandableHeightRows.parameters?.docs,
    source: {
      originalSource: "() => class ExpandableHeightItems extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        h: columnHeight,\n        plinko: true,\n        items: Array.apply(null, {\n          length: 15\n        }).map(() => ({\n          type: Row,\n          autoResizeHeight: true,\n          w: getWidthByUpCount(context.theme, 1),\n          items: createItems(ExpandingButton, 3)\n        }))\n      }\n    };\n  }\n}",
      ...ExpandableHeightRows.parameters?.docs?.source
    }
  }
};
SkipFocus.parameters = {
  ...SkipFocus.parameters,
  docs: {
    ...SkipFocus.parameters?.docs,
    source: {
      originalSource: "args => class SkipFocus extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        h: columnHeight,\n        wrapSelected: args.wrapSelected,\n        items: [...Array.apply(null, {\n          length: 49\n        }).map((_, i) => {\n          if (i % 4 === 0) return {\n            type: Title,\n            titleText: 'Skip Focus Text',\n            h: 30,\n            skipFocus: true\n          };\n          return {\n            type: Button,\n            title: 'Button'\n          };\n        }), {\n          type: Title,\n          titleText: 'Skip Focus Text',\n          h: 30,\n          skipFocus: true\n        }]\n      }\n    };\n  }\n}",
      ...SkipFocus.parameters?.docs?.source
    }
  }
};
OnScreenEffect.parameters = {
  ...OnScreenEffect.parameters,
  docs: {
    ...OnScreenEffect.parameters?.docs,
    source: {
      originalSource: "() => class OnScreenEffect extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        scrollIndex: 2,\n        h: columnHeight,\n        items: createItems(Button, 10)\n      }\n    };\n  }\n  _init() {\n    this.tag('Column').onScreenEffect = items => {\n      const {\n        selected\n      } = this.tag('Column');\n      const selectedIndex = items.indexOf(selected);\n      items.slice(0, selectedIndex).reverse().forEach((item, idx) => {\n        item.alpha = 1 / (1 + idx);\n      });\n      items.slice(selectedIndex + 1).forEach((item, idx) => {\n        item.alpha = 1 / (1 + idx);\n      });\n    };\n  }\n}",
      ...OnScreenEffect.parameters?.docs?.source
    }
  }
};
StickyTitle.parameters = {
  ...StickyTitle.parameters,
  docs: {
    ...StickyTitle.parameters?.docs,
    source: {
      originalSource: "() => {\n  const items = flatten(Array.apply(null, {\n    length: 5\n  }).map((_, i) => {\n    const headerText = `Sticky Header ${i}`;\n    const items = Array.apply(null, {\n      length: 8\n    }).map((_, i) => {\n      return {\n        type: Button,\n        title: `Button ${i + 1}`,\n        fixed: true,\n        w: 250,\n        headerText\n      };\n    });\n    return [{\n      type: ColumnHeader,\n      headerText,\n      h: 40,\n      skipFocus: true\n    }, ...items];\n  }));\n  items.shift();\n  return class ColumnExample extends lng.Component {\n    static _template() {\n      return {\n        Column: {\n          y: 50,\n          h: 400,\n          autoResizeWidth: true,\n          clipping: true,\n          type: ColumnComponent,\n          items,\n          signals: {\n            selectedChange: '_updateHeader'\n          }\n        },\n        ColumnHeader: {\n          type: ColumnHeader,\n          headerText: 'Sticky Header 0',\n          h: 40\n        }\n      };\n    }\n    _updateHeader(selected) {\n      this.tag('ColumnHeader').headerText = selected.headerText || '';\n    }\n  };\n}",
      ...StickyTitle.parameters?.docs?.source
    }
  }
};
CenteredInParent.parameters = {
  ...CenteredInParent.parameters,
  docs: {
    ...CenteredInParent.parameters?.docs,
    source: {
      originalSource: "() => class CenteredInParent extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        autoResizeWidth: true,\n        items: [{\n          type: Row,\n          autoResizeWidth: true,\n          autoResizeHeight: true,\n          items: createItems(Button, 3)\n        }, {\n          type: Row,\n          autoResizeWidth: true,\n          autoResizeHeight: true,\n          centerInParent: true,\n          items: createItems(Button, 2)\n        }, {\n          ...createItems(Button, 1)[0],\n          centerInParent: true\n        }]\n      }\n    };\n  }\n}",
      ...CenteredInParent.parameters?.docs?.source
    }
  }
};
SkipPlinko.parameters = {
  ...SkipPlinko.parameters,
  docs: {
    ...SkipPlinko.parameters?.docs,
    source: {
      originalSource: "() => class SkipPlinko extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        w: getWidthByUpCount(context.theme, 1),\n        plinko: true,\n        items: [{\n          type: Row,\n          autoResizeHeight: true,\n          items: [{\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg'\n            }\n          }, {\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg'\n            }\n          }, {\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/sQBS8MYXN9CZWV3gEDcL95G1KpA.jpg'\n            }\n          }, {\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg'\n            }\n          }, {\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg'\n            }\n          }]\n        }, {\n          type: Row,\n          autoResizeHeight: true,\n          skipPlinko: true,\n          items: [{\n            type: Tile,\n            itemLayout: {\n              ratioX: 4,\n              ratioY: 1,\n              upCount: 1\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/m0iEEib19yHzyD8hLh09qkIWbwz.jpg'\n            },\n            metadata: {\n              title: 'Row with skipPlinko set to true'\n            },\n            persistentMetadata: true\n          }]\n        }, {\n          type: Row,\n          autoResizeHeight: true,\n          items: [{\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg'\n            }\n          }, {\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/jauI01vUIkPA0xVsamGj0Gs1nNL.jpg'\n            }\n          }, {\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg'\n            }\n          }, {\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg'\n            }\n          }, {\n            type: Tile,\n            itemLayout: {\n              ratioX: 16,\n              ratioY: 9,\n              upCount: 5\n            },\n            artwork: {\n              src: 'https://image.tmdb.org/t/p/w500/jauI01vUIkPA0xVsamGj0Gs1nNL.jpg'\n            }\n          }]\n        }]\n      }\n    };\n  }\n}",
      ...SkipPlinko.parameters?.docs?.source
    }
  }
};
LazyUpCount.parameters = {
  ...LazyUpCount.parameters,
  docs: {
    ...LazyUpCount.parameters?.docs,
    source: {
      originalSource: "args => class LazyUpCount extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        h: 500,\n        scrollIndex: args.scrollIndex,\n        lazyUpCount: args.lazyUpCount,\n        lazyUpCountBuffer: args.lazyUpCountBuffer,\n        items: createItems(Button, 20),\n        alwaysScroll: args.alwaysScroll\n      }\n    };\n  }\n}",
      ...LazyUpCount.parameters?.docs?.source
    }
  }
};
AddingItems.parameters = {
  ...AddingItems.parameters,
  docs: {
    ...AddingItems.parameters?.docs,
    source: {
      originalSource: "args => class AddingItems extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        h: 500,\n        scrollIndex: args.scrollIndex,\n        lazyUpCount: args.lazyUpCount,\n        lazyUpCountBuffer: args.lazyUpCountBuffer,\n        signals: {\n          append: 'appendButton',\n          appendAt: 'appendButtonAt',\n          prepend: 'prependButton'\n        },\n        items: [{\n          type: SignalButton,\n          title: 'Prepend 1 Button (prependItems)',\n          signalName: 'prepend',\n          passSignals: {\n            prepend: true\n          }\n        }, {\n          type: SignalButton,\n          title: 'Append 1 Button at index 1 (appendItemsAt)',\n          signalName: 'appendAt',\n          passSignals: {\n            appendAt: true\n          }\n        }, {\n          type: SignalButton,\n          title: 'Append 1 Button to the Row (appendItems)',\n          signalName: 'append',\n          passSignals: {\n            append: true\n          }\n        }]\n      }\n    };\n  }\n  prependButton() {\n    this.tag('Column').prependItems([{\n      type: Button,\n      title: 'Prepended Button'\n    }]);\n  }\n  appendButtonAt() {\n    this.tag('Column').appendItemsAt([{\n      type: Button,\n      title: 'Appended Button at index 1'\n    }], 1);\n  }\n  appendButton() {\n    this.tag('Column').appendItems([{\n      type: Button,\n      title: 'Appended Button'\n    }]);\n  }\n}",
      ...AddingItems.parameters?.docs?.source
    }
  }
};
RemovingItems.parameters = {
  ...RemovingItems.parameters,
  docs: {
    ...RemovingItems.parameters?.docs,
    source: {
      originalSource: "args => class RemovingItems extends lng.Component {\n  static _template() {\n    return {\n      Column: {\n        type: ColumnComponent,\n        h: 500,\n        scrollIndex: args.scrollIndex,\n        signals: {\n          removeAt: 'removeButton'\n        },\n        items: [...createItems(Button, 2), {\n          type: SignalButton,\n          title: 'Press Enter on this button to remove it (removeItemAt)',\n          signalName: 'removeAt',\n          passSignals: {\n            removeAt: true\n          }\n        }]\n      }\n    };\n  }\n  removeButton() {\n    this.tag('Column').removeItemAt(2);\n  }\n}",
      ...RemovingItems.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=components-Column-Column-stories.5e0d8b4a.iframe.bundle.js.map