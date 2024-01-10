(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[2916,2140],{

/***/ "../../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../../@lightningjs/ui-components/src/components/TextBox/TextBox.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Basic: () => (/* binding */ Basic),
/* harmony export */   WithInlineContentArray: () => (/* binding */ WithInlineContentArray),
/* harmony export */   WithInlineContentString: () => (/* binding */ WithInlineContentString),
/* harmony export */   WithInlineContentTruncation: () => (/* binding */ WithInlineContentTruncation),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
/* harmony import */ var _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
/* harmony import */ var _InlineContent_InlineContent_stories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/InlineContent/InlineContent.stories.js");
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
/* eslint-disable */
// @ts-nocheck
// @ts-expect-error (Converted from ts-ignore)
var __STORY__ = "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport TextBox from '.';\nimport lightningbolt from '../../assets/images/ic_lightning_white_32.png';\nimport { getHexColor } from '../../utils';\nimport inlineContentStory from '../InlineContent/InlineContent.stories';\n\nexport default {\n  title: 'Components/TextBox'\n};\n\nconst { args: inlineContentArgs, argTypes: inlineContentArgTypes } =\n  inlineContentStory;\n\nconst lorum =\n  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales est eu eleifend interdum. Vivamus egestas maximus elementum. Sed condimentum ligula justo, non sollicitudin lectus rutrum vel. Integer iaculis vitae nisl quis tincidunt. Sed quis dui vehicula, vehicula felis a, tempor leo. Fusce tincidunt, ante eget pretium efficitur, libero elit volutpat quam, sit amet porta tortor odio non ligula. Ut sed dolor eleifend massa auctor porttitor eget ut lectus. Vivamus elementum lorem mauris, eu luctus tortor posuere sit amet. Nunc a interdum metus.';\n\nexport const Basic = () =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        TextBox: {\n          type: TextBox,\n          fixed: true,\n          w: 600,\n          style: { textStyle: { maxLines: 3 } }\n        }\n      };\n    }\n  };\n\nBasic.args = {\n  content: lorum,\n  marquee: false,\n  fixed: true,\n  hideOnLoad: false,\n  w: 600\n};\n\nBasic.argTypes = {\n  content: {\n    control: 'text',\n    description: 'Text to be displayed in element',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  marquee: {\n    control: 'boolean',\n    description:\n      \"Scrolls text when a single line of text is longer than the textbox's width\",\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  fixed: {\n    control: 'boolean',\n    description:\n      'Flag that when set to `true`, allows the width of the component to be set with `w`',\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  hideOnLoad: {\n    control: 'boolean',\n    remount: true,\n    description:\n      'If `true`, the component will not render as visible following the text texture loading. This allows manually controlling the alpha of the component. The component will not render as visible if this is set to true.',\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  w: {\n    control: 'number',\n    description:\n      'When the `fixed` property is `true`, this will set the width of the component (but only if `wordWrapWidth` is not defined otherwise the width will reflect the `wordWrapWidth` value)',\n    table: {\n      defaultValue: { summary: 0 }\n    }\n  }\n};\n\nexport const WithInlineContentArray = () =>\n  class WithInlineContentArray extends lng.Component {\n    static _template() {\n      return {\n        TextBox: {\n          type: TextBox,\n          x: 200,\n          w: 400,\n          content: [\n            'Text',\n            {\n              icon: lightningbolt,\n              style: { color: getHexColor('00ff00') },\n              title: 'Green Lightning Bolt'\n            },\n            'Wrapping Text',\n            {\n              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n              title: 'Rotten Tomatoes rating'\n            },\n            'and more text',\n            {\n              text: 'with some red ',\n              style: { textColor: getHexColor('FF6194') }\n            },\n            'for fun',\n            { badge: 'HD', title: 'HD' },\n            { badge: 'SD', title: 'SD' }\n          ]\n        }\n      };\n    }\n  };\n\nWithInlineContentArray.args = inlineContentArgs;\nWithInlineContentArray.argTypes = inlineContentArgTypes;\n\nexport const WithInlineContentString = () =>\n  class WithInlineContentArray extends lng.Component {\n    static _template() {\n      return {\n        TextBox: {\n          type: TextBox,\n          x: 400,\n          w: 400,\n          content:\n            'This is an example of using custom markup {ICON:settings|https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png} with a linebreak{NEWLINE}{BADGE:HD} that includes all available types like {TEXT:styled text|italic}.',\n          customStyleMappings: {\n            italic: {\n              fontStyle: 'italic',\n              textColor: getHexColor('FF6194')\n            }\n          }\n        }\n      };\n    }\n  };\n\nWithInlineContentString.args = inlineContentArgs;\nWithInlineContentString.argTypes = inlineContentArgTypes;\n\nexport const WithInlineContentTruncation = () =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        TextBox: {\n          type: TextBox,\n          w: 500,\n          style: {\n            textStyle: {\n              maxLines: 2,\n              maxLinesSuffix: '...'\n            }\n          },\n          content: [\n            'Text',\n            {\n              icon: lightningbolt,\n              title: 'Green Lightning Bolt',\n              style: { color: getHexColor('00ff00') }\n            },\n            'Wrapping Text',\n            {\n              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n              title: 'Rotten Tomatoes rating'\n            },\n            'and more text',\n            {\n              text: 'with some red ',\n              style: { textColor: getHexColor('FF6194') }\n            },\n            'for fun',\n            { badge: 'HD', title: 'HD' },\n            { badge: 'SD', title: 'SD' },\n            ', and this should truncate before going on to a third line.'\n          ],\n          contentWrap: true\n        }\n      };\n    }\n  };\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "Basic": {
    "startLoc": {
      "col": 21,
      "line": 35
    },
    "endLoc": {
      "col": 3,
      "line": 47
    },
    "startBody": {
      "col": 21,
      "line": 35
    },
    "endBody": {
      "col": 3,
      "line": 47
    }
  },
  "WithInlineContentArray": {
    "startLoc": {
      "col": 38,
      "line": 100
    },
    "endLoc": {
      "col": 3,
      "line": 132
    },
    "startBody": {
      "col": 38,
      "line": 100
    },
    "endBody": {
      "col": 3,
      "line": 132
    }
  },
  "WithInlineContentString": {
    "startLoc": {
      "col": 39,
      "line": 137
    },
    "endLoc": {
      "col": 3,
      "line": 156
    },
    "startBody": {
      "col": 39,
      "line": 137
    },
    "endBody": {
      "col": 3,
      "line": 156
    }
  },
  "WithInlineContentTruncation": {
    "startLoc": {
      "col": 43,
      "line": 161
    },
    "endLoc": {
      "col": 3,
      "line": 200
    },
    "startBody": {
      "col": 43,
      "line": 161
    },
    "endBody": {
      "col": 3,
      "line": 200
    }
  }
};

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
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport TextBox from '.';\nimport lightningbolt from '../../assets/images/ic_lightning_white_32.png';\nimport { getHexColor } from '../../utils';\nimport inlineContentStory from '../InlineContent/InlineContent.stories';\n\nexport default {\n  title: 'Components/TextBox'\n};\n\nconst { args: inlineContentArgs, argTypes: inlineContentArgTypes } =\n  inlineContentStory;\n\nconst lorum =\n  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales est eu eleifend interdum. Vivamus egestas maximus elementum. Sed condimentum ligula justo, non sollicitudin lectus rutrum vel. Integer iaculis vitae nisl quis tincidunt. Sed quis dui vehicula, vehicula felis a, tempor leo. Fusce tincidunt, ante eget pretium efficitur, libero elit volutpat quam, sit amet porta tortor odio non ligula. Ut sed dolor eleifend massa auctor porttitor eget ut lectus. Vivamus elementum lorem mauris, eu luctus tortor posuere sit amet. Nunc a interdum metus.';\n\nexport const Basic = () =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        TextBox: {\n          type: TextBox,\n          fixed: true,\n          w: 600,\n          style: { textStyle: { maxLines: 3 } }\n        }\n      };\n    }\n  };\n\nBasic.args = {\n  content: lorum,\n  marquee: false,\n  fixed: true,\n  hideOnLoad: false,\n  w: 600\n};\n\nBasic.argTypes = {\n  content: {\n    control: 'text',\n    description: 'Text to be displayed in element',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  marquee: {\n    control: 'boolean',\n    description:\n      \"Scrolls text when a single line of text is longer than the textbox's width\",\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  fixed: {\n    control: 'boolean',\n    description:\n      'Flag that when set to `true`, allows the width of the component to be set with `w`',\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  hideOnLoad: {\n    control: 'boolean',\n    remount: true,\n    description:\n      'If `true`, the component will not render as visible following the text texture loading. This allows manually controlling the alpha of the component. The component will not render as visible if this is set to true.',\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  w: {\n    control: 'number',\n    description:\n      'When the `fixed` property is `true`, this will set the width of the component (but only if `wordWrapWidth` is not defined otherwise the width will reflect the `wordWrapWidth` value)',\n    table: {\n      defaultValue: { summary: 0 }\n    }\n  }\n};\n\nexport const WithInlineContentArray = () =>\n  class WithInlineContentArray extends lng.Component {\n    static _template() {\n      return {\n        TextBox: {\n          type: TextBox,\n          x: 200,\n          w: 400,\n          content: [\n            'Text',\n            {\n              icon: lightningbolt,\n              style: { color: getHexColor('00ff00') },\n              title: 'Green Lightning Bolt'\n            },\n            'Wrapping Text',\n            {\n              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n              title: 'Rotten Tomatoes rating'\n            },\n            'and more text',\n            {\n              text: 'with some red ',\n              style: { textColor: getHexColor('FF6194') }\n            },\n            'for fun',\n            { badge: 'HD', title: 'HD' },\n            { badge: 'SD', title: 'SD' }\n          ]\n        }\n      };\n    }\n  };\n\nWithInlineContentArray.args = inlineContentArgs;\nWithInlineContentArray.argTypes = inlineContentArgTypes;\n\nexport const WithInlineContentString = () =>\n  class WithInlineContentArray extends lng.Component {\n    static _template() {\n      return {\n        TextBox: {\n          type: TextBox,\n          x: 400,\n          w: 400,\n          content:\n            'This is an example of using custom markup {ICON:settings|https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png} with a linebreak{NEWLINE}{BADGE:HD} that includes all available types like {TEXT:styled text|italic}.',\n          customStyleMappings: {\n            italic: {\n              fontStyle: 'italic',\n              textColor: getHexColor('FF6194')\n            }\n          }\n        }\n      };\n    }\n  };\n\nWithInlineContentString.args = inlineContentArgs;\nWithInlineContentString.argTypes = inlineContentArgTypes;\n\nexport const WithInlineContentTruncation = () =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        TextBox: {\n          type: TextBox,\n          w: 500,\n          style: {\n            textStyle: {\n              maxLines: 2,\n              maxLinesSuffix: '...'\n            }\n          },\n          content: [\n            'Text',\n            {\n              icon: lightningbolt,\n              title: 'Green Lightning Bolt',\n              style: { color: getHexColor('00ff00') }\n            },\n            'Wrapping Text',\n            {\n              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n              title: 'Rotten Tomatoes rating'\n            },\n            'and more text',\n            {\n              text: 'with some red ',\n              style: { textColor: getHexColor('FF6194') }\n            },\n            'for fun',\n            { badge: 'HD', title: 'HD' },\n            { badge: 'SD', title: 'SD' },\n            ', and this should truncate before going on to a third line.'\n          ],\n          contentWrap: true\n        }\n      };\n    }\n  };\n",
      "locationsMap": {
        "basic": {
          "startLoc": {
            "col": 21,
            "line": 35
          },
          "endLoc": {
            "col": 3,
            "line": 47
          },
          "startBody": {
            "col": 21,
            "line": 35
          },
          "endBody": {
            "col": 3,
            "line": 47
          }
        },
        "with-inline-content-array": {
          "startLoc": {
            "col": 38,
            "line": 100
          },
          "endLoc": {
            "col": 3,
            "line": 132
          },
          "startBody": {
            "col": 38,
            "line": 100
          },
          "endBody": {
            "col": 3,
            "line": 132
          }
        },
        "with-inline-content-string": {
          "startLoc": {
            "col": 39,
            "line": 137
          },
          "endLoc": {
            "col": 3,
            "line": 156
          },
          "startBody": {
            "col": 39,
            "line": 137
          },
          "endBody": {
            "col": 3,
            "line": 156
          }
        },
        "with-inline-content-truncation": {
          "startLoc": {
            "col": 43,
            "line": 161
          },
          "endLoc": {
            "col": 3,
            "line": 200
          },
          "startBody": {
            "col": 43,
            "line": 161
          },
          "endBody": {
            "col": 3,
            "line": 200
          }
        }
      }
    }
  },
  title: 'Components/TextBox'
});
var inlineContentArgs = _InlineContent_InlineContent_stories__WEBPACK_IMPORTED_MODULE_1__["default"].args,
  inlineContentArgTypes = _InlineContent_InlineContent_stories__WEBPACK_IMPORTED_MODULE_1__["default"].argTypes;
