(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[9064,4539],{

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

/***/ "../../@lightningjs/ui-components/src/components/Provider/Provider.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Provider: () => (/* binding */ Provider),
  WithCustomIconSize: () => (/* binding */ WithCustomIconSize),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ Provider_stories)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Provider/Provider.js + 1 modules
var Provider_Provider = __webpack_require__("../../@lightningjs/ui-components/src/components/Provider/Provider.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/assets/images/XfinityLogo16x9.png
const XfinityLogo16x9_namespaceObject = __webpack_require__.p + "static/media/XfinityLogo16x9.0587305b.png";
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/assets/images/Xfinity-Provider-Logo-Square.png
var Xfinity_Provider_Logo_Square = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/Xfinity-Provider-Logo-Square.png");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Provider/Provider.stories.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
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
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport ProviderComponent from '.';\nimport { default as Icon } from '../Icon';\nimport xfinityLogo from '../../assets/images/XfinityLogo16x9.png';\nimport xfinity from '../../assets/images/Xfinity-Provider-Logo-Square.png';\n\nexport default {\n  title: 'Components/Provider'\n};\n\nconst sharedArgs = {\n  counterText: null,\n  disableRadius: false,\n  visibleCount: 3\n};\nconst sharedArgTypes = {\n  visibleCount: {\n    control: { type: 'range', min: 1, max: 10, step: 1 },\n    description: 'Number of visible providers',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  counterText: {\n    control: 'select',\n    options: [null, '...'],\n    description: 'Text to display in counter (overrides default behavior)',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  disableRadius: {\n    control: 'boolean',\n    description: 'Disable applying radius to icons',\n    table: {\n      defaultValue: { summary: false }\n    }\n  }\n};\n\nexport const Provider = () =>\n  class Provider extends lng.Component {\n    static _template() {\n      return {\n        Provider: {\n          type: ProviderComponent,\n          providers: Array(10).fill({\n            icon: xfinity,\n            announce: 'xfinity'\n          })\n        }\n      };\n    }\n  };\n\nProvider.args = sharedArgs;\nProvider.argTypes = sharedArgTypes;\n\nexport const WithCustomIconSize = () =>\n  class WithCustomIconSize extends lng.Component {\n    static _template() {\n      return {\n        Provider: {\n          type: ProviderComponent,\n          providers: [\n            {\n              icon: xfinity,\n              announce: 'xfinity'\n            },\n            {\n              type: Icon,\n              w: 85,\n              h: 48,\n              // Xfinity icon is from the Xfinity Brand Press Materials from https://corporate.comcast.com/press/kit\n              icon: xfinityLogo,\n              announce: 'XFinity Logo Wide'\n            },\n            ...Array.apply(null, { length: 8 }).map(() => ({\n              icon: xfinity,\n              announce: 'xfinity'\n            }))\n          ],\n          visibleCount: 3\n        }\n      };\n    }\n  };\n\nWithCustomIconSize.args = sharedArgs;\nWithCustomIconSize.argTypes = sharedArgTypes;\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "Provider": {
    "startLoc": {
      "col": 24,
      "line": 59
    },
    "endLoc": {
      "col": 3,
      "line": 72
    },
    "startBody": {
      "col": 24,
      "line": 59
    },
    "endBody": {
      "col": 3,
      "line": 72
    }
  },
  "WithCustomIconSize": {
    "startLoc": {
      "col": 34,
      "line": 77
    },
    "endLoc": {
      "col": 3,
      "line": 105
    },
    "startBody": {
      "col": 34,
      "line": 77
    },
    "endBody": {
      "col": 3,
      "line": 105
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






/* harmony default export */ const Provider_stories = ({
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport ProviderComponent from '.';\nimport { default as Icon } from '../Icon';\nimport xfinityLogo from '../../assets/images/XfinityLogo16x9.png';\nimport xfinity from '../../assets/images/Xfinity-Provider-Logo-Square.png';\n\nexport default {\n  title: 'Components/Provider'\n};\n\nconst sharedArgs = {\n  counterText: null,\n  disableRadius: false,\n  visibleCount: 3\n};\nconst sharedArgTypes = {\n  visibleCount: {\n    control: { type: 'range', min: 1, max: 10, step: 1 },\n    description: 'Number of visible providers',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  counterText: {\n    control: 'select',\n    options: [null, '...'],\n    description: 'Text to display in counter (overrides default behavior)',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  disableRadius: {\n    control: 'boolean',\n    description: 'Disable applying radius to icons',\n    table: {\n      defaultValue: { summary: false }\n    }\n  }\n};\n\nexport const Provider = () =>\n  class Provider extends lng.Component {\n    static _template() {\n      return {\n        Provider: {\n          type: ProviderComponent,\n          providers: Array(10).fill({\n            icon: xfinity,\n            announce: 'xfinity'\n          })\n        }\n      };\n    }\n  };\n\nProvider.args = sharedArgs;\nProvider.argTypes = sharedArgTypes;\n\nexport const WithCustomIconSize = () =>\n  class WithCustomIconSize extends lng.Component {\n    static _template() {\n      return {\n        Provider: {\n          type: ProviderComponent,\n          providers: [\n            {\n              icon: xfinity,\n              announce: 'xfinity'\n            },\n            {\n              type: Icon,\n              w: 85,\n              h: 48,\n              // Xfinity icon is from the Xfinity Brand Press Materials from https://corporate.comcast.com/press/kit\n              icon: xfinityLogo,\n              announce: 'XFinity Logo Wide'\n            },\n            ...Array.apply(null, { length: 8 }).map(() => ({\n              icon: xfinity,\n              announce: 'xfinity'\n            }))\n          ],\n          visibleCount: 3\n        }\n      };\n    }\n  };\n\nWithCustomIconSize.args = sharedArgs;\nWithCustomIconSize.argTypes = sharedArgTypes;\n",
      "locationsMap": {
        "provider": {
          "startLoc": {
            "col": 24,
            "line": 59
          },
          "endLoc": {
            "col": 3,
            "line": 72
          },
          "startBody": {
            "col": 24,
            "line": 59
          },
          "endBody": {
            "col": 3,
            "line": 72
          }
        },
        "with-custom-icon-size": {
          "startLoc": {
            "col": 34,
            "line": 77
          },
          "endLoc": {
            "col": 3,
            "line": 105
          },
          "startBody": {
            "col": 34,
            "line": 77
          },
          "endBody": {
            "col": 3,
            "line": 105
          }
        }
      }
    }
  },
  title: 'Components/Provider'
});
var sharedArgs = {
  counterText: null,
  disableRadius: false,
  visibleCount: 3
};
var sharedArgTypes = {
  visibleCount: {
    control: {
      type: 'range',
      min: 1,
      max: 10,
      step: 1
    },
    description: 'Number of visible providers',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  counterText: {
    control: 'select',
    options: [null, '...'],
    description: 'Text to display in counter (overrides default behavior)',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  disableRadius: {
    control: 'boolean',
    description: 'Disable applying radius to icons',
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
};
var Provider = function Provider() {
  return /*#__PURE__*/function (_lng$Component) {
    _inherits(Provider, _lng$Component);
    var _super = _createSuper(Provider);
    function Provider() {
      _classCallCheck(this, Provider);
      return _super.apply(this, arguments);
    }
    _createClass(Provider, null, [{
      key: "_template",
      value: function _template() {
        return {
          Provider: {
            type: Provider_Provider/* default */.Z,
            providers: Array(10).fill({
              icon: Xfinity_Provider_Logo_Square,
              announce: 'xfinity'
            })
          }
        };
      }
    }]);
    return Provider;
  }(lightning_esm/* default */.Z.Component);
};
;
Provider.args = sharedArgs;
Provider.argTypes = sharedArgTypes;
var WithCustomIconSize = function WithCustomIconSize() {
  return /*#__PURE__*/function (_lng$Component2) {
    _inherits(WithCustomIconSize, _lng$Component2);
    var _super2 = _createSuper(WithCustomIconSize);
    function WithCustomIconSize() {
      _classCallCheck(this, WithCustomIconSize);
      return _super2.apply(this, arguments);
    }
    _createClass(WithCustomIconSize, null, [{
      key: "_template",
      value: function _template() {
        return {
          Provider: {
            type: Provider_Provider/* default */.Z,
            providers: [{
              icon: Xfinity_Provider_Logo_Square,
              announce: 'xfinity'
            }, {
              type: Icon/* default */.Z,
              w: 85,
              h: 48,
              // Xfinity icon is from the Xfinity Brand Press Materials from https://corporate.comcast.com/press/kit
              icon: XfinityLogo16x9_namespaceObject,
              announce: 'XFinity Logo Wide'
            }].concat(_toConsumableArray(Array.apply(null, {
              length: 8
            }).map(function () {
              return {
                icon: Xfinity_Provider_Logo_Square,
                announce: 'xfinity'
              };
            }))),
            visibleCount: 3
          }
        };
      }
    }]);
    return WithCustomIconSize;
  }(lightning_esm/* default */.Z.Component);
};
WithCustomIconSize.args = sharedArgs;
WithCustomIconSize.argTypes = sharedArgTypes;
Provider.parameters = {
  ...Provider.parameters,
  docs: {
    ...Provider.parameters?.docs,
    source: {
      originalSource: "() => class Provider extends lng.Component {\n  static _template() {\n    return {\n      Provider: {\n        type: ProviderComponent,\n        providers: Array(10).fill({\n          icon: xfinity,\n          announce: 'xfinity'\n        })\n      }\n    };\n  }\n}",
      ...Provider.parameters?.docs?.source
    }
  }
};
WithCustomIconSize.parameters = {
  ...WithCustomIconSize.parameters,
  docs: {
    ...WithCustomIconSize.parameters?.docs,
    source: {
      originalSource: "() => class WithCustomIconSize extends lng.Component {\n  static _template() {\n    return {\n      Provider: {\n        type: ProviderComponent,\n        providers: [{\n          icon: xfinity,\n          announce: 'xfinity'\n        }, {\n          type: Icon,\n          w: 85,\n          h: 48,\n          // Xfinity icon is from the Xfinity Brand Press Materials from https://corporate.comcast.com/press/kit\n          icon: xfinityLogo,\n          announce: 'XFinity Logo Wide'\n        }, ...Array.apply(null, {\n          length: 8\n        }).map(() => ({\n          icon: xfinity,\n          announce: 'xfinity'\n        }))],\n        visibleCount: 3\n      }\n    };\n  }\n}",
      ...WithCustomIconSize.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Provider","WithCustomIconSize"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Provider/Provider.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Provider)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Provider/Provider.styles.js
var Provider_styles_namespaceObject = {};
__webpack_require__.r(Provider_styles_namespaceObject);
__webpack_require__.d(Provider_styles_namespaceObject, {
  base: () => (base),
  mode: () => (mode),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Row/Row.js + 1 modules
var Row = __webpack_require__("../../@lightningjs/ui-components/src/components/Row/Row.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.js + 1 modules
var TextBox = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Provider/Provider.styles.js
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

function base(theme) {
  return {
    alpha: theme.alpha.primary,
    counterTextStyle: theme.typography.headline3,
    itemSize: theme.layout.gutterX * 2,
    itemSpacing: theme.spacer.md,
    radius: theme.radius.sm
  };
}
var mode = function mode(theme) {
  return {
    disabled: {
      alpha: theme.alpha.inactive
    }
  };
};
var tone = function tone(theme) {
  return {
    neutral: {
      counterBackgroundColor: theme.color.fillInverseSecondary
    },
    inverse: {
      counterBackgroundColor: theme.color.fillNeutralSecondary
    },
    brand: {
      counterBackgroundColor: theme.color.fillInverseSecondary
    }
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Provider/Provider.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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







var Provider = /*#__PURE__*/function (_Base) {
  _inherits(Provider, _Base);
  var _super = _createSuper(Provider);
  function Provider() {
    _classCallCheck(this, Provider);
    return _super.apply(this, arguments);
  }
  _createClass(Provider, [{
    key: "providersHidden",
    get: function get() {
      return this.providers.length - this._visibleCount;
    }
  }, {
    key: "_construct",
    value: function _construct() {
      this._providers = [];
      _get(_getPrototypeOf(Provider.prototype), "_construct", this).call(this);
    }
  }, {
    key: "_update",
    value: function _update() {
      this._updateProviders();
      this._updateCounter();
    }
  }, {
    key: "_updateProviders",
    value: function _updateProviders() {
      var _this = this;
      var providerList = [];
      this.providers.slice(0, this.visibleCount).forEach(function (provider) {
        // Create a starting point for each provider icon.

        var patch = {
          centerInParent: true,
          radius: _this.disableRadius ? 0 : _this.style.radius,
          alpha: _this.style.alpha,
          style: provider.style || {}
        };
        if (
        // If the provider is a pre-configured Icon, allow it to override the default behavior.
        provider.type === Icon/* default */.Z && provider.icon && provider.w && provider.h) {
          // Maintain the ratio of the source icon while enforcing the height specified in the styles.
          var ratio = provider.w / provider.h;
          patch = _objectSpread(_objectSpread({
            type: Icon/* default */.Z,
            icon: provider.icon
          }, provider), {}, {
            w: _this.style.itemSize * ratio,
            h: _this.style.itemSize
          }, patch);
        } else {
          // If the provider is just a string, create the rest of the Icon.
          patch = _objectSpread({
            type: Icon/* default */.Z,
            w: _this.style.itemSize,
            h: _this.style.itemSize
          }, patch);
          if (_typeof(provider) === 'object') {
            patch = _objectSpread(_objectSpread({}, patch), provider);
          } else {
            patch.icon = provider;
          }
        }
        providerList.push(patch);
      });
      this._Row.patch({
        style: {
          itemSpacing: this.style.itemSpacing
        },
        items: providerList,
        h: this.style.itemSize
      });
    }
  }, {
    key: "_updateCounter",
    value: function _updateCounter() {
      if (this.providers.length > this.visibleCount) {
        var remaining = this.providersHidden;
        var counter = {
          announce: "+".concat(remaining),
          alpha: this.style.alpha,
          w: this.style.itemSize,
          h: this.style.itemSize,
          centerInParent: true,
          Background: {
            w: this.style.itemSize,
            h: this.style.itemSize,
            texture: lightning_esm/* default */.Z.Tools.getRoundRect(this.style.itemSize, this.style.itemSize, this.style.radius, 0, null, true, this.style.counterBackgroundColor)
          },
          Text: {
            type: TextBox/* default */.Z,
            mountX: 0.5,
            mountY: 0.5,
            x: this.style.itemSize / 2,
            y: this.style.itemSize / 2,
            content: this.counterText || "+".concat(remaining),
            style: {
              textStyle: this.style.counterTextStyle
            }
          }
        };
        this._Row.appendItems([counter]);
      }
    }
  }, {
    key: "$itemChanged",
    value: function $itemChanged() {
      this.signal('providerChanged');
    }
  }, {
    key: "_getVisibleCount",
    value: function _getVisibleCount() {
      var min = 1;
      var max = this.providers.length;
      var visibleCount = Math.min(Math.max(min, this._visibleCount), max);
      if (this._visibleCount < min) {
        console.warn("Warning: The specified visible count (".concat(this._visibleCount, ") is less than the minimum value (").concat(min, "). Setting it to ").concat(min, "."));
      }
      if (this._visibleCount > max) {
        console.warn("Warning: The specified visible count (".concat(this._visibleCount, ") is greater than the maximum value (").concat(max, "). Setting it to ").concat(max, "."));
      }
      return visibleCount;
    }
  }, {
    key: "w",
    get: function get() {
      return this._Row.w;
    }
  }, {
    key: "announce",
    get: function get() {
      return this._announce || this._Row.items && this._Row.items.length && this._Row.items.map(function (item) {
        return item.announce;
      });
    },
    set: function set(announce) {
      _set(_getPrototypeOf(Provider.prototype), "announce", announce, this, true);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'Provider';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Provider_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      return {
        Row: {
          type: Row/* default */.Z,
          autoResizeWidth: true
        }
      };
    }
  }, {
    key: "properties",
    get: function get() {
      return ['disableRadius', 'counterText', 'providers', 'visibleCount'];
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Row'];
    }
  }]);
  return Provider;
}(Base/* default */.Z);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Provider/Provider.mdx":
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
/* harmony import */ var _Provider_stories_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Provider/Provider.stories.js");



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
    code: "code",
    h2: "h2",
    a: "a",
    pre: "pre",
    h3: "h3",
    table: "table",
    thead: "thead",
    tr: "tr",
    th: "th",
    tbody: "tbody",
    td: "td"
  }, (0,_home_runner_work_Lightning_UI_Components_Lightning_UI_Components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_2__/* .useMDXComponents */ .ah)(), props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: ["\n", "\n", "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Meta */ .h_, {
      of: _Provider_stories_js__WEBPACK_IMPORTED_MODULE_4__
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_3__/* .Title */ .Dx, {}), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Provider"
      }), " serves to condense a list of providers to show only the number you specify, and add a counter to represent any that remain."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "source",
      children: "Source"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a, {
        href: "https://github.com/rdkcentral/Lightning-UI-Components/blob/develop/packages/%40lightningjs/ui-components/src/components/Provider/Provider.js",
        target: "_blank",
        rel: "nofollow noopener noreferrer",
        children: "https://github.com/rdkcentral/Lightning-UI-Components/blob/develop/packages/%40lightningjs/ui-components/src/components/Provider/Provider.js"
      })
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2, {
      id: "usage",
      children: "Usage"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p, {
      children: ["The ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Provider"
      }), " component only needs an array of image paths to populate the list of providers. However, you can supply an ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Icon"
      }), " component, and the ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        children: "Provider"
      }), " will resize it to fit. This is useful, for example, if you want to include a 2:1 provider logo amongst a series of 1:1s."]
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
        className: "language-js",
        children: "import { Provider } from '@lightningjs/ui-components';\n\nclass Basic extends lng.Component {\n  static _template() {\n    return {\n      Provider: {\n        type: Provider,\n        visibleCount: args.visibleCount,\n        providers: [\n          xfinityProviderLogoSquare,\n          {\n            type: Icon,\n            w: 96,\n            h: 48,\n            icon: xfinityLogo\n          },\n          ...Array.apply(null, { length: 10 }).map(\n            () => xfinityProviderLogoSquare\n          )\n        ],\n        counterText: '...',\n        disableRadius: true\n      }\n    };\n  }\n}\n"
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
            children: "disableRadius"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "boolean"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "if true, disables the radius style property to Icon providers"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "counterText"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "false"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "undefined"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "text to override counter's default '+Number' functionality"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "providers"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "array"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "true"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "undefined"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "list of provider images"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "providersHidden"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "readonly"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "undefined"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "the number of providers that will be hidden by the counter"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "visibleCount"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "true"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "undefined"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "the number of providers to show before adding a counter"
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
            children: "alpha"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "transparency level of a provider"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "counterBackgroundColor"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "string"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "background color of counter"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "counterTextStyle"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "string | object"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "text style for counter"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "itemSize"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "height and width to apply to icons and counter"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "itemSpacing"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "space between providers"
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.tr, {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "radius"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.td, {
            children: "number | array"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.td, {
            children: ["radius of counter (and Icons if ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code, {
              children: "applyRadius"
            }), " property is true)"]
          })]
        })]
      })]
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


/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/Xfinity-Provider-Logo-Square.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/Xfinity-Provider-Logo-Square.d3aaa87c.png";

/***/ })

}]);
//# sourceMappingURL=components-Provider-Provider-mdx.90116ed3.iframe.bundle.js.map