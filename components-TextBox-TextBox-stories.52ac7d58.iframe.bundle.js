"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[8027,9627],{

/***/ "../../@lightningjs/ui-components/src/components/InlineContent/InlineContent.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Basic: () => (/* binding */ Basic),
/* harmony export */   WithNewLines: () => (/* binding */ WithNewLines),
/* harmony export */   WithParsing: () => (/* binding */ WithParsing),
/* harmony export */   WithStrikeThrough: () => (/* binding */ WithStrikeThrough),
/* harmony export */   WithTruncation: () => (/* binding */ WithTruncation),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/InlineContent/InlineContent.js");
/* harmony import */ var _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
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
  title: 'Components/InlineContent',
  args: {
    contentWrap: false,
    justify: 'center',
    contentProperties: {
      marginBottom: -4
    },
    maxLines: 0,
    maxLinesSuffix: '..'
  },
  argTypes: {
    contentProperties: {
      control: 'object',
      description: 'Object setting flexItem props on all content items',
      type: 'object',
      table: {
        defaultValue: {
          summary: '{}'
        }
      }
    },
    contentWrap: {
      control: 'boolean',
      description: 'Determines whether the containing flexbox should wrap the content onto the next line',
      type: 'boolean',
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    justify: {
      control: 'radio',
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
      description: 'Alignment of first line flexbox content',
      type: 'string',
      table: {
        defaultValue: {
          summary: 'center'
        }
      }
    },
    maxLines: {
      control: 'number',
      description: 'maximum number of lines to render before truncation',
      type: 'number',
      table: {
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    maxLinesSuffix: {
      control: 'text',
      description: 'suffix appended to last line of content if it will exceed the maxLines',
      type: 'string',
      table: {
        defaultValue: {
          summary: '..'
        }
      }
    }
  }
});
const Basic = args => class Basic extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      InlineContent: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        x: 500,
        w: 200,
        contentWrap: args.contentWrap,
        contentProperties: args.contentProperties,
        justify: args.justify,
        customStyleMappings: {
          italic: {
            fontStyle: 'italic',
            textColor: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getHexColor */ .H2)('00ff00')
          }
        },
        content: ['Text', ' and some icons', {
          icon: _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_3__,
          title: 'Green Lightning Bolt',
          style: {
            color: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getHexColor */ .H2)('00ff00')
          }
        }, 'Wrapping Text', {
          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
          title: 'Rotten Tomatoes rating'
        }, 'and more text ', {
          text: 'with some red ',
          style: {
            textColor: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getHexColor */ .H2)('FF6194')
          }
        }, 'for fun', {
          badge: 'HD',
          title: 'HD'
        }, {
          badge: 'SD',
          title: 'SD'
        }, {
          text: 'make some text italic',
          style: 'italic'
        }]
      }
    };
  }
};
const WithNewLines = args => class WithNewLines extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      InlineContent: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        x: 500,
        w: 400,
        contentWrap: args.contentWrap,
        contentProperties: args.contentProperties,
        justify: args.justify,
        content: ['Example with multiple lines', {
          icon: _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_3__,
          style: {
            color: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getHexColor */ .H2)('00ff00')
          },
          title: 'Green Lightning Bolt'
        }, {
          newline: true
        }, 'this line should break here', {
          newline: true
        }, {
          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
          title: 'Rotten Tomatoes rating'
        }, 'another line break here', {
          newline: true
        }, {
          badge: 'HD',
          title: 'HD'
        }, {
          newline: true
        }, {
          badge: 'SD',
          title: 'SD'
        }]
      }
    };
  }
};
const WithParsing = args => class WithParsing extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      InlineContent: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        x: 550,
        w: 400,
        contentWrap: args.contentWrap,
        contentProperties: args.contentProperties,
        justify: args.justify,
        customStyleMappings: {
          italic: {
            fontStyle: 'italic',
            textColor: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getHexColor */ .H2)('FF6194')
          }
        },
        content: 'This is an example of using custom markup {ICON:settings|https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png} with a linebreak{NEWLINE}{BADGE:HD} that includes all available types like {TEXT:styled text|italic}.'
      }
    };
  }
};
const WithTruncation = args => class Basic extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      InlineContent: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        ...args,
        w: 500,
        content: ['Text', {
          icon: _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_3__,
          title: 'Green Lightning Bolt',
          style: {
            color: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getHexColor */ .H2)('00ff00')
          }
        }, 'Wrapping Text', {
          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
          title: 'Rotten Tomatoes rating'
        }, 'and more text', {
          text: 'with some red ',
          style: {
            textColor: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getHexColor */ .H2)('FF6194')
          }
        }, 'for fun', {
          badge: 'HD',
          title: 'HD'
        }, {
          badge: 'SD',
          title: 'SD'
        }, ', and this should truncate before going on to a third line.']
      }
    };
  }
};
WithTruncation.args = {
  contentWrap: true,
  maxLines: 2,
  maxLinesSuffix: '...'
};
const WithStrikeThrough = args => class WithParsing extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      InlineContent: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        x: 550,
        w: 400,
        contentWrap: args.contentWrap,
        contentProperties: args.contentProperties,
        justify: args.justify,
        content: ['Rent', {
          newline: true
        }, {
          text: '$19.99',
          style: {
            textDecoration: 'line-through'
          }
        }, {
          newline: true
        }, '$12.99']
      }
    };
  }
};
;
const __namedExportsOrder = ["Basic", "WithNewLines", "WithParsing", "WithTruncation", "WithStrikeThrough"];
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "args => class Basic extends lng.Component {\n  static _template() {\n    return {\n      InlineContent: {\n        type: InlineContentComponent,\n        x: 500,\n        w: 200,\n        contentWrap: args.contentWrap,\n        contentProperties: args.contentProperties,\n        justify: args.justify,\n        customStyleMappings: {\n          italic: {\n            fontStyle: 'italic',\n            textColor: getHexColor('00ff00')\n          }\n        },\n        content: ['Text', ' and some icons', {\n          icon: lightningbolt,\n          title: 'Green Lightning Bolt',\n          style: {\n            color: getHexColor('00ff00')\n          }\n        }, 'Wrapping Text', {\n          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n          title: 'Rotten Tomatoes rating'\n        }, 'and more text ', {\n          text: 'with some red ',\n          style: {\n            textColor: getHexColor('FF6194')\n          }\n        }, 'for fun', {\n          badge: 'HD',\n          title: 'HD'\n        }, {\n          badge: 'SD',\n          title: 'SD'\n        }, {\n          text: 'make some text italic',\n          style: 'italic'\n        }]\n      }\n    };\n  }\n}",
      ...Basic.parameters?.docs?.source
    }
  }
};
WithNewLines.parameters = {
  ...WithNewLines.parameters,
  docs: {
    ...WithNewLines.parameters?.docs,
    source: {
      originalSource: "args => class WithNewLines extends lng.Component {\n  static _template() {\n    return {\n      InlineContent: {\n        type: InlineContentComponent,\n        x: 500,\n        w: 400,\n        contentWrap: args.contentWrap,\n        contentProperties: args.contentProperties,\n        justify: args.justify,\n        content: ['Example with multiple lines', {\n          icon: lightningbolt,\n          style: {\n            color: getHexColor('00ff00')\n          },\n          title: 'Green Lightning Bolt'\n        }, {\n          newline: true\n        }, 'this line should break here', {\n          newline: true\n        }, {\n          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n          title: 'Rotten Tomatoes rating'\n        }, 'another line break here', {\n          newline: true\n        }, {\n          badge: 'HD',\n          title: 'HD'\n        }, {\n          newline: true\n        }, {\n          badge: 'SD',\n          title: 'SD'\n        }]\n      }\n    };\n  }\n}",
      ...WithNewLines.parameters?.docs?.source
    }
  }
};
WithParsing.parameters = {
  ...WithParsing.parameters,
  docs: {
    ...WithParsing.parameters?.docs,
    source: {
      originalSource: "args => class WithParsing extends lng.Component {\n  static _template() {\n    return {\n      InlineContent: {\n        type: InlineContentComponent,\n        x: 550,\n        w: 400,\n        contentWrap: args.contentWrap,\n        contentProperties: args.contentProperties,\n        justify: args.justify,\n        customStyleMappings: {\n          italic: {\n            fontStyle: 'italic',\n            textColor: getHexColor('FF6194')\n          }\n        },\n        content: 'This is an example of using custom markup {ICON:settings|https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png} with a linebreak{NEWLINE}{BADGE:HD} that includes all available types like {TEXT:styled text|italic}.'\n      }\n    };\n  }\n}",
      ...WithParsing.parameters?.docs?.source
    }
  }
};
WithTruncation.parameters = {
  ...WithTruncation.parameters,
  docs: {
    ...WithTruncation.parameters?.docs,
    source: {
      originalSource: "args => class Basic extends lng.Component {\n  static _template() {\n    return {\n      InlineContent: {\n        type: InlineContentComponent,\n        ...args,\n        w: 500,\n        content: ['Text', {\n          icon: lightningbolt,\n          title: 'Green Lightning Bolt',\n          style: {\n            color: getHexColor('00ff00')\n          }\n        }, 'Wrapping Text', {\n          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',\n          title: 'Rotten Tomatoes rating'\n        }, 'and more text', {\n          text: 'with some red ',\n          style: {\n            textColor: getHexColor('FF6194')\n          }\n        }, 'for fun', {\n          badge: 'HD',\n          title: 'HD'\n        }, {\n          badge: 'SD',\n          title: 'SD'\n        }, ', and this should truncate before going on to a third line.']\n      }\n    };\n  }\n}",
      ...WithTruncation.parameters?.docs?.source
    }
  }
};
WithStrikeThrough.parameters = {
  ...WithStrikeThrough.parameters,
  docs: {
    ...WithStrikeThrough.parameters?.docs,
    source: {
      originalSource: "args => class WithParsing extends lng.Component {\n  static _template() {\n    return {\n      InlineContent: {\n        type: InlineContentComponent,\n        x: 550,\n        w: 400,\n        contentWrap: args.contentWrap,\n        contentProperties: args.contentProperties,\n        justify: args.justify,\n        content: ['Rent', {\n          newline: true\n        }, {\n          text: '$19.99',\n          style: {\n            textDecoration: 'line-through'\n          }\n        }, {\n          newline: true\n        }, '$12.99']\n      }\n    };\n  }\n}",
      ...WithStrikeThrough.parameters?.docs?.source
    }
  }
};

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/TextBox/TextBox.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  title: 'Components/TextBox'
});
const {
  args: inlineContentArgs,
  argTypes: inlineContentArgTypes
} = _InlineContent_InlineContent_stories__WEBPACK_IMPORTED_MODULE_1__["default"];
const lorum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales est eu eleifend interdum. Vivamus egestas maximus elementum. Sed condimentum ligula justo, non sollicitudin lectus rutrum vel. Integer iaculis vitae nisl quis tincidunt. Sed quis dui vehicula, vehicula felis a, tempor leo. Fusce tincidunt, ante eget pretium efficitur, libero elit volutpat quam, sit amet porta tortor odio non ligula. Ut sed dolor eleifend massa auctor porttitor eget ut lectus. Vivamus elementum lorem mauris, eu luctus tortor posuere sit amet. Nunc a interdum metus.';
const Basic = () => class Basic extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      TextBox: {
        type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
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
};
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
const WithInlineContentArray = () => class WithInlineContentArray extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      TextBox: {
        type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
        x: 200,
        w: 400,
        content: ['Text', {
          icon: _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_3__,
          style: {
            color: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getHexColor */ .H2)('00ff00')
          },
          title: 'Green Lightning Bolt'
        }, 'Wrapping Text', {
          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
          title: 'Rotten Tomatoes rating'
        }, 'and more text', {
          text: 'with some red ',
          style: {
            textColor: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getHexColor */ .H2)('FF6194')
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
};
WithInlineContentArray.args = inlineContentArgs;
WithInlineContentArray.argTypes = inlineContentArgTypes;
const WithInlineContentString = () => class WithInlineContentArray extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      TextBox: {
        type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
        x: 400,
        w: 400,
        content: 'This is an example of using custom markup {ICON:settings|https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png} with a linebreak{NEWLINE}{BADGE:HD} that includes all available types like {TEXT:styled text|italic}.',
        customStyleMappings: {
          italic: {
            fontStyle: 'italic',
            textColor: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getHexColor */ .H2)('FF6194')
          }
        }
      }
    };
  }
};
WithInlineContentString.args = inlineContentArgs;
WithInlineContentString.argTypes = inlineContentArgTypes;
const WithInlineContentTruncation = () => class Basic extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      TextBox: {
        type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
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
            color: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getHexColor */ .H2)('00ff00')
          }
        }, 'Wrapping Text', {
          icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
          title: 'Rotten Tomatoes rating'
        }, 'and more text', {
          text: 'with some red ',
          style: {
            textColor: (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getHexColor */ .H2)('FF6194')
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
};
;
const __namedExportsOrder = ["Basic", "WithInlineContentArray", "WithInlineContentString", "WithInlineContentTruncation"];
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
};

/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/ic_lightning_white_32.06aecfeb.png";

/***/ })

}]);
//# sourceMappingURL=components-TextBox-TextBox-stories.52ac7d58.iframe.bundle.js.map