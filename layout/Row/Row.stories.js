import lng from '@lightningjs/core';
import Row from '.';
import Column from '../Column';
import mdx from './Row.mdx';
import { getWidthByUpCount } from '../../utils';

export default {
  title: 'Layout / Row',
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
        Row: {
          type: Row,
          w: getWidthByUpCount(1),
          itemSpacing: args.itemSpacing,
          alwaysScroll: args.alwaysScroll,
          neverScroll: args.neverScroll,
          lazyScroll: args.lazyScroll,
          scrollIndex: args.scrollIndex,
          items: Array.apply(null, { length: 12 }).map((_, i) => ({
            type: Button,
            buttonText: `Button ${i + 1}`,
            w: 150
          }))
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };
Basic.argTypes = {
  itemSpacing: {
    defaultValue: 20,
    control: { type: 'range', min: 0, max: 100, step: 5 },
    description: 'px between items',
    table: { defaultValue: { summary: 20 } }
  },
  scrollIndex: {
    defaultValue: 0,
    control: { type: 'number', min: 0 },
    description:
      'Item index at which scrolling begins, provided the sum of item widths is greater than the width of the Row',
    table: { defaultValue: { summary: 0 } }
  },
  alwaysScroll: {
    defaultValue: false,
    control: { type: 'boolean' },
    description:
      'determines whether the row will stop scrolling as it nears the right to prevent white space',
    table: { defaultValue: { summary: false } }
  },
  neverScroll: {
    defaultValue: false,
    control: { type: 'boolean' },
    description:
      'if true, the row will never scroll, unless alwaysScroll is set to true, and if false, the row will apply normal scrolling logic',
    table: { defaultValue: { summary: false } }
  },
  lazyScroll: {
    defaultValue: false,
    control: { type: 'boolean' },
    description:
      'will only scroll the row if the item is off screen and alwaysScroll and neverScroll are both false',
    table: { defaultValue: { summary: false } }
  }
};

export const FocusHeightChange = () =>
  class FocusHeightChange extends lng.Component {
    static _template() {
      return {
        Row: {
          type: Row,
          w: getWidthByUpCount(1),
          items: Array.apply(null, { length: 5 }).map(() => ({
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
          w: getWidthByUpCount(1),
          itemSpacing: 20,
          items: Array.apply(null, { length: 10 }).map(() => ({
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
          w: getWidthByUpCount(1),
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

export const CenteredInParent = () =>
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
          w: getWidthByUpCount(1),
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

export const Plinko = () => {
  return class Plinko extends lng.Component {
    static _template() {
      return {
        Row: {
          type: Row,
          w: getWidthByUpCount(1),
          itemSpacing: 20,
          plinko: true,
          items: [
            {
              w: 150,
              type: Column,
              itemSpacing: 20,
              items: new Array(3).fill().map(() => ({
                type: Button,
                buttonText: 'Button',
                w: 150
              }))
            },
            {
              w: 150,
              type: Column,
              itemSpacing: 20,
              items: new Array(3).fill().map((item, index) => ({
                type: Button,
                buttonText: 1 !== index ? 'Button' : 'Skip focus',
                w: 150,
                skipFocus: 1 === index
              }))
            },
            {
              w: 150,
              type: Column,
              itemSpacing: 20,
              items: new Array(3).fill().map(() => ({
                type: Button,
                buttonText: 'Button',
                w: 150
              }))
            },
            {
              w: 150,
              type: Column,
              itemSpacing: 20,
              items: new Array(3).fill().map(() => ({
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
      return this.tag('Row');
    }
  };
};

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

export const SkipFocus = args =>
  class SkipFocus extends lng.Component {
    static _template() {
      return {
        Column: {
          type: Row,
          w: getWidthByUpCount(1),
          itemSpacing: args.itemSpacing,
          wrapSelected: args.wrapSelected,
          items: [
            ...Array.apply(null, { length: 13 }).map((_, i) => {
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
SkipFocus.argTypes = {
  itemSpacing: {
    defaultValue: 200,
    control: { type: 'range', min: 200, max: 400, step: 5 },
    description: 'px between items',
    table: { defaultValue: { summary: 200 } }
  },
  wrapSelected: {
    defaultValue: false,
    control: { type: 'boolean' },
    description:
      'enables wrapping behavior, so selectNext() selects the first item if the current item is the last on the list and vice versa',
    table: { defaultValue: { summary: false } }
  }
};

export const LazyScrollIndexes = ({
  startLazyScrollIndex,
  stopLazyScrollIndex
}) =>
  class LazyScrollIndexes extends lng.Component {
    static _template() {
      return {
        Row: {
          type: Row,
          w: getWidthByUpCount(1),
          itemSpacing: 20,
          alwaysScroll: false,
          neverScroll: false,
          lazyScroll: true,
          scrollIndex: 0,
          items: Array.apply(null, { length: 12 }).map((_, i) => ({
            type: Button,
            buttonText: `Button ${i + 1} ${
              i === startLazyScrollIndex ? '(start lazy scroll)' : ''
            } ${i === stopLazyScrollIndex ? '(stop lazy scroll)' : ''}`,
            w: 250
          })),
          startLazyScrollIndex,
          stopLazyScrollIndex
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };
LazyScrollIndexes.args = {
  startLazyScrollIndex: 1,
  stopLazyScrollIndex: 10
};
LazyScrollIndexes.argTypes = {
  startLazyScrollIndex: {
    control: 'number'
  },
  stopLazyScrollIndex: {
    control: 'number'
  }
};

export const AddingItems = args =>
  class AddingItems extends lng.Component {
    static _template() {
      return {
        Row: {
          type: Row,
          w: 1920 - 160, // x offset from preview.js * 2
          itemSpacing: args.itemSpacing,
          alwaysScroll: args.alwaysScroll,
          neverScroll: args.neverScroll,
          lazyScroll: args.lazyScroll,
          scrollIndex: args.scrollIndex,
          items: Array.apply(null, { length: 12 }).map((_, i) => ({
            type: Button,
            buttonText: `Button ${i}`,
            w: 150
          }))
        }
      };
    }

    _init() {
      super._init();
      setTimeout(() => {
        this.tag('Row').appendItemsAt(
          [
            {
              type: Button,
              buttonText: 'New Button 0',
              w: 150
            },
            {
              type: Button,
              buttonText: 'New Button 1',
              w: 150
            },
            {
              type: Button,
              buttonText: 'New Button 2',
              w: 150
            }
          ],
          3
        );
      }, 3000);
      setTimeout(() => {
        this.tag('Row').prependItems([
          {
            type: Button,
            buttonText: 'New Button 3',
            w: 150
          },
          {
            type: Button,
            buttonText: 'New Button 4',
            w: 150
          },
          {
            type: Button,
            buttonText: 'New Button 5',
            w: 150
          }
        ]);
      }, 3750);
    }

    _getFocused() {
      return this.tag('Row');
    }
  };
AddingItems.args = {
  itemSpacing: 20,
  scrollIndex: 0,
  alwaysScroll: false,
  neverScroll: false,
  lazyScroll: false
};
AddingItems.argTypes = {
  itemSpacing: {
    control: { type: 'range', min: 0, max: 100, step: 5 }
  },
  scrollIndex: {
    control: 'number'
  },
  alwaysScroll: {
    control: 'boolean'
  },
  neverScroll: {
    control: 'boolean'
  },
  lazyScroll: {
    control: 'boolean'
  }
};

export const LazyUpCount = args =>
  class LazyUpCount extends lng.Component {
    static _template() {
      return {
        Row: {
          type: Row,
          w: 1920 - 160, // x offset from preview.js * 2
          itemSpacing: args.itemSpacing,
          alwaysScroll: args.alwaysScroll,
          neverScroll: args.neverScroll,
          lazyScroll: args.lazyScroll,
          lazyUpCount: args.lazyUpCount,
          scrollIndex: args.scrollIndex,
          items: Array.apply(null, { length: 12 }).map((_, i) => ({
            type: Button,
            buttonText: `Button ${i + 1}`,
            w: 150
          }))
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };
LazyUpCount.args = {
  itemSpacing: 20,
  scrollIndex: 0,
  alwaysScroll: false,
  neverScroll: false,
  lazyScroll: false,
  lazyUpCount: 4
};
LazyUpCount.argTypes = {
  itemSpacing: {
    control: { type: 'range', min: 0, max: 100, step: 5 }
  },
  scrollIndex: {
    control: 'number'
  },
  lazyUpCount: {
    control: 'number'
  },
  alwaysScroll: {
    control: 'boolean'
  },
  neverScroll: {
    control: 'boolean'
  },
  lazyScroll: {
    control: 'boolean'
  }
};

export const RemovingItems = args =>
  class RemovingItems extends lng.Component {
    static _template() {
      return {
        Row: {
          type: Row,
          w: 1920 - 160, // x offset from preview.js * 2
          itemSpacing: args.itemSpacing,
          alwaysScroll: args.alwaysScroll,
          neverScroll: args.neverScroll,
          lazyScroll: args.lazyScroll,
          scrollIndex: args.scrollIndex,
          items: ['A', 'B', 'C', 'D', 'E'].map(letter => ({
            type: Button,
            buttonText: letter,
            w: 150
          }))
        }
      };
    }

    _init() {
      super._init();
      setTimeout(() => {
        this.tag('Row').removeItemAt(1);
      }, 3000);
    }

    _getFocused() {
      return this.tag('Row');
    }
  };
RemovingItems.args = {
  itemSpacing: 20,
  scrollIndex: 0,
  alwaysScroll: false,
  neverScroll: false,
  lazyScroll: false
};
RemovingItems.argTypes = {
  itemSpacing: {
    control: { type: 'range', min: 0, max: 100, step: 5 }
  },
  scrollIndex: {
    control: 'number'
  },
  alwaysScroll: {
    control: 'boolean'
  },
  neverScroll: {
    control: 'boolean'
  },
  lazyScroll: {
    control: 'boolean'
  }
};
