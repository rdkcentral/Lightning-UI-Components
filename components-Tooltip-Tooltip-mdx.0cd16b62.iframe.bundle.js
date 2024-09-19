(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[2833,6115,4827,287,9459],{

/***/ "../../@lightningjs/ui-components/src/components/Tooltip/Tooltip.mdx":
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
/* harmony import */ var _Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Tooltip/Tooltip.stories.js");
/* harmony import */ var _docs_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");



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
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,_home_runner_work_Lightning_UI_Components_Lightning_UI_Components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .R)(),
    ...props.components
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: ["\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .W8, {
      of: _Tooltip_stories__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Component to provide hint information to other components like buttons and action items."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "source",
      children: "Source"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/rdkcentral/Lightning-UI-Components/blob/develop/packages/@lightningjs/ui-components/src/components/Tooltip/Tooltip.js",
        rel: "nofollow",
        children: "https://github.com/rdkcentral/Lightning-UI-Components/blob/develop/packages/@lightningjs/ui-components/src/components/Tooltip/Tooltip.js"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "usage",
      children: "Usage"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Tooltip"
      }), " can display a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "title"
      }), " and is added as a child to any component that needs hint text. It is positioned above the parent component using the property 'bottomMargin' and centered horizontally based on the parent's width:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-js",
        children: "import { Tooltip } from '@lightningjs/ui-components';\nimport Button from '../Button';\n\nclass Example extends lng.Component {\n  static _template() {\n    return {\n      Button: {\n        type: Button,\n        x: 200,\n        y: 100,\n        w: 410,\n        title: '+',\n        background: 'stroke',\n        Tooltip: {\n          type: Tooltip,\n          title: 'Add to My List!',\n          bottomMargin: 24\n        }\n      }\n    };\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "sizing",
      children: "Sizing"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The size of the tooltip is based on the length of it's 'title'. If the 'title' exceeds 400px the text wraps, and the background resizes to accomodate."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "focus",
      children: "Focus"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Tooltip is only visible on focus of the parent."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "api",
      children: "API"
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
            children: "default"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "description"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "delayVisible"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "undefined"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "the amount of time, in milliseconds, before the tooltip is displayed after being focused"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "timeVisible"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "undefined"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "the amount of time, in milliseconds, the tooltip is displayed before transitioning out of the display"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "title"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "undefined"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "text of tooltip content"
          })]
        })]
      })]
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
            children: "backgroundColor"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "background color of tooltip"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "marginBottom"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "space below tooltip"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "paddingX"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "space on left and right sides of tooltip text"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "paddingY"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "space above and below tooltip text"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "pointerWidth"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "width of point beneath rounded rectangle of tooltip"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "pointerHeight"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "height of point beneath rounded rectangle of tooltip"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "radius"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number | array"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "radius of tooltip corners"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "textStyle"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "string | object"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "text styles used for Tooltip's text"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "transition"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_utils__WEBPACK_IMPORTED_MODULE_5__/* .DocsLink */ .cY, {
              id: "lng.Transition"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "transition to apply to text"
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

/***/ "../../@lightningjs/ui-components/src/docs/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pg: () => (/* binding */ createModeControl),
/* harmony export */   cY: () => (/* binding */ DocsLink),
/* harmony export */   jb: () => (/* binding */ generateSubStory)
/* harmony export */ });
/* unused harmony exports nestedArgs, nestedArgTypes, prevValues, nestedArgActions, Item, ObjectFormat, GenericType */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/react/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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

/***/ "../../@lightningjs/ui-components/src/components/Tooltip/Tooltip.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Basic: () => (/* binding */ Basic),
  LongTitle: () => (/* binding */ LongTitle),
  WithButton: () => (/* binding */ WithButton),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ Tooltip_stories)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Tooltip/Tooltip.styles.js
