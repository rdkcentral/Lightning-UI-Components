/**
 * Copyright 2020 Comcast Cable Communications Management, LLC
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
import lng from '@lightningjs/core';

import Row from '.';
import Column from '../Column';
import mdx from './Row.mdx';

export default {
  title: 'Layout / Row',
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = () =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Row: {
          type: Row,
          itemSpacing: 100,
          items: [
            { type: Button, buttonText: 'Button', w: 150 },
            { type: Button, buttonText: 'Button', w: 150 },
            { type: Button, buttonText: 'Button', w: 150 },
            { type: Button, buttonText: 'Button', w: 150 },
            { type: Button, buttonText: 'Button', w: 150 }
          ]
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };

export const AlwaysScroll = () =>
  class AlwasyScroll extends lng.Component {
    static _template() {
      return {
        Row: {
          type: Row,
          itemSpacing: 100,
          alwaysScroll: true,
          items: [
            { type: Button, buttonText: 'Button', w: 150 },
            { type: Button, buttonText: 'Button', w: 150 },
            { type: Button, buttonText: 'Button', w: 150 },
            { type: Button, buttonText: 'Button', w: 150 },
            { type: Button, buttonText: 'Button', w: 150 }
          ]
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };

export const SideScrolling = args =>
  class SideScrolling extends lng.Component {
    static _template() {
      return {
        Row: {
          type: Row,
          w: 900,
          itemSpacing: 20,
          scrollIndex: args.scrollIndex,
          items: Array.apply(null, { length: 12 }).map((_, i) => ({
            type: Button,
            buttonText: `Button ${i + 1}`,
            w: 150
          })),
          lazyScroll: args.lazyScroll
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };
SideScrolling.args = {
  scrollIndex: 0,
  lazyScroll: false
};
SideScrolling.argTypes = {
  scrollIndex: {
    control: 'number'
  },
  lazyScroll: {
    control: 'boolean'
  }
};

export const FocusHeightChange = () =>
  class FocusHeightChange extends lng.Component {
    static _template() {
      return {
        Row: {
          type: Row,
          items: Array.apply(null, { length: 5 }).map((_, i) => ({
            type: ExpandingHeightButton,
            buttonText: 'Button',
            w: 150,
            h: 75
          })),
          itemSpacing: 20
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };

export const VaryingItemWidth = () =>
  class VaryingItemWidth extends lng.Component {
    static _template() {
      return {
        Row: {
          type: Row,
          itemSpacing: 20,
          items: Array.apply(null, { length: 10 }).map((_, i) => ({
            type: Button,
            buttonText: 'Button',
            w: 120 + Math.floor(Math.random() * 80)
          }))
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };

export const ExpandableWidth = () =>
  class ExpandableWidth extends lng.Component {
    static _template() {
      return {
        Row: {
          type: Row,
          itemSpacing: 20,
          items: [
            { type: ExpandingButton, buttonText: 'Button', w: 150 },
            { type: ExpandingButton, buttonText: 'Button', w: 150 },
            { type: ExpandingButton, buttonText: 'Button', w: 150 },
            { type: ExpandingButton, buttonText: 'Button', w: 150 },
            { type: ExpandingButton, buttonText: 'Button', w: 150 },
            { type: ExpandingButton, buttonText: 'Button', w: 150 }
          ]
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };

export const CenteredInParent = args =>
  class CenteredInParent extends lng.Component {
    static _template() {
      const itemSpacing = 20;
      const buttonW = 150;
      const buttonH = 40;
      const button = {
        type: Button,
        buttonText: 'Button',
        w: buttonW,
        h: buttonH
      };
      return {
        Row: {
          type: Row,
          itemSpacing,
          w: 400,
          h: buttonH * 3 + itemSpacing * 2,
          items: [
            {
              type: Column,
              w: buttonW,
              h: buttonH * 3 + itemSpacing * 2,
              itemSpacing,
              items: Array.apply(null, { length: 3 }).map(() => button)
            },
            {
              type: Column,
              w: buttonW,
              h: buttonH,
              itemSpacing,
              centerInParent: true,
              items: Array.apply(null, { length: 1 }).map(() => button)
            }
          ]
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };

class ExtendedRow extends Row {
  static _template() {
    return {
      ...super._template(),
      Title: {
        text: {
          x: 0,
          y: 0
        }
      },
      Items: {
        y: 60
      }
    };
  }

  set title(val) {
    this.Title.text = val;
  }

  get title() {
    return this.Title.text;
  }

  get Title() {
    return this.tag('Title');
  }
}

class Button extends lng.Component {
  static _template() {
    return {
      color: 0xff1f1f1f,
      texture: lng.Tools.getRoundRect(150, 40, 4),
      h: 40,
      Label: {
        x: w => w / 2,
        y: y => y / 2,
        mount: 0.5,
        color: 0xffffffff,
        text: { fontSize: 20 }
      }
    };
  }
  _init() {
    this.tag('Label').text = this.buttonText;
  }
  _focus() {
    this.color = 0xffffffff;
    this.tag('Label').color = 0xff1f1f1f;
  }
  _unfocus() {
    this.color = 0xff1f1f1f;
    this.tag('Label').color = 0xffffffff;
  }
}

class ExpandingButton extends Button {
  _focus() {
    super._focus();
    this.patch({ w: 200 });
    this.fireAncestors('$itemChanged');
  }

  _unfocus() {
    super._unfocus();
    this.patch({ w: 150 });
  }
}

class ExpandingHeightButton extends Button {
  _focus() {
    super._focus();
    this.setSmooth('h', 150, { duration: 1 });
    this.fireAncestors('$itemChanged');
  }

  _unfocus() {
    super._unfocus();
    this.setSmooth('h', 75, { duration: 1 });
  }
}
