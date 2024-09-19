(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[7190],{

/***/ "../../@lightningjs/ui-components/src/docs/ThemingHierarchy.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXContent)
});

// EXTERNAL MODULE: ../../../node_modules/react/index.js
var react = __webpack_require__("../../../node_modules/react/index.js");
// EXTERNAL MODULE: ../../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../../node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ../../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("../../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ../../../node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("../../../node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/assets/images/Flowchart.png
const Flowchart_namespaceObject = __webpack_require__.p + "static/media/Flowchart.9f06dc94.png";
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/docs/ThemingHierarchy.mdx



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
    em: "em",
    h1: "h1",
    h2: "h2",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: ["\n", "\n", "\n", (0,jsx_runtime.jsx)(dist/* Meta */.W8, {
      title: "Docs / Theming/ Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "theming-hierarchy",
      children: "Theming Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: Flowchart_namespaceObject,
      alt: "",
      width: "600"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The above flowchart serves to demonstrate how the different theming-related concepts covered in previous documentation come together to build the final styles for each component."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "component-style-file",
      children: "Component Style File"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A component's style file can consist of a base style object, a ", (0,jsx_runtime.jsx)(_components.a, {
        href: "?path=/docs/docs-theming-tones--docs",
        children: "tone style object"
      }), ", and a ", (0,jsx_runtime.jsx)(_components.a, {
        href: "?path=/docs/docs-theming-modes--docs",
        children: "mode style object"
      }), ". These three objects are deep merged, in that order, to create a single style object that serves as the foundation for the final component style object."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "themes-componentconfig",
      children: ["Theme's ", (0,jsx_runtime.jsx)(_components.em, {
        children: "componentConfig"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Themes can have a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "componentConfig"
      }), " object that has nested component style objects, which serve to override any styles from component style files. The objects nested within ", (0,jsx_runtime.jsx)(_components.code, {
        children: "componentConfig"
      }), " must have keys matching the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "__componentName"
      }), " of the target components. These are deep merged with the results from each of those files."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "in-line-component-style-overrides",
      children: "In-line Component Style Overrides"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When utilizing components within your application, you can use ", (0,jsx_runtime.jsx)(_components.a, {
        href: "?path=/docs/utilities-withthemestyles--docs",
        children: "withThemeStyles"
      }), " to override particular style values in just that use case. Those custom styles are deep-merged with the resulting object from the previous steps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "extensions",
      children: "Extensions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Any extensions that target a component will be applied after the in-line component style overrides. This creates the final style object which will be referenced by the component via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this.style"
      }), "."]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
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
//# sourceMappingURL=docs-ThemingHierarchy-mdx.ab9d2766.iframe.bundle.js.map