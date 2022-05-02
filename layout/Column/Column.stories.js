import lng from '@lightningjs/core';
import Column from '.';
import FocusManager from '../FocusManager';
import Row from '../Row';
import mdx from './Column.mdx';
import { flatten } from '../../utils';
import parks from '../../assets/images/Parks_and_Recreation_16x9.jpg';
import jurassic from '../../assets/images/Jurassic_World_16x9.jpg';
import trolls from '../../assets/images/Trolls_World_Tour_16x9.jpg';
import pets from '../../assets/images/The_Secret_Life_of_Pets_16x9.jpg';
import person from '../../assets/images/cast.png';
import person1 from '../../assets/images/cast1.png';
import person2 from '../../assets/images/cast2.png';
import { Tile } from '../../elements';
import context from '../../context';

export default {
  title: 'Layout / Column',
  argTypes: {
    itemSpacing: {
      defaultValue: 20,
      control: { type: 'range', min: 0, max: 100, step: 5 },
      description: 'px between items',
      table: { defaultValue: { summary: 20 } }
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
          h:
            context.theme.layout.screenH -
            2 *
              (context.theme.layout.marginY +
                context.theme.layout.gutterY.small),
          itemSpacing: args.itemSpacing,
          scrollIndex: args.scrollIndex,
          items: Array.apply(null, { length: 20 }).map((_, i) => ({
            type: Button,
            buttonText: `Button ${i + 1}`
          }))
        }
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };
Basic.argTypes = {
  scroll: {
    defaultValue: 1,
    control: { type: 'select', options: [1, 5, 15, 20] },
    description: 'scroll to selected index',
    table: { defaultValue: { summary: 1 } }
  },
  scrollIndex: {
    defaultValue: 0,
    control: { type: 'number', min: 0 },
    description:
      'Item index at which scrolling begins, provided the sum of item heights is greater than the height of the Column',
    table: { defaultValue: { summary: 0 } }
  },
  alwaysScroll: {
    defaultValue: false,
    control: { type: 'boolean' },
    description:
      'determines whether the column will stop scrolling as it nears the bottom to prevent white space',
    table: { defaultValue: { summary: false } }
  }
};
Basic.parameters = {
  argActions: {
    scroll: function (index, component) {
      component.tag('Column').scrollTo(index - 1);
    }
  }
};

export const TestCase = args =>
  class TestCase extends lng.Component {
    static _template() {
      return {
        Column: {
          type: Column,
          h:
            context.theme.layout.screenH -
            2 *
              (context.theme.layout.marginY +
                context.theme.layout.gutterY.small),
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
TestCase.argTypes = {
  scrollIndex: {
    defaultValue: 3,
    control: { type: 'range', min: 0, max: 4, step: 1 },
    description:
      'Item index at which scrolling begins, provided the sum of item heights is greater than the height of the Column',
    table: { defaultValue: { summary: 3 } }
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
MultiColumn.argTypes = {
  scrollIndex: {
    defaultValue: 0,
    control: { type: 'range', min: 0, max: 4, step: 1 },
    description:
      'Item index at which scrolling begins, provided the sum of item heights is greater than the height of the Column',
    table: { defaultValue: { summary: 0 } }
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
              w: context.theme.calculateColumnWidth(1),
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
              w: context.theme.calculateColumnWidth(1),
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
          h:
            context.theme.layout.screenH -
            2 *
              (context.theme.layout.marginY +
                context.theme.layout.gutterY.small),
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
          h:
            context.theme.layout.screenH -
            2 *
              (context.theme.layout.marginY +
                context.theme.layout.gutterY.small),
          itemSpacing: args.itemSpacing,
          items: Array.apply(null, { length: 15 }).map((_, i) => ({
            type: ExpandingButton,
            h: 40,
            w: 150,
            buttonText: `Button ${i}`
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
          h:
            context.theme.layout.screenH -
            2 *
              (context.theme.layout.marginY +
                context.theme.layout.gutterY.small),
          w: context.theme.calculateColumnWidth(1),
          itemSpacing: args.itemSpacing,
          plinko: true,
          items: Array.apply(null, { length: 15 }).map(() => ({
            type: ExpandingRow,
            w: context.theme.calculateColumnWidth(1),
            h: 40,
            items: [
              { type: ExpandingButton, buttonText: `Button ${i}`, w: 150 },
              { type: ExpandingButton, buttonText: `Button ${i}`, w: 150 },
              { type: ExpandingButton, buttonText: `Button ${i}`, w: 150 }
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
          h:
            context.theme.layout.screenH -
            2 *
              (context.theme.layout.marginY +
                context.theme.layout.gutterY.small),
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
SkipFocus.argTypes = {
  itemSpacing: {
    defaultValue: 30,
    control: { type: 'range', min: 0, max: 100, step: 5 },
    description: 'px between items',
    table: { defaultValue: { summary: 30 } }
  },
  wrapSelected: {
    defaultValue: false,
    control: { type: 'boolean' },
    description:
      'enables wrapping behavior, so selectNext() selects the first item if the current item is the last on the list and vice versa',
    table: { defaultValue: { summary: false } }
  }
};

export const OnScreenEffect = args =>
  class OnScreenEffect extends lng.Component {
    static _template() {
      return {
        Column: {
          type: Column,
          itemSpacing: args.itemSpacing,
          scrollIndex: 2,
          h:
            context.theme.layout.screenH -
            2 *
              (context.theme.layout.marginY +
                context.theme.layout.gutterY.small),
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
OnScreenEffect.argTypes = {
  itemSpacing: {
    defaultValue: 60,
    control: { type: 'range', min: 0, max: 100, step: 5 },
    description: 'px between items',
    table: { defaultValue: { summary: 60 } }
  }
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
StickyTitle.argTypes = {
  itemSpacing: {
    defaultValue: 50,
    control: { type: 'range', min: 0, max: 100, step: 5 },
    description: 'px between items',
    table: { defaultValue: { summary: 50 } }
  }
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
      return {
        Column: {
          type: Column,
          w: context.theme.calculateColumnWidth(1),
          itemSpacing: 32,
          plinko: true,
          items: [
            {
              type: Row,
              h: 200,
              itemSpacing: 50,
              items: [
                {
                  type: Tile,
                  w: 320,
                  h: 180,
                  artwork: {
                    src: parks
                  }
                },
                {
                  type: Tile,
                  w: 320,
                  h: 180,
                  artwork: {
                    src: person
                  }
                },
                {
                  type: Tile,
                  w: 320,
                  h: 180,
                  artwork: {
                    src: trolls
                  }
                }
              ]
            },
            {
              type: Row,
              h: 340,
              skipPlinko: true,
              items: [
                {
                  type: Tile,
                  w: 1060,
                  h: 300,
                  artwork: {
                    src: pets
                  },
                  metadata: {
                    firstLine: 'Row with skipPlinko set to true'
                  }
                }
              ]
            },
            {
              type: Row,
              itemSpacing: 50,
              h: 180,
              items: [
                {
                  type: Tile,
                  w: 320,
                  h: 180,
                  artwork: {
                    src: person2
                  }
                },
                {
                  type: Tile,
                  w: 320,
                  h: 180,
                  artwork: {
                    src: jurassic
                  }
                },
                {
                  type: Tile,
                  w: 320,
                  h: 180,
                  artwork: {
                    src: person1
                  }
                }
              ]
            }
          ]
        }
      };
    }

    _getFocused() {
      return this.tag('Column');
    }
  };

export const LazyUpCount = args =>
  class LazyUpCount extends lng.Component {
    static _template() {
      return {
        Column: {
          type: Column,
          h: 500,
          itemSpacing: args.itemSpacing,
          scrollIndex: args.scrollIndex,
          lazyUpCount: args.lazyUpCount,
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
LazyUpCount.args = {
  scrollIndex: 0,
  lazyUpCount: 5,
  itemTransition: 0.4
};
LazyUpCount.argTypes = {
  itemTransition: {
    control: { type: 'number', min: 0, step: 0.1 }
  },
  scroll: {
    control: { type: 'select', options: [1, 5, 15, 20] }
  },
  scrollIndex: {
    control: { type: 'number', min: 0 }
  },
  lazyUpCount: {
    control: { type: 'number', min: 0 }
  },
  alwaysScroll: {
    control: { type: 'boolean' }
  }
};
LazyUpCount.parameters = {
  argActions: {
    scroll: function (index, component) {
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

export const AddingItems = args =>
  class AddingItems extends lng.Component {
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
          }))
        }
      };
    }

    _init() {
      super._init();
      setTimeout(() => {
        this.tag('Column').appendItemsAt(
          [
            {
              type: Button,
              buttonText: 'New Button 0'
            },
            {
              type: Button,
              buttonText: 'New Button 1'
            },
            {
              type: Button,
              buttonText: 'New Button 2'
            }
          ],
          3
        );
      }, 3000);
      setTimeout(() => {
        this.tag('Column').prependItems([
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
      return this.tag('Column');
    }
  };
AddingItems.args = {
  itemSpacing: 20,
  scrollIndex: 0
};
AddingItems.argTypes = {
  itemSpacing: {
    control: { type: 'range', min: 0, max: 100, step: 5 }
  },
  scrollIndex: {
    control: 'number'
  }
};

export const RemovingItems = args =>
  class RemovingItems extends lng.Component {
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
          }))
        }
      };
    }

    _init() {
      super._init();
      setTimeout(() => {
        this.tag('Column').removeItemAt(1);
      }, 3000);
    }

    _getFocused() {
      return this.tag('Column');
    }
  };
RemovingItems.args = {
  itemSpacing: 20,
  scrollIndex: 0
};
RemovingItems.argTypes = {
  itemSpacing: {
    control: { type: 'range', min: 0, max: 100, step: 5 }
  },
  scrollIndex: {
    control: 'number'
  }
};