var lorum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales est eu eleifend interdum. Vivamus egestas maximus elementum. Sed condimentum ligula justo, non sollicitudin lectus rutrum vel. Integer iaculis vitae nisl quis tincidunt. Sed quis dui vehicula, vehicula felis a, tempor leo. Fusce tincidunt, ante eget pretium efficitur, libero elit volutpat quam, sit amet porta tortor odio non ligula. Ut sed dolor eleifend massa auctor porttitor eget ut lectus. Vivamus elementum lorem mauris, eu luctus tortor posuere sit amet. Nunc a interdum metus.';
var Basic = function Basic() {
  return /*#__PURE__*/function (_lng$Component) {
    _inherits(Basic, _lng$Component);
    var _super = _createSuper(Basic);
    function Basic() {
      _classCallCheck(this, Basic);
      return _super.apply(this, arguments);
    }
    _createClass(Basic, null, [{
      key: "_template",
      value: function _template() {
        return {
          TextBox: {
            type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            fixed: true,
            w: 600,
            style: {
              textStyle: {
                maxLines: 3
              }
            }
          }
        };
      }
    }]);
    return Basic;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
Basic.args = {
  content: lorum,
  marquee: false,
  fixed: true,
  hideOnLoad: false,
  w: 600
};
Basic.argTypes = {
  content: {
    control: 'text',
    description: 'Text to be displayed in element',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  marquee: {
    control: 'boolean',
    description: "Scrolls text when a single line of text is longer than the textbox's width",
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  fixed: {
    control: 'boolean',
    description: 'Flag that when set to `true`, allows the width of the component to be set with `w`',
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  hideOnLoad: {
    control: 'boolean',
    remount: true,
    description: 'If `true`, the component will not render as visible following the text texture loading. This allows manually controlling the alpha of the component. The component will not render as visible if this is set to true.',
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  w: {
    control: 'number',
    description: 'When the `fixed` property is `true`, this will set the width of the component (but only if `wordWrapWidth` is not defined otherwise the width will reflect the `wordWrapWidth` value)',
    table: {
      defaultValue: {
        summary: 0
      }
    }
  }
};
var WithInlineContentArray = function WithInlineContentArray() {
  return /*#__PURE__*/function (_lng$Component2) {
    _inherits(WithInlineContentArray, _lng$Component2);
    var _super2 = _createSuper(WithInlineContentArray);
    function WithInlineContentArray() {
      _classCallCheck(this, WithInlineContentArray);
      return _super2.apply(this, arguments);
    }
    _createClass(WithInlineContentArray, null, [{
      key: "_template",
      value: function _template() {
        return {
          TextBox: {
            type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            x: 200,
            w: 400,
            content: ['Text', {
              icon: _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_3__,
              style: {
                color: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getHexColor */ .Xv)('00ff00')
              },
              title: 'Green Lightning Bolt'
            }, 'Wrapping Text', {
              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
              title: 'Rotten Tomatoes rating'
            }, 'and more text', {
              text: 'with some red ',
              style: {
                textColor: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getHexColor */ .Xv)('FF6194')
              }
            }, 'for fun', {
              badge: 'HD',
              title: 'HD'
            }, {
              badge: 'SD',
              title: 'SD'
            }]
          }
        };
      }
    }]);
    return WithInlineContentArray;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
WithInlineContentArray.args = inlineContentArgs;
WithInlineContentArray.argTypes = inlineContentArgTypes;
var WithInlineContentString = function WithInlineContentString() {
  return /*#__PURE__*/function (_lng$Component3) {
    _inherits(WithInlineContentArray, _lng$Component3);
    var _super3 = _createSuper(WithInlineContentArray);
    function WithInlineContentArray() {
      _classCallCheck(this, WithInlineContentArray);
      return _super3.apply(this, arguments);
    }
    _createClass(WithInlineContentArray, null, [{
      key: "_template",
      value: function _template() {
        return {
          TextBox: {
            type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            x: 400,
            w: 400,
            content: 'This is an example of using custom markup {ICON:settings|https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png} with a linebreak{NEWLINE}{BADGE:HD} that includes all available types like {TEXT:styled text|italic}.',
            customStyleMappings: {
              italic: {
                fontStyle: 'italic',
                textColor: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getHexColor */ .Xv)('FF6194')
              }
            }
          }
        };
      }
    }]);
    return WithInlineContentArray;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
WithInlineContentString.args = inlineContentArgs;
WithInlineContentString.argTypes = inlineContentArgTypes;
var WithInlineContentTruncation = function WithInlineContentTruncation() {
  return /*#__PURE__*/function (_lng$Component4) {
    _inherits(Basic, _lng$Component4);
    var _super4 = _createSuper(Basic);
    function Basic() {
      _classCallCheck(this, Basic);
      return _super4.apply(this, arguments);
    }
    _createClass(Basic, null, [{
      key: "_template",
      value: function _template() {
        return {
          TextBox: {
            type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            w: 500,
            style: {
              textStyle: {
                maxLines: 2,
                maxLinesSuffix: '...'
              }
            },
            content: ['Text', {
              icon: _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_3__,
              title: 'Green Lightning Bolt',
              style: {
                color: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getHexColor */ .Xv)('00ff00')
              }
            }, 'Wrapping Text', {
              icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
              title: 'Rotten Tomatoes rating'
            }, 'and more text', {
              text: 'with some red ',
              style: {
                textColor: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getHexColor */ .Xv)('FF6194')
              }
            }, 'for fun', {
              badge: 'HD',
              title: 'HD'
            }, {
              badge: 'SD',
              title: 'SD'
            }, ', and this should truncate before going on to a third line.'],
            contentWrap: true
          }
        };
      }
    }]);
    return Basic;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => class Basic extends lng.Component {\n  static _template() {\n    return {\n      TextBox: {\n        type: TextBox,\n        fixed: true,\n        w: 600,\n        style: {\n          textStyle: {\n            maxLines: 3\n          }\n        }\n      }\n    };\n  }\n}",
      ...Basic.parameters?.docs?.source
    }
  }
};
WithInlineContentArray.parameters = {
  ...WithInlineContentArray.parameters,
  docs: {
    ...WithInlineContentArray.parameters?.docs,
    source: {
      originalSource: "() => class WithInlineContentArray extends lng.Component {\n  static _template() {\n    return {\n      TextBox: {\n        type: TextBox,\n        x: 200,\n        w: 400,\n        content: ['Text', {\n          icon: lightningbolt,\n          style: {\n            color: getHexColor('00ff00')\n          },\n          title: 'Green Lightning Bolt'\n        }, 'Wrapping Text', {\n          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n          title: 'Rotten Tomatoes rating'\n        }, 'and more text', {\n          text: 'with some red ',\n          style: {\n            textColor: getHexColor('FF6194')\n          }\n        }, 'for fun', {\n          badge: 'HD',\n          title: 'HD'\n        }, {\n          badge: 'SD',\n          title: 'SD'\n        }]\n      }\n    };\n  }\n}",
      ...WithInlineContentArray.parameters?.docs?.source
    }
  }
};
WithInlineContentString.parameters = {
  ...WithInlineContentString.parameters,
  docs: {
    ...WithInlineContentString.parameters?.docs,
    source: {
      originalSource: "() => class WithInlineContentArray extends lng.Component {\n  static _template() {\n    return {\n      TextBox: {\n        type: TextBox,\n        x: 400,\n        w: 400,\n        content: 'This is an example of using custom markup {ICON:settings|https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png} with a linebreak{NEWLINE}{BADGE:HD} that includes all available types like {TEXT:styled text|italic}.',\n        customStyleMappings: {\n          italic: {\n            fontStyle: 'italic',\n            textColor: getHexColor('FF6194')\n          }\n        }\n      }\n    };\n  }\n}",
      ...WithInlineContentString.parameters?.docs?.source
    }
  }
};
WithInlineContentTruncation.parameters = {
  ...WithInlineContentTruncation.parameters,
  docs: {
    ...WithInlineContentTruncation.parameters?.docs,
    source: {
      originalSource: "() => class Basic extends lng.Component {\n  static _template() {\n    return {\n      TextBox: {\n        type: TextBox,\n        w: 500,\n        style: {\n          textStyle: {\n            maxLines: 2,\n            maxLinesSuffix: '...'\n          }\n        },\n        content: ['Text', {\n          icon: lightningbolt,\n          title: 'Green Lightning Bolt',\n          style: {\n            color: getHexColor('00ff00')\n          }\n        }, 'Wrapping Text', {\n          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n          title: 'Rotten Tomatoes rating'\n        }, 'and more text', {\n          text: 'with some red ',\n          style: {\n            textColor: getHexColor('FF6194')\n          }\n        }, 'for fun', {\n          badge: 'HD',\n          title: 'HD'\n        }, {\n          badge: 'SD',\n          title: 'SD'\n        }, ', and this should truncate before going on to a third line.'],\n        contentWrap: true\n      }\n    };\n  }\n}",
      ...WithInlineContentTruncation.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Basic","WithInlineContentArray","WithInlineContentString","WithInlineContentTruncation"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/TextBox/TextBox.mdx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../../node_modules/react/jsx-runtime.js");
/* harmony import */ var _home_runner_work_Lightning_UI_Components_Lightning_UI_Components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../../node_modules/@storybook/blocks/dist/index.mjs");
/* harmony import */ var _TextBox_stories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.stories.js");



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
    p: "p",
    h2: "h2",
    a: "a",
    pre: "pre",
    code: "code",
    blockquote: "blockquote",
    strong: "strong",
    ul: "ul",
    li: "li",
    h3: "h3",
    table: "table",
    thead: "thead",
    tr: "tr",
    th: "th",
    tbody: "tbody",
    td: "td",
    h4: "h4"
  }, (0,_home_runner_work_Lightning_UI_Components_Lightning_UI_Components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .ah)(), props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: ["\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .h_, {
      of: _TextBox_stories__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .Dx, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "General purpose TextBox component"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "source",
      children: "Source"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/rdkcentral/Lightning-UI-Components/blob/develop/packages/@lightningjs/ui-components/src/components/TextBox/TextBox.js",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "https://github.com/rdkcentral/Lightning-UI-Components/blob/develop/packages/@lightningjs/ui-components/src/components/TextBox/TextBox.js"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "usage",
      children: "Usage"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Set a content property with your text and specify a property style as a string.\nTextBox also accepts inline content arrays and strings which are rendered using the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "/docs/components-inlinecontent--test",
        children: "InlineContent"
      }), " component."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-js",
        children: "import { TextBox } from '@lightningjs/ui-components';\n\nTextBox: {\n  type: TextBox,\n  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',\n  fixed: true,\n  w: 600,\n  style: {\n    textStyle: 'headline1'\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.blockquote, {
      children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
          children: "Note on width:"
        })
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
        children: ["To assign a width to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "TextBox"
        }), " component, either a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "w"
        }), " value or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "wordWrapWidth"
        }), " (nested within ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "textStyle"
        }), " and the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
          children: "style"
        }), " prop) value may be provided."]
      }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul, {
        children: ["\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
          children: ["If ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "wordWrapWidth"
          }), " is defined, then the component will apply that property and the width should reflect the value accordingly."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
          children: ["If only a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "w"
          }), " value is provided and no ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "wordWrapWidth"
          }), " is defined, the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "TextBox"
          }), " component will automatically apply a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "wordWrapWidth"
          }), " of the defined ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "w"
          }), " value to the component.\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong, {
            children: "Important:"
          }), " the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "fixed"
          }), " property must be set to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "true"
          }), " in this case."]
        }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li, {
          children: ["If neither ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "w"
          }), " or ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
            children: "wordWrapWidth"
          }), " is defined, the component will automatically set the width to be the width of the component."]
        }), "\n"]
      }), "\n"]
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
            children: "content"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "true"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "undefined"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Text to be displayed in element"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "hideOnLoad"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "boolean"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "undefined"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["If ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "true"
            }), ", the component will not render as visible following the text texture loading. This allows manually controlling the alpha of the component."]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "fixed"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "boolean"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["If ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "true"
            }), ", allows the width of the text to be set with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "w"
            })]
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "marquee"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "boolean"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Allows text to be scrollable"
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["TextBox also supports rendering as an InlineContent component. See ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "/docs/components-inlinecontent--basic",
        children: "InlineContent documentation"
      }), " for table of supported properties."]
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
            children: "offsetX"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Used to ensure text is positioned correctly"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "offsetY"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "Used to ensure text is positioned correctly"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "textStyle"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "string | object"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["Default style of text to be displayed. Object should come from the current theme or contain any properties that the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
              href: "https://lightningjs.io/docs/#/lightning-core-reference/RenderEngine/Textures/Text?id=properties",
              target: "_blank",
              rel: "nofollow noopener noreferrer",
              children: "Lightning text texture supports"
            }), "."]
          })]
        })]
      })]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "methods",
      children: "Methods"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4, {
      id: "togglemarquee-void",
      children: "toggleMarquee(): void"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This will restart or stop marquee scrolling to match the marquee flag in case it has changed."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,_home_runner_work_Lightning_UI_Components_Lightning_UI_Components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .ah)(), props.components);
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);


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
//# sourceMappingURL=components-TextBox-TextBox-mdx.98face37.iframe.bundle.js.map