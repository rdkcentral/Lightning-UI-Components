(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[2851],{

/***/ "../../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BN: () => (/* binding */ MDXContext),
/* harmony export */   RP: () => (/* binding */ useMDXComponents),
/* harmony export */   gz: () => (/* binding */ withMDXComponents),
/* harmony export */   xA: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/react/index.js");
/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('mdx/types.js').MDXComponents} Components
 *
 * @typedef Props
 *   Configuration.
 * @property {Components | MergeComponents | null | undefined} [components]
 *   Mapping of names for JSX components to React components.
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context.
 * @property {ReactNode | null | undefined} [children]
 *   Children.
 *
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Components} currentComponents
 *   Current components from the context.
 * @returns {Components}
 *   Merged components.
 */



/**
 * @type {import('react').Context<Components>}
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components and
 *   `MDXProvider` to set context based components instead.
 */
const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({})

/**
 * @param {import('react').ComponentType<any>} Component
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components instead.
 */
function withMDXComponents(Component) {
  return boundMDXComponent

  /**
   * @param {Record<string, unknown> & {components?: Components | null | undefined}} props
   * @returns {JSX.Element}
   */
  function boundMDXComponent(props) {
    const allComponents = useMDXComponents(props.components)
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, {...props, allComponents})
  }
}

/**
 * Get current components from the MDX Context.
 *
 * @param {Components | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that takes the current
 *   components and filters/merges/changes them.
 * @returns {Components}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    // Custom merge via a function prop
    if (typeof components === 'function') {
      return components(contextComponents)
    }

    return {...contextComponents, ...components}
  }, [contextComponents, components])
}

/** @type {Components} */
const emptyObject = {}

/**
 * Provider for MDX context
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
function MDXProvider({components, children, disableParentContext}) {
  /** @type {Components} */
  let allComponents

  if (disableParentContext) {
    allComponents =
      typeof components === 'function'
        ? components({})
        : components || emptyObject
  } else {
    allComponents = useMDXComponents(components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    children
  )
}


/***/ }),

/***/ "../../@lightningjs/ui-components/src/docs/ThemingExtensions.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ThemingExtensions)
});

// EXTERNAL MODULE: ../../../node_modules/react/index.js
var react = __webpack_require__("../../../node_modules/react/index.js");
// EXTERNAL MODULE: ../../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../../node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ../../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("../../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ../../../node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("../../../node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/assets/images/ExtensionProgressBar.png
const ExtensionProgressBar_namespaceObject = __webpack_require__.p + "static/media/ExtensionProgressBar.c42e9d74.png";
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/docs/ThemingExtensions.mdx



