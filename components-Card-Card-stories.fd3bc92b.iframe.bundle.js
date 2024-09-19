"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[2513],{

/***/ "../../@lightningjs/ui-components/src/components/Card/Card.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Card: () => (/* binding */ Card),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _docs_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Card/Card.js");
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
  title: 'Components/Card/Card'
});
const Card = args => class Card extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Card: {
        title: args.title,
        type: _Card__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A
      }
    };
  }
};
Card.args = {
  title: 'Title',
  mode: 'focused'
};
Card.argTypes = {
  ...(0,_docs_utils__WEBPACK_IMPORTED_MODULE_2__/* .createModeControl */ .Pg)({
    summaryValue: Card.args.mode
  }),
  title: {
    control: 'text',
    description: 'Title text',
    table: {
      defaultValue: {
        summary: 'undefined'
      },
      type: {
        summary: 'string'
      }
    }
  }
};
;
const __namedExportsOrder = ["Card"];
Card.parameters = {
  ...Card.parameters,
  docs: {
    ...Card.parameters?.docs,
    source: {
      originalSource: "args => class Card extends lng.Component {\n  static _template() {\n    return {\n      Card: {\n        title: args.title,\n        type: CardComponent\n      }\n    };\n  }\n}",
      ...Card.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=components-Card-Card-stories.fd3bc92b.iframe.bundle.js.map