"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[2834],{

/***/ "../../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NF: () => (/* binding */ withMDXComponents),
/* harmony export */   Zo: () => (/* binding */ MDXProvider),
/* harmony export */   ah: () => (/* binding */ useMDXComponents),
/* harmony export */   pC: () => (/* binding */ MDXContext)
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

/***/ "./src/Readme.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Readme)
});

// EXTERNAL MODULE: ../../../node_modules/react/index.js
var react = __webpack_require__("../../../node_modules/react/index.js");
// EXTERNAL MODULE: ../../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../../node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ../../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("../../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ../../../node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("../../../node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ../../../README.md?raw
const READMEraw_namespaceObject = "﻿<!--\n  Copyright 2023 Comcast Cable Communications Management, LLC\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n  http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n  SPDX-License-Identifier: Apache-2.0\n-->\n\n# Lightning UI\n\nThis library contains shared Lightning components, you can view our live [Storybook documentation](https://rdkcentral.github.io/Lightning-UI-Components/) to learn more about each component and how to leverage them in your application.\n\nIn order to facilitate the development process for our theming architecture we have converted this project into a monorepo using Yarn workspaces. This allows engineers to work across multiple packages without the need for `npm link` or `yarn link`. This also has some other benefits including easy visibility across different @lightningjs/ui packages, standardization, and better release management.\n\nThree packages are currently maintained and released from this project.\n\n- @lightningjs/ui-components\n- @lightningjs/ui-components-test-utils\n- @lightningjs/ui-components-theme-base\n\n## Local Development\n\nTo run the repository locally, run:\n\n```\nyarn install\nyarn start\n```\n\nThis will launch Storybook at [http://localhost:8000/](http://localhost:8000/).\n\n## Peer Dependencies\n\n`@lightningjs/ui-components` has a peer dependency on `@lightningjs/core^2.x`. If you are stuck using the _old Lightning_, i.e. `wpe-lightning^1.x`, you will need to alias `@lightningjs/core` in your build process. If you are bundling your app using [Webpack](https://webpack.js.org/), you should add this to your config:\n\n```js\n// in webpack.config.js\nmodule.exports = {\n  resolve: {\n    alias: {\n      '@lightningjs/core': path.resolve(__dirname, 'node_modules/wpe-lightning')\n    }\n  }\n};\n```\n\n> **NOTE:** aliasing `@lightningjs/core` to point to `wpe-lightning` is _not_ guaranteed to work with everything! Consider updating your Lightning library as soon as possible.\n\n## Installation\n\nInstall from NPM:\n\n```bash\nnpm install --save @lightningjs/ui-components\n```\n\n`@lightningjs/ui-components` has a peer dependency on the [Lightning package](https://www.npmjs.com/package/@lightningjs/core)\n\n```sh\nnpm install -S @lightningjs/ui @lightningjs/core\n```\n\n## Usage\n\nYou should import components using ES6 named imports, like so:\n\n```js\n// App.js\nimport lng from '@lightningjs/core';\nimport { Button } from '@lightningjs/ui-components';\n```\n\nYou should NOT use path imports like this:\n\n```js\n// Do not use\nimport Button from '@lightningjs/ui-components/components/Button';\n```\n\nSince packages are now bundled with rollup this allows proper tree shaking behavior. For more information on tree shaking the `@material/ui` documentation has a great guide on [development bundle size](https://material-ui.com/guides/minimizing-bundle-size/) (**note**: this is external documentation otherwise unrelated to this project!).\n\nUse components in your application\n\n```js\nimport { FocusManager } from '@lightningjs/ui-components';\n\nclass MyComponent extends lng.Component {\n  static _template() {\n    return {\n      FocusManager: {\n        type: FocusManager,\n        direction: 'row',\n        children: []\n      }\n    };\n  }\n  _getFocused() {\n    return this.tag('FocusManager');\n  }\n}\n```\n\n## Questions???\n\nSubmit a GitHub Issue or [Join us on Slack](https://join.slack.com/t/lightning-community/shared_invite/zt-1q9ggb668-iTvnDyKYLhlM0dnJpoWcWw)!\n";
;// CONCATENATED MODULE: ./src/Readme.mdx



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
    a: "a",
    code: "code",
    ul: "ul",
    li: "li",
    h2: "h2",
    pre: "pre",
    em: "em",
    blockquote: "blockquote",
    strong: "strong"
  }, (0,lib/* useMDXComponents */.ah)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: ["\n", "\n", "\n", (0,jsx_runtime.jsx)(dist/* Meta */.h_, {
      title: "Docs/ Read Me"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "lightning-ui",
      children: "Lightning UI"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This library contains shared Lightning components, you can view our live ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://rdkcentral.github.io/Lightning-UI-Components/",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "Storybook documentation"
      }), " to learn more about each component and how to leverage them in your application."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In order to facilitate the development process for our theming architecture we have converted this project into a monorepo using Yarn workspaces. This allows engineers to work across multiple packages without the need for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "npm link"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "yarn link"
      }), ". This also has some other benefits including easy visibility across different @lightningjs/ui packages, standardization, and better release management."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Three packages are currently maintained and released from this project."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@lightningjs/ui-components"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@lightningjs/ui-components-test-utils"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "@lightningjs/ui-components-theme-base"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "local-development",
      children: "Local Development"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To run the repository locally, run:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "yarn install\nyarn start\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This will launch Storybook at ", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://localhost:8000/",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "http://localhost:8000/"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "peer-dependencies",
      children: "Peer Dependencies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@lightningjs/ui-components"
      }), " has a peer dependency on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@lightningjs/core^2.x"
      }), ". If you are stuck using the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "old Lightning"
      }), ", i.e. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "wpe-lightning^1.x"
      }), ", you will need to alias ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@lightningjs/core"
      }), " in your build process. If you are bundling your app using ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://webpack.js.org/",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "Webpack"
      }), ", you should add this to your config:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "// in webpack.config.js\nmodule.exports = {\n  resolve: {\n    alias: {\n      '@lightningjs/core': path.resolve(__dirname, 'node_modules/wpe-lightning')\n    }\n  }\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NOTE:"
        }), " aliasing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@lightningjs/core"
        }), " to point to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "wpe-lightning"
        }), " is ", (0,jsx_runtime.jsx)(_components.em, {
          children: "not"
        }), " guaranteed to work with everything! Consider updating your Lightning library as soon as possible."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "installation",
      children: "Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Install from NPM:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install --save @lightningjs/ui-components\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@lightningjs/ui-components"
      }), " has a peer dependency on the ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.npmjs.com/package/@lightningjs/core",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "Lightning package"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-sh",
        children: "npm install -S @lightningjs/ui @lightningjs/core\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "usage",
      children: "Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You should import components using ES6 named imports, like so:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "// App.js\nimport lng from '@lightningjs/core';\nimport { Button } from '@lightningjs/ui-components';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You should NOT use path imports like this:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "// Do not use\nimport Button from '@lightningjs/ui-components/components/Button';\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Since packages are now bundled with rollup this allows proper tree shaking behavior. For more information on tree shaking the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@material/ui"
      }), " documentation has a great guide on ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://material-ui.com/guides/minimizing-bundle-size/",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "development bundle size"
      }), " (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "note"
      }), ": this is external documentation otherwise unrelated to this project!)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use components in your application"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "import { FocusManager } from '@lightningjs/ui-components';\n\nclass MyComponent extends lng.Component {\n  static _template() {\n    return {\n      FocusManager: {\n        type: FocusManager,\n        direction: 'row',\n        children: []\n      }\n    };\n  }\n  _getFocused() {\n    return this.tag('FocusManager');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "questions",
      children: "Questions???"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Submit a GitHub Issue or ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://join.slack.com/t/lightning-community/shared_invite/zt-1q9ggb668-iTvnDyKYLhlM0dnJpoWcWw",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "Join us on Slack"
      }), "!"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const Readme = (MDXContent);


/***/ }),

/***/ "../../../node_modules/react/cjs/react-jsx-runtime.production.min.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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



if (true) {
  module.exports = __webpack_require__("../../../node_modules/react/cjs/react-jsx-runtime.production.min.js");
} else {}


/***/ })

}]);
//# sourceMappingURL=Readme-mdx.adf9473c.iframe.bundle.js.map