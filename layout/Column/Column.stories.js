/**
 * Copyright 2021 Comcast Cable Communications Management, LLC
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
import Column from '.';
import FocusManager from '../FocusManager';
import Row from '../Row';
import mdx from './Column.mdx';
import { flatten } from '../../utils';

export default {
  title: 'Layout / Column',
  args: {
    itemSpacing: 20
  },
  argTypes: {
    itemSpacing: {
      control: { type: 'range', min: 0, max: 100, step: 5 }
    }
  },
  parameters: {
    docs: {
      page: mdx
    }
  }
};

export const Basic = args =>
  class Basic extends lng.Component {
    static _template() {
      return {
        Column: {
          type: Column,
          h: 500,
          itemSpacing: args.itemSpacing,
          scrollIndex: args.scrollIndex,
          items: Array.apply(null, { length: 20 }).map((_, i) => ({
            type: Button,
            buttonText: `Button ${i + 1}`
          })),
          alwaysScroll: args.alwaysScroll
        }
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };
Basic.args = {
  scrollIndex: 0,
  itemTransition: 0.4
};
Basic.argTypes = {
  itemTransition: {
    control: { type: 'number', min: 0, step: 0.1 }
  },
  scroll: {
    control: { type: 'select', options: [1, 5, 15, 20] }
  },
  scrollIndex: {
    control: { type: 'number', min: 0 }
  },
  alwaysScroll: {
    control: { type: 'boolean' }
  }
};
Basic.parameters = {
  argActions: {
    scroll: function(index, component) {
      component.tag('Column').scrollTo(index - 1);
    },
    itemTransition: (duration, component) => {
      component.tag('Column').itemTransition = {
        duration,
        timingFunction: component.tag('Column')._itemTransition.timingFunction
      };
    }
  }
};

export const TestCase = args =>
  class TestCase extends lng.Component {
    static _template() {
      return {
        Column: {
          type: Column,
          h: h => h,
          scrollIndex: args.scrollIndex,
          itemSpacing: args.itemSpacing,
          items: Array.apply(null, { length: 10 }).map((_, i) => ({
            type: Button,
            h: 80,
            buttonText: `Button ${i + 1}`
          }))
        }
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };
TestCase.args = {
  scrollIndex: 3
};
TestCase.argTypes = {
  scrollIndex: {
    control: { type: 'range', min: 0, max: 4, step: 1 }
  }
};

export const MultiColumn = args =>
  class MultiColumn extends lng.Component {
    static _template() {
      return {
        FocusManager: {
          type: FocusManager,
          direction: 'row',
          items: [{ type: Basic(args) }, { type: Basic(args), x: 180 }]
        }
      };
    }

    _getFocused() {
      return this.tag('FocusManager');
    }
  };
MultiColumn.parameters = { tag: 'FocusManager' };
MultiColumn.args = {
  scrollIndex: 0
};
MultiColumn.argTypes = {
  scrollIndex: {
    control: { type: 'range', min: 0, max: 4, step: 1 }
  }
};

export const Plinko = args =>
  class Plinko extends lng.Component {
    static _template() {
      return {
        Column: {
          type: Column,
          itemSpacing: args.itemSpacing,
          plinko: true,
          items: [
            {
              type: Row,
              h: 40,
              w: 1920 - 180, // x offset from preview.js * 2,
              itemSpacing: args.itemSpacing,
              items: Array.apply(null, { length: 3 }).map(() => ({
                type: Button,
                buttonText: 'Button',
                w: 150
              }))
            },
            {
              type: Row,
              h: 40,
              w: 1920 - 180, // x offset from preview.js * 2,
              itemSpacing: args.itemSpacing,
              items: Array.apply(null, { length: 3 }).map(() => ({
                type: Button,
                buttonText: 'Button',
                w: 150
              }))
            }
          ]
        }
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };

export const VaryingItemHeight = args =>
  class VaryingItemHeight extends lng.Component {
    static _template() {
      return {
        Column: {
          type: Column,
          h: 500,
          itemSpacing: args.itemSpacing,
          items: Array.apply(null, { length: 10 }).map(() => ({
            type: Button,
            buttonText: 'Button',
            h: 40 + Math.floor(Math.random() * 100)
          }))
        }
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };

export const ExpandableHeightItems = args =>
  class ExpandableHeightItems extends lng.Component {
    static _template() {
      return {
        Column: {
          type: Column,
          itemSpacing: args.itemSpacing,
          items: Array.apply(null, { length: 15 }).map(() => ({
            type: ExpandingButton,
            h: 40,
            w: 150,
            buttonText: 'Button'
          }))
        }
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };

export const ExpandableHeightRows = args =>
  class ExpandableHeightItems extends lng.Component {
    static _template() {
      return {
        Column: {
          type: Column,
          itemSpacing: args.itemSpacing,
          plinko: true,
          items: Array.apply(null, { length: 15 }).map((_, i) => ({
            type: ExpandingRow,
            y: 50 * i,
            h: 40,
            items: [
              { type: ExpandingButton, buttonText: 'Button', w: 150 },
              { type: ExpandingButton, buttonText: 'Button', w: 150 },
              { type: ExpandingButton, buttonText: 'Button', w: 150 }
            ]
          }))
        }
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };

export const SkipFocus = args =>
  class SkipFocus extends lng.Component {
    static _template() {
      return {
        Column: {
          type: Column,
          itemSpacing: args.itemSpacing,
          wrapSelected: args.wrapSelected,
          items: [
            ...Array.apply(null, { length: 49 }).map((_, i) => {
              if (i % 4 === 0)
                return {
                  type: Title,
                  titleText: 'Skip Focus Text',
                  h: 30,
                  skipFocus: true
                };
              return { type: Button, buttonText: 'Button' };
            }),
            {
              type: Title,
              titleText: 'Skip Focus Text',
              h: 30,
              skipFocus: true
            }
          ]
        }
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };
SkipFocus.args = {
  itemSpacing: 30,
  wrapSelected: false
};

export const OnScreenEffect = args =>
  class OnScreenEffect extends lng.Component {
    static _template() {
      return {
        Column: {
          type: Column,
          itemSpacing: args.itemSpacing,
          scrollIndex: 2,
          h: 520,
          items: Array.apply(null, { length: 10 }).map((_, i) => {
            return {
              type: Button,
              buttonText: `Button ${i}`
            };
          })
        }
      };
    }

    _init() {
      this.tag('Column').onScreenEffect = items => {
        const { selected } = this.tag('Column');
        const selectedIndex = items.indexOf(selected);

        items
          .slice(0, selectedIndex)
          .reverse()
          .forEach((item, idx) => {
            item.alpha = 1 / (1 + idx);
          });
        items.slice(selectedIndex + 1).forEach((item, idx) => {
          item.alpha = 1 / (1 + idx);
        });
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };
OnScreenEffect.args = {
  itemSpacing: 60
};

export const StickyTitle = args => {
  const items = flatten(
    Array.apply(null, { length: 5 }).map((_, i) => {
      const headerText = `Sticky Header ${i}`;
      const items = Array.apply(null, { length: 8 }).map((_, i) => {
        return {
          type: Button,
          buttonText: `Button ${i + 1}`,
          w: 200,
          headerText
        };
      });

      return [
        {
          type: ColumnHeader,
          headerText,
          skipFocus: true
        },
        ...items
      ];
    })
  );
  items.shift();

  return class ColumnExample extends lng.Component {
    static _template() {
      return {
        h: 450,
        w: 200,
        ColumnHeader: {
          type: ColumnHeader,
          headerText: 'Sticky Header 0',
          h: 40
        },
        Column: {
          y: 50,
          w: 300,
          h: 400,
          clipping: true,
          itemSpacing: args.itemSpacing,
          type: Column,
          items,
          signals: {
            selectedChange: '_updateHeader'
          }
        }
      };
    }

    _updateHeader(selected) {
      this.tag('ColumnHeader').headerText = selected.headerText || '';
    }

    _getFocused() {
      return this.tag('Column');
    }
  };
};
StickyTitle.args = {
  itemSpacing: 50
};

export const CenteredInParent = args =>
  class CenteredInParent extends lng.Component {
    static _template() {
      const buttonW = 150;
      const button = {
        type: Button,
        buttonText: 'Button',
        w: buttonW
      };
      return {
        Column: {
          type: Column,
          itemSpacing: args.itemSpacing,
          w: buttonW * 3 + args.itemSpacing * 2,
          items: [
            {
              type: Row,
              h: 40,
              itemSpacing: args.itemSpacing,
              items: Array.apply(null, { length: 3 }).map(() => button)
            },
            {
              type: Row,
              h: 40,
              itemSpacing: args.itemSpacing,
              centerInParent: true,
              items: Array.apply(null, { length: 1 }).map(() => button)
            }
          ]
        }
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };

class ColumnHeader extends lng.Component {
  static _template() {
    return {
      Label: {
        x: 5,
        y: 10,
        text: {
          text: 'Sticky Header',
          fontSize: 24,
          textColor: 0xffffffff
        },
        zIndex: 2
      },
      Line: {
        color: 0xffffff1f,
        rect: true,
        w: 300,
        y: 35,
        h: 3
      }
    };
  }

  set headerText(val) {
    this.tag('Label').text = val;
  }
}

class Title extends lng.Component {
  static _template() {
    return {
      Label: {
        x: 75,
        y: 22,
        mount: 0.5,
        color: 0xffffffff,
        text: { fontSize: 20 }
      }
    };
  }

  _init() {
    this.tag('Label').text = this.titleText;
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
    this.patch({ h: 100 });
    this.fireAncestors('$itemChanged');
  }

  _unfocus() {
    super._unfocus();
    this.patch({ h: 40 });
  }
}

class ExpandingRow extends Row {
  _focus() {
    super._focus();
    this.patch({ h: 100 });
    this.fireAncestors('$itemChanged');
  }

  _unfocus() {
    super._unfocus();
    this.patch({ h: 40 });
  }
}

export const SkipPlinko = () =>
  class SkipPlinko extends lng.Component {
    static _template() {
      const buttonW = 150;
      const button = {
        type: Button,
        buttonText: 'Button',
        w: buttonW
      };
      return {
        Column: {
          type: Column,
          w: 900,
          itemSpacing: 32,
          plinko: true,
          items: [
            {
              type: Row,
              h: 50,
              itemSpacing: 50,
              items: Array.apply(null, { length: 3 }).map(() => button)
            },
            {
              type: Row,
              h: 100,
              skipPlinko: true,
              items: [
                {
                  ...button,
                  w: 550,
                  h: 75
                }
              ]
            },

            {
              type: Row,
              itemSpacing: 50,
              h: 180,
              items: Array.apply(null, { length: 3 }).map(() => button)
            }
          ]
        }
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };
