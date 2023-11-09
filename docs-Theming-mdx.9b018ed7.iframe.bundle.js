"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[6612],{

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

/***/ "../../@lightningjs/ui-components/src/docs/Theming.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Theming)
});

// EXTERNAL MODULE: ../../../node_modules/react/index.js
var react = __webpack_require__("../../../node_modules/react/index.js");
// EXTERNAL MODULE: ../../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../../node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ../../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__("../../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
// EXTERNAL MODULE: ../../../node_modules/@storybook/blocks/dist/index.mjs + 11 modules
var dist = __webpack_require__("../../../node_modules/@storybook/blocks/dist/index.mjs");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/assets/images/CustomThemeProgressBar.png
const CustomThemeProgressBar_namespaceObject = __webpack_require__.p + "static/media/CustomThemeProgressBar.82354c32.png";
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/assets/images/CustomProgressBar.png
const CustomProgressBar_namespaceObject = __webpack_require__.p + "static/media/CustomProgressBar.dd4b49fc.png";
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/docs/Theming.mdx



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
    h2: "h2",
    ol: "ol",
    li: "li",
    code: "code",
    h3: "h3",
    pre: "pre",
    h4: "h4",
    strong: "strong",
    a: "a",
    table: "table",
    thead: "thead",
    tr: "tr",
    th: "th",
    tbody: "tbody",
    td: "td"
  }, (0,lib/* useMDXComponents */.ah)(), props.components);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: ["\n", "\n", "\n", (0,jsx_runtime.jsx)(dist/* Meta */.h_, {
      title: "Docs / Theming / Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "theming",
      children: "Theming"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Theming is a way to easily reskin or style components via a set of style properties. It allows for easy adjustments in color, type, animation, and other foundational patterns to improve the overall user experience via one central style file."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each of the components references specific style properties that map back to a global style sheet, which we call a \"theme.\" This is a similar concept as CSS for web components."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capabilities-of-theming",
      children: "Capabilities of Theming"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "It allows for reskinning of components and entire applications for product-specific needs. For example, within the Comcast umbrella of products, there are Core brand principles we share, like our signature purple, but there are differences across our products, like an animating Focus Ring on Flex versus a static highlight state on X1."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Additionally, this re-skinning allows for more flexibility for syndication partners. Brands that utilize the same core production code can easily swap in their font styles and brand colors."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Products can bring their own design systems. In the first two examples, there is an expectation of shared styles. But there’s no reason that Xfinity, Sky, and Peacock products can’t share the same core Tile component and replace their entire theme with their unique design systems."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Another feature of theming, which you will see during the demo, is something we call \"subtheming.\" This is a way for editorial teams to highlight specific sets of data within an application without ever changing the core look and feel of a product."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Additionally, themes can supply information to devices to change the style based on the capabilities of the hardware. For example, a device with less available memory can have certain features turned off, like fancy animations and effects."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Theming also allows us to more easily make changes to our products that fit the accessibility needs of every customer. For example, adjusting the type-scale and dynamically adjusting content around it, or providing preset color palette themes for those with color blindness."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "And lastly, theming can even allow for user initiated personalization, by giving our users the ability to choose their preferred color scheme or font styles."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Context"
      }), " allows you to set and update your theme from anywhere in the application. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Context"
      }), " holds settings and logic that can be used across all Lightning-UI components."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setting-the-global-context",
      children: "Setting the Global Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To start applying themes to your components you need to import both ", (0,jsx_runtime.jsx)(_components.code, {
        children: "context"
      }), " and the theme you want to use in your file, if different from the Base theme. If you do not import a theme, you will default to the open-source Base theme."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "import { context } from '@lightningjs/ui-components';\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You can configure ", (0,jsx_runtime.jsx)(_components.code, {
        children: "context"
      }), " in a single call by using the function ", (0,jsx_runtime.jsx)(_components.code, {
        children: "context.config()"
      }), ". ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Context"
      }), " is used as the global store for all Lightning-UI components and contains multiple settings. Utilizing this method allows all configurations to easily be set at one time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Here we can apply a custom theme. In order to apply it, simply import the theme and pass it into the context config.\nFor example, let's say we have a custom theme called 'customTheme.' Our context config may look like:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "import customTheme from '../../themes/customTheme';\nwindow.CONTEXT = context.config({\n  theme: {\n    ...customTheme,\n    extensions //see extensions documentation\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you do not apply a custom theme, the Base open-source theme will be used by default. Custom themes can override any combination or subset of the properties detailed in the schema below. A deep merge is conducted on the custom theme with the Base theme, so any properties that are not defined will fallback to the default value from the Base theme."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "export default {\n  alpha,\n  animation,\n  color,\n  font,\n  layout,\n  radius,\n  spacer,\n  stroke,\n  typography,\n  componentConfig\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "utilizing-context",
      children: "Utilizing Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The primary ", (0,jsx_runtime.jsx)(_components.code, {
        children: "context"
      }), " methods to utilize when modifying your theme are ", (0,jsx_runtime.jsx)(_components.code, {
        children: "setTheme"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "updateTheme"
      }), ". These methods will allow you to set up a global theme."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "setting-the-theme",
      children: "Setting the theme"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "setTheme"
      }), " method takes in a theme object as a parameter and replaces the currently defined theme with the theme object being passed in. This will execute a deep merge with the original Base theme in case any values are missing."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For example, let's say 'customTheme' changes the Base theme's radius and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "coreNeutral"
      }), " color values slightly.\nThen, the function ", (0,jsx_runtime.jsx)(_components.code, {
        children: "context.setTheme(customTheme)"
      }), " takes in the imported theme object (customTheme) as a parameter to create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProgressBar"
      }), " that looks like this:"]
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: CustomThemeProgressBar_namespaceObject,
      alt: "Progress Bar with customTheme applied to it",
      width: "600"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you tried to change the bar color or the progress color in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProgressBar"
      }), " component, the method ", (0,jsx_runtime.jsx)(_components.code, {
        children: "context.setTheme(customTheme)"
      }), " will overwrite those changes with values from the 'customTheme' theme.\nSetting the theme completely wipes out the modifications on components made by the previously defined theme."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "updating-the-theme",
      children: "Updating the Theme"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "updateTheme"
      }), " method merges the component styles you have updated with the currently selected theme. For example:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "context.updateTheme(\n  color: {\n    fillNeutral: ['#c15a5a', 1],\n    surface: ['#680f0f', 1]\n  }\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The above line of code could create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProgressBar"
      }), " that looks like this:"]
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: CustomProgressBar_namespaceObject,
      alt: "Progress Bar with customTheme but updated colors",
      width: "600"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Here ", (0,jsx_runtime.jsx)(_components.code, {
        children: "progressColor"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "barColor"
      }), " are merged in with your selected theme, in this case, 'customTheme.' This means that some of the theme properties are consistent with your custom values and some of the properties are updated with the 'customTheme' theme.\nIf you updated ", (0,jsx_runtime.jsx)(_components.code, {
        children: "barColor"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "progressColor"
      }), " with the method ", (0,jsx_runtime.jsx)(_components.code, {
        children: "context.updateTheme()"
      }), " but did not update the radius, this would yield a theme where the colors are what you defined, but the radius is that of the 'customTheme' theme."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "context-logger",
      children: "Context Logger"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Logger provides a way for internal errors and warnings to be gracefully handled in Lightning-UI, gives the ability to show/hide logs in the console, and offers a way to expose logs to a callback so that the application can send them to a third party front end logging endpoint. It is included under ", (0,jsx_runtime.jsx)(_components.code, {
        children: "context"
      }), " so that you can access it anywhere in the application.\nLogger functions can be used as such:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "context.log('Some info here');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "context.warn('Surface a warning!');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "context.error('Broken!');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "context.info('Emergency');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theming-at-a-global-versus-component-level",
      children: "Theming at a Global versus Component Level"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If you choose to apply a theme at a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "global level"
      }), ", the theme values you have selected will be mapped to a broader set of components.\nFor example, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fillNeutral"
      }), " is used by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProgressBar"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Checkbox"
      }), ". If you wanted to change the colors of both of these components you can update the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fillNeutral"
      }), " value. The two components' color would now be updated to the new ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fillNeutral"
      }), " value. This would be considered a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "global level"
      }), " change."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "context.updateTheme({\n  color: { fillNeutral: [value, 1] }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Alternatively, you can apply theme changes at a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "component level"
      }), " via the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "componentConfig"
      }), ". In this case, every instance of a particular component type will use the new values, but the changes will not affect other types of components referencing the same theme values."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fillNeutral"
      }), " is used by both ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProgressBar"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Checkbox"
      }), ". If you wanted to only change the color of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProgressBar"
      }), ", you would use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "componentConfig"
      }), " to impact only the value of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "progressColor"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "context.updateTheme({\n  componentConfig: {\n    ProgressBar: {\n      style: {\n        progressColor: getHexColor(#32CD32) // can also be written as progressColor: ['#32CD32', 1]\n      }\n    }\n  }\n});\n\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Additionally, while not recommended (see below), to make changes on one singular instance of a component you would have to change the theme values under each component's style file. For example, you could change a component's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProgressBar"
      }), " color by coding:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "MyComponent.style = { progressColor: 0xf000000 };\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "or"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "MyComponent: {\n  type: ProgressBar,\n  style: {\n    progressColor: 0xf000000\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NOTE:"
      }), " In order to change a specific component's style properties, you must use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "style"
      }), " setter. This will trigger the update lifecycle for the component. Trying to directly set the nested style property (eg. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MyComponent.style.progressColor = 0xf000000"
      }), ") will ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "NOT"
      }), " work unless you directly call the component's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_update()"
      }), " method after. Nested style property updates may be part of a future enhancement."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "As a WARNING, it is strongly discouraged to make changes to an instance of a component"
      }), ". Doing so comes with risks given that this is an anti-pattern and no other components will be changed."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "We highly RECOMMEND"
      }), " that if you want to make a global change to an existing theme, it is best to make a custom theme based off of one of the existing themes and then update relevant theme values. This is a great place to use componentConfig overrides and ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../?path=/docs/docs-theming-extensions--page",
        children: "extensions"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Continuing with the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProgressBar"
      }), " example, let's summarize all the different ways you can change the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProgressBar"
      }), " color (", (0,jsx_runtime.jsx)(_components.code, {
        children: "progressColor"
      }), ") and how it will impact other components:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Ways to apply theming"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Will it impact an instance of a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ProgressBar"
            }), "?"]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Will it impact all ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ProgressBar"
            }), "s?"]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Will it impact all ", (0,jsx_runtime.jsx)(_components.code, {
              children: "FocusRing"
            }), "s?"]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Updating a components' styles file ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "(Bad!)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Updating theme on a component level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Updating theme on a global level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,lib/* useMDXComponents */.ah)(), props.components);
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,jsx_runtime.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const Theming = (MDXContent);


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
//# sourceMappingURL=docs-Theming-mdx.9b018ed7.iframe.bundle.js.map