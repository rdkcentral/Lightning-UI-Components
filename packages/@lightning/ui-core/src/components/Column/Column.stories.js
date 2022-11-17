import lng from '@lightningjs/core';
import { context } from '../../globals/index.js';
import { flatten, getWidthByUpCount } from '../../utils/index.js';
import { Row, Column as ColumnComponent, Tile, Button } from '../index.js';
import jurassic from '../../assets/images/Jurassic_World_16x9.jpg';
import mdx from './Column.mdx';
import parks from '../../assets/images/Parks_and_Recreation_16x9.jpg';
import person from '../../assets/images/cast.png';
import person1 from '../../assets/images/cast1.png';
import person2 from '../../assets/images/cast2.png';
import pets from '../../assets/images/The_Secret_Life_of_Pets_16x9.jpg';
import trolls from '../../assets/images/Trolls_World_Tour_16x9.jpg';
import { CATEGORIES } from 'lightning-ui-docs';

export default {
  title: `${CATEGORIES[64]}/Column`,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const columnHeight =
  context.theme.layout.screenH -
  2 * (context.theme.layout.marginY + context.theme.layout.gutterY.sm);

// creates an array of buttons to be used in Stories
const createItems = (buttonType, length, isVariedHeight, isDynamicWidth) => {
  return Array.from({ length }).map((_, i) => {
    const button = {
      type: buttonType,
      title: `Button ${i + 1}`
    };
    if (!isDynamicWidth) {
      button.fixed = true;
      button.w = 250;
    }
    if (isVariedHeight) {
      button.h = 40 + Math.floor(Math.random() * 100);
    }
    return button;
  });
};

export const Column = args =>
  class Column extends lng.Component {
    static _template() {
      return {
        Column: {
          type: ColumnComponent,
          h:
            context.theme.layout.screenH -
            2 *
              (context.theme.layout.marginY + context.theme.layout.gutterY.sm),
          scrollIndex: args.scrollIndex,
          items: createItems(Button, 20)
        }
      };
    }
  };
Column.argTypes = {
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
Column.parameters = {
  argActions: {
    scroll: function (index, component) {
      component.tag('Column').scrollTo(index - 1);
    }
  }
};

export const MultiColumn = () =>
  class MultiColumn extends lng.Component {
    static _template() {
      return {
        Row: {
          type: Row,
          items: [
            {
              type: ColumnComponent,
              h: columnHeight,
              autoResizeWidth: true,
              items: createItems(Button, 20)
            },
            {
              type: ColumnComponent,
              h: columnHeight,
              autoResizeWidth: true,
              items: createItems(Button, 20)
            }
          ]
        }
      };
    }
  };

export const Plinko = () =>
  class Plinko extends lng.Component {
    static _template() {
      return {
        Column: {
          type: ColumnComponent,
          plinko: true,
          items: [
            {
              type: Row,
              autoResizeHeight: true,
              autoResizeWidth: true,
              items: createItems(Button, 3)
            },
            {
              type: Row,
              autoResizeHeight: true,
              autoResizeWidth: true,
              items: createItems(Button, 3)
            }
          ]
        }
      };
    }
  };

export const VaryingItemHeight = () =>
  class VaryingItemHeight extends lng.Component {
    static _template() {
      return {
        Column: {
          type: ColumnComponent,
          h: columnHeight,
          items: createItems(Button, 10, true)
        }
      };
    }
  };

export const ExpandableHeightItems = () =>
  class ExpandableHeightItems extends lng.Component {
    static _template() {
      return {
        Column: {
          type: ColumnComponent,
          h: columnHeight,
          items: createItems(ExpandingButton, 15)
        }
      };
    }
  };

export const ExpandableHeightRows = () =>
  class ExpandableHeightItems extends lng.Component {
    static _template() {
      return {
        Column: {
          type: ColumnComponent,
          h: columnHeight,
          plinko: true,
          items: Array.apply(null, { length: 15 }).map(() => ({
            type: Row,
            autoResizeHeight: true,
            w: getWidthByUpCount(context.theme, 1),
            items: createItems(ExpandingButton, 3)
          }))
        }
      };
    }
  };

export const SkipFocus = args =>
  class SkipFocus extends lng.Component {
    static _template() {
      return {
        Column: {
          type: ColumnComponent,
          h: columnHeight,
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
              return { type: Button, title: 'Button' };
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

export const OnScreenEffect = () =>
  class OnScreenEffect extends lng.Component {
    static _template() {
      return {
        Column: {
          type: ColumnComponent,
          scrollIndex: 2,
          h: columnHeight,
          items: createItems(Button, 10)
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
  };

export const StickyTitle = () => {
  const items = flatten(
    Array.apply(null, { length: 5 }).map((_, i) => {
      const headerText = `Sticky Header ${i}`;
      const items = Array.apply(null, { length: 8 }).map((_, i) => {
        return {
          type: Button,
          title: `Button ${i + 1}`,
          fixed: true,
          w: 250,
          headerText
        };
      });

      return [
        {
          type: ColumnHeader,
          headerText,
          h: 40,
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
        Column: {
          y: 50,
          h: 400,
          autoResizeWidth: true,
          clipping: true,
          type: ColumnComponent,
          items,
          signals: {
            selectedChange: '_updateHeader'
          }
        },
        ColumnHeader: {
          type: ColumnHeader,
          headerText: 'Sticky Header 0',
          h: 40
        }
      };
    }

    _updateHeader(selected) {
      this.tag('ColumnHeader').headerText = selected.headerText || '';
    }
  };
};

export const CenteredInParent = () =>
  class CenteredInParent extends lng.Component {
    static _template() {
      return {
        Column: {
          type: ColumnComponent,
          autoResizeWidth: true,
          items: [
            {
              type: Row,
              autoResizeWidth: true,
              autoResizeHeight: true,
              items: createItems(Button, 3)
            },
            {
              type: Row,
              autoResizeWidth: true,
              autoResizeHeight: true,
              centerInParent: true,
              items: createItems(Button, 1)
            }
          ]
        }
      };
    }
  };

class ColumnHeader extends lng.Component {
  static _template() {
    return {
      Label: {
        x: 5,
        y: 10,
        text: {
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

  set headerText(text) {
    this.tag('Label').text.text = text;
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

class ExpandingButton extends Button {
  _init() {
    this.h = 80;
    super._init();
    this.fireAncestors('$itemChanged');
  }

  _focus() {
    super._focus();
    this.smooth = { h: 120 };
    this.fireAncestors('$itemChanged');
  }

  _unfocus() {
    super._unfocus();
    this.smooth = { h: 80 };
    this.fireAncestors('$itemChanged');
  }
}

export const SkipPlinko = () =>
  class SkipPlinko extends lng.Component {
    static _template() {
      return {
        Column: {
          type: ColumnComponent,
          w: getWidthByUpCount(context.theme, 1),
          plinko: true,
          items: [
            {
              type: Row,
              autoResizeHeight: true,
              items: [
                {
                  type: Tile,
                  itemLayout: { ratioX: 16, ratioY: 9, upCount: 5 },
                  artwork: { src: parks }
                },
                {
                  type: Tile,
                  itemLayout: { ratioX: 16, ratioY: 9, upCount: 5 },
                  artwork: { src: person }
                },
                {
                  type: Tile,
                  itemLayout: { ratioX: 16, ratioY: 9, upCount: 5 },
                  artwork: { src: trolls }
                },
                {
                  type: Tile,
                  itemLayout: { ratioX: 16, ratioY: 9, upCount: 5 },
                  artwork: { src: parks }
                },
                {
                  type: Tile,
                  itemLayout: { ratioX: 16, ratioY: 9, upCount: 5 },
                  artwork: { src: person }
                }
              ]
            },
            {
              type: Row,
              autoResizeHeight: true,
              skipPlinko: true,
              items: [
                {
                  type: Tile,
                  itemLayout: { ratioX: 4, ratioY: 1, upCount: 1 },
                  artwork: {
                    src: pets
                  },
                  metadata: {
                    title: 'Row with skipPlinko set to true'
                  },
                  persistentMetadata: true
                }
              ]
            },
            {
              type: Row,
              autoResizeHeight: true,
              items: [
                {
                  type: Tile,
                  itemLayout: { ratioX: 16, ratioY: 9, upCount: 5 },
                  artwork: { src: person2 }
                },
                {
                  type: Tile,
                  itemLayout: { ratioX: 16, ratioY: 9, upCount: 5 },
                  artwork: { src: jurassic }
                },
                {
                  type: Tile,
                  itemLayout: { ratioX: 16, ratioY: 9, upCount: 5 },
                  artwork: { src: person1 }
                },
                {
                  type: Tile,
                  itemLayout: { ratioX: 16, ratioY: 9, upCount: 5 },
                  artwork: { src: person2 }
                },
                {
                  type: Tile,
                  itemLayout: { ratioX: 16, ratioY: 9, upCount: 5 },
                  artwork: { src: jurassic }
                }
              ]
            }
          ]
        }
      };
    }
  };

export const LazyUpCount = args =>
  class LazyUpCount extends lng.Component {
    static _template() {
      return {
        Column: {
          type: ColumnComponent,
          h: 500,
          scrollIndex: args.scrollIndex,
          lazyUpCount: args.lazyUpCount,
          items: createItems(Button, 20),
          alwaysScroll: args.alwaysScroll
        }
      };
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

export const AddingItems = args =>
  class AddingItems extends lng.Component {
    static _template() {
      return {
        Column: {
          type: ColumnComponent,
          h: 500,
          scrollIndex: args.scrollIndex,
          items: createItems(Button, 20, false, true)
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
              title: 'New Button 0'
            },
            {
              type: Button,
              title: 'New Button 1'
            },
            {
              type: Button,
              title: 'New Button 2'
            }
          ],
          3
        );
      }, 3000);

      setTimeout(() => {
        this.tag('Column').prependItems([
          {
            type: Button,
            title: 'New Button 3'
          },
          {
            type: Button,
            title: 'New Button 4'
          },
          {
            type: Button,
            title: 'New Button 5'
          }
        ]);
      }, 3750);
    }
  };
AddingItems.args = {
  scrollIndex: 0
};
AddingItems.argTypes = {
  scrollIndex: {
    control: 'number'
  }
};

export const RemovingItems = args =>
  class RemovingItems extends lng.Component {
    static _template() {
      return {
        Column: {
          type: ColumnComponent,
          h: 500,
          scrollIndex: args.scrollIndex,
          items: createItems(Button, 20, false, true)
        }
      };
    }

    _init() {
      super._init();
      this.tag('Column').items[1].title = 'To Be Removed';
      setTimeout(() => {
        this.tag('Column').removeItemAt(1);
      }, 3000);
    }
  };
RemovingItems.args = {
  scrollIndex: 0
};
RemovingItems.argTypes = {
  scrollIndex: {
    control: 'number'
  }
};
