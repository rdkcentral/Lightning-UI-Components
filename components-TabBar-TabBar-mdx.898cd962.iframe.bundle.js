(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[643,8197],{

/***/ "../../@lightningjs/ui-components/src/components/TabBar/TabBar.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MDXContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../node_modules/react/jsx-runtime.js");
/* harmony import */ var _home_runner_work_Lightning_UI_Components_Lightning_UI_Components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _docs_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
/* harmony import */ var _TabBar_stories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/components/TabBar/TabBar.stories.js");



/*prettier-ignore*/
/*
Copyright 2023 Comcast Cable Communications Management, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

SPDX-License-Identifier: Apache-2.0
\*/





function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,_home_runner_work_Lightning_UI_Components_Lightning_UI_Components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: ["\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      of: _TabBar_stories__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Tab navigation between groups of content."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "source",
      children: "Source"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/rdkcentral/Lightning-UI-Components/blob/develop/packages/@lightningjs/ui-components/src/components/TabBar/TabBar.js",
        rel: "nofollow",
        children: "https://github.com/rdkcentral/Lightning-UI-Components/blob/develop/packages/@lightningjs/ui-components/src/components/TabBar/TabBar.js"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "usage",
      children: "Usage"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "TabBar"
      }), " renders a row of tabs and displays the contents for each tab when it is selected. The recommended component\nto render for each tab is the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "/docs/components-tab--basic",
        children: "Tab"
      }), " component, however custom implementations of tab components is also supported.\nThe component rendered as content for each tab is set via a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "tabContent"
      }), " property on each tab."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-js",
        children: "import { TabBar, Tab, Row } from '@lightningjs/ui-components';\n\nclass Example extends lng.Component {\n  static _template() {\n    return {\n      TabBar: {\n        type: TabBar,\n        tabs: [\n          // tab with no tabContent\n          {\n            type: Tab,\n            title: 'Tab Item 1'\n          },\n          // set tabContent via a component\n          {\n            type: Tab,\n            title: 'Tab Item 2',\n            tabContent: {\n              type: Row,\n              items: rowItemsForTab2\n            }\n          },\n          // set tabContent via a function which returns a component\n          {\n            type: Tab,\n            title: 'Tab Item 3',\n            tabContent: () => {\n              return {\n                type: Row,\n                items: rowItemsForTab3\n              };\n            }\n          },\n          // set tabContent via an asynchronous function which returns a component\n          {\n            type: Tab,\n            title: 'Tab Item 4',\n            tabContent: () => {\n              return new Promise(resolve => {\n                resolve({\n                  type: Row,\n                  items: rowItemsForTab2\n                });\n              });\n            }\n          }\n        ]\n      }\n    };\n  }\n\n  $tabChanged(selectedTab) {\n    console.log(selectedTab.title);\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "properties",
      children: "Properties"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "name"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "type"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "required"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "default"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "description"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "alphaSelectedTab"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "boolean"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["when ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "true"
            }), ", a lower alpha will be applied to unselected tabs when focus is delegated to the tab content"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "collapse"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "boolean"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["when ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "true"
            }), ", the height of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "TabBar"
            }), " will only reflect the height of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "Tabs"
            }), " when unfocused or no tab content is available"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "reset"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "boolean"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["when ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "true"
            }), ", the selected tab index will be reset when the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "TabBar"
            }), " component is unfocused"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "tabs"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_utils__WEBPACK_IMPORTED_MODULE_5__/* .DocsLink */ .cY, {
              id: "lng.Component",
              children: "lng.Component[]"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "true"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "The content displayed when a tab is selected is configured via a tabContent property on each tab in the tabs array. If tabContent is undefined on a tab, nothing will be displayed when that tab is selected. TabContent accepts a component, a function which returns a component, or a promise that resolves to a component"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "wrapSelected"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "boolean"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["enables wrapping behavior, so ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "selectNext"
            }), " selects the first item if the current item is the last on the list and vice versa"]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["* ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "TabBar"
      }), " also accepts all properties supported by the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "/docs/components-row--basic",
        children: "Row"
      }), " component. These properties will be applied to the Row which renders the Tabs"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "signals",
      children: "Signals"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "$tabChanged"
        }), ": each time the selected tab is changed, a signal named ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "$tabChanged"
        }), " is emitted (via ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "fireAncestors"
        }), ") with 3 arguments in the following order: the current selected tab, the previously selected tab, and an instance of the TabBar component"]
      }), "\n"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-js",
        children: "fireAncestors('$tabChanged', selected, prevSelected, this);\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "style-properties",
      children: "Style Properties"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "name"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "type"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "description"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "tabsMarginBottom"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "vertical margin between tabs and tab content"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "tabSpacing"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "pixels between each tab component"
          })]
        })]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,_home_runner_work_Lightning_UI_Components_Lightning_UI_Components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, {
    ...props,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}


