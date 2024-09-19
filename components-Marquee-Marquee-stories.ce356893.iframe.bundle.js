"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[6423],{

/***/ "../../@lightningjs/ui-components/src/components/Marquee/Marquee.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CenteredText: () => (/* binding */ CenteredText),
/* harmony export */   Marquee: () => (/* binding */ Marquee),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Marquee/Marquee.js");
/* harmony import */ var _InlineContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/components/InlineContent/InlineContent.js");
/* harmony import */ var _globals_context_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
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
  title: 'Components/Marquee'
});
const Marquee = args => class Marquee extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Marquee: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        w: 350,
        h: 180,
        title: {
          text: args.title,
          ..._globals_context_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.theme.typography.body1,
          maxLines: 1
        }
      }
    };
  }
};
Marquee.args = {
  title: 'This is a scrolling Marquee component for long text',
  autoStart: true,
  centerAlign: false,
  repeat: -1,
  delay: 1.5
};
Marquee.argTypes = {
  title: {
    control: 'text',
    description: 'Text content of the marquee title',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  autoStart: {
    control: 'boolean',
    description: 'Start scrolling on initiation',
    remount: true,
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  color: {
    name: 'color',
    control: 'color',
    description: 'Set color of text',
    table: {
      defaultValue: {
        summary: 'theme.color.fillNeutral'
      }
    }
  },
  repeat: {
    control: {
      type: 'number',
      min: -1
    },
    description: 'Number of times to repeat scrolling',
    remount: true,
    table: {
      defaultValue: {
        summary: -1
      }
    }
  },
  delay: {
    control: {
      type: 'number',
      min: 1.5
    },
    description: 'Delay in milliseconds before scrolling starts',
    remount: true,
    table: {
      defaultValue: {
        summary: 1.5
      }
    }
  },
  centerAlign: {
    control: 'boolean',
    description: 'Will center the entire texture if the width of the content is less than the container',
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
};
Marquee.parameters = {
  argActions: {}
};
const CenteredText = () => class CenteredText extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Marquee: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        w: 400,
        h: 50,
        title: {
          text: 'No scroll center',
          textAlign: 'center'
        },
        autoStart: true,
        delay: 1
      },
      InlineContent: {
        type: _InlineContent__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
        x: 200,
        alpha: 0.001,
        content: ['Centered', {
          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
          title: 'Rotten Tomatoes rating'
        }, ' InlineContent'],
        rtt: true
      },
      MarqueeInlineContent: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        y: 100,
        w: 400,
        h: 180,
        centerAlign: true,
        alpha: 0,
        autoStart: true,
        delay: 1
      }
    };
  }
  _init() {
    this.tag('MarqueeInlineContent').contentTexture = this.tag('InlineContent').getTexture();
    this.tag('MarqueeInlineContent').alpha = 1;
  }
};
CenteredText.args = {};
CenteredText.argTypes = {};
CenteredText.parameters = {
  argActions: {}
};
;
const __namedExportsOrder = ["Marquee", "CenteredText"];
Marquee.parameters = {
  ...Marquee.parameters,
  docs: {
    ...Marquee.parameters?.docs,
    source: {
      originalSource: "args => class Marquee extends lng.Component {\n  static _template() {\n    return {\n      Marquee: {\n        type: MarqueeComponent,\n        w: 350,\n        h: 180,\n        title: {\n          text: args.title,\n          ...context.theme.typography.body1,\n          maxLines: 1\n        }\n      }\n    };\n  }\n}",
      ...Marquee.parameters?.docs?.source
    }
  }
};
CenteredText.parameters = {
  ...CenteredText.parameters,
  docs: {
    ...CenteredText.parameters?.docs,
    source: {
      originalSource: "() => class CenteredText extends lng.Component {\n  static _template() {\n    return {\n      Marquee: {\n        type: MarqueeComponent,\n        w: 400,\n        h: 50,\n        title: {\n          text: 'No scroll center',\n          textAlign: 'center'\n        },\n        autoStart: true,\n        delay: 1\n      },\n      InlineContent: {\n        type: InlineContent,\n        x: 200,\n        alpha: 0.001,\n        content: ['Centered', {\n          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n          title: 'Rotten Tomatoes rating'\n        }, ' InlineContent'],\n        rtt: true\n      },\n      MarqueeInlineContent: {\n        type: MarqueeComponent,\n        y: 100,\n        w: 400,\n        h: 180,\n        centerAlign: true,\n        alpha: 0,\n        autoStart: true,\n        delay: 1\n      }\n    };\n  }\n  _init() {\n    this.tag('MarqueeInlineContent').contentTexture = this.tag('InlineContent').getTexture();\n    this.tag('MarqueeInlineContent').alpha = 1;\n  }\n}",
      ...CenteredText.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=components-Marquee-Marquee-stories.ce356893.iframe.bundle.js.map