var Tooltip_styles_namespaceObject = {};
__webpack_require__.r(Tooltip_styles_namespaceObject);
__webpack_require__.d(Tooltip_styles_namespaceObject, {
  base: () => (base),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Button/Button.js + 1 modules
var Button = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/Button.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/docs/utils.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/textures/Bubble.js
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


var Bubble = /*#__PURE__*/function (_lng$Texture) {
  function Bubble(stage) {
    var _this;
    _classCallCheck(this, Bubble);
    _this = _callSuper(this, Bubble, [stage]);
    _this._w = 0;
    _this._h = 0;
    _this._radius = 0;
    _this._pointerWidth = 0;
    _this._pointerHeight = 0;
    _this._strokeWidth = 0;
    _this._color = 'white';
    return _this;
  }
  _inherits(Bubble, _lng$Texture);
  return _createClass(Bubble, [{
    key: "w",
    get: function get() {
      return this._w;
    },
    set: function set(w) {
      this._w = w;
      this._changed();
    }
  }, {
    key: "h",
    get: function get() {
      return this._h;
    },
    set: function set(h) {
      this._h = h;
      this._changed();
    }
  }, {
    key: "radius",
    get: function get() {
      return this._radius;
    },
    set: function set(radius) {
      if (Array.isArray(radius)) {
        this._radius = new Array(4).fill().map(function (_, index) {
          return radius[index] || 0;
        });
      } else {
        this._radius = radius;
      }
      this._changed();
    }
  }, {
    key: "pointerWidth",
    get: function get() {
      return this._pointerWidth;
    },
    set: function set(pointerWidth) {
      this._pointerWidth = pointerWidth;
      this._changed();
    }
  }, {
    key: "pointerHeight",
    get: function get() {
      return this._pointerHeight;
    },
    set: function set(pointerHeight) {
      this._pointerHeight = pointerHeight;
      this._changed();
    }
  }, {
    key: "strokeWidth",
    get: function get() {
      return this._strokeWidth;
    },
    set: function set(strokeWidth) {
      this._strokeWidth = strokeWidth;
      this._changed();
    }
  }, {
    key: "color",
    get: function get() {
      return this._color;
    },
    set: function set(color) {
      this._color = lightning_esm/* default */.A.StageUtils.getRgbaString(color);
      this._changed();
    }
  }, {
    key: "createBubble",
    value: function createBubble(_ref) {
      var stage = _ref.stage,
        _ref$w = _ref.w,
        w = _ref$w === void 0 ? 0 : _ref$w,
        _ref$h = _ref.h,
        h = _ref$h === void 0 ? 0 : _ref$h,
        _ref$radius = _ref.radius,
        radius = _ref$radius === void 0 ? 0 : _ref$radius,
        _ref$pointerWidth = _ref.pointerWidth,
        pointerWidth = _ref$pointerWidth === void 0 ? 0 : _ref$pointerWidth,
        _ref$pointerHeight = _ref.pointerHeight,
        pointerHeight = _ref$pointerHeight === void 0 ? 0 : _ref$pointerHeight,
        _ref$strokeWidth = _ref.strokeWidth,
        strokeWidth = _ref$strokeWidth === void 0 ? 1 : _ref$strokeWidth,
        _ref$color = _ref.color,
        color = _ref$color === void 0 ? 'white' : _ref$color;
      var canvas = stage.platform.getDrawingCanvas();
      var ctx = canvas.getContext('2d');
      canvas.width = w + strokeWidth + 4;
      canvas.height = h + strokeWidth + 4;
      ctx.imageSmoothingEnabled = true;
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.lineWidth = strokeWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      var initialCoord = 0.5 * strokeWidth + 1;
      var leftX = initialCoord;
      var rightX = leftX + w;
      var topY = initialCoord;
      var bottomY = topY + h;
      var bottomBubbleY = bottomY - pointerHeight;
      var isRadiusAnArray = Array.isArray(radius);
      // start: top left
      ctx.beginPath();
      ctx.moveTo(leftX + (isRadiusAnArray ? radius[0] : radius), topY);
      // top side
      ctx.lineTo(rightX - (isRadiusAnArray ? radius[0] : radius), topY);
      // top right corner
      ctx.arcTo(rightX, topY, rightX, topY + (isRadiusAnArray ? radius[1] : radius), isRadiusAnArray ? radius[1] : radius);

      // right side
      ctx.lineTo(rightX, bottomBubbleY - (isRadiusAnArray ? radius[2] : radius));

      // bottom right corner
      ctx.arcTo(rightX, bottomBubbleY, rightX - (isRadiusAnArray ? radius[2] : radius), bottomBubbleY, isRadiusAnArray ? radius[2] : radius);

      // bottom side, right of point
      ctx.lineTo(w / 2 + pointerWidth / 2, bottomBubbleY);

      // point
      ctx.arcTo(w / 2, bottomY, w / 2 - pointerWidth / 2, bottomBubbleY, 2);
      ctx.lineTo(w / 2 - pointerWidth / 2, bottomBubbleY);

      // bottom side, left of point
      ctx.lineTo(leftX + (isRadiusAnArray ? radius[3] : radius), bottomBubbleY);

      // bottom left corner
      ctx.arcTo(leftX, bottomBubbleY, leftX, bottomBubbleY - (isRadiusAnArray ? radius[3] : radius), isRadiusAnArray ? radius[3] : radius);

      // left side
      ctx.lineTo(leftX, topY + (isRadiusAnArray ? radius[0] : radius));

      // top left corner
      ctx.arcTo(leftX, topY, leftX + (isRadiusAnArray ? radius[0] : radius), topY, isRadiusAnArray ? radius[0] : radius);

      // draw shape and fill with color
      ctx.stroke();
      ctx.fill();
      return canvas;
    }
  }, {
    key: "_getLookupId",
    value: function _getLookupId() {
      var w = this.w,
        h = this.h,
        radius = this.radius,
        pointerWidth = this.pointerWidth,
        pointerHeight = this.pointerHeight,
        color = this.color;
      return "__bubble_".concat(w, "x").concat(h, "_radius-").concat(radius, "_pointer-").concat(pointerWidth, "x").concat(pointerHeight, "_fill-").concat(color);
    }
  }, {
    key: "_getSourceLoader",
    value: function _getSourceLoader() {
      var _this2 = this;
      return function (cb) {
        cb(null, {
          source: _this2.createBubble(_this2)
        });
      };
    }
  }]);
}(lightning_esm/* default */.A.Texture);

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.js + 1 modules
var TextBox = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Tooltip/Tooltip.styles.js
function Tooltip_styles_typeof(o) { "@babel/helpers - typeof"; return Tooltip_styles_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Tooltip_styles_typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = Tooltip_styles_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function Tooltip_styles_toPropertyKey(t) { var i = Tooltip_styles_toPrimitive(t, "string"); return "symbol" == Tooltip_styles_typeof(i) ? i : i + ""; }
function Tooltip_styles_toPrimitive(t, r) { if ("object" != Tooltip_styles_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Tooltip_styles_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
    marginBottom: theme.spacer.xl,
    paddingX: theme.spacer.lg,
    paddingY: theme.spacer.md,
    pointerWidth: theme.spacer.xxl,
    pointerHeight: theme.spacer.lg,
    radius: theme.radius.sm,
    textStyle: _objectSpread(_objectSpread({}, theme.typography.body3), {}, {
      textColor: theme.color.textInverse
    }),
    transition: theme.animation.utility // TODO: should delay and duration be xfast?
  };
};
var tone = function tone(theme) {
  return {
    neutral: {
      backgroundColor: theme.color.fillNeutral,
      textStyle: {
        textColor: theme.color.textInverse
      }
    },
    inverse: {
      backgroundColor: theme.color.fillInverse,
      textStyle: {
        textColor: theme.color.textNeutral
      }
    },
    brand: {
      backgroundColor: theme.color.fillBrand,
      textStyle: {
        textColor: theme.color.textNeutral
      }
    }
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var src_utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Tooltip/Tooltip.js
function Tooltip_typeof(o) { "@babel/helpers - typeof"; return Tooltip_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Tooltip_typeof(o); }
function Tooltip_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function Tooltip_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, Tooltip_toPropertyKey(o.key), o); } }
function Tooltip_createClass(e, r, t) { return r && Tooltip_defineProperties(e.prototype, r), t && Tooltip_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function Tooltip_callSuper(t, o, e) { return o = Tooltip_getPrototypeOf(o), Tooltip_possibleConstructorReturn(t, Tooltip_isNativeReflectConstruct() ? Reflect.construct(o, e || [], Tooltip_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function Tooltip_possibleConstructorReturn(t, e) { if (e && ("object" == Tooltip_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return Tooltip_assertThisInitialized(t); }
function Tooltip_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function Tooltip_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (Tooltip_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropSet(t, e, o, r, p, f) { return _set(Tooltip_getPrototypeOf(f ? t.prototype : t), e, o, r, p); }
function set(e, r, t, o) { return set = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function (e, r, t, o) { var f, i = _superPropBase(e, r); if (i) { if ((f = Object.getOwnPropertyDescriptor(i, r)).set) return f.set.call(o, t), !0; if (!f.writable) return !1; } if (f = Object.getOwnPropertyDescriptor(o, r)) { if (!f.writable) return !1; f.value = t, Object.defineProperty(o, r, f); } else Tooltip_defineProperty(o, r, t); return !0; }, set(e, r, t, o); }
function _set(e, r, t, o, f) { if (!set(e, r, t, o || e) && f) throw new TypeError("failed to set property"); return t; }
function Tooltip_defineProperty(e, r, t) { return (r = Tooltip_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function Tooltip_toPropertyKey(t) { var i = Tooltip_toPrimitive(t, "string"); return "symbol" == Tooltip_typeof(i) ? i : i + ""; }
function Tooltip_toPrimitive(t, r) { if ("object" != Tooltip_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Tooltip_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = Tooltip_getPrototypeOf(t));); return t; }
function Tooltip_getPrototypeOf(t) { return Tooltip_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, Tooltip_getPrototypeOf(t); }
function Tooltip_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && Tooltip_setPrototypeOf(t, e); }
function Tooltip_setPrototypeOf(t, e) { return Tooltip_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, Tooltip_setPrototypeOf(t, e); }
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






var Tooltip = /*#__PURE__*/function (_Base) {
  function Tooltip() {
    Tooltip_classCallCheck(this, Tooltip);
    return Tooltip_callSuper(this, Tooltip, arguments);
  }
  Tooltip_inherits(Tooltip, _Base);
  return Tooltip_createClass(Tooltip, [{
    key: "_update",
    value: function _update() {
      this._updateText();
      this._updateBackground();
    }
  }, {
    key: "_updateText",
    value: function _updateText() {
      if (this._Text) {
        this._Text.patch({
          content: this.title,
          style: {
            textStyle: this.style.textStyle
          }
        });
      }
    }
  }, {
    key: "_textLoaded",
    value: function _textLoaded() {
      this._updateBackgroundHeight();
      this._updateTextPosition();
    }

    /**
     * patches Background prop updates
     */
  }, {
    key: "_updateBackground",
    value: function _updateBackground() {
      this.patch({
        Background: {
          texture: {
            type: Bubble,
            w: this._Background.w,
            h: this._Background.h,
            radius: (0,src_utils/* getMaxRoundRadius */.XG)(this.style.radius, this._Background.w - this.style.pointerHeight, this._Background.h - this.style.pointerHeight),
            pointerWidth: this.style.pointerWidth,
            pointerHeight: this.style.pointerHeight,
            color: this.style.backgroundColor
          }
        }
      });
    }

    /**
     * updates height of background when text height or width is changed
     */
  }, {
    key: "_updateBackgroundHeight",
    value: function _updateBackgroundHeight() {
      var backgroundH = this._Text.finalH + this.style.paddingY * 2 + this.style.pointerHeight;
      var backgroundW = this._Text.finalW + this.style.paddingX * 2;
      this.patch({
        w: backgroundW,
        h: backgroundH,
        mountY: 1,
        y: -this.style.marginBottom,
        Background: {
          w: backgroundW,
          h: backgroundH,
          texture: {
            type: Bubble,
            w: backgroundW,
            h: backgroundH
          }
        }
      });
    }
  }, {
    key: "_updateTextPosition",
    value: function _updateTextPosition() {
      if (this._Text) {
        this._Text.patch({
          mount: 0.5,
          x: this._Background.w / 2,
          y: (this._Background.h - this.style.pointerHeight) / 2
        });
      }
    }
  }, {
    key: "_clearTimers",
    value: function _clearTimers() {
      clearTimeout(this._hideTimer);
      clearTimeout(this._showTimer);
    }
  }, {
    key: "_transitionIn",
    value: function _transitionIn() {
      var _this = this;
      var smooth = {
        smooth: {
          alpha: [1, this.style.transition],
          scale: [1, this.style.transition]
        }
      };
      if (this.delayVisible) {
        this._showTimer = setTimeout(function () {
          _this.patch({
            smooth: smooth
          });
        }, this.delayVisible);
      } else {
        this._showTimer = undefined;
        this.patch({
          smooth: smooth
        });
      }
      this._hideTimer = this.timeVisible ? setTimeout(function () {
        _this._unfocus();
      }, this.timeVisible + (this.delayVisible || 0)) : undefined;
    }
  }, {
    key: "_transitionOut",
    value: function _transitionOut() {
      this.patch({
        smooth: {
          alpha: [0, this.style.transition],
          scale: [0.5, this.style.transition]
        }
      });
    }
  }, {
    key: "_focus",
    value: function _focus() {
      this._clearTimers();
      this._transitionIn();
    }
  }, {
    key: "_unfocus",
    value: function _unfocus() {
      this._clearTimers();
      this._transitionOut();
    }
  }, {
    key: "announce",
    get: function get() {
      return this._announce || this._Text && this._Text.announce;
    },
    set: function set(announce) {
      _superPropSet(Tooltip, "announce", announce, this, 1, 1);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'Tooltip';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Tooltip_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      return {
        alpha: 0,
        scale: 0.5,
        mountX: 0.5,
        x: function x(w) {
          return w / 2;
        },
        Background: {
          Text: {
            type: TextBox/* default */.A,
            signals: {
              textBoxChanged: '_textLoaded'
            }
          }
        }
      };
    }
  }, {
    key: "properties",
    get: function get() {
      return ['title', 'delayVisible', 'timeVisible'];
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Background', {
        name: 'Text',
        path: 'Background.Text'
      }];
    }
  }, {
    key: "aliasStyles",
    get: function get() {
      return [{
        prev: 'pointerH',
        curr: 'pointerHeight'
      }, {
        prev: 'pointerW',
        curr: 'pointerWidth'
      }];
    }
  }]);
}(Base/* default */.A);

;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Tooltip/Tooltip.stories.js
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





/* harmony default export */ const Tooltip_stories = ({
  title: 'Components/Tooltip',
  args: {
    title: 'Tooltip',
    delayVisible: 0,
    timeVisible: 0,
    mode: 'focused'
  },
  argTypes: {
    ...(0,utils/* createModeControl */.Pg)({
      options: ['focused'],
      summaryValue: 'focused'
    }),
    title: {
      control: 'text',
      description: 'Text content of tooltip',
      table: {
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    delayVisible: {
      control: 'number',
      description: 'Start with unfocused mode and set the delay value in milliseconds, now change the mode to focused to see the required changes',
      table: {
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    timeVisible: {
      control: 'number',
      description: 'Start with unfocused mode and set the time value in milliseconds, now change the mode to focused to see the required changes',
      table: {
        defaultValue: {
          summary: 'undefined'
        }
      }
    }
  }
});
const sharedArgActions = {
  argActions: {
    delayVisible: (delayVisible, component) => {
      component.tag('Tooltip').delayVisible = delayVisible;
    },
    timeVisible: (timeVisible, component) => {
      component.tag('Tooltip').timeVisible = timeVisible;
    }
  }
};
const Basic = args => class Basic extends lightning_esm/* default */.A.Component {
  static _template() {
    return {
      Tooltip: {
        type: Tooltip,
        x: 1280 / 2,
        delayVisible: args.delayVisible,
        timeVisible: args.timeVisible
      }
    };
  }
};
Basic.parameters = {
  ...sharedArgActions
};
const LongTitle = Basic.bind({});
LongTitle.args = {
  title: 'This is a long message. Text will remain on a single line and does not have a maximum width'
};
LongTitle.parameters = {
  ...sharedArgActions
};
const WithButton = args => class WithButton extends lightning_esm/* default */.A.Component {
  static _template() {
    return {
      Button: {
        type: class extends Button/* default */.A {
          _getFocused() {
            return this.childList.getByRef('Tooltip');
          }
        },
        x: 200,
        y: 100,
        title: 'Button',
        backgroundType: 'stroke',
        Tooltip: {
          type: Tooltip,
          title: args.title,
          delayVisible: args.delayVisible,
          timeVisible: args.timeVisible
        }
      }
    };
  }
};
WithButton.args = {};
WithButton.parameters = {
  argActions: {
    title: (title, component) => {
      component.tag('Button.Tooltip').title = title;
    },
    delayVisible: (delayVisible, component) => {
      component.tag('Button.Tooltip').delayVisible = delayVisible;
    },
    timeVisible: (timeVisible, component) => {
      component.tag('Button.Tooltip').timeVisible = timeVisible;
    }
  }
};
;
const __namedExportsOrder = ["Basic", "LongTitle", "WithButton"];
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "args => class Basic extends lng.Component {\n  static _template() {\n    return {\n      Tooltip: {\n        type: TooltipComponent,\n        x: 1280 / 2,\n        delayVisible: args.delayVisible,\n        timeVisible: args.timeVisible\n      }\n    };\n  }\n}",
      ...Basic.parameters?.docs?.source
    }
  }
};
LongTitle.parameters = {
  ...LongTitle.parameters,
  docs: {
    ...LongTitle.parameters?.docs,
    source: {
      originalSource: "args => class Basic extends lng.Component {\n  static _template() {\n    return {\n      Tooltip: {\n        type: TooltipComponent,\n        x: 1280 / 2,\n        delayVisible: args.delayVisible,\n        timeVisible: args.timeVisible\n      }\n    };\n  }\n}",
      ...LongTitle.parameters?.docs?.source
    }
  }
};
WithButton.parameters = {
  ...WithButton.parameters,
  docs: {
    ...WithButton.parameters?.docs,
    source: {
      originalSource: "args => class WithButton extends lng.Component {\n  static _template() {\n    return {\n      Button: {\n        type: class extends Button {\n          _getFocused() {\n            return this.childList.getByRef('Tooltip');\n          }\n        },\n        x: 200,\n        y: 100,\n        title: 'Button',\n        backgroundType: 'stroke',\n        Tooltip: {\n          type: TooltipComponent,\n          title: args.title,\n          delayVisible: args.delayVisible,\n          timeVisible: args.timeVisible\n        }\n      }\n    };\n  }\n}",
      ...WithButton.parameters?.docs?.source
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
//# sourceMappingURL=components-Tooltip-Tooltip-mdx.0cd16b62.iframe.bundle.js.map