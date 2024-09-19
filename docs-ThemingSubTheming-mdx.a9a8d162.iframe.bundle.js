(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[4713],{

/***/ "../../@lightningjs/ui-components/src/docs/ThemingSubTheming.mdx":
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
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/assets/images/SubTheming.png
const SubTheming_namespaceObject = __webpack_require__.p + "static/media/SubTheming.069108e2.png";
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/assets/images/July4thProgressBar.png
const July4thProgressBar_namespaceObject = __webpack_require__.p + "static/media/July4thProgressBar.19574392.png";
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/assets/images/UpdatedJuly4thProgressBar.png
const UpdatedJuly4thProgressBar_namespaceObject = __webpack_require__.p + "static/media/UpdatedJuly4thProgressBar.27aaa36c.png";
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/assets/images/MultiSubThemeProgressBars.png
const MultiSubThemeProgressBars_namespaceObject = __webpack_require__.p + "static/media/MultiSubThemeProgressBars.aaf638f0.png";
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/docs/ThemingSubTheming.mdx



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
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: ["\n", "\n", "\n", (0,jsx_runtime.jsx)(dist/* Meta */.W8, {
      title: "Docs / Theming/ Subtheming"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "subtheming",
      children: "Subtheming"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Subtheming allows users to set unique themes on a subset of components without affecting the overarching application. It allows us to create multiple variations of an existing theme to be used across different elements and components."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-cases",
      children: "Use Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "There are certain cases where we may need all the children of a Lightning element or component to have slightly different theme values. For example, a special browse page of 4th of July movies or perhaps a Shark Week promotion section. Distinct color palettes can be used to reflect these special occasions, but it's not always the case that we want entirely new brand (new radius, spacing, etc) values to be applied across entire pages. This is where subtheming comes in."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Subtheming allows us to target certain properties of a theme to change while still keeping the values of the other theme properties. For example, we can create a subtheme of the main theme where we change the core colors to reflect that of Shark Week with its variations of blues and add that to an element like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProgressBar"
      }), ". In this example, the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProgressBar"
      }), "'s color would reflect the new blue values from the sub-theme. However, its radius values would still reflect those of the main theme. Additionally, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProgressBar"
      }), " components used outside the context of this sub-theme will continue to use the brand colors of the main theme."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Likewise, if there are multiple elements to a page, we can set a certain element to have a sub-theme (a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TabBar"
      }), " with the Shark Week sub-theme) while the other elements (a display of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tiles"
      }), ") have the main theme. This allows the user to have two unique experiences living in the same visual space."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "steps-to-utilizing-a-sub-theme",
      children: "Steps to Utilizing a Sub-Theme"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-set-the-theme",
      children: "1. Set the theme"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A sub-theme can't exist without a parent theme thus we first need to specify which theme our component(s) should be using."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Refer to ", (0,jsx_runtime.jsx)(_components.a, {
        href: "?path=/docs/docs-theming-overview--docs",
        children: "theming"
      }), " for how to set the theme."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Reminder that without a specified theme, the Base open-source theme will be used by default."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-set-the-sub-theme",
      children: "2. Set the sub-theme"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["To create a sub-theme, we'll need to utilize ", (0,jsx_runtime.jsx)(_components.code, {
        children: "context"
      }), " and its ", (0,jsx_runtime.jsx)(_components.code, {
        children: "setSubTheme"
      }), " method. The method takes in the sub-theme name followed by the properties and values of the sub-theme as parameters."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For example, let's imagine we'd like some components to reflect the 4th of July holiday. Our ", (0,jsx_runtime.jsx)(_components.code, {
        children: "setSubTheme"
      }), " method might look something like:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "context.setSubTheme('4thOfJuly', {\n  color: {\n    coreNeutral: ['#BF4146', 1], // red\n    coreNeutralSecondary: ['#FAF2E6', 85], // white\n    coreNeutralTertiary: ['#80A1C2', 85] // blue\n  },\n  componentConfig: {\n    MetadataTile: {\n      style: {\n        descriptionTextStyle: {\n          textColor: ['#FAF2E6', 85]\n        }\n      }\n    }\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Here we're changing the colors of the existing theme, specifically the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "coreNeutral"
      }), " values and the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "textColor"
      }), " of the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tile"
      }), "'s description text, to reflect that of the holiday."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-apply-the-sub-theme-to-the-components-in-need",
      children: "3. Apply the sub-theme to the components in need"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After creating our sub-theme, we need to specify which components will be utilizing the sub-theme. Once the components have been picked out, there are two methods to applying the sub-theme."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "method-1-lightning-element",
      children: "Method 1: Lightning Element"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The first method is by utilizing the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_template"
      }), " function and returning a component with the specified sub-theme."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For example, let's say we have a page of movie ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tiles"
      }), " and it's getting closer to the 4th of July holiday so we want to have a section displaying 4th of July movies. In this case, we can create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_template"
      }), " function like this:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "static _template() {\n  return {\n    ContentTiles: {\n      type: Column,\n      style: {\n        itemSpacing: 60,\n      }\n      items: [\n        {\n          subTheme: '4thOfJuly',\n          type: Row,\n          autoResizeHeight: true,\n          items: featuredTilesArray\n        },\n        {\n          type: Row,\n          autoResizeHeight: true,\n          items: baseTilesArray\n        }\n      ]\n    }\n  };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Here we have two ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Row"
      }), " components each containing a set amount of movie ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Tiles"
      }), ". The first ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Row"
      }), " features the 4th of July movies so the '4thOfJuly' ", (0,jsx_runtime.jsx)(_components.code, {
        children: "subTheme"
      }), " with its red, white, and blue values has been applied to it. On the other hand, the second ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Row"
      }), " will only reflect the main theme. The following should be displayed:"]
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: SubTheming_namespaceObject,
      alt: "Row of Tiles with '4thOfJuly' subTheme and a Row with main theme",
      width: "700"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "method-2-subtheme-getter-method",
      children: ["Method 2: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "subTheme"
      }), " Getter Method"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Another way to apply the sub-theme is by using a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "subTheme"
      }), " getter method that returns the name of the sub-theme to be used."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " This will also apply the sub-theme to all LUI components that are children of this component."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For example, let's focus on the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProgressBar"
      }), " component. We can include this:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "get subTheme() {\n  return '4thOfJuly'\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Assuming we are generating a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProgressBar"
      }), " component, our resulting ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProgressBar"
      }), " should display:"]
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: July4thProgressBar_namespaceObject,
      alt: "Progress Bar with the 4th of July sub-theme",
      width: "600"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProgressBar"
      }), " uses both ", (0,jsx_runtime.jsx)(_components.code, {
        children: "coreNeutral"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "coreNeutralTertiary"
      }), " to define its ", (0,jsx_runtime.jsx)(_components.code, {
        children: "progressColor"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "barColor"
      }), ", respectively. Since our '4thOfJuly' sub-theme updated those values, we see the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "progressColor"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "barColor"
      }), " of the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProgressBar"
      }), " reflecting the values set in the sub-theme."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProgressBar"
      }), " is built off the Base open-source theme. Because the radius was never set, the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProgressBar"
      }), " still continues to reflect the radius value of the Base theme which is set to 0."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " Adding the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "subTheme"
        }), " getter method will apply the sub-theme globally to all the listed components inside the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_template"
        }), " function\nthat do not have an assigned sub-theme.\nAs in, if another ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ProgressBar"
        }), " were to be added to the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_template"
        }), " function, it would have the '4thOfJuly' sub-theme if the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "subTheme"
        }), " property was not applied to it.\nOtherwise, if it does have a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "subTheme"
        }), " applied, eg 'sharkWeek', then the 'sharkWeek' sub-theme will overwrite the globally set '4thOfJuly' sub-theme."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-does-it-work",
      children: "How Does it Work?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Now that we understand how to create and use a sub-theme, let's digest how the component is able to determine how to retrieve the sub-theme. This all lies in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_getSubTheme"
      }), " method."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_getSubTheme"
      }), " method is executed on the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_setup"
      }), " lifecycle event. In this function (displayed below), we can see that each component continuously goes through its parents to check if a sub-theme is applied to that component until there are no more parent components left to check."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "_getSubTheme() {\n  let parent = this.p;\n  while (parent && !parent.subTheme) {\n    parent = parent.parent;\n  }\n  return (parent && parent.subTheme) || undefined;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["As soon as a parent component detects a sub-theme, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_getSubTheme"
      }), " exits the loop and returns the sub-theme. If the highest parent component up the chain is reached without returning/discovering a sub-theme, then the component will use the global theme."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Important:"
        }), " If the parent theme is updated, the system will clear the cache the sub-themes depend on, regenerating the sub-theme, and ultimately updating the child elements that rely on the sub-theme."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "other-useful-methods-for-subtheming",
      children: "Other Useful Methods for Subtheming"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Close to the functionality of the global theme, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "context"
      }), " also has ", (0,jsx_runtime.jsx)(_components.code, {
        children: "updateSubTheme"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "removeSubTheme"
      }), " methods available. In addition, it has a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "setSubThemes"
      }), " method which is used to generate multiple sub-themes at once."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "updatesubtheme",
      children: "updateSubTheme"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Similar to the Lightning ", (0,jsx_runtime.jsx)(_components.code, {
        children: "patch"
      }), " object, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "updateSubTheme"
      }), " will only overwrite the properties specified and will not affect any other values from the existing sub-theme."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For example:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "context.updateSubTheme('4thOfJuly', {\n  color: {\n    coreNeutral: ['#FAF2E6', 85]\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Here, we updated the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "coreNeutral"
      }), " value to white, which will then update the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProgressBar"
      }), "'s ", (0,jsx_runtime.jsx)(_components.code, {
        children: "progressColor"
      }), ". This will only affect the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProgressBar"
      }), " to which we have applied the sub-theme. All other colors, like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "barColor"
      }), " will remain unchanged."]
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: UpdatedJuly4thProgressBar_namespaceObject,
      alt: "Progress Bar with the 4th of July sub-theme",
      width: "600"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "removesubtheme",
      children: "removeSubTheme"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "removeSubTheme"
      }), " method helps to free up memory when a sub-theme is no longer needed. This can be especially important for devices with limited resources."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "context.removeSubTheme('4thOfJuly');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setsubthemes",
      children: "setSubThemes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "setSubThemes"
      }), " method can be used to create multiple sub-themes at once by taking in a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "subThemes"
      }), " object. The keys of the object reflect the name of the sub-theme."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The example below will create both a sub-theme reflecting the 4th of July colors as well as a sub-theme reflecting colors for Shark Week."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "context.setSubThemes({\n  '4thOfJuly': {\n    color: {\n      coreNeutral: ['#BF4146', 1], // red\n      coreNeutralSecondary: ['#FAF2E6', 85], // white\n      coreNeutralTertiary: ['#80A1C2', 85] // blue\n    }\n  },\n  sharkWeek: {\n    color: {\n      coreNeutral: ['#0078F0', 85],\n      coreNeutralSecondary: ['#A9ABAB', 24],\n      coreNeutralTertiary: ['#05C5FF', 27]\n    }\n  }\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The sub-themes can be applied using the 'Lightning Element' method described in step 3 of 'Steps to Utilizing a Sub-Theme.'"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-js",
        children: "static _template() {\n  return {\n    July4thProgressBar: {\n      subTheme: '4thOfJuly',\n      ProgressBar: {\n        type: ProgressBar,\n        progress: 0.5,\n        w: 600\n      }\n    },\n    SharkWeekProgressBar: {\n      subTheme: 'sharkWeek',\n      ProgressBar: {\n        y: 100,\n        type: ProgressBar,\n        progress: 0.5,\n        w: 600\n      }\n    }\n  };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The above code will render two ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ProgressBar"
      }), " components, each utilizing a different sub-theme, as shown below."]
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: MultiSubThemeProgressBars_namespaceObject,
      alt: "Two Progress Bars using the 4th of July sub-theme and Shark Week sub-theme, respectively",
      width: "600"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " Utilizing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setSubThemes"
        }), " is a convenient way to add multiple sub-themes at one time.\nIt does not provide any performance enhancements over using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setSubTheme"
        }), " for each individual sub-theme."]
      }), "\n"]
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
//# sourceMappingURL=docs-ThemingSubTheming-mdx.a9a8d162.iframe.bundle.js.map