import lng from '@lightningjs/core';
import { getWidthByUpCount } from '../../utils/index.js';
import { Row as RowComponent, Column } from '../index.js';
import mdx from './Row.mdx';
import { context } from '../../globals/index.js';
import { createModeControl } from '../../../storybook/index.js';
import { CATEGORIES } from 'lightning-ui-docs';
import Button from '../Button';

export default {
  title: `${CATEGORIES[64]}/Row`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

/**
 * Shared Args and Arg Types for Stories
 */
const sharedArgs = {
  alwaysScroll: false,
  lazyScroll: false,
  neverScroll: false,
  scrollIndex: 0
};

const sharedArgTypes = {
  ...createModeControl(['focused'], 'focused'),
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

/**
 * Variables only used for Story purposes
 */

// Only used in Varied Width Story to create buttons with various widths
const isVariedWidth = true;

// creates an array of buttons to be used in Stories
const createItems = (buttonType, length, height, isVariedWidth) => {
  return Array.from({ length }).map((_, i) => ({
    type: buttonType,
    title: `Button ${i + 1}`,
    w: isVariedWidth ? 120 + Math.floor(Math.random() * 80) : 150,
    h: height || 40
  }));
};

class ButtonFixedWidth extends Button {
  static get __componentName() {
    return 'ButtonSmall';
  }

  _init() {
    this.fixed = true;
    this.w = 250;
    super._init();
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

/**
 * Stories for various versions of the component
 */

export const Row = () =>
  class Row extends lng.Component {
    static _template() {
      return {
        Row: {
          type: RowComponent,
          w: getWidthByUpCount(context.theme, 1),
          items: createItems(ButtonFixedWidth, 12, 50)
        }
      };
    }

    _getFocused() {
      return this.tag('Row');
    }
  };

Row.args = { ...sharedArgs };
Row.argTypes = { ...sharedArgTypes };

export const FocusHeightChange = () =>
  class FocusHeightChange extends lng.Component {
    static _template() {
      return {
        Row: {
          type: RowComponent,
          w: getWidthByUpCount(context.theme, 1),
          items: Array.apply(null, { length: 5 }).map(() => ({
            type: ExpandingHeightButton,
            title: 'Button',
            w: 150,
            h: 75
          }))
        }
      };
    }
  };

export const VaryingItemWidth = () =>
  class VaryingItemWidth extends lng.Component {
    static _template() {
      return {
        Row: {
          type: RowComponent,
          w: getWidthByUpCount(context.theme, 1),
          items: createItems(ButtonFixedWidth, 10, 40, isVariedWidth)
        }
      };
    }
  };

export const ExpandableWidth = () =>
  class ExpandableWidth extends lng.Component {
    static _template() {
      return {
        Row: {
          type: RowComponent,
          w: getWidthByUpCount(context.theme, 1),
          items: createItems(ExpandingButton, 6)
        }
      };
    }
  };

export const CenteredInParent = () =>
  class CenteredInParent extends lng.Component {
    static _template() {
      const itemSpacing = 20;
      const buttonW = 150;
      const buttonH = 40;
      return {
        Row: {
          type: RowComponent,
          w: getWidthByUpCount(context.theme, 1),
          h: buttonH * 3 + 40,
          items: [
            {
              type: Column,
              w: buttonW,
              h: buttonH * 3 + itemSpacing * 2,
              style: { itemSpacing },
              items: createItems(ButtonFixedWidth, 3)
            },
            {
              type: Column,
              w: buttonW,
              h: buttonH,
              style: { itemSpacing },
              centerInParent: true,
              items: createItems(ButtonFixedWidth, 1)
            }
          ]
        }
      };
    }
  };

export const Plinko = () => {
  return class Plinko extends lng.Component {
    static _template() {
      const colItemSpacing = 20;
      return {
        Row: {
          type: RowComponent,
          w: getWidthByUpCount(context.theme, 1),
          plinko: true,
          items: [
            {
              w: 150,
              type: Column,
              style: { itemSpacing: colItemSpacing },
              items: createItems(ButtonFixedWidth, 3)
            },
            {
              w: 150,
              type: Column,
              style: { itemSpacing: colItemSpacing },
              items: new Array(3).fill().map((item, index) => ({
                type: ButtonFixedWidth,
                title: 1 !== index ? 'Button' : 'Skip focus',
                w: 150,
                skipFocus: 1 === index
              }))
            },
            {
              w: 150,
              type: Column,
              style: { itemSpacing: colItemSpacing },
              items: createItems(ButtonFixedWidth, 3)
            },
            {
              w: 150,
              type: Column,
              style: { itemSpacing: colItemSpacing },
              items: createItems(ButtonFixedWidth, 3)
            }
          ]
        }
      };
    }
  };
};

export const SkipFocus = args =>
  class SkipFocus extends lng.Component {
    static _template() {
      return {
        Column: {
          type: RowComponent,
          w: getWidthByUpCount(context.theme, 1),
          style: { itemSpacing: 200 },
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
              return { type: ButtonFixedWidth, title: 'Button' };
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
  };

SkipFocus.argTypes = {
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
          type: RowComponent,
          w: getWidthByUpCount(context.theme, 1),
          items: Array.apply(null, { length: 12 }).map((_, i) => ({
            type: ButtonFixedWidth,
            title: `Button ${i + 1} ${
              i === startLazyScrollIndex ? '(start lazy scroll)' : ''
            } ${i === stopLazyScrollIndex ? '(stop lazy scroll)' : ''}`,
            w: 250
          })),
          startLazyScrollIndex,
          stopLazyScrollIndex
        }
      };
    }
  };
LazyScrollIndexes.args = {
  ...sharedArgs,
  startLazyScrollIndex: 1,
  stopLazyScrollIndex: 10
};
LazyScrollIndexes.argTypes = {
  ...sharedArgTypes,
  startLazyScrollIndex: {
    control: 'number'
  },
  stopLazyScrollIndex: {
    control: 'number'
  }
};

export const AddingItems = () =>
  class AddingItems extends lng.Component {
    static _template() {
      return {
        Row: {
          type: RowComponent,
          w: 1920 - 160, // x offset from preview.js * 2
          items: createItems(ButtonFixedWidth, 12)
        }
      };
    }

    _init() {
      super._init();
      setTimeout(() => {
        this.tag('Row').appendItemsAt(
          [
            {
              type: ButtonFixedWidth,
              title: 'New Button 0',
              w: 150
            },
            {
              type: ButtonFixedWidth,
              title: 'New Button 1',
              w: 150
            },
            {
              type: ButtonFixedWidth,
              title: 'New Button 2',
              w: 150
            }
          ],
          3
        );
      }, 3000);
      setTimeout(() => {
        this.tag('Row').prependItems([
          {
            type: ButtonFixedWidth,
            title: 'New Button 3',
            w: 150
          },
          {
            type: ButtonFixedWidth,
            title: 'New Button 4',
            w: 150
          },
          {
            type: ButtonFixedWidth,
            title: 'New Button 5',
            w: 150
          }
        ]);
      }, 3750);
    }
  };
AddingItems.args = {
  ...sharedArgs
};
AddingItems.argTypes = {
  ...sharedArgTypes
};

export const LazyUpCount = args =>
  class LazyUpCount extends lng.Component {
    static _template() {
      return {
        Row: {
          type: RowComponent,
          w: 1920 - 160, // x offset from preview.js * 2
          lazyUpCount: args.lazyUpCount,
          items: createItems(ButtonFixedWidth, 12)
        }
      };
    }
  };
LazyUpCount.args = {
  ...sharedArgs,
  lazyUpCount: 4
};
LazyUpCount.argTypes = {
  ...sharedArgTypes,
  lazyUpCount: {
    control: 'number',
    defaultValue: 4,
    description: 'some description',
    table: {
      defaultValue: { summary: 4 }
    }
  }
};

export const RemovingItems = () =>
  class RemovingItems extends lng.Component {
    static _template() {
      return {
        Row: {
          type: RowComponent,
          w: 1920 - 160, // x offset from preview.js * 2
          items: createItems(ButtonFixedWidth, 5)
        }
      };
    }

    _init() {
      super._init();
      setTimeout(() => {
        this.tag('Row').removeItemAt(1);
      }, 3000);
    }
  };
RemovingItems.args = {
  ...sharedArgs
};
RemovingItems.argTypes = {
  ...sharedArgTypes
};