/*@jsxRuntime automatic @jsxImportSource react*/
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
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    code: "code",
    a: "a",
    h3: "h3",
    blockquote: "blockquote",
    strong: "strong",
    pre: "pre",
    h2: "h2",
    h5: "h5"
  }, (0,lib/* useMDXComponents */.RP)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: ["\n", "\n", "\n", (0,jsx_runtime.jsx)(dist/* Meta */.W8, {
      title: "Docs / Theming/ Extensions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "extensions",
      children: "Extensions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The component library cannot account for every design imaginable. That's where extensions come in. Extensions are exported functions that return a class. They allow users to add functionality to components without having to make the components from scratch themselves."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For example, let's say a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tile"
      }), " element needs to have a certain feature. An extension containing that feature can be created and added to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tile"
      }), " element without the developer having to make an entirely new component."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Overall, extensions make LUI as flexible with ", (0,jsx_runtime.jsx)(_components.a, {
        href: "?path=/docs/docs-theming-overview--docs",
        children: "theming"
      }), " as possible."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "withextensions-mixin",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "withExtensions"
      }), " Mixin"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Extensions follow a similar structure as mixins. Mixins return classes with added functionality without needing to create a new, standalone class that inherits from another. They make it so that functions that are often used can be quickly applied across components just by nesting the component in a mixin. In this way, mixins also simplify the amount of code in the component(s)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "withExtensions"
      }), " mixin, specifically, contains functions that allow for the use of extensions in every component. In order to take advantage of the ability to use extensions, components must have the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "withExtensions"
      }), " mixin applied to it."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " All LUI components already have the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "withExtensions"
        }), " mixin applied."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The example below shows how the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "withExtensions"
      }), " mixin is used on the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProgressBar"
      }), " component."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "export default withExtensions(ProgressBar);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "To reiterate, extensions are a way to modify any component at runtime using ES6 class inheritance patterns and apply that change easily across your entire application."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-apply-an-extension",
      children: "How to Apply an Extension"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-create-the-extension",
      children: "1. Create the extension"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For instance:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "export default function textAdditionExtension(Base) {\n  return class extends Base {\n    _update() {\n      this.patch({\n        ExtensionAdded: {\n          type: TextBox,\n          content: 'Extension Applied!',\n          style: {\n            offsetY: 50\n          }\n        }\n      });\n      super._update();\n    }\n  };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This example code extension will add a text box displaying 'Extension Applied!' to all the components the extension is applied to."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-determine-which-themes-and-components-to-apply-the-extension-to",
      children: "2. Determine which theme(s) and component(s) to apply the extension to"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Now that we have the extension defined, we can apply the extension to components in our desired theme(s). We'll have to generate an array of objects containing the component(s) we want to add the extension to as well as the extension itself."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Let's say we have a theme called 'customTheme' and we want to apply our newly created extension, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "textAdditionExtension"
      }), ", to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProgressBar"
      }), " component. Our theme file where we define all our theme properties might look something like:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "customthemeindexjs",
      children: "./customTheme/index.js"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "import textAdditionExtension from '../../extensions/textAddition.extension';\n\nexport default {\n  name: 'customTheme',\n  ...\n  extension: [\n    {\n      targetComponent: ['ProgressBar'],\n      extension: textAdditionExtension\n    }\n  ]\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Note: Extensions can be written in a file on its own.\nIn doing so, you would just need to export the array and import the file into the theme rather than the specific extension displayed above."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "3-make-sure-to-call-contextsettheme-or-contextupdatetheme",
      children: ["3. Make sure to call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "context.setTheme()"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "context.updateTheme()"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Although we've added the extension to our theme, it isn't truly applied until we set the theme that has our extension or call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "updateTheme"
      }), " on the extension property."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "That is, we must call:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "context.setTheme(customTheme);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "or"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "context.updateTheme({ extensions: textAdditionExtension });\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After doing all three steps, for our example, we should see a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProgressBar"
      }), " with text below it saying 'Extension Applied!' as displayed below:"]
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: ExtensionProgressBar_namespaceObject,
      alt: "Progress Bar with 'Extension Applied!' text below",
      width: "600"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-cases-outside-of-ui-enhancements",
      children: "Use Cases Outside of UI Enhancements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "There are many use cases for extensions since it's all about adding functionality to different components. This provides a fully customizable experience."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Below are some specific examples that extensions can be used for:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "metrics",
      children: "Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Extensions can be used to toggle metrics collection."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For example, let's say we want to collect how often users focus on certain movie ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tiles"
      }), " to understand the general genre of interest among the audience. We can write all the functionality of detecting how many times the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tile"
      }), " elements are being put into focus state and apply that to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tile"
      }), " components. As easy as we can apply the extension, we can just as easily remove the extension when we're done with metrics collection."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ab-testing",
      children: "A/B Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Another potential use of extensions is for A/B testing. If you're unfamiliar with A/B testing, it is also known as \"split testing.\" It's a randomized experiment that explores how users view two or more variations of a component at the same time (often a control - the original and the variation)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For our case, extensions can help us do A/B testing on, say, a new feature of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tile"
      }), " or a potential new look to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tile"
      }), ". For example, let's say we want to gauge if making the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tile"
      }), " components more vibrant in color would increase engagement. We can patch an update to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tile"
      }), "'s colors in our extension. During testing, we can then apply the extension at theme level to random users and test to see if there are more interactions with the vibrant colored ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tile"
      }), " components."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If we find through A/B testing, the results are not in favor of the vibrant colored ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tile"
      }), " components, we can easily discard our extension and move forward since we didn't have to touch the core code."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "things-to-keep-in-mind",
      children: "Things to Keep in Mind"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "super_update",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "super._update()"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If we consider extensions as the child of the existing component it builds off, the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "super"
      }), " keyword allows us to access the properties and methods in the existing/parent component. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_update"
      }), " method is an extremely important lifecycle event since it ensures everything is up to date. Together, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "super._update()"
      }), " grants us access to the entire ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_update"
      }), " lifecycle event of the parent component."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For that reason, most often, we would want to include ", (0,jsx_runtime.jsx)(_components.code, {
        children: "super._update()"
      }), " within our extension's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_update"
      }), " lifecycle event. This way we ensure our extension functions are applying to the most up to date component."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["On the other hand, if we want to update the existing functions within the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_update"
      }), " lifecycle event in the parent component, then that's when we wouldn't call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "super._update()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "_extensioncleanup",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "_extensionCleanup()"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_extensionCleanup"
      }), " method is used to remove extension-specific logic when swapping themes or changing extensions at runtime. This method is automatically called by the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "withExtensions"
      }), " mixin when \"resetting\" a component."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An example is provided below, specifically for our ", (0,jsx_runtime.jsx)(_components.code, {
        children: "textAdditionExtension"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "_extensionCleanup() {\n  this.patch({ ExtensionAdded: undefined });\n  super._extensionCleanup && super._extensionCleanup();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "order-matters",
      children: "Order Matters!"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Extensions are applied top to bottom. That is, the first extension in the extensions array will be added first, then the second one, and so on."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "import { focusRingExtension } from '../../extensions/FocusRing.extension';\nimport textAdditionExtension from '../../extensions/textAddition.extension';\n\nexport default [\n  {\n    targetComponent: ['ProgressBar'],\n    extension: focusRingExtension\n  },\n  {\n    targetComponent: ['ProgressBar'],\n    extension: textAdditionExtension\n  }\n];\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In this example, the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "focusRingExtension"
      }), " would be applied to the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProgressBar"
      }), " component first and then the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "textAdditionExtension"
      }), " would be applied."]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.RP)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const ThemingExtensions = (MDXContent);


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

/***/ }),

/***/ "../../../node_modules/react/cjs/react-jsx-runtime.production.min.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__("../../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ "../../../node_modules/react/jsx-runtime.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__("../../../node_modules/react/cjs/react-jsx-runtime.production.min.js");
} else {}


/***/ })

}]);
//# sourceMappingURL=docs-ThemingExtensions-mdx.dd074d5d.iframe.bundle.js.map