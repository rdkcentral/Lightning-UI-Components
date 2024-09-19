"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[8853],{

/***/ "../../@lightningjs/ui-components/src/mixins/withUpdates/withUpdates.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   withUpdates: () => (/* binding */ withUpdates)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/mixins/withUpdates/index.js");
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
  title: 'Utilities/withUpdates'
});
const withUpdates = args => class withUpdates extends (0,___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component) {
  static get properties() {
    return ['title'];
  }
  static _template() {
    return {
      x: 50,
      y: 50,
      Text: {}
    };
  }
  _init() {
    this._title = args.title;
  }
  _update() {
    this.tag('Text').text = this.title;
  }
  _setTitle(val) {
    // Only gets called when title is set, not _title
    return 'TITLE: ' + val;
  }
};
withUpdates.storyName = 'withUpdates';
withUpdates.args = {
  title: 'Default Title Value'
};
withUpdates.argTypes = {
  title: {
    control: 'text',
    description: 'Title text',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  }
};
;
const __namedExportsOrder = ["withUpdates"];
withUpdates.parameters = {
  ...withUpdates.parameters,
  docs: {
    ...withUpdates.parameters?.docs,
    source: {
      originalSource: "args => class withUpdates extends withUpdatesMixin(lng.Component) {\n  static get properties() {\n    return ['title'];\n  }\n  static _template() {\n    return {\n      x: 50,\n      y: 50,\n      Text: {}\n    };\n  }\n  _init() {\n    this._title = args.title;\n  }\n  _update() {\n    this.tag('Text').text = this.title;\n  }\n  _setTitle(val) {\n    // Only gets called when title is set, not _title\n    return 'TITLE: ' + val;\n  }\n}",
      ...withUpdates.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=mixins-withUpdates-withUpdates-stories.d1b2d691.iframe.bundle.js.map