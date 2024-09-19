(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[1137,7987],{

/***/ "../../@lightningjs/ui-components/src/components/ScrollWrapper/ScrollWrapper.mdx":
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
/* harmony import */ var _ScrollWrapper_stories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/components/ScrollWrapper/ScrollWrapper.stories.js");



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
      of: _ScrollWrapper_stories__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .hE, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "A scrollable container for text content."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "source",
      children: "Source"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/rdkcentral/Lightning-UI-Components/blob/develop/packages/@lightningjs/ui-components/src/components/ScrollWrapper/ScrollWrapper.js",
        rel: "nofollow",
        children: "https://github.com/rdkcentral/Lightning-UI-Components/blob/develop/packages/@lightningjs/ui-components/src/components/ScrollWrapper/ScrollWrapper.js"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "usage",
      children: "Usage"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "ScrollWrapper"
      }), " requires both ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "w"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "h"
      }), " to be set."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-js",
        children: "import { ScrollWrapper } from '@lightningjs/ui-components';\n\nclass Example extends lng.Component {\n  static _template() {\n    return {\n      ScrollWrapper: {\n        type: ScrollWrapper,\n        h: 450,\n        w: 600,\n        content: 'Text content long enough to scroll vertically'\n      }\n    };\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Alternatively, an array of components and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "style"
      }), " keys may be provided as ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "content"
      }), ".\nStyles provided here will override those set by the theme for it's section of text:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-js",
        children: "import { ScrollWrapper } from '@lightningjs/ui-components';\n\nclass Example extends lng.Component {\n  static _template() {\n    return {\n      ScrollWrapper: {\n        type: ScrollWrapper,\n        h: 450,\n        w: 600,\n        content: [\n          {\n            text: 'Text Heading',\n            style: {\n              fontStyle: 'italic',\n              alignContent: 'center'\n            }\n          },\n          {\n            text: 'Text content long enough to scroll vertically'\n          }\n        ]\n      }\n    };\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "h"
      }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "w"
      }), " properties will determine the viewable box for ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "ScrollWrapper"
      }), ".\nWhen focused, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "ScrollWrapper"
      }), " will display a scroll bar to the right of the content\nand up/down scrolling will be handled."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The amount of scrolling per keypress is determined via the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "scrollStep"
      }), " property.\nChange it to allow smaller or larger scroll steps per keypress."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "If the array of items contains rows/columns with different heights and/or widths set\nautoResizeWidth and autoResizeHeight to true so that the scroll bar is of the appropriate height."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Additionally, ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "ScrollWrapper"
      }), " supports ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "autoScroll"
      }), " flag, which will auto scroll the content.\nThe delay to start is set via ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "autoScrollDelay"
      }), " and speed via ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "autoScrollSpeed"
      }), " both in ms.\nYou can also hide the scrollBar by setting ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "showScrollBar"
      }), " to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "false"
      }), "."]
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
            children: "autoScroll"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "boolean"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "whether or not to auto scroll the content"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "autoScrollDelay"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "2000"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "delay, in ms, before auto scroll starts"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "autoScrollSpeed"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "200"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "time delay, in ms, before each scroll step"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "content"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "string|array"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "true"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "-"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Content is items that are viewable in the container. It can be an array of strings or an array of lightning elements that can be patched in"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "fadeContent"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "boolean"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "true"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "fade out content at the bottom of the ScrollWrapper"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "flexDirection"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "column"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "determines the direction items are placed in flexContainer"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "scrollDuration"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "0.2"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "animation duration for the scroll"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "scrollStep"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "10"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "how many pixels to scroll by on every up/down keypress"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "shouldWrap"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "boolean"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "determines if items should wrap around ScrollContainer"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "showScrollBar"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "boolean"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "true"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "show the scroll bar when focused"
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
            children: "contentMarginLeft"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "spacing to the left of the scrollable content"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "contentMarginTop"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "spacing above the scrollable content"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "fadeHeight"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["height of FadeOut shader displayed at bottom of scroll wrapper (when ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "fadeContent"
            }), " property is ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "true"
            }), ")"]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "scroll"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_docs_utils__WEBPACK_IMPORTED_MODULE_5__/* .DocsLink */ .cY, {
              id: "lng.Transition"
            })
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "transition to apply when scrolling"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "sliderMarginLeft"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "spacing to the left of the scroll slider"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "textStyle"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "object"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["Default style of text to be displayed. Object should come from the current theme or contain any properties that the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
              href: "https://lightningjs.io/docs/#/lightning-core-reference/RenderEngine/Textures/Text?id=properties",
              rel: "nofollow",
              children: "Lightning text texture supports"
            }), "."]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "methods",
      children: "Methods"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "resetscroll-void",
      children: "resetScroll(): void"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Resets the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "y"
      }), " value of both the content and the scroll bar."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "events",
      children: "Events"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "scrollchangedendupenddown-this",
      children: "$scrollChanged('endUp'|'endDown', this)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Event fired via ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "fireAncestors"
      }), ", is triggered when scroll reaches the top or bottom of the scroll boundaries."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "signals",
      children: "Signals"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "onupattop",
      children: "onUpAtTop"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Fired when user is at the top of the content within the ScrollWrapper and presses up again."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "ondownatbottom",
      children: "onDownAtBottom"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Fired when user is at the bottom of the content within the ScrollWrapper and presses down again."
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

