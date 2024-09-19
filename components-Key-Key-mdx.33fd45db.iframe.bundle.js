(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[8901,2639],{

/***/ "../../@lightningjs/ui-components/src/components/Key/Key.mdx":
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
/* harmony import */ var _Key_stories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Key/Key.stories.js");



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
    h4: "h4",
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
      of: _Key_stories__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "An extension of the Button component that represents an individual key on a keyboard"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "source",
      children: "Source"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/rdkcentral/Lightning-UI-Components/blob/develop/packages/@lightningjs/ui-components/src/components/Key/Key.js",
        rel: "nofollow",
        children: "https://github.com/rdkcentral/Lightning-UI-Components/blob/develop/packages/@lightningjs/ui-components/src/components/Key/Key.js"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "usage",
      children: "Usage"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "The Key component takes in a title or icon which can be automatically pushed to the Keyboard component's input field."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-js",
        children: "import { Key } from '@lightningjs/ui-components';\n\nclass Basic extends lng.Component {\n  static _template() {\n    return {\n      Key: {\n        type: Key\n      }\n    };\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "sizing",
      children: "Sizing"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["There are two options for setting the width of a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Key"
      }), ": dynamically based of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "baseWidth"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "sizes"
      }), " style properties, or setting a fixed width manually."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["For dynamic sizing, the width of the smallest ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Key"
      }), " is defined as the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "baseWidth"
      }), " style property. Then, by setting the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "size"
      }), " property, the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Key"
      }), " width will increase by multiples of that ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "baseWdith"
      }), " (plus the spacing between ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Key"
      }), " components on a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Keyboard"
      }), ", defined by the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "keySpacing"
      }), " property)."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["For fixed sizing, set the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "fixed"
      }), " property to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "true"
      }), " and define the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "w"
      }), " property."]
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
            children: "fixed"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "boolean"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["when true, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "w"
            }), " overrides dynamically calculated width"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "icon"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "null"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "url for icon"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "onEnter"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "function"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "undefined"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["if defined, will be invoked when enter is pressed while focused on the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "Key"
            }), " component. When defined, the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "$onSoftKey"
            }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "$toggleKeyboard"
            }), " events will not be emitted from the key (see Events section below)"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "size"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "sm"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "width of the Key"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "toggle"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "boolean"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "undefined"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "If true, pressing the key will trigger the $toggleKeyboard event. If false, the key will trigger the $onSoftKey event"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "keySpacing"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "0"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["The horizontal spacing between each key in a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
              href: "?path=/docs/components-keyboard--docs",
              children: "Keyboard"
            }), ". This value is factored into the width of the key so that it aligns with with the borders of other keys in a Keyboard."]
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
            children: "baseWidth"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["The base width of a key. This value will be multiplied based on the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "size"
            }), " property of the key"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "iconWidth"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "width set to all icons"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "iconHeight"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "height set to all icons"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "minWidth"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["used as a fallback width if no width is passed into the component and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "fixed"
            }), " is false"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "paddingX"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "space between the button horizontal edge and the content"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "sizes"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "object"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["used to determine the width of key, contains the properties ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "sm"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "md"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "lg"
            }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "xl"
            }), ". See Sizing section for more details."]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "textStyle"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "string | object"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "text style to apply to the title"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "events",
      children: "Events"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "onsoftkey-key-string-toggle-boolean-",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "$onSoftKey({ key: string, toggle: boolean })"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Fired when the enter key is pressed while focused on a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Key"
      }), " component. An event will be emitted\nvia Lightning's ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "fireAncestors"
      }), " with an object of the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Key"
      }), "'s ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "title"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "toggle"
      }), " property values.\nIf a funciton is passed to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Key"
      }), "'s ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "onEnter"
      }), " property, that function will be invoked and the\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "$onSoftKey"
      }), " event will not be emitted."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "togglekeyboard-key-string-toggle-boolean-",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "$toggleKeyboard({ key: string, toggle: boolean })"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Fired when the enter key is pressed while focused on a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Key"
      }), " component with its ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "toggle"
      }), " property\nset to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "true"
      }), ". If a funciton is passed to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Key"
      }), "'s ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "onEnter"
      }), " property, that function will be invoked and the\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "$toggleKeyboard"
      }), " event will not be emitted."]
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

/***/ "../../@lightningjs/ui-components/src/docs/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hx: () => (/* binding */ controlDescriptions)
/* harmony export */ });
/* unused harmony exports CATEGORIES, storySortOrder */
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

