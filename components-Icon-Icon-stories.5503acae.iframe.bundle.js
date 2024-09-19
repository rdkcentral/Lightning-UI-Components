"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[8311],{

/***/ "../../@lightningjs/ui-components/src/components/Icon/Icon.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PNG: () => (/* binding */ PNG),
/* harmony export */   SVG: () => (/* binding */ SVG),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
/* harmony import */ var _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png");
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
  title: 'Components/Icon',
  parameters: {
    argActions: {
      w: (w, component) => {
        component.tag('Icon').w = w;
        component._refocus();
      },
      h: (h, component) => {
        component.tag('Icon').h = h;
        component._refocus();
      }
    }
  }
});
const sharedArgs = {
  w: 50,
  h: 50
};
const sharedArgTypes = {
  w: {
    control: {
      type: 'range',
      min: 1,
      max: 96
    },
    description: 'Width of the icon',
    table: {
      defaultValue: {
        summary: 0
      }
    }
  },
  h: {
    control: {
      type: 'range',
      min: 1,
      max: 96
    },
    description: 'Height of the icon',
    table: {
      defaultValue: {
        summary: 0
      }
    }
  }
};
const PNG = () => class PNG extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Icon: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        icon: _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_2__,
        announce: 'Lightning bolt'
      }
    };
  }
};
PNG.args = sharedArgs;
PNG.argTypes = sharedArgTypes;
const SVG = () => class SVG extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Icon: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        icon: '<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="white" /></svg>',
        announce: 'Red circle',
        color: 0xffff0000
      }
    };
  }
};
SVG.args = sharedArgs;
SVG.argTypes = sharedArgTypes;
;
const __namedExportsOrder = ["PNG", "SVG"];
PNG.parameters = {
  ...PNG.parameters,
  docs: {
    ...PNG.parameters?.docs,
    source: {
      originalSource: "() => class PNG extends lng.Component {\n  static _template() {\n    return {\n      Icon: {\n        type: Icon,\n        icon: lightning,\n        announce: 'Lightning bolt'\n      }\n    };\n  }\n}",
      ...PNG.parameters?.docs?.source
    }
  }
};
SVG.parameters = {
  ...SVG.parameters,
  docs: {
    ...SVG.parameters?.docs,
    source: {
      originalSource: "() => class SVG extends lng.Component {\n  static _template() {\n    return {\n      Icon: {\n        type: Icon,\n        icon: '<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"100\" width=\"100\"><circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"black\" stroke-width=\"3\" fill=\"white\" /></svg>',\n        announce: 'Red circle',\n        color: 0xffff0000\n      }\n    };\n  }\n}",
      ...SVG.parameters?.docs?.source
    }
  }
};

/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/ic_lightning_white_32.06aecfeb.png";

/***/ })

}]);
//# sourceMappingURL=components-Icon-Icon-stories.5503acae.iframe.bundle.js.map