/***/ "../../@lightningjs/ui-components/src/components/Surface/Surface.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Surface)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Surface/Surface.styles.js
var Surface_styles_namespaceObject = {};
__webpack_require__.r(Surface_styles_namespaceObject);
__webpack_require__.d(Surface_styles_namespaceObject, {
  base: () => (base),
  mode: () => (mode),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Surface/Surface.styles.js
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
    backgroundColor: theme.color.interactiveNeutral,
    radius: theme.radius.md,
    animation: {}
  };
};
var tone = function tone(theme) {
  return {
    inverse: {
      backgroundColor: theme.color.interactiveInverse
    }
  };
};
var mode = function mode(theme) {
  return {
    focused: {
      backgroundColor: theme.color.interactiveNeutralFocus,
      tone: {
        inverse: {
          backgroundColor: theme.color.interactiveInverseFocus
        }
      }
    },
    disabled: {
      backgroundColor: theme.color.fillNeutralDisabled
    }
  };
};
// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Surface/Surface.js
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





var Surface = /*#__PURE__*/function (_Base) {
  function Surface() {
    _classCallCheck(this, Surface);
    return _callSuper(this, Surface, arguments);
  }
  _inherits(Surface, _Base);
  return _createClass(Surface, [{
    key: "innerH",
    get: function get() {
      return this.h;
    }
  }, {
    key: "innerW",
    get: function get() {
      return this.w;
    }
  }, {
    key: "_update",
    value: function _update() {
      this._updateLayout();
      this._updateScale();
    }
  }, {
    key: "_updateLayout",
    value: function _updateLayout() {
      this._Background.patch({
        texture: lightning_esm/* default */.A.Tools.getRoundRect(this.innerW - 2,
        // Reference the underscored values here in cause the h or w getters need to be overwritten for alignment - see Tile
        this.innerH - 2, (0,utils/* getMaxRoundRadius */.XG)(this.style.radius, this.w, this.h), 0, null, true, this.style.backgroundColor)
      });
    }
  }, {
    key: "_updateScale",
    value: function _updateScale() {
      var scale = this._isFocusedMode ? this.getFocusScale(this.w, this.h) : this.getUnfocusScale(this.w, this.h);
      this.applySmooth(this, {
        scale: scale
      }, {
        scale: [scale, this.style.animation]
      });
    }
  }], [{
    key: "_template",
    value: function _template() {
      return {
        Background: {}
      };
    }
  }, {
    key: "__componentName",
    get: function get() {
      return 'Surface';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Surface_styles_namespaceObject;
    }
  }, {
    key: "properties",
    get: function get() {
      return [];
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Background'];
    }
  }]);
}(Base/* default */.A);


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

/***/ "../../@lightningjs/ui-components/src/components/ScrollWrapper/ScrollWrapper.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Basic: () => (/* binding */ Basic),
  ObjectArray: () => (/* binding */ ObjectArray),
  TextArray: () => (/* binding */ TextArray),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ ScrollWrapper_stories)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/ScrollWrapper/ScrollWrapper.styles.js
