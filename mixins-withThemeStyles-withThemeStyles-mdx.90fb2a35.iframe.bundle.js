(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[8892,9466],{

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

/***/ "../../@lightningjs/ui-components/src/mixins/withThemeStyles/withThemeStyles.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   withThemeStyles: () => (/* binding */ withThemeStyles)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/mixins/withThemeStyles/index.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
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
var __STORY__ = "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport withThemeStylesMixin from './index.js';\nimport { context } from '../../globals';\n\nexport default {\n  title: 'Utilities/withThemeStyles'\n};\n\nexport const withThemeStyles = () => {\n  const style = {\n    color: context.theme.color.fillNeutral\n  };\n\n  class Box extends lng.Component {\n    static get __componentName() {\n      return 'Box';\n    }\n\n    static get __themeStyle() {\n      return style;\n    }\n\n    static _template() {\n      return {\n        Box: {\n          w: 150,\n          h: 150,\n          rect: true\n        }\n      };\n    }\n\n    toggleColor(theme) {\n      this.tag('Box').color = theme ? this.style.color : 0xff0000ff;\n    }\n  }\n\n  return class withThemeStyles extends lng.Component {\n    static _template() {\n      return {\n        Box: {\n          type: withThemeStylesMixin(Box)\n        }\n      };\n    }\n  };\n};\n\nwithThemeStyles.storyName = 'withThemeStyles';\nwithThemeStyles.args = {\n  themeColor: true\n};\nwithThemeStyles.argTypes = {\n  themeColor: {\n    control: 'boolean',\n    description: 'Should the box use the color from the theme?',\n    table: {\n      defaultValue: { summary: withThemeStyles.args.themeColor }\n    }\n  }\n};\nwithThemeStyles.parameters = {\n  argActions: {\n    themeColor: (themeColor, component) => {\n      component.tag('Box').toggleColor(themeColor);\n    }\n  }\n};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "withThemeStyles": {
    "startLoc": {
      "col": 31,
      "line": 27
    },
    "endLoc": {
      "col": 1,
      "line": 65
    },
    "startBody": {
      "col": 31,
      "line": 27
    },
    "endBody": {
      "col": 1,
      "line": 65
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
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport withThemeStylesMixin from './index.js';\nimport { context } from '../../globals';\n\nexport default {\n  title: 'Utilities/withThemeStyles'\n};\n\nexport const withThemeStyles = () => {\n  const style = {\n    color: context.theme.color.fillNeutral\n  };\n\n  class Box extends lng.Component {\n    static get __componentName() {\n      return 'Box';\n    }\n\n    static get __themeStyle() {\n      return style;\n    }\n\n    static _template() {\n      return {\n        Box: {\n          w: 150,\n          h: 150,\n          rect: true\n        }\n      };\n    }\n\n    toggleColor(theme) {\n      this.tag('Box').color = theme ? this.style.color : 0xff0000ff;\n    }\n  }\n\n  return class withThemeStyles extends lng.Component {\n    static _template() {\n      return {\n        Box: {\n          type: withThemeStylesMixin(Box)\n        }\n      };\n    }\n  };\n};\n\nwithThemeStyles.storyName = 'withThemeStyles';\nwithThemeStyles.args = {\n  themeColor: true\n};\nwithThemeStyles.argTypes = {\n  themeColor: {\n    control: 'boolean',\n    description: 'Should the box use the color from the theme?',\n    table: {\n      defaultValue: { summary: withThemeStyles.args.themeColor }\n    }\n  }\n};\nwithThemeStyles.parameters = {\n  argActions: {\n    themeColor: (themeColor, component) => {\n      component.tag('Box').toggleColor(themeColor);\n    }\n  }\n};\n",
      "locationsMap": {
        "with-theme-styles": {
          "startLoc": {
            "col": 31,
            "line": 27
          },
          "endLoc": {
            "col": 1,
            "line": 65
          },
          "startBody": {
            "col": 31,
            "line": 27
          },
          "endBody": {
            "col": 1,
            "line": 65
          }
        }
      }
    }
  },
  title: 'Utilities/withThemeStyles'
});
var withThemeStyles = function withThemeStyles() {
  var style = {
    color: _globals__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.theme.color.fillNeutral
  };
  var Box = /*#__PURE__*/function (_lng$Component) {
    _inherits(Box, _lng$Component);
    var _super = _createSuper(Box);
    function Box() {
      _classCallCheck(this, Box);
      return _super.apply(this, arguments);
    }
    _createClass(Box, [{
      key: "toggleColor",
      value: function toggleColor(theme) {
        this.tag('Box').color = theme ? this.style.color : 0xff0000ff;
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return 'Box';
      }
    }, {
      key: "__themeStyle",
      get: function get() {
        return style;
      }
    }, {
      key: "_template",
      value: function _template() {
        return {
          Box: {
            w: 150,
            h: 150,
            rect: true
          }
        };
      }
    }]);
    return Box;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
  return /*#__PURE__*/function (_lng$Component2) {
    _inherits(withThemeStyles, _lng$Component2);
    var _super2 = _createSuper(withThemeStyles);
    function withThemeStyles() {
      _classCallCheck(this, withThemeStyles);
      return _super2.apply(this, arguments);
    }
    _createClass(withThemeStyles, null, [{
      key: "_template",
      value: function _template() {
        return {
          Box: {
            type: (0,_index_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(Box)
          }
        };
      }
    }]);
    return withThemeStyles;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
withThemeStyles.storyName = 'withThemeStyles';
withThemeStyles.args = {
  themeColor: true
};
withThemeStyles.argTypes = {
  themeColor: {
    control: 'boolean',
    description: 'Should the box use the color from the theme?',
    table: {
      defaultValue: {
        summary: withThemeStyles.args.themeColor
      }
    }
  }
};
withThemeStyles.parameters = {
  argActions: {
    themeColor: function themeColor(_themeColor, component) {
      component.tag('Box').toggleColor(_themeColor);
    }
  }
};
withThemeStyles.parameters = {
  ...withThemeStyles.parameters,
  docs: {
    ...withThemeStyles.parameters?.docs,
    source: {
      originalSource: "() => {\n  const style = {\n    color: context.theme.color.fillNeutral\n  };\n  class Box extends lng.Component {\n    static get __componentName() {\n      return 'Box';\n    }\n    static get __themeStyle() {\n      return style;\n    }\n    static _template() {\n      return {\n        Box: {\n          w: 150,\n          h: 150,\n          rect: true\n        }\n      };\n    }\n    toggleColor(theme) {\n      this.tag('Box').color = theme ? this.style.color : 0xff0000ff;\n    }\n  }\n  return class withThemeStyles extends lng.Component {\n    static _template() {\n      return {\n        Box: {\n          type: withThemeStylesMixin(Box)\n        }\n      };\n    }\n  };\n}",
      ...withThemeStyles.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["withThemeStyles"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/mixins/withThemeStyles/withThemeStyles.mdx":
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
/* harmony import */ var _withThemeStyles_stories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/mixins/withThemeStyles/withThemeStyles.stories.js");



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
    em: "em",
    h2: "h2",
    pre: "pre",
    a: "a",
    h3: "h3"
  }, (0,_home_runner_work_Lightning_UI_Components_Lightning_UI_Components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .ah)(), props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: ["\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .h_, {
      of: _withThemeStyles_stories__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "withthemestyles",
      children: "withThemeStyles"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Use ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "withThemeStyles"
      }), " to create composable components that can be easily themed and decoupled from functionality."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "withThemeStyles"
      }), " mixin provides flexibility with ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em, {
        children: "composability"
      }), ": the concept of combining the properties of multiple components to create a new component. This is not intended to be a replacement for building a component API, but rather a tool for augmentation."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "usage",
      children: "Usage"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Here is an example of applying ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "withThemeStyles"
      }), ". Start with an un-styled ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Box"
      }), " component containing a defined width and height."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-js",
        children: "import lng from '@lightningjs/core';\n\nclass Box extends lng.Component {\n  static _template() {\n    return {\n      w: 150,\n      h: 150,\n      rect: true\n    };\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["In order to re-use this ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Box"
      }), " to create a new component called ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "BlueBox"
      }), ", we can extend the base class."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-js",
        children: "class BlueBox extends Box {\n  static _template() {\n    return {\n      ...super._template(),\n      color: 0xff0000ff\n    };\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["This is fine if you want a box that is always blue, but what if you want to change the color of your component without having to extend it and override that single value? Or if you want a box that changes based on certain factors, such as its ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "?path=/docs/docs-theming-mode--page",
        children: "mode"
      }), "? Or what if you want to have multiple color palettes (in LUI, these are called ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "?path=/docs/docs-theming-tone--page",
        children: "tones"
      }), ") that you can switch between depending on if your application is in light or dark mode?"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["By utilizing ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "withThemeStyles"
      }), ", you can tie the color of your box to the tokens used in your theme or a single style object. The preferred way of accomplishing this is by extending the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Base"
      }), " component, which utilizes ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "withThemeStyles"
      }), " and saves you from additional setup."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["If you are not extending the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Base"
      }), " component, you can style your component in the following ways."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "defining-a-style-object",
      children: "Defining a Style Object"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The first way of handling styles is to wrap your component in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "withThemeStyles"
      }), " mixin, and then define the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "__themeStyle"
      }), " getter."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-js",
        children: "const style = {\n  color: 0xff0000ff\n};\n\nclass Box extends withThemeStyles(lng.Component) {\n  static get __componentName() {\n    return 'Box';\n  }\n\n  static get __themeStyle() {\n    return style;\n  }\n\n  static _template() {\n    return {\n      w: 150,\n      h: 150,\n      rect: true\n    };\n  }\n\n  _update() {\n    this.color = this.style.color;\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["With this setup, the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Box"
      }), " component's ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "color"
      }), " property is mapped to a style value external to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Box"
      }), " class. This enables us to change the value of color externally, without the need to change any code in the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Box"
      }), " class. Thus, the class can remain focused on the functional aspects of the component, and all style-related properties can be handled elsewhere."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "It is worth noting that this method ensures all instances of your component are styled the same. If you need to style individual instances differently, another method is recommended."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "passing-in-a-style-object",
      children: "Passing In a Style Object"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The second option is to wrap your component in ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "withThemeStyles"
      }), " and to pass in your style object as the second argument."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "This method is usually more appropriate for in-line styling, rather than defining the styles of a new component. This is because you rely on the component already being set up for use with theming, and this method will only apply the given styles to that particular instance of your component. (We advise changes to be made to all instances of a component when possible to ensure proper adherence to your design system.)"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-js",
        children: "const style = {\n  color: 0xff0000ff\n};\n\nclass Box extends lng.Component {\n  static get __componentName() {\n    return 'Box';\n  }\n\n  static _template() {\n    return {\n      w: 150,\n      h: 150,\n      rect: true\n    };\n  }\n\n  _update() {\n    this.color = this.style.color;\n  }\n}\n\nclass NewComponent extends lng.Component {\n  _template() {\n    Box: {\n      type: withThemeStyles(Box, style);\n    }\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["In both cases, you'll notice that there is a ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "__componentName"
      }), " getter in our ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Box"
      }), " class. This name is what is used to reference our component for any overrides and extension assignments that might exist in our theme's ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "componentConfig"
      }), "."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3, {
      id: "mode-changes",
      children: "Mode Changes"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["Instead of extending a component to access the focus or unfocus methods of a component, or to add any custom functionality for a specific mode, you can tap into \"on\" methods for mode changes. Similarly to the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "on[KeyName]"
      }), " methods exposed via the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "?path=/docs/utilities-withhandlekey--with-handle-key",
        children: "withHandleKey"
      }), " mixin, all mode changes are linked to ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "on[ModeName]"
      }), " methods, which are triggered when the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "mode"
      }), " of the component is set to a new value."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["For example, if a component has an ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "unfocused"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "focused"
      }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "disabled"
      }), " mode, the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "onUnfocused"
      }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "onFocused"
      }), ", and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "onDisabled"
      }), " methods will be called on change to the associated mode. Any custom modes beyond these three will also be added to the method list. When using a component, all of those methods can be accessed and set like other component properties, like this:"]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-js",
        children: "class NewComponent extends lng.Component {\n  _template() {\n    Box: {\n      type: withThemeStyles(Box, style),\n      onFocused: () => { console.log('mode changed to focused!'); }\n    }\n  }\n}\n"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["For more information on all of the ways you can set up your styles to fully utilize this mixin, read through the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "?path=/docs/docs-theming-overview--page",
        children: "Theming Documentation"
      }), "."]
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
//# sourceMappingURL=mixins-withThemeStyles-withThemeStyles-mdx.90fb2a35.iframe.bundle.js.map