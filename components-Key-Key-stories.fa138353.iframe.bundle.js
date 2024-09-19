"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[2639],{

/***/ "../../@lightningjs/ui-components/src/docs/constants.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "../../@lightningjs/ui-components/src/components/Key/Key.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/ic_lightning_white_32.06aecfeb.png";

/***/ })

}]);
//# sourceMappingURL=components-Key-Key-stories.fa138353.iframe.bundle.js.map