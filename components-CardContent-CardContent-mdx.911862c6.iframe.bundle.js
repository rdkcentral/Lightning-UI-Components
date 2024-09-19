(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[5225,2513],{

/***/ "../../@lightningjs/ui-components/src/components/CardContent/CardContent.mdx":
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
/* harmony import */ var _CardContent_stories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/components/CardContent/CardContent.stories.js");
/* harmony import */ var _Card_Card_stories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Card/Card.stories.js");



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
      of: _CardContent_stories__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Description */ .VY, {
      of: _CardContent_stories__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "source",
      children: "Source"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/rdkcentral/Lightning-UI-Components/tree/develop/packages/%40lightningjs/ui-components/src/components/CardContent",
        rel: "nofollow",
        children: "https://github.com/rdkcentral/Lightning-UI-Components/tree/develop/packages/%40lightningjs/ui-components/src/components/CardContent"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "usage",
      children: "Usage"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Allows objects to be passed in that reflect the properties available in 'Tile' and 'MetadataCardContent'."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-js",
        children: "import { CardContent } from '@lightningjs/ui-components';\n\nclass Basic extends lng.Component {\n  static _template() {\n    return {\n      CardContent: {\n        type: CardContent\n      }\n    };\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "parent-componet-properties",
      children: "Parent Componet Properties"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "CardContent"
      }), " extends ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Card"
      }), " therefore shares same properties"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .ArgTypes */ .ov, {
      of: _Card_Card_stories__WEBPACK_IMPORTED_MODULE_5__.Card,
      exclude: ['mode']
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "properties",
      children: "Properties"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["In addition the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Card"
      }), " properties, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "CardContent"
      }), " has the following properties:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .ArgTypes */ .ov, {
      of: _CardContent_stories__WEBPACK_IMPORTED_MODULE_4__.CardContent,
      exclude: ['mode']
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
            children: "string"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "color of the card"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "expandedWidth"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "the desired width of the card when in the fully expanded (not collapsed) mode"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "expandedHeight"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "the desired height of the card when in the fully expanded (not collapsed) mode"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "imageSize"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "{w, h}"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "the desired width and height the image in the card"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "metadata"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "string | object"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "text style for the metadata"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "paddingHorizontal"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "padding on the x-axis between the right and left of the card and its content"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "paddingVertical"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "padding on the y-axis between the top and bottom of the card and its content"
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

/***/ "../../@lightningjs/ui-components/src/components/Card/Card.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: () => (/* binding */ Card),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _docs_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Card/Card.js");
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
  title: 'Components/Card/Card'
});
const Card = args => class Card extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Card: {
        title: args.title,
        type: _Card__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A
      }
    };
  }
};
Card.args = {
  title: 'Title',
  mode: 'focused'
};
Card.argTypes = {
  ...(0,_docs_utils__WEBPACK_IMPORTED_MODULE_2__/* .createModeControl */ .Pg)({
    summaryValue: Card.args.mode
  }),
  title: {
    control: 'text',
    description: 'Title text',
    table: {
      defaultValue: {
        summary: 'undefined'
      },
      type: {
        summary: 'string'
      }
    }
  }
};
;
const __namedExportsOrder = ["Card"];
Card.parameters = {
  ...Card.parameters,
  docs: {
    ...Card.parameters?.docs,
    source: {
      originalSource: "args => class Card extends lng.Component {\n  static _template() {\n    return {\n      Card: {\n        title: args.title,\n        type: CardComponent\n      }\n    };\n  }\n}",
      ...Card.parameters?.docs?.source
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
//# sourceMappingURL=components-CardContent-CardContent-mdx.911862c6.iframe.bundle.js.map