var ScrollWrapper_styles_namespaceObject = {};
__webpack_require__.r(ScrollWrapper_styles_namespaceObject);
__webpack_require__.d(ScrollWrapper_styles_namespaceObject, {
  base: () => (ScrollWrapper_styles_base)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/ScrollWrapper/ScrollSlider.styles.js
var ScrollSlider_styles_namespaceObject = {};
__webpack_require__.r(ScrollSlider_styles_namespaceObject);
__webpack_require__.d(ScrollSlider_styles_namespaceObject, {
  base: () => (base)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ScrollWrapper/ScrollWrapper.styles.js
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

var ScrollWrapper_styles_base = function base(theme) {
  return {
    textStyle: theme.typography.body2,
    fadeHeight: 100,
    scroll: {
      timingFunction: 'linear',
      duration: theme.animation.duration.xfast
    },
    contentMarginTop: theme.spacer.md,
    contentMarginLeft: theme.spacer.xl,
    sliderMarginLeft: theme.spacer.lg + theme.spacer.xxs
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.js + 1 modules
var TextBox = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Slider/Slider.js + 1 modules
var Slider = __webpack_require__("../../@lightningjs/ui-components/src/components/Slider/Slider.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ScrollWrapper/ScrollSlider.styles.js
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
  var _scrollWrapperBase = ScrollWrapper_styles_base(theme),
    scroll = _scrollWrapperBase.scroll;
  return {
    progressBar: {
      animation: scroll
    },
    circleAnimation: scroll
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ScrollWrapper/ScrollSlider.js
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



var ScrollSlider = /*#__PURE__*/function (_Slider) {
  function ScrollSlider() {
    _classCallCheck(this, ScrollSlider);
    return _callSuper(this, ScrollSlider, arguments);
  }
  _inherits(ScrollSlider, _Slider);
  return _createClass(ScrollSlider, null, [{
    key: "__componentName",
    get: function get() {
      return 'ScrollSlider';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return ScrollSlider_styles_namespaceObject;
    }
  }]);
}(Slider/* default */.A);

;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ScrollWrapper/ScrollWrapper.js
function ScrollWrapper_typeof(o) { "@babel/helpers - typeof"; return ScrollWrapper_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, ScrollWrapper_typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function ScrollWrapper_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function ScrollWrapper_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, ScrollWrapper_toPropertyKey(o.key), o); } }
function ScrollWrapper_createClass(e, r, t) { return r && ScrollWrapper_defineProperties(e.prototype, r), t && ScrollWrapper_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function ScrollWrapper_callSuper(t, o, e) { return o = ScrollWrapper_getPrototypeOf(o), ScrollWrapper_possibleConstructorReturn(t, ScrollWrapper_isNativeReflectConstruct() ? Reflect.construct(o, e || [], ScrollWrapper_getPrototypeOf(t).constructor) : o.apply(t, e)); }
function ScrollWrapper_possibleConstructorReturn(t, e) { if (e && ("object" == ScrollWrapper_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return ScrollWrapper_assertThisInitialized(t); }
function ScrollWrapper_assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function ScrollWrapper_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (ScrollWrapper_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropSet(t, e, o, r, p, f) { return _set(ScrollWrapper_getPrototypeOf(f ? t.prototype : t), e, o, r, p); }
function set(e, r, t, o) { return set = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function (e, r, t, o) { var f, i = _superPropBase(e, r); if (i) { if ((f = Object.getOwnPropertyDescriptor(i, r)).set) return f.set.call(o, t), !0; if (!f.writable) return !1; } if (f = Object.getOwnPropertyDescriptor(o, r)) { if (!f.writable) return !1; f.value = t, Object.defineProperty(o, r, f); } else _defineProperty(o, r, t); return !0; }, set(e, r, t, o); }
function _set(e, r, t, o, f) { if (!set(e, r, t, o || e) && f) throw new TypeError("failed to set property"); return t; }
function _defineProperty(e, r, t) { return (r = ScrollWrapper_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function ScrollWrapper_toPropertyKey(t) { var i = ScrollWrapper_toPrimitive(t, "string"); return "symbol" == ScrollWrapper_typeof(i) ? i : i + ""; }
function ScrollWrapper_toPrimitive(t, r) { if ("object" != ScrollWrapper_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != ScrollWrapper_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _superPropGet(t, e, o, r) { var p = _get(ScrollWrapper_getPrototypeOf(1 & r ? t.prototype : t), e, o); return 2 & r && "function" == typeof p ? function (t) { return p.apply(o, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = ScrollWrapper_getPrototypeOf(t));); return t; }
function ScrollWrapper_getPrototypeOf(t) { return ScrollWrapper_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, ScrollWrapper_getPrototypeOf(t); }
function ScrollWrapper_inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && ScrollWrapper_setPrototypeOf(t, e); }
function ScrollWrapper_setPrototypeOf(t, e) { return ScrollWrapper_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, ScrollWrapper_setPrototypeOf(t, e); }
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






var ScrollWrapper = /*#__PURE__*/function (_Base) {
  function ScrollWrapper() {
    ScrollWrapper_classCallCheck(this, ScrollWrapper);
    return ScrollWrapper_callSuper(this, ScrollWrapper, arguments);
  }
  ScrollWrapper_inherits(ScrollWrapper, _Base);
  return ScrollWrapper_createClass(ScrollWrapper, [{
    key: "_construct",
    value: function _construct() {
      _superPropGet(ScrollWrapper, "_construct", this, 3)([]);
      this._scrollStep = 10;
      this._shouldWrap = false;
      this._flexDirection = 'column';
      this._fadeContent = true;
      this._sliderWidth = 0;
    }
  }, {
    key: "_afterTextBoxUpdate",
    value: function _afterTextBoxUpdate(textBox) {
      // NOTE: this does get called every time ScrollWrapper updates (ex. on each scroll change)
      if (this._prevW !== textBox.finalW || this._prevH !== textBox.finalH) {
        this._prevW = textBox.finalW;
        this._prevH = textBox.finalH;
        this._updateScrollWrapperLayout();
        this._updateAlpha();
      }
    }
  }, {
    key: "_resetFlexContainer",
    value: function _resetFlexContainer() {
      this._FadeContainer.patch({
        ScrollContainer: undefined
      });
      this._FadeContainer.patch({
        ScrollContainer: {
          w: function w(_w) {
            return _w;
          },
          wordWrap: true
        }
      });
    }
  }, {
    key: "_update",
    value: function _update() {
      if (this._contentChanged) {
        this._resetFlexContainer();
        this._updateAutoScroll();
      }
      this._updateScrollContainer();
      this._updateScrollWrapperLayout();
      this._updateAlpha();
    }
  }, {
    key: "_updateAutoScroll",
    value: function _updateAutoScroll() {
      this.resetScroll();
      this._setupAutoScroll();
      this._contentChanged = false;
    }
  }, {
    key: "_updateScrollWrapperLayout",
    value: function _updateScrollWrapperLayout() {
      this._ScrollContainer.patch({
        w: this._contentWidth
      });
      this._updateFadeContainer();
      this._updateSlider();
    }
  }, {
    key: "_updateAlpha",
    value: function _updateAlpha() {
      this._Slider.smooth = {
        alpha: this.showScrollBar && this._isFocusedMode ? 1 : 0
      };
    }
  }, {
    key: "_updateFadeContainer",
    value: function _updateFadeContainer() {
      var isScrollable = this._ScrollContainer.finalH > this.h;
      var shouldFade = this.fadeContent && isScrollable && !this._isEndContentVisible;
      this._FadeContainer.patch({
        h: this.h,
        w: this._contentWidth,
        y: this.style.contentMarginTop,
        x: this.style.contentMarginLeft,
        rtt: true,
        shader: shouldFade ? {
          type: lightning_esm/* default */.A.shaders.FadeOut,
          bottom: this.style.fadeHeight
        } : undefined
      });
    }
  }, {
    key: "_scrollContainerLoaded",
    value: function _scrollContainerLoaded(_ref) {
      var h = _ref.h;
      this._ScrollContainer.h = h;
      this._updateScrollWrapperLayout();
    }
  }, {
    key: "_updateScrollContainer",
    value: function _updateScrollContainer() {
      var _this = this;
      if (!this.content) return;
      if (typeof this.content === 'string') {
        this._ScrollContainer.patch({
          flex: {
            direction: 'column'
          },
          ScrollableText: {
            h: 0,
            w: this._contentWidth,
            type: TextBox/* default */.A,
            content: this.content,
            style: {
              textStyle: _objectSpread(_objectSpread({}, this.style.textStyle), {}, {
                wordWrap: true,
                wordWrapWidth: this._contentWidth
              })
            },
            signals: {
              textBoxChanged: '_scrollContainerLoaded'
            },
            onAfterUpdate: this._afterTextBoxUpdate.bind(this)
          }
        });
      } else if (Array.isArray(this.content)) {
        var content = {};
        this.content.forEach(function (item, index) {
          var id = "ScrollText".concat(index);
          content[id] = _objectSpread({
            w: _this._contentWidth
          }, item);
          if (item.text) {
            content[id] = {
              type: TextBox/* default */.A,
              content: item.text,
              style: {
                textStyle: _objectSpread(_objectSpread(_objectSpread({}, _this.style.textStyle), item.style), {}, {
                  wordWrap: true,
                  wordWrapWidth: _this._contentWidth
                })
              },
              onAfterUpdate: _this._afterTextBoxUpdate.bind(_this)
            };
          }
        });
        this._ScrollContainer.patch(_objectSpread({
          flex: {
            direction: this.flexDirection,
            wrap: this.shouldWrap
          }
        }, content));
      }
    }
  }, {
    key: "_scrollDown",
    value: function _scrollDown() {
      var hasContentToScrollTo = this._scrollContainerY + this._ScrollContainer.finalH > this.renderHeight;
      if (hasContentToScrollTo) {
        var targetY = this._scrollContainerY - this.scrollStep;
        var canScrollByStepLength = targetY + this._ScrollContainer.finalH > this.renderHeight;
        var scrollEndY = this.renderHeight - this._ScrollContainer.finalH - this.style.contentMarginTop;
        this._ScrollContainer.patch({
          smooth: {
            y: [canScrollByStepLength ? targetY : scrollEndY, this._scrollAnimation]
          }
        });
        var hasScrolledToEnd = this._scrollContainerY + this._ScrollContainer.finalH <= this.h;
        if (hasScrolledToEnd) {
          this._isEndContentVisible = true;
          this._autoScrollComplete = true;
          this.fireAncestors('$scrollChanged', 'endDown', this);
          this._updateFadeContainer();
        }
      } else {
        this.signal('onDownAtBottom');
      }
    }
  }, {
    key: "_scrollUp",
    value: function _scrollUp() {
      var canScrollUp = this._scrollContainerY < 0;
      if (canScrollUp) {
        var targetY = this._scrollContainerY + this.scrollStep;
        var canScrollByStepLength = targetY < 0;
        this._ScrollContainer.patch({
          smooth: {
            y: [canScrollByStepLength ? targetY : 0, this._scrollAnimation]
          }
        });
        var isScrollable = this._scrollContainerY + this._ScrollContainer.finalH > this.renderHeight;
        if (isScrollable) {
          this._autoScrollComplete = false;
        }
        if (this._scrollContainerY >= 0) {
          this.fireAncestors('$scrollChanged', 'endUp', this);
        }
        if (this._isEndContentVisible) {
          this._isEndContentVisible = false;
          this._updateFadeContainer();
        }
      } else {
        this.signal('onUpAtTop');
      }
    }
  }, {
    key: "resetScroll",
    value: function resetScroll() {
      this._ScrollContainer.y = 0;
      this._Slider.value = 0;
      this._ScrollContainer.transition('y').finish();
      delete this._ScrollContainer._transitions;
      this._autoScrollComplete = false;
    }
  }, {
    key: "_setAutoScroll",
    value: function _setAutoScroll(val) {
      if (this._autoScroll !== val) {
        this._autoScroll = val;
      }
      this._setupAutoScroll();
      return val;
    }
  }, {
    key: "_setupAutoScroll",
    value: function _setupAutoScroll() {
      var _this2 = this;
      clearTimeout(this._startAutoScroll);
      clearTimeout(this._performAutoScrollTimer);
      if (this.autoScroll) {
        this._startAutoScroll = setTimeout(function () {
          return _this2._performAutoScroll();
        }, isNaN(this.autoScrollDelay) ? 2000 : this.autoScrollDelay);
      }
    }
  }, {
    key: "_performAutoScroll",
    value: function _performAutoScroll() {
      var _this3 = this;
      if (this.autoScroll && !this._autoScrollComplete) {
        this._Slider._handleDown();
        this._performAutoScrollTimer = setTimeout(function () {
          return _this3._performAutoScroll();
        }, isNaN(this.autoScrollSpeed) ? 200 : this.autoScrollSpeed);
      }
    }
  }, {
    key: "_setContent",
    value: function _setContent(content) {
      if (content !== this._content && this.enabled) {
        this._contentChanged = true;
      }
      return content;
    }
  }, {
    key: "_updateScrollContainerSize",
    value: function _updateScrollContainerSize(slider) {
      if (this._sliderWidth !== slider._Container.h) {
        this._sliderWidth = slider._Container.h;
        this._updateScrollContainer();
      }
    }
  }, {
    key: "_updateSlider",
    value: function _updateSlider() {
      // height of off-screen items that can be scrolled to
      var scrollHeight = Math.max(this._ScrollContainer.finalH - this.renderHeight, 0);

      // number of steps to scroll to the bottom of ScrollContainer
      var contentScrollSteps = scrollHeight > 0 ? Math.ceil(scrollHeight / this.scrollStep) : 1;

      // max value of slider
      var sliderMax = this.renderHeight;

      // distance slider should move on each key press
      var sliderStep = contentScrollSteps > 0 ? sliderMax / contentScrollSteps : sliderMax;

      // Ensure _Slider and required properties exist
      if (this._Slider) {
        // This is a vertical slider, so w is actually controlling the height
        this._Slider.patch({
          x: this.w - this._sliderWidth,
          w: sliderMax,
          min: 0,
          max: sliderMax,
          step: sliderStep,
          onUp: this._scrollUp.bind(this),
          onDown: this._scrollDown.bind(this)
        });
      }
    }
  }, {
    key: "_contentWidth",
    get: function get() {
      return this.w - this.style.contentMarginLeft - this.style.sliderMarginLeft - this._sliderWidth;
    }
  }, {
    key: "_scrollContainerY",
    get: function get() {
      return this._ScrollContainer.transition('y').targetValue;
    }
  }, {
    key: "_scrollAnimation",
    get: function get() {
      var duration = isNaN(this.scrollDuration) ? this.style.scroll.duration : this.scrollDuration;
      return _objectSpread(_objectSpread({}, this.style.scroll), {}, {
        duration: duration
      });
    }
  }, {
    key: "_getFocused",
    value: function _getFocused() {
      return this._Slider;
    }
  }, {
    key: "announce",
    get: function get() {
      if (this._announce) {
        return this._announce;
      }
      if (Array.isArray(this.content)) {
        if (this._ScrollContainer && this._ScrollContainer.children && this._ScrollContainer.children.length) {
          return this._ScrollContainer.children.map(function (item) {
            return item.announce;
          });
        } else {
          return this.content.map(function (item) {
            return item.announce || item.text;
          });
        }
      }
      return this.content;
    },
    set: function set(announce) {
      _superPropSet(ScrollWrapper, "announce", announce, this, 1, 1);
    }
  }], [{
    key: "__themeStyle",
    get: function get() {
      return ScrollWrapper_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      return {
        clipping: true,
        FadeContainer: {
          ScrollContainer: {
            w: function w(_w2) {
              return _w2;
            },
            wordWrap: true
          }
        },
        Slider: {
          type: ScrollSlider,
          vertical: true,
          signals: {
            onSizeChange: '_updateScrollContainerSize'
          },
          announce: ' '
        }
      };
    }
  }, {
    key: "__componentName",
    get: function get() {
      return 'ScrollWrapper';
    }
  }, {
    key: "properties",
    get: function get() {
      return ['autoScroll', 'autoScrollDelay', 'autoScrollSpeed', 'content', 'fadeContent', 'scrollDuration', 'scrollStep', 'showScrollBar', 'shouldWrap', 'flexDirection'];
    }
  }, {
    key: "tags",
    get: function get() {
      return ['FadeContainer', 'Slider', {
        name: 'ScrollContainer',
        path: 'FadeContainer.ScrollContainer'
      }, {
        name: 'ScrollableText',
        path: 'ScrollContainer.ScrollableText'
      }];
    }
  }]);
}(Base/* default */.A);

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Tile/Tile.js + 1 modules
var Tile = __webpack_require__("../../@lightningjs/ui-components/src/components/Tile/Tile.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/docs/utils.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ScrollWrapper/ScrollWrapper.stories.js
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






const terms = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet risus feugiat in ante metus dictum. Pretium fusce id velit ut tortor pretium viverra suspendisse. Pharetra convallis posuere morbi leo urna. Nunc sed velit dignissim sodales. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Facilisis gravida neque convallis a cras semper auctor. Pellentesque pulvinar pellentesque habitant morbi tristique. Non tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Amet risus nullam eget felis eget nunc. Auctor urna nunc id cursus metus aliquam eleifend mi in. Integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Ac felis donec et odio pellentesque. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Sit amet risus nullam eget felis eget.

Mi proin sed libero enim sed faucibus. Arcu vitae elementum curabitur vitae nunc sed velit. Volutpat blandit aliquam etiam erat velit. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Tristique risus nec feugiat in. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Eget est lorem ipsum dolor sit amet consectetur. At tellus at urna condimentum mattis pellentesque id. Maecenas accumsan lacus vel facilisis. Metus dictum at tempor commodo ullamcorper a lacus. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Tempor nec feugiat nisl pretium fusce id velit ut.`;
/* harmony default export */ const ScrollWrapper_stories = ({
  title: 'Components/ScrollWrapper'
});
const sharedArgs = {
  autoScroll: false,
  autoScrollDelay: 2000,
  autoScrollSpeed: 200,
  fadeContent: true,
  scrollDuration: 0.2,
  scrollStep: 10,
  showScrollBar: true,
  mode: 'focused'
};
const sharedArgTypes = {
  ...(0,utils/* createModeControl */.Pg)({
    options: ['unfocused', 'focused'],
    summaryValue: false
  }),
  autoScroll: {
    control: 'boolean',
    description: 'Whether or not to auto scroll the content',
    type: 'boolean',
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  autoScrollDelay: {
    control: 'number',
    description: 'Delay, in ms, before auto scroll starts',
    type: 'number',
    table: {
      defaultValue: {
        summary: 2000
      }
    }
  },
  autoScrollSpeed: {
    control: 'number',
    description: 'Time delay, in ms, before each scroll step',
    type: 'number',
    table: {
      defaultValue: {
        summary: 2000
      }
    }
  },
  fadeContent: {
    control: 'boolean',
    description: 'Fade out content at the bottom of the ScrollWrapper',
    type: 'boolean',
    table: {
      defaultValue: {
        summary: true
      }
    }
  },
  scrollDuration: {
    control: 'number',
    description: 'Animation duration for the scroll',
    type: 'number',
    table: {
      defaultValue: {
        summary: 0.2
      }
    }
  },
  scrollStep: {
    control: 'number',
    description: 'How many pixels to scroll by on every up/down keypress',
    type: 'number',
    table: {
      defaultValue: {
        summary: 10
      }
    }
  },
  showScrollBar: {
    control: 'boolean',
    description: 'Show the scroll bar when focused ',
    type: 'boolean',
    table: {
      defaultValue: {
        summary: true
      }
    }
  }
};
const Basic = args => class Basic extends lightning_esm/* default */.A.Component {
  static _template() {
    return {
      ScrollWrapper: {
        type: ScrollWrapper,
        h: 448,
        w: 796,
        content: terms,
        signals: {
          scrollChanged: true
        }
      }
    };
  }
  $scrollChanged(type) {
    args.scrollChanged && args.scrollChanged(type);
  }
};
Basic.args = sharedArgs;
Basic.argTypes = sharedArgTypes;
Basic.parameters = {
  storyDetails: 'The ScrollWrapper content property is set as a string.'
};
const TextArray = args => class TextArray extends lightning_esm/* default */.A.Component {
  static _template() {
    return {
      ScrollWrapper: {
        type: ScrollWrapper,
        h: 450,
        w: 600,
        wordWrap: true,
        content: [{
          text: 'Text Heading',
          style: {
            fontFace: 'XfinityBrownBold',
            alignContent: 'center'
          }
        }, {
          text: terms,
          style: {
            alignContent: 'left',
            fontSize: '30'
          }
        }],
        signals: {
          scrollChanged: true
        }
      }
    };
  }
  $scrollChanged(type) {
    args.scrollChanged(type);
  }
};
TextArray.args = sharedArgs;
TextArray.argTypes = sharedArgTypes;
TextArray.parameters = {
  storyDetails: 'The ScrollWrapper content property is set as an array of text objects. See the InlineContent documentation for more details on these types of objects.'
};
const ObjectArray = args => class ObjectArray extends lightning_esm/* default */.A.Component {
  static _template() {
    return {
      ScrollWrapper: {
        type: ScrollWrapper,
        h: 764,
        w: 1200,
        shouldWrap: true,
        // determines if items should wrap around ScrollContainer
        flexDirection: 'row',
        //determines the direction items are placed in flexContainer
        content: Array.from(Array(6)).map(() => ({
          shader: {
            type: lightning_esm/* default */.A.shaders.RoundedRectangle,
            radius: 16
          },
          type: Tile/* default */.A,
          rect: true,
          w: 308,
          h: 400,
          color: 0xf53e3e45,
          flexItem: {
            margin: 24
          },
          Text: {
            type: TextBox/* default */.A,
            x: 20,
            y: 10,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet risus feugiat in ante metus dictum. Pretium fusce id velit ut tortor pretium viverra suspendisse. Pharetra convallis posuere morbi leo urna.',
            style: {
              textStyle: {
                fontSize: 27,
                lineHeight: null,
                maxLines: 0,
                textAlign: 'left',
                verticalAlign: 'middle',
                wordWrapWidth: 270
              }
            },
            shader: {
              type: lightning_esm/* default */.A.shaders.RoundedRectangle,
              radius: 0
            }
          }
        })),
        signals: {
          scrollChanged: true
        }
      }
    };
  }
  $scrollChanged(type) {
    args.scrollChanged(type);
  }
};
ObjectArray.args = sharedArgs;
ObjectArray.argTypes = sharedArgTypes;
ObjectArray.parameters = {
  storyDetails: 'The ScrollWrapper content property is set as an array of Lightning elements.'
};
;
const __namedExportsOrder = ["Basic", "TextArray", "ObjectArray"];
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "args => class Basic extends lng.Component {\n  static _template() {\n    return {\n      ScrollWrapper: {\n        type: ScrollWrapperComponent,\n        h: 448,\n        w: 796,\n        content: terms,\n        signals: {\n          scrollChanged: true\n        }\n      }\n    };\n  }\n  $scrollChanged(type) {\n    args.scrollChanged && args.scrollChanged(type);\n  }\n}",
      ...Basic.parameters?.docs?.source
    }
  }
};
TextArray.parameters = {
  ...TextArray.parameters,
  docs: {
    ...TextArray.parameters?.docs,
    source: {
      originalSource: "args => class TextArray extends lng.Component {\n  static _template() {\n    return {\n      ScrollWrapper: {\n        type: ScrollWrapperComponent,\n        h: 450,\n        w: 600,\n        wordWrap: true,\n        content: [{\n          text: 'Text Heading',\n          style: {\n            fontFace: 'XfinityBrownBold',\n            alignContent: 'center'\n          }\n        }, {\n          text: terms,\n          style: {\n            alignContent: 'left',\n            fontSize: '30'\n          }\n        }],\n        signals: {\n          scrollChanged: true\n        }\n      }\n    };\n  }\n  $scrollChanged(type) {\n    args.scrollChanged(type);\n  }\n}",
      ...TextArray.parameters?.docs?.source
    }
  }
};
ObjectArray.parameters = {
  ...ObjectArray.parameters,
  docs: {
    ...ObjectArray.parameters?.docs,
    source: {
      originalSource: "args => class ObjectArray extends lng.Component {\n  static _template() {\n    return {\n      ScrollWrapper: {\n        type: ScrollWrapperComponent,\n        h: 764,\n        w: 1200,\n        shouldWrap: true,\n        // determines if items should wrap around ScrollContainer\n        flexDirection: 'row',\n        //determines the direction items are placed in flexContainer\n        content: Array.from(Array(6)).map(() => ({\n          shader: {\n            type: lng.shaders.RoundedRectangle,\n            radius: 16\n          },\n          type: Tile,\n          rect: true,\n          w: 308,\n          h: 400,\n          color: 0xf53e3e45,\n          flexItem: {\n            margin: 24\n          },\n          Text: {\n            type: TextBox,\n            x: 20,\n            y: 10,\n            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet risus feugiat in ante metus dictum. Pretium fusce id velit ut tortor pretium viverra suspendisse. Pharetra convallis posuere morbi leo urna.',\n            style: {\n              textStyle: {\n                fontSize: 27,\n                lineHeight: null,\n                maxLines: 0,\n                textAlign: 'left',\n                verticalAlign: 'middle',\n                wordWrapWidth: 270\n              }\n            },\n            shader: {\n              type: lng.shaders.RoundedRectangle,\n              radius: 0\n            }\n          }\n        })),\n        signals: {\n          scrollChanged: true\n        }\n      }\n    };\n  }\n  $scrollChanged(type) {\n    args.scrollChanged(type);\n  }\n}",
      ...ObjectArray.parameters?.docs?.source
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
//# sourceMappingURL=components-ScrollWrapper-ScrollWrapper-mdx.5de9f842.iframe.bundle.js.map