(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[377,9627],{

/***/ "../../@lightningjs/ui-components/src/components/InlineContent/InlineContent.mdx":
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
/* harmony import */ var _InlineContent_stories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/components/InlineContent/InlineContent.stories.js");



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
    strong: "strong",
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
      of: _InlineContent_stories__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.strong, {
        children: ["Depreciated: ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
          href: "/docs/components-textbox--basic",
          children: "TextBox"
        }), " is the recommended component for rendering text and supports all properties of InlineContent"]
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Renders text, icons, and badges in line together."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "source",
      children: "Source"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/rdkcentral/Lightning-UI-Components/blob/develop/packages/@lightningjs/ui-components/src/components/InlineContent/InlineContent.js",
        rel: "nofollow",
        children: "https://github.com/rdkcentral/Lightning-UI-Components/blob/develop/packages/@lightningjs/ui-components/src/components/InlineContent/InlineContent.js"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "usage",
      children: "Usage"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Pass in a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "content"
      }), " array containing simple strings or objects with badge or icon strings."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-js",
        children: "import { InlineContent } from '@lightningjs/ui-components';\n\nclass Example extends lng.Component {\n  static _template() {\n    return {\n      InlineContent: {\n        type: InlineContent,\n        content: [\n          'example of simple text',\n          {\n            icon: 'http://myIconUrl.com/goeshere',\n            title: 'to add voice out content (essentially alt text)',\n            color: '00ff00'\n          },\n          { newline: true },\n          { badge: 'HD' }\n        ]\n      }\n    };\n  }\n}\n"
      })
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
            children: "badgeProperties"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "object"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "undefined"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "styling to update the Badge component"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "badgeY"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "undefined"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "y value of all badges"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "content"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "string | array"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "undefined"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["list of data to render inline, see ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
              href: "#content-element-properties",
              children: "Content Element Properties"
            }), " below"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "contentProperties"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "object"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "object setting flexItem props on all content items"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "contentWrap"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "boolean"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "determines whether the containing flexbox should wrap the content onto the next line"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "justify"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "center"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "alignment of first line flexbox content"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "customStyleMappings"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "object"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["set of nested objects containing ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
              href: "https://rdkcentral.github.io/Lightning/docs/textures/text",
              rel: "nofollow",
              children: "Lightning Text"
            }), " properties which can be referenced in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
              href: "#content-element-properties",
              children: "Content Element Properties"
            }), " to apply styling to individual text elements"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "maxLines"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "undefined"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "maximum number of lines to render before truncation"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "maxLinesSuffix"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "'..'"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["suffix appended to last line of content if it will exceed the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "maxLines"
            })]
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
            children: "contentSpacing"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "padding between all content items"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "iconHeight"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "height of each icon"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "iconWidth"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "width of each icon"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "justify"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "alignment of first line flexbox content"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "marginBottom"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "space beneath rendered content"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "maxLines"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Maximum number of lines to display before truncation"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "textStyle"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "string | object"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["Default style of text to be displayed. Object should come from the current theme or contain any properties that the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
              href: "https://lightningjs.io/docs/#/lightning-core-reference/RenderEngine/Textures/Text?id=properties",
              rel: "nofollow",
              children: "Lightning text texture supports"
            }), "."]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "textY"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "y value of all text"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "events",
      children: "Events"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "loadedinlinecontent-void",
      children: "$loadedInlineContent(): void"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Fires when all contents inside the InlineContent component have finished rendering their textures. This is when you will have all of the correct flex properties of the components as well as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "finalH"
      }), " available to be used."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "content-element-properties",
      children: "Content Element Properties"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "InlineContent"
      }), " component will recognize the following elements inside its ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "content"
      }), " param:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "string|object"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "description"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "'Text'"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "{ text: 'Text', style: { styleName: styleValue } }"
            }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "{ text: 'Text', style: 'StyleName' }"
            })]
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["any stand alone string will be used a pure text, or an object with the properties of ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "text"
            }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "style"
            }), " can be passed to override the default text styles, and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "style"
            }), " can be passed a string which references a predefined entry in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
              href: "#properties",
              children: "customStyleMappings"
            }), " object passed to the component"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "{ icon: 'pathToIcon', title: 'IconTitle' }"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["will render an ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
              href: "/story/elements-icon--text",
              children: "Icon"
            }), " with the given source and use the title param as the string to announce"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "{ badge: 'BadgeName' }"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["will render a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
              href: "/story/elements-badge--text",
              children: "Badge"
            })]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "{ newline: true }"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "will insert a line break between content if the contentWrap param is true"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "content-string-markup",
      children: "Content String Markup"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Additionally, the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "content"
      }), " param will automatically parse a string into the above elements using the following markup:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.table, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.thead, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "string markup"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.th, {
            children: "parsed element"
          })]
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tbody, {
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "{ICON:title|url}"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "{ icon: 'url', title: 'title' }"
            })
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "{BADGE:title}"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "{ badge: 'title' }"
            })
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "{NEWLINE}"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "{ newline: true }"
            })
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "{TEXT:text|styleName}"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "{ text: 'text', style: 'styleName' }"
            })
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "For example:"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-js",
        children: "import { InlineContent } from '@lightningjs/ui-components';\n\nclass Example extends lng.Component {\n  static _template() {\n    return {\n      InlineContent: {\n        type: InlineContent,\n        contentWrap: true,\n        customStyleMappings: {\n          red: { textColor: getHexColor('FF6194') }\n        },\n        content:\n          'This is an {ICON:settings|./assets/icons/settings.png} icon and {BADGE:HD} badge with a{NEWLINE} and {TEXT:red text|red}.'\n      }\n    };\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "will yield"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-js",
        children: "[\n  'This is an ',\n  { icon: './assets/icons/settings.png', title: 'settings' },\n  ' icon and ',\n  { badge: 'HD' },\n  ' badge with a',\n  { newline: true },\n  ' and ',\n  { text: 'red text', style: 'red' },\n  '.'\n];\n"
      })
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