/***/ }),

/***/ "../../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/react/index.js");
/**
 * @typedef {import('mdx/types.js').MDXComponents} MDXComponents
 * @typedef {import('react').Component<{}, {}, unknown>} Component
 * @typedef {import('react').ReactNode} ReactNode
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {JSX.Element}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Button/ButtonSmall.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ButtonSmall)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Button/ButtonSmall.styles.js
var ButtonSmall_styles_namespaceObject = {};
__webpack_require__.r(ButtonSmall_styles_namespaceObject);
__webpack_require__.d(ButtonSmall_styles_namespaceObject, {
  base: () => (base)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Button/Button.js + 1 modules
var Button = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/Button.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Button/ButtonSmall.styles.js
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
    minWidth: (0,utils/* getWidthByColumnSpan */._l)(theme, 1),
    paddingX: theme.spacer.xxl,
    paddingXNoTitle: theme.spacer.lg,
    paddingY: theme.spacer.lg,
    textStyle: theme.typography.button2
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Button/ButtonSmall.js
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



var ButtonSmall = /*#__PURE__*/function (_Button) {
  function ButtonSmall() {
    _classCallCheck(this, ButtonSmall);
    return _callSuper(this, ButtonSmall, arguments);
  }
  _inherits(ButtonSmall, _Button);
  return _createClass(ButtonSmall, null, [{
    key: "__componentName",
    get: function get() {
      return 'ButtonSmall';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return ButtonSmall_styles_namespaceObject;
    }
  }]);
}(Button/* default */.A);


/***/ }),

/***/ "../../../node_modules/@storybook/core/dist/components sync recursive":
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "../../../node_modules/@storybook/core/dist/components sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/TabBar/TabBar.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Basic: () => (/* binding */ Basic),
  CustomTabs: () => (/* binding */ CustomTabs),
  MultipleRows: () => (/* binding */ MultipleRows),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ TabBar_stories)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/TabBar/TabBar.styles.js
