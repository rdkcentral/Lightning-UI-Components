﻿/**
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

import lng from '@lightningjs/core';
import context from '../../globals/context/index.js';
import { flatten, getWidthByUpCount } from '../../utils';
import Row from '../Row';
import Tile from '../Tile';
import Button from '../Button';
import { default as ColumnComponent } from '.';
import { SignalButton } from '../../docs/story-components';

export default {
  title: 'Components/Column',
  parameters: {
    remountAll: true
  }
};

const columnHeight =
  context.theme.layout.screenH -
  2 * (context.theme.layout.marginY + context.theme.layout.gutterY);

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
            2 * (context.theme.layout.marginY + context.theme.layout.gutterY),
          scrollIndex: args.scrollIndex,
          items: createItems(Button, 20),
          waitForDimensions: args.waitForDimensions
        }
      };
    }
  };

Column.args = {
  scroll: 1,
  scrollIndex: 0,
  alwaysScroll: false,
  waitForDimensions: false
};

Column.argTypes = {
  scroll: {
    control: 'select',
    options: [1, 5, 15, 20],
    description: 'Scroll to selected index',
    table: { defaultValue: { summary: 'undefined' } }
  },
  scrollIndex: {
    control: { type: 'number', min: 0 },
    description:
      'Item index at which scrolling begins, provided the sum of item heights is greater than the height of the Column',
    table: { defaultValue: { summary: 0 } }
  },
  alwaysScroll: {
    control: 'boolean',
    description:
      'Determines whether the column will stop scrolling as it nears the bottom to prevent white space',
    table: { defaultValue: { summary: false } }
  },
  waitForDimensions: {
    control: 'boolean',
    description:
      "If true, the Column will wait for all child elements' w and h to be set before displaying the Column",
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

SkipFocus.args = {
  wrapSelected: false
};

SkipFocus.argTypes = {
  wrapSelected: {
    control: { type: 'boolean' },
    description:
      'Enables wrapping behavior, so selectNext() selects the first item if the current item is the last on the list and vice versa',
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
              items: createItems(Button, 2)
            },
            {
              ...createItems(Button, 1)[0],
              centerInParent: true
            }
          ]
        }
      };
    }
  };

CenteredInParent.parameters = {
  storyDetails:
    'Each Row in the Column has centerInParent set to true on it so is horizontally centered in the Column it is an item of.'
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
                  artwork: {
                    src: 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg'
                  }
                },
                {
                  type: Tile,
                  itemLayout: { ratioX: 16, ratioY: 9, upCount: 5 },
                  artwork: {
                    src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg'
                  }
                },
                {
                  type: Tile,
                  itemLayout: { ratioX: 16, ratioY: 9, upCount: 5 },
                  artwork: {
                    src: 'https://image.tmdb.org/t/p/w500/sQBS8MYXN9CZWV3gEDcL95G1KpA.jpg'
                  }
                },
                {
                  type: Tile,
                  itemLayout: { ratioX: 16, ratioY: 9, upCount: 5 },
                  artwork: {
                    src: 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg'
                  }
                },
                {
                  type: Tile,
                  itemLayout: { ratioX: 16, ratioY: 9, upCount: 5 },
                  artwork: {
                    src: 'https://image.tmdb.org/t/p/w500/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg'
                  }
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
                    src: 'https://image.tmdb.org/t/p/w500/m0iEEib19yHzyD8hLh09qkIWbwz.jpg'
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
                  artwork: {
                    src: 'https://image.tmdb.org/t/p/w500/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg'
                  }
                },
                {
                  type: Tile,
                  itemLayout: { ratioX: 16, ratioY: 9, upCount: 5 },
                  artwork: {
                    src: 'https://image.tmdb.org/t/p/w500/jauI01vUIkPA0xVsamGj0Gs1nNL.jpg'
                  }
                },
                {
                  type: Tile,
                  itemLayout: { ratioX: 16, ratioY: 9, upCount: 5 },
                  artwork: {
                    src: 'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg'
                  }
                },
                {
                  type: Tile,
                  itemLayout: { ratioX: 16, ratioY: 9, upCount: 5 },
                  artwork: {
                    src: 'https://image.tmdb.org/t/p/w500/yY76zq9XSuJ4nWyPDuwkdV7Wt0c.jpg'
                  }
                },
                {
                  type: Tile,
                  itemLayout: { ratioX: 16, ratioY: 9, upCount: 5 },
                  artwork: {
                    src: 'https://image.tmdb.org/t/p/w500/jauI01vUIkPA0xVsamGj0Gs1nNL.jpg'
                  }
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
          lazyUpCountBuffer: args.lazyUpCountBuffer,
          items: createItems(Button, 20),
          alwaysScroll: args.alwaysScroll
        }
      };
    }
  };
LazyUpCount.args = {
  scrollIndex: 0,
  lazyUpCount: 5,
  lazyUpCountBuffer: 2,
  itemTransition: 0.4,
  alwaysScroll: false,
  scroll: 1
};

LazyUpCount.argTypes = {
  itemTransition: {
    table: {
      disable: true // removes control from story
    }
  },
  scroll: {
    table: {
      disable: true // removes control from story
    }
  },
  scrollIndex: {
    control: { type: 'number', min: 0 },
    description:
      'Item index at which scrolling begins, provided the sum of item heights is greater than the height of the Column',
    table: { defaultValue: { summary: 0 } }
  },
  lazyUpCount: {
    control: 'number',
    description:
      'Used to calculate the number of items to display on the first render, see [Docs](?path=/docs/navigation-navigationmanager--row#properties) for more details. <br/> **NOTE: changing this value requires refreshing the story to see its effect.**',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  lazyUpCountBuffer: {
    control: 'number',
    description:
      'Used to calculate the number of items to display on the first render, see [Docs](?path=/docs/navigation-navigationmanager--row#properties) for more details. <br/> **NOTE: changing this value requires refreshing the story to see its effect.**',
    table: {
      defaultValue: { summary: 2 }
    }
  },
  alwaysScroll: {
    control: { type: 'boolean' },
    description:
      'Determines whether the column will stop scrolling as it nears the bottom to prevent white space',
    table: { defaultValue: { summary: false } }
  }
};
LazyUpCount.parameters = {
  storyDetails:
    'There are 20 items passed to this Column. The number of items that are initially rendered equals the sum of the lazyUpCount property and 2. Each time the next item is selected, an additional item is added to the end of the Column until all 20 items have been rendered.'
};

export const AddingItems = args =>
  class AddingItems extends lng.Component {
    static _template() {
      return {
        Column: {
          type: ColumnComponent,
          h: 500,
          scrollIndex: args.scrollIndex,
          lazyUpCount: args.lazyUpCount,
          lazyUpCountBuffer: args.lazyUpCountBuffer,
          signals: {
            append: 'appendButton',
            appendAt: 'appendButtonAt',
            prepend: 'prependButton'
          },
          items: [
            {
              type: SignalButton,
              title: 'Prepend 1 Button (prependItems)',
              signalName: 'prepend',
              passSignals: { prepend: true }
            },
            {
              type: SignalButton,
              title: 'Append 1 Button at index 1 (appendItemsAt)',
              signalName: 'appendAt',
              passSignals: { appendAt: true }
            },
            {
              type: SignalButton,
              title: 'Append 1 Button to the Row (appendItems)',
              signalName: 'append',
              passSignals: { append: true }
            }
          ]
        }
      };
    }

    prependButton() {
      this.tag('Column').prependItems([
        {
          type: Button,
          title: 'Prepended Button'
        }
      ]);
    }

    appendButtonAt() {
      this.tag('Column').appendItemsAt(
        [
          {
            type: Button,
            title: 'Appended Button at index 1'
          }
        ],
        1
      );
    }

    appendButton() {
      this.tag('Column').appendItems([
        {
          type: Button,
          title: 'Appended Button'
        }
      ]);
    }
  };
AddingItems.args = {
  scrollIndex: 0,
  lazyUpCountBuffer: 2
};
AddingItems.argTypes = {
  scrollIndex: {
    control: { type: 'number', min: 0 },
    description:
      'Item index at which scrolling begins, provided the sum of item heights is greater than the height of the Column',
    table: { defaultValue: { summary: 0 } }
  },
  lazyUpCount: {
    control: 'number',
    description:
      'Used to calculate the number of items to display on the first render, see [Docs](?path=/docs/navigation-navigationmanager--row#properties) for more details. <br/> **NOTE: changing this value requires refreshing the story to see its effect.**',
    table: {
      defaultValue: { summary: 'undefined' }
    }
  },
  lazyUpCountBuffer: {
    control: 'number',
    description:
      'Used to calculate the number of items to display on the first render, see [Docs](?path=/docs/navigation-navigationmanager--row#properties) for more details. <br/> **NOTE: changing this value requires refreshing the story to see its effect.**',
    table: {
      defaultValue: { summary: 2 }
    }
  }
};
AddingItems.parameters = {
  storyDetails:
    'The 3 buttons initially rendered in this story are configured to invoke 1 of the 3 methods available to add items to a Column (the name of the method used is in parenthesis on the button). Press enter on any of those 3 buttons to invoke that method and add a button to the Column.'
};

export const RemovingItems = args =>
  class RemovingItems extends lng.Component {
    static _template() {
      return {
        Column: {
          type: ColumnComponent,
          h: 500,
          scrollIndex: args.scrollIndex,
          signals: {
            removeAt: 'removeButton'
          },
          items: [
            ...createItems(Button, 2),
            {
              type: SignalButton,
              title: 'Press Enter on this button to remove it (removeItemAt)',
              signalName: 'removeAt',
              passSignals: { removeAt: true }
            }
          ]
        }
      };
    }

    removeButton() {
      this.tag('Column').removeItemAt(2);
    }
  };
RemovingItems.args = {
  scrollIndex: 0
};
RemovingItems.argTypes = {
  scrollIndex: {
    control: { type: 'number', min: 0 },
    description:
      'Item index at which scrolling begins, provided the sum of item heights is greater than the height of the Column',
    table: { defaultValue: { summary: 0 } }
  }
};
RemovingItems.parameters = {
  storyDetails:
    'The third button in this column is configured to invoke removeItemAt to remove that button. Focus on that button and press Enter to invoke that method and remove the button from the column.'
};