/***/ "../../@lightningjs/ui-components/src/components/InlineContent/InlineContent.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Basic: () => (/* binding */ Basic),
/* harmony export */   WithNewLines: () => (/* binding */ WithNewLines),
/* harmony export */   WithParsing: () => (/* binding */ WithParsing),
/* harmony export */   WithStrikeThrough: () => (/* binding */ WithStrikeThrough),
/* harmony export */   WithTruncation: () => (/* binding */ WithTruncation),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/InlineContent/InlineContent.js");
/* harmony import */ var _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
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
  title: 'Components/InlineContent',
  args: {
    contentWrap: false,
    justify: 'center',
    contentProperties: {
      marginBottom: -4
    },
    maxLines: 0,
    maxLinesSuffix: '..'
  },
  argTypes: {
    contentProperties: {
      control: 'object',
      description: 'Object setting flexItem props on all content items',
      type: 'object',
      table: {
        defaultValue: {
          summary: '{}'
        }
      }
    },
    contentWrap: {
      control: 'boolean',
      description: 'Determines whether the containing flexbox should wrap the content onto the next line',
      type: 'boolean',
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    justify: {
      control: 'radio',
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
      description: 'Alignment of first line flexbox content',
      type: 'string',
      table: {
        defaultValue: {
          summary: 'center'
        }
      }
    },
    maxLines: {
      control: 'number',
      description: 'maximum number of lines to render before truncation',
      type: 'number',
      table: {
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    maxLinesSuffix: {
      control: 'text',
      description: 'suffix appended to last line of content if it will exceed the maxLines',
      type: 'string',
      table: {
        defaultValue: {
          summary: '..'
        }
      }
    }
  }
});
const Basic = args => class Basic extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      InlineContent: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        x: 500,
        w: 200,
        contentWrap: args.contentWrap,
        contentProperties: args.contentProperties,
        justify: args.justify,
        customStyleMappings: {
          italic: {
            fontStyle: 'italic',
            textColor: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getHexColor */ .H2)('00ff00')
          }
        },
        content: ['Text', ' and some icons', {
          icon: _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_3__,
          title: 'Green Lightning Bolt',
          style: {
            color: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getHexColor */ .H2)('00ff00')
          }
        }, 'Wrapping Text', {
          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
          title: 'Rotten Tomatoes rating'
        }, 'and more text ', {
          text: 'with some red ',
          style: {
            textColor: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getHexColor */ .H2)('FF6194')
          }
        }, 'for fun', {
          badge: 'HD',
          title: 'HD'
        }, {
          badge: 'SD',
          title: 'SD'
        }, {
          text: 'make some text italic',
          style: 'italic'
        }]
      }
    };
  }
};
const WithNewLines = args => class WithNewLines extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      InlineContent: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        x: 500,
        w: 400,
        contentWrap: args.contentWrap,
        contentProperties: args.contentProperties,
        justify: args.justify,
        content: ['Example with multiple lines', {
          icon: _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_3__,
          style: {
            color: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getHexColor */ .H2)('00ff00')
          },
          title: 'Green Lightning Bolt'
        }, {
          newline: true
        }, 'this line should break here', {
          newline: true
        }, {
          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
          title: 'Rotten Tomatoes rating'
        }, 'another line break here', {
          newline: true
        }, {
          badge: 'HD',
          title: 'HD'
        }, {
          newline: true
        }, {
          badge: 'SD',
          title: 'SD'
        }]
      }
    };
  }
};
const WithParsing = args => class WithParsing extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      InlineContent: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        x: 550,
        w: 400,
        contentWrap: args.contentWrap,
        contentProperties: args.contentProperties,
        justify: args.justify,
        customStyleMappings: {
          italic: {
            fontStyle: 'italic',
            textColor: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getHexColor */ .H2)('FF6194')
          }
        },
        content: 'This is an example of using custom markup {ICON:settings|https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png} with a linebreak{NEWLINE}{BADGE:HD} that includes all available types like {TEXT:styled text|italic}.'
      }
    };
  }
};
const WithTruncation = args => class Basic extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      InlineContent: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        ...args,
        w: 500,
        content: ['Text', {
          icon: _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_3__,
          title: 'Green Lightning Bolt',
          style: {
            color: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getHexColor */ .H2)('00ff00')
          }
        }, 'Wrapping Text', {
          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
          title: 'Rotten Tomatoes rating'
        }, 'and more text', {
          text: 'with some red ',
          style: {
            textColor: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getHexColor */ .H2)('FF6194')
          }
        }, 'for fun', {
          badge: 'HD',
          title: 'HD'
        }, {
          badge: 'SD',
          title: 'SD'
        }, ', and this should truncate before going on to a third line.']
      }
    };
  }
};
WithTruncation.args = {
  contentWrap: true,
  maxLines: 2,
  maxLinesSuffix: '...'
};
const WithStrikeThrough = args => class WithParsing extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      InlineContent: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        x: 550,
        w: 400,
        contentWrap: args.contentWrap,
        contentProperties: args.contentProperties,
        justify: args.justify,
        content: ['Rent', {
          newline: true
        }, {
          text: '$19.99',
          style: {
            textDecoration: 'line-through'
          }
        }, {
          newline: true
        }, '$12.99']
      }
    };
  }
};
;
const __namedExportsOrder = ["Basic", "WithNewLines", "WithParsing", "WithTruncation", "WithStrikeThrough"];
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "args => class Basic extends lng.Component {\n  static _template() {\n    return {\n      InlineContent: {\n        type: InlineContentComponent,\n        x: 500,\n        w: 200,\n        contentWrap: args.contentWrap,\n        contentProperties: args.contentProperties,\n        justify: args.justify,\n        customStyleMappings: {\n          italic: {\n            fontStyle: 'italic',\n            textColor: getHexColor('00ff00')\n          }\n        },\n        content: ['Text', ' and some icons', {\n          icon: lightningbolt,\n          title: 'Green Lightning Bolt',\n          style: {\n            color: getHexColor('00ff00')\n          }\n        }, 'Wrapping Text', {\n          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n          title: 'Rotten Tomatoes rating'\n        }, 'and more text ', {\n          text: 'with some red ',\n          style: {\n            textColor: getHexColor('FF6194')\n          }\n        }, 'for fun', {\n          badge: 'HD',\n          title: 'HD'\n        }, {\n          badge: 'SD',\n          title: 'SD'\n        }, {\n          text: 'make some text italic',\n          style: 'italic'\n        }]\n      }\n    };\n  }\n}",
      ...Basic.parameters?.docs?.source
    }
  }
};
WithNewLines.parameters = {
  ...WithNewLines.parameters,
  docs: {
    ...WithNewLines.parameters?.docs,
    source: {
      originalSource: "args => class WithNewLines extends lng.Component {\n  static _template() {\n    return {\n      InlineContent: {\n        type: InlineContentComponent,\n        x: 500,\n        w: 400,\n        contentWrap: args.contentWrap,\n        contentProperties: args.contentProperties,\n        justify: args.justify,\n        content: ['Example with multiple lines', {\n          icon: lightningbolt,\n          style: {\n            color: getHexColor('00ff00')\n          },\n          title: 'Green Lightning Bolt'\n        }, {\n          newline: true\n        }, 'this line should break here', {\n          newline: true\n        }, {\n          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n          title: 'Rotten Tomatoes rating'\n        }, 'another line break here', {\n          newline: true\n        }, {\n          badge: 'HD',\n          title: 'HD'\n        }, {\n          newline: true\n        }, {\n          badge: 'SD',\n          title: 'SD'\n        }]\n      }\n    };\n  }\n}",
      ...WithNewLines.parameters?.docs?.source
    }
  }
};
WithParsing.parameters = {
  ...WithParsing.parameters,
  docs: {
    ...WithParsing.parameters?.docs,
    source: {
      originalSource: "args => class WithParsing extends lng.Component {\n  static _template() {\n    return {\n      InlineContent: {\n        type: InlineContentComponent,\n        x: 550,\n        w: 400,\n        contentWrap: args.contentWrap,\n        contentProperties: args.contentProperties,\n        justify: args.justify,\n        customStyleMappings: {\n          italic: {\n            fontStyle: 'italic',\n            textColor: getHexColor('FF6194')\n          }\n        },\n        content: 'This is an example of using custom markup {ICON:settings|https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png} with a linebreak{NEWLINE}{BADGE:HD} that includes all available types like {TEXT:styled text|italic}.'\n      }\n    };\n  }\n}",
      ...WithParsing.parameters?.docs?.source
    }
  }
};
WithTruncation.parameters = {
  ...WithTruncation.parameters,
  docs: {
    ...WithTruncation.parameters?.docs,
    source: {
      originalSource: "args => class Basic extends lng.Component {\n  static _template() {\n    return {\n      InlineContent: {\n        type: InlineContentComponent,\n        ...args,\n        w: 500,\n        content: ['Text', {\n          icon: lightningbolt,\n          title: 'Green Lightning Bolt',\n          style: {\n            color: getHexColor('00ff00')\n          }\n        }, 'Wrapping Text', {\n          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n          title: 'Rotten Tomatoes rating'\n        }, 'and more text', {\n          text: 'with some red ',\n          style: {\n            textColor: getHexColor('FF6194')\n          }\n        }, 'for fun', {\n          badge: 'HD',\n          title: 'HD'\n        }, {\n          badge: 'SD',\n          title: 'SD'\n        }, ', and this should truncate before going on to a third line.']\n      }\n    };\n  }\n}",
      ...WithTruncation.parameters?.docs?.source
    }
  }
};
WithStrikeThrough.parameters = {
  ...WithStrikeThrough.parameters,
  docs: {
    ...WithStrikeThrough.parameters?.docs,
    source: {
      originalSource: "args => class WithParsing extends lng.Component {\n  static _template() {\n    return {\n      InlineContent: {\n        type: InlineContentComponent,\n        x: 550,\n        w: 400,\n        contentWrap: args.contentWrap,\n        contentProperties: args.contentProperties,\n        justify: args.justify,\n        content: ['Rent', {\n          newline: true\n        }, {\n          text: '$19.99',\n          style: {\n            textDecoration: 'line-through'\n          }\n        }, {\n          newline: true\n        }, '$12.99']\n      }\n    };\n  }\n}",
      ...WithStrikeThrough.parameters?.docs?.source
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
//# sourceMappingURL=components-InlineContent-InlineContent-mdx.d7e39587.iframe.bundle.js.map