var TabBar_styles_namespaceObject = {};
__webpack_require__.r(TabBar_styles_namespaceObject);
__webpack_require__.d(TabBar_styles_namespaceObject, {
  base: () => (base)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Tile/Tile.js + 1 modules
var Tile = __webpack_require__("../../@lightningjs/ui-components/src/components/Tile/Tile.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Button/Button.js + 1 modules
var Button = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/Button.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Button/ButtonSmall.js + 1 modules
var ButtonSmall = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/ButtonSmall.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/assets/images/view_all.png
const view_all_namespaceObject = __webpack_require__.p + "static/media/view_all.17ad8284.png";
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/docs/utils.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png
var ic_lightning_white_32 = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Row/Row.js + 1 modules
var Row = __webpack_require__("../../@lightningjs/ui-components/src/components/Row/Row.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Column/Column.js + 1 modules
var Column = __webpack_require__("../../@lightningjs/ui-components/src/components/Column/Column.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/globals/context/index.js + 6 modules
var context = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TabBar/Tab.js + 1 modules
var Tab = __webpack_require__("../../@lightningjs/ui-components/src/components/TabBar/Tab.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var src_utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/TabBar/ContentSwitcher.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, e, o, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), e, o); return 2 & r && "function" == typeof p ? function (t) { return p.apply(o, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
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



var ContentSwitcher = /*#__PURE__*/function (_Base) {
  function ContentSwitcher() {
    _classCallCheck(this, ContentSwitcher);
    return _callSuper(this, ContentSwitcher, arguments);
  }
  _inherits(ContentSwitcher, _Base);
  return _createClass(ContentSwitcher, [{
    key: "_construct",
    value: function _construct() {
      _superPropGet(ContentSwitcher, "_construct", this, 3)([]);
      this._selectedIndex = 0;
      this._contentItems = [];
    }
  }, {
    key: "_update",
    value: function _update() {
      _superPropGet(ContentSwitcher, "_update", this, 3)([]);
      this._updateSelected();
    }
  }, {
    key: "_updateSelected",
    value: function _updateSelected() {
      var _this = this;
      if (this._preveSelectedIndex !== this.selectedIndex) {
        if (this._preveSelectedIndex !== undefined) {
          var prevContent = this.tag("Content".concat(this._preveSelectedIndex));
          prevContent.smooth = {
            alpha: 0
          };
          if (this._hasContent) {
            prevContent._getTransition('alpha').once('finish', function () {
              _this._fadeInContent();
            });
          } else if (this.selectedIndex !== undefined) {
            this._fadeInContent();
          }
        } else if (this._hasContent) {
          this._fadeInContent();
        }
        this._preveSelectedIndex = this.selectedIndex;
      }
    }
  }, {
    key: "_fadeInContent",
    value: function _fadeInContent() {
      var _this2 = this;
      this._selectedContent.smooth = {
        alpha: 1
      };
      this._selectedContent._getTransition('alpha').once('finish', function () {
        _this2.h = _this2._selectedContent.h;
        _this2.signal('contentHeightChange', _this2.h);
      });
    }
  }, {
    key: "_updateContent",
    value: function _updateContent() {
      var _this3 = this;
      var allContent = this.contentItems.reduce(function (acc, item, idx) {
        var component;
        var tagName = "Content".concat(idx);
        if (typeof item === 'function') {
          var componentLoader = item();
          if (componentLoader.then) {
            // update template async after component has loaded
            _this3._loadAsyncComponent(componentLoader, idx);
          } else {
            component = componentLoader;
          }
        } else {
          component = item;
        }
        if (component) {
          acc[tagName] = _objectSpread(_objectSpread({}, component), {}, {
            alpha: 0
          });
        }
        return acc;
      }, {});
      this.patch(allContent);
    }
  }, {
    key: "_loadAsyncComponent",
    value: function _loadAsyncComponent(componentLoader, idx) {
      var _this4 = this;
      componentLoader.then(function (component) {
        var tagName = "Content".concat(idx);
        _this4.patch(_defineProperty({}, tagName, _objectSpread(_objectSpread({}, component), {}, {
          alpha: 0
        })));
      });
    }
  }, {
    key: "contentItems",
    get: function get() {
      return this._contentItems;
    },
    set: function set(contentItems) {
      if (!(0,src_utils/* stringifyCompare */.du)(contentItems, this._contentItems)) {
        this._contentItems = contentItems;
        this._updateContent();
      }
    }
  }, {
    key: "_hasContent",
    get: function get() {
      return this._selectedContent && this._selectedContent.children.length > 0;
    }
  }, {
    key: "_selectedContent",
    get: function get() {
      return this.tag("Content".concat(this.selectedIndex));
    }
  }, {
    key: "_getFocused",
    value: function _getFocused() {
      if (this._hasContent) {
        return this._selectedContent;
      }
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'ContentSwitcher';
    }
  }, {
    key: "properties",
    get: function get() {
      return ['selectedIndex'];
    }
  }]);
}(Base/* default */.A);

;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/TabBar/TabBar.styles.js
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
    tabSpacing: theme.spacer.lg,
    tabsMarginBottom: theme.spacer.xxl
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/TabBar/TabBar.js
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function TabBar_typeof(o) { "@babel/helpers - typeof"; return TabBar_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, TabBar_typeof(o); }
function TabBar_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function TabBar_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, TabBar_toPropertyKey(o.key), o); } }
function TabBar_createClass(e, r, t) { return r && TabBar_defineProperties(e.prototype, r), t && TabBar_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function TabBar_toPropertyKey(t) { var i = TabBar_toPrimitive(t, "string"); return "symbol" == TabBar_typeof(i) ? i : i + ""; }
function TabBar_toPrimitive(t, r) { if ("object" != TabBar_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != TabBar_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function TabBar_callSuper(t, o, e) { return o = TabBar_getPrototypeOf(o), TabBar_possibleConstructorReturn(t, TabBar_isNativeReflectConstruct() ? Reflect.construct(o, e || [], TabBar_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function TabBar_possibleConstructorReturn(t, e) { if (e && ("object" == TabBar_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return TabBar_assertThisInitialized(t); }
function TabBar_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function TabBar_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (TabBar_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function TabBar_superPropGet(t, e, o, r) { var p = TabBar_get(TabBar_getPrototypeOf(1 & r ? t.prototype : t), e, o); return 2 & r && "function" == typeof p ? function (t) { return p.apply(o, t); } : p; }
function TabBar_get() { return TabBar_get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = TabBar_superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, TabBar_get.apply(null, arguments); }
function TabBar_superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = TabBar_getPrototypeOf(t));); return t; }
function TabBar_getPrototypeOf(t) { return TabBar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, TabBar_getPrototypeOf(t); }
function TabBar_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && TabBar_setPrototypeOf(t, e); }
function TabBar_setPrototypeOf(t, e) { return TabBar_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, TabBar_setPrototypeOf(t, e); }
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





var TabBar = /*#__PURE__*/function (_Base) {
  function TabBar() {
    TabBar_classCallCheck(this, TabBar);
    return TabBar_callSuper(this, TabBar, arguments);
  }
  TabBar_inherits(TabBar, _Base);
  return TabBar_createClass(TabBar, [{
    key: "_construct",
    value: function _construct() {
      TabBar_superPropGet(TabBar, "_construct", this, 3)([]);
      this._tabContent = [];
      this._isTabsFocused = true;
    }
  }, {
    key: "_selectedTabChange",
    value: function _selectedTabChange(selected, prevSelected) {
      this.fireAncestors('$tabChanged', selected, prevSelected, this);
      if (TabBar_typeof(this._tabContent) === 'object' && typeof this._tabContent.then === 'function') {
        return this._tabContent.then(this.queueRequestUpdate);
      }
      return this.queueRequestUpdate();
    }
  }, {
    key: "_update",
    value: function _update() {
      this._updateTabsLayout();
      this._updateTabs();
      this._updateTabContent();
      this._updateTabBarHeight();
    }
  }, {
    key: "_updateTabsLayout",
    value: function _updateTabsLayout() {
      var _this = this;
      var defaultLayout = {
        style: {
          itemSpacing: this.style.tabSpacing
        }
      };
      var tabsRowPatch = Row/* default */.A.properties.reduce(function (patchObj, prop) {
        if (_this[prop] != undefined) {
          patchObj[prop] = _this[prop];
        }
        return patchObj;
      }, defaultLayout);
      this._Tabs.patch(tabsRowPatch);
    }
  }, {
    key: "_updateTabs",
    value: function _updateTabs() {
      var _this2 = this;
      this._Tabs.wrapSelected = this.wrapSelected;
      this._Tabs.items.forEach(function (tab) {
        var isSelectedTab = tab === _this2._Tabs.selected;
        if (_this2._isUnfocusedMode) {
          tab.mode = isSelectedTab && _this2.retainSelection ? 'selected' : 'unfocused';
        } else if (_this2._isFocusedMode) {
          if (_this2._isTabsFocused) {
            tab.mode = isSelectedTab ? 'focused' : 'unfocused';
          } else {
            tab.mode = isSelectedTab ? 'selected' : 'unfocused';
          }
        }
      });
      if (this.alphaSelectedTab) {
        this._updateTabAlphas();
      }
    }
  }, {
    key: "_updateTabAlphas",
    value: function _updateTabAlphas() {
      var _this3 = this;
      if (this._isTabsFocused) {
        this._Tabs.items.forEach(function (tab) {
          tab.patch({
            alpha: 1
          });
        });
      } else {
        this._Tabs.items.forEach(function (tab) {
          tab.patch({
            alpha: tab === _this3._Tabs.selected ? 1 : 0.3
          });
        });
      }
    }
  }, {
    key: "_updateTabContent",
    value: function _updateTabContent() {
      var margin = this.style.tabsMarginBottom;
      this._TabContent.patch({
        y: this._Tabs.h + margin,
        contentItems: this._tabContent,
        selectedIndex: this._isFocusedMode ? this._Tabs.selectedIndex : undefined
      });
    }
  }, {
    key: "$itemChanged",
    value: function $itemChanged() {
      // triggered when the Tabs Row resizes
      // update the height of TabBar using the latest h value from Tabs
      this._updateTabBarHeight();
      this._updateTabContent();
    }
  }, {
    key: "_updateTabBarHeight",
    value: function _updateTabBarHeight() {
      var h;
      if (this.collapse) {
        h = this._isFocusedMode && this._tabContent.filter(function (content) {
          return Object.keys(content).length;
        }).length ? this._expandedHeight : this._collapsedHeight;
      } else {
        h = this._expandedHeight;
      }
      this._TabContent.smooth = {
        alpha: !this.collapse || this._isFocusedMode ? 1 : 0.001
      };
      if (this.h !== h) {
        this.h = h;
        this.fireAncestors('$itemChanged');
      }
    }
  }, {
    key: "selectTabs",
    value: function selectTabs() {
      if (!this._isTabsFocused) {
        this._isTabsFocused = true;
        this._updateTabs();
        this._updateTabBarHeight();
      }
    }
  }, {
    key: "resetTabs",
    value: function resetTabs() {
      this._Tabs.selectedIndex = 0;
    }
  }, {
    key: "_handleDown",
    value: function _handleDown() {
      if (this._isTabsFocused && this._TabContent._hasContent) {
        this._isTabsFocused = false;
        this._updateTabs();
        this._updateTabBarHeight();
      }
      return false;
    }
  }, {
    key: "_handleUp",
    value: function _handleUp() {
      this.selectTabs();
      return false;
    }
  }, {
    key: "_setTabs",
    value: function _setTabs(tabs) {
      this._tabContent = [];
      this._tabContent = tabs.map(function (tab) {
        return tab.tabContent || {};
      });
      this._Tabs.items = tabs;
      return tabs;
    }
  }, {
    key: "_getTabs",
    value: function _getTabs() {
      return this._Tabs.items;
    }
  }, {
    key: "selected",
    get: function get() {
      return this._Tabs.selected;
    }
  }, {
    key: "selectedIndex",
    get: function get() {
      return this._Tabs.selectedIndex;
    },
    set: function set(index) {
      this._Tabs.selectedIndex = index;
    }
  }, {
    key: "_collapsedHeight",
    get: function get() {
      return this._Tabs.h;
    }
  }, {
    key: "_expandedHeight",
    get: function get() {
      return this._Tabs.h + this.style.tabsMarginBottom + this._TabContent.h;
    }
  }, {
    key: "_getFocused",
    value: function _getFocused() {
      return this._isTabsFocused ? this._Tabs : this._TabContent;
    }
  }, {
    key: "_unfocus",
    value: function _unfocus() {
      TabBar_superPropGet(TabBar, "_unfocus", this, 3)([]);
      if (this.reset) {
        this.resetTabs();
      }
    }
  }], [{
    key: "_template",
    value: function _template() {
      return {
        Tabs: {
          type: Row/* default */.A,
          autoResizeHeight: true,
          signals: {
            selectedChange: '_selectedTabChange'
          }
        },
        TabContent: {
          type: ContentSwitcher,
          signals: {
            contentHeightChange: '_updateTabBarHeight'
          }
        }
      };
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return TabBar_styles_namespaceObject;
    }
  }, {
    key: "__componentName",
    get: function get() {
      return 'TabBar';
    }
  }, {
    key: "properties",
    get: function get() {
      return ['alphaSelectedTab', 'collapse', 'reset', 'tabs', 'retainSelection'].concat(_toConsumableArray(Row/* default */.A.properties));
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Tabs', 'TabContent'];
    }
  }]);
}(Base/* default */.A);

;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/TabBar/TabBar.stories.js
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















/* harmony default export */ const TabBar_stories = ({
  title: 'Components/TabBar',
  args: {
    collapse: false,
    alphaSelectedTab: false,
    wrapSelected: false,
    mode: 'focused'
  },
  argTypes: {
    ...(0,utils/* createModeControl */.Pg)({
      summaryValue: 'focused'
    }),
    alphaSelectedTab: {
      control: 'boolean',
      description: 'When true, a lower alpha will be applied to unselected tabs when focus is delegated to the tab content',
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    collapse: {
      control: 'boolean',
      description: 'When true, the height of the TabBar will only reflect the height of the Tabs when unfocused or no tab content is available',
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    wrapSelected: {
      control: 'boolean',
      description: 'Enables wrapping behavior, so selectNext selects the first item if the current item is the last on the list and vice versa',
      table: {
        defaultValue: {
          summary: false
        }
      }
    }
  }
});
class CustomButton extends ButtonSmall/* default */.A {
  _focus() {
    super._focus();
    this.patch({
      w: 175,
      title: 'View All'
    });
    this.fireAncestors('$itemChanged');
  }
  _unfocus() {
    super._unfocus();
    this.patch({
      w: 72,
      title: ''
    });
    this.fireAncestors('$itemChanged');
  }
}
const createTiles = imgSrcs => {
  return imgSrcs.map(src => ({
    type: Tile/* default */.A,
    w: 410,
    h: 230,
    artwork: {
      src
    }
  }));
};
const tilesA = createTiles(['https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg', 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg', 'https://image.tmdb.org/t/p/w500/jauI01vUIkPA0xVsamGj0Gs1nNL.jpg', 'https://image.tmdb.org/t/p/w500/sQBS8MYXN9CZWV3gEDcL95G1KpA.jpg', 'https://image.tmdb.org/t/p/w500/m0iEEib19yHzyD8hLh09qkIWbwz.jpg']);
const tilesB = tilesA.slice().reverse();
const createColumn = titles => {
  return {
    type: Column/* default */.A,
    h: 300,
    w: 410,
    style: {
      itemSpacing: 16
    },
    neverScroll: true,
    items: titles.map(title => ({
      w: 410,
      type: Button/* default */.A,
      title
    }))
  };
};
const col1 = createColumn(['Item 1', 'Item 2', 'Item 3']);
const col2 = createColumn(['Async Item 1', 'Async Item 2', 'Async Item 3']);
const rowFunction = () => ({
  type: Row/* default */.A,
  items: tilesB,
  autoResizeHeight: true,
  alwaysScroll: true
});
const colPromise = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(col2);
    }, 2000);
  });
};
const Basic = () => class Basic extends lightning_esm/* default */.A.Component {
  static _template() {
    return {
      TabBar: {
        type: TabBar,
        w: 1920 - 160,
        tabs: [{
          type: Tab/* default */.A,
          title: 'No Content Tab'
        }, {
          type: Tab/* default */.A,
          title: 'Tab 1',
          tabContent: {
            type: Row/* default */.A,
            items: tilesA,
            autoResizeHeight: true,
            lazyScroll: true
          }
        }, {
          type: Tab/* default */.A,
          title: 'Tab 2',
          tabContent: col1
        }, {
          type: Tab/* default */.A,
          title: 'Tab 3',
          tabContent: rowFunction
        }, {
          type: Tab/* default */.A,
          title: 'Tab 4',
          tabContent: colPromise
        }]
      }
    };
  }
};
class CustomTile extends Tile/* default */.A {
  static _template() {
    return {
      ...super._template(),
      SoftFocus: {}
    };
  }
  _update() {
    super._update();
    this._updateSoftFocus();
  }
  _updateSoftFocus() {
    const {
      color,
      spacer
    } = context/* default */.A.theme;
    if (this.mode === 'selected') {
      this.tag('SoftFocus').patch({
        rect: true,
        color: color.interactiveNeutralFocus,
        h: spacer.xs,
        w: spacer.xxxl + spacer.xxl + spacer.xs,
        mountX: 0.5,
        mountY: 1,
        y: this.h + spacer.lg + spacer.xs,
        x: this.w / 2
      });
    } else {
      this.tag('SoftFocus').patch({
        h: 0,
        w: 0
      });
    }
  }
}
const tileProps = {
  w: 100,
  h: 100,
  radius: 50,
  imgRadius: 50,
  artwork: {
    icon: ic_lightning_white_32
  }
};
const CustomTabs = () => class CustomTabs extends lightning_esm/* default */.A.Component {
  static _template() {
    return {
      TabBar: {
        type: TabBar,
        w: 1920 - 160,
        tabs: [{
          type: CustomButton,
          fixed: true,
          prefix: [{
            type: Icon/* default */.A,
            icon: view_all_namespaceObject,
            w: 20,
            h: 20
          }],
          centerInParent: true,
          backgroundType: 'fill'
        }, {
          type: CustomTile,
          ...tileProps,
          tabContent: {
            type: Row/* default */.A,
            items: tilesA,
            autoResizeHeight: true,
            lazyScroll: true
          }
        }, {
          type: CustomTile,
          ...tileProps,
          tabContent: col1
        }, {
          type: CustomTile,
          ...tileProps,
          tabContent: rowFunction
        }, {
          type: CustomTile,
          ...tileProps,
          tabContent: colPromise
        }]
      }
    };
  }
};
CustomTabs.args = {
  alphaSelectedTab: false
};
CustomTabs.argTypes = {};
class ColumnContainer extends Base/* default */.A {
  static get __componentName() {
    return 'ColumnContainer';
  }
  static get tags() {
    return ['ClippingOffsetContainer', {
      name: 'Column',
      path: 'ClippingOffsetContainer.Column'
    }];
  }
  static _template() {
    return {
      ClippingOffsetContainer: {
        w: 1920 - 160,
        h: 600,
        clipping: true,
        y: context/* default */.A.theme.layout.gutterY * -1,
        x: 40 * -1,
        Column: {
          type: Column/* default */.A,
          y: context/* default */.A.theme.layout.gutterY,
          x: 40,
          items: [{
            type: Row/* default */.A,
            items: tilesA,
            autoResizeHeight: true
          }, {
            type: Row/* default */.A,
            items: tilesA,
            autoResizeHeight: true
          }, {
            type: Row/* default */.A,
            items: tilesA,
            autoResizeHeight: true
          }, {
            type: Row/* default */.A,
            items: tilesA,
            autoResizeHeight: true
          }]
        }
      }
    };
  }
  _getFocused() {
    return this._Column;
  }
}
const MultipleRows = () => class MultipleRows extends lightning_esm/* default */.A.Component {
  static _template() {
    return {
      TabBar: {
        type: TabBar,
        autoResizeWidth: true,
        tabs: [{
          type: Tab/* default */.A,
          title: 'No Content Tab'
        }, {
          type: Tab/* default */.A,
          title: 'Multiple Rows',
          tabContent: {
            type: ColumnContainer
          }
        }, {
          type: Tab/* default */.A,
          title: 'Tab 2',
          tabContent: col1
        }]
      }
    };
  }
};
MultipleRows.args = {};
MultipleRows.parameters = {
  storyDetails: 'This is an example of adding multiple rows in the tab content column. A ColumnContainer was created to allow for clipping needed for scrolling'
};
MultipleRows.argTypes = {};
;
const __namedExportsOrder = ["Basic", "CustomTabs", "MultipleRows"];
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => class Basic extends lng.Component {\n  static _template() {\n    return {\n      TabBar: {\n        type: TabBarComponent,\n        w: 1920 - 160,\n        tabs: [{\n          type: Tab,\n          title: 'No Content Tab'\n        }, {\n          type: Tab,\n          title: 'Tab 1',\n          tabContent: {\n            type: Row,\n            items: tilesA,\n            autoResizeHeight: true,\n            lazyScroll: true\n          }\n        }, {\n          type: Tab,\n          title: 'Tab 2',\n          tabContent: col1\n        }, {\n          type: Tab,\n          title: 'Tab 3',\n          tabContent: rowFunction\n        }, {\n          type: Tab,\n          title: 'Tab 4',\n          tabContent: colPromise\n        }]\n      }\n    };\n  }\n}",
      ...Basic.parameters?.docs?.source
    }
  }
};
CustomTabs.parameters = {
  ...CustomTabs.parameters,
  docs: {
    ...CustomTabs.parameters?.docs,
    source: {
      originalSource: "() => class CustomTabs extends lng.Component {\n  static _template() {\n    return {\n      TabBar: {\n        type: TabBarComponent,\n        w: 1920 - 160,\n        tabs: [{\n          type: CustomButton,\n          fixed: true,\n          prefix: [{\n            type: Icon,\n            icon: viewAllIcon,\n            w: 20,\n            h: 20\n          }],\n          centerInParent: true,\n          backgroundType: 'fill'\n        }, {\n          type: CustomTile,\n          ...tileProps,\n          tabContent: {\n            type: Row,\n            items: tilesA,\n            autoResizeHeight: true,\n            lazyScroll: true\n          }\n        }, {\n          type: CustomTile,\n          ...tileProps,\n          tabContent: col1\n        }, {\n          type: CustomTile,\n          ...tileProps,\n          tabContent: rowFunction\n        }, {\n          type: CustomTile,\n          ...tileProps,\n          tabContent: colPromise\n        }]\n      }\n    };\n  }\n}",
      ...CustomTabs.parameters?.docs?.source
    }
  }
};
MultipleRows.parameters = {
  ...MultipleRows.parameters,
  docs: {
    ...MultipleRows.parameters?.docs,
    source: {
      originalSource: "() => class MultipleRows extends lng.Component {\n  static _template() {\n    return {\n      TabBar: {\n        type: TabBarComponent,\n        autoResizeWidth: true,\n        tabs: [{\n          type: Tab,\n          title: 'No Content Tab'\n        }, {\n          type: Tab,\n          title: 'Multiple Rows',\n          tabContent: {\n            type: ColumnContainer\n          }\n        }, {\n          type: Tab,\n          title: 'Tab 2',\n          tabContent: col1\n        }]\n      }\n    };\n  }\n}",
      ...MultipleRows.parameters?.docs?.source
    }
  }
};

/***/ }),

/***/ "../../../node_modules/memoizerific sync recursive":
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "../../../node_modules/memoizerific sync recursive";
module.exports = webpackEmptyContext;

/***/ })

}]);
//# sourceMappingURL=components-TabBar-TabBar-mdx.898cd962.iframe.bundle.js.map