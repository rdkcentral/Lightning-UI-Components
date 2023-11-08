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
import { getWidthByUpCount } from '../../utils';
import { default as RowComponent } from '.';
import Column from '../Column';
import { context } from '../../globals';
import { createModeControl } from '../../docs/utils';
import { SignalButton } from '../../docs/story-components';
import Button from '../Button';

export default {
  title: 'Components/Row',
  parameters: {
    remountAll: true
  }
};

/**
 * Shared Args and Arg Types for Stories
 */
const sharedArgs = {
  alwaysScroll: false,
  lazyScroll: false,
  neverScroll: false,
  scrollIndex: 0,
  mode: 'focused'
};

const sharedArgTypes = {
  ...createModeControl({ summaryValue: 'focused' }),
  scrollIndex: {
    control: { type: 'number', min: 0 },
    description:
      'Item index at which scrolling begins, provided the sum of item widths is greater than the width of the Row',
    table: { defaultValue: { summary: 0 } }
  },
  alwaysScroll: {
    control: 'boolean',
    description:
      'Determines whether the row will stop scrolling as it nears the right to prevent white space',
    table: { defaultValue: { summary: false } }
  },
  neverScroll: {
    control: 'boolean',
    description:
      'If true, the row will never scroll, unless alwaysScroll is set to true, and if false, the row will apply normal scrolling logic',
    table: { defaultValue: { summary: false } }
  },
  lazyScroll: {
    control: 'boolean',
    description:
      'Will only scroll the row if the item is off screen and alwaysScroll and neverScroll are both false',
    table: { defaultValue: { summary: false } }
  }
};

// creates an array of buttons to be used in Stories
const createItems = (buttonType, length, isVariedWidth = false) => {
  return Array.from({ length }).map((_, i) => ({
    type: buttonType,
    title: `Button ${i + 1}`,
    ...(isVariedWidth
      ? {
          fixed: true,
          w: 200 + Math.floor(Math.random() * 100)
        }
      : {})
  }));
};

class ExpandingButton extends Button {
  _construct() {
    super._construct();
    this.fixed = true;
    this.w = 250;
  }
  _focus() {
    super._focus();
    this.smooth = { w: 350 };
  }

  _unfocus() {
    super._unfocus();
    this.smooth = { w: 250 };
  }
}

class ExpandingHeightButton extends Button {
  _focus() {
    super._focus();
    this.smooth = { h: 150 };
    this.fireAncestors('$itemChanged');
  }

  _unfocus() {
    super._unfocus();
    this.smooth = { h: 75 };
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
    this.tag('Label').on('txLoaded', () => {
      this.w = this.tag('Label').renderWidth;
      this.h = this.tag('Label').renderHeight;
      this.fireAncestors('$itemChanged');
    });
  }

  set titleText(titleText) {
    this.tag('Label').text = titleText;
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
          items: createItems(Button, 12)
        }
      };
    }
  };

Row.args = sharedArgs;
Row.argTypes = sharedArgTypes;

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
          items: createItems(Button, 10, {
            fixed: true,
            w: 200 + Math.floor(Math.random() * 100)
          })
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
      return {
        Row: {
          type: RowComponent,
          autoResizeHeight: true,
          w: getWidthByUpCount(context.theme, 1),
          items: [
            {
              type: Column,
              autoResizeWidth: true,
              autoResizeHeight: true,
              items: createItems(Button, 3)
            },
            {
              type: Column,
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
CenteredInParent.parameters = {
  storyDetails:
    'This Row has 2 Columns as items. The second Column with 1 Button as an item has the centerInParent property enabled so it is vertically centered in the Row.'
};

export const Plinko = () => {
  return class Plinko extends lng.Component {
    static _template() {
      const skipFocusButtons = createItems(Button, 3);
      skipFocusButtons[1].skipFocus = true;
      skipFocusButtons[1].title = 'Skip Focus';
      return {
        Row: {
          type: RowComponent,
          w: getWidthByUpCount(context.theme, 1),
          autoResizeHeight: true,
          plinko: true,
          items: [
            {
              type: Column,
              autoResizeWidth: true,
              items: createItems(Button, 3)
            },
            {
              type: Column,
              autoResizeWidth: true,
              items: skipFocusButtons
            },
            {
              type: Column,
              autoResizeWidth: true,
              items: createItems(Button, 3)
            },
            {
              type: Column,
              autoResizeWidth: true,
              items: createItems(Button, 3)
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
        Row: {
          type: RowComponent,
          w: getWidthByUpCount(context.theme, 1),
          wrapSelected: args.wrapSelected,
          items: [
            ...Array.apply(null, { length: 13 }).map((_, i) => {
              if (i % 4 === 0)
                return {
                  type: Title,
                  titleText: 'Skip Focus Text',
                  skipFocus: true
                };
              return { type: Button, title: 'Button' };
            }),
            {
              type: Title,
              titleText: 'Skip Focus Text',
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
    control: 'boolean',
    description:
      'Enables wrapping behavior, so selectNext() selects the first item if the current item is the last on the list and vice versa',
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
            type: Button,
            title: `Button ${i + 1} ${
              i === startLazyScrollIndex ? '(start lazy scroll)' : ''
            } ${i === stopLazyScrollIndex ? '(stop lazy scroll)' : ''}`
          })),
          startLazyScrollIndex,
          stopLazyScrollIndex
        }
      };
    }
  };
LazyScrollIndexes.args = {
  ...sharedArgs,
  lazyScroll: true,
  startLazyScrollIndex: 1,
  stopLazyScrollIndex: 10
};
LazyScrollIndexes.argTypes = {
  ...sharedArgTypes,
  startLazyScrollIndex: {
    control: 'number',
    description:
      'Index of item in items, and items thereafter, at which lazy scrolling should occur at',
    table: { defaultValue: { summary: 0 } }
  },
  stopLazyScrollIndex: {
    control: 'number',
    description:
      'Index of item in items, and items preceding, at which lazy scrolling should occur',
    table: { defaultValue: { summary: 0 } }
  }
};
LazyScrollIndexes.parameters = {
  storyDetails:
    'Items before the item at startLazyScrollIndex and after the item at stopLazyScrollIndex will use alwaysScroll. Items at and between startLazyScrollIndex and stopLazyScrollIndex will use lazyScroll.'
};

export const AddingItems = args =>
  class AddingItems extends lng.Component {
    static _template() {
      return {
        Row: {
          type: RowComponent,
          w: getWidthByUpCount(context.theme, 1), // x offset from preview.js * 2
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
      this.tag('Row').prependItems([
        {
          type: Button,
          title: 'Prepended Button'
        }
      ]);
    }

    appendButtonAt() {
      this.tag('Row').appendItemsAt(
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
      this.tag('Row').appendItems([
        {
          type: Button,
          title: 'Appended Button'
        }
      ]);
    }
  };
AddingItems.args = {
  ...sharedArgs,
  lazyUpCount: undefined,
  lazyUpCountBuffer: 2
};
AddingItems.argTypes = {
  ...sharedArgTypes,
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
    'The 3 buttons initially rendered in this story are configured to invoke 1 of the 3 methods available to add items to a Row (the name of the method used is in parenthesis on the button). Press enter on any of those 3 buttons to invoke that method and add a button to the Row.'
};

export const LazyUpCount = args =>
  class LazyUpCount extends lng.Component {
    static _template() {
      return {
        Row: {
          type: RowComponent,
          w: getWidthByUpCount(context.theme, 1), // x offset from preview.js * 2
          lazyUpCount: args.lazyUpCount,
          lazyUpCountBuffer: args.lazyUpCountBuffer,
          items: createItems(Button, 12)
        }
      };
    }
  };
LazyUpCount.args = {
  ...sharedArgs,
  lazyUpCount: 5,
  lazyUpCountBuffer: 2
};
LazyUpCount.argTypes = {
  ...sharedArgTypes,
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
LazyUpCount.parameters = {
  storyDetails:
    'There are 12 items passed to this Row. The number of items that are initially rendered equals the sum of the lazyUpCount and the lazyUpCountBuffer properties. Each time the next item is selected, an additional item is added to the end of the Row until all 12 items have been rendered.'
};

export const RemovingItems = () =>
  class RemovingItems extends lng.Component {
    static _template() {
      return {
        Row: {
          type: RowComponent,
          w: getWidthByUpCount(context.theme, 1), // x offset from preview.js * 2
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
      this.tag('Row').removeItemAt(2);
    }
  };
RemovingItems.args = {
  ...sharedArgs
};
RemovingItems.argTypes = {
  ...sharedArgTypes
};
RemovingItems.parameters = {
  storyDetails:
    'The third button in this row is configured to invoke removeItemAt to remove that button. Focus on that button and press Enter to invoke that method and remove the button from the row.'
};