var CATEGORIES = {
  0: 'Docs',
  2: 'Collections',
  4: 'Utilities',
  8: 'Components',
  16: 'Patterns',
  32: 'Templates'
};

/** Storybook config constants should go in this file */

var storySortOrder = [CATEGORIES[0], ['Introduction', 'Read Me', 'Base', 'Contributing', 'Lightning Resources', 'Lightning Community Guide', 'Theming', ['Overview', 'Component Config', 'Tones', 'Modes', 'Extensions', 'Subtheming', 'Use in Storybook', 'Theme Properties', 'Hierarchy', 'Tutorial'], 'Unit Testing', ['Overview', 'Test Renderer', 'Test Utils', ['makeCreateComponent', '*']]], CATEGORIES[2], CATEGORIES[4], CATEGORIES[8], CATEGORIES[16], CATEGORIES[32]];
var controlDescriptions = {
  collapseToMetadata: 'When in unfocused or disabled mode, if shouldCollapse property is true it will collapse the image to metadata (when focused, it will always be expanded)',
  shouldCollapse: 'When in unfocused or disabled mode, if this flag is true metadata will collapse (when focused, it will always be expanded)',
  fixed: 'Stops the width from being calculated dynamically based on content and will instead use the`w` property'
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

/***/ "../../@lightningjs/ui-components/src/components/Key/Key.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Basic: () => (/* binding */ Basic),
/* harmony export */   KeyIcon: () => (/* binding */ KeyIcon),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Key/Key.js");
/* harmony import */ var _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png");
/* harmony import */ var _docs_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
/* harmony import */ var _docs_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/constants.js");
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
  title: 'Components/Key',
  args: {
    fixed: false,
    w: 200
  },
  argTypes: {
    fixed: {
      control: 'boolean',
      description: _docs_constants__WEBPACK_IMPORTED_MODULE_1__/* .controlDescriptions */ .Hx.fixed,
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    w: {
      control: 'number',
      description: 'When the fixed property is true, this will set the width of the component',
      table: {
        defaultValue: {
          summary: 0
        }
      }
    }
  }
});
const Basic = () => class Basic extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Key: {
        type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A
      }
    };
  }
};
Basic.parameters = {};
Basic.args = {
  title: 'A',
  size: 'sm',
  mode: 'focused'
};
Basic.argTypes = {
  ...(0,_docs_utils__WEBPACK_IMPORTED_MODULE_3__/* .createModeControl */ .Pg)({
    summaryValue: 'focused'
  }),
  size: {
    control: 'select',
    options: ['sm', 'md', 'lg', 'xl'],
    description: 'Width of the Key',
    table: {
      defaultValue: {
        summary: 'sm'
      }
    }
  },
  title: {
    control: 'text',
    description: 'Key character',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  }
};
const KeyIcon = () => class KeyIcon extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Key: {
        type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
        icon: _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_4__
      }
    };
  }
};
KeyIcon.args = {
  size: 'sm',
  mode: 'focused'
};
KeyIcon.argTypes = {
  ...(0,_docs_utils__WEBPACK_IMPORTED_MODULE_3__/* .createModeControl */ .Pg)({
    summaryValue: 'focused'
  }),
  size: {
    control: 'select',
    options: ['sm', 'md', 'lg', 'xl'],
    description: 'Width of the Key',
    table: {
      defaultValue: {
        summary: 'sm'
      }
    }
  }
};
KeyIcon.parameters = {};
;
const __namedExportsOrder = ["Basic", "KeyIcon"];
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => class Basic extends lng.Component {\n  static _template() {\n    return {\n      Key: {\n        type: KeyComponent\n      }\n    };\n  }\n}",
      ...Basic.parameters?.docs?.source
    }
  }
};
KeyIcon.parameters = {
  ...KeyIcon.parameters,
  docs: {
    ...KeyIcon.parameters?.docs,
    source: {
      originalSource: "() => class KeyIcon extends lng.Component {\n  static _template() {\n    return {\n      Key: {\n        type: KeyComponent,\n        icon: lightning\n      }\n    };\n  }\n}",
      ...KeyIcon.parameters?.docs?.source
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

/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/ic_lightning_white_32.06aecfeb.png";

/***/ })

}]);
//# sourceMappingURL=components-Key-Key-mdx.33fd45db.iframe.bundle.js.map