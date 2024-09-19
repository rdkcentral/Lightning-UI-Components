"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[6282],{

/***/ "../../@lightningjs/ui-components/src/mixins/withTags/withTags.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   withTags: () => (/* binding */ withTags)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/mixins/withTags/index.js");
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
  title: 'Utilities/withTags'
});
const withTags = () => class withTags extends (0,___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component) {
  static get tags() {
    return ['Text'];
  }
  static _template() {
    return {
      x: 50,
      y: 50,
      Text: {
        text: {
          text: 'This has a tag'
        }
      }
    };
  }
};
withTags.storyName = 'withTags';
withTags.args = {};
withTags.argTypes = {};
;
const __namedExportsOrder = ["withTags"];
withTags.parameters = {
  ...withTags.parameters,
  docs: {
    ...withTags.parameters?.docs,
    source: {
      originalSource: "() => class withTags extends withTagsMixin(lng.Component) {\n  static get tags() {\n    return ['Text'];\n  }\n  static _template() {\n    return {\n      x: 50,\n      y: 50,\n      Text: {\n        text: {\n          text: 'This has a tag'\n        }\n      }\n    };\n  }\n}",
      ...withTags.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=mixins-withTags-withTags-stories.e6c33a2a.iframe.bundle